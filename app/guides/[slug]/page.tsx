import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { articleSchema } from "@/lib/schema/organization";
import { getGuide, getGuideSlugs } from "@/lib/data/guides";
import { getGuideRelatedLinks } from "@/lib/data/seo-related-links";
import { RelatedLinks } from "@/components/seo/RelatedLinks";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return createMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: `/guides/${slug}`,
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: guide.title, path: `/guides/${slug}` },
  ];

  return (
    <PageLayout>
      <JsonLd
        data={[
          articleSchema({
            title: guide.metaTitle,
            description: guide.metaDescription,
            path: `/guides/${slug}`,
            aboutServiceId: guide.aboutServiceId,
          }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <PageHero title={guide.h1} breadcrumbs={breadcrumbs} />
      <article className="prose-content mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {guide.sections.map((section) => (
          <div key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.content}</p>
          </div>
        ))}

        <RelatedLinks links={getGuideRelatedLinks(slug)} />
      </article>
    </PageLayout>
  );
}
