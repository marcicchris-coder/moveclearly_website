import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Move Clearly',
    short_name: 'Move Clearly',
    description: 'Clear, practical real estate guidance across key Florida communities.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f7fafd',
    theme_color: '#4f9ac8',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml'
      }
    ]
  };
}
