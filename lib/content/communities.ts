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
    hero: 'Crystal River combines spring-fed water access, boating culture, and walkable pockets near Kings Bay, making it one of the most lifestyle-driven markets in Citrus County.',
    summary: 'A waterfront-focused market where nature access and everyday convenience overlap.',
    lifestyle: [
      'Direct access to Kings Bay, spring runs, and Gulf routes for boating, paddling, and fishing',
      'Mix of canal-front homes, established inland neighborhoods, and newer residential pockets',
      'Year-round local activity with strong winter-season visitor demand around eco-tourism'
    ],
    bestFor: [
      'Buyers prioritizing waterfront or near-water lifestyle access',
      'Households balancing full-time living with recreation-focused neighborhood goals'
    ],
    faq: [
      {
        question: 'Are waterfront homes available in Crystal River?',
        answer: 'Yes. Inventory includes canal-front, bay-access, and inland options, with pricing shifting based on water depth, bridge clearance, and proximity to open Gulf routes.'
      },
      {
        question: 'What is the current market direction in Crystal River?',
        answer: 'Recent monthly housing snapshots indicate a buyer-favoring environment, with inventory depth giving buyers more room to compare options and negotiate terms.'
      },
      {
        question: 'Is Crystal River practical for full-time residents?',
        answer: 'Yes. While tourism activity peaks seasonally, the area supports year-round living with shopping, dining, medical access, and established residential neighborhoods.'
      }
    ],
    related: ['hernando', 'lecanto'],
    marketReport: {
      reportName: 'Realtor.com Housing Market Snapshot',
      period: 'December 2025 (latest monthly market view)',
      highlights: [
        'Median listing home price reported at approximately $346.2K, with year-over-year softening that can create more negotiating room for buyers.',
        'Median sold price published around $307.8K, reflecting the gap between asking and closed pricing in many segments.',
        'The market profile is categorized as buyer-leaning, with enough active inventory for side-by-side neighborhood comparisons.'
      ],
      stats: [
        { label: 'Median listing price', value: '$346.2K' },
        { label: 'Median sold price', value: '$307.8K' },
        { label: 'Market posture', value: "Buyer's market" },
        { label: 'Typical value spread', value: 'List-to-sold gap remains visible', note: 'Useful for offer strategy and due-diligence planning.' }
      ]
    },
    attractions: [
      {
        name: 'Three Sisters Springs (Crystal River National Wildlife Refuge)',
        description: 'Iconic spring complex known for clear water and winter manatee viewing, with boardwalk and seasonal trolley/kayak access.',
        link: 'https://www.fws.gov/refuge/crystal-river'
      },
      {
        name: 'Crystal River Archaeological State Park',
        description: 'National Historic Landmark featuring pre-Columbian mound complexes and one of Florida’s most important archaeological landscapes.',
        link: 'https://www.floridastateparks.org/parks-and-trails/crystal-river-archaeological-state-park'
      },
      {
        name: 'Hunter Springs Park',
        description: 'Popular local launch and swimming area with direct spring-fed access and central location near downtown Crystal River.',
        link: 'https://www.crystalriverfl.org/facility/facility.aspx?FacilityID=2'
      }
    ],
    featuredDining: [
      {
        name: 'Seafood Seller & Café',
        description: 'A local favorite for seafood-forward plates and casual atmosphere near the Crystal River core.',
        link: 'https://www.tripadvisor.com/Restaurant_Review-g34162-d1746909-Reviews-Seafood_Seller_Cafe-Crystal_River_Florida.html'
      },
      {
        name: "Kane's Cattle Co.",
        description: 'Steakhouse-style option often chosen for celebratory dinners and larger group meals.',
        link: 'https://www.tripadvisor.com/Restaurant_Review-g34162-d1176954-Reviews-Kane_s_Cattle_Co-Crystal_River_Florida.html'
      },
      {
        name: "Cracker's Bar & Grill",
        description: 'Waterfront-adjacent dining with broad menu options and strong local visibility.',
        link: 'https://www.tripadvisor.com/Restaurant_Review-g34162-d502306-Reviews-Cracker_s_Bar_Grill-Crystal_River_Florida.html'
      }
    ],
    gallery: [
      {
        title: 'Kings Bay aerial character',
        image: '/images/crystal-river-aerial.webp',
        credit: 'Photo: Move Clearly media library',
        source: '/images/crystal-river-aerial.webp'
      },
      {
        title: 'Spring-fed wildlife access',
        image: '/images/crystal-river-manatees.webp',
        credit: 'Photo: Move Clearly media library',
        source: '/images/crystal-river-manatees.webp'
      },
      {
        title: 'Local district art and streetscape',
        image: '/images/crystal-river-mural.webp',
        credit: 'Photo: Move Clearly media library',
        source: '/images/crystal-river-mural.webp'
      }
    ],
    history: {
      title: 'Springs, archaeology, and working waterfront roots',
      narrative: [
        'Crystal River developed around the spring-fed Kings Bay system, where consistent freshwater flow shaped settlement patterns, boating routes, and today’s recreation economy.',
        'The Crystal River Archaeological State Park preserves one of Florida’s most significant pre-Columbian ceremonial sites, with mound structures tied to long-running trade and ritual networks.',
        'Modern Crystal River identity blends conservation and waterfront life: manatee habitat protection, eco-tourism, and residential growth continue to influence neighborhood demand and development choices.'
      ],
      sources: [
        { label: 'Crystal River National Wildlife Refuge', link: 'https://www.fws.gov/refuge/crystal-river' },
        { label: 'Crystal River Archaeological State Park', link: 'https://www.floridastateparks.org/parks-and-trails/crystal-river-archaeological-state-park' },
        { label: 'City of Crystal River', link: 'https://www.crystalriverfl.org/' }
      ]
    }
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
    hero: 'Inverness offers a historic downtown core, lakeside setting, and trail-linked neighborhoods that attract buyers wanting both character and practical day-to-day convenience.',
    summary: 'A city-center market with civic history, lake access, and strong full-time residential appeal.',
    lifestyle: [
      'Downtown events, courthouse-square character, and locally owned dining',
      'Access to the Withlacoochee State Trail corridor and nearby lake recreation',
      'Mix of established homes, updated properties, and value-focused neighborhoods around the city center'
    ],
    bestFor: [
      'Buyers who want community character plus routine convenience',
      'Residents prioritizing trail access, downtown events, and year-round livability'
    ],
    faq: [
      {
        question: 'Is Inverness walkable?',
        answer: 'Downtown Inverness is the most walkable pocket, while surrounding neighborhoods are generally car-oriented with selective bike/trail access.'
      },
      {
        question: 'What does the current Inverness market look like?',
        answer: 'Recent monthly snapshots show moderate pricing with buyer leverage in many segments, especially where homes need updates or have longer days on market.'
      },
      {
        question: 'Is Inverness mainly a retirement market?',
        answer: 'Inverness includes downsizers and retirees, but it also supports mixed-age owner-occupant households, relocations, and move-up buyers.'
      }
    ],
    related: ['beverly-hills', 'ocala'],
    marketReport: {
      reportName: 'Realtor.com Housing Market Snapshot',
      period: 'December 2025 (latest monthly market view)',
      highlights: [
        'Median listing home price reported at roughly $274.5K, indicating a comparatively attainable entry profile versus some nearby coastal pockets.',
        'Median sold price published near $250.0K, reinforcing the need to evaluate condition and pricing strategy together.',
        'Market classification remains buyer-leaning, with inventory levels that support more deliberate comparison shopping.'
      ],
      stats: [
        { label: 'Median listing price', value: '$274.5K' },
        { label: 'Median sold price', value: '$250.0K' },
        { label: 'Market posture', value: "Buyer's market" },
        { label: 'Pricing context', value: 'Generally moderate relative to nearby lifestyle markets' }
      ]
    },
    attractions: [
      {
        name: 'Old Courthouse Heritage Museum',
        description: 'Historic 1912 courthouse now serving as a local heritage museum and downtown landmark.',
        link: 'https://www.oldcourthouse.org/'
      },
      {
        name: 'Withlacoochee State Trail (Inverness segment)',
        description: 'Regionally known paved trail corridor used for cycling, running, and long-range connectivity across Citrus County.',
        link: 'https://www.floridastateparks.org/parks-and-trails/withlacoochee-state-trail'
      },
      {
        name: 'Fort Cooper State Park',
        description: 'Historic and natural area with trails, shoreline habitat, and interpretive value tied to Florida frontier history.',
        link: 'https://www.floridastateparks.org/parks-and-trails/fort-cooper-state-park'
      }
    ],
    featuredDining: [
      {
        name: 'Stumpknockers on the Square',
        description: 'Popular downtown-adjacent option for casual seafood and Southern-style staples.',
        link: 'https://www.tripadvisor.com/Restaurant_Review-g34325-d2257830-Reviews-Stumpknockers_on_the_Square-Inverness_Florida.html'
      },
      {
        name: 'The Cove Pub and Grub',
        description: 'Local hangout-style restaurant frequently chosen for relaxed meals and live-event nights.',
        link: 'https://www.tripadvisor.com/Restaurant_Review-g34325-d3850728-Reviews-The_Cove_Pub_and_Grub-Inverness_Florida.html'
      },
      {
        name: 'Cedar River Seafood',
        description: 'A long-running seafood option serving classic Florida-style plates in the Inverness market area.',
        link: 'https://www.tripadvisor.com/Restaurant_Review-g34325-d2429547-Reviews-Cedar_River_Seafood-Inverness_Florida.html'
      }
    ],
    history: {
      title: 'Rail-era growth and courthouse-square identity',
      narrative: [
        'Inverness expanded as transportation and regional commerce grew in Citrus County, with downtown blocks forming around civic and rail-linked activity in the late 19th and early 20th centuries.',
        'The 1912 courthouse complex remains one of the city’s defining landmarks and anchors local identity through the Old Courthouse Heritage Museum.',
        'Today, Inverness blends that historic core with trail connectivity, lake access, and practical residential neighborhoods, creating a market that appeals to both long-time locals and relocating buyers.'
      ],
      sources: [
        { label: 'City of Inverness', link: 'https://www.inverness.gov/' },
        { label: 'Old Courthouse Heritage Museum', link: 'https://www.oldcourthouse.org/' },
        { label: 'Fort Cooper State Park', link: 'https://www.floridastateparks.org/parks-and-trails/fort-cooper-state-park' }
      ]
    }
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
