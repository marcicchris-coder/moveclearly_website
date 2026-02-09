import { buildMetadata } from '@/lib/seo/metadata';
import { searchListings } from '@/lib/idx';
import { ListingCard } from '@/components/sections/listing-card';

export const metadata = buildMetadata({
  title: 'Listings | Move Clearly',
  description: 'Browse available listings with a provider-agnostic IDX architecture.',
  canonicalPath: '/listings'
});

export default async function ListingsPage() {
  const listings = await searchListings({});

  return (
    <div className='mx-auto max-w-7xl px-4 py-12 md:px-6'>
      <h1 className='text-4xl font-bold tracking-tight'>Listings</h1>
      <p className='mt-2 text-muted-foreground'>
        Listing templates and routing are live with mock provider data, ready for StellarMLS IDX replacement.
      </p>

      <div className='mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
