import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { buildMetadata } from '@/lib/seo/metadata';
import { getAllPostsWithContent } from '@/lib/content/blog';
import { Badge } from '@/components/ui/badge';

export const metadata = buildMetadata({
  title: 'Blog | Move Clearly',
  description: 'Real estate strategy articles focused on Florida buyers and sellers.',
  canonicalPath: '/blog'
});

export default async function BlogIndexPage() {
  const posts = await getAllPostsWithContent();

  return (
    <div className='mx-auto max-w-5xl px-4 py-12 md:px-6'>
      <h1 className='text-4xl font-bold tracking-tight'>Blog</h1>
      <p className='mt-3 text-muted-foreground'>
        Latest posts appear first, with every article and photo displayed inline in one continuous feed.
      </p>

      <div className='mt-8'>
        {posts.map((post, index) => (
          <section
            key={post.slug}
            className='relative mb-14 rounded-2xl border bg-white/70 p-6 shadow-sm last:mb-0 [content-visibility:auto] [contain-intrinsic-size:1px_1200px]'
          >
            {index > 0 ? (
              <div className='pointer-events-none absolute -top-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 md:flex'>
                <span className='h-px w-24 bg-border' />
                <span className='text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground'>Next Article</span>
                <span className='h-px w-24 bg-border' />
              </div>
            ) : null}

            <div className='mb-3 flex flex-wrap items-center gap-2'>
              <Badge>{post.category}</Badge>
              {post.tags.map((tag) => (
                <Badge key={tag} className='bg-primary/10 text-primary'>
                  {tag}
                </Badge>
              ))}
            </div>

            <h2 className='text-3xl font-semibold tracking-tight'>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className='mt-2 text-sm text-muted-foreground'>{new Date(post.date).toLocaleDateString()}</p>
            <p className='mt-4 text-muted-foreground'>{post.description}</p>

            <div className='prose prose-slate mt-8 max-w-none prose-headings:font-semibold prose-a:text-primary'>
              <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
