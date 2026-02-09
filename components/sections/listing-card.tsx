'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BedDouble, Bath, Ruler } from 'lucide-react';
import { Listing } from '@/lib/idx/types';
import { Card, CardContent } from '@/components/ui/card';
import { formatCurrency, formatNumber } from '@/lib/utils';

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Card className='overflow-hidden'>
        <Link href={`/listings/${listing.id}`}>
          <div className='relative h-56 overflow-hidden'>
            <Image
              src={listing.images[0]}
              alt={`${listing.address} in ${listing.city}`}
              fill
              sizes='(max-width: 768px) 100vw, 33vw'
              className='object-cover transition-transform duration-300 hover:scale-105'
              priority={false}
            />
          </div>
        </Link>
        <CardContent className='space-y-3 p-4'>
          <p className='text-xl font-bold'>{formatCurrency(listing.price)}</p>
          <div>
            <p className='font-medium'>{listing.address}</p>
            <p className='text-sm text-muted-foreground'>
              {listing.city}, {listing.state} {listing.zip}
            </p>
          </div>
          <div className='flex items-center gap-4 text-sm text-muted-foreground'>
            <span className='inline-flex items-center gap-1'>
              <BedDouble className='h-4 w-4' /> {listing.beds} bd
            </span>
            <span className='inline-flex items-center gap-1'>
              <Bath className='h-4 w-4' /> {listing.baths} ba
            </span>
            <span className='inline-flex items-center gap-1'>
              <Ruler className='h-4 w-4' /> {formatNumber(listing.sqft)} sqft
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
