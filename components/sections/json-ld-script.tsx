import { JsonLd } from '@/lib/seo/json-ld';

export function JsonLdScript({ data }: { data: JsonLd | JsonLd[] }) {
  const payload = Array.isArray(data)
    ? {
        '@context': 'https://schema.org',
        '@graph': data
          .filter(Boolean)
          .map((entry) => {
            // Nested graph items should not redefine @context.
            const rest = { ...entry };
            delete rest['@context'];
            return rest;
          })
      }
    : {
        '@context': 'https://schema.org',
        ...data
      };

  return <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }} />;
}
