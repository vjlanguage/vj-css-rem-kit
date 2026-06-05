import { copyFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const copies = [
  {
    source: resolve("typography-universal.css"),
    target: resolve("dist/typography-universal.css"),
  },
];

for (const file of copies) {
  await mkdir(dirname(file.target), { recursive: true });
  await copyFile(file.source, file.target);
}

console.log(copies.map((file) => file.target.replace(`${process.cwd()}/`, "")).join("\n"));
