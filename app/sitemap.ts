import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/constants';
import { communities } from '@/src/content/communities';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['/', '/buy', '/sell', '/communities', '/resources', '/contact'];
  const now = new Date();
  type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: (route === '/' ? 'weekly' : 'monthly') as ChangeFrequency,
    priority: route === '/' ? 1 : 0.8
  }));

  const communityEntries = communities.map((community) => ({
    url: `${siteConfig.url}/communities/${community.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: 0.8
  }));

  return [...staticEntries, ...communityEntries];
}
