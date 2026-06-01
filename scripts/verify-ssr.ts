/**
 * Validates that key static pages export metadata titles (SSR head expectations).
 * Run: npm run seo:verify:ssr
 */

import { existsSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const PAGES_REQUIRING_METADATA = [
  "app/page.tsx",
  "app/services/page.tsx",
  "app/how-loss-is-calculated/page.tsx",
  "app/era-2025/page.tsx",
  "app/contact/page.tsx",
  "app/cookies/page.tsx",
  "app/practice-areas/page.tsx",
  "app/case-types/page.tsx",
  "app/guides/page.tsx",
  "app/glossary/page.tsx",
  "app/faq/page.tsx",
  "app/how-to-instruct/page.tsx",
  "app/what-is-an-employment-loss-expert/page.tsx",
];

function main(): void {
  const failures: string[] = [];

  for (const relativePath of PAGES_REQUIRING_METADATA) {
    const fullPath = join(ROOT, relativePath);
    if (!existsSync(fullPath)) {
      failures.push(`Missing page file: ${relativePath}`);
      continue;
    }

    const source = readFileSync(fullPath, "utf8");
    if (!source.includes("export const metadata") && !source.includes("generateMetadata")) {
      failures.push(`${relativePath}: no metadata export found`);
    }
    if (!source.includes("title")) {
      failures.push(`${relativePath}: metadata may be missing title`);
    }
  }

  if (failures.length > 0) {
    console.error("SSR metadata verification failed:");
    failures.forEach((f) => console.error(`  - ${f}`));
    process.exit(1);
  }

  console.log(`OK: ${PAGES_REQUIRING_METADATA.length} key pages declare metadata.`);
  process.exit(0);
}

main();
