import { listingProvider } from '@/lib/idx/provider';
import { ListingSearchFilters } from '@/lib/idx/types';

export async function searchListings(filters: ListingSearchFilters) {
  return listingProvider.searchListings(filters);
}

export async function getListingById(id: string) {
  return listingProvider.getListingById(id);
}

export async function getFeaturedListings() {
  return listingProvider.getFeaturedListings();
}
