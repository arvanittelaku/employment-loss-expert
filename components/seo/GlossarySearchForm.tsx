import Link from "next/link";

type GlossarySearchFormProps = {
  query?: string;
  resultCount: number;
};

export function GlossarySearchForm({ query, resultCount }: GlossarySearchFormProps) {
  return (
    <div className="mb-8 rounded-lg border border-border bg-section-alt p-4">
      <form action="/glossary" method="get" className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label htmlFor="glossary-q" className="mb-1 block text-sm font-medium text-primary">
            Search glossary terms
          </label>
          <input
            id="glossary-q"
            name="q"
            type="search"
            defaultValue={query ?? ""}
            placeholder="e.g. Polkey, Ogden, Vento"
            className="w-full min-h-11 rounded border border-border px-3 py-2 text-body focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center rounded bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary"
        >
          Search
        </button>
      </form>
      {query && (
        <p className="mt-3 text-sm text-body">
          {resultCount} result{resultCount === 1 ? "" : "s"} for &ldquo;{query}&rdquo;.{" "}
          <Link href="/glossary" className="font-semibold text-accent hover:text-primary">
            Clear search
          </Link>
        </p>
      )}
    </div>
  );
}
