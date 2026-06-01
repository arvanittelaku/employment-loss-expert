import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { DataTable } from "@/components/DataTable";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { faqSchema } from "@/lib/schema/faq";
import { servicesPageSchema } from "@/lib/schema/organization";
import { allServiceFaqs, services } from "@/lib/data/services";
import { siteFaqs } from "@/lib/data/faq";
import { SITE_EMAIL } from "@/lib/site";
import { servicesHubLinks } from "@/lib/data/seo-related-links";
import { RelatedLinks } from "@/components/seo/RelatedLinks";

export const metadata: Metadata = createMetadata({
  title: "Employment Loss Expert Witness Services UK | Full Service List",
  description:
    "UK employment loss expert witness services: loss of earnings reports, ET compensation schedules, labour market analysis, residual earning capacity, pension loss, and Smith v Manchester awards.",
  path: "/services",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

const allFaqsForSchema = [
  ...allServiceFaqs.map(({ question, answer }) => ({ question, answer })),
  ...siteFaqs,
];

export default function ServicesPage() {
  return (
    <PageLayout>
      <JsonLd
        data={[
          servicesPageSchema(),
          breadcrumbSchema(breadcrumbs),
          faqSchema(allFaqsForSchema),
        ]}
      />
      <PageHero
        title="Employment Loss Expert Witness Services UK"
        subtitle="Comprehensive employment loss expert witness services for personal injury, employment tribunal, and family law solicitors across England and Wales."
        breadcrumbs={breadcrumbs}
      />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {services.map((service) => (
          <section key={service.id} id={service.id} className="mb-16 scroll-mt-24 border-b border-border pb-12 last:border-0">
            <h2 className="mb-3 text-2xl font-bold text-primary">{service.title}</h2>
            <p className="mb-4 text-body">{service.description}</p>
            <DataTable
              caption={`${service.title} methodology`}
              headers={["Step", "Detail"]}
              rows={service.methodology.map((m) => [m.step, m.detail])}
            />
            {service.caseTypeLink && (
              <p className="mt-3">
                <Link href={service.caseTypeLink} className="font-semibold text-accent">
                  Related case type →
                </Link>
              </p>
            )}

            <div id={`${service.id}-faqs`} className="mt-8 scroll-mt-24">
              <FAQSection
                faqs={service.faqs}
                title={`${service.title}: Frequently Asked Questions`}
              />
            </div>
          </section>
        ))}

        <section id="general-faqs" className="mt-8 scroll-mt-24">
          <FAQSection faqs={siteFaqs} title="General Employment Loss Expert Witness FAQs" />
        </section>

        <div className="mt-12 rounded-lg border border-border bg-section-alt p-6 text-center">
          <p className="text-body">
            Questions about instructing an expert? Email us at{" "}
            <a href={`mailto:${SITE_EMAIL}`} className="font-semibold text-accent hover:text-primary">
              {SITE_EMAIL}
            </a>{" "}
            or{" "}
            <Link href="/contact" className="font-semibold text-accent hover:text-primary">
              submit an enquiry
            </Link>
            .
          </p>
        </div>
        <RelatedLinks title="Related pages" links={servicesHubLinks} />
      </div>
    </PageLayout>
  );
}
