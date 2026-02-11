import { notFound } from 'next/navigation';
import { getListingById, getIdxProviderMode, isUsingMockIdxData } from '@/lib/idx';
import { buildMetadata } from '@/lib/seo/metadata';
import { formatCurrency, formatNumber } from '@/lib/utils';
import { ListingGallery } from '@/components/sections/listing-gallery';
import { LeadForm } from '@/components/forms/lead-form';
import { Button } from '@/components/ui/button';
import { JsonLdScript } from '@/components/sections/json-ld-script';
import { listingJsonLd } from '@/lib/seo/json-ld';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const listing = await getListingById(params.id);
  const usingMockData = isUsingMockIdxData();

  if (!listing) {
    return buildMetadata({
      title: 'Listing Not Found | Move Clearly',
      description: 'Listing was not found.',
      canonicalPath: `/listings/${params.id}`,
      noIndex: true
    });
  }

  return buildMetadata({
    title: `${listing.address} | Move Clearly`,
    description: `${listing.beds} bed, ${listing.baths} bath home in ${listing.city} listed at ${formatCurrency(listing.price)}.`,
    canonicalPath: `/listings/${listing.id}`,
    image: listing.images[0],
    noIndex: usingMockData
  });
}

export default async function ListingDetailPage({ params }: { params: { id: string } }) {
  const listing = await getListingById(params.id);
  const usingIdxBroker = getIdxProviderMode() === 'idxbroker';

  if (!listing) notFound();

  return (
    <>
      <JsonLdScript data={listingJsonLd(listing)} />
      <div className='mx-auto max-w-7xl space-y-8 px-4 py-12 md:px-6'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight md:text-4xl'>{listing.address}</h1>
          <p className='mt-1 text-muted-foreground'>
            {listing.city}, {listing.state} {listing.zip}
          </p>
        </div>

        <div className='grid gap-8 lg:grid-cols-[1fr_360px]'>
          <div className='space-y-6'>
            <ListingGallery images={listing.images} alt={listing.address} />

            <div className='grid gap-4 rounded-xl border p-4 sm:grid-cols-4'>
              <div><p className='text-xs text-muted-foreground'>Price</p><p className='font-semibold'>{formatCurrency(listing.price)}</p></div>
              <div><p className='text-xs text-muted-foreground'>Beds</p><p className='font-semibold'>{listing.beds}</p></div>
              <div><p className='text-xs text-muted-foreground'>Baths</p><p className='font-semibold'>{listing.baths}</p></div>
              <div><p className='text-xs text-muted-foreground'>Sqft</p><p className='font-semibold'>{formatNumber(listing.sqft)}</p></div>
            </div>

            <div className='rounded-xl border p-6'>
              <h2 className='text-xl font-semibold'>Property Overview</h2>
              <p className='mt-3 text-muted-foreground'>{listing.description}</p>
            </div>

            <div className='rounded-xl border border-dashed p-6'>
              <h3 className='font-semibold'>Map Placeholder</h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                Integrate provider map widget here during live IDX implementation.
              </p>
            </div>
          </div>

          <div>
            {usingIdxBroker && listing.externalUrl ? (
              <div className='mb-4 rounded-xl border p-4'>
                <p className='text-sm text-muted-foreground'>Need complete listing history and IDX details?</p>
                <Button asChild className='mt-3 w-full'>
                  <a href={listing.externalUrl} target='_blank' rel='noopener noreferrer'>
                    View Full IDX Listing
                  </a>
                </Button>
              </div>
            ) : null}
            <LeadForm type='request-showing' source={`/listings/${listing.id}`} title='Request a Showing' submitLabel='Request Showing' />
          </div>
        </div>
      </div>
    </>
  );
}
