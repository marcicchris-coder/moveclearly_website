import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/metadata';
import { Button } from '@/components/ui/button';

export const metadata = buildMetadata({
  title: 'Thank You | Move Clearly',
  description: 'Lead confirmation and next-step guidance.',
  canonicalPath: '/thank-you',
  noIndex: true
});

const typeMap: Record<string, string> = {
  'seller-home-value': 'We received your home value request. We will follow up with a pricing strategy review.',
  'buyer-guide': 'Your buyer guide request is confirmed. Check your email for next steps.',
  'request-showing': 'Your showing request has been received. We will confirm availability shortly.',
  'schedule-call': 'We received your scheduling request and will follow up with availability.'
};

export default function ThankYouPage({ searchParams }: { searchParams: { type?: string } }) {
  const message = (searchParams.type && typeMap[searchParams.type]) || 'Thanks for reaching out. We will be in touch soon.';

  return (
    <div className='mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center'>
      <h1 className='text-4xl font-bold'>Thank you</h1>
      <p className='mt-3 text-muted-foreground'>{message}</p>
      <div className='mt-6 flex gap-3'>
        <Button asChild>
          <Link href='/search'>Continue Searching</Link>
        </Button>
        <Button asChild variant='outline'>
          <Link href='/contact'>Contact Team</Link>
        </Button>
      </div>
    </div>
  );
}
