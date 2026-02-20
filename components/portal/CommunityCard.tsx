import Image from 'next/image';
import Link from 'next/link';
import { Community } from '@/src/content/communities';
import { imageMap } from '@/src/content/images';
import { TagPills } from '@/components/portal/TagPills';
import { Button } from '@/components/ui/button';

export function CommunityCard({ community }: { community: Community }) {
  const image = imageMap[community.heroImage];

  return (
    <article className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm'>
      <div className='relative h-52'>
        <Image src={image.url} alt={image.alt} fill sizes='(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw' className='object-cover' />
      </div>
      <div className='space-y-4 p-5'>
        <div>
          <h3 className='text-xl font-semibold text-slate-900'>{community.name}</h3>
          <p className='mt-2 text-sm leading-6 text-slate-600'>{community.shortDescription}</p>
        </div>
        <TagPills tags={community.tags} />
        <Button asChild variant='outline' className='w-full'>
          <Link href={`/communities/${community.slug}`}>View community guide</Link>
        </Button>
      </div>
    </article>
  );
}
