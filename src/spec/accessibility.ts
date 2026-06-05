// author : vjlang team
import type { AccessibilityRule } from "./model";

function createAccessibilityRule(rule: AccessibilityRule): AccessibilityRule {
  return rule;
}

export const UNIVERSAL_ACCESSIBILITY_RULES: AccessibilityRule[] = [
  createAccessibilityRule({
    mediaQuery: "(prefers-reduced-motion: reduce)",
    comment: "Reduced motion",
    blocks: [
      {
        selector: "*,\n*::before,\n*::after",
        declarations: [
          { property: "animation-duration", value: "0.01ms !important" },
          { property: "animation-iteration-count", value: "1 !important" },
          { property: "transition-duration", value: "0.01ms !important" },
          { property: "scroll-behavior", value: "auto !important" },
        ],
      },
    ],
  }),
  createAccessibilityRule({
    mediaQuery: "(forced-colors: active)",
    comment: "Forced colors / high contrast mode",
    blocks: [
      {
        selector: "*",
        declarations: [{ property: "forced-color-adjust", value: "auto" }],
      },
    ],
  }),
  createAccessibilityRule({
    mediaQuery: "(prefers-color-scheme: dark)",
    comment: "Dark mode font smoothing tweak",
    blocks: [
      {
        selector: "body",
        declarations: [
          { property: "-webkit-font-smoothing", value: "auto" },
          { property: "-moz-osx-font-smoothing", value: "auto" },
        ],
      },
    ],
  }),
  createAccessibilityRule({
    mediaQuery: "(prefers-contrast: more)",
    comment: "Increased contrast",
    blocks: [
      {
        selector: "body",
        declarations: [{ property: "font-weight", value: "var(--weight-medium)" }],
      },
      {
        selector: "strong, b",
        declarations: [{ property: "font-weight", value: "var(--weight-bold)" }],
      },
    ],
  }),
  createAccessibilityRule({
    mediaQuery: "print",
    comment: "Print",
    blocks: [
      {
        selector: "html",
        declarations: [{ property: "font-size", value: "87.5%" }],
      },
      {
        selector: "body",
        declarations: [
          { property: "-webkit-print-color-adjust", value: "exact" },
          { property: "print-color-adjust", value: "exact" },
          { property: "max-width", value: "var(--measure-normal)" },
          { property: "margin", value: "0 auto" },
        ],
      },
      {
        selector: "h1",
        declarations: [{ property: "font-size", value: "var(--text-title-1)" }],
      },
      {
        selector: "h2",
        declarations: [{ property: "font-size", value: "var(--text-title-2)" }],
      },
      {
        selector: "a::after",
        declarations: [
          { property: "content", value: '" (" attr(href) ")"' },
          { property: "font-size", value: "var(--text-caption)" },
        ],
      },
      {
        selector: "pre, blockquote",
        declarations: [{ property: "page-break-inside", value: "avoid" }],
      },
    ],
  }),
];
