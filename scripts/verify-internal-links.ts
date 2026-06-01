/**
 * Verifies SEO Architecture §3 internal linking rules at build time.
 * Run: npm run seo:verify:links
 */

import { auditInternalLinks } from "../lib/seo/internalLinkAudit";

function main(): void {
  const errors = auditInternalLinks();

  if (errors.length > 0) {
    console.error("Internal link audit failed:");
    errors.forEach((e) => console.error(`  - ${e}`));
    process.exit(1);
  }

  console.log("OK: internal linking rules satisfied.");
  process.exit(0);
}

main();
