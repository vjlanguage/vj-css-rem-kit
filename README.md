# @vjlanguage/css-rem-kit

Responsive typography and spacing infrastructure derived from a canonical CSS spec.

This repo currently has eleven layers:

1. `typography-universal.css`
   The canonical specification file. All other runtime and generator surfaces should derive from it.
2. `src/spec/*`
   A normalized TypeScript model mirroring `§1` through `§10` of the canonical CSS.
3. `src/auto-rem.ts`
   A runtime helper that now consumes the shared root-tier spec instead of maintaining a parallel table.
4. `src/units.ts` and `src/generators.ts`
   Cross-surface helpers for `rem` / `vw` / `vh`, plus generated CSS / SCSS / LESS output.
5. `styles/*`
   Generated import-ready artifacts for CSS, SCSS, and LESS consumers, including semantic `.text-*` role classes, HTML baseline defaults, utility modifiers, and accessibility media queries.
6. `src/adapters/*`
   Thin framework adapters for React and Vue lifecycle integration.
7. `dist/*`
   Publish-ready JS, typings, and generated styles created by the package build.
8. `tests/*`
   Build-surface tests that validate the shipped helpers and generators.
9. `.github/workflows/*`
   CI automation that runs type checks and the package test flow on pushes and PRs.
10. `src/spec/reference.ts`
   Structured quick-reference metadata for breakpoints, computed type sizes, role mappings, and spatial conversions from `§15`.
11. `docs/*`
   Generated docs and demo pages built from the same normalized package data.

Install:

```sh
npm install @vjlanguage/css-rem-kit
```

## Auto Rem Specification

The system uses a `16px` browser default as its reference base. Each viewport tier maps to a fixed root pixel size, then converts that to a percentage for `html { font-size }`.

| Tier | Width range | Root px | Root % |
| --- | --- | ---: | ---: |
| `watch` | `<= 200` | `12` | `75%` |
| `phone-sm` | `201 - 374` | `14` | `87.5%` |
| `phone-md` | `375 - 389` | `15` | `93.75%` |
| `phone-lg` | `390 - 599` | `16` | `100%` |
| `foldable` | `600 - 767` | `17` | `106.25%` |
| `tablet` | `768 - 1023` | `18` | `112.5%` |
| `tablet-lg` | `1024 - 1279` | `19` | `118.75%` |
| `desktop` | `1280 - 1439` | `20` | `125%` |
| `desktop-wide` | `1440 - 1919` | `21` | `131.25%` |
| `tv` | `>= 1920` | `24` | `150%` |

### Rules

- Only the root font size changes across tiers.
- All typography, spacing, radius, icon, and target tokens stay authored in `rem`.
- Tier percentages are always calculated as `(rootPx / baseFontSize) * 100`.
- The default `baseFontSize` is `16`, but the TypeScript API allows overriding it.
- Width matching is inclusive on both ends of each range.

## TypeScript API

`src/auto-rem.ts` exports:

- `DEFAULT_AUTO_REM_SPEC`
- `resolveAutoRem(width, options?)`
- `applyAutoRem(target, resolved)`
- `installAutoRem(options?)`
- `createAutoRemCss(options?)`

### Example

```ts
import { installAutoRem } from "./src/auto-rem";

const autoRem = installAutoRem();

// Later if needed:
autoRem.update();
autoRem.destroy();
```

### Generated CSS Example

```ts
import { createAutoRemCss } from "./src/auto-rem";

const css = createAutoRemCss();
```

This produces media-query CSS equivalent to the root breakpoint logic used in `typography-universal.css`.

## Unit Helpers

The package also exposes:

- `rem(px, options?)`
- `vw(px, options?)`
- `vh(px, options?)`
- `createUnitHelpers(options?)`

Default viewport draft values are:

- `designWidth: 390`
- `designHeight: 844`

Example:

```ts
import { rem, vw, vh } from "./src";

const fontSize = rem(16);
const cardWidth = vw(240);
const heroHeight = vh(320);
```

## Generators

The package now exposes:

- `createRootTierCss()`
- `createTokenCss()`
- `createSemanticRoleCss()`
- `createElementDefaultsCss()`
- `createUtilityModifierCss()`
- `createAccessibilityCss()`
- `createCanonicalCss()`
- `createScssHelpers()`
- `createLessHelpers()`

Reference data exports:

- `BREAKPOINT_REFERENCE_SUMMARY`
- `TYPE_SCALE_REFERENCE_TABLE`
- `ROLE_MAPPING_REFERENCE_TABLE`
- `SPATIAL_REFERENCE_TABLE`
- `UNIVERSAL_REFERENCE_TABLES`

Example:

```ts
import { createCanonicalCss, createScssHelpers, createLessHelpers } from "./src";

const css = createCanonicalCss();
const scss = createScssHelpers();
const less = createLessHelpers();
```

`createCanonicalCss()` now includes:

- root tier media queries from `§1`
- token variables from `§2` to `§10`
- semantic text role classes from `§11`
- semantic HTML defaults from `§12`
- utility modifier classes from `§13`
- accessibility media queries from `§14`

`§15` quick-reference metadata is exported as structured data rather than emitted into CSS.

To regenerate the checked-in repo artifacts:

```sh
rm -rf .tmp-build
npx -y -p typescript@5.5.4 tsc --target ES2020 --module NodeNext --moduleResolution NodeNext --outDir .tmp-build src/index.ts src/auto-rem.ts src/units.ts src/generators.ts src/spec/model.ts src/spec/root-tiers.ts src/spec/tokens.ts
node scripts/generate-artifacts.mjs
rm -rf .tmp-build
```

To produce the publish-ready package output:

```sh
npm run build
```

This writes:

- `dist/*.js`
- `dist/*.d.ts`
- `dist/styles/responsive.css`
- `dist/styles/responsive.scss`
- `dist/styles/responsive.less`
- `dist/typography-universal.css`

To generate docs and demo pages from the same build data:

```sh
npm run build:docs
```

This writes:

- `docs/index.html`
- `docs/demo.html`
- `docs/assets/responsive.css`
- `docs/assets/docs.css`

To run the current automated checks:

```sh
npm test
```

Continuous integration:

- `.github/workflows/ci.yml` runs `npm run check` and `npm test`

## Framework Support

React support lives in:

- `src/adapters/react.ts`

Vue support lives in:

- `src/adapters/vue.ts`

These adapters stay dependency-light and simply wrap `installAutoRem(...)`.

React example:

```tsx
import { useEffect } from "react";
import { createReactAutoRemEffect } from "./src/adapters/react";
import "./styles/responsive.css";

const autoRemEffect = createReactAutoRemEffect();

export function App() {
  useEffect(autoRemEffect, []);
  return <main className="text-body">Hello responsive world</main>;
}
```

Vue example:

```ts
import { onBeforeUnmount, onMounted } from "vue";
import { createVueAutoRemLifecycle } from "./src/adapters/vue";
import "./styles/responsive.css";

const autoRem = createVueAutoRemLifecycle();

onMounted(() => autoRem.onMounted());
onBeforeUnmount(() => autoRem.onBeforeUnmount());
```

## Normalized Spec

The shared model currently lives in:

- `src/spec/model.ts`
- `src/spec/root-tiers.ts`
- `src/spec/tokens.ts`

The current normalization scope covers:

- `§1` root font-size breakpoint tiers
- `§2` font stacks
- `§3` type scale
- `§4` line height
- `§5` letter spacing
- `§6` font weight
- `§7` spatial tokens
- `§8` shadow tokens, including dark-mode variants
- `§9` z-index
- `§10` motion tokens
- `§11` semantic typography role classes
- `§12` HTML element defaults
- `§13` utility modifiers
- `§14` accessibility media queries
- `§15` quick-reference metadata
