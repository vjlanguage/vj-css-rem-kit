// author : vjlang team
import type {
  BreakpointReference,
  ReferenceTables,
  RoleMappingReference,
  SpatialReference,
  TypeScaleReference,
  UniversalSpec,
} from "./model";
import { UNIVERSAL_ACCESSIBILITY_RULES } from "./accessibility";
import { UNIVERSAL_ELEMENT_DEFAULTS } from "./elements";
import { UNIVERSAL_ROOT_TIERS, UNIVERSAL_SPEC_SOURCE_FILE } from "./root-tiers";
import { UNIVERSAL_SEMANTIC_ROLES } from "./roles";
import { UNIVERSAL_TOKENS } from "./tokens";
import { UNIVERSAL_UTILITY_MODIFIERS } from "./utilities";

export const BREAKPOINT_REFERENCE_SUMMARY: BreakpointReference[] = [
  { viewport: "<= 200px", rootPercent: 75, remPx: 12, deviceExamples: "Apple Watch, Wear OS" },
  { viewport: "201-374px", rootPercent: 87.5, remPx: 14, deviceExamples: "iPhone SE, small Android" },
  { viewport: "375-389px", rootPercent: 93.75, remPx: 15, deviceExamples: "iPhone 14/15, Pixel 8" },
  { viewport: "390-599px", rootPercent: 100, remPx: 16, deviceExamples: "iPhone Pro Max, Android XL" },
  { viewport: "600-767px", rootPercent: 106.25, remPx: 17, deviceExamples: "Galaxy Z Fold half-open" },
  { viewport: "768-1023px", rootPercent: 112.5, remPx: 18, deviceExamples: "iPad mini, iPad Air, tablets" },
  { viewport: "1024-1279px", rootPercent: 118.75, remPx: 19, deviceExamples: 'iPad Pro 12.9", ChromeOS' },
  { viewport: "1280-1439px", rootPercent: 125, remPx: 20, deviceExamples: "MacBook, Windows laptop" },
  { viewport: "1440-1919px", rootPercent: 131.25, remPx: 21, deviceExamples: "iMac, wide monitors" },
  { viewport: "1920px+", rootPercent: 150, remPx: 24, deviceExamples: "4K, ultrawide, TV browsers" },
];

export const TYPE_SCALE_REFERENCE_TABLE: TypeScaleReference[] = [
  { token: "display-xl", rem: 3.0, computedPx: { "12": 36, "14": 42, "15": 45, "16": 48, "17": 51, "18": 54, "19": 57, "20": 60, "21": 63, "24": 72 } },
  { token: "display-lg", rem: 2.5, computedPx: { "12": 30, "14": 35, "15": 38, "16": 40, "17": 43, "18": 45, "19": 48, "20": 50, "21": 53, "24": 60 } },
  { token: "display", rem: 2.125, computedPx: { "12": 26, "14": 30, "15": 32, "16": 34, "17": 36, "18": 38, "19": 40, "20": 43, "21": 45, "24": 51 } },
  { token: "title-1", rem: 1.75, computedPx: { "12": 21, "14": 25, "15": 26, "16": 28, "17": 30, "18": 32, "19": 33, "20": 35, "21": 37, "24": 42 } },
  { token: "title-2", rem: 1.375, computedPx: { "12": 17, "14": 19, "15": 21, "16": 22, "17": 23, "18": 25, "19": 26, "20": 28, "21": 29, "24": 33 } },
  { token: "title-3", rem: 1.25, computedPx: { "12": 15, "14": 18, "15": 19, "16": 20, "17": 21, "18": 23, "19": 24, "20": 25, "21": 26, "24": 30 } },
  { token: "title-4", rem: 1.125, computedPx: { "12": 14, "14": 16, "15": 17, "16": 18, "17": 19, "18": 20, "19": 21, "20": 23, "21": 24, "24": 27 } },
  { token: "headline", rem: 1.063, computedPx: { "12": 13, "14": 15, "15": 16, "16": 17, "17": 18, "18": 19, "19": 20, "20": 21, "21": 22, "24": 26 } },
  { token: "body-lg", rem: 1.063, computedPx: { "12": 13, "14": 15, "15": 16, "16": 17, "17": 18, "18": 19, "19": 20, "20": 21, "21": 22, "24": 26 } },
  { token: "body", rem: 1.0, computedPx: { "12": 12, "14": 14, "15": 15, "16": 16, "17": 17, "18": 18, "19": 19, "20": 20, "21": 21, "24": 24 } },
  { token: "body-sm", rem: 0.938, computedPx: { "12": 11, "14": 13, "15": 14, "16": 15, "17": 16, "18": 17, "19": 18, "20": 19, "21": 20, "24": 23 } },
  { token: "label-lg", rem: 0.875, computedPx: { "12": 11, "14": 12, "15": 13, "16": 14, "17": 15, "18": 16, "19": 17, "20": 18, "21": 18, "24": 21 } },
  { token: "label", rem: 0.813, computedPx: { "12": 10, "14": 11, "15": 12, "16": 13, "17": 14, "18": 15, "19": 15, "20": 16, "21": 17, "24": 20 } },
  { token: "caption", rem: 0.75, computedPx: { "12": 9, "14": 11, "15": 11, "16": 12, "17": 13, "18": 14, "19": 14, "20": 15, "21": 16, "24": 18 } },
  { token: "caption-sm", rem: 0.688, computedPx: { "12": 8, "14": 10, "15": 10, "16": 11, "17": 12, "18": 12, "19": 13, "20": 14, "21": 14, "24": 17 } },
  { token: "micro", rem: 0.625, computedPx: { "12": 8, "14": 9, "15": 9, "16": 10, "17": 11, "18": 11, "19": 12, "20": 13, "21": 13, "24": 15 } },
];

export const ROLE_MAPPING_REFERENCE_TABLE: RoleMappingReference[] = [
  { unifiedToken: "display-xl", iosHig: "-", material3: "Display Large" },
  { unifiedToken: "display-lg", iosHig: "-", material3: "Display Medium" },
  { unifiedToken: "display", iosHig: "Large Title", material3: "Display Small" },
  { unifiedToken: "title-1", iosHig: "Title 1", material3: "Headline Large" },
  { unifiedToken: "title-2", iosHig: "Title 2", material3: "Headline Medium" },
  { unifiedToken: "title-3", iosHig: "Title 3", material3: "Headline Small" },
  { unifiedToken: "title-4", iosHig: "-", material3: "Title Large" },
  { unifiedToken: "headline", iosHig: "Headline", material3: "Title Medium" },
  { unifiedToken: "body-lg", iosHig: "Body", material3: "Body Large" },
  { unifiedToken: "body", iosHig: "Callout", material3: "Body Medium" },
  { unifiedToken: "body-sm", iosHig: "Subhead", material3: "Body Small" },
  { unifiedToken: "label-lg", iosHig: "-", material3: "Label Large" },
  { unifiedToken: "label", iosHig: "Footnote", material3: "Label Medium" },
  { unifiedToken: "caption", iosHig: "Caption 1", material3: "Label Small" },
  { unifiedToken: "caption-sm", iosHig: "Caption 2", material3: "-" },
  { unifiedToken: "micro", iosHig: "-", material3: "- (wearable only)" },
];

export const SPATIAL_REFERENCE_TABLE: SpatialReference[] = [
  { token: "space-1", rem: 0.25, computedPx: { "12": 3, "16": 4, "18": 5, "20": 5, "24": 6 } },
  { token: "space-2", rem: 0.5, computedPx: { "12": 6, "16": 8, "18": 9, "20": 10, "24": 12 } },
  { token: "space-4", rem: 1.0, computedPx: { "12": 12, "16": 16, "18": 18, "20": 20, "24": 24 } },
  { token: "space-6", rem: 1.5, computedPx: { "12": 18, "16": 24, "18": 27, "20": 30, "24": 36 } },
  { token: "space-8", rem: 2.0, computedPx: { "12": 24, "16": 32, "18": 36, "20": 40, "24": 48 } },
  { token: "target-min", rem: 2.75, computedPx: { "12": 33, "16": 44, "18": 50, "20": 55, "24": 66 }, note: ">=44 from 16px up" },
  { token: "target-md", rem: 3.0, computedPx: { "12": 36, "16": 48, "18": 54, "20": 60, "24": 72 }, note: ">=48 from 16px up" },
  { token: "icon-md", rem: 1.25, computedPx: { "12": 15, "16": 20, "18": 23, "20": 25, "24": 30 } },
];

export const UNIVERSAL_REFERENCE_TABLES: ReferenceTables = {
  breakpointSummary: BREAKPOINT_REFERENCE_SUMMARY,
  typeScaleComputedPx: TYPE_SCALE_REFERENCE_TABLE,
  roleMapping: ROLE_MAPPING_REFERENCE_TABLE,
  spatialAtKeyRoots: SPATIAL_REFERENCE_TABLE,
};

export const UNIVERSAL_SPEC: UniversalSpec = {
  sourceFile: UNIVERSAL_SPEC_SOURCE_FILE,
  rootTiers: UNIVERSAL_ROOT_TIERS,
  tokens: UNIVERSAL_TOKENS,
  semanticRoles: UNIVERSAL_SEMANTIC_ROLES,
  elementDefaults: UNIVERSAL_ELEMENT_DEFAULTS,
  utilityModifiers: UNIVERSAL_UTILITY_MODIFIERS,
  accessibilityRules: UNIVERSAL_ACCESSIBILITY_RULES,
  referenceTables: UNIVERSAL_REFERENCE_TABLES,
};
