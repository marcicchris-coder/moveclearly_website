import { buildMetadata } from '@/lib/seo/metadata';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { teamMembers, siteConfig } from '@/lib/constants';

export const metadata = buildMetadata({
  title: 'About | Move Clearly',
  description: 'Meet the Move Clearly husband-and-wife Realtor team and our clear process.',
  canonicalPath: '/about'
});

export default function AboutPage() {
  return (
    <div className='mx-auto max-w-5xl space-y-10 px-4 py-12 md:px-6'>
      <section>
        <h1 className='text-4xl font-bold tracking-tight'>About Move Clearly</h1>
        <div className='mt-4 max-w-4xl space-y-4 text-muted-foreground'>
          <p>
            Buying or selling a home is one of the biggest financial decisions most people make and it should not feel confusing or rushed.
          </p>
          <p>
            Move Clearly was built around a simple idea: clear communication, practical strategy, and no unnecessary noise. We help buyers and sellers make confident decisions by explaining the process, setting realistic expectations, and staying responsive from the first conversation through closing day.
          </p>
          <p>
            We are Christopher “Chris” Marcic and Michelle Marcic, a husband-and-wife Realtor team with {siteConfig.brokerage}, serving Citrus County and surrounding Florida areas. We work across a broad spectrum of real estate, including single-family homes, manufactured properties, acreage, and lifestyle-driven searches.
          </p>
        </div>
      </section>

      <section>
        <h2 className='text-3xl font-semibold tracking-tight'>Meet the Team</h2>
      </section>

      <section className='grid gap-6 md:grid-cols-2'>
        {teamMembers.map((member) => (
          <Card key={member.name}>
            <CardContent className='p-6'>
              <div className='relative mb-4 aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-100'>
                <Image
                  src={member.headshot}
                  alt={`${member.name} headshot`}
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                  className='object-cover object-center'
                />
              </div>
              <h2 className='text-xl font-semibold'>{member.name}</h2>
              <p className='mt-1 text-sm font-medium'>{member.role}</p>
              <p className='mt-2 text-sm text-muted-foreground'>{member.bio}</p>
              <p className='mt-3 text-sm'>
                Phone:{' '}
                <a href={`tel:${member.phone.replace(/\D/g, '')}`} className='underline underline-offset-4'>
                  {member.phone}
                </a>
              </p>
              <p className='text-sm'>
                Email:{' '}
                <a href={`mailto:${member.email}`} className='underline underline-offset-4'>
                  {member.email}
                </a>
              </p>
              <p className='text-sm'>Brokerage: {member.brokerage}</p>
              {'license' in member ? <p className='text-sm'>Florida License: {member.license}</p> : null}
            </CardContent>
          </Card>
        ))}
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
        <p className='mt-4 text-sm text-muted-foreground'>
          Our role is not to rush decisions. It is to help you make informed, confident ones.
        </p>
      </section>

      <section className='rounded-xl border bg-white p-6'>
        <h2 className='text-xl font-semibold'>A Simple Next Step</h2>
        <p className='mt-3 text-sm text-muted-foreground'>
          If you’re thinking about buying, selling, or just want clarity on your options, we’re happy to talk things through.
        </p>
        <p className='mt-2 text-sm text-muted-foreground'>
          No pressure. No scripts. Just a clear conversation about what makes sense for you.
        </p>
      </section>
    </div>
  );
}
