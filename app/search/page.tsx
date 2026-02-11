import { buildMetadata } from '@/lib/seo/metadata';
import { getIdxHostedSearchUrl } from '@/lib/idx';

export const metadata = buildMetadata({
  title: 'Search | Move Clearly',
  description: 'Search available homes on the interactive IDX map.',
  canonicalPath: '/search'
});

type SearchPageProps = {
  searchParams?: {
    q?: string;
  };
};

export default function SearchPage({ searchParams }: SearchPageProps) {
  const hostedSearchUrl = getIdxHostedSearchUrl();
  const query = searchParams?.q?.trim() || '';
  const iframeSrc = (() => {
    if (!hostedSearchUrl) return '';

    try {
      const url = new URL(hostedSearchUrl);
      if (query) url.searchParams.set('q', query);
      return url.toString();
    } catch {
      return hostedSearchUrl;
    }
  })();

  return (
    <div className='py-10'>
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        <h1 className='text-3xl font-semibold tracking-tight md:text-4xl'>Map Search</h1>
        <p className='mt-2 text-sm text-muted-foreground'>
          Use the interactive map search to browse active listings.
        </p>
      </div>

      {hostedSearchUrl ? (
        <div className='relative left-1/2 right-1/2 mt-6 w-screen -translate-x-1/2 overflow-hidden border-y bg-white'>
          <iframe title='IDX Map Search' src={iframeSrc} className='h-[78vh] min-h-[680px] w-full' loading='lazy' />
        </div>
      ) : (
        <div className='mx-auto mt-6 max-w-7xl rounded-xl border bg-white p-6 text-sm text-muted-foreground'>
          IDX search is not configured. Set <code>NEXT_PUBLIC_IDXBROKER_SEARCH_URL</code> in your environment.
        </div>
      )}
    </div>
  );
}
