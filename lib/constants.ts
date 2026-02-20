export const siteConfig = {
  name: 'Move Clearly',
  version: '1.1.0',
  description:
    'Education-first real estate guidance for buyers and sellers in Citrus County and surrounding Florida communities.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://moveclearly.com',
  ogImage: '/images/og-default.svg',
  phone: '',
  email: '',
  secondaryPhone: '',
  secondaryEmail: '',
  brokerage: 'Brokerage compliance details coming soon',
  website: 'moveclearly.com',
  publicProfileReady: false
};

export const navLinks = [
  { href: '/buy', label: 'Buy' },
  { href: '/sell', label: 'Sell' },
  { href: '/communities', label: 'Explore Communities' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];
