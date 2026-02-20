import { siteConfig } from '@/lib/constants';
import { Listing } from '@/lib/idx/types';

export type JsonLd = Record<string, unknown>;

export function organizationJsonLd(): JsonLd {
  const base = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: siteConfig.name,
    url: siteConfig.url,
    areaServed: ['Dunnellon', 'Citrus Springs', 'Crystal River', 'Lecanto', 'Beverly Hills', 'Hernando', 'Inverness', 'Ocala'],
    sameAs: []
  };

  return siteConfig.publicProfileReady
    ? { ...base, telephone: siteConfig.phone, email: siteConfig.email }
    : base;
}

export function localBusinessJsonLd(): JsonLd {
  const base = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    url: siteConfig.url,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ocala',
      addressRegion: 'FL',
      addressCountry: 'US'
    }
  };

  return siteConfig.publicProfileReady
    ? { ...base, telephone: siteConfig.phone, email: siteConfig.email }
    : base;
}

export function breadcrumbJsonLd(items: Array<{ name: string; item: string }>): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: entry.item
    }))
  };
}

export function articleJsonLd({
  title,
  description,
  slug,
  datePublished,
  dateModified
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: siteConfig.name
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${slug}`
    }
  };
}

export function faqJsonLd(entries: Array<{ question: string; answer: string }>): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((entry) => ({
      '@type': 'Question',
      name: entry.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: entry.answer
      }
    }))
  };
}

export function communityGuideJsonLd({
  name,
  url,
  description,
  attractions
}: {
  name: string;
  url: string;
  description: string;
  attractions: Array<{ name: string; link: string; description: string }>;
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${name}, FL Community Guide`,
    url,
    description,
    about: {
      '@type': 'Place',
      name: `${name}, Florida`
    },
    mainEntity: {
      '@type': 'ItemList',
      name: `${name} attractions`,
      itemListElement: attractions.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'TouristAttraction',
          name: item.name,
          description: item.description,
          url: item.link
        }
      }))
    }
  };
}

export function webPageJsonLd({
  name,
  url,
  description
}: {
  name: string;
  url: string;
  description: string;
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    url,
    description,
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.url
    }
  };
}

export function listingJsonLd(listing: Listing): JsonLd {
  const listingUrl = `${siteConfig.url}/listings/${listing.id}`;
  const image = listing.images[0];

  return {
    '@context': 'https://schema.org',
    '@type': 'SingleFamilyResidence',
    name: `${listing.address}, ${listing.city}`,
    description: listing.description,
    image: image ? [image] : undefined,
    floorSize: listing.sqft
      ? {
          '@type': 'QuantitativeValue',
          value: listing.sqft,
          unitCode: 'FTK'
        }
      : undefined,
    numberOfRooms: listing.beds || undefined,
    address: {
      '@type': 'PostalAddress',
      streetAddress: listing.address,
      addressLocality: listing.city,
      addressRegion: listing.state,
      postalCode: listing.zip,
      addressCountry: 'US'
    },
    offers: {
      '@type': 'Offer',
      price: listing.price,
      priceCurrency: 'USD',
      url: listingUrl
    },
    url: listingUrl
  };
}
