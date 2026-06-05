// author : vjlang team
export type UnitHelpersOptions = {
  baseFontSize?: number;
  designWidth?: number;
  designHeight?: number;
  precision?: number;
};

const DEFAULT_BASE_FONT_SIZE = 16;
const DEFAULT_DESIGN_WIDTH = 390;
const DEFAULT_DESIGN_HEIGHT = 844;
const DEFAULT_PRECISION = 4;

function normalizeNumber(value: number, precision: number): string {
  const factor = 10 ** precision;
  const normalized = Math.round(value * factor) / factor;
  return Number(normalized.toFixed(precision)).toString();
}

function safeDivisor(value: number, fallback: number): number {
  if (!Number.isFinite(value) || value === 0) {
    return fallback;
  }

  return value;
}

export function rem(
  px: number,
  options: Pick<UnitHelpersOptions, "baseFontSize" | "precision"> = {},
): string {
  const baseFontSize = safeDivisor(
    options.baseFontSize ?? DEFAULT_BASE_FONT_SIZE,
    DEFAULT_BASE_FONT_SIZE,
  );
  const precision = options.precision ?? DEFAULT_PRECISION;
  return `${normalizeNumber(px / baseFontSize, precision)}rem`;
}

export function vw(
  px: number,
  options: Pick<UnitHelpersOptions, "designWidth" | "precision"> = {},
): string {
  const designWidth = safeDivisor(
    options.designWidth ?? DEFAULT_DESIGN_WIDTH,
    DEFAULT_DESIGN_WIDTH,
  );
  const precision = options.precision ?? DEFAULT_PRECISION;
  return `${normalizeNumber((px / designWidth) * 100, precision)}vw`;
}

export function vh(
  px: number,
  options: Pick<UnitHelpersOptions, "designHeight" | "precision"> = {},
): string {
  const designHeight = safeDivisor(
    options.designHeight ?? DEFAULT_DESIGN_HEIGHT,
    DEFAULT_DESIGN_HEIGHT,
  );
  const precision = options.precision ?? DEFAULT_PRECISION;
  return `${normalizeNumber((px / designHeight) * 100, precision)}vh`;
}

export function createUnitHelpers(options: UnitHelpersOptions = {}) {
  const baseFontSize = options.baseFontSize ?? DEFAULT_BASE_FONT_SIZE;
  const designWidth = options.designWidth ?? DEFAULT_DESIGN_WIDTH;
  const designHeight = options.designHeight ?? DEFAULT_DESIGN_HEIGHT;
  const precision = options.precision ?? DEFAULT_PRECISION;

  return {
    rem: (px: number) => rem(px, { baseFontSize, precision }),
    vw: (px: number) => vw(px, { designWidth, precision }),
    vh: (px: number) => vh(px, { designHeight, precision }),
  };
}

export const DEFAULT_UNIT_OPTIONS = {
  baseFontSize: DEFAULT_BASE_FONT_SIZE,
  designWidth: DEFAULT_DESIGN_WIDTH,
  designHeight: DEFAULT_DESIGN_HEIGHT,
  precision: DEFAULT_PRECISION,
};
