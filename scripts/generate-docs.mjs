import { mkdir, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";

const AUTHOR_CSS_HEADER = "/* author : vjlang team */";
const modulePath = process.argv[2] ? resolve(process.argv[2]) : resolve("dist/index.js");
const outputDir = process.argv[3] ? resolve(process.argv[3]) : resolve("docs");
const require = createRequire(import.meta.url);

const {
  BREAKPOINT_REFERENCE_SUMMARY,
  ROLE_MAPPING_REFERENCE_TABLE,
  SPATIAL_REFERENCE_TABLE,
  TYPE_SCALE_REFERENCE_TABLE,
  createCanonicalCss,
} = require(modulePath);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderTable(headers, rows) {
  const thead = `<thead><tr>${headers
    .map((header) => `<th>${escapeHtml(header)}</th>`)
    .join("")}</tr></thead>`;
  const tbody = `<tbody>${rows
    .map(
      (row) =>
        `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`,
    )
    .join("")}</tbody>`;
  return `<table>${thead}${tbody}</table>`;
}

const breakpointRows = BREAKPOINT_REFERENCE_SUMMARY.map((row) => [
  row.viewport,
  `${row.rootPercent}%`,
  `${row.remPx}px`,
  row.deviceExamples,
]);

const typeScaleRows = TYPE_SCALE_REFERENCE_TABLE.map((row) => [
  row.token,
  `${row.rem}rem`,
  ...Object.entries(row.computedPx).map(([root, px]) => `${root}px -> ${px}px`),
]);

const roleMappingRows = ROLE_MAPPING_REFERENCE_TABLE.map((row) => [
  row.unifiedToken,
  row.iosHig,
  row.material3,
]);

const spatialRows = SPATIAL_REFERENCE_TABLE.map((row) => [
  row.token,
  `${row.rem}rem`,
  ...Object.entries(row.computedPx).map(([root, px]) => `${root}px -> ${px}px`),
  row.note ?? "",
]);

const docsCss = `${AUTHOR_CSS_HEADER}

:root {
  --docs-bg: #f4f0e8;
  --docs-ink: #1e1d1a;
  --docs-muted: #6d675e;
  --docs-panel: rgba(255, 252, 245, 0.88);
  --docs-line: rgba(30, 29, 26, 0.14);
  --docs-accent: #c45b12;
  --docs-shadow: 0 24px 80px rgba(42, 32, 18, 0.12);
}

* { box-sizing: border-box; }

body {
  margin: 0;
  color: var(--docs-ink);
  background:
    radial-gradient(circle at top left, rgba(196, 91, 18, 0.14), transparent 28rem),
    linear-gradient(180deg, #fbf8f2 0%, var(--docs-bg) 100%);
}

.docs-shell {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 3rem 0 5rem;
}

.docs-hero,
.docs-section,
.demo-card,
.demo-shell {
  background: var(--docs-panel);
  border: 1px solid var(--docs-line);
  border-radius: 1.5rem;
  box-shadow: var(--docs-shadow);
}

.docs-hero {
  padding: 2rem;
  margin-bottom: 1.5rem;
}

.docs-grid {
  display: grid;
  gap: 1.5rem;
}

.docs-section {
  padding: 1.5rem;
}

.docs-kicker {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--docs-accent);
  font-size: 0.875rem;
}

.docs-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.docs-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  padding: 0.75rem 1rem;
  border-radius: 999px;
  background: #1e1d1a;
  color: #fff;
  text-decoration: none;
}

.docs-link.secondary {
  background: transparent;
  color: var(--docs-ink);
  border: 1px solid var(--docs-line);
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

th,
td {
  padding: 0.85rem 0.9rem;
  border-bottom: 1px solid var(--docs-line);
  text-align: left;
  vertical-align: top;
}

th {
  color: var(--docs-muted);
  font-weight: 600;
}

.demo-shell {
  padding: 2rem;
  width: min(1120px, calc(100% - 2rem));
  margin: 3rem auto 5rem;
}

.demo-stack {
  display: grid;
  gap: 1rem;
}

.demo-card {
  padding: 1.25rem;
}

.demo-utilities {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.demo-chip {
  padding: 0.65rem 0.9rem;
  border: 1px solid var(--docs-line);
  border-radius: 999px;
  background: white;
}

@media (max-width: 720px) {
  .docs-shell,
  .demo-shell {
    width: min(100% - 1rem, 1120px);
  }
}
`;

const sharedCss = `${AUTHOR_CSS_HEADER}\n\n${createCanonicalCss()}\n`;

const indexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>@vjlanguage/css-rem-kit Docs</title>
    <link rel="stylesheet" href="./assets/responsive.css" />
    <link rel="stylesheet" href="./assets/docs.css" />
  </head>
  <body>
    <main class="docs-shell">
      <section class="docs-hero">
        <div class="docs-kicker">Generated From Canonical Spec</div>
        <h1 class="text-display">@vjlanguage/css-rem-kit</h1>
        <p class="text-body">
          Reference docs and demo pages generated from the same normalized spec data that powers the package runtime, style artifacts, and tests.
        </p>
        <div class="docs-links">
          <a class="docs-link" href="./demo.html">Open Demo Page</a>
          <a class="docs-link secondary" href="../README.md">Read README</a>
        </div>
      </section>

      <section class="docs-grid">
        <section class="docs-section">
          <h2 class="text-title-2">Breakpoint Summary</h2>
          ${renderTable(["Viewport", "Root %", "1rem", "Device examples"], breakpointRows)}
        </section>

        <section class="docs-section">
          <h2 class="text-title-2">Type Scale Reference</h2>
          ${renderTable(
            ["Token", "Rem", "12", "14", "15", "16", "17", "18", "19", "20", "21", "24"],
            typeScaleRows,
          )}
        </section>

        <section class="docs-section">
          <h2 class="text-title-2">Role Mapping</h2>
          ${renderTable(["Unified token", "iOS HIG", "Material 3"], roleMappingRows)}
        </section>

        <section class="docs-section">
          <h2 class="text-title-2">Spatial Reference</h2>
          ${renderTable(
            ["Token", "Rem", "12", "16", "18", "20", "24", "Note"],
            spatialRows,
          )}
        </section>
      </section>
    </main>
  </body>
</html>
`;

const demoHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>@vjlanguage/css-rem-kit Demo</title>
    <link rel="stylesheet" href="./assets/responsive.css" />
    <link rel="stylesheet" href="./assets/docs.css" />
  </head>
  <body>
    <main class="demo-shell">
      <div class="docs-kicker">Generated Demo</div>
      <h1 class="text-display">Semantic Roles, Defaults, Utilities</h1>
      <p class="text-body">
        This page uses the generated responsive CSS directly, so typography roles, HTML defaults, utilities, and accessibility layers all come from the package build output.
      </p>

      <section class="demo-stack">
        <article class="demo-card">
          <div class="text-overline">Typography Roles</div>
          <div class="text-display-lg">Display Large</div>
          <div class="text-title-1">Title One</div>
          <div class="text-headline">Headline</div>
          <p class="text-body">Body text scales by root tier and stays tied to the canonical token model.</p>
          <div class="text-caption">Caption metadata</div>
        </article>

        <article class="demo-card">
          <div class="text-overline">HTML Defaults</div>
          <h2>Default Heading Two</h2>
          <p>
            Paragraphs, <strong>strong text</strong>, <em>emphasis</em>, <a href="https://example.com">links</a>,
            and <code>inline code</code> all inherit generated defaults.
          </p>
          <blockquote>Blockquotes, tables, form controls, and preformatted code also come from the same generated baseline.</blockquote>
        </article>

        <article class="demo-card">
          <div class="text-overline">Utilities</div>
          <div class="demo-utilities">
            <span class="demo-chip weight-bold">.weight-bold</span>
            <span class="demo-chip text-uppercase">.text-uppercase</span>
            <span class="demo-chip font-mono">.font-mono</span>
            <span class="demo-chip tabular-nums">123456</span>
            <span class="demo-chip italic">.italic</span>
          </div>
          <p class="text-body-sm text-truncate">This line shows the utility layer working on top of the semantic token system inside the generated demo page.</p>
        </article>
      </section>
    </main>
  </body>
</html>
`;

const outputs = [
  { file: resolve(outputDir, "index.html"), content: indexHtml },
  { file: resolve(outputDir, "demo.html"), content: demoHtml },
  { file: resolve(outputDir, "assets/responsive.css"), content: sharedCss },
  { file: resolve(outputDir, "assets/docs.css"), content: docsCss },
];

for (const output of outputs) {
  await mkdir(dirname(output.file), { recursive: true });
  await writeFile(output.file, output.content, "utf8");
}

console.log(outputs.map((output) => output.file.replace(`${process.cwd()}/`, "")).join("\n"));
