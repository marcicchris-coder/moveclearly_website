export function TagPills({ tags }: { tags: string[] }) {
  return (
    <ul className='flex flex-wrap gap-2' aria-label='Tags'>
      {tags.map((tag) => (
        <li key={tag} className='rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-800'>
          {tag}
        </li>
      ))}
    </ul>
  );
}
