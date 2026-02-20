'use client';

import { useMemo, useState } from 'react';
import { Community, LifestyleTag, lifestyleTags } from '@/src/content/communities';
import { CommunityCard } from '@/components/portal/CommunityCard';
import { CardGrid } from '@/components/portal/CardGrid';

export function CommunitiesClient({ allCommunities }: { allCommunities: Community[] }) {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState<LifestyleTag | 'All'>('All');

  const filtered = useMemo(() => {
    return allCommunities.filter((community) => {
      const matchesQuery = community.name.toLowerCase().includes(query.trim().toLowerCase());
      const matchesTag = activeTag === 'All' ? true : community.tags.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [allCommunities, query, activeTag]);

  return (
    <>
      <section className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6'>
        <div className='grid gap-4 md:grid-cols-[1fr_auto] md:items-end'>
          <label className='block'>
            <span className='text-sm font-semibold text-slate-900'>Search by community name</span>
            <input
              type='search'
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder='Search Crystal River, Inverness, Lecanto...'
              className='mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-cyan-200 focus:ring'
            />
          </label>
          <p className='text-sm text-slate-600'>Showing {filtered.length} communities</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          <button
            type='button'
            onClick={() => setActiveTag('All')}
            className={`rounded-full border px-3 py-1 text-xs font-medium ${activeTag === 'All' ? 'border-cyan-500 bg-cyan-100 text-cyan-800' : 'border-slate-300 bg-white text-slate-600'}`}
          >
            All
          </button>
          {lifestyleTags.map((tag) => (
            <button
              key={tag}
              type='button'
              onClick={() => setActiveTag(tag)}
              className={`rounded-full border px-3 py-1 text-xs font-medium ${activeTag === tag ? 'border-cyan-500 bg-cyan-100 text-cyan-800' : 'border-slate-300 bg-white text-slate-600'}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      <section className='mt-8'>
        {filtered.length > 0 ? (
          <CardGrid>{filtered.map((community) => <CommunityCard key={community.slug} community={community} />)}</CardGrid>
        ) : (
          <div className='rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600'>
            No communities match this search yet. Clear filters and try again.
          </div>
        )}
      </section>
    </>
  );
}
