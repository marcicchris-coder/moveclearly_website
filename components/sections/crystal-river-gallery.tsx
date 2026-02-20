import Image from 'next/image';

const photos = [
  {
    src: '/images/crystal-river-aerial.webp',
    alt: 'Aerial view over Crystal River waterways'
  },
  {
    src: '/images/crystal-river-manatees.webp',
    alt: 'Manatees swimming in Crystal River'
  },
  {
    src: '/images/crystal-river-mural.webp',
    alt: 'Crystal River mural in the local community'
  }
] as const;

export function CrystalRiverGallery() {
  return (
    <section className='rounded-2xl border bg-white p-6'>
      <p className='text-xs font-semibold uppercase tracking-[0.14em] text-primary'>Local Life</p>
      <h2 className='mt-2 text-3xl font-semibold'>Crystal River in Every Season</h2>
      <p className='mt-2 text-sm text-muted-foreground'>
        Wildlife, water access, and neighborhood character are a big part of why buyers choose this area.
      </p>
      <div className='mt-5 grid gap-4 md:grid-cols-3'>
        {photos.map((photo) => (
          <div key={photo.src} className='relative h-52 overflow-hidden rounded-xl border'>
            <Image src={photo.src} alt={photo.alt} fill sizes='(max-width: 768px) 100vw, 33vw' quality={60} className='object-cover' />
          </div>
        ))}
      </div>
    </section>
  );
}
