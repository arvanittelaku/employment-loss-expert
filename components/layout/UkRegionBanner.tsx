import { SITE_REGION_NOTICE, SITE_REGION_SHORT } from "@/lib/site";

/** Site-wide notice: UK-only service for solicitors in England and Wales. */
export function UkRegionBanner() {
  return (
    <div
      className="border-b border-border bg-section-alt"
      role="note"
      aria-label="Service region: United Kingdom only"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2.5 sm:flex-row sm:items-center sm:gap-3 sm:px-6 lg:px-8">
        <span className="inline-flex w-fit shrink-0 items-center rounded bg-primary px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
          {SITE_REGION_SHORT}
        </span>
        <p className="text-sm leading-relaxed text-body">{SITE_REGION_NOTICE}</p>
      </div>
    </div>
  );
}
