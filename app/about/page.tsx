import { buildMetadata } from '@/lib/seo/metadata';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = buildMetadata({
  title: 'About | Move Clearly',
  description: 'Meet the Move Clearly husband-and-wife Realtor team and our clear process.',
  canonicalPath: '/about'
});

export default function AboutPage() {
  return (
    <div className='mx-auto max-w-5xl space-y-8 px-4 py-12 md:px-6'>
      <section>
        <h1 className='text-4xl font-bold tracking-tight'>About Move Clearly</h1>
        <p className='mt-3 max-w-3xl text-muted-foreground'>
          We are a husband-and-wife Realtor team focused on clarity, responsiveness, and practical strategy. Our clients always know what to expect next.
        </p>
      </section>

      <section className='grid gap-6 md:grid-cols-2'>
        <Card>
          <CardContent className='p-6'>
            <h2 className='text-xl font-semibold'>Agent Name Placeholder</h2>
            <p className='mt-2 text-sm text-muted-foreground'>Buyer and listing strategy specialist with a process-first approach.</p>
            <p className='mt-3 text-sm'>Phone: (000) 000-0000</p>
            <p className='text-sm'>Email: agent1@moveclearly.com</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className='p-6'>
            <h2 className='text-xl font-semibold'>Agent Name Placeholder</h2>
            <p className='mt-2 text-sm text-muted-foreground'>Client communication lead focused on execution and follow-through.</p>
            <p className='mt-3 text-sm'>Phone: (000) 000-0000</p>
            <p className='text-sm'>Email: agent2@moveclearly.com</p>
          </CardContent>
        </Card>
      </section>

      <section className='rounded-xl border p-6'>
        <h2 className='text-xl font-semibold'>What clients can expect</h2>
        <ul className='mt-4 space-y-2 text-sm text-muted-foreground'>
          <li>• Clear communication and timely updates</li>
          <li>• Straightforward market guidance</li>
          <li>• A defined roadmap from first call to closing</li>
        </ul>
      </section>
    </div>
  );
}
