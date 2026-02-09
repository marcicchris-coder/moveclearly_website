import { IdxProvider, Listing, ListingSearchFilters } from '@/lib/idx/types';
import { mockListings } from '@/lib/idx/mock-data';

class MockIdxProvider implements IdxProvider {
  async searchListings(filters: ListingSearchFilters): Promise<Listing[]> {
    return mockListings.filter((listing) => {
      if (filters.city && listing.city.toLowerCase() !== filters.city.toLowerCase()) return false;
      if (filters.community && listing.community !== filters.community) return false;
      if (filters.minPrice && listing.price < filters.minPrice) return false;
      if (filters.maxPrice && listing.price > filters.maxPrice) return false;
      if (filters.beds && listing.beds < filters.beds) return false;
      if (filters.baths && listing.baths < filters.baths) return false;
      return true;
    });
  }

  async getListingById(id: string): Promise<Listing | null> {
    return mockListings.find((listing) => listing.id === id) ?? null;
  }

  async getFeaturedListings(): Promise<Listing[]> {
    return mockListings.filter((listing) => listing.featured).slice(0, 3);
  }
}

export const idxProvider: IdxProvider = new MockIdxProvider();
