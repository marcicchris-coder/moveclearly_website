import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/constants';
import { communities } from '@/lib/content/communities';
import { getAllPosts } from '@/lib/content/blog';
import { mockListings } from '@/lib/idx/mock-data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ['/', '/search', '/listings', '/about', '/contact', '/blog', '/home-value', '/buyer-guide', '/schedule'];
  const posts = await getAllPosts();

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date()
  }));

  const communityEntries = communities.map((community) => ({
    url: `${siteConfig.url}/communities/${community.slug}`,
    lastModified: new Date()
  }));

  const blogEntries = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date)
  }));

  const listingEntries = mockListings.map((listing) => ({
    url: `${siteConfig.url}/listings/${listing.id}`,
    lastModified: new Date()
  }));

  return [...staticEntries, ...communityEntries, ...blogEntries, ...listingEntries];
}
