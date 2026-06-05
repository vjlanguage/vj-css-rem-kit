// author : vjlang team
import type {
  AccessibilityBlock,
  AccessibilityRule,
  ElementDefault,
  RootTier,
  SemanticRole,
  Token,
  TokenVariant,
  UtilityModifier,
} from "./spec/model";
import { UNIVERSAL_SPEC } from "./spec/reference";

export type GeneratorOptions = {
  selector?: string;
  includeDarkMode?: boolean;
  designWidth?: number;
  designHeight?: number;
  baseFontSize?: number;
};

type VariablePrefix = "--" | "$" | "@";

function filterTokensByVariant(
  tokens: Token[],
  variant: TokenVariant = "base",
): Token[] {
  return tokens.filter((token) => (token.variant ?? "base") === variant);
}

function formatRootTierRule(tier: RootTier): string {
  const conditions: string[] = [];

  if (tier.minWidth !== undefined) {
    conditions.push(`(min-width: ${tier.minWidth}px)`);
  }

  if (tier.maxWidth !== undefined) {
    conditions.push(`(max-width: ${tier.maxWidth}px)`);
  }

  const rule = `html { font-size: ${tier.fontSizePercent}%; }`;

  if (conditions.length === 0) {
    return rule;
  }

  return `@media ${conditions.join(" and ")} { ${rule} }`;
}

function formatCssTokenBlock(selector: string, tokens: Token[]): string {
  const body = tokens
    .map((token) => `  ${token.name}: ${token.value};`)
    .join("\n");
  return `${selector} {\n${body}\n}`;
}

function indentBlock(content: string, spaces = 2): string {
  const indent = " ".repeat(spaces);
  return content
    .split("\n")
    .map((line) => `${indent}${line}`)
    .join("\n");
}

function formatSemanticRole(role: SemanticRole): string {
  const body = role.declarations
    .map((declaration) => `  ${declaration.property}: ${declaration.value};`)
    .join("\n");
  return `${role.className} {\n${body}\n}`;
}

function formatElementDefault(element: ElementDefault): string {
  const body = element.declarations
    .map((declaration) => `  ${declaration.property}: ${declaration.value};`)
    .join("\n");
  return `${element.selector} {\n${body}\n}`;
}

function formatUtilityModifier(utility: UtilityModifier): string {
  const body = utility.declarations
    .map((declaration) => `  ${declaration.property}: ${declaration.value};`)
    .join("\n");
  return `${utility.selector} {\n${body}\n}`;
}

function formatAccessibilityBlock(block: AccessibilityBlock): string {
  const body = block.declarations
    .map((declaration) => `  ${declaration.property}: ${declaration.value};`)
    .join("\n");
  return `${block.selector} {\n${body}\n}`;
}

function formatAccessibilityRule(rule: AccessibilityRule): string {
  const body = rule.blocks.map((block) => formatAccessibilityBlock(block)).join("\n\n");
  return `@media ${rule.mediaQuery} {\n${indentBlock(body)}\n}`;
}

function toPrefixedName(name: string, prefix: VariablePrefix): string {
  if (prefix === "--") {
    return name;
  }

  return `${prefix}${name.replace(/^--/, "")}`;
}

function formatPrefixedVariables(
  tokens: Token[],
  prefix: VariablePrefix,
): string {
  return tokens
    .map((token) => `${toPrefixedName(token.name, prefix)}: ${token.value};`)
    .join("\n");
}

export function createRootTierCss(): string {
  return UNIVERSAL_SPEC.rootTiers.map(formatRootTierRule).join("\n");
}

export function createTokenCss(options: GeneratorOptions = {}): string {
  const selector = options.selector ?? ":root";
  const includeDarkMode = options.includeDarkMode ?? true;
  const baseTokens = formatCssTokenBlock(
    selector,
    filterTokensByVariant(UNIVERSAL_SPEC.tokens, "base"),
  );

  if (!includeDarkMode) {
    return baseTokens;
  }

  const darkTokens = filterTokensByVariant(UNIVERSAL_SPEC.tokens, "dark");

  if (darkTokens.length === 0) {
    return baseTokens;
  }

  return [
    baseTokens,
    `@media (prefers-color-scheme: dark) {\n${indentBlock(
      formatCssTokenBlock(selector, darkTokens),
    )}\n}`,
  ].join("\n\n");
}

export function createCanonicalCss(options: GeneratorOptions = {}): string {
  return [
    createRootTierCss(),
    createTokenCss(options),
    createSemanticRoleCss(),
    createElementDefaultsCss(),
    createUtilityModifierCss(),
    createAccessibilityCss(),
  ].join("\n\n");
}

export function createSemanticRoleCss(): string {
  return UNIVERSAL_SPEC.semanticRoles.map(formatSemanticRole).join("\n\n");
}

export function createElementDefaultsCss(): string {
  return UNIVERSAL_SPEC.elementDefaults.map(formatElementDefault).join("\n\n");
}

export function createUtilityModifierCss(): string {
  return UNIVERSAL_SPEC.utilityModifiers.map(formatUtilityModifier).join("\n\n");
}

export function createAccessibilityCss(): string {
  return UNIVERSAL_SPEC.accessibilityRules
    .map(formatAccessibilityRule)
    .join("\n\n");
}

export function createScssHelpers(options: GeneratorOptions = {}): string {
  const baseFontSize = options.baseFontSize ?? 16;
  const designWidth = options.designWidth ?? 390;
  const designHeight = options.designHeight ?? 844;

  return [
    '@use "sass:math";',
    "",
    `$vj-base-font-size: ${baseFontSize} !default;`,
    `$vj-design-width: ${designWidth} !default;`,
    `$vj-design-height: ${designHeight} !default;`,
    "",
    "@function vj-rem($px, $root: $vj-base-font-size) {",
    "  @return math.div($px, $root) * 1rem;",
    "}",
    "",
    "@function vj-vw($px, $width: $vj-design-width) {",
    "  @return math.div($px, $width) * 100vw;",
    "}",
    "",
    "@function vj-vh($px, $height: $vj-design-height) {",
    "  @return math.div($px, $height) * 100vh;",
    "}",
    "",
    formatPrefixedVariables(
      filterTokensByVariant(UNIVERSAL_SPEC.tokens, "base"),
      "$",
    ),
  ].join("\n");
}

export function createLessHelpers(options: GeneratorOptions = {}): string {
  const baseFontSize = options.baseFontSize ?? 16;
  const designWidth = options.designWidth ?? 390;
  const designHeight = options.designHeight ?? 844;

  return [
    `@vj-base-font-size: ${baseFontSize};`,
    `@vj-design-width: ${designWidth};`,
    `@vj-design-height: ${designHeight};`,
    "",
    ".vj-rem(@property, @px, @root: @vj-base-font-size) {",
    "  @{property}: ((@px / @root) * 1rem);",
    "}",
    "",
    ".vj-vw(@property, @px, @width: @vj-design-width) {",
    "  @{property}: ((@px / @width) * 100vw);",
    "}",
    "",
    ".vj-vh(@property, @px, @height: @vj-design-height) {",
    "  @{property}: ((@px / @height) * 100vh);",
    "}",
    "",
    formatPrefixedVariables(
      filterTokensByVariant(UNIVERSAL_SPEC.tokens, "base"),
      "@",
    ),
  ].join("\n");
}
