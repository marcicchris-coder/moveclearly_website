'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY * 0.15);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className='relative overflow-hidden border-b bg-gradient-to-b from-cyan-50 to-background'>
      <div
        className='pointer-events-none absolute inset-0 opacity-40'
        style={{
          transform: `translateY(${offsetY}px)`,
          background: 'radial-gradient(70% 70% at 50% 30%, rgba(14,165,233,0.25), transparent 70%)'
        }}
      />
      <div className='relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28'>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className='max-w-3xl'>
          <p className='mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary'>
            Florida Real Estate, Made Clear
          </p>
          <h1 className='text-4xl font-bold leading-tight tracking-tight md:text-6xl'>
            Buy or sell with a clear plan, quick communication, and local expertise.
          </h1>
          <p className='mt-5 max-w-2xl text-lg text-muted-foreground'>
            Move Clearly helps you compare communities, evaluate listings, and make confident decisions without confusion.
          </p>
          <div className='mt-8 flex flex-wrap gap-3'>
            <Button asChild size='lg'>
              <Link href='/search'>Start Home Search</Link>
            </Button>
            <Button asChild variant='outline' size='lg'>
              <Link href='/home-value'>Get Home Value</Link>
            </Button>
            <Button asChild variant='secondary' size='lg'>
              <Link href='/schedule'>Schedule a Call</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
