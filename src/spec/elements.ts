// author : vjlang team
import type { ElementDefault } from "./model";

function createElementDefault(element: ElementDefault): ElementDefault {
  return element;
}

export const UNIVERSAL_ELEMENT_DEFAULTS: ElementDefault[] = [
  createElementDefault({
    selector: "body",
    comment: "Global base",
    declarations: [
      { property: "font-family", value: "var(--font-sans)" },
      { property: "font-size", value: "var(--text-body)" },
      { property: "font-weight", value: "var(--weight-regular)" },
      { property: "line-height", value: "var(--leading-reading)" },
      { property: "letter-spacing", value: "var(--tracking-normal)" },
      { property: "-webkit-font-smoothing", value: "antialiased" },
      { property: "-moz-osx-font-smoothing", value: "grayscale" },
      { property: "text-rendering", value: "optimizeLegibility" },
      { property: "font-feature-settings", value: '"kern" 1, "liga" 1, "calt" 1' },
      { property: "-webkit-text-size-adjust", value: "100%" },
      { property: "text-size-adjust", value: "100%" },
      { property: "-webkit-tap-highlight-color", value: "transparent" },
    ],
  }),
  createElementDefault({
    selector: "h1",
    declarations: [
      { property: "font-family", value: "var(--font-display)" },
      { property: "font-size", value: "var(--text-display)" },
      { property: "font-weight", value: "var(--weight-bold)" },
      { property: "line-height", value: "var(--leading-display)" },
      { property: "letter-spacing", value: "var(--tracking-tight)" },
      { property: "margin-bottom", value: "var(--space-4)" },
    ],
  }),
  createElementDefault({
    selector: "h2",
    declarations: [
      { property: "font-size", value: "var(--text-title-1)" },
      { property: "font-weight", value: "var(--weight-semibold)" },
      { property: "line-height", value: "var(--leading-snug)" },
      { property: "letter-spacing", value: "var(--tracking-title)" },
      { property: "margin-bottom", value: "var(--space-3)" },
    ],
  }),
  createElementDefault({
    selector: "h3",
    declarations: [
      { property: "font-size", value: "var(--text-title-2)" },
      { property: "font-weight", value: "var(--weight-semibold)" },
      { property: "line-height", value: "var(--leading-title)" },
      { property: "letter-spacing", value: "var(--tracking-normal)" },
      { property: "margin-bottom", value: "var(--space-3)" },
    ],
  }),
  createElementDefault({
    selector: "h4",
    declarations: [
      { property: "font-size", value: "var(--text-title-3)" },
      { property: "font-weight", value: "var(--weight-semibold)" },
      { property: "line-height", value: "var(--leading-title)" },
      { property: "letter-spacing", value: "var(--tracking-normal)" },
      { property: "margin-bottom", value: "var(--space-2)" },
    ],
  }),
  createElementDefault({
    selector: "h5",
    declarations: [
      { property: "font-size", value: "var(--text-title-4)" },
      { property: "font-weight", value: "var(--weight-semibold)" },
      { property: "line-height", value: "var(--leading-heading)" },
      { property: "letter-spacing", value: "var(--tracking-normal)" },
      { property: "margin-bottom", value: "var(--space-2)" },
    ],
  }),
  createElementDefault({
    selector: "h6",
    declarations: [
      { property: "font-size", value: "var(--text-headline)" },
      { property: "font-weight", value: "var(--weight-semibold)" },
      { property: "line-height", value: "var(--leading-heading)" },
      { property: "letter-spacing", value: "var(--tracking-normal)" },
      { property: "margin-bottom", value: "var(--space-2)" },
    ],
  }),
  createElementDefault({
    selector: "p",
    declarations: [
      { property: "font-size", value: "var(--text-body)" },
      { property: "font-weight", value: "var(--weight-regular)" },
      { property: "line-height", value: "var(--leading-reading)" },
      { property: "max-width", value: "var(--measure-normal)" },
      { property: "margin-bottom", value: "var(--space-4)" },
    ],
  }),
  createElementDefault({
    selector: "p:last-child",
    declarations: [{ property: "margin-bottom", value: "0" }],
  }),
  createElementDefault({
    selector: "small",
    declarations: [
      { property: "font-size", value: "var(--text-caption)" },
      { property: "line-height", value: "var(--leading-caption)" },
      { property: "letter-spacing", value: "var(--tracking-caption)" },
    ],
  }),
  createElementDefault({
    selector: "strong, b",
    declarations: [{ property: "font-weight", value: "var(--weight-semibold)" }],
  }),
  createElementDefault({
    selector: "em, i",
    declarations: [{ property: "font-style", value: "italic" }],
  }),
  createElementDefault({
    selector: "a",
    declarations: [
      { property: "text-decoration", value: "underline" },
      { property: "text-underline-offset", value: "0.15em" },
      { property: "text-decoration-thickness", value: "1px" },
      { property: "transition", value: "opacity var(--transition-fast)" },
    ],
  }),
  createElementDefault({
    selector: "a:hover",
    declarations: [{ property: "opacity", value: "0.7" }],
  }),
  createElementDefault({
    selector: "ul, ol",
    declarations: [
      { property: "font-size", value: "var(--text-body)" },
      { property: "line-height", value: "var(--leading-reading)" },
      { property: "padding-left", value: "var(--space-6)" },
      { property: "margin-bottom", value: "var(--space-4)" },
    ],
  }),
  createElementDefault({
    selector: "li",
    declarations: [{ property: "margin-bottom", value: "var(--space-1)" }],
  }),
  createElementDefault({
    selector: "label",
    declarations: [
      { property: "display", value: "block" },
      { property: "font-size", value: "var(--text-label)" },
      { property: "font-weight", value: "var(--weight-medium)" },
      { property: "line-height", value: "var(--leading-ui)" },
      { property: "letter-spacing", value: "var(--tracking-label)" },
      { property: "margin-bottom", value: "var(--space-1)" },
    ],
  }),
  createElementDefault({
    selector: "input,\ntextarea,\nselect",
    declarations: [
      { property: "font-family", value: "var(--font-sans)" },
      { property: "font-size", value: "var(--text-body)" },
      { property: "font-weight", value: "var(--weight-regular)" },
      { property: "line-height", value: "var(--leading-ui)" },
      { property: "min-height", value: "var(--target-min)" },
      { property: "padding", value: "var(--space-3) var(--space-4)" },
      { property: "border-radius", value: "var(--radius-md)" },
      { property: "border", value: "var(--border-thin) solid" },
      { property: "transition", value: "border-color var(--transition-fast), box-shadow   var(--transition-fast)" },
    ],
  }),
  createElementDefault({
    selector: "button",
    declarations: [
      { property: "font-family", value: "var(--font-sans)" },
      { property: "font-size", value: "var(--text-label-lg)" },
      { property: "font-weight", value: "var(--weight-medium)" },
      { property: "line-height", value: "var(--leading-ui)" },
      { property: "letter-spacing", value: "var(--tracking-label)" },
      { property: "min-height", value: "var(--target-min)" },
      { property: "padding", value: "var(--space-3) var(--space-6)" },
      { property: "border-radius", value: "var(--radius-md)" },
      { property: "cursor", value: "pointer" },
      { property: "transition", value: "background var(--transition-fast), transform  var(--duration-micro) var(--ease-spring), box-shadow var(--transition-fast)" },
    ],
  }),
  createElementDefault({
    selector: "button:active",
    declarations: [{ property: "transform", value: "scale(0.97)" }],
  }),
  createElementDefault({
    selector: "code",
    declarations: [
      { property: "font-family", value: "var(--font-mono)" },
      { property: "font-size", value: "0.875em" },
      { property: "padding", value: "0.1em 0.35em" },
      { property: "border-radius", value: "var(--radius-xs)" },
    ],
  }),
  createElementDefault({
    selector: "pre",
    declarations: [
      { property: "font-family", value: "var(--font-mono)" },
      { property: "font-size", value: "var(--text-body-sm)" },
      { property: "line-height", value: "var(--leading-compact)" },
      { property: "padding", value: "var(--space-4)" },
      { property: "border-radius", value: "var(--radius-md)" },
      { property: "overflow-x", value: "auto" },
    ],
  }),
  createElementDefault({
    selector: "pre code",
    declarations: [
      { property: "font-size", value: "inherit" },
      { property: "padding", value: "0" },
      { property: "background", value: "none" },
    ],
  }),
  createElementDefault({
    selector: "blockquote",
    declarations: [
      { property: "font-size", value: "var(--text-body-lg)" },
      { property: "font-style", value: "italic" },
      { property: "line-height", value: "var(--leading-reading)" },
      { property: "padding-left", value: "var(--space-6)" },
      { property: "border-left", value: "var(--border-thick) solid" },
      { property: "margin-bottom", value: "var(--space-4)" },
    ],
  }),
  createElementDefault({
    selector: "table",
    declarations: [
      { property: "font-size", value: "var(--text-body-sm)" },
      { property: "line-height", value: "var(--leading-ui)" },
      { property: "border-collapse", value: "collapse" },
      { property: "width", value: "100%" },
    ],
  }),
  createElementDefault({
    selector: "th",
    declarations: [
      { property: "font-size", value: "var(--text-label)" },
      { property: "font-weight", value: "var(--weight-semibold)" },
      { property: "letter-spacing", value: "var(--tracking-label)" },
      { property: "text-align", value: "left" },
      { property: "padding", value: "var(--space-3) var(--space-4)" },
    ],
  }),
  createElementDefault({
    selector: "td",
    declarations: [{ property: "padding", value: "var(--space-3) var(--space-4)" }],
  }),
  createElementDefault({
    selector: "hr",
    declarations: [
      { property: "border", value: "none" },
      { property: "border-top", value: "var(--border-hairline) solid" },
      { property: "margin", value: "var(--space-6) 0" },
    ],
  }),
  createElementDefault({
    selector: "figcaption",
    declarations: [
      { property: "font-size", value: "var(--text-caption)" },
      { property: "line-height", value: "var(--leading-caption)" },
      { property: "letter-spacing", value: "var(--tracking-caption)" },
      { property: "margin-top", value: "var(--space-2)" },
    ],
  }),
  createElementDefault({
    selector: "kbd",
    declarations: [
      { property: "font-family", value: "var(--font-mono)" },
      { property: "font-size", value: "var(--text-caption)" },
      { property: "font-weight", value: "var(--weight-medium)" },
      { property: "padding", value: "0.1em 0.4em" },
      { property: "border-radius", value: "var(--radius-xs)" },
      { property: "border", value: "var(--border-thin) solid" },
      { property: "box-shadow", value: "var(--shadow-1)" },
    ],
  }),
];
