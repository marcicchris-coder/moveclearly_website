import { CommunityFaq } from '@/src/content/communities';

export function FAQAccordion({ items }: { items: CommunityFaq[] }) {
  return (
    <div className='space-y-3'>
      {items.map((item) => (
        <details key={item.question} className='rounded-xl border border-slate-200 bg-white p-4'>
          <summary className='cursor-pointer list-none pr-5 text-base font-semibold text-slate-900'>
            {item.question}
          </summary>
          <p className='mt-3 text-sm leading-6 text-slate-600'>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
