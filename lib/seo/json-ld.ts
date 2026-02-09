import { siteConfig } from '@/lib/constants';

export type JsonLd = Record<string, unknown>;

export function organizationJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: ['Dunnellon', 'Citrus Springs', 'Crystal River', 'Lecanto', 'Beverly Hills', 'Hernando', 'Inverness', 'Ocala'],
    sameAs: []
  };
}

export function localBusinessJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ocala',
      addressRegion: 'FL',
      addressCountry: 'US'
    }
  };
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
