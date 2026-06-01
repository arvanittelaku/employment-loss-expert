import Link from "next/link";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export function CTASection({
  title = "Ready to Instruct an Employment Loss Expert?",
  description = "Submit your case details and we will match you with a qualified UK employment loss expert witness for PI, ET, or family law proceedings. Response within 1 business day.",
  primaryHref = "/contact",
  primaryLabel = "Instruct an Expert Witness",
}: CTASectionProps) {
  return (
    <section className="bg-accent py-14 md:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
        <p className="mt-4 text-white/90">{description}</p>
        <Link
          href={primaryHref}
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded bg-white px-8 py-3 text-sm font-semibold text-accent transition-colors hover:bg-section-alt"
        >
          {primaryLabel}
        </Link>
      </div>
    </section>
  );
}
