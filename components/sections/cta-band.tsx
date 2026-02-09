import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CtaBand() {
  return (
    <section className='mt-16 rounded-2xl border bg-gradient-to-r from-cyan-900 to-cyan-700 p-8 text-white'>
      <div className='grid gap-6 md:grid-cols-[1fr_auto] md:items-center'>
        <div>
          <h2 className='text-2xl font-semibold'>Ready for your next move?</h2>
          <p className='mt-2 text-white/90'>
            Share your goals and we will map out practical next steps for buying, selling, or both.
          </p>
        </div>
        <div className='flex flex-wrap gap-3'>
          <Button asChild variant='secondary'>
            <Link href='/contact'>Contact Team</Link>
          </Button>
          <Button asChild variant='outline' className='border-white/40 text-white hover:bg-white/10'>
            <Link href='/schedule'>Schedule Call</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
