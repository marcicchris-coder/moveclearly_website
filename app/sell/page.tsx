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
  title: 'Sell with a Clear Strategy | Move Clearly Seller Roadmap',
  description:
    'Follow a step-by-step seller roadmap for Florida homeowners, from home preparation and pricing to negotiations and closing.',
  canonicalPath: '/sell'
});

const sellSteps = [
  { title: 'Set timing and move goals', description: 'Define your ideal list date, target close window, and move logistics before pricing decisions begin.' },
  { title: 'Audit current home condition', description: 'Identify repairs, safety items, and visual distractions that could weaken buyer confidence.' },
  { title: 'Build pricing strategy', description: 'Position your home against active competition and recent outcomes in similar condition tiers.' },
  { title: 'Complete presentation prep', description: 'Declutter, clean, and stage key rooms so buyers understand flow and value quickly.' },
  { title: 'Launch with strong media', description: 'Use high-quality photography and clear property story to attract qualified interest.' },
  { title: 'Manage showing readiness', description: 'Keep the home consistently prepared and gather feedback to evaluate market response.' },
  { title: 'Review and compare offers', description: 'Look beyond list price and evaluate terms, financing strength, timelines, and contingencies.' },
  { title: 'Negotiate inspection and concession requests', description: 'Respond strategically to repair and credit requests while protecting net outcome.' },
  { title: 'Track contract milestones', description: 'Monitor appraisal, financing, title, and buyer deadlines to reduce closing risk.' },
  { title: 'Prepare final move-out and close', description: 'Complete final obligations, confirm settlement details, and hand off the home smoothly.' }
];

const sellerFaq = [
  { question: 'How do I know if my list price is realistic?', answer: 'Compare active competition and recent sales in similar condition, then position for current buyer behavior rather than hopeful headlines.' },
  { question: 'Should I wait to list until every upgrade is complete?', answer: 'Usually no. Strategic repairs and presentation work often deliver better return than full remodel timelines.' },
  { question: 'What matters most in the first weeks on market?', answer: 'Accurate pricing, strong media, and showing readiness are critical in the first exposure window.' },
  { question: 'How should I evaluate multiple offers?', answer: 'Compare net proceeds, financing strength, timelines, contingencies, and the likelihood of smooth closing.' },
  { question: 'Do inspection requests mean the deal is failing?', answer: 'Not necessarily. Inspection negotiations are common and can often be resolved with clear priorities.' },
  { question: 'Should I offer concessions upfront?', answer: 'That depends on current competition, buyer demand, and your net goal. Strategy should be market-aware and specific.' },
  { question: 'Can staging really affect sale outcomes?', answer: 'Yes. Clean, intentional presentation helps buyers understand space and increases perceived value.' },
  { question: 'How can I reduce days on market?', answer: 'Price correctly from day one, launch with strong visuals, and keep showing access as easy as possible.' },
  { question: 'What if an appraisal is lower than expected?', answer: 'Possible responses include renegotiation, dispute with stronger comps, concessions, or buyer cash adjustment depending on terms.' },
  { question: 'When should I prepare for move-out?', answer: 'Begin early. Plan logistics before contract milestones tighten so closing week stays manageable.' },
  { question: 'How much should I disclose before listing?', answer: 'Transparent disclosures build trust and reduce surprises that can disrupt negotiations later.' },
  { question: 'Is it worth listing in a slower market?', answer: 'Yes, with disciplined pricing and clear positioning. Slow conditions reward preparation and realistic strategy.' }
];

export default function SellPage() {
  const prepImage = imageMap.sellPrep;
  const offersImage = imageMap.sellOffers;

  return (
    <>
      <JsonLdScript
        data={[
          breadcrumbJsonLd([
            { name: 'Home', item: 'https://moveclearly.com/' },
            { name: 'Sell', item: 'https://moveclearly.com/sell' }
          ]),
          faqJsonLd(sellerFaq),
          webPageJsonLd({
            name: 'Sell with a clear strategy',
            url: 'https://moveclearly.com/sell',
            description: 'Step-by-step seller roadmap for Florida homeowners.'
          })
        ]}
      />

      <HeroSection
        title='Sell with a clear strategy'
        description='Use a structured roadmap to prepare, price, negotiate, and close with less friction and stronger decision control.'
        imageKey='sellHero'
        primaryCta={{ label: 'Talk to a local guide', href: '/contact' }}
        secondaryCta={{ label: 'Explore communities', href: '/communities' }}
      />

      <div className='mx-auto max-w-7xl space-y-12 px-4 py-14 md:px-6'>
        <section>
          <SectionHeader
            eyebrow='Seller Timeline'
            title='Step-by-step from preparation to closing'
            description='This framework keeps your listing plan organized so you can respond to market feedback quickly and calmly.'
          />
          <div className='mt-7'>
            <TimelineSteps steps={sellSteps} />
          </div>
        </section>

        <section className='rounded-2xl border border-slate-200 bg-white p-8 shadow-sm'>
          <SectionHeader
            eyebrow='Pricing Philosophy'
            title='Positioning over promises'
            description='Pricing is a strategy decision, not a slogan. The goal is to create qualified demand and protect your net result.'
          />
          <ul className='mt-5 space-y-2 text-sm text-slate-600'>
            {siteCopy.sellerRoadmap.pricingPrinciples.map((principle) => (
              <li key={principle}>- {principle}</li>
            ))}
          </ul>
        </section>

        <section className='grid gap-6 md:grid-cols-2'>
          <article className='rounded-2xl border border-slate-200 bg-white p-7 shadow-sm'>
            <h2 className='text-2xl font-semibold text-slate-900'>Preparation checklist</h2>
            <ul className='mt-4 space-y-2 text-sm text-slate-600'>
              {siteCopy.sellerRoadmap.prepChecklist.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </article>
          <figure className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm'>
            <div className='relative h-72'>
              <Image src={prepImage.url} alt={prepImage.alt} fill sizes='(min-width: 768px) 50vw, 100vw' className='object-cover' />
            </div>
            <figcaption className='px-4 py-3 text-xs text-slate-500'>Photo: {prepImage.photographer}</figcaption>
          </figure>
        </section>

        <section className='grid gap-6 md:grid-cols-2'>
          <article className='rounded-2xl border border-slate-200 bg-white p-7 shadow-sm'>
            <h2 className='text-2xl font-semibold text-slate-900'>Negotiation and offers</h2>
            <ul className='mt-4 space-y-2 text-sm text-slate-600'>
              {siteCopy.sellerRoadmap.negotiations.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </article>
          <figure className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm'>
            <div className='relative h-72'>
              <Image src={offersImage.url} alt={offersImage.alt} fill sizes='(min-width: 768px) 50vw, 100vw' className='object-cover' />
            </div>
            <figcaption className='px-4 py-3 text-xs text-slate-500'>Photo: {offersImage.photographer}</figcaption>
          </figure>
        </section>

        <section className='rounded-2xl border border-slate-200 bg-white p-7 shadow-sm'>
          <h2 className='text-2xl font-semibold text-slate-900'>Seller FAQs</h2>
          <div className='mt-4'>
            <FAQAccordion items={sellerFaq} />
          </div>
        </section>

        <CTASection
          title='Take the next step with a structured listing plan'
          description='If you want a personalized prep and pricing conversation, start with a local planning call.'
          primary={{ label: 'Request a home evaluation', href: '/contact?subject=Home%20evaluation%20request' }}
          secondary={{ label: 'Contact Move Clearly', href: '/contact' }}
        />

        <p className='text-xs text-slate-500'>This seller roadmap is educational content and not legal, tax, or contractual advice. Terms and outcomes vary by property and market conditions.</p>

        <p className='text-sm text-slate-600'>Also planning a purchase after selling? Open the <Link href='/buy' className='font-semibold text-cyan-700 hover:text-cyan-800'>Buyer Roadmap</Link>.</p>
      </div>
    </>
  );
}
