export const siteConfig = {
  name: 'Move Clearly',
  description:
    'A clear, confident real estate experience for buyers and sellers in Florida communities.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://moveclearly.com',
  ogImage: '/images/og-default.svg',
  phone: '(000) 000-0000',
  email: 'hello@moveclearly.com'
};

export const navLinks = [
  { href: '/search', label: 'Search' },
  { href: '/communities/dunnellon', label: 'Communities' },
  { href: '/listings', label: 'Listings' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];
