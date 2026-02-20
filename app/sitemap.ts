import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/constants';
import { communities } from '@/lib/content/communities';
import { getAllPosts } from '@/lib/content/blog';
import { searchListings } from '@/lib/idx';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ['/', '/listings', '/communities', '/about', '/contact', '/blog', '/home-value', '/buyer-guide', '/schedule'];
  const posts = await getAllPosts();
  const now = new Date();
  type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: (route === '/' ? 'weekly' : 'monthly') as ChangeFrequency,
    priority: route === '/' ? 1 : 0.7
  }));

  const communityEntries = communities.map((community) => ({
    url: `${siteConfig.url}/communities/${community.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: 0.8
  }));

  const blogEntries = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.6
  }));

  const listingEntries = (await searchListings({})).map((listing) => ({
    url: `${siteConfig.url}/listings/${listing.id}`,
    lastModified: now,
    changeFrequency: 'daily' as ChangeFrequency,
    priority: 0.9
  }));

  return [...staticEntries, ...communityEntries, ...blogEntries, ...listingEntries];
}
