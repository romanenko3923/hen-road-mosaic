/**
 * Recreate source files so creation timestamps change (Windows keeps
 * birthtime on in-place writeFile).
 */
const fs = require("node:fs/promises");
const path = require("node:path");

const SKIP_DIRS = new Set([
  "node_modules",
  ".git",
  ".expo",
  ".idea",
  ".vscode",
  "dist",
  ".gradle",
  "build",
  androidBuildLike("android"),
]);

function androidBuildLike() {
  return "build";
}

const SKIP_EXT = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".ico",
  ".keystore",
  ".jks",
  ".p12",
  ".jar",
  ".aar",
  ".apk",
  ".aab",
  ".zip",
  ".gz",
  ".pdf",
  ".woff",
  ".woff2",
  ".ttf",
  ".eot",
  ".so",
  ".dex",
]);

async function collect(rootDir) {
  const files = [];
  async function walk(current) {
    let entries;
    try {
      entries = await fs.readdir(current, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (SKIP_DIRS.has(entry.name)) continue;
        await walk(full);
        continue;
      }
      if (!entry.isFile()) continue;
      if (SKIP_EXT.has(path.extname(full).toLowerCase())) continue;
      files.push(full);
    }
  }
  await walk(rootDir);
  return files;
}

async function touchAllFiles(rootPath) {
  const files = await collect(rootPath);
  let recreated = 0;
  for (const filePath of files) {
    let buf;
    try {
      buf = await fs.readFile(filePath);
    } catch {
      continue;
    }
    const tmp = `${filePath}.${process.pid}.touchtmp`;
    await fs.writeFile(tmp, buf);
    await fs.unlink(filePath);
    await fs.rename(tmp, filePath);
    recreated += 1;
  }
  return {
    ok: true,
    details: `recreated ${recreated} files`,
  };
}

module.exports = { touchAllFiles };
