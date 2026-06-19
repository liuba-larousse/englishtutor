import { site } from "@/content/site";

/**
 * Structured data (schema.org) for SEO rich results and answer-engine (AEO)
 * extraction. Built from content/site.ts so it stays in sync with the page.
 */
export default function JsonLd() {
  const base = site.url;
  const personId = `${base}/#olaide`;
  const courseId = `${base}/#course`;

  const ratingValue = site.testimonials.summary.rating; // "4.9"
  const reviewCount = "35"; // schema needs a plain integer; UI shows "35+"

  const graph = [
    {
      "@type": "WebSite",
      "@id": `${base}/#website`,
      url: base,
      name: site.brand.name,
      inLanguage: "fr-FR",
      publisher: { "@id": personId },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: site.brand.name,
      jobTitle: "Professeur d'anglais",
      description: site.about.bio,
      image: `${base}/images/olaide.jpg`,
      url: base,
      knowsLanguage: ["en", "fr"],
      sameAs: [site.booking.preply, site.booking.youtube],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "TEFL",
      },
    },
    {
      "@type": "Course",
      "@id": courseId,
      name: site.offer.name,
      description: site.meta.description,
      inLanguage: "en",
      url: base,
      provider: { "@id": personId },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        courseWorkload: "PT50M",
      },
      offers: {
        "@type": "Offer",
        price: "30",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: site.booking.calendly,
        category: "Cours d'anglais individuel",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue,
        reviewCount,
        bestRating: "5",
        worstRating: "1",
      },
      review: site.testimonials.items.map((t) => ({
        "@type": "Review",
        author: { "@type": "Person", name: t.name },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody: t.quote,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${base}/#faq`,
      mainEntity: site.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  const json = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      // Structured data is static, derived from content — safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
