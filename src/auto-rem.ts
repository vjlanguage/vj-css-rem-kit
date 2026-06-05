// author : vjlang team
import { UNIVERSAL_ROOT_TIERS } from "./spec/root-tiers";
import type { RootTier } from "./spec/model";

export type AutoRemTier = {
  name: RootTier["name"];
  minWidth?: number;
  maxWidth?: number;
  rootPx: number;
};

export type AutoRemSpec = {
  baseFontSize: number;
  tiers: AutoRemTier[];
};

export type ResolvedAutoRemTier = AutoRemTier & {
  width: number;
  rootPercent: number;
  cssFontSize: string;
};

export type ResolveAutoRemOptions = Partial<AutoRemSpec>;

export type InstallAutoRemOptions = ResolveAutoRemOptions & {
  target?: HTMLElement;
  getWidth?: () => number;
};

export type AutoRemController = {
  getCurrent: () => ResolvedAutoRemTier;
  update: (width?: number) => ResolvedAutoRemTier;
  destroy: () => void;
};

const DEFAULT_BASE_FONT_SIZE = 16;

function toAutoRemTier(tier: RootTier): AutoRemTier {
  return {
    name: tier.name,
    minWidth: tier.minWidth,
    maxWidth: tier.maxWidth,
    rootPx: tier.remPx,
  };
}

export const DEFAULT_AUTO_REM_SPEC: AutoRemSpec = {
  baseFontSize: DEFAULT_BASE_FONT_SIZE,
  tiers: UNIVERSAL_ROOT_TIERS.map(toAutoRemTier),
};

function normalizeSpec(options: ResolveAutoRemOptions = {}): AutoRemSpec {
  return {
    baseFontSize: options.baseFontSize ?? DEFAULT_AUTO_REM_SPEC.baseFontSize,
    tiers: options.tiers ?? DEFAULT_AUTO_REM_SPEC.tiers,
  };
}

function matchesWidth(width: number, tier: AutoRemTier): boolean {
  if (tier.minWidth !== undefined && width < tier.minWidth) {
    return false;
  }

  if (tier.maxWidth !== undefined && width > tier.maxWidth) {
    return false;
  }

  return true;
}

function findTier(width: number, tiers: AutoRemTier[]): AutoRemTier {
  const matched = tiers.find((tier) => matchesWidth(width, tier));

  if (matched) {
    return matched;
  }

  return tiers[tiers.length - 1];
}

function toPercent(rootPx: number, baseFontSize: number): number {
  return Number(((rootPx / baseFontSize) * 100).toFixed(4));
}

function formatPercent(percent: number): string {
  const normalized = Number(percent.toFixed(4));
  return `${normalized}%`;
}

function clampWidth(width: number): number {
  if (!Number.isFinite(width)) {
    return 0;
  }

  return Math.max(0, width);
}

export function resolveAutoRem(
  width: number,
  options: ResolveAutoRemOptions = {},
): ResolvedAutoRemTier {
  const spec = normalizeSpec(options);
  const safeWidth = clampWidth(width);
  const tier = findTier(safeWidth, spec.tiers);
  const rootPercent = toPercent(tier.rootPx, spec.baseFontSize);

  return {
    ...tier,
    width: safeWidth,
    rootPercent,
    cssFontSize: formatPercent(rootPercent),
  };
}

export function applyAutoRem(
  target: HTMLElement,
  resolved: ResolvedAutoRemTier,
): ResolvedAutoRemTier {
  target.style.fontSize = resolved.cssFontSize;
  target.dataset.autoRemTier = resolved.name;
  target.style.setProperty("--auto-rem-width", `${resolved.width}`);
  target.style.setProperty("--auto-rem-root-px", `${resolved.rootPx}`);
  target.style.setProperty("--auto-rem-root-percent", `${resolved.rootPercent}%`);
  return resolved;
}

export function installAutoRem(
  options: InstallAutoRemOptions = {},
): AutoRemController {
  if (typeof window === "undefined" || typeof document === "undefined") {
    throw new Error("installAutoRem requires a browser environment.");
  }

  const target = options.target ?? document.documentElement;
  const getWidth = options.getWidth ?? (() => window.innerWidth);
  const resolve = (width: number) => resolveAutoRem(width, options);

  let current = applyAutoRem(target, resolve(getWidth()));

  const handleResize = () => {
    current = applyAutoRem(target, resolve(getWidth()));
  };

  window.addEventListener("resize", handleResize, { passive: true });

  return {
    getCurrent: () => current,
    update: (width = getWidth()) => {
      current = applyAutoRem(target, resolve(width));
      return current;
    },
    destroy: () => {
      window.removeEventListener("resize", handleResize);
    },
  };
}

function createMediaQuery(tier: AutoRemTier, baseFontSize: number): string {
  const percent = formatPercent(toPercent(tier.rootPx, baseFontSize));
  const conditions: string[] = [];

  if (tier.minWidth !== undefined) {
    conditions.push(`(min-width: ${tier.minWidth}px)`);
  }

  if (tier.maxWidth !== undefined) {
    conditions.push(`(max-width: ${tier.maxWidth}px)`);
  }

  if (conditions.length === 0) {
    return `html { font-size: ${percent}; }`;
  }

  return `@media ${conditions.join(" and ")} { html { font-size: ${percent}; } }`;
}

export function createAutoRemCss(options: ResolveAutoRemOptions = {}): string {
  const spec = normalizeSpec(options);
  return spec.tiers
    .map((tier) => createMediaQuery(tier, spec.baseFontSize))
    .join("\n");
}
