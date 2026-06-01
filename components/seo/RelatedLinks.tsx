import Link from "next/link";
import type { RelatedLink } from "@/lib/data/seo-related-links";

type RelatedLinksProps = {
  title?: string;
  links: RelatedLink[];
};

/** SEO Architecture §3: grouped internal links for hub connectivity. */
export function RelatedLinks({
  title = "Related pages",
  links,
}: RelatedLinksProps) {
  if (links.length === 0) return null;

  return (
    <nav
      className="mt-10 rounded-lg border border-border bg-section-alt p-5"
      aria-label={title}
    >
      <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">{title}</h2>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm font-medium text-accent hover:text-primary hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
