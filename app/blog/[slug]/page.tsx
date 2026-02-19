import { notFound } from 'next/navigation';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/metadata';
import { articleJsonLd } from '@/lib/seo/json-ld';
import { JsonLdScript } from '@/components/sections/json-ld-script';
import { getAllPosts, getPostBySlug } from '@/lib/content/blog';
import { MarkdownContent } from '@/components/sections/markdown-content';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return buildMetadata({
      title: 'Post Not Found | Move Clearly',
      description: 'Blog post not found.',
      canonicalPath: `/blog/${params.slug}`,
      noIndex: true
    });
  }

  return buildMetadata({
    title: `${post.title} | Move Clearly`,
    description: post.description,
    canonicalPath: `/blog/${post.slug}`
  });
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const jsonLd = articleJsonLd({
    title: post.title,
    description: post.description,
    slug: post.slug,
    datePublished: post.date,
    dateModified: post.date
  });

  return (
    <div className='mx-auto max-w-3xl px-4 py-12 md:px-6'>
      <JsonLdScript data={jsonLd} />
      <p className='text-sm text-muted-foreground'>{new Date(post.date).toLocaleDateString()}</p>
      <h1 className='mt-2 text-4xl font-bold tracking-tight'>{post.title}</h1>
      <p className='mt-3 text-muted-foreground'>{post.description}</p>

      <article className='prose prose-slate mt-8 max-w-none prose-headings:font-semibold prose-a:text-primary'>
        <MarkdownContent source={post.content} />
      </article>

      <div className='mt-10 rounded-xl border p-5'>
        <h2 className='text-lg font-semibold'>Continue exploring</h2>
        <div className='mt-3 flex flex-wrap gap-3'>
          <Link href='/communities/ocala' className='text-sm font-semibold text-primary'>Ocala Guide</Link>
          <Link href='/communities/dunnellon' className='text-sm font-semibold text-primary'>Dunnellon Guide</Link>
          <Link href='/listings' className='text-sm font-semibold text-primary'>View listings</Link>
        </div>
      </div>
    </div>
  );
}
