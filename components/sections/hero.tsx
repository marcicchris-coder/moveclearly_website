import Image from 'next/image';
import Script from 'next/script';

const IDX_SEARCH_WIDGET_SRC = 'https://moveclearly.idxbroker.com/idx/widgets/142071';

export function Hero() {
  return (
    <section className='relative isolate overflow-hidden border-b'>
      <Image
        src='/images/crystal-river-aerial.jpg'
        alt='Aerial view of Crystal River neighborhoods and waterways'
        fill
        priority
        sizes='100vw'
        className='object-cover'
      />
      <div className='absolute inset-0 bg-slate-950/50' />
      <div className='absolute inset-0 bg-gradient-to-b from-slate-950/35 via-slate-900/45 to-slate-950/65' />

      <div className='relative mx-auto flex min-h-[440px] max-w-7xl items-center px-4 py-20 md:min-h-[520px] md:px-6 md:py-24'>
        <div className='w-full'>
          <p className='text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/85'>
            Search homes across Citrus and Marion County
          </p>
          <h1 className='mx-auto mt-4 max-w-4xl text-center text-3xl font-semibold tracking-tight text-white md:text-5xl'>
            Find your next Florida home with one clear search.
          </h1>

          <div className='mx-auto mt-7 w-full max-w-5xl rounded-2xl border border-white/25 bg-white/93 p-4 shadow-2xl backdrop-blur-sm md:p-6'>
            <Script id='idxwidgetsrc-142071' src={IDX_SEARCH_WIDGET_SRC} strategy='afterInteractive' />
          </div>
        </div>
      </div>
    </section>
  );
}
