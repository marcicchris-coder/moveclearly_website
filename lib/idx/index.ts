import { idxProvider } from '@/lib/idx/provider';
import { ListingSearchFilters } from '@/lib/idx/types';

export async function searchListings(filters: ListingSearchFilters) {
  return idxProvider.searchListings(filters);
}

export async function getListingById(id: string) {
  return idxProvider.getListingById(id);
}

export async function getFeaturedListings() {
  return idxProvider.getFeaturedListings();
}
