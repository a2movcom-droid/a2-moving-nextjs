import { cities, cityName, site } from './site';

const areasServed = cities.map((slug) => ({
  '@type': 'City',
  name: `${cityName(slug)}, CA`,
}));

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    '@id': `${site.url}/#moving-company`,
    name: site.name,
    description:
      'Professional local, long-distance, residential, commercial, packing and labor-only moving services in Long Beach and Southern California.',
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/images/move-14.webp`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      ...site.address,
    },
    areaServed: areasServed,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.reviewRating,
      reviewCount: site.reviewCount,
      bestRating: '5',
    },
    sameAs: site.sameAs,
  };
}

export function serviceSchema(
  name: string,
  description: string,
  url: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    serviceType: name,
    provider: {
      '@type': 'MovingCompany',
      '@id': `${site.url}/#moving-company`,
      name: site.name,
      telephone: site.phone,
      url: site.url,
    },
    areaServed: areasServed,
    url,
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}
