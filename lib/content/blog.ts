import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { cache } from 'react';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  category: string;
  heroImage?: string;
  heroAlt?: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

const loadAllPostsWithContent = cache(async (): Promise<BlogPost[]> => {
  const files = await fs.readdir(BLOG_DIR);
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith('.mdx'))
      .map(async (file) => {
        const slug = file.replace('.mdx', '');
        const source = await fs.readFile(path.join(BLOG_DIR, file), 'utf8');
        const { data, content } = matter(source);
        const imageMatch = content.match(/!\[(.*?)\]\((.*?)\)/);

        return {
          slug,
          title: data.title,
          description: data.description,
          date: data.date,
          tags: data.tags || [],
          category: data.category || 'Real Estate',
          heroAlt: imageMatch?.[1],
          heroImage: imageMatch?.[2],
          content
        } satisfies BlogPost;
      })
  );

  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
});

const loadAllPosts = cache(async (): Promise<BlogPostMeta[]> => {
  const files = await fs.readdir(BLOG_DIR);
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith('.mdx'))
      .map(async (file) => {
        const slug = file.replace('.mdx', '');
        const source = await fs.readFile(path.join(BLOG_DIR, file), 'utf8');
        const { data, content } = matter(source);
        const imageMatch = content.match(/!\[(.*?)\]\((.*?)\)/);

        return {
          slug,
          title: data.title,
          description: data.description,
          date: data.date,
          tags: data.tags || [],
          category: data.category || 'Real Estate',
          heroAlt: imageMatch?.[1],
          heroImage: imageMatch?.[2]
        } satisfies BlogPostMeta;
      })
  );

  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
});

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const posts = await loadAllPosts();
  return [...posts];
}

export async function getPostsPage({
  cursor = 0,
  limit = 6
}: {
  cursor?: number;
  limit?: number;
}): Promise<{ posts: BlogPostMeta[]; nextCursor: number | null; total: number }> {
  const posts = await loadAllPosts();
  const safeCursor = Math.max(0, cursor);
  const safeLimit = Math.max(1, Math.min(limit, 24));
  const nextIndex = safeCursor + safeLimit;

  return {
    posts: posts.slice(safeCursor, nextIndex),
    nextCursor: nextIndex < posts.length ? nextIndex : null,
    total: posts.length
  };
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const source = await fs.readFile(path.join(BLOG_DIR, `${slug}.mdx`), 'utf8');
    const { data, content } = matter(source);
    const imageMatch = content.match(/!\[(.*?)\]\((.*?)\)/);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags || [],
      category: data.category || 'Real Estate',
      heroAlt: imageMatch?.[1],
      heroImage: imageMatch?.[2],
      content
    };
  } catch {
    return null;
  }
}

export async function getAllPostsWithContent(): Promise<BlogPost[]> {
  const posts = await loadAllPostsWithContent();
  return [...posts];
}
