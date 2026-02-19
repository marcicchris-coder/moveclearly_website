import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CtaBand() {
  return (
    <section className='mt-16 rounded-2xl border bg-gradient-to-r from-cyan-900 to-cyan-700 p-8 text-white'>
      <div className='grid gap-6 md:grid-cols-[1fr_auto] md:items-center'>
        <div>
          <h2 className='text-2xl font-semibold'>Explore Florida Market Insights</h2>
          <p className='mt-2 text-white/90'>
            Browse local community guides and market-focused articles to plan your next real estate decision.
          </p>
        </div>
        <div className='flex flex-wrap gap-3'>
          <Button asChild variant='secondary'>
            <Link href='/communities'>Browse Communities</Link>
          </Button>
          <Button asChild variant='outline' className='border-white/40 text-white hover:bg-white/10'>
            <Link href='/blog'>Read Blog</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
