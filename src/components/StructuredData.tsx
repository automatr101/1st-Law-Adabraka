import { SITE, SITE_URL } from "@/lib/site";

/**
 * LegalService + LocalBusiness JSON-LD for Google rich results and local SEO.
 * Helps the firm surface in "lawyer near me / law firm Accra" searches with
 * the knowledge panel (address, hours, phone, map).
 */
export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE_URL}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    description: SITE.description,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/opengraph-image`,
    telephone: SITE.phone,
    email: SITE.email,
    foundingDate: SITE.founded,
    slogan: SITE.tagline,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: `${SITE.address.locality}, ${SITE.address.city}`,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: { "@type": "Country", name: "Ghana" },
    openingHoursSpecification: SITE.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.open,
      closes: h.close,
    })),
    knowsAbout: SITE.practiceAreas,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Practice Areas",
      itemListElement: SITE.practiceAreas.map((area) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: area },
      })),
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
