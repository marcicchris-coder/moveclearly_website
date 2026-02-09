export interface Community {
  slug: string;
  name: string;
  hero: string;
  summary: string;
  lifestyle: string[];
  bestFor: string[];
  faq: Array<{ question: string; answer: string }>;
  related: string[];
}

export const communities: Community[] = [
  {
    slug: 'dunnellon',
    name: 'Dunnellon',
    hero: 'Dunnellon offers a balanced pace with natural springs, established neighborhoods, and practical value for both first-time and move-up buyers.',
    summary: 'Known for its access to Rainbow River and a laid-back lifestyle with room to grow.',
    lifestyle: ['River recreation and paddling access', 'Mix of established and newer homes', 'Comfortable drive to Ocala and Citrus County'],
    bestFor: ['Buyers seeking a quieter daily rhythm', 'Families wanting space and outdoor access'],
    faq: [
      { question: 'Is Dunnellon good for full-time living?', answer: 'Yes. Many buyers choose Dunnellon for year-round living thanks to value, space, and proximity to recreation.' },
      { question: 'Are there homes with land?', answer: 'Yes. Inventory often includes homes with larger lots and properties outside dense subdivisions.' }
    ],
    related: ['citrus-springs', 'ocala']
  },
  {
    slug: 'citrus-springs',
    name: 'Citrus Springs',
    hero: 'Citrus Springs stands out for affordability, straightforward neighborhoods, and convenient access to regional amenities.',
    summary: 'A value-focused area with growing buyer attention.',
    lifestyle: ['Affordable single-family options', 'Neighborhood parks and trails', 'Strong fit for practical monthly budgets'],
    bestFor: ['First-time buyers', 'Buyers focused on value over luxury finishes'],
    faq: [
      { question: 'How competitive is Citrus Springs?', answer: 'Competition varies by price point, with move-in-ready homes often drawing stronger interest.' },
      { question: 'Can I find newer construction?', answer: 'Yes. Newer builds are common in select pockets, along with established resale inventory.' }
    ],
    related: ['dunnellon', 'lecanto']
  },
  {
    slug: 'crystal-river',
    name: 'Crystal River',
    hero: 'Crystal River blends coastal charm and outdoor lifestyle, with properties that support both full-time living and second-home goals.',
    summary: 'Waterfront access, local dining, and a relaxed but active market.',
    lifestyle: ['Boating and waterfront recreation', 'Distinctive neighborhood feel', 'Strong appeal for lifestyle buyers'],
    bestFor: ['Buyers wanting coastal access', 'Lifestyle-driven relocations'],
    faq: [
      { question: 'Are waterfront homes available?', answer: 'Yes, though inventory and pricing vary significantly depending on canal, river, or open-water access.' },
      { question: 'Is Crystal River seasonal?', answer: 'The area has seasonal activity, but many communities support stable year-round living.' }
    ],
    related: ['hernando', 'lecanto']
  },
  {
    slug: 'lecanto',
    name: 'Lecanto',
    hero: 'Lecanto gives buyers a central location, practical commutes, and a dependable mix of home styles.',
    summary: 'A well-positioned community for day-to-day convenience.',
    lifestyle: ['Central location in Citrus County', 'Residential neighborhoods with mature landscaping', 'Balanced access to schools, shopping, and medical services'],
    bestFor: ['Buyers who want convenience', 'Households balancing work and family logistics'],
    faq: [
      { question: 'What price ranges are common?', answer: 'You can find a wide range, from entry-level homes to larger move-up properties.' },
      { question: 'Is Lecanto close to services?', answer: 'Yes. The area is known for convenience and quick access to essentials.' }
    ],
    related: ['citrus-springs', 'crystal-river']
  },
  {
    slug: 'beverly-hills',
    name: 'Beverly Hills',
    hero: 'Beverly Hills offers straightforward neighborhoods and strong value, making it a reliable choice for many buyers.',
    summary: 'An approachable market for practical buyers and downsizers.',
    lifestyle: ['Established subdivisions', 'Easy errands and local amenities', 'Lower entry points in many pockets'],
    bestFor: ['Downsizers', 'Budget-conscious buyers'],
    faq: [
      { question: 'Is Beverly Hills primarily retirement-focused?', answer: 'It attracts many downsizers, but it also includes mixed-age neighborhoods and owner-occupants.' },
      { question: 'Are homes mostly older?', answer: 'Many homes are established, and updated inventory appears regularly.' }
    ],
    related: ['hernando', 'inverness']
  },
  {
    slug: 'hernando',
    name: 'Hernando',
    hero: 'Hernando is ideal for buyers who want space, a calmer setting, and convenient access across Citrus County.',
    summary: 'A quieter area with room to breathe and strong local appeal.',
    lifestyle: ['Larger lots in many neighborhoods', 'Quiet roads and natural surroundings', 'Convenient routes to nearby towns'],
    bestFor: ['Buyers prioritizing privacy', 'Households that value outdoor space'],
    faq: [
      { question: 'Can I find homes outside HOAs?', answer: 'Yes. Hernando includes many properties with flexible ownership preferences.' },
      { question: 'Is Hernando far from shopping?', answer: 'Most daily needs are still accessible within a short drive.' }
    ],
    related: ['beverly-hills', 'crystal-river']
  },
  {
    slug: 'inverness',
    name: 'Inverness',
    hero: 'Inverness combines historic character with practical neighborhoods and a strong sense of place for full-time residents.',
    summary: 'A city-center feel with lakes, trails, and established housing stock.',
    lifestyle: ['Downtown events and local dining', 'Lakes and trail connectivity', 'Mix of character homes and newer updates'],
    bestFor: ['Buyers wanting neighborhood character', 'Residents who like local events and walkable pockets'],
    faq: [
      { question: 'Is Inverness walkable?', answer: 'Downtown areas are more walkable, while most residential neighborhoods remain car-oriented.' },
      { question: 'How does pricing compare nearby?', answer: 'Pricing can be moderate, with variation by condition and proximity to the downtown core.' }
    ],
    related: ['beverly-hills', 'ocala']
  },
  {
    slug: 'ocala',
    name: 'Ocala',
    hero: 'Ocala gives buyers the broadest range of inventory, from newer subdivisions to estate-style properties and everything in between.',
    summary: 'A larger market with diverse neighborhoods and strong relocation demand.',
    lifestyle: ['Wide inventory selection', 'Strong dining and retail options', 'Convenient highway access for regional travel'],
    bestFor: ['Relocating buyers', 'Buyers needing multiple neighborhood options'],
    faq: [
      { question: 'Is Ocala competitive for buyers?', answer: 'Certain segments move quickly, especially homes with strong condition and pricing.' },
      { question: 'Are there options for every budget?', answer: 'Ocala offers one of the broadest local price ranges and property types.' }
    ],
    related: ['dunnellon', 'inverness']
  }
];

export function getCommunityBySlug(slug: string) {
  return communities.find((community) => community.slug === slug);
}
