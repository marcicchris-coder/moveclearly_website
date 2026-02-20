export const lifestyleTags = [
  'Waterfront',
  'Golf access',
  'Low-traffic',
  'Established neighborhoods',
  'Convenience-focused',
  'Rural',
  'Large lots',
  'New construction'
] as const;

export type LifestyleTag = (typeof lifestyleTags)[number];

export interface CommunityFaq {
  question: string;
  answer: string;
}

export interface Community {
  name: string;
  slug: string;
  shortDescription: string;
  vibe: string;
  heroImage: string;
  galleryImages: string[];
  tags: LifestyleTag[];
  idealFor: string[];
  notIdealFor: string[];
  housingNotes: string;
  priceRangeDisclaimer: string;
  commuteNotes: string;
  dailyLife: string;
  amenities: string[];
  schoolsNotes: string;
  moveClearlyTake: string;
  faq: CommunityFaq[];
}

export const communities: Community[] = [
  {
    name: 'Crystal River',
    slug: 'crystal-river',
    shortDescription: 'Water access, nature-driven living, and a strong mix of full-time neighborhoods.',
    vibe: 'Coastal and active with a steady local pace.',
    heroImage: 'crystalRiverHero',
    galleryImages: ['crystalRiverGallery1', 'crystalRiverGallery2'],
    tags: ['Waterfront', 'Low-traffic', 'Established neighborhoods'],
    idealFor: ['Buyers who want boating, paddling, or fishing access', 'Households that want nearby shopping without major city traffic'],
    notIdealFor: ['Buyers who want dense urban nightlife', 'People who prefer zero seasonal tourism activity'],
    housingNotes:
      'Housing ranges from inland single-family neighborhoods to canal homes and waterfront properties near Kings Bay. Inventory often includes both established homes and renovated options.',
    priceRangeDisclaimer:
      'General guidance only: many homes are commonly seen from the mid-$200s to $700k+, with waterfront premiums varying by location, water depth, and bridge access. This is not live pricing data.',
    commuteNotes:
      'US-19 and SR-44 make it practical to reach Lecanto, Inverness, and surrounding Citrus County service centers. Regional drives to Tampa and Ocala are possible for periodic trips.',
    dailyLife:
      'Most days feel relaxed and outdoors-focused. Residents often structure routines around water access, local errands, and small-business dining rather than high-density retail zones.',
    amenities: ['Kings Bay and spring-fed recreation', 'Nearby marinas and boat ramps', 'Local dining corridors and essential services'],
    schoolsNotes:
      'Public and charter options serve the area through Citrus County. School fit should be verified directly with district boundaries, transportation routes, and current enrollment policies.',
    moveClearlyTake:
      'Crystal River is a strong match when waterfront lifestyle is central to your decision. If you need daily big-city convenience, compare nearby inland communities before you choose.',
    faq: [
      {
        question: 'Does Crystal River only work for vacation homes?',
        answer: 'No. Many neighborhoods are full-time owner-occupied, and everyday services support year-round living.'
      },
      {
        question: 'How much does waterfront location impact value?',
        answer: 'A lot. Canal quality, open-water access, and flood-zone considerations can change both price and long-term ownership costs.'
      },
      {
        question: 'Is boat access available in most areas?',
        answer: 'Not in every pocket. Some neighborhoods are inland, so confirming launch points and access routes early is important.'
      },
      {
        question: 'What should buyers watch for in inspections?',
        answer: 'Roof age, HVAC condition, moisture management, and insurance-related items are common priorities in this area.'
      },
      {
        question: 'Can sellers still succeed when inventory rises?',
        answer: 'Yes. Pricing discipline, presentation quality, and clear showing strategy matter more when buyers have more choices.'
      },
      {
        question: 'Is Crystal River practical for remote work households?',
        answer: 'Often yes, especially with a clear plan for internet options and commute needs for occasional in-person days.'
      }
    ]
  },
  {
    name: 'Inverness',
    slug: 'inverness',
    shortDescription: 'Historic downtown energy with trails, lakes, and practical daily convenience.',
    vibe: 'Civic core feel with a steady small-city rhythm.',
    heroImage: 'invernessHero',
    galleryImages: ['invernessGallery1', 'invernessGallery2'],
    tags: ['Established neighborhoods', 'Low-traffic', 'Convenience-focused'],
    idealFor: ['Buyers who want a stronger town center identity', 'Households balancing recreation and day-to-day convenience'],
    notIdealFor: ['People seeking high-rise urban living', 'Buyers wanting only brand-new subdivisions'],
    housingNotes:
      'You will find established neighborhoods, lake-adjacent homes, and select new-build opportunities in surrounding areas. Many homes are in mature streetscapes with larger trees.',
    priceRangeDisclaimer:
      'General guidance only: many listings are often seen from the low-$200s to $500k+, depending on condition, lot size, and location. This is not live pricing data.',
    commuteNotes:
      'Inverness connects well to Lecanto, Hernando, and Crystal River via major local routes, making cross-county errands and services straightforward.',
    dailyLife:
      'Daily life blends courthouse-square activity, local events, and access to lake and trail systems. It feels more rooted and civic than purely suburban.',
    amenities: ['Historic downtown district', 'Withlacoochee trail access', 'Lake and park recreation options'],
    schoolsNotes:
      'School options vary by zone and program availability. Families should confirm district boundaries and current assignment details directly with Citrus County Schools.',
    moveClearlyTake:
      'Inverness works well if you want a community with identity and routine convenience. It is less ideal if your top priority is only newly built master-planned housing.',
    faq: [
      {
        question: 'What type of buyer activity is common in Inverness?',
        answer: 'Buyer activity is mixed, with demand from households prioritizing downtown access, trail connectivity, and established neighborhoods.'
      },
      {
        question: 'How walkable is downtown Inverness?',
        answer: 'The downtown core is more walkable than most surrounding residential pockets, especially around events and local dining.'
      },
      {
        question: 'Are there homes near water in Inverness?',
        answer: 'Yes. Lake-oriented options exist, though inventory and pricing vary by exact location and access.'
      },
      {
        question: 'What does competition look like for well-updated homes?',
        answer: 'Move-in-ready homes can attract faster interest, so preparation on financing and inspection strategy is useful.'
      },
      {
        question: 'Should sellers invest in major remodels before listing?',
        answer: 'Not always. Strategic repairs and presentation updates often deliver stronger return than large discretionary projects.'
      },
      {
        question: 'Is Inverness good for first-time buyers?',
        answer: 'It can be, especially for buyers who want established neighborhoods and access to daily services.'
      }
    ]
  },
  {
    name: 'Homosassa',
    slug: 'homosassa',
    shortDescription: 'River and Gulf access with a laid-back outdoor lifestyle.',
    vibe: 'Water-oriented and relaxed with strong local character.',
    heroImage: 'homosassaHero',
    galleryImages: ['homosassaGallery1', 'homosassaGallery2'],
    tags: ['Waterfront', 'Low-traffic', 'Established neighborhoods'],
    idealFor: ['Boating-focused buyers', 'Households that prioritize nature and slower pacing'],
    notIdealFor: ['Buyers who want dense retail corridors nearby', 'People who prefer highly uniform subdivisions'],
    housingNotes:
      'Housing includes waterfront homes, fish-camp style properties, inland neighborhoods, and select newer construction in nearby pockets.',
    priceRangeDisclaimer:
      'General guidance only: typical ranges often span from the mid-$200s into the $600k+ range, with waterfront and lot characteristics driving significant variation. This is not live pricing data.',
    commuteNotes:
      'US-19 provides north-south travel for errands and services. Expect a more destination-based commute pattern than compact city living.',
    dailyLife:
      'Residents often center routines around water, outdoor recreation, and neighborhood relationships. Activity patterns can feel more seasonal near tourism zones.',
    amenities: ['Homosassa River access points', 'Boating and fishing services', 'Local seafood and small-business dining'],
    schoolsNotes:
      'School options are served through Citrus County and nearby zones depending on address. Verify current attendance lines and transportation with official district sources.',
    moveClearlyTake:
      'Homosassa is a great fit when water lifestyle is non-negotiable. If you need quick access to large retail clusters every day, compare inland alternatives first.',
    faq: [
      {
        question: 'Is flood planning important in Homosassa?',
        answer: 'Yes. Elevation, flood zone, and insurance planning are major parts of smart due diligence in many locations.'
      },
      {
        question: 'Are there non-waterfront homes available?',
        answer: 'Yes. Buyers can find inland options that reduce water-specific maintenance and insurance complexity.'
      },
      {
        question: 'How does seasonal traffic affect daily life?',
        answer: 'Some areas see more tourism movement in peak seasons, though many residential zones remain relatively calm.'
      },
      {
        question: 'What matters most when pricing a waterfront home for sale?',
        answer: 'Access quality, condition, seawall or dock factors, and realistic buyer expectations are key.'
      },
      {
        question: 'Can first-time buyers succeed in Homosassa?',
        answer: 'Yes, especially with a clear financing plan and property-specific inspection strategy.'
      },
      {
        question: 'Do I need special inspections near water?',
        answer: 'In many cases, yes. Buyers often evaluate roof, moisture, septic or sewer details, and insurance-sensitive systems carefully.'
      }
    ]
  },
  {
    name: 'Lecanto',
    slug: 'lecanto',
    shortDescription: 'Central location with practical commutes and balanced neighborhood options.',
    vibe: 'Convenient and steady with a suburban-residential feel.',
    heroImage: 'lecantoHero',
    galleryImages: ['lecantoGallery1', 'lecantoGallery2'],
    tags: ['Convenience-focused', 'Low-traffic', 'New construction'],
    idealFor: ['Households that need central access across Citrus County', 'Buyers who want a mix of established and newer homes'],
    notIdealFor: ['People seeking a waterfront-first lifestyle', 'Buyers who want highly walkable downtown blocks'],
    housingNotes:
      'Lecanto offers established subdivisions, newer homes in select areas, and varied lot sizes. Housing style can shift significantly by neighborhood pocket.',
    priceRangeDisclaimer:
      'General guidance only: many opportunities are commonly seen from the mid-$200s to $550k+, depending on age, condition, and lot characteristics. This is not live pricing data.',
    commuteNotes:
      'Lecanto sits near major east-west and north-south routes, which makes access to schools, healthcare, and shopping centers efficient for many households.',
    dailyLife:
      'Daily patterns are convenience-driven. Residents often choose Lecanto for reduced travel friction between work, school, appointments, and errands.',
    amenities: ['Central healthcare access', 'Nearby shopping corridors', 'Parks and recreation within short drives'],
    schoolsNotes:
      'This area is often compared for multiple school pathways. Always verify district boundaries, magnet options, and enrollment timing directly.',
    moveClearlyTake:
      'Lecanto is one of the easiest places to choose if your priority is logistics and convenience. It is less compelling for buyers looking for a distinct waterfront or historic-core identity.',
    faq: [
      {
        question: 'Is Lecanto mainly chosen for school assignment planning?',
        answer: 'No. It serves a broad range of owner-occupants who prioritize central access, services, and everyday convenience.'
      },
      {
        question: 'Can buyers find newer construction in Lecanto?',
        answer: 'Yes, in select pockets. Inventory changes over time, so neighborhood-level review is important.'
      },
      {
        question: 'How competitive are move-in-ready homes?',
        answer: 'Well-prepared homes can move quickly, especially when location and condition are both strong.'
      },
      {
        question: 'What should sellers prioritize before listing?',
        answer: 'Clean presentation, repair of obvious defects, and pricing that matches current buyer alternatives.'
      },
      {
        question: 'Is HOA living common in Lecanto?',
        answer: 'It varies by subdivision. Buyers should confirm dues, rules, and reserve health before committing.'
      },
      {
        question: 'How much lot variety exists in Lecanto?',
        answer: 'There is meaningful variation from compact neighborhood lots to larger parcels depending on area.'
      }
    ]
  },
  {
    name: 'Hernando',
    slug: 'hernando',
    shortDescription: 'Lower-density living with room to spread out and easy county access.',
    vibe: 'Rural-leaning and quiet with practical connectivity.',
    heroImage: 'hernandoHero',
    galleryImages: ['hernandoGallery1', 'hernandoGallery2'],
    tags: ['Rural', 'Low-traffic', 'Large lots'],
    idealFor: ['Buyers who want more land or privacy', 'Households comfortable with destination driving for errands'],
    notIdealFor: ['People who want walkable retail nearby', 'Buyers who need dense neighborhood amenities'],
    housingNotes:
      'You can find homes on larger lots, established neighborhoods, and properties with added space for hobbies, storage, or outdoor projects.',
    priceRangeDisclaimer:
      'General guidance only: many homes are often seen from the low-$200s through the $500k+ range, with lot size and updates playing major roles. This is not live pricing data.',
    commuteNotes:
      'Hernando provides good access to Inverness and Lecanto for services. Daily life usually assumes driving rather than walkability.',
    dailyLife:
      'Life here tends to be quieter with more personal space. Buyers often choose Hernando for breathing room and lower neighborhood density.',
    amenities: ['Lakes and nature access nearby', 'Larger-lot residential options', 'Regional convenience within a moderate drive'],
    schoolsNotes:
      'School planning depends on exact property location and district assignment. Confirm routes and current placement rules directly with official sources.',
    moveClearlyTake:
      'Hernando is a strong fit if space and calm are core priorities. It may feel less convenient for buyers who want frequent walk-to amenities.',
    faq: [
      {
        question: 'Are larger lots common in Hernando?',
        answer: 'Yes, many buyers choose this area specifically for extra land and lower-density surroundings.'
      },
      {
        question: 'Does Hernando have newer homes too?',
        answer: 'Yes. Alongside established housing, newer construction appears in selected sections.'
      },
      {
        question: 'What should buyers verify when purchasing on larger parcels?',
        answer: 'Utility setup, drainage patterns, zoning considerations, and maintenance expectations are important checks.'
      },
      {
        question: 'Is Hernando suitable for lower-maintenance ownership goals?',
        answer: 'It can be, especially for owners who want to simplify interior space while keeping yard flexibility.'
      },
      {
        question: 'Can sellers market to both local and relocating buyers?',
        answer: 'Yes. Clear messaging around space, condition, and commute expectations helps both audiences compare fit.'
      },
      {
        question: 'How does insurance vary in this area?',
        answer: 'Costs can differ by home age, roof condition, and property specifics. Early insurance quotes are useful.'
      }
    ]
  },
  {
    name: 'Citrus Springs',
    slug: 'citrus-springs',
    shortDescription: 'Value-focused neighborhoods with ongoing new-build activity.',
    vibe: 'Practical and growth-oriented with straightforward residential patterns.',
    heroImage: 'citrusSpringsHero',
    galleryImages: ['citrusSpringsGallery1', 'citrusSpringsGallery2'],
    tags: ['Convenience-focused', 'New construction', 'Low-traffic'],
    idealFor: ['First-time buyers seeking monthly payment flexibility', 'Buyers comparing resale and newer construction options'],
    notIdealFor: ['People who want a waterfront setting', 'Buyers focused on historic downtown character'],
    housingNotes:
      'Citrus Springs includes many single-family neighborhoods with both established homes and active new-construction delivery in selected streets and sections.',
    priceRangeDisclaimer:
      'General guidance only: homes are often seen from the low-$200s into the $400k range depending on size, finishes, and build year. This is not live pricing data.',
    commuteNotes:
      'Access to Dunnellon, Lecanto, and nearby service corridors is generally manageable by car, with travel times varying by destination and traffic period.',
    dailyLife:
      'This area is often chosen for affordability and residential simplicity. Day-to-day life is typically neighborhood-focused and car-dependent.',
    amenities: ['Neighborhood parks and green spaces', 'Growing inventory of newer homes', 'Convenient drives to shopping and services'],
    schoolsNotes:
      'Buyers should confirm district assignments and transport routes for each address, as boundaries and program options can change over time.',
    moveClearlyTake:
      'Citrus Springs is one of the clearest value plays in the county. It works best when your priorities are budget control and practical home ownership.',
    faq: [
      {
        question: 'Is Citrus Springs mostly entry-level housing?',
        answer: 'It has many value-focused opportunities, but there are also larger and upgraded homes in multiple price bands.'
      },
      {
        question: 'How active is new construction here?',
        answer: 'New builds are a meaningful part of current inventory in several sections of the community.'
      },
      {
        question: 'Do buyers need to plan for commuting by car?',
        answer: 'Yes. Most daily activities and errands are easier with personal transportation.'
      },
      {
        question: 'Are inspections still important on newer homes?',
        answer: 'Yes. Independent inspections help confirm workmanship and identify issues before closing.'
      },
      {
        question: 'Can sellers stand out in a value-driven market?',
        answer: 'Yes. Clean presentation, realistic pricing, and clear condition disclosures create trust quickly.'
      },
      {
        question: 'Is Citrus Springs a good option for relocating buyers?',
        answer: 'It often is, especially for buyers prioritizing affordability and simple neighborhood layouts.'
      }
    ]
  },
  {
    name: 'Beverly Hills',
    slug: 'beverly-hills',
    shortDescription: 'Established neighborhoods with approachable pricing and everyday convenience.',
    vibe: 'Steady and familiar with mature residential character.',
    heroImage: 'beverlyHillsHero',
    galleryImages: ['beverlyHillsGallery1', 'beverlyHillsGallery2'],
    tags: ['Established neighborhoods', 'Low-traffic', 'Convenience-focused'],
    idealFor: ['Downsizers wanting practical ownership costs', 'Buyers who prefer mature neighborhoods over brand-new master plans'],
    notIdealFor: ['People wanting strong nightlife density', 'Buyers who only want newly constructed homes'],
    housingNotes:
      'The housing stock includes many established single-story homes, renovated options, and select opportunities for buyers prioritizing functional layouts.',
    priceRangeDisclaimer:
      'General guidance only: many homes are often seen from the high-$100s through the $400k range based on condition, updates, and location. This is not live pricing data.',
    commuteNotes:
      'Beverly Hills offers practical access to Lecanto and Inverness service areas, making healthcare, shopping, and daily errands manageable by car.',
    dailyLife:
      'Residents often describe the area as calm and predictable, with a focus on neighborhood routines rather than destination entertainment.',
    amenities: ['Established residential streets', 'Nearby shopping and services', 'Access to parks and local recreation'],
    schoolsNotes:
      'Education pathways should be reviewed case by case through current district resources, with attention to assignment zones and program availability.',
    moveClearlyTake:
      'Beverly Hills is a dependable option for buyers who value stable neighborhoods and practical pricing. It may feel too quiet for households seeking constant activity.',
    faq: [
      {
        question: 'Is Beverly Hills limited to one buyer profile?',
        answer: 'No. The area draws a broad mix of owner-occupants, especially buyers who prefer established neighborhoods and practical pricing.'
      },
      {
        question: 'Are most homes older in this area?',
        answer: 'Many homes are established, but updated properties and refreshed interiors are common.'
      },
      {
        question: 'What should buyers check on older homes?',
        answer: 'Roof age, plumbing updates, electrical condition, and insurance readiness are key considerations.'
      },
      {
        question: 'How should sellers price in established neighborhoods?',
        answer: 'Pricing should match actual condition and recent comparable outcomes, not aspirational list targets.'
      },
      {
        question: 'Can buyers find low-maintenance options here?',
        answer: 'Yes. Many homes have straightforward layouts and manageable lot sizes that appeal to low-maintenance goals.'
      },
      {
        question: 'Does Beverly Hills offer quick access to healthcare?',
        answer: 'It has practical access to major care corridors in the county, though exact travel time depends on address.'
      }
    ]
  },
  {
    name: 'Dunnellon',
    slug: 'dunnellon',
    shortDescription: 'River lifestyle, small-town history, and value options across multiple neighborhoods.',
    vibe: 'Outdoor-first with local character and a practical pace.',
    heroImage: 'dunnellonHero',
    galleryImages: ['dunnellonGallery1', 'dunnellonGallery2'],
    tags: ['Waterfront', 'Rural', 'Established neighborhoods'],
    idealFor: ['Buyers who want river recreation integrated into daily life', 'Households seeking value with access to surrounding regions'],
    notIdealFor: ['People who need dense urban amenities every day', 'Buyers preferring fully uniform suburban planning'],
    housingNotes:
      'Dunnellon includes downtown-adjacent streets, river-oriented pockets, and broader suburban sections with varied age and style of homes.',
    priceRangeDisclaimer:
      'General guidance only: many homes are often seen from the low-$200s to $500k+, with premium pricing for river access and updated condition. This is not live pricing data.',
    commuteNotes:
      'The community supports travel to Citrus and Marion County destinations, making it workable for buyers with regional routines.',
    dailyLife:
      'Local life tends to center on springs, river activity, and small-town businesses. The pace is generally calmer than larger metro zones.',
    amenities: ['Rainbow River and nearby springs', 'Historic downtown district', 'Regional road access to nearby counties'],
    schoolsNotes:
      'Buyers should verify current school zoning and transportation options with district resources. Program availability can vary by grade and location.',
    moveClearlyTake:
      'Dunnellon is a strong option when you want outdoor lifestyle and attainable ownership in one place. It is less suitable for buyers needing dense retail within minutes.',
    faq: [
      {
        question: 'Is Dunnellon a good fit for full-time residents?',
        answer: 'Yes. Many households choose Dunnellon for year-round living and appreciate its pace and river access.'
      },
      {
        question: 'Does Dunnellon offer entry-level price points?',
        answer: 'It often does, especially when compared with higher-cost waterfront markets in Florida.'
      },
      {
        question: 'Are homes near the river more expensive?',
        answer: 'Typically yes. Direct water access and location quality can increase both list price and ownership costs.'
      },
      {
        question: 'What should buyers know about inspections here?',
        answer: 'As with most Florida markets, roof condition, HVAC age, and moisture management are important early checks.'
      },
      {
        question: 'How can sellers prepare for serious buyers?',
        answer: 'Focus on clear disclosures, clean presentation, and pricing that aligns with nearby competing inventory.'
      },
      {
        question: 'Is Dunnellon only a recreation market?',
        answer: 'No. Recreation is central, but many buyers choose it for affordability and regional access as well.'
      }
    ]
  }
];

export function getCommunityBySlug(slug: string): Community | undefined {
  return communities.find((community) => community.slug === slug);
}
