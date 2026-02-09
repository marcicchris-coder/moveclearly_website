import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/metadata';
import { getAllPosts } from '@/lib/content/blog';
import { Badge } from '@/components/ui/badge';

export const metadata = buildMetadata({
  title: 'Blog | Move Clearly',
  description: 'Real estate strategy articles focused on Florida buyers and sellers.',
  canonicalPath: '/blog'
});

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <div className='mx-auto max-w-5xl px-4 py-12 md:px-6'>
      <h1 className='text-4xl font-bold tracking-tight'>Blog</h1>
      <p className='mt-3 text-muted-foreground'>Clear real estate insights for confident decisions.</p>

      <div className='mt-8 space-y-4'>
        {posts.map((post) => (
          <article key={post.slug} className='rounded-xl border p-6'>
            <div className='mb-2 flex flex-wrap items-center gap-2'>
              <Badge>{post.category}</Badge>
              {post.tags.map((tag) => (
                <Badge key={tag} className='bg-primary/10 text-primary'>
                  {tag}
                </Badge>
              ))}
            </div>
            <h2 className='text-2xl font-semibold'>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className='mt-2 text-muted-foreground'>{post.description}</p>
            <p className='mt-3 text-sm text-muted-foreground'>Published {new Date(post.date).toLocaleDateString()}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
