import type { Metadata } from 'next';
import { siteConfig } from '@/lib/constants';

interface SeoOptions {
  title: string;
  description: string;
  canonicalPath?: string;
  image?: string;
  noIndex?: boolean;
}

export function buildMetadata({ title, description, canonicalPath = '/', image, noIndex }: SeoOptions): Metadata {
  const url = new URL(canonicalPath, siteConfig.url).toString();
  const ogImage = image || siteConfig.ogImage;

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url,
      siteName: siteConfig.name,
      images: [{ url: ogImage }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
          }
        }
  };
}
