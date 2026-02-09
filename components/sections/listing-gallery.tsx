'use client';

import Image from 'next/image';
import { useState } from 'react';

export function ListingGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className='space-y-3'>
      <div className='relative h-[360px] overflow-hidden rounded-xl border'>
        <Image src={images[active]} alt={alt} fill sizes='100vw' className='object-cover' priority />
      </div>
      <div className='grid grid-cols-4 gap-2'>
        {images.map((image, index) => (
          <button
            key={image}
            type='button'
            className={`relative h-20 overflow-hidden rounded-md border ${index === active ? 'ring-2 ring-primary' : ''}`}
            onClick={() => setActive(index)}
            aria-label={`View image ${index + 1}`}
          >
            <Image src={image} alt={`${alt} thumbnail ${index + 1}`} fill sizes='25vw' className='object-cover' />
          </button>
        ))}
      </div>
    </div>
  );
}
