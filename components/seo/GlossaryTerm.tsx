import Link from "next/link";
import type { GlossaryTerm as GlossaryTermType } from "@/lib/data/glossary";

export function GlossaryTerm({ term }: { term: GlossaryTermType }) {
  return (
    <article
      id={term.fragmentId}
      className="scroll-mt-24 rounded-lg border border-border bg-white p-5 card-shadow"
    >
      <h2 className="text-lg font-bold text-primary">{term.term}</h2>
      <p className="mt-2 font-medium text-body">{term.summary}</p>
      <p className="mt-2 text-body">{term.definition}</p>
      {term.link && (
        <Link href={term.link.href} className="mt-3 inline-block font-semibold text-accent">
          {term.link.label || "Learn more"} →
        </Link>
      )}
    </article>
  );
}
