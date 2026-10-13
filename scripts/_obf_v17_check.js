const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const root = path.resolve(__dirname, "..");

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (/\.tsx?$/.test(ent.name)) out.push(p);
  }
  return out;
}

function isFn(n) {
  return (
    ts.isFunctionDeclaration(n) ||
    ts.isMethodDeclaration(n) ||
    ts.isConstructorDeclaration(n) ||
    ts.isGetAccessor(n) ||
    ts.isSetAccessor(n) ||
    ts.isFunctionExpression(n) ||
    ts.isArrowFunction(n)
  );
}

function fname(n) {
  if (n.name && ts.isIdentifier(n.name)) return n.name.text;
  const p = n.parent;
  if (p && ts.isVariableDeclaration(p) && ts.isIdentifier(p.name)) return p.name.text;
  return "";
}

function isHelper(name) {
  return /ObfV\d+/.test(name) || /(MixSeed|FoldRange|ClampSpan|HashMix|SumOdds|ClampMod|ShiftXor|ByteFold)$/.test(name);
}

const files = [...walk(path.join(root, "services")), ...walk(path.join(root, "Layouts"))];
let parseFails = 0;
let voidInHelper = 0;
let missing = 0;
let imports = 0;

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  const sf = ts.createSourceFile(
    file,
    text,
    ts.ScriptTarget.Latest,
    true,
    file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  );
  const diags = sf.parseDiagnostics || [];
  if (diags.length) {
    parseFails += 1;
    console.log("PARSE", path.relative(root, file), diags.length);
  }
  const calls = [];
  const seen = new Set();
  const re = /void [\w]+ObfV17\w+\([^;]*\);/g;
  let m;
  while ((m = re.exec(text))) {
    if (!seen.has(m[0])) {
      seen.add(m[0]);
      calls.push(m[0]);
    }
  }
  function visit(node) {
    if (isFn(node) && node.body && ts.isBlock(node.body)) {
      const name = fname(node);
      const body = node.body.getText(sf);
      if (isHelper(name)) {
        if (/ObfV17/.test(name) && /\bvoid\s+/.test(body)) {
          voidInHelper += 1;
          console.log("VOID", path.relative(root, file), name);
        }
      } else if (calls.length) {
        for (const c of calls) {
          if (!body.includes(c)) {
            missing += 1;
            if (missing <= 20) console.log("MISS", path.relative(root, file), name || "<anon>");
          }
        }
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(sf);

  const reI = /(?:from\s+|require\(\s*)['"](\.[^'"]+)['"]/g;
  let im;
  while ((im = reI.exec(text))) {
    const spec = im[1];
    if (spec.includes("/assets/") || spec.endsWith("/assets")) continue;
    const abs = path.resolve(path.dirname(file), spec);
    const cands = [
      abs,
      abs + ".ts",
      abs + ".tsx",
      abs + ".js",
      abs + ".jsx",
      path.join(abs, "index.ts"),
      path.join(abs, "index.tsx"),
    ];
    if (!cands.some((c) => fs.existsSync(c))) {
      imports += 1;
      console.log("IMPORT", path.relative(root, file), spec);
    }
  }
}

const app = path.join(root, "App.tsx");
const index = path.join(root, "index.js");
for (const file of [app, index]) {
  if (!fs.existsSync(file)) continue;
  const text = fs.readFileSync(file, "utf8");
  const reI = /(?:from\s+|require\(\s*)['"](\.[^'"]+)['"]/g;
  let im;
  while ((im = reI.exec(text))) {
    const spec = im[1];
    const abs = path.resolve(path.dirname(file), spec);
    const cands = [abs, abs + ".ts", abs + ".tsx", abs + ".js", abs + ".jsx", path.join(abs, "index.ts"), path.join(abs, "index.tsx")];
    if (!cands.some((c) => fs.existsSync(c))) {
      imports += 1;
      console.log("IMPORT", path.relative(root, file), spec);
    }
  }
}

console.log({ files: files.length, parseFails, voidInHelper, missing, imports });
