export const siteConfig = {
  name: 'Move Clearly',
  description:
    'A clear, confident real estate experience for buyers and sellers in Florida communities.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://moveclearly.com',
  ogImage: '/images/og-default.svg',
  phone: '352.228.3237',
  email: 'ChrisMarcicRealtor@gmail.com',
  secondaryPhone: '352.228.7054',
  secondaryEmail: 'Michellemarcic.tc@gmail.com',
  brokerage: 'Meek Real Estate',
  website: 'chris.meekrealestate.com'
};

export const teamMembers = [
  {
    name: 'Christopher “Chris” Marcic',
    role: 'Realtor | Buyer & Listing Strategy',
    bio: 'Chris focuses on the strategic side of each transaction — pricing, negotiation, market positioning, and helping clients understand why a decision makes sense, not just what to do next. His approach is process-driven and data-informed, with an emphasis on reducing uncertainty and wasted time. Whether working with buyers narrowing a complex search or sellers preparing a home for market, Chris prioritizes clarity, responsiveness, and straightforward guidance.',
    phone: siteConfig.phone,
    email: siteConfig.email,
    brokerage: siteConfig.brokerage,
    license: 'SL3423961',
    headshot: '/images/chris-headshot.png'
  },
  {
    name: 'Michelle Marcic',
    role: 'Realtor | Client Experience & Transaction Coordination',
    bio: 'Michelle leads communication, execution, and follow-through — making sure nothing falls through the cracks once a search or contract is underway. She is the primary point of continuity for clients, keeping timelines organized, questions answered, and expectations aligned from the first showing through closing. Her focus is on making the process feel calm, organized, and predictable, even when the details get complex.',
    phone: siteConfig.secondaryPhone,
    email: siteConfig.secondaryEmail,
    brokerage: siteConfig.brokerage,
    headshot: '/images/michelle-headshot.png'
  }
] as const;

export const navLinks = [
  { href: '/communities/dunnellon', label: 'Communities' },
  { href: '/listings', label: 'Listings' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];
