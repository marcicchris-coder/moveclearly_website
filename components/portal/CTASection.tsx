import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export function CTASection({ title, description, primary, secondary }: CTASectionProps) {
  return (
    <section className='rounded-2xl border border-cyan-200 bg-cyan-50 p-8'>
      <h2 className='text-2xl font-semibold text-slate-900'>{title}</h2>
      <p className='mt-3 max-w-2xl text-sm leading-6 text-slate-700'>{description}</p>
      <div className='mt-6 flex flex-wrap gap-3'>
        <Button asChild>
          <Link href={primary.href}>{primary.label}</Link>
        </Button>
        {secondary ? (
          <Button asChild variant='outline'>
            <Link href={secondary.href}>{secondary.label}</Link>
          </Button>
        ) : null}
      </div>
    </section>
  );
}
