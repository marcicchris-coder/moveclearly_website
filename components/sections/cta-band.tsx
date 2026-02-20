import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CtaBand() {
  return (
    <section className='neo-panel mt-16 rounded-2xl border p-8 text-slate-900'>
      <div className='grid gap-6 md:grid-cols-[1fr_auto] md:items-center'>
        <div>
          <h2 className='text-2xl font-semibold'>Explore Florida Market Insights</h2>
          <p className='mt-2 text-slate-600'>
            Browse local community guides and market-focused articles to plan your next real estate decision.
          </p>
        </div>
        <div className='flex flex-wrap gap-3'>
          <Button asChild variant='secondary'>
            <Link href='/communities'>Browse Communities</Link>
          </Button>
          <Button asChild variant='outline' className='border-cyan-300/70 bg-white/60 text-slate-800 hover:bg-cyan-50'>
            <Link href='/blog'>Read Blog</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
