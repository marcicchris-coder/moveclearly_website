export interface SiteImage {
  url: string;
  alt: string;
  photographer?: string;
  source?: string;
}

export const imageMap: Record<string, SiteImage> = {
  homeHero: {
    url: 'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?auto=format&fit=crop&w=1600&q=80',
    alt: 'Aerial view of waterfront neighborhoods and tree-lined streets in coastal Florida',
    photographer: 'Lance Asper',
    source: 'Unsplash'
  },
  homeCommunities: {
    url: 'https://images.unsplash.com/photo-1613553421884-45f894eec5f5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Family walking through a sunny neighborhood park in Florida',
    photographer: 'Manny Becerra',
    source: 'Unsplash'
  },
  homeRoadmap: {
    url: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80',
    alt: 'Open notebook and house keys on a wooden table during a home planning session',
    photographer: 'Element5 Digital',
    source: 'Unsplash'
  },
  buyHero: {
    url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80',
    alt: 'Couple reviewing home details with a real estate guide in a bright living room',
    photographer: 'Jessica Bryant',
    source: 'Unsplash'
  },
  buyChecklist: {
    url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
    alt: 'Checklist document, calculator, and pen used for home budget planning',
    photographer: 'Scott Graham',
    source: 'Unsplash'
  },
  buyFaq: {
    url: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Suburban Florida home exterior with palm trees and clear sky',
    photographer: 'Breno Assis',
    source: 'Unsplash'
  },
  sellHero: {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    alt: 'Well-staged home exterior ready for listing photos in a sunny neighborhood',
    photographer: 'Francesca Tosolini',
    source: 'Unsplash'
  },
  sellPrep: {
    url: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80',
    alt: 'Clean and decluttered living room prepared for home showings',
    photographer: 'Sidekix Media',
    source: 'Unsplash'
  },
  sellOffers: {
    url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Person comparing written offers and notes at a desk',
    photographer: 'Maitree Rimthong',
    source: 'Unsplash'
  },
  communityHubHero: {
    url: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1600&q=80',
    alt: 'Florida sunset over a calm waterfront community with docks and homes',
    photographer: 'Luca Micheli',
    source: 'Unsplash'
  },
  crystalRiverHero: {
    url: 'https://images.unsplash.com/photo-1512938445855-d3e46b5b15a8?auto=format&fit=crop&w=1400&q=80',
    alt: 'Waterfront homes and boats along a spring-fed canal in Crystal River',
    photographer: 'Tom Barrett',
    source: 'Unsplash'
  },
  crystalRiverGallery1: {
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Kayaks near clear water and native vegetation on a quiet Florida waterway',
    photographer: 'Jeremy Bishop',
    source: 'Unsplash'
  },
  crystalRiverGallery2: {
    url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    alt: 'Boardwalk leading through preserved coastal habitat near the Gulf',
    photographer: 'Timon Studler',
    source: 'Unsplash'
  },
  invernessHero: {
    url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80',
    alt: 'Historic downtown street with storefronts and mature trees in Inverness',
    photographer: 'Jorge Fernandez',
    source: 'Unsplash'
  },
  invernessGallery1: {
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Cycling trail shaded by trees and morning light',
    photographer: 'Ales Krivec',
    source: 'Unsplash'
  },
  invernessGallery2: {
    url: 'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Small-town lakefront park with walking paths and benches',
    photographer: 'Abby Rurenko',
    source: 'Unsplash'
  },
  homosassaHero: {
    url: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1400&q=80',
    alt: 'Boats on a river channel surrounded by palms and mangroves in Homosassa',
    photographer: 'Margarita Ksenok',
    source: 'Unsplash'
  },
  homosassaGallery1: {
    url: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=1200&q=80',
    alt: 'Quiet dock and fishing boat on calm morning water',
    photographer: 'Sebastian Pena Lambarri',
    source: 'Unsplash'
  },
  homosassaGallery2: {
    url: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
    alt: 'Open gulf horizon with gentle waves and warm evening light',
    photographer: 'Jeremy Bishop',
    source: 'Unsplash'
  },
  lecantoHero: {
    url: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&w=1400&q=80',
    alt: 'Residential street with newer single-family homes and landscaped yards in Lecanto',
    photographer: 'Avi Werde',
    source: 'Unsplash'
  },
  lecantoGallery1: {
    url: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    alt: 'Neighborhood home with front porch and tidy landscaping',
    photographer: 'Bence Balla-Schottner',
    source: 'Unsplash'
  },
  lecantoGallery2: {
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern kitchen and dining space in a move-in ready home',
    photographer: 'R Architecture',
    source: 'Unsplash'
  },
  hernandoHero: {
    url: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1400&q=80',
    alt: 'Quiet rural road with oak trees and low-traffic neighborhood access in Hernando',
    photographer: 'Daniil Silantev',
    source: 'Unsplash'
  },
  hernandoGallery1: {
    url: 'https://images.unsplash.com/photo-1445262102387-5fbb30d2f0d7?auto=format&fit=crop&w=1200&q=80',
    alt: 'Wide lot with mature trees and open yard space',
    photographer: 'Jason Leung',
    source: 'Unsplash'
  },
  hernandoGallery2: {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80',
    alt: 'Peaceful lake view framed by cypress trees',
    photographer: 'Justin Wolff',
    source: 'Unsplash'
  },
  citrusSpringsHero: {
    url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1400&q=80',
    alt: 'Suburban neighborhood street with sidewalks and single-family homes in Citrus Springs',
    photographer: 'Robert Bye',
    source: 'Unsplash'
  },
  citrusSpringsGallery1: {
    url: 'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Front elevation of a value-focused single-family home with driveway',
    photographer: 'Brett Jordan',
    source: 'Unsplash'
  },
  citrusSpringsGallery2: {
    url: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80',
    alt: 'Local greenway path for walking and biking near residential areas',
    photographer: 'Arek Socha',
    source: 'Unsplash'
  },
  beverlyHillsHero: {
    url: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80',
    alt: 'Established neighborhood with ranch-style homes and mature trees in Beverly Hills Florida',
    photographer: 'Daniel Barnes',
    source: 'Unsplash'
  },
  beverlyHillsGallery1: {
    url: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sunlit front porch and landscaped entry on an established home',
    photographer: 'Aaron Huber',
    source: 'Unsplash'
  },
  beverlyHillsGallery2: {
    url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
    alt: 'Single-story home exterior with shaded front yard',
    photographer: 'Binyamin Mellish',
    source: 'Unsplash'
  },
  dunnellonHero: {
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80',
    alt: 'Clear spring water and lush shoreline reflecting Dunnellon outdoor lifestyle',
    photographer: 'Jeremy Bishop',
    source: 'Unsplash'
  },
  dunnellonGallery1: {
    url: 'https://images.unsplash.com/photo-1439130490301-25e322d88054?auto=format&fit=crop&w=1200&q=80',
    alt: 'People paddleboarding on calm river water in morning light',
    photographer: 'Benjamin Davies',
    source: 'Unsplash'
  },
  dunnellonGallery2: {
    url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80',
    alt: 'Scenic walking area with native Florida greenery and open sky',
    photographer: 'Luke Stackpoole',
    source: 'Unsplash'
  }
};
