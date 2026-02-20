'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { themeTokens } from '@/lib/theme';

export function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY * 0.15);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className='aura-bg relative overflow-hidden border-b bg-gradient-to-b from-sky-50/70 via-white to-background'>
      <div
        className='pointer-events-none absolute inset-0 opacity-40'
        style={{
          transform: `translateY(${offsetY}px)`,
          background: `radial-gradient(70% 70% at 50% 30%, ${themeTokens.colors.primary}3d, transparent 70%)`
        }}
      />
      <div className='relative mx-auto grid max-w-7xl gap-10 px-4 py-20 md:px-6 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center'>
        <div className='animate-fade-up'>
          <p className='mb-3 inline-block rounded-full border border-cyan-200/70 bg-cyan-50/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700'>
            Florida Real Estate, Made Clear
          </p>
          <h1 className='text-4xl font-bold leading-tight tracking-tight md:text-6xl'>
            Your clear path to buying and selling in Florida.
          </h1>
          <p className='mt-5 max-w-2xl text-lg text-muted-foreground'>
            Compare neighborhoods, evaluate homes, and move forward with a clear strategy backed by responsive local guidance.
          </p>
          <div className='mt-8 flex flex-wrap gap-3'>
            <Button asChild size='lg'>
              <Link href='/listings'>View Listings</Link>
            </Button>
            <Button asChild variant='outline' size='lg'>
              <Link href='/communities/dunnellon'>Browse Communities</Link>
            </Button>
          </div>
        </div>

        <div className='relative hidden animate-fade-up lg:block' style={{ animationDelay: '0.1s' }}>
          <div className='mesh-panel relative overflow-hidden rounded-3xl border border-white/80 p-3 shadow-xl'>
            <div className='relative h-[440px] overflow-hidden rounded-2xl'>
              <Image
                src='/images/crystal-river-aerial.webp'
                alt='Aerial view of Crystal River waterways and surrounding neighborhoods'
                fill
                priority
                sizes='(max-width: 1024px) 0vw, 45vw'
                quality={68}
                className='object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent' />
            </div>
            <div className='absolute left-6 top-6 rounded-xl bg-white/92 px-4 py-3 shadow-sm'>
              <p className='text-xs uppercase tracking-[0.1em] text-muted-foreground'>Top Markets</p>
              <p className='mt-1 text-sm font-semibold text-foreground'>Citrus + Marion County</p>
            </div>
            <div className='absolute bottom-6 right-6 rounded-xl bg-white/92 px-4 py-3 shadow-sm'>
              <p className='text-xs uppercase tracking-[0.1em] text-muted-foreground'>Response Time</p>
              <p className='mt-1 text-sm font-semibold text-foreground'>Fast & Clear</p>
            </div>
          </div>
          <div className='pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/20 blur-xl' />
          <div className='pointer-events-none absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-sky-200/40 blur-xl' />
        </div>
      </div>
    </section>
  );
}
