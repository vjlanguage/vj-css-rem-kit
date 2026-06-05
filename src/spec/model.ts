// author : vjlang team
export type SpecSection =
  | "root-tiers"
  | "font-stacks"
  | "type-scale"
  | "line-height"
  | "letter-spacing"
  | "font-weight"
  | "spatial"
  | "shadow"
  | "z-index"
  | "motion";

export type TokenCategory =
  | "font-stacks"
  | "type-scale"
  | "line-height"
  | "letter-spacing"
  | "font-weight"
  | "spatial"
  | "shadow"
  | "z-index"
  | "motion";

export type TokenSubcategory =
  | "space"
  | "target"
  | "radius"
  | "border"
  | "icon"
  | "measure"
  | "duration"
  | "easing"
  | "transition";

export type TokenVariant = "base" | "dark";

export type RootTier = {
  name: string;
  minWidth?: number;
  maxWidth?: number;
  fontSizePercent: number;
  remPx: number;
  comment?: string;
};

export type Token = {
  name: string;
  value: string;
  category: TokenCategory;
  section: SpecSection;
  subcategory?: TokenSubcategory;
  variant?: TokenVariant;
  comment?: string;
};

export type UniversalSpec = {
  sourceFile: string;
  rootTiers: RootTier[];
  tokens: Token[];
  semanticRoles: SemanticRole[];
  elementDefaults: ElementDefault[];
  utilityModifiers: UtilityModifier[];
  accessibilityRules: AccessibilityRule[];
  referenceTables: ReferenceTables;
};

export type SemanticRoleDeclaration = {
  property: string;
  value: string;
};

export type SemanticRole = {
  className: string;
  declarations: SemanticRoleDeclaration[];
  comment?: string;
};

export type ElementDefault = {
  selector: string;
  declarations: SemanticRoleDeclaration[];
  comment?: string;
};

export type UtilityModifier = {
  selector: string;
  declarations: SemanticRoleDeclaration[];
  comment?: string;
};

export type AccessibilityBlock = {
  selector: string;
  declarations: SemanticRoleDeclaration[];
};

export type AccessibilityRule = {
  mediaQuery: string;
  blocks: AccessibilityBlock[];
  comment?: string;
};

export type BreakpointReference = {
  viewport: string;
  rootPercent: number;
  remPx: number;
  deviceExamples: string;
};

export type TypeScaleReference = {
  token: string;
  rem: number;
  computedPx: Record<string, number>;
};

export type RoleMappingReference = {
  unifiedToken: string;
  iosHig: string;
  material3: string;
};

export type SpatialReference = {
  token: string;
  rem: number;
  computedPx: Record<string, number>;
  note?: string;
};

export type ReferenceTables = {
  breakpointSummary: BreakpointReference[];
  typeScaleComputedPx: TypeScaleReference[];
  roleMapping: RoleMappingReference[];
  spatialAtKeyRoots: SpatialReference[];
};
