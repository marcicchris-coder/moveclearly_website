import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/metadata';
import { Button } from '@/components/ui/button';

export const metadata = buildMetadata({
  title: 'Notice | Move Clearly',
  description: 'General information page.',
  canonicalPath: '/thank-you',
  noIndex: true
});

export default function ThankYouPage({ searchParams }: { searchParams: { type?: string } }) {
  const message = searchParams.type
    ? 'Thanks for visiting Move Clearly. Explore current listings and community guides for your next move.'
    : 'Explore our latest listings, community insights, and market resources.';

  return (
    <div className='mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center'>
      <h1 className='text-4xl font-bold'>Notice</h1>
      <p className='mt-3 text-muted-foreground'>{message}</p>
      <div className='mt-6 flex gap-3'>
        <Button asChild>
          <Link href='/listings'>View Listings</Link>
        </Button>
        <Button asChild variant='outline'>
          <Link href='/about'>About Team</Link>
        </Button>
      </div>
    </div>
  );
}
