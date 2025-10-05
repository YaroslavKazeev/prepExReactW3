import fs from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pkgPath = path.join(
  __dirname,
  "..",
  "node_modules",
  "beanheads",
  "package.json"
);

async function run() {
  try {
    if (!existsSync(pkgPath)) {
      console.log("beanheads package.json not found at", pkgPath);
      return;
    }

    const raw = await fs.readFile(pkgPath, "utf8");
    const pkg = JSON.parse(raw);

    let changed = false;

    if (pkg.module !== "dist/beanheads.esm.js") {
      pkg.module = "dist/beanheads.esm.js";
      changed = true;
    }

    if (
      !pkg.exports ||
      !pkg.exports["."] ||
      pkg.exports["."].import !== "./dist/beanheads.esm.js" ||
      pkg.exports["."].require !== "./dist/index.js"
    ) {
      pkg.exports = pkg.exports || {};
      pkg.exports["."] = {
        import: "./dist/beanheads.esm.js",
        require: "./dist/index.js",
      };
      changed = true;
    }

    if (changed) {
      await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf8");
      console.log("Patched beanheads package.json at", pkgPath);
    } else {
      console.log("beanheads package.json already correct");
    }
  } catch (err) {
    console.error("Failed to patch beanheads package.json:", err);
    throw err;
  }
}

run();
