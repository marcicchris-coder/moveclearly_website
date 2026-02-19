import { notFound } from 'next/navigation';
import { getListingById } from '@/lib/idx';
import { buildMetadata } from '@/lib/seo/metadata';
import { formatCurrency, formatNumber } from '@/lib/utils';
import { ListingGallery } from '@/components/sections/listing-gallery';
import { JsonLdScript } from '@/components/sections/json-ld-script';
import { listingJsonLd } from '@/lib/seo/json-ld';
import { siteConfig } from '@/lib/constants';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const listing = await getListingById(params.id);

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
    image: listing.images[0]
  });
}

export default async function ListingDetailPage({ params }: { params: { id: string } }) {
  const listing = await getListingById(params.id);

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
              <h3 className='font-semibold'>Location Highlights</h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                Review neighborhood access, nearby shopping, schools, parks, and commute routes to evaluate overall
                location fit.
              </p>
            </div>
          </div>

          <div className='rounded-xl border p-6'>
            <h3 className='text-lg font-semibold'>Direct Contact</h3>
            <p className='mt-2 text-sm text-muted-foreground'>
              For private tour details and availability updates, contact our team directly.
            </p>
            <ul className='mt-4 space-y-2 text-sm text-muted-foreground'>
              <li>
                Call: <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`} className='underline underline-offset-4'>{siteConfig.phone}</a>
              </li>
              <li>
                Email: <a href={`mailto:${siteConfig.email}`} className='underline underline-offset-4'>{siteConfig.email}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
