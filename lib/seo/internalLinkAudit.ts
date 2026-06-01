/**
 * Build-time audit for SEO Architecture §3 internal linking rules.
 */

import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { getCaseTypeSlugs } from "../data/case-types";
import { getGuideSlugs } from "../data/guides";
import { glossaryTerms } from "../data/glossary";
import {
  era2025RelatedLinks,
  howLossCalculatedRelatedLinks,
  getCaseTypeRelatedLinks,
  getPracticeAreaRelatedLinks,
  getGuideRelatedLinks,
  practiceAreasHubLinks,
  caseTypesHubLinks,
  servicesHubLinks,
  guidesHubLinks,
  faqHubLinks,
  feesHubLinks,
  howToInstructHubLinks,
  qualificationsHubLinks,
  whatIsExpertLinks,
  type RelatedLink,
} from "../data/seo-related-links";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "..");
const HOMEPAGE_PATH = join(ROOT, "app", "page.tsx");

function hrefs(links: RelatedLink[]): Set<string> {
  return new Set(links.map((l) => l.href.split("#")[0]));
}

function hasHref(links: RelatedLink[], href: string): boolean {
  return links.some((l) => l.href === href || l.href.startsWith(`${href}#`));
}

function hasFragment(links: RelatedLink[], fragment: string): boolean {
  return links.some((l) => l.href === `/glossary#${fragment}`);
}

function minLinks(label: string, links: RelatedLink[], min: number, errors: string[]): void {
  if (links.length < min) {
    errors.push(`${label}: ${links.length} links (minimum ${min})`);
  }
}

function requireHrefs(
  label: string,
  links: RelatedLink[],
  required: string[],
  errors: string[]
): void {
  for (const href of required) {
    if (!hasHref(links, href)) {
      errors.push(`${label}: missing required link ${href}`);
    }
  }
}

export function auditInternalLinks(): string[] {
  const errors: string[] = [];

  // Rule 1: /how-loss-is-calculated
  requireHrefs("how-loss-is-calculated", howLossCalculatedRelatedLinks, [
    "/practice-areas/personal-injury",
    "/practice-areas/employment-tribunal",
    "/practice-areas/family-law",
    "/case-types/personal-injury-loss-of-earnings",
    "/case-types/unfair-dismissal-et",
    "/case-types/divorce-loss-of-career",
    "/guides/ogden-tables-loss-of-earnings-guide",
    "/guides/smith-v-manchester-guide",
    "/guides/era-2025-et-loss-guide",
    "/contact",
  ], errors);
  minLinks("how-loss-is-calculated", howLossCalculatedRelatedLinks, 12, errors);

  // Rule 2: /era-2025
  requireHrefs("era-2025", era2025RelatedLinks, [
    "/practice-areas/employment-tribunal",
    "/how-loss-is-calculated",
    "/guides/era-2025-et-loss-guide",
    "/case-types/unfair-dismissal-et",
    "/contact",
  ], errors);
  if (!hasFragment(era2025RelatedLinks, "polkey-reduction")) {
    errors.push("era-2025: missing glossary#polkey-reduction");
  }

  // Rule 3: practice areas
  for (const slug of ["personal-injury", "employment-tribunal", "family-law"] as const) {
    const links = getPracticeAreaRelatedLinks(slug);
    minLinks(`practice-area/${slug}`, links, 6, errors);
    requireHrefs(`practice-area/${slug}`, links, ["/how-loss-is-calculated", "/qualifications", "/contact"], errors);
    const caseTypeLinks = links.filter((l) => l.href.startsWith("/case-types/"));
    if (caseTypeLinks.length < 3) {
      errors.push(`practice-area/${slug}: ${caseTypeLinks.length} case type links (minimum 3)`);
    }
  }

  // Rule 4: case types
  for (const slug of getCaseTypeSlugs()) {
    const links = getCaseTypeRelatedLinks(slug);
    minLinks(`case-type/${slug}`, links, 7, errors);
    requireHrefs(`case-type/${slug}`, links, ["/how-loss-is-calculated", "/how-to-instruct", "/contact"], errors);
    if (!links.some((l) => l.href.startsWith("/practice-areas/"))) {
      errors.push(`case-type/${slug}: missing parent practice area link`);
    }
    const glossaryLinks = links.filter((l) => l.href.startsWith("/glossary#"));
    if (glossaryLinks.length < 2) {
      errors.push(`case-type/${slug}: ${glossaryLinks.length} glossary fragment links (minimum 2)`);
    }
  }

  // Rule 5: guides
  for (const slug of getGuideSlugs()) {
    const links = getGuideRelatedLinks(slug);
    minLinks(`guide/${slug}`, links, 6, errors);
    requireHrefs(`guide/${slug}`, links, ["/guides", "/how-loss-is-calculated", "/how-to-instruct", "/contact"], errors);
  }

  // Rule 6: glossary terms
  for (const term of glossaryTerms) {
    if (!term.fragmentId) {
      errors.push(`glossary term "${term.term}": missing fragmentId`);
    }
    if (!term.summary?.trim()) {
      errors.push(`glossary term "${term.term}": missing GEO summary`);
    }
    if (!term.link?.href) {
      errors.push(`glossary term "${term.term}": missing primary internal link`);
    }
  }
  if (glossaryTerms.length !== 32) {
    errors.push(`glossary: expected 32 terms, found ${glossaryTerms.length}`);
  }

  // Rule 7: homepage
  const homepage = readFileSync(HOMEPAGE_PATH, "utf8");
  const homepageRequired = [
    "/practice-areas/personal-injury",
    "/practice-areas/employment-tribunal",
    "/practice-areas/family-law",
    "/how-loss-is-calculated",
    "/what-is-an-employment-loss-expert",
    "/guides",
    "/faq",
    "/contact",
  ];
  for (const href of homepageRequired) {
    if (!homepage.includes(href)) {
      errors.push(`homepage: missing link to ${href}`);
    }
  }
  if (!homepage.includes("/era-2025") && !homepage.includes("EraBanner")) {
    errors.push("homepage: missing link to /era-2025");
  }
  if (!homepage.includes("homepageServices")) {
    errors.push("homepage: missing all 8 service anchor links via homepageServices");
  }

  // Hub pages must expose RelatedLinks data
  const hubPages: [string, RelatedLink[], number][] = [
    ["practice-areas hub", practiceAreasHubLinks, 6],
    ["case-types hub", caseTypesHubLinks, 6],
    ["services hub", servicesHubLinks, 6],
    ["guides hub", guidesHubLinks, 6],
    ["faq hub", faqHubLinks, 5],
    ["fees hub", feesHubLinks, 5],
    ["how-to-instruct hub", howToInstructHubLinks, 6],
    ["qualifications hub", qualificationsHubLinks, 5],
    ["what-is hub", whatIsExpertLinks, 6],
  ];
  for (const [label, links, min] of hubPages) {
    minLinks(label, links, min, errors);
  }

  return errors;
}
