import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const areas = [
  {
    name: 'Crystal River',
    desc: 'Coastal lifestyle, waterfront options, and local character.',
    image: '/images/crystal-river-water-tower.jpg'
  },
  {
    name: 'Lecanto',
    desc: 'Central convenience with practical neighborhood options.',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Beverly Hills',
    desc: 'Value-driven housing and everyday accessibility.',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Homosassa',
    desc: 'Nature-focused living with relaxed Florida pace.',
    image: '/images/crystal-manatees-2.jpg'
  },
  {
    name: 'Inverness',
    desc: 'Historic charm, local events, and lake-adjacent pockets.',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Dunnellon',
    desc: 'River access and balanced home value opportunities.',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Citrus Springs',
    desc: 'Affordable inventory with growing buyer interest.',
    image: 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Ocala',
    desc: 'Diverse inventory and strong relocation demand.',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80'
  }
] as const;

export function TopAreas() {
  return (
    <section className='wave-divider rounded-3xl p-4 md:p-6'>
      <div className='mb-8 flex items-end justify-between'>
        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.14em] text-primary'>Top Areas</p>
          <h2 className='mt-2 text-3xl font-semibold text-foreground'>Explore where buyers are moving</h2>
        </div>
      </div>

      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {areas.map((area) => (
          <Card key={area.name} className='h-full overflow-hidden border-slate-200 bg-white/95 transition-all hover:-translate-y-1 hover:shadow-md'>
            <div className='relative h-32'>
              <Image
                src={area.image}
                alt={`${area.name} area preview`}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
                className='object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-slate-900/25 to-transparent' />
            </div>
            <CardHeader>
              <CardTitle className='text-lg'>{area.name}</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <p className='text-sm text-muted-foreground'>{area.desc}</p>
              <Link
                href={`/search?area=${encodeURIComponent(area.name)}`}
                className='inline-flex items-center text-sm font-semibold text-primary underline-offset-4 hover:underline'
              >
                Explore
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
