interface TimelineStep {
  title: string;
  description: string;
}

export function TimelineSteps({ steps }: { steps: TimelineStep[] }) {
  return (
    <ol className='space-y-4'>
      {steps.map((step, index) => (
        <li key={step.title} className='rounded-xl border border-slate-200 bg-white p-5'>
          <p className='text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700'>Step {index + 1}</p>
          <h3 className='mt-1 text-lg font-semibold text-slate-900'>{step.title}</h3>
          <p className='mt-2 text-sm leading-6 text-slate-600'>{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
