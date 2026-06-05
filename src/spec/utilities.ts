// author : vjlang team
import type { UtilityModifier } from "./model";

function createUtilityModifier(utility: UtilityModifier): UtilityModifier {
  return utility;
}

export const UNIVERSAL_UTILITY_MODIFIERS: UtilityModifier[] = [
  createUtilityModifier({
    selector: ".weight-thin",
    comment: "Weight",
    declarations: [{ property: "font-weight", value: "var(--weight-thin)" }],
  }),
  createUtilityModifier({
    selector: ".weight-light",
    declarations: [{ property: "font-weight", value: "var(--weight-light)" }],
  }),
  createUtilityModifier({
    selector: ".weight-regular",
    declarations: [{ property: "font-weight", value: "var(--weight-regular)" }],
  }),
  createUtilityModifier({
    selector: ".weight-medium",
    declarations: [{ property: "font-weight", value: "var(--weight-medium)" }],
  }),
  createUtilityModifier({
    selector: ".weight-semibold",
    declarations: [{ property: "font-weight", value: "var(--weight-semibold)" }],
  }),
  createUtilityModifier({
    selector: ".weight-bold",
    declarations: [{ property: "font-weight", value: "var(--weight-bold)" }],
  }),
  createUtilityModifier({
    selector: ".weight-black",
    declarations: [{ property: "font-weight", value: "var(--weight-black)" }],
  }),

  createUtilityModifier({
    selector: ".text-left",
    comment: "Alignment",
    declarations: [{ property: "text-align", value: "left" }],
  }),
  createUtilityModifier({
    selector: ".text-center",
    declarations: [{ property: "text-align", value: "center" }],
  }),
  createUtilityModifier({
    selector: ".text-right",
    declarations: [{ property: "text-align", value: "right" }],
  }),

  createUtilityModifier({
    selector: ".text-uppercase",
    comment: "Transform",
    declarations: [{ property: "text-transform", value: "uppercase" }],
  }),
  createUtilityModifier({
    selector: ".text-lowercase",
    declarations: [{ property: "text-transform", value: "lowercase" }],
  }),
  createUtilityModifier({
    selector: ".text-capitalize",
    declarations: [{ property: "text-transform", value: "capitalize" }],
  }),
  createUtilityModifier({
    selector: ".text-normal-case",
    declarations: [{ property: "text-transform", value: "none" }],
  }),

  createUtilityModifier({
    selector: ".text-truncate",
    comment: "Truncation",
    declarations: [
      { property: "overflow", value: "hidden" },
      { property: "text-overflow", value: "ellipsis" },
      { property: "white-space", value: "nowrap" },
    ],
  }),
  createUtilityModifier({
    selector: ".text-clamp-2",
    declarations: [
      { property: "display", value: "-webkit-box" },
      { property: "-webkit-line-clamp", value: "2" },
      { property: "-webkit-box-orient", value: "vertical" },
      { property: "overflow", value: "hidden" },
    ],
  }),
  createUtilityModifier({
    selector: ".text-clamp-3",
    declarations: [
      { property: "display", value: "-webkit-box" },
      { property: "-webkit-line-clamp", value: "3" },
      { property: "-webkit-box-orient", value: "vertical" },
      { property: "overflow", value: "hidden" },
    ],
  }),

  createUtilityModifier({
    selector: ".measure-narrow",
    comment: "Measure / max-width",
    declarations: [{ property: "max-width", value: "var(--measure-narrow)" }],
  }),
  createUtilityModifier({
    selector: ".measure-normal",
    declarations: [{ property: "max-width", value: "var(--measure-normal)" }],
  }),
  createUtilityModifier({
    selector: ".measure-wide",
    declarations: [{ property: "max-width", value: "var(--measure-wide)" }],
  }),

  createUtilityModifier({
    selector: ".font-sans",
    comment: "Font family",
    declarations: [{ property: "font-family", value: "var(--font-sans)" }],
  }),
  createUtilityModifier({
    selector: ".font-display",
    declarations: [{ property: "font-family", value: "var(--font-display)" }],
  }),
  createUtilityModifier({
    selector: ".font-mono",
    declarations: [{ property: "font-family", value: "var(--font-mono)" }],
  }),
  createUtilityModifier({
    selector: ".font-rounded",
    declarations: [{ property: "font-family", value: "var(--font-rounded)" }],
  }),
  createUtilityModifier({
    selector: ".font-compact",
    declarations: [{ property: "font-family", value: "var(--font-compact)" }],
  }),

  createUtilityModifier({
    selector: ".italic",
    comment: "Italic",
    declarations: [{ property: "font-style", value: "italic" }],
  }),
  createUtilityModifier({
    selector: ".not-italic",
    declarations: [{ property: "font-style", value: "normal" }],
  }),

  createUtilityModifier({
    selector: ".tabular-nums",
    comment: "Tabular numbers",
    declarations: [{ property: "font-variant-numeric", value: "tabular-nums" }],
  }),
  createUtilityModifier({
    selector: ".oldstyle-nums",
    declarations: [{ property: "font-variant-numeric", value: "oldstyle-nums" }],
  }),
];
