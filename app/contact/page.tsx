import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
  title: 'Contact | Move Clearly',
  description: 'Contact page for Move Clearly. Public contact details are currently limited during pre-launch.',
  canonicalPath: '/contact'
});

export default function ContactPage() {
  return (
    <div className='mx-auto max-w-5xl px-4 py-12 md:px-6'>
      <h1 className='text-4xl font-bold tracking-tight'>Contact Move Clearly</h1>
      <p className='mt-3 max-w-2xl text-muted-foreground'>
        Public contact details are temporarily hidden while the site is under construction.
      </p>

      <div className='mt-8 space-y-6'>
        <div className='rounded-xl border p-6'>
          <h2 className='text-xl font-semibold'>Contact Status</h2>
          <p className='mt-3 text-sm text-muted-foreground'>
            We are finalizing launch details. Direct phone numbers, email addresses, and agent profiles will be published when the site goes live.
          </p>
        </div>
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
      </div>
    </div>
  );
}
