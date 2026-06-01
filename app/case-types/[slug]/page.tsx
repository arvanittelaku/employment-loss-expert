import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { faqSchema } from "@/lib/schema/faq";
import { getCaseType, getCaseTypeSlugs } from "@/lib/data/case-types";
import { services } from "@/lib/data/services";
import { getCaseTypeRelatedLinks } from "@/lib/data/seo-related-links";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { DataTable } from "@/components/DataTable";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getCaseTypeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ct = getCaseType(slug);
  if (!ct) return {};
  return createMetadata({
    title: ct.metaTitle,
    description: ct.metaDescription,
    path: `/case-types/${slug}`,
  });
}

export default async function CaseTypePage({ params }: Props) {
  const { slug } = await params;
  const ct = getCaseType(slug);
  if (!ct) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Case Types", path: "/case-types" },
    { name: ct.title, path: `/case-types/${slug}` },
  ];

  const relatedServiceItems = ct.relatedServices
    .map((id) => services.find((s) => s.id === id))
    .filter(Boolean);

  return (
    <PageLayout>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(ct.faqs)]} />
      <PageHero title={ct.h1} breadcrumbs={breadcrumbs} />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose-content">
          {ct.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>

        {slug === "discrimination-employment-loss" && (
          <>
            <h2 className="mt-8 text-xl font-bold text-primary">Vento bands (injury to feelings, 2025)</h2>
            <p className="text-body">
              Injury to feelings is assessed by the tribunal using Vento bands. Employment loss
              experts address financial heads of loss only.
            </p>
            <DataTable
              caption="Vento bands for injury to feelings awards"
              headers={["Band", "Range (2025)"]}
              rows={[
                ["Lower", "£1,100 to £11,200"],
                ["Middle", "£11,200 to £33,700"],
                ["Upper", "£33,700 to £56,200"],
              ]}
            />
          </>
        )}

        <div className="mt-8 rounded-lg border border-border bg-section-alt p-5">
          <p className="text-sm font-semibold text-primary">Related practice area</p>
          <Link href={ct.practiceArea.href} className="font-semibold text-accent">
            {ct.practiceArea.label} →
          </Link>
        </div>

        {relatedServiceItems.length > 0 && (
          <div className="mt-6">
            <p className="mb-2 text-sm font-semibold text-primary">Related services</p>
            <ul className="space-y-1">
              {relatedServiceItems.map((s) =>
                s ? (
                  <li key={s.id}>
                    <Link href={`/services#${s.id}`} className="text-accent hover:text-primary">
                      {s.title}
                    </Link>
                  </li>
                ) : null
              )}
            </ul>
          </div>
        )}

        <FAQSection faqs={ct.faqs} />

        <RelatedLinks links={getCaseTypeRelatedLinks(slug)} />
      </article>
    </PageLayout>
  );
}
