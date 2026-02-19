import { buildMetadata } from '@/lib/seo/metadata';
import { searchListings } from '@/lib/idx';
import { ListingCard } from '@/components/sections/listing-card';

export const metadata = buildMetadata({
  title: 'Listings | Move Clearly',
  description: 'Browse available listings from Move Clearly.',
  canonicalPath: '/listings'
});

export default async function ListingsPage() {
  const listings = await searchListings({});

  return (
    <div className='mx-auto max-w-7xl px-4 py-12 md:px-6'>
      <h1 className='text-4xl font-bold tracking-tight'>Listings</h1>
      <p className='mt-2 text-muted-foreground'>
        Explore homes for sale across Crystal River, Dunnellon, Inverness, Ocala, and surrounding Florida communities.
      </p>

      {listings.length > 0 ? (
        <div className='mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <div className='mt-8 rounded-xl border bg-white p-4 text-sm text-muted-foreground'>
          Listings are being updated. Please check back for newly added properties in Citrus and Marion County.
        </div>
      )}
    </div>
  );
}
