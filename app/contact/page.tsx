import { buildMetadata } from '@/lib/seo/metadata';
import { LeadForm } from '@/components/forms/lead-form';

export const metadata = buildMetadata({
  title: 'Contact | Move Clearly',
  description: 'Contact Move Clearly for buying, selling, and strategy support.',
  canonicalPath: '/contact'
});

export default function ContactPage() {
  return (
    <div className='mx-auto max-w-6xl px-4 py-12 md:px-6'>
      <h1 className='text-4xl font-bold tracking-tight'>Contact Move Clearly</h1>
      <p className='mt-3 max-w-2xl text-muted-foreground'>
        Tell us your goals and location preferences. We will follow up with clear next steps.
      </p>

      <div className='mt-8 grid gap-8 lg:grid-cols-[1fr_420px]'>
        <div className='rounded-xl border p-6'>
          <h2 className='text-xl font-semibold'>Service Areas</h2>
          <ul className='mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2'>
            <li>Dunnellon</li>
            <li>Citrus Springs</li>
            <li>Crystal River</li>
            <li>Lecanto</li>
            <li>Beverly Hills</li>
            <li>Hernando</li>
            <li>Inverness</li>
            <li>Ocala</li>
          </ul>
        </div>
        <LeadForm type='contact' source='/contact' submitLabel='Send Message' />
      </div>
    </div>
  );
}
