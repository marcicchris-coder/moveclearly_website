import { buildMetadata } from '@/lib/seo/metadata';
import { searchListings } from '@/lib/idx';
import { ListingCard } from '@/components/sections/listing-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const metadata = buildMetadata({
  title: 'Home Search | Move Clearly',
  description: 'Search homes with a modern native UI. IDX provider embed is integration-ready.',
  canonicalPath: '/search'
});

export default async function SearchPage({
  searchParams
}: {
  searchParams: { city?: string; beds?: string; baths?: string; minPrice?: string; maxPrice?: string; area?: string };
}) {
  const filters = {
    city: searchParams.city || searchParams.area,
    beds: searchParams.beds ? Number(searchParams.beds) : undefined,
    baths: searchParams.baths ? Number(searchParams.baths) : undefined,
    minPrice: searchParams.minPrice ? Number(searchParams.minPrice) : undefined,
    maxPrice: searchParams.maxPrice ? Number(searchParams.maxPrice) : undefined
  };

  const listings = await searchListings(filters);

  return (
    <div className='mx-auto max-w-7xl px-4 py-12 md:px-6'>
      <h1 className='text-4xl font-bold tracking-tight'>Search Homes</h1>
      <p className='mt-3 text-muted-foreground'>
        Use this native filter UI now. A StellarMLS IDX vendor embed can be dropped into the dedicated panel below later.
      </p>

      <div className='mt-8 grid gap-8 lg:grid-cols-[300px_1fr]'>
        <aside className='rounded-xl border p-4'>
          <h2 className='text-lg font-semibold'>Filters</h2>
          <form className='mt-4 space-y-3'>
            <Input name='city' placeholder='City' defaultValue={filters.city || ''} />
            <Input name='beds' type='number' min={0} placeholder='Min beds' defaultValue={searchParams.beds || ''} />
            <Input name='baths' type='number' min={0} placeholder='Min baths' defaultValue={searchParams.baths || ''} />
            <Input name='minPrice' type='number' min={0} placeholder='Min price' defaultValue={searchParams.minPrice || ''} />
            <Input name='maxPrice' type='number' min={0} placeholder='Max price' defaultValue={searchParams.maxPrice || ''} />
            <Button type='submit' className='w-full'>
              Apply Filters
            </Button>
          </form>
          <div className='mt-6 rounded-lg border border-dashed bg-secondary/40 p-3 text-sm text-muted-foreground'>
            IDX provider embed can be placed here.
          </div>
        </aside>

        <section>
          <div className='mb-4 flex items-center justify-between'>
            <h2 className='text-xl font-semibold'>{listings.length} homes found</h2>
          </div>
          <div className='grid gap-6 md:grid-cols-2'>
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
