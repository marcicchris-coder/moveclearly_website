export const siteConfig = {
  name: 'Move Clearly',
  version: 'v1.0.0',
  description:
    'A clear, confident real estate experience for buyers and sellers in Florida communities.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://moveclearly.com',
  ogImage: '/images/og-default.svg',
  phone: '',
  email: '',
  secondaryPhone: '',
  secondaryEmail: '',
  brokerage: 'Brokerage details available at launch',
  website: 'moveclearly.com',
  publicProfileReady: false
};

export const navLinks = [
  { href: '/communities', label: 'Communities' },
  { href: '/listings', label: 'Listings' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];
