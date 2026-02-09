import { buildMetadata } from '@/lib/seo/metadata';
import { communities } from '@/lib/content/communities';
import { CommunityCard } from '@/components/sections/community-card';

export const metadata = buildMetadata({
  title: 'Communities | Move Clearly',
  description: 'Explore Florida communities with clear local insights for buyers and sellers.',
  canonicalPath: '/communities'
});

export default function CommunitiesPage() {
  return (
    <div className='mx-auto max-w-7xl px-4 py-12 md:px-6'>
      <h1 className='text-4xl font-bold tracking-tight'>Communities</h1>
      <p className='mt-3 text-muted-foreground'>Neighborhood insights to help you compare areas with confidence.</p>
      <div className='mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
        {communities.map((community) => (
          <CommunityCard key={community.slug} community={community} />
        ))}
      </div>
    </div>
  );
}
