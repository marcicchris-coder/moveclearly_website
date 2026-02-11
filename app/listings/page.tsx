import { buildMetadata } from '@/lib/seo/metadata';
import { searchListings, isUsingMockIdxData } from '@/lib/idx';
import { ListingCard } from '@/components/sections/listing-card';

export const metadata = buildMetadata({
  title: 'Listings | Move Clearly',
  description: 'Browse available listings sourced from IDX Broker API data.',
  canonicalPath: '/listings',
  noIndex: isUsingMockIdxData()
});

export default async function ListingsPage() {
  const listings = await searchListings({});

  return (
    <div className='mx-auto max-w-7xl px-4 py-12 md:px-6'>
      <h1 className='text-4xl font-bold tracking-tight'>Listings</h1>
      <p className='mt-2 text-muted-foreground'>
        Listings are rendered with crawlable HTML to maximize SEO control and index quality.
      </p>

      <div className='mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
