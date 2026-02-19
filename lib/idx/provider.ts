import { mockListings } from '@/lib/idx/mock-data';
import { Listing, ListingProvider, ListingSearchFilters } from '@/lib/idx/types';

function applyLocalFilters(listings: Listing[], filters: ListingSearchFilters): Listing[] {
  return listings.filter((listing) => {
    if (filters.city && listing.city.toLowerCase() !== filters.city.toLowerCase()) return false;
    if (filters.community && listing.community !== filters.community) return false;
    if (filters.minPrice && listing.price < filters.minPrice) return false;
    if (filters.maxPrice && listing.price > filters.maxPrice) return false;
    if (filters.beds && listing.beds < filters.beds) return false;
    if (filters.baths && listing.baths < filters.baths) return false;
    return true;
  });
}

class LocalListingProvider implements ListingProvider {
  async searchListings(filters: ListingSearchFilters): Promise<Listing[]> {
    return applyLocalFilters(mockListings, filters);
  }

  async getListingById(id: string): Promise<Listing | null> {
    const listing = mockListings.find((item) => item.id === id);
    return listing || null;
  }

  async getFeaturedListings(): Promise<Listing[]> {
    return mockListings.filter((listing) => listing.featured).slice(0, 6);
  }
}

export const listingProvider: ListingProvider = new LocalListingProvider();
