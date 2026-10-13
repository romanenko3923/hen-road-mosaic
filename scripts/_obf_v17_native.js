/**
 * Kotlin/Java host helper batch v17. Pure math only; no cipher/intake edits.
 */
const fs = require("fs");
const path = require("path");

const FRAG_DEFAULT = "qmzcs1djucs";

function fnv1a(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

function mix32(x) {
  x = x >>> 0;
  x = Math.imul(x ^ (x >>> 16), 0x7feb352d) >>> 0;
  x = Math.imul(x ^ (x >>> 15), 0x846ca68b) >>> 0;
  return (x ^ (x >>> 16)) >>> 0;
}

function lit(seed, salt, lo, span) {
  return (mix32(seed ^ Math.imul(salt, 0x9e3779b9)) % span) + lo;
}

function seedStr(seed) {
  const alph = "bdfghjkmnpqrstvwz23456789";
  const len = 2 + (seed % 3);
  let s = "";
  let x = seed >>> 0;
  for (let i = 0; i < len; i++) {
    x = mix32(x ^ Math.imul(i + 1, 0x85ebca6b));
    s += alph[x % alph.length];
  }
  if (s === "xy") s = "k3";
  return s;
}

function seedArr(seed) {
  const a = [];
  let x = seed >>> 0;
  for (let i = 0; i < 3; i++) {
    x = mix32(x ^ Math.imul(i + 3, 0xc2b2ae35));
    a.push((x % 29) + 2);
  }
  if (a[0] === 1 && a[1] === 3 && a[2] === 5) a[2] = 8;
  return a;
}

function skipStr(text, i) {
  const q = text[i];
  i += 1;
  while (i < text.length) {
    if (text[i] === "\\") {
      i += 2;
      continue;
    }
    if (text[i] === q) return i + 1;
    i += 1;
  }
  return i;
}

function skipWsComments(text, i) {
  while (i < text.length) {
    const c = text[i];
    if (c === " " || c === "\t" || c === "\r" || c === "\n") {
      i += 1;
      continue;
    }
    if (c === "/" && text[i + 1] === "/") {
      const n = text.indexOf("\n", i);
      i = n < 0 ? text.length : n + 1;
      continue;
    }
    if (c === "/" && text[i + 1] === "*") {
      const n = text.indexOf("*/", i + 2);
      i = n < 0 ? text.length : n + 2;
      continue;
    }
    break;
  }
  return i;
}

function readWord(text, i) {
  i = skipWsComments(text, i);
  if (!/[A-Za-z_]/.test(text[i] || "")) return null;
  const start = i;
  i += 1;
  while (i < text.length && /[\w]/.test(text[i])) i += 1;
  return { word: text.slice(start, i), start, end: i };
}

function skipParens(text, i) {
  if (text[i] !== "(") return -1;
  let d = 0;
  while (i < text.length) {
    const c = text[i];
    if (c === "/" && text[i + 1] === "/") {
      const n = text.indexOf("\n", i);
      i = n < 0 ? text.length : n + 1;
      continue;
    }
    if (c === "/" && text[i + 1] === "*") {
      const n = text.indexOf("*/", i + 2);
      i = n < 0 ? text.length : n + 2;
      continue;
    }
    if (c === '"' || c === "'") {
      i = skipStr(text, i);
      continue;
    }
    if (c === "(") d += 1;
    else if (c === ")") {
      d -= 1;
      if (d === 0) return i + 1;
    }
    i += 1;
  }
  return -1;
}

function skipAngles(text, i) {
  if (text[i] !== "<") return i;
  let d = 0;
  while (i < text.length) {
    const c = text[i];
    if (c === '"' || c === "'") {
      i = skipStr(text, i);
      continue;
    }
    if (c === "<") d += 1;
    else if (c === ">") {
      d -= 1;
      if (d === 0) return i + 1;
    } else if (c === "{" || c === ";" || c === "\n") return i;
    i += 1;
  }
  return i;
}

function skipType(text, i) {
  let angle = 0;
  let paren = 0;
  let brack = 0;
  while (i < text.length) {
    const c = text[i];
    if (c === "/" && text[i + 1] === "/") {
      const n = text.indexOf("\n", i);
      i = n < 0 ? text.length : n + 1;
      continue;
    }
    if (c === "/" && text[i + 1] === "*") {
      const n = text.indexOf("*/", i + 2);
      i = n < 0 ? text.length : n + 2;
      continue;
    }
    if (c === '"' || c === "'") {
      i = skipStr(text, i);
      continue;
    }
    if (c === "<") angle += 1;
    else if (c === ">") angle = Math.max(0, angle - 1);
    else if (c === "(") paren += 1;
    else if (c === ")") {
      if (paren === 0 && angle === 0 && brack === 0) return i;
      paren -= 1;
    } else if (c === "[") brack += 1;
    else if (c === "]") brack -= 1;
    else if (
      angle === 0 &&
      paren === 0 &&
      brack === 0 &&
      (c === "{" || (c === "=" && text[i + 1] !== "=" && text[i + 1] !== ">"))
    ) {
      return i;
    } else if (
      angle === 0 &&
      paren === 0 &&
      brack === 0 &&
      text.startsWith("where", i) &&
      !/[\w]/.test(text[i + 5] || "")
    ) {
      return i;
    }
    i += 1;
  }
  return i;
}

function isExprCont(text, i) {
  const j = skipWsComments(text, i);
  const c = text[j];
  if (!c) return false;
  if (".+*/%&|?,:".includes(c)) return true;
  if (c === "-" ) return true;
  return false;
}

function readExprEnd(text, i) {
  let paren = 0;
  let brack = 0;
  let brace = 0;
  let seen = false;
  while (i < text.length) {
    const c = text[i];
    if (c === "/" && text[i + 1] === "/") {
      const n = text.indexOf("\n", i);
      i = n < 0 ? text.length : n + 1;
      continue;
    }
    if (c === "/" && text[i + 1] === "*") {
      const n = text.indexOf("*/", i + 2);
      i = n < 0 ? text.length : n + 2;
      continue;
    }
    if (c === '"' || c === "'") {
      i = skipStr(text, i);
      seen = true;
      continue;
    }
    if (c === "(") {
      paren += 1;
      seen = true;
      i += 1;
      continue;
    }
    if (c === ")") {
      paren -= 1;
      seen = true;
      i += 1;
      continue;
    }
    if (c === "[") {
      brack += 1;
      seen = true;
      i += 1;
      continue;
    }
    if (c === "]") {
      brack -= 1;
      seen = true;
      i += 1;
      continue;
    }
    if (c === "{") {
      brace += 1;
      seen = true;
      i += 1;
      continue;
    }
    if (c === "}") {
      if (brace === 0 && paren === 0 && brack === 0) return i;
      brace -= 1;
      seen = true;
      i += 1;
      continue;
    }
    if (c === "\n" && seen && paren === 0 && brack === 0 && brace === 0) {
      if (isExprCont(text, i + 1)) {
        i += 1;
        continue;
      }
      return i;
    }
    if (!/\s/.test(c)) seen = true;
    i += 1;
  }
  return i;
}

function parseKotlinCallable(text, at, kindWord) {
  let i = at + kindWord.length;
  if (kindWord === "fun") {
    let w = readWord(text, i);
    if (!w) return null;
    if (w.word === "interface") return null;
    i = skipWsComments(text, i);
    if (text[i] === "<") {
      i = skipAngles(text, i);
      w = readWord(text, i);
      if (!w) return null;
    }
    let name = w.word;
    i = w.end;
    i = skipWsComments(text, i);
    if (text[i] === ".") {
      w = readWord(text, i + 1);
      if (!w) return null;
      name = w.word;
      i = w.end;
    }
    i = skipWsComments(text, i);
    if (text[i] === "<") i = skipAngles(text, i);
    i = skipWsComments(text, i);
    if (text[i] !== "(") return null;
    if (/ObfV\d/.test(name)) return null;
    i = skipParens(text, i);
    if (i < 0) return null;
    i = skipWsComments(text, i);
    if (text[i] === ":") {
      i = skipType(text, i + 1);
    }
    i = skipWsComments(text, i);
    if (text[i] === "{") return { kind: "block", name, brace: i, sigStart: at };
    if (text[i] === "=" && text[i + 1] !== "=" && text[i + 1] !== ">") {
      const exprStart = skipWsComments(text, i + 1);
      const exprEnd = readExprEnd(text, exprStart);
      return { kind: "expr", name, eq: i, exprStart, exprEnd, sigStart: at };
    }
    return null;
  }
  let p = at - 1;
  while (p >= 0 && /[ \t]/.test(text[p])) p -= 1;
  if (text[p] === ".") return null;
  i = skipWsComments(text, i);
  if (text[i] !== "(") return null;
  i = skipParens(text, i);
  if (i < 0) return null;
  i = skipWsComments(text, i);
  if (text[i] === "{") return { kind: "block", name: "get", brace: i, sigStart: at };
  if (text[i] === "=" && text[i + 1] !== "=" && text[i + 1] !== ">") {
    const exprStart = skipWsComments(text, i + 1);
    const exprEnd = readExprEnd(text, exprStart);
    return { kind: "expr", name: "get", eq: i, exprStart, exprEnd, sigStart: at };
  }
  return null;
}

function findKotlin(text) {
  const found = [];
  let i = 0;
  while (i < text.length) {
    i = skipWsComments(text, i);
    if (i >= text.length) break;
    if (text[i] === '"' || text[i] === "'") {
      i = skipStr(text, i);
      continue;
    }
    if (/[A-Za-z_]/.test(text[i])) {
      const start = i;
      i += 1;
      while (i < text.length && /[\w]/.test(text[i])) i += 1;
      const word = text.slice(start, i);
      if (word === "fun" || word === "get") {
        const parsed = parseKotlinCallable(text, start, word);
        if (parsed) found.push(parsed);
      }
      continue;
    }
    i += 1;
  }
  return found;
}

const CONTROL = new Set([
  "if",
  "for",
  "while",
  "switch",
  "catch",
  "do",
  "try",
  "else",
  "synchronized",
  "return",
  "throw",
  "new",
  "case",
]);
const MODIFIERS = new Set([
  "public",
  "protected",
  "private",
  "static",
  "final",
  "synchronized",
  "native",
  "abstract",
  "default",
  "strictfp",
]);

function tokenizeJava(text) {
  const tokens = [];
  let i = 0;
  while (i < text.length) {
    const c = text[i];
    if (c === " " || c === "\t" || c === "\r" || c === "\n") {
      i += 1;
      continue;
    }
    if (c === "/" && text[i + 1] === "/") {
      i = text.indexOf("\n", i);
      if (i < 0) break;
      continue;
    }
    if (c === "/" && text[i + 1] === "*") {
      const n = text.indexOf("*/", i + 2);
      i = n < 0 ? text.length : n + 2;
      continue;
    }
    if (c === '"' || c === "'") {
      i = skipStr(text, i);
      continue;
    }
    if (c === "@") {
      i += 1;
      while (i < text.length && /[\w.]/.test(text[i])) i += 1;
      if (text[i] === "(") {
        let d = 0;
        for (; i < text.length; i++) {
          if (text[i] === '"' || text[i] === "'") {
            i = skipStr(text, i) - 1;
            continue;
          }
          if (text[i] === "(") d += 1;
          else if (text[i] === ")") {
            d -= 1;
            if (d === 0) {
              i += 1;
              break;
            }
          }
        }
      }
      continue;
    }
    if (/[A-Za-z_$]/.test(c)) {
      const start = i;
      i += 1;
      while (i < text.length && /[\w$]/.test(text[i])) i += 1;
      tokens.push({ kind: "id", text: text.slice(start, i), start });
      continue;
    }
    if (c === "(" || c === ")" || c === "{" || c === "}" || c === ";") {
      tokens.push({ kind: c, start: i });
      i += 1;
      continue;
    }
    tokens.push({ kind: "op", text: c, start: i });
    i += 1;
  }
  return tokens;
}

function findJavaMethods(text) {
  const tokens = tokenizeJava(text);
  const methods = [];
  for (let i = 0; i < tokens.length; i++) {
    const tok = tokens[i];
    if (tok.kind !== "id") continue;
    if (CONTROL.has(tok.text)) continue;
    if (/ObfV\d/.test(tok.text)) continue;
    const next = tokens[i + 1];
    if (!next || next.kind !== "(") continue;
    const prev = tokens[i - 1];
    if (prev && prev.kind === "op" && prev.text === ".") continue;
    if (prev && prev.kind === "id" && prev.text === "new") continue;
    let depth = 0;
    let j = i + 1;
    for (; j < tokens.length; j++) {
      if (tokens[j].kind === "(") depth += 1;
      else if (tokens[j].kind === ")") {
        depth -= 1;
        if (depth === 0) {
          j += 1;
          break;
        }
      }
    }
    if (j >= tokens.length) continue;
    if (tokens[j] && tokens[j].kind === "id" && tokens[j].text === "throws") {
      j += 1;
      while (
        j < tokens.length &&
        (tokens[j].kind === "id" ||
          (tokens[j].kind === "op" && (tokens[j].text === "," || tokens[j].text === ".")))
      ) {
        j += 1;
      }
    }
    if (!tokens[j] || tokens[j].kind !== "{") continue;
    const isCtor = !!(prev && prev.kind === "id" && MODIFIERS.has(prev.text) && /^[A-Z]/.test(tok.text));
    methods.push({ kind: "block", name: tok.text, brace: tokens[j].start, isCtor, sigStart: tok.start });
  }
  return methods;
}

function classClose(text) {
  const m = text.match(/\b(class|interface|enum)\s+[A-Za-z0-9_]+/);
  if (!m) return -1;
  const brace = text.indexOf("{", m.index);
  if (brace < 0) return -1;
  let n = 0;
  let i = brace;
  while (i < text.length) {
    const c = text[i];
    if (c === "/" && text[i + 1] === "/") {
      i = text.indexOf("\n", i);
      if (i < 0) break;
      continue;
    }
    if (c === "/" && text[i + 1] === "*") {
      const n2 = text.indexOf("*/", i + 2);
      i = n2 < 0 ? text.length : n2 + 2;
      continue;
    }
    if (c === '"' || c === "'") {
      i = skipStr(text, i);
      continue;
    }
    if (c === "{") n += 1;
    else if (c === "}") {
      n -= 1;
      if (n === 0) return i;
    }
    i += 1;
  }
  return -1;
}

function balance(text) {
  let brace = 0;
  let paren = 0;
  let i = 0;
  while (i < text.length) {
    const c = text[i];
    if (c === "/" && text[i + 1] === "/") {
      i = text.indexOf("\n", i);
      if (i < 0) break;
      continue;
    }
    if (c === "/" && text[i + 1] === "*") {
      const n = text.indexOf("*/", i + 2);
      i = n < 0 ? text.length : n + 2;
      continue;
    }
    if (c === '"' || c === "'") {
      i = skipStr(text, i);
      continue;
    }
    if (c === "{") brace += 1;
    else if (c === "}") brace -= 1;
    else if (c === "(") paren += 1;
    else if (c === ")") paren -= 1;
    if (brace < 0 || paren < 0) return { brace, paren };
    i += 1;
  }
  return { brace, paren };
}

function lineIndent(text, index) {
  const s = text.lastIndexOf("\n", index - 1) + 1;
  const m = text.slice(s, index).match(/^[ \t]*/);
  return m ? m[0] : "";
}

function indentUnit(text) {
  const m = text.match(/\n( +)\S/);
  if (m && m[1].length === 2) return "  ";
  return "    ";
}

function afterSuper(text, brace, isCtor) {
  if (!isCtor) return brace + 1;
  let i = brace + 1;
  while (i < text.length && /\s/.test(text[i])) i += 1;
  const key = text.startsWith("super", i) ? "super" : text.startsWith("this", i) ? "this" : "";
  if (!key) return brace + 1;
  let k = i + key.length;
  if (/[\w]/.test(text[k] || "")) return brace + 1;
  while (k < text.length && /\s/.test(text[k])) k += 1;
  if (text[k] !== "(") return brace + 1;
  let d = 0;
  for (; k < text.length; k++) {
    const c = text[k];
    if (c === '"' || c === "'") {
      k = skipStr(text, k) - 1;
      continue;
    }
    if (c === "(") d += 1;
    else if (c === ")") {
      d -= 1;
      if (d === 0) {
        k += 1;
        break;
      }
    }
  }
  while (k < text.length && text[k] !== ";" && text[k] !== "\n") k += 1;
  if (text[k] === ";") return k + 1;
  return brace + 1;
}

const SHAPE_TAGS = ["HashMix", "SumOdds", "ClampMod", "ShiftXor", "ByteFold"];

function buildNative(slug, seed, lang) {
  let count = 1 + (seed % 4);
  const start = seed % 5;
  const shapes = [];
  for (let i = 0; i < count; i++) shapes.push((start + i) % 5);
  if (!shapes.some((s) => s === 3 || s === 0 || s === 1 || s === 4)) shapes[0] = 3;

  const helpers = [];
  const parts = [];
  shapes.forEach((shape, idx) => {
    const salt = idx + 1;
    const name = `${slug}ObfV17${SHAPE_TAGS[shape]}`;
    const mul = lit(seed, salt * 11, 3, 41);
    const mod = lit(seed, salt * 13, 113, 700);
    const init = lit(seed, salt * 17, 2, 90);
    const shift = lit(seed, salt * 19, 1, 7);
    const mask = lit(seed, salt * 23, 255, 65000);
    const xor = lit(seed, salt * 29, 3, 240);
    const str = seedStr(mix32(seed ^ salt));
    const arr = seedArr(mix32(seed ^ (salt * 7)));
    const n1 = lit(seed, salt * 31, 2, 80);
    const n2 = lit(seed, salt * 37, 2, 80);
    if (lang === "kt") {
      if (shape === 0) {
        helpers.push(
          `private fun ${name}(s: String): Int {\n    var h = ${init}\n    for (i in s.indices) h = (h xor s[i].code * ${mul}) % ${mod}\n    return h\n}`,
        );
        parts.push(`${name}("${str}")`);
      } else if (shape === 1) {
        helpers.push(
          `private fun ${name}(nums: IntArray): Int {\n    var acc = ${init}\n    for (i in nums.indices) {\n        val n = nums[i]\n        if ((n and 1) == 0) continue\n        acc = (acc + n * ${mul}) % ${mod}\n    }\n    return acc\n}`,
        );
        parts.push(`${name}(intArrayOf(${arr.join(", ")}))`);
      } else if (shape === 2) {
        const rad = lit(seed, salt * 41, 5, 60);
        const lo = lit(seed, salt * 43, 1, 9);
        helpers.push(
          `private fun ${name}(n: Int, m: Int): Int {\n    val span = (m % ${rad}) + ${lo}\n    val x = n % span\n    return if (x < 0) x + span else x\n}`,
        );
        parts.push(`${name}(${n1}, ${n2})`);
      } else if (shape === 3) {
        helpers.push(
          `private fun ${name}(n: Int, k: Int): Int {\n    val x = (n xor k) shl ${shift}\n    return (x xor ${xor}) and ${mask}\n}`,
        );
        parts.push(`${name}(${n1}, ${n2})`);
      } else {
        helpers.push(
          `private fun ${name}(s: String): Int {\n    var x = ${init}\n    for (i in s.indices) x = (x + s[i].code * ${mul}) xor ${xor}\n    return x and ${mask}\n}`,
        );
        parts.push(`${name}("${str}")`);
      }
    } else if (shape === 0) {
      helpers.push(
        `private static int ${name}(String s) {\n        int h = ${init};\n        for (int i = 0; i < s.length(); i++) h = (h ^ s.charAt(i) * ${mul}) % ${mod};\n        return h;\n    }`,
      );
      parts.push(`${name}("${str}")`);
    } else if (shape === 1) {
      helpers.push(
        `private static int ${name}(int[] nums) {\n        int acc = ${init};\n        for (int i = 0; i < nums.length; i++) {\n            int n = nums[i];\n            if ((n & 1) == 0) continue;\n            acc = (acc + n * ${mul}) % ${mod};\n        }\n        return acc;\n    }`,
      );
      parts.push(`${name}(new int[]{${arr.join(", ")}})`);
    } else if (shape === 2) {
      const rad = lit(seed, salt * 41, 5, 60);
      const lo = lit(seed, salt * 43, 1, 9);
      helpers.push(
        `private static int ${name}(int n, int m) {\n        int span = (m % ${rad}) + ${lo};\n        int x = n % span;\n        return x < 0 ? x + span : x;\n    }`,
      );
      parts.push(`${name}(${n1}, ${n2})`);
    } else if (shape === 3) {
      helpers.push(
        `private static int ${name}(int n, int k) {\n        int x = (n ^ k) << ${shift};\n        return (x ^ ${xor}) & ${mask};\n    }`,
      );
      parts.push(`${name}(${n1}, ${n2})`);
    } else {
      helpers.push(
        `private static int ${name}(String s) {\n        int x = ${init};\n        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * ${mul}) ^ ${xor};\n        return x & ${mask};\n    }`,
      );
      parts.push(`${name}("${str}")`);
    }
  });
  const sinkExpr = parts.join(lang === "kt" ? " xor " : " ^ ");
  const sink =
    lang === "kt"
      ? `@Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = ${sinkExpr}`
      : `@SuppressWarnings("unused") final int qmzcs1djucsSinkV17 = ${sinkExpr};`;
  return { helpers, sink };
}

function applyEdits(text, edits) {
  const ordered = edits.slice().sort((a, b) => b.start - a.start);
  let out = text;
  for (const ed of ordered) out = out.slice(0, ed.start) + ed.text + out.slice(ed.end);
  return out;
}

function skipFile(file, text) {
  const base = path.basename(file);
  if (base === "Str.java") return true;
  if (base.startsWith("Dqmzcs1djucs")) return true;
  if (text.includes("autosetup-decoy:v1") || text.includes("dex-lanes:v1")) return true;
  if (text.includes("obfuscation-batch:v17")) return true;
  return false;
}

function walkJava(dir, out) {
  if (!fs.existsSync(dir)) return;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === "build") continue;
      walkJava(p, out);
    } else if (/\.(kt|java)$/.test(ent.name)) out.push(p);
  }
}

function transformFile(file, frag) {
  const original = fs.readFileSync(file, "utf8");
  if (skipFile(file, original)) return { skipped: true };
  const lang = file.endsWith(".kt") ? "kt" : "java";
  const items = lang === "kt" ? findKotlin(original) : findJavaMethods(original);
  if (!items.length) return { skipped: true, empty: true };
  const stem = path.basename(file).replace(/\.(kt|java)$/, "").replace(/[^A-Za-z0-9_]/g, "_");
  const slug = stem.includes(frag) ? stem : frag + stem;
  const seed = fnv1a(`${frag}|${slug}|v17`);
  const batch = buildNative(slug, seed, lang);
  const unit = indentUnit(original);
  const edits = [];
  let exprCount = 0;
  for (const item of items) {
    const ind = lineIndent(original, item.sigStart);
    const body = ind + unit;
    const sinkLine = body + batch.sink;
    if (item.kind === "expr") {
      exprCount += 1;
      const expr = original.slice(item.exprStart, item.exprEnd).trim();
      const repl = `{\n${sinkLine}\n${body}return ${expr}\n${ind}}`;
      edits.push({ start: item.eq, end: item.exprEnd, text: repl });
    } else {
      const atBase = afterSuper(original, item.brace, !!item.isCtor);
      let at = atBase;
      let payload = `\n${sinkLine}`;
      if (original[at] === "\n") {
        payload = `${sinkLine}\n`;
      } else if (original[at - 1] === "{") {
        payload = `\n${sinkLine}`;
      }
      edits.push({ start: at, end: at, text: payload });
    }
  }
  let next = applyEdits(original, edits);
  const helperBlock =
    lang === "kt"
      ? `\n\n/* obfuscation-batch:v17 */\n${batch.helpers.join("\n\n")}\n`
      : (() => {
          const close = classClose(next);
          if (close < 0) return null;
          const member = unit;
          const body = batch.helpers
            .map((h) => h.replace(/^/gm, member))
            .join("\n\n");
          const insert = `\n${member}/* obfuscation-batch:v17 */\n${body}\n`;
          return { close, insert };
        })();
  if (lang === "kt") next = next.replace(/\s*$/, "") + helperBlock;
  else {
    if (!helperBlock) return { skipped: true, error: "no class" };
    next = next.slice(0, helperBlock.close) + helperBlock.insert + next.slice(helperBlock.close);
  }
  const beforeB = balance(original);
  const afterB = balance(next);
  if (beforeB.brace !== 0 || beforeB.paren !== 0 || afterB.brace !== 0 || afterB.paren !== 0) {
    return {
      skipped: true,
      error: `balance ${beforeB.brace}/${beforeB.paren} -> ${afterB.brace}/${afterB.paren} expr ${exprCount}`,
    };
  }
  fs.writeFileSync(file, next);
  return { skipped: false, methods: items.length, exprCount };
}

function run(root, frag) {
  const dir = path.join(root, "android", "app", "src", "main", "java");
  const files = [];
  walkJava(dir, files);
  let wrote = 0;
  let skipped = 0;
  for (const file of files) {
    const r = transformFile(file, frag || FRAG_DEFAULT);
    const rel = path.relative(root, file);
    if (r.error) console.log("NATIVE FAIL", rel, r.error);
    else if (r.skipped) skipped += 1;
    else {
      wrote += 1;
      console.log("NATIVE", rel, "methods", r.methods, "expr", r.exprCount);
    }
  }
  console.log("native wrote", wrote, "skipped", skipped);
}

module.exports = { run };
