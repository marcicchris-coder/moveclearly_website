'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: 'They answered every question quickly and gave us a clear strategy from day one.',
    detail: 'Direct communication, no confusion, and a process we could trust.',
    name: 'Buyer Client'
  },
  {
    quote: 'Communication was consistent, direct, and never pushy. We always knew our next step.',
    detail: 'We felt informed through every milestone from search to contract.',
    name: 'Relocation Client'
  },
  {
    quote: 'They helped us price, prepare, and negotiate with confidence.',
    detail: 'The plan was clear and execution stayed on track all the way to closing.',
    name: 'Seller Client'
  }
];

export function TestimonialCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  function prev() {
    setActive((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  }

  function next() {
    setActive((current) => (current + 1) % testimonials.length);
  }

  return (
    <section className='relative overflow-hidden rounded-2xl border bg-white p-8 shadow-sm'>
      <div className='pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10' />
      <div className='pointer-events-none absolute -left-8 bottom-8 h-20 w-20 rounded-full bg-sky-100/90' />
      <p className='text-xs font-semibold uppercase tracking-[0.15em] text-primary'>Testimonials</p>
      <div className='mt-5 min-h-[180px]'>
        <blockquote className='text-2xl font-semibold leading-tight text-foreground md:text-3xl'>
          “{testimonials[active].quote}”
        </blockquote>
        <p className='mt-4 text-sm text-muted-foreground'>{testimonials[active].detail}</p>
        <p className='mt-4 text-sm font-semibold text-foreground'>{testimonials[active].name}</p>
      </div>
      <div className='mt-6 flex items-center gap-2'>
        <Button type='button' variant='outline' size='icon' onClick={prev} aria-label='Previous testimonial'>
          <ChevronLeft className='h-4 w-4' />
        </Button>
        <Button type='button' variant='outline' size='icon' onClick={next} aria-label='Next testimonial'>
          <ChevronRight className='h-4 w-4' />
        </Button>
        <div className='ml-2 flex items-center gap-1.5'>
          {testimonials.map((item, index) => (
            <span
              key={item.name}
              className={`h-1.5 rounded-full transition-all ${index === active ? 'w-6 bg-primary' : 'w-1.5 bg-slate-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
