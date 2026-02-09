import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className='mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 text-center'>
      <h1 className='text-4xl font-bold'>Page not found</h1>
      <p className='mt-3 text-muted-foreground'>The page you requested does not exist or moved.</p>
      <Button asChild className='mt-6'>
        <Link href='/'>Back to Home</Link>
      </Button>
    </div>
  );
}
