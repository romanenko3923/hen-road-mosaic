/**
 * Repair v17 rename splits:
 * - value refs rewritten to a missing insertIdent(local) while the binding stayed
 * - JSX attributes left on the old prop name
 * - object-binding property names renamed away from the real key
 */
const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const root = path.resolve(__dirname, "..");
const FRAG = "qmzcs1djucs";
const gameRoot = path.join(root, "Layouts", "Game");

const SUFFIXES = [
  "Screen", "Button", "Card", "Panel", "Layer", "Strip", "Tile", "Row",
  "Controls", "Header", "Init", "Engine", "Scale", "Puzzle", "Segment",
  "Background", "Overlay", "Indicator", "Badge", "Gauge", "Pill", "Shell",
  "Field", "Backdrop", "Planner", "Backstop",
];

function insertFragmentInBasename(base, fragment) {
  if (!base || !fragment || base.includes(fragment)) return base;
  if (/^(index)$/i.test(base)) return base;
  for (const suf of SUFFIXES) {
    if (base.endsWith(suf) && base.length > suf.length) {
      return `${base.slice(0, -suf.length)}${fragment}${suf}`;
    }
  }
  const pascal = base.match(/^([A-Z][a-z0-9]*)([A-Z].*)$/);
  if (pascal) return `${pascal[1]}${fragment}${pascal[2]}`;
  const hook = base.match(/^(use)([A-Z].*)$/);
  if (hook) {
    const rest = hook[2];
    const restPair = rest.match(/^([A-Z][a-z0-9]*)([A-Z].*)$/);
    if (restPair) return `${hook[1]}${restPair[1]}${fragment}${restPair[2]}`;
    return `${hook[1]}${fragment}${rest}`;
  }
  if (/^[a-z]/.test(base)) {
    const mid = Math.max(1, Math.floor(base.length / 2));
    return `${base.slice(0, mid)}${fragment}${base.slice(mid)}`;
  }
  return `${base}${fragment}`;
}

function insertIdent(name) {
  if (!name || name.includes(FRAG)) return name;
  if (name === "GameInit") return "GameShelqmzcs1djucsl";
  if (name === "doneOnFirstCycle") return "donqmzcs1djucseOnFirstCycle";
  if (name === "startAtMenu") return "startAtqmzcs1djucsMenu";
  if (/^[A-Z0-9]+(_[A-Z0-9]+)+$/.test(name)) {
    const parts = name.split("_");
    const last = parts.pop();
    return `${parts.join("_")}_${FRAG}${last}`;
  }
  const hump = name.match(/^(.*[a-z0-9])([A-Z][A-Za-z0-9]*)$/);
  if (hump) return hump[1] + FRAG + hump[2];
  return insertFragmentInBasename(name, FRAG);
}

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(p));
    else if (/\.tsx?$/.test(ent.name) && !ent.name.endsWith(".d.ts")) out.push(p);
  }
  return out;
}

function parse(file, text) {
  const kind = file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS;
  return ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, kind);
}

function inTypePosition(node) {
  let p = node.parent;
  while (p) {
    if (ts.isTypeNode(p) || ts.isHeritageClause(p) || ts.isTypeParameterDeclaration(p)) return true;
    if (
      (ts.isTypeAliasDeclaration(p) || ts.isInterfaceDeclaration(p) || ts.isEnumDeclaration(p)) &&
      p.name !== node
    ) {
      return true;
    }
    p = p.parent;
  }
  return false;
}

function isValueRef(node) {
  if (!ts.isIdentifier(node)) return false;
  if (inTypePosition(node)) return false;
  const p = node.parent;
  if (!p) return false;
  if (ts.isPropertyAccessExpression(p) && p.name === node) return false;
  if (ts.isJsxAttribute(p) && p.name === node) return false;
  if (ts.isJsxOpeningElement(p) || ts.isJsxSelfClosingElement(p) || ts.isJsxClosingElement(p)) return false;
  if ((ts.isPropertyAssignment(p) || ts.isPropertySignature(p) || ts.isPropertyDeclaration(p) || ts.isMethodDeclaration(p) || ts.isMethodSignature(p) || ts.isEnumMember(p)) && p.name === node) return false;
  if (ts.isBindingElement(p) && (p.name === node || p.propertyName === node)) return false;
  if (ts.isFunctionDeclaration(p) && p.name === node) return false;
  if (ts.isClassDeclaration(p) && p.name === node) return false;
  if (ts.isVariableDeclaration(p) && p.name === node) return false;
  if (ts.isParameter(p) && p.name === node) return false;
  if (ts.isImportSpecifier(p) || ts.isImportClause(p) || ts.isNamespaceImport(p) || ts.isExportSpecifier(p)) return false;
  if (ts.isShorthandPropertyAssignment(p) && p.name === node) return true;
  return true;
}

function addPattern(scope, name) {
  if (!name || !ts.isBindingName(name)) return;
  if (ts.isIdentifier(name)) {
    scope.bindings.push(name.text);
    return;
  }
  for (const el of name.elements) {
    if (ts.isBindingElement(el)) addPattern(scope, el.name);
  }
}

function collectProps(fn) {
  if (!fn.parameters.length) return null;
  const p0 = fn.parameters[0];
  if (!ts.isObjectBindingPattern(p0.name)) return null;
  const set = new Set();
  for (const el of p0.name.elements) {
    if (el.dotDotDotToken) continue;
    if (el.propertyName && ts.isIdentifier(el.propertyName)) set.add(el.propertyName.text);
    else if (ts.isIdentifier(el.name)) set.add(el.name.text);
  }
  return set;
}

function resolveRel(fromFile, spec) {
  if (!spec.startsWith(".")) return "";
  const abs = path.resolve(path.dirname(fromFile), spec);
  for (const ext of [".ts", ".tsx"]) {
    const c = abs + ext;
    if (fs.existsSync(c)) return path.normalize(c);
  }
  for (const ext of [".ts", ".tsx"]) {
    const c = path.join(abs, "index" + ext);
    if (fs.existsSync(c)) return path.normalize(c);
  }
  return "";
}

const files = walk(gameRoot);
files.push(path.join(root, "App.tsx"));

/** @type {Map<string, Map<string, Set<string>>>} */
const propsByFile = new Map();

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  const text = fs.readFileSync(file, "utf8");
  const sf = parse(file, text);
  const map = new Map();
  function visit(node) {
    if ((ts.isFunctionDeclaration(node) || ts.isFunctionExpression(node)) && node.name) {
      const props = collectProps(node);
      if (props) map.set(node.name.text, props);
    }
    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.initializer) {
      const init = node.initializer;
      const fn =
        ts.isArrowFunction(init) || ts.isFunctionExpression(init)
          ? init
          : ts.isCallExpression(init) && init.arguments.length && (ts.isArrowFunction(init.arguments[0]) || ts.isFunctionExpression(init.arguments[0]))
            ? init.arguments[0]
            : null;
      if (fn) {
        const props = collectProps(fn);
        if (props) map.set(node.name.text, props);
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(sf);
  sf.forEachChild((node) => {
    if (!ts.isExportAssignment(node)) return;
    const expr = node.expression;
    if (ts.isIdentifier(expr) && map.has(expr.text)) map.set("default", map.get(expr.text));
  });
  function markDefault(node) {
    if (
      (ts.isFunctionDeclaration(node) || ts.isClassDeclaration(node)) &&
      node.modifiers &&
      node.modifiers.some((m) => m.kind === ts.SyntaxKind.DefaultKeyword) &&
      node.name &&
      map.has(node.name.text)
    ) {
      map.set("default", map.get(node.name.text));
    }
    ts.forEachChild(node, markDefault);
  }
  markDefault(sf);
  propsByFile.set(path.normalize(file), map);
}

const logs = [];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  const text = fs.readFileSync(file, "utf8");
  const sf = parse(file, text);
  const edits = [];

  const rootScope = { bindings: [], parent: null };
  const scopeOf = new Map();

  function pushScope(node, parent) {
    const scope = { bindings: [], parent };
    scopeOf.set(node, scope);
    return scope;
  }

  function bindName(scope, node) {
    if (!node) return;
    if (ts.isIdentifier(node)) scope.bindings.push(node.text);
    else addPattern(scope, node);
  }

  function walkNode(node, scope) {
    if (ts.isFunctionDeclaration(node) || ts.isFunctionExpression(node) || ts.isArrowFunction(node) || ts.isConstructorDeclaration(node) || ts.isMethodDeclaration(node)) {
      if (ts.isFunctionDeclaration(node) && node.name) scope.bindings.push(node.name.text);
      const inner = pushScope(node, scope);
      for (const p of node.parameters) bindName(inner, p.name);
      if (node.body) walkNode(node.body, inner);
      return;
    }
    if (ts.isBlock(node) || ts.isModuleBlock(node) || ts.isCatchClause(node) || ts.isForStatement(node) || ts.isForInStatement(node) || ts.isForOfStatement(node) || ts.isCaseClause(node) || ts.isDefaultClause(node)) {
      const inner = pushScope(node, scope);
      if (ts.isCatchClause(node) && node.variableDeclaration) bindName(inner, node.variableDeclaration.name);
      ts.forEachChild(node, (c) => walkNode(c, inner));
      return;
    }
    if (ts.isClassDeclaration(node)) {
      if (node.name) scope.bindings.push(node.name.text);
      const inner = pushScope(node, scope);
      ts.forEachChild(node, (c) => walkNode(c, inner));
      return;
    }
    if (ts.isVariableDeclaration(node)) {
      bindName(scope, node.name);
      if (node.initializer) walkNode(node.initializer, scope);
      return;
    }
    if (ts.isImportDeclaration(node)) {
      const clause = node.importClause;
      if (clause) {
        if (clause.name) scope.bindings.push(clause.name.text);
        const b = clause.namedBindings;
        if (b && ts.isNamespaceImport(b)) scope.bindings.push(b.name.text);
        if (b && ts.isNamedImports(b)) {
          for (const el of b.elements) scope.bindings.push(el.name.text);
        }
      }
      return;
    }
    ts.forEachChild(node, (c) => walkNode(c, scope));
  }
  walkNode(sf, rootScope);

  function resolve(name, scope) {
    let s = scope;
    while (s) {
      if (s.bindings.includes(name)) return true;
      s = s.parent;
    }
    return false;
  }

  function nearestPreimage(target, scope) {
    let s = scope;
    while (s) {
      for (let i = s.bindings.length - 1; i >= 0; i--) {
        const b = s.bindings[i];
        if (!b.includes(FRAG) && insertIdent(b) === target) return b;
      }
      s = s.parent;
    }
    return "";
  }

  function scopeFor(node) {
    let p = node;
    while (p) {
      if (scopeOf.has(p)) return scopeOf.get(p);
      p = p.parent;
    }
    return rootScope;
  }

  function visitRefs(node) {
    if (isValueRef(node)) {
      const scope = scopeFor(node);
      if (!resolve(node.text, scope)) {
        const back = nearestPreimage(node.text, scope);
        if (back) {
          edits.push({ start: node.getStart(sf), end: node.end, text: back, kind: "ref " + node.text + " -> " + back });
        }
      }
    }
    if (ts.isBindingElement(node) && node.propertyName && ts.isIdentifier(node.propertyName)) {
      const raw = node.propertyName.text;
      if (raw.includes(FRAG)) {
        const stripped = raw.split(FRAG).join("");
        if (stripped && insertIdent(stripped) === raw) {
          const id = node.propertyName;
          edits.push({ start: id.getStart(sf), end: id.end, text: stripped, kind: "key " + raw + " -> " + stripped });
        }
      }
    }
    ts.forEachChild(node, visitRefs);
  }
  visitRefs(sf);

  const localProps = new Map();
  sf.forEachChild((node) => {
    if (!ts.isImportDeclaration(node) || !node.importClause || !ts.isStringLiteral(node.moduleSpecifier)) return;
    const spec = node.moduleSpecifier.text;
    if (!spec.startsWith(".")) return;
    const resolved = resolveRel(file, spec);
    const map = propsByFile.get(resolved);
    if (!map) return;
    const clause = node.importClause;
    if (clause.name && map.get("default")) localProps.set(clause.name.text, map.get("default"));
    const b = clause.namedBindings;
    if (b && ts.isNamedImports(b)) {
      for (const el of b.elements) {
        const exported = el.propertyName && ts.isIdentifier(el.propertyName) ? el.propertyName.text : el.name.text;
        if (map.has(exported)) localProps.set(el.name.text, map.get(exported));
      }
    }
  });
  const own = propsByFile.get(path.normalize(file));
  if (own) {
    for (const [k, v] of own) {
      if (k !== "default") localProps.set(k, v);
    }
  }

  function visitJsx(node) {
    if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
      const tag = node.tagName;
      if (ts.isIdentifier(tag)) {
        const props = localProps.get(tag.text);
        if (props) {
          for (const attr of node.attributes.properties) {
            if (!ts.isJsxAttribute(attr) || !ts.isIdentifier(attr.name)) continue;
            const raw = attr.name.text;
            if (props.has(raw)) continue;
            const next = insertIdent(raw);
            if (next !== raw && props.has(next)) {
              edits.push({ start: attr.name.getStart(sf), end: attr.name.end, text: next, kind: "jsx " + tag.text + " " + raw + " -> " + next });
            }
          }
        }
      }
    }
    ts.forEachChild(node, visitJsx);
  }
  visitJsx(sf);

  if (!edits.length) continue;
  edits.sort((a, b) => b.start - a.start || b.end - a.end);
  let out = text;
  const seen = new Set();
  for (const ed of edits) {
    const k = ed.start + ":" + ed.end;
    if (seen.has(k)) continue;
    seen.add(k);
    const slice = out.slice(ed.start, ed.end);
    const from = ed.kind.split(" -> ")[0].split(" ").pop();
    if (slice !== from) continue;
    if (slice === ed.text) continue;
    out = out.slice(0, ed.start) + ed.text + out.slice(ed.end);
    logs.push(path.basename(file) + " " + ed.kind);
  }
  if (out !== text) fs.writeFileSync(file, out);
}

console.log(logs.join("\n"));
console.log("edits", logs.length);
