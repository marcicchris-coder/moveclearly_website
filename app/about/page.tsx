import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
  title: 'About | Move Clearly',
  description: 'Learn how Move Clearly approaches Florida real estate with clear process and practical strategy.',
  canonicalPath: '/about'
});

export default function AboutPage() {
  return (
    <div className='mx-auto max-w-5xl space-y-10 px-4 py-12 md:px-6'>
      <section>
        <h1 className='text-4xl font-bold tracking-tight'>About Move Clearly</h1>
        <div className='mt-4 max-w-4xl space-y-4 text-muted-foreground'>
          <p>
            Move Clearly is a Florida real estate brand built around clarity, practical strategy, and consistent communication.
          </p>
          <p>
            The goal is straightforward: help buyers and sellers make informed decisions without confusion, pressure, or unnecessary noise.
          </p>
          <p>
            Public team details are intentionally limited while the website is under construction and pre-launch updates are in progress.
          </p>
        </div>
      </section>

      <section className='rounded-xl border p-6'>
        <h2 className='text-xl font-semibold'>What clients can expect</h2>
        <ul className='mt-4 space-y-2 text-sm text-muted-foreground'>
          <li>• Clear, proactive communication at every stage</li>
          <li>• Honest, data-driven guidance without pressure or guesswork</li>
          <li>• A defined roadmap from search or preparation through closing</li>
          <li>• Search tools and filters designed to save time, not overwhelm</li>
          <li>• A collaborative, low-stress experience built around real goals</li>
        </ul>
      </section>
    </div>
  );
}
