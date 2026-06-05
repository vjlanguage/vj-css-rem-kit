// author : vjlang team
import type { SemanticRole } from "./model";

function createRole(role: SemanticRole): SemanticRole {
  return role;
}

export const UNIVERSAL_SEMANTIC_ROLES: SemanticRole[] = [
  createRole({
    className: ".text-display-xl",
    comment: "Display / hero / marketing text",
    declarations: [
      { property: "font-family", value: "var(--font-display)" },
      { property: "font-size", value: "var(--text-display-xl)" },
      { property: "font-weight", value: "var(--weight-bold)" },
      { property: "line-height", value: "var(--leading-tight)" },
      { property: "letter-spacing", value: "var(--tracking-display)" },
    ],
  }),
  createRole({
    className: ".text-display-lg",
    declarations: [
      { property: "font-family", value: "var(--font-display)" },
      { property: "font-size", value: "var(--text-display-lg)" },
      { property: "font-weight", value: "var(--weight-bold)" },
      { property: "line-height", value: "var(--leading-tight)" },
      { property: "letter-spacing", value: "var(--tracking-display)" },
    ],
  }),
  createRole({
    className: ".text-display",
    declarations: [
      { property: "font-family", value: "var(--font-display)" },
      { property: "font-size", value: "var(--text-display)" },
      { property: "font-weight", value: "var(--weight-bold)" },
      { property: "line-height", value: "var(--leading-display)" },
      { property: "letter-spacing", value: "var(--tracking-tight)" },
    ],
  }),
  createRole({
    className: ".text-title-1",
    declarations: [
      { property: "font-family", value: "var(--font-display)" },
      { property: "font-size", value: "var(--text-title-1)" },
      { property: "font-weight", value: "var(--weight-semibold)" },
      { property: "line-height", value: "var(--leading-snug)" },
      { property: "letter-spacing", value: "var(--tracking-title)" },
    ],
  }),
  createRole({
    className: ".text-title-2",
    declarations: [
      { property: "font-family", value: "var(--font-sans)" },
      { property: "font-size", value: "var(--text-title-2)" },
      { property: "font-weight", value: "var(--weight-semibold)" },
      { property: "line-height", value: "var(--leading-title)" },
      { property: "letter-spacing", value: "var(--tracking-normal)" },
    ],
  }),
  createRole({
    className: ".text-title-3",
    declarations: [
      { property: "font-family", value: "var(--font-sans)" },
      { property: "font-size", value: "var(--text-title-3)" },
      { property: "font-weight", value: "var(--weight-semibold)" },
      { property: "line-height", value: "var(--leading-title)" },
      { property: "letter-spacing", value: "var(--tracking-normal)" },
    ],
  }),
  createRole({
    className: ".text-title-4",
    declarations: [
      { property: "font-family", value: "var(--font-sans)" },
      { property: "font-size", value: "var(--text-title-4)" },
      { property: "font-weight", value: "var(--weight-semibold)" },
      { property: "line-height", value: "var(--leading-heading)" },
      { property: "letter-spacing", value: "var(--tracking-normal)" },
    ],
  }),
  createRole({
    className: ".text-headline",
    declarations: [
      { property: "font-family", value: "var(--font-sans)" },
      { property: "font-size", value: "var(--text-headline)" },
      { property: "font-weight", value: "var(--weight-semibold)" },
      { property: "line-height", value: "var(--leading-heading)" },
      { property: "letter-spacing", value: "var(--tracking-normal)" },
    ],
  }),
  createRole({
    className: ".text-body-lg",
    declarations: [
      { property: "font-family", value: "var(--font-sans)" },
      { property: "font-size", value: "var(--text-body-lg)" },
      { property: "font-weight", value: "var(--weight-regular)" },
      { property: "line-height", value: "var(--leading-reading)" },
      { property: "letter-spacing", value: "var(--tracking-normal)" },
    ],
  }),
  createRole({
    className: ".text-body",
    declarations: [
      { property: "font-family", value: "var(--font-sans)" },
      { property: "font-size", value: "var(--text-body)" },
      { property: "font-weight", value: "var(--weight-regular)" },
      { property: "line-height", value: "var(--leading-reading)" },
      { property: "letter-spacing", value: "var(--tracking-normal)" },
    ],
  }),
  createRole({
    className: ".text-body-sm",
    declarations: [
      { property: "font-family", value: "var(--font-sans)" },
      { property: "font-size", value: "var(--text-body-sm)" },
      { property: "font-weight", value: "var(--weight-regular)" },
      { property: "line-height", value: "var(--leading-compact)" },
      { property: "letter-spacing", value: "var(--tracking-normal)" },
    ],
  }),
  createRole({
    className: ".text-label-lg",
    declarations: [
      { property: "font-family", value: "var(--font-sans)" },
      { property: "font-size", value: "var(--text-label-lg)" },
      { property: "font-weight", value: "var(--weight-medium)" },
      { property: "line-height", value: "var(--leading-ui)" },
      { property: "letter-spacing", value: "var(--tracking-label)" },
    ],
  }),
  createRole({
    className: ".text-label",
    declarations: [
      { property: "font-family", value: "var(--font-sans)" },
      { property: "font-size", value: "var(--text-label)" },
      { property: "font-weight", value: "var(--weight-medium)" },
      { property: "line-height", value: "var(--leading-ui)" },
      { property: "letter-spacing", value: "var(--tracking-label)" },
    ],
  }),
  createRole({
    className: ".text-caption",
    declarations: [
      { property: "font-family", value: "var(--font-sans)" },
      { property: "font-size", value: "var(--text-caption)" },
      { property: "font-weight", value: "var(--weight-regular)" },
      { property: "line-height", value: "var(--leading-caption)" },
      { property: "letter-spacing", value: "var(--tracking-caption)" },
    ],
  }),
  createRole({
    className: ".text-caption-sm",
    declarations: [
      { property: "font-family", value: "var(--font-sans)" },
      { property: "font-size", value: "var(--text-caption-sm)" },
      { property: "font-weight", value: "var(--weight-regular)" },
      { property: "line-height", value: "var(--leading-caption)" },
      { property: "letter-spacing", value: "var(--tracking-caption)" },
    ],
  }),
  createRole({
    className: ".text-overline",
    declarations: [
      { property: "font-family", value: "var(--font-sans)" },
      { property: "font-size", value: "var(--text-caption-sm)" },
      { property: "font-weight", value: "var(--weight-semibold)" },
      { property: "line-height", value: "var(--leading-caption)" },
      { property: "letter-spacing", value: "var(--tracking-overline)" },
      { property: "text-transform", value: "uppercase" },
    ],
  }),
  createRole({
    className: ".text-micro",
    declarations: [
      { property: "font-family", value: "var(--font-compact)" },
      { property: "font-size", value: "var(--text-micro)" },
      { property: "font-weight", value: "var(--weight-medium)" },
      { property: "line-height", value: "var(--leading-watch)" },
      { property: "letter-spacing", value: "var(--tracking-watch)" },
    ],
  }),
  createRole({
    className: ".text-mono",
    declarations: [
      { property: "font-family", value: "var(--font-mono)" },
      { property: "font-size", value: "var(--text-body-sm)" },
      { property: "font-weight", value: "var(--weight-regular)" },
      { property: "line-height", value: "var(--leading-ui)" },
      { property: "letter-spacing", value: "var(--tracking-normal)" },
    ],
  }),
  createRole({
    className: ".text-mono-sm",
    declarations: [
      { property: "font-family", value: "var(--font-mono)" },
      { property: "font-size", value: "var(--text-caption)" },
      { property: "font-weight", value: "var(--weight-regular)" },
      { property: "line-height", value: "var(--leading-caption)" },
      { property: "letter-spacing", value: "var(--tracking-normal)" },
    ],
  }),
  createRole({
    className: ".text-watch-title",
    declarations: [
      { property: "font-family", value: "var(--font-compact)" },
      { property: "font-size", value: "var(--text-title-3)" },
      { property: "font-weight", value: "var(--weight-semibold)" },
      { property: "line-height", value: "var(--leading-watch)" },
      { property: "letter-spacing", value: "var(--tracking-watch)" },
    ],
  }),
  createRole({
    className: ".text-watch-body",
    declarations: [
      { property: "font-family", value: "var(--font-compact)" },
      { property: "font-size", value: "var(--text-body-sm)" },
      { property: "font-weight", value: "var(--weight-regular)" },
      { property: "line-height", value: "var(--leading-caption)" },
      { property: "letter-spacing", value: "var(--tracking-watch)" },
    ],
  }),
];
