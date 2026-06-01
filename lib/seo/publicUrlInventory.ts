/**
 * Canonical public URL inventory for sitemap generation and SEO verification.
 * Add new static marketing routes to APP_STATIC_PATHS when they ship.
 */

import { getCaseTypeSlugs } from "../data/case-types";
import { getGuideSlugs } from "../data/guides";
import { SITE_URL } from "../site";

export const CANONICAL_SITE_URL = SITE_URL;

/** Paths excluded from the XML sitemap (may still exist as pages). */
export const SITEMAP_EXCLUDED_PATHS = new Set([
  "/contact",
  "/thank-you",
  "/privacy",
  "/terms",
]);

/**
 * First-class static routes with optional sitemap overrides.
 * Paths must start with "/" (use "" for home in normalization).
 */
export const APP_STATIC_PATHS: {
  path: string;
  priority?: number;
  changefreq?: SitemapChangeFreq;
}[] = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/services", priority: 0.95, changefreq: "monthly" },
  { path: "/how-loss-is-calculated", priority: 0.95, changefreq: "monthly" },
  { path: "/era-2025", priority: 0.95, changefreq: "monthly" },
  { path: "/practice-areas", priority: 0.93, changefreq: "monthly" },
  { path: "/practice-areas/personal-injury", priority: 0.92, changefreq: "monthly" },
  { path: "/practice-areas/employment-tribunal", priority: 0.92, changefreq: "monthly" },
  { path: "/practice-areas/family-law", priority: 0.92, changefreq: "monthly" },
  { path: "/case-types", priority: 0.92, changefreq: "monthly" },
  { path: "/what-is-an-employment-loss-expert", priority: 0.9, changefreq: "monthly" },
  { path: "/qualifications", priority: 0.88, changefreq: "monthly" },
  { path: "/how-to-instruct", priority: 0.88, changefreq: "monthly" },
  { path: "/fees", priority: 0.88, changefreq: "monthly" },
  { path: "/faq", priority: 0.87, changefreq: "monthly" },
  { path: "/guides", priority: 0.87, changefreq: "monthly" },
  { path: "/glossary", priority: 0.75, changefreq: "monthly" },
  { path: "/cookies", priority: 0.5, changefreq: "yearly" },
];

export type SitemapChangeFreq =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export type PublicUrlEntry = {
  path: string;
  url: string;
  priority: number;
  changefreq: SitemapChangeFreq;
};

export type PublicUrlInventory = {
  allPaths: string[];
  allUrls: string[];
  entries: PublicUrlEntry[];
};

function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  const withLeading = path.startsWith("/") ? path : `/${path}`;
  return withLeading.replace(/\/+$/, "") || "/";
}

function pathToAbsoluteUrl(path: string): string {
  const normalized = normalizePath(path);
  if (normalized === "/") return `${CANONICAL_SITE_URL}/`;
  return `${CANONICAL_SITE_URL}${normalized}`;
}

function getDynamicPaths(): string[] {
  const caseTypes = getCaseTypeSlugs().map((slug) => `/case-types/${slug}`);
  const guides = getGuideSlugs().map((slug) => `/guides/${slug}`);
  return [...caseTypes, ...guides];
}

function dedupeSorted(paths: string[]): string[] {
  return [...new Set(paths.map(normalizePath))].sort((a, b) => a.localeCompare(b));
}

/**
 * Builds the complete public URL inventory used by generate-seo and verify scripts.
 */
export function buildPublicUrlInventory(): PublicUrlInventory {
  const staticPaths = APP_STATIC_PATHS.map((p) => normalizePath(p.path)).filter(
    (p) => !SITEMAP_EXCLUDED_PATHS.has(p)
  );

  const dynamicPaths = getDynamicPaths().filter((p) => !SITEMAP_EXCLUDED_PATHS.has(p));

  const allPaths = dedupeSorted([...staticPaths, ...dynamicPaths]);

  const staticMeta = new Map(
    APP_STATIC_PATHS.map((p) => [normalizePath(p.path), p] as const)
  );

  const entries: PublicUrlEntry[] = allPaths.map((path) => {
    const staticEntry = staticMeta.get(path);
    return {
      path,
      url: pathToAbsoluteUrl(path),
      priority: staticEntry?.priority ?? getDefaultPriority(path),
      changefreq: staticEntry?.changefreq ?? getDefaultChangeFreq(path),
    };
  });

  return {
    allPaths,
    allUrls: entries.map((e) => e.url),
    entries,
  };
}

/** Default priority heuristics for paths without explicit metadata. */
export function getDefaultPriority(path: string): number {
  if (path === "/") return 1.0;
  if (path.startsWith("/case-types/")) return 0.88;
  if (path.startsWith("/guides/")) return 0.8;
  if (path.startsWith("/practice-areas/")) return 0.92;
  if (path === "/cookies") return 0.5;
  return 0.7;
}

/** Default changefreq heuristics for paths without explicit metadata. */
export function getDefaultChangeFreq(path: string): SitemapChangeFreq {
  if (path === "/") return "weekly";
  if (path.startsWith("/guides/") || path.startsWith("/case-types/")) return "monthly";
  if (path === "/cookies" || path === "/privacy" || path === "/terms") return "yearly";
  return "monthly";
}
