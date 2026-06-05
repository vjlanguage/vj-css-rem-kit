import { mkdir, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";

const AUTHOR_CSS_HEADER = "/* author : vjlang team */";
const require = createRequire(import.meta.url);
const modulePath = process.argv[2] ? resolve(process.argv[2]) : resolve(".tmp-build/index.js");
const outputDir = process.argv[3] ? resolve(process.argv[3]) : resolve("styles");
const {
  createCanonicalCss,
  createLessHelpers,
  createScssHelpers,
} = require(modulePath);

const outputs = [
  {
    file: resolve(outputDir, "responsive.css"),
    content: `${AUTHOR_CSS_HEADER}\n\n${createCanonicalCss()}`,
  },
  {
    file: resolve(outputDir, "responsive.scss"),
    content: createScssHelpers(),
  },
  {
    file: resolve(outputDir, "responsive.less"),
    content: createLessHelpers(),
  },
];

for (const output of outputs) {
  await mkdir(dirname(output.file), { recursive: true });
  await writeFile(output.file, `${output.content}\n`, "utf8");
}

console.log(
  outputs.map((output) => output.file.replace(`${process.cwd()}/`, "")).join("\n"),
);
