import { SITE_URL, SITE_NAME, SITE_EMAIL, LINKEDIN_URL } from "../site";
import { services } from "../data/services";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        email: SITE_EMAIL,
        address: {
          "@type": "PostalAddress",
          addressCountry: "GB",
        },
        areaServed: {
          "@type": "Country",
          name: "United Kingdom",
        },
        sameAs: [LINKEDIN_URL],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": `${SITE_URL}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/glossary?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#professional-service`,
        name: SITE_NAME,
        url: SITE_URL,
        serviceType: "Employment Loss Expert Witness",
        areaServed: "United Kingdom",
        provider: { "@id": `${SITE_URL}/#organization` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Employment Loss Expert Witness Services",
          itemListElement: services.map((s, i) => ({
            "@type": "Offer",
            position: i + 1,
            itemOffered: {
              "@type": "Service",
              "@id": `${SITE_URL}/services#${s.id}`,
              name: s.title,
              description: s.description,
            },
          })),
        },
      },
    ],
  };
}

export function servicesPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": services.map((s) => ({
      "@type": "Service",
      "@id": `${SITE_URL}/services#${s.id}`,
      name: s.title,
      description: s.description,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "United Kingdom",
      serviceType: s.title,
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  aboutServiceId,
}: {
  title: string;
  description: string;
  path: string;
  aboutServiceId?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${path}`,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    ...(aboutServiceId && {
      about: { "@id": `${SITE_URL}/services#${aboutServiceId}` },
    }),
  };
}
