// author : vjlang team
import type { RootTier } from "./model";

export const UNIVERSAL_SPEC_SOURCE_FILE = "typography-universal.css";

export const UNIVERSAL_ROOT_TIERS: RootTier[] = [
  {
    name: "watch",
    minWidth: 0,
    maxWidth: 200,
    fontSizePercent: 75,
    remPx: 12,
    comment: "Watch / wearable",
  },
  {
    name: "phone-small",
    minWidth: 201,
    maxWidth: 374,
    fontSizePercent: 87.5,
    remPx: 14,
    comment: "Phone small",
  },
  {
    name: "phone-standard",
    minWidth: 375,
    maxWidth: 389,
    fontSizePercent: 93.75,
    remPx: 15,
    comment: "Phone standard",
  },
  {
    name: "phone-large",
    minWidth: 390,
    maxWidth: 599,
    fontSizePercent: 100,
    remPx: 16,
    comment: "Phone large / base",
  },
  {
    name: "foldable",
    minWidth: 600,
    maxWidth: 767,
    fontSizePercent: 106.25,
    remPx: 17,
    comment: "Foldable / large phone",
  },
  {
    name: "tablet",
    minWidth: 768,
    maxWidth: 1023,
    fontSizePercent: 112.5,
    remPx: 18,
    comment: "Tablet small + standard",
  },
  {
    name: "tablet-large",
    minWidth: 1024,
    maxWidth: 1279,
    fontSizePercent: 118.75,
    remPx: 19,
    comment: "Tablet large / iPad Pro / ChromeOS",
  },
  {
    name: "desktop",
    minWidth: 1280,
    maxWidth: 1439,
    fontSizePercent: 125,
    remPx: 20,
    comment: "Desktop / laptop",
  },
  {
    name: "desktop-wide",
    minWidth: 1440,
    maxWidth: 1919,
    fontSizePercent: 131.25,
    remPx: 21,
    comment: "Wide desktop",
  },
  {
    name: "tv",
    minWidth: 1920,
    fontSizePercent: 150,
    remPx: 24,
    comment: "Ultrawide / 4K / TV",
  },
];
