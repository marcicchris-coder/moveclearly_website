import Image from 'next/image';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/metadata';
import { HeroSection } from '@/components/portal/HeroSection';
import { TimelineSteps } from '@/components/portal/TimelineSteps';
import { SectionHeader } from '@/components/portal/SectionHeader';
import { FAQAccordion } from '@/components/portal/FAQAccordion';
import { CTASection } from '@/components/portal/CTASection';
import { siteCopy } from '@/src/content/siteCopy';
import { imageMap } from '@/src/content/images';
import { JsonLdScript } from '@/components/sections/json-ld-script';
import { breadcrumbJsonLd, faqJsonLd, webPageJsonLd } from '@/lib/seo/json-ld';

export const metadata = buildMetadata({
  title: 'Buy with a Clear Plan | Move Clearly Buyer Roadmap',
  description:
    'Follow a step-by-step buyer roadmap for Citrus County and nearby Florida communities, from financing and inspections to closing and move-in.',
  canonicalPath: '/buy'
});

const buySteps = [
  { title: 'Define your monthly budget', description: 'Set a realistic monthly target that includes principal, interest, insurance, taxes, and reserve cushion.' },
  { title: 'Get financing clarity', description: 'Compare loan options, confirm pre-approval strength, and understand what changes can affect final approval.' },
  { title: 'Set community criteria', description: 'Prioritize lifestyle fit, access, lot preferences, and neighborhood character before booking tours.' },
  { title: 'Tour with a decision framework', description: 'Use a consistent checklist for every property so comparisons stay objective and organized.' },
  { title: 'Evaluate condition and risk', description: 'Review roof age, mechanical systems, and maintenance signals before deciding offer confidence.' },
  { title: 'Write a strategic offer', description: 'Align price, timeline, inspection terms, and seller priorities to improve acceptance odds.' },
  { title: 'Schedule inspections early', description: 'Confirm property condition fast so repair credits, negotiations, and decisions stay on schedule.' },
  { title: 'Finalize insurance and underwriting', description: 'Secure insurance details and provide lender requirements without last-minute scrambling.' },
  { title: 'Prepare for closing logistics', description: 'Review final figures, verify required funds, and complete walkthrough with a written checklist.' },
  { title: 'Close and move in with a plan', description: 'Transfer utilities, set maintenance priorities, and track key documents for ownership clarity.' }
];

const buyerFaq = [
  { question: 'How early should I get pre-approved?', answer: 'As early as possible. Pre-approval helps you set budget boundaries and move quickly when the right home appears.' },
  { question: 'What if I am deciding between two communities?', answer: 'Compare daily life factors first, such as commute, services, and pace, before comparing home finishes.' },
  { question: 'Should I waive inspections to compete?', answer: 'Most buyers are better served by keeping inspection protections, then negotiating from objective findings.' },
  { question: 'How much cash should I keep beyond closing costs?', answer: 'Plan for immediate repairs, moving expenses, and an ownership reserve so early surprises are manageable.' },
  { question: 'Can I negotiate if inventory is rising?', answer: 'Yes. Pricing, timing, and repair credits often become stronger levers when buyers have more choices.' },
  { question: 'When should I shop for insurance?', answer: 'Early in the process. Insurance costs and eligibility can influence what homes remain practical options.' },
  { question: 'What matters most at final walkthrough?', answer: 'Verify agreed repairs, property condition, included items, and overall readiness before closing documents are signed.' },
  { question: 'How long does closing usually take?', answer: 'Timelines vary by financing and contract terms, but organized documentation and prompt responses reduce delays.' },
  { question: 'Do I need to inspect newer homes?', answer: 'Yes. Newer construction can still have issues, and inspection findings help protect your position.' },
  { question: 'How do I avoid overpaying emotionally?', answer: 'Use clear offer limits before negotiations begin and compare every home against your non-negotiable criteria.' },
  { question: 'What if appraisal comes in low?', answer: 'Your options can include renegotiation, additional cash, reconsideration requests, or contract exit depending on terms.' },
  { question: 'Is buying still possible with a tight budget?', answer: 'Yes, with disciplined criteria, financing clarity, and focus on communities that align with your payment range.' }
];

export default function BuyPage() {
  const checklistImage = imageMap.buyChecklist;
  const faqImage = imageMap.buyFaq;

  return (
    <>
      <JsonLdScript
        data={[
          breadcrumbJsonLd([
            { name: 'Home', item: 'https://moveclearly.com/' },
            { name: 'Buy', item: 'https://moveclearly.com/buy' }
          ]),
          faqJsonLd(buyerFaq),
          webPageJsonLd({
            name: 'Buy with a clear plan',
            url: 'https://moveclearly.com/buy',
            description: 'Step-by-step buyer roadmap for Florida homebuyers.'
          })
        ]}
      />

      <HeroSection
        title='Buy with a clear plan'
        description='Follow a practical roadmap from financing prep to move-in so each decision stays focused and low-stress.'
        imageKey='buyHero'
        primaryCta={{ label: 'Explore communities', href: '/communities' }}
        secondaryCta={{ label: 'Talk to a local guide', href: '/contact' }}
      />

      <div className='mx-auto max-w-7xl space-y-12 px-4 py-14 md:px-6'>
        <section>
          <SectionHeader
            eyebrow='Buyer Timeline'
            title='Step-by-step from planning to closing'
            description='Use this sequence to stay organized, avoid rushed decisions, and keep your transaction moving.'
          />
          <div className='mt-7'>
            <TimelineSteps steps={buySteps} />
          </div>
        </section>

        <section className='rounded-2xl border border-slate-200 bg-white p-8 shadow-sm'>
          <SectionHeader eyebrow='Decisions That Matter' title='Priorities that shape your outcome' />
          <div className='mt-6 grid gap-4 md:grid-cols-2'>
            {siteCopy.buyerRoadmap.decisions.map((item) => (
              <article key={item.title} className='rounded-xl bg-slate-50 p-4'>
                <h3 className='text-lg font-semibold text-slate-900'>{item.title}</h3>
                <p className='mt-2 text-sm leading-6 text-slate-600'>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className='grid gap-6 md:grid-cols-2'>
          <article className='rounded-2xl border border-slate-200 bg-white p-7 shadow-sm'>
            <h2 className='text-2xl font-semibold text-slate-900'>Common mistakes and how to correct them</h2>
            <ul className='mt-4 space-y-2 text-sm text-slate-600'>
              {siteCopy.buyerRoadmap.mistakes.map((mistake) => (
                <li key={mistake}>- {mistake}</li>
              ))}
            </ul>
          </article>
          <figure className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm'>
            <div className='relative h-72'>
              <Image src={faqImage.url} alt={faqImage.alt} fill sizes='(min-width: 768px) 50vw, 100vw' className='object-cover' />
            </div>
            <figcaption className='px-4 py-3 text-xs text-slate-500'>Photo: {faqImage.photographer}</figcaption>
          </figure>
        </section>

        <section className='rounded-2xl border border-slate-200 bg-white p-7 shadow-sm'>
          <h2 className='text-2xl font-semibold text-slate-900'>Printable checklist</h2>
          <p className='mt-2 text-sm text-slate-600'>Use this list during active search and contract periods. Check each item as you complete it.</p>
          <div className='mt-5 grid gap-6 md:grid-cols-[1.2fr_1fr]'>
            <ul className='space-y-2 text-sm text-slate-600'>
              {[
                'Confirm pre-approval and monthly budget range',
                'List top three communities and non-negotiables',
                'Prepare tour comparison notes template',
                'Request disclosure package before writing offer',
                'Schedule inspections immediately after contract acceptance',
                'Request insurance quote early in escrow',
                'Review settlement statement before closing date',
                'Complete final walkthrough with contract checklist',
                'Transfer utilities and keep closing documents organized'
              ].map((item) => (
                <li key={item} className='flex gap-3'>
                  <span aria-hidden='true'>☐</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <figure className='overflow-hidden rounded-xl border border-slate-200'>
              <div className='relative h-64'>
                <Image src={checklistImage.url} alt={checklistImage.alt} fill sizes='(min-width: 768px) 40vw, 100vw' className='object-cover' />
              </div>
              <figcaption className='px-3 py-2 text-xs text-slate-500'>Photo: {checklistImage.photographer}</figcaption>
            </figure>
          </div>
        </section>

        <section className='rounded-2xl border border-slate-200 bg-white p-7 shadow-sm'>
          <h2 className='text-2xl font-semibold text-slate-900'>Buyer FAQs</h2>
          <div className='mt-4'>
            <FAQAccordion items={buyerFaq} />
          </div>
        </section>

        <CTASection
          title='Ready to move from planning to action?'
          description='Compare neighborhoods first, then take the next step with local guidance tailored to your timeline.'
          primary={{ label: 'Explore communities', href: '/communities' }}
          secondary={{ label: 'Contact Move Clearly', href: '/contact' }}
        />

        <p className='text-xs text-slate-500'>Florida insurance, financing, and contract details vary by situation. This roadmap is educational and not legal, tax, or lending advice.</p>

        <p className='text-sm text-slate-600'>Need the selling side too? Review the <Link href='/sell' className='font-semibold text-cyan-700 hover:text-cyan-800'>Seller Roadmap</Link>.</p>
      </div>
    </>
  );
}
