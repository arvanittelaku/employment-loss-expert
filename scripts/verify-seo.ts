/**
 * Verifies public/sitemap.xml <loc> entries match buildPublicUrlInventory().
 * Run: npm run seo:verify
 */

import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { buildPublicUrlInventory } from "../lib/seo/publicUrlInventory";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SITEMAP_PATH = join(ROOT, "public", "sitemap.xml");

function extractLocs(xml: string): Set<string> {
  const locs = new Set<string>();
  const re = /<loc>([^<]+)<\/loc>/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(xml)) !== null) {
    locs.add(match[1].trim());
  }
  return locs;
}

function main(): void {
  if (!existsSync(SITEMAP_PATH)) {
    console.error("Missing public/sitemap.xml - run npm run seo:generate first.");
    process.exit(1);
  }

  const xml = readFileSync(SITEMAP_PATH, "utf8");
  const sitemapUrls = extractLocs(xml);
  const inventory = buildPublicUrlInventory();
  const inventoryUrls = new Set(inventory.allUrls);

  const missingFromSitemap = [...inventoryUrls].filter((u) => !sitemapUrls.has(u));
  const extraInSitemap = [...sitemapUrls].filter((u) => !inventoryUrls.has(u));

  if (missingFromSitemap.length === 0 && extraInSitemap.length === 0) {
    console.log(`OK: sitemap matches inventory (${sitemapUrls.size} URLs).`);
    process.exit(0);
  }

  if (missingFromSitemap.length > 0) {
    console.error("URLs in inventory but missing from public/sitemap.xml:");
    missingFromSitemap.forEach((u) => console.error(`  - ${u}`));
  }

  if (extraInSitemap.length > 0) {
    console.error("URLs in public/sitemap.xml but not in inventory:");
    extraInSitemap.forEach((u) => console.error(`  - ${u}`));
  }

  process.exit(1);
}

main();
