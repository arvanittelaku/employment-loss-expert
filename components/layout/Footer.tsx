import Link from "next/link";
import { footerColumns } from "@/lib/navigation";
import { SITE_EMAIL, SITE_REGION_LABEL } from "@/lib/site";
import { FooterLegalLinks } from "./FooterLegalLinks";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/90">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/20 pt-8">
          <p className="text-sm text-white/60">
            EmploymentLossExpert.com connects solicitors with employment loss expert witnesses
            for personal injury, employment tribunal, and family law proceedings in{" "}
            {SITE_REGION_LABEL}. We are not a law firm and do not provide legal advice.
          </p>
          <p className="mt-3 text-sm">
            <span className="text-white/60">Email: </span>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="font-medium text-white hover:text-accent"
            >
              {SITE_EMAIL}
            </a>
          </p>
          <FooterLegalLinks />
          <p className="mt-4 text-sm text-white/50">
            &copy; {new Date().getFullYear()} EmploymentLossExpert. Serving solicitors in{" "}
            {SITE_REGION_LABEL}.
          </p>
        </div>
      </div>
    </footer>
  );
}
