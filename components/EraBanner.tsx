import Link from "next/link";

export function EraBanner() {
  return (
    <div className="bg-highlight px-4 py-4 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p className="text-sm font-medium md:text-base">
          <span aria-hidden>⚠ </span>
          ERA 2025: Unfair dismissal compensation cap removed from January 2027. Uncapped awards mean
          precise expert evidence of actual financial loss is now essential in every significant ET
          case.
        </p>
        <Link
          href="/era-2025"
          className="inline-flex min-h-11 shrink-0 items-center whitespace-nowrap rounded bg-white px-4 py-2 text-sm font-semibold text-highlight transition-colors hover:bg-section-alt"
        >
          Learn more →
        </Link>
      </div>
    </div>
  );
}
