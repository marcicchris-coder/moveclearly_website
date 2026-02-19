export interface Listing {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  description: string;
  images: string[];
  featured?: boolean;
  community: string;
  lat?: number;
  lng?: number;
  externalUrl?: string;
}

export interface ListingSearchFilters {
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  beds?: number;
  baths?: number;
  community?: string;
}

export interface ListingProvider {
  searchListings(filters: ListingSearchFilters): Promise<Listing[]>;
  getListingById(id: string): Promise<Listing | null>;
  getFeaturedListings(): Promise<Listing[]>;
}
