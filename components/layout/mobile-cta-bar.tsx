import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function MobileCtaBar() {
  return (
    <div className='fixed inset-x-0 bottom-0 z-50 border-t bg-background/95 p-3 backdrop-blur md:hidden'>
      <div className='mx-auto grid max-w-lg grid-cols-2 gap-2'>
        <Button asChild variant='outline' className='w-full'>
          <Link href='/home-value'>Get Home Value</Link>
        </Button>
        <Button asChild className='w-full'>
          <Link href='/listings'>View Listings</Link>
        </Button>
      </div>
    </div>
  );
}
