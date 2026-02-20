import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { imageMap } from '@/src/content/images';

interface HeroSectionProps {
  title: string;
  description: string;
  imageKey: keyof typeof imageMap;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function HeroSection({ title, description, imageKey, primaryCta, secondaryCta }: HeroSectionProps) {
  const heroImage = imageMap[imageKey];

  return (
    <section className='relative overflow-hidden border-b border-cyan-100 bg-gradient-to-b from-cyan-50 to-white'>
      <div className='mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:px-6 md:py-20'>
        <div>
          <h1 className='text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl'>{title}</h1>
          <p className='mt-4 max-w-2xl text-base leading-7 text-slate-600'>{description}</p>
          <div className='mt-8 flex flex-wrap gap-3'>
            <Button asChild>
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            {secondaryCta ? (
              <Button asChild variant='outline'>
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>
        <div className='relative h-72 overflow-hidden rounded-2xl border border-cyan-100 shadow-sm md:h-[24rem]'>
          <Image src={heroImage.url} alt={heroImage.alt} fill priority sizes='(min-width: 768px) 50vw, 100vw' className='object-cover' />
        </div>
      </div>
    </section>
  );
}
