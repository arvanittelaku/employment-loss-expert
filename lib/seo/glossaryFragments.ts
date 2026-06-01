/** Kebab-case fragment IDs for glossary deep links (SEO Architecture Appendix C). */
export function termToFragmentId(term: string): string {
  return term
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
