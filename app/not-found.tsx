import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/case-types", label: "Case Types" },
  { href: "/how-loss-is-calculated", label: "How Loss Is Calculated" },
  { href: "/era-2025", label: "ERA 2025" },
  { href: "/guides", label: "Guides" },
  { href: "/contact", label: "Contact Us" },
];

export default function NotFound() {
  return (
    <PageLayout showCTA={false}>
      <section className="bg-primary py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-5xl font-bold tracking-tight text-accent sm:text-6xl md:text-7xl" aria-hidden>
            404
          </p>
          <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">Page Not Found</h1>
          <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
            The page you are looking for does not exist or may have been moved. Use the links below
            to find what you need.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <h2 className="text-center text-lg font-semibold text-primary sm:text-xl">Popular pages</h2>
        <nav
          className="mt-8 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:gap-4"
          aria-label="Helpful links"
        >
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="card-shadow flex min-h-11 items-center justify-center rounded-lg border border-border bg-white px-4 py-3 text-center text-sm font-medium text-accent transition-colors hover:border-accent hover:bg-section-alt hover:text-primary sm:text-base"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded bg-accent px-8 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary"
          >
            Return to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded border border-border bg-white px-8 py-3 text-center text-sm font-semibold text-primary transition-colors hover:bg-section-alt"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
