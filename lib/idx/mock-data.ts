import { Listing } from '@/lib/idx/types';

export const mockListings: Listing[] = [
  {
    id: 'mc-1001',
    address: '1085 Riverbend Trail',
    city: 'Dunnellon',
    state: 'FL',
    zip: '34432',
    price: 389000,
    beds: 4,
    baths: 3,
    sqft: 2410,
    description: 'Light-filled home with open layout, screened lanai, and quick access to parks and trails.',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80'
    ],
    featured: true,
    community: 'dunnellon',
    lat: 29.048,
    lng: -82.4604
  },
  {
    id: 'mc-1002',
    address: '2248 Coastal Pine Ave',
    city: 'Crystal River',
    state: 'FL',
    zip: '34428',
    price: 515000,
    beds: 3,
    baths: 2,
    sqft: 2104,
    description: 'Modern coastal feel with updated kitchen and oversized backyard deck for entertaining.',
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80'
    ],
    featured: true,
    community: 'crystal-river',
    lat: 28.9025,
    lng: -82.5926
  },
  {
    id: 'mc-1003',
    address: '7815 Cypress Hollow Dr',
    city: 'Ocala',
    state: 'FL',
    zip: '34476',
    price: 449900,
    beds: 4,
    baths: 3,
    sqft: 2550,
    description: 'Flexible floor plan with dedicated office, energy-efficient features, and excellent storage.',
    images: [
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=80'
    ],
    featured: true,
    community: 'ocala',
    lat: 29.1872,
    lng: -82.1401
  },
  {
    id: 'mc-1004',
    address: '5151 Oak Hammock Lane',
    city: 'Inverness',
    state: 'FL',
    zip: '34452',
    price: 325000,
    beds: 3,
    baths: 2,
    sqft: 1820,
    description: 'Quiet neighborhood setting with mature trees, updated baths, and generous primary suite.',
    images: ['https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1400&q=80'],
    community: 'inverness',
    lat: 28.8356,
    lng: -82.3306
  },
  {
    id: 'mc-1005',
    address: '2310 Sandhill Ridge Rd',
    city: 'Lecanto',
    state: 'FL',
    zip: '34461',
    price: 410000,
    beds: 4,
    baths: 2,
    sqft: 2260,
    description: 'Single-story layout, split bedrooms, and polished outdoor living area.',
    images: ['https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=80'],
    community: 'lecanto',
    lat: 28.8522,
    lng: -82.4879
  },
  {
    id: 'mc-1006',
    address: '9021 Meadowbrook Way',
    city: 'Citrus Springs',
    state: 'FL',
    zip: '34434',
    price: 298000,
    beds: 3,
    baths: 2,
    sqft: 1685,
    description: 'Affordable move-in-ready option with open kitchen, new flooring, and fenced yard.',
    images: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=80'],
    community: 'citrus-springs',
    lat: 28.9936,
    lng: -82.4703
  }
];
