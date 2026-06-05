import { existsSync, readFileSync } from "node:fs";
import test from "node:test";
import assert from "node:assert/strict";

import {
  BREAKPOINT_REFERENCE_SUMMARY,
  ROLE_MAPPING_REFERENCE_TABLE,
  SPATIAL_REFERENCE_TABLE,
  TYPE_SCALE_REFERENCE_TABLE,
  createCanonicalCss,
  createLessHelpers,
  createRootTierCss,
  createScssHelpers,
  rem,
  resolveAutoRem,
  vh,
  vw,
} from "../dist/index.js";

test("rem helper converts px to rem", () => {
  assert.equal(rem(16), "1rem");
  assert.equal(rem(24), "1.5rem");
  assert.equal(rem(15, { baseFontSize: 15 }), "1rem");
});

test("vw and vh helpers convert against default design draft", () => {
  assert.equal(vw(39), "10vw");
  assert.equal(vh(84.4), "10vh");
});

test("resolveAutoRem matches canonical tiers", () => {
  const watch = resolveAutoRem(180);
  const phone = resolveAutoRem(390);
  const desktop = resolveAutoRem(1440);

  assert.equal(watch.name, "watch");
  assert.equal(watch.rootPx, 12);
  assert.equal(watch.cssFontSize, "75%");

  assert.equal(phone.name, "phone-large");
  assert.equal(phone.rootPx, 16);
  assert.equal(phone.cssFontSize, "100%");

  assert.equal(desktop.name, "desktop-wide");
  assert.equal(desktop.rootPx, 21);
  assert.equal(desktop.cssFontSize, "131.25%");
});

test("css generators expose root tiers and dark mode tokens", () => {
  const rootCss = createRootTierCss();
  const canonicalCss = createCanonicalCss();

  assert.match(rootCss, /min-width: 390px/);
  assert.match(rootCss, /font-size: 100%/);
  assert.match(canonicalCss, /--text-body: 1\.000rem;/);
  assert.match(canonicalCss, /prefers-color-scheme: dark/);
  assert.match(canonicalCss, /--shadow-5:/);
  assert.match(canonicalCss, /\.text-display \{/);
  assert.match(canonicalCss, /text-transform: uppercase;/);
  assert.match(canonicalCss, /body \{/);
  assert.match(canonicalCss, /font-feature-settings: "kern" 1, "liga" 1, "calt" 1;/);
  assert.match(canonicalCss, /button:active \{/);
  assert.match(canonicalCss, /\.weight-bold \{/);
  assert.match(canonicalCss, /\.text-truncate \{/);
  assert.match(canonicalCss, /\.tabular-nums \{/);
  assert.match(canonicalCss, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(canonicalCss, /animation-duration: 0\.01ms !important;/);
  assert.match(canonicalCss, /@media print/);
  assert.match(canonicalCss, /a::after \{/);
});

test("scss and less generators emit unit helpers", () => {
  const scss = createScssHelpers();
  const less = createLessHelpers();

  assert.match(scss, /@function vj-rem/);
  assert.match(scss, /\$text-body: 1\.000rem;/);

  assert.match(less, /\.vj-vw\(@property, @px, @width: @vj-design-width\)/);
  assert.match(less, /@text-body: 1\.000rem;/);
});

test("reference tables expose canonical quick-reference metadata", () => {
  assert.equal(BREAKPOINT_REFERENCE_SUMMARY.length, 10);
  assert.equal(BREAKPOINT_REFERENCE_SUMMARY[0]?.remPx, 12);
  assert.equal(TYPE_SCALE_REFERENCE_TABLE[0]?.computedPx["24"], 72);
  assert.equal(ROLE_MAPPING_REFERENCE_TABLE[2]?.iosHig, "Large Title");
  assert.equal(SPATIAL_REFERENCE_TABLE[5]?.note, ">=44 from 16px up");
});

test("docs and demo pages are generated from the build data", () => {
  assert.equal(existsSync("./docs/index.html"), true);
  assert.equal(existsSync("./docs/demo.html"), true);
  assert.equal(existsSync("./docs/assets/responsive.css"), true);

  const docsIndex = readFileSync("./docs/index.html", "utf8");
  const docsDemo = readFileSync("./docs/demo.html", "utf8");

  assert.match(docsIndex, /@vjlanguage\/css-rem-kit/);
  assert.match(docsIndex, /Breakpoint Summary/);
  assert.match(docsDemo, /Semantic Roles, Defaults, Utilities/);
});
