import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  category: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const files = await fs.readdir(BLOG_DIR);
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith('.mdx'))
      .map(async (file) => {
        const slug = file.replace('.mdx', '');
        const source = await fs.readFile(path.join(BLOG_DIR, file), 'utf8');
        const { data } = matter(source);

        return {
          slug,
          title: data.title,
          description: data.description,
          date: data.date,
          tags: data.tags || [],
          category: data.category || 'Real Estate'
        } satisfies BlogPostMeta;
      })
  );

  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const source = await fs.readFile(path.join(BLOG_DIR, `${slug}.mdx`), 'utf8');
    const { data, content } = matter(source);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags || [],
      category: data.category || 'Real Estate',
      content
    };
  } catch {
    return null;
  }
}
