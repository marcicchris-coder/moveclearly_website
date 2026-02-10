export interface Community {
  slug: string;
  name: string;
  hero: string;
  summary: string;
  lifestyle: string[];
  bestFor: string[];
  faq: Array<{ question: string; answer: string }>;
  related: string[];
  marketReport?: {
    reportName: string;
    period: string;
    highlights: string[];
    stats: Array<{ label: string; value: string; note?: string }>;
  };
  attractions?: Array<{ name: string; description: string; link: string }>;
  featuredDining?: Array<{ name: string; description: string; link: string }>;
  gallery?: Array<{ title: string; image: string; credit: string; source: string }>;
  history?: {
    title: string;
    narrative: string[];
    sources: Array<{ label: string; link: string }>;
  };
}

export const communities: Community[] = [
  {
    slug: 'dunnellon',
    name: 'Dunnellon',
    hero: 'Dunnellon blends spring-fed river life with small-town character, where buyers can find attainable homes, direct access to Rainbow River recreation, and a historic downtown tied to the old rail corridor.',
    summary: 'A two-river town known for Rainbow Springs, Withlacoochee views, and a practical range of home prices.',
    lifestyle: [
      'Kayaking, tubing, and paddle access along Rainbow River and the Withlacoochee',
      'Historic district charm with railroad-era roots and annual Boomtown traditions',
      'A broad mix of price points from entry-level homes to river-adjacent move-up properties'
    ],
    bestFor: [
      'Buyers who want outdoor lifestyle and everyday value in the same market',
      'Households looking for a relaxed pace without losing regional access to Ocala and Citrus County'
    ],
    faq: [
      {
        question: 'Is Dunnellon good for full-time living?',
        answer: 'Yes. Dunnellon supports year-round living with a stable local market, river recreation, and straightforward access to nearby employment centers.'
      },
      {
        question: 'What does current inventory look like in Dunnellon?',
        answer: 'Your latest trend report shows 1,952 active residential listings in the combined MLS set used by the report period, giving buyers meaningful selection.'
      },
      {
        question: 'Are most sales in luxury price points?',
        answer: 'No. Recent closings are concentrated in practical mid-range bands, especially from the low-$200Ks through mid-$300Ks.'
      }
    ],
    related: ['citrus-springs', 'ocala'],
    marketReport: {
      reportName: 'Real Estate Trend Indicator (Residential, For Sale)',
      period: 'January 1, 2026 to February 10, 2026',
      highlights: [
        '332 closed residential sales in the report period with an overall average sold price of $326,525.',
        '1,952 active listings indicate a broad selection for buyers, with 132 pending at report time.',
        'The strongest sold price bracket was $300,000-$349,999 with 42 closed sales.',
        'Cash remains a major financing driver at 145 transactions (about 44% of all closings).'
      ],
      stats: [
        { label: 'Closed sales', value: '332' },
        { label: 'Active listings', value: '1,952' },
        { label: 'Pending listings', value: '132' },
        { label: 'Average sold price', value: '$326,525' },
        { label: 'Median speed profile', value: '166 sold in <=60 days', note: '103 (0-30 days) + 63 (31-60 days)' },
        { label: 'Top financing', value: 'Cash (145)', note: 'Conventional (107), FHA (37), VA (28)' }
      ]
    },
    attractions: [
      {
        name: 'Rainbow Springs State Park',
        description: 'One of Florida\'s first-magnitude spring systems with 72-degree water, headsprings swimming, paddling, and scenic gardens.',
        link: 'https://www.floridastateparks.org/parks-and-trails/rainbow-springs-state-park'
      },
      {
        name: 'Blue Run of Dunnellon Park',
        description: 'Popular tubing take-out and kayak launch with walking trails and direct Rainbow River access.',
        link: 'https://www.dunnellon.org/Home/Components/FacilityDirectory/FacilityDirectory/4/'
      },
      {
        name: 'Dunnellon Trail & Withlacoochee River Bridge',
        description: 'A 2.4-mile paved multi-use trail on a historic railroad bed with standout views crossing the Withlacoochee.',
        link: 'https://www.floridastateparks.org/parks-and-trails/dunnellon-trail'
      },
      {
        name: 'Historic Railroad Story',
        description: 'Dunnellon\'s growth as a rail and phosphate hub is still reflected in local landmarks and downtown character.',
        link: 'https://www.dunnellon.org/visitors/history-of-dunnellon'
      }
    ],
    featuredDining: [
      {
        name: 'Blue Gator Tiki Bar & Restaurant',
        description: 'Withlacoochee riverfront dining with live-music energy and outdoor seating.',
        link: 'https://www.tripadvisor.com/Restaurant_Review-g34188-d2390327-Reviews-Blue_Gator_Tiki_Bar_Restaurant-Dunnellon_Florida.html'
      },
      {
        name: 'The Front Porch Restaurant & Pie Shop',
        description: 'A long-running local favorite for comfort food and house-made pies.',
        link: 'https://www.tripadvisor.com/Restaurant_Review-g34188-d1959855-Reviews-The_Front_Porch_Restaurant_Pie_Shop-Dunnellon_Florida.html'
      },
      {
        name: 'Stumpknockers Restaurant',
        description: 'Classic Florida seafood and American fare with broad local following.',
        link: 'https://www.tripadvisor.com/Restaurant_Review-g34188-d517168-Reviews-Stumpknockers_Restaurant-Dunnellon_Florida.html'
      }
    ],
    gallery: [
      {
        title: 'Rainbow Springs Swimming Area',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rainbow%20Springs%20State%20Park%20pano01.jpg',
        credit: 'Photo: Ebyabe (Wikimedia Commons, CC BY/CC BY-SA options)',
        source: 'https://commons.wikimedia.org/wiki/File:Rainbow_Springs_State_Park_pano01.jpg'
      },
      {
        title: 'Crossing the Withlacoochee in Dunnellon',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Crossing%20the%20Withlacoochie%20River%20in%20Dunnellon%20-%20panoramio.jpg',
        credit: 'Photo: Art Anderson / Panoramio archive via Wikimedia Commons',
        source: 'https://commons.wikimedia.org/wiki/File:Crossing_the_Withlacoochie_River_in_Dunnellon_-_panoramio.jpg'
      },
      {
        title: 'Historic Dunnellon Train Depot',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dunnellon%20train%20depot%20pano01.jpg',
        credit: 'Photo: Ebyabe (Wikimedia Commons, CC BY-SA 2.5)',
        source: 'https://commons.wikimedia.org/wiki/File:Dunnellon_train_depot_pano01.jpg'
      }
    ],
    history: {
      title: 'Boomtown roots and railroad legacy',
      narrative: [
        'Dunnellon was founded in the late 1880s and incorporated in 1891. The discovery of hard-rock phosphate in 1889 transformed it into one of Florida\'s early boomtowns.',
        'Phosphate moved by river and rail, and Dunnellon became a transportation hub. The 1908 Atlantic Coast Line depot on South Williams Street still anchors local identity.',
        'That history remains visible today through the historic district, rail-to-trail corridors, and annual community events like Boomtown Days.'
      ],
      sources: [
        { label: 'City of Dunnellon history', link: 'https://www.dunnellon.org/visitors/history-of-dunnellon' },
        { label: 'Dunnellon Trail (former railroad bed)', link: 'https://www.floridastateparks.org/parks-and-trails/dunnellon-trail' },
        { label: 'Ocala/Marion Dunnellon guide', link: 'https://www.ocalamarion.com/plan-your-visit/area/dunnellon/' }
      ]
    }
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
