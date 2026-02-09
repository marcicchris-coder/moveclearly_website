import { JsonLd } from '@/lib/seo/json-ld';

export function JsonLdScript({ data }: { data: JsonLd | JsonLd[] }) {
  return <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
