import { IdxProvider, Listing, ListingSearchFilters } from '@/lib/idx/types';
import { mockListings } from '@/lib/idx/mock-data';
import { isIdxBrokerApiConfigured } from '@/lib/idx/config';

const IDXBROKER_API_BASE_URL = process.env.IDXBROKER_API_BASE_URL || 'https://api.idxbroker.com';
const IDXBROKER_SEARCH_PATH = process.env.IDXBROKER_API_SEARCH_PATH || '/clients/search';
const IDXBROKER_FEATURED_PATH = process.env.IDXBROKER_API_FEATURED_PATH || '/clients/featured';
const IDXBROKER_LISTING_PATH_TEMPLATE = process.env.IDXBROKER_API_LISTING_PATH_TEMPLATE || '/clients/listing/{id}';
const IDXBROKER_OUTPUT_TYPE = process.env.IDXBROKER_OUTPUT_TYPE || 'json';
const IDXBROKER_API_VERSION = process.env.IDXBROKER_API_VERSION;
const IDXBROKER_ANCILLARY_KEY = process.env.IDXBROKER_ANCILLARY_KEY;

function applyListingUrlTemplate(listing: Listing): Listing {
  const template = process.env.NEXT_PUBLIC_IDXBROKER_LISTING_URL_TEMPLATE;
  if (!template || !template.includes('{id}')) return listing;

  return {
    ...listing,
    externalUrl: template.replace('{id}', encodeURIComponent(listing.id))
  };
}

function parseNumber(value: unknown): number {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value !== 'string') return 0;
  const cleaned = value.replace(/[^0-9.]/g, '');
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : 0;
}

function parseText(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function coerceImages(payload: Record<string, unknown>): string[] {
  const candidates = [
    payload.images,
    payload.image,
    payload.imageUrl,
    payload.imageURL,
    payload.primaryPhotoUrl,
    payload.primaryPhotoURL
  ];

  for (const value of candidates) {
    if (Array.isArray(value)) {
      const urls = value.filter((entry): entry is string => typeof entry === 'string' && entry.length > 0);
      if (urls.length > 0) return urls;
    }

    if (typeof value === 'string' && value.length > 0) {
      if (value.includes(',')) {
        const urls = value
          .split(',')
          .map((item) => item.trim())
          .filter(Boolean);
        if (urls.length > 0) return urls;
      }

      return [value];
    }
  }

  return ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80'];
}

function normalizeRows(payload: unknown): Array<Record<string, unknown>> {
  if (Array.isArray(payload)) {
    return payload.filter((entry): entry is Record<string, unknown> => typeof entry === 'object' && entry !== null);
  }

  if (!payload || typeof payload !== 'object') return [];
  const objectPayload = payload as Record<string, unknown>;

  if (Array.isArray(objectPayload.data)) {
    return objectPayload.data.filter(
      (entry): entry is Record<string, unknown> => typeof entry === 'object' && entry !== null
    );
  }

  for (const value of Object.values(objectPayload)) {
    if (Array.isArray(value)) {
      const rows = value.filter((entry): entry is Record<string, unknown> => typeof entry === 'object' && entry !== null);
      if (rows.length > 0) return rows;
    }
  }

  const keyedRows = Object.values(objectPayload).filter(
    (value): value is Record<string, unknown> => typeof value === 'object' && value !== null && !Array.isArray(value)
  );
  return keyedRows;
}

function listingFromRow(row: Record<string, unknown>): Listing | null {
  const id = parseText(
    row.listingID || row.listingId || row.idxID || row.idxId || row.mlsID || row.mlsId || row.id || row.address
  );
  if (!id) return null;

  const address = parseText(row.address || row.streetAddress || row.fullAddress || row.addressFull);
  const city = parseText(row.city || row.cityName);
  const state = parseText(row.state || row.stateOrProvince);
  const zip = parseText(row.zip || row.zipCode || row.postalCode);
  const beds = parseNumber(row.bedrooms || row.beds || row.totalBedrooms);
  const baths = parseNumber(row.totalBaths || row.baths || row.fullBaths);
  const sqft = parseNumber(row.sqft || row.sqFt || row.improvedSqFt);
  const price = parseNumber(row.price || row.listPrice || row.askingPrice);
  const description = parseText(row.remarks || row.description || row.publicRemarks);
  const lat = parseNumber(row.latitude || row.lat);
  const lng = parseNumber(row.longitude || row.lng);
  const detailsUrl = parseText(row.detailsURL || row.detailsUrl || row.url);
  const community = parseText(row.community || row.subdivision || city).toLowerCase().replace(/\s+/g, '-');

  const listing: Listing = {
    id,
    address: address || 'Listing Address',
    city: city || 'Unknown',
    state: state || 'FL',
    zip: zip || '',
    price,
    beds,
    baths,
    sqft,
    description,
    images: coerceImages(row),
    community: community || 'florida',
    lat: Number.isFinite(lat) && lat !== 0 ? lat : undefined,
    lng: Number.isFinite(lng) && lng !== 0 ? lng : undefined,
    externalUrl: detailsUrl || undefined
  };

  return applyListingUrlTemplate(listing);
}

function rowsToListings(rows: Array<Record<string, unknown>>): Listing[] {
  const deduped = new Map<string, Listing>();

  for (const row of rows) {
    const listing = listingFromRow(row);
    if (!listing) continue;
    if (!deduped.has(listing.id)) deduped.set(listing.id, listing);
  }

  return Array.from(deduped.values());
}

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

async function fetchIdxBrokerRows(path: string, filters?: ListingSearchFilters) {
  const apiKey = process.env.IDXBROKER_API_KEY;
  if (!apiKey) throw new Error('IDXBROKER_API_KEY is not configured.');

  const url = new URL(path, IDXBROKER_API_BASE_URL);

  if (filters) {
    if (filters.city) url.searchParams.set('city', filters.city);
    if (filters.community) url.searchParams.set('community', filters.community);
    if (filters.minPrice) url.searchParams.set('minPrice', String(filters.minPrice));
    if (filters.maxPrice) url.searchParams.set('maxPrice', String(filters.maxPrice));
    if (filters.beds) url.searchParams.set('beds', String(filters.beds));
    if (filters.baths) url.searchParams.set('baths', String(filters.baths));
  }

  const response = await fetch(url, {
    headers: {
      accesskey: apiKey,
      outputtype: IDXBROKER_OUTPUT_TYPE,
      ...(IDXBROKER_API_VERSION ? { apiversion: IDXBROKER_API_VERSION } : {}),
      ...(IDXBROKER_ANCILLARY_KEY ? { ancillarykey: IDXBROKER_ANCILLARY_KEY } : {}),
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json'
    },
    next: { revalidate: 300, tags: ['idx'] }
  });

  if (!response.ok) {
    throw new Error(`IDX Broker API request failed (${response.status}) for ${url.pathname}`);
  }

  const payload = await response.json();
  return normalizeRows(payload);
}

class MockIdxProvider implements IdxProvider {
  async searchListings(filters: ListingSearchFilters): Promise<Listing[]> {
    return mockListings
      .filter((listing) => {
        if (filters.city && listing.city.toLowerCase() !== filters.city.toLowerCase()) return false;
        if (filters.community && listing.community !== filters.community) return false;
        if (filters.minPrice && listing.price < filters.minPrice) return false;
        if (filters.maxPrice && listing.price > filters.maxPrice) return false;
        if (filters.beds && listing.beds < filters.beds) return false;
        if (filters.baths && listing.baths < filters.baths) return false;
        return true;
      })
      .map(applyListingUrlTemplate);
  }

  async getListingById(id: string): Promise<Listing | null> {
    const listing = mockListings.find((item) => item.id === id);
    return listing ? applyListingUrlTemplate(listing) : null;
  }

  async getFeaturedListings(): Promise<Listing[]> {
    return mockListings.filter((listing) => listing.featured).slice(0, 3).map(applyListingUrlTemplate);
  }
}

class IdxBrokerProvider implements IdxProvider {
  async searchListings(filters: ListingSearchFilters): Promise<Listing[]> {
    try {
      const primaryRows = await fetchIdxBrokerRows(IDXBROKER_SEARCH_PATH, filters);
      let listings = rowsToListings(primaryRows);

      // Retry without query filters for endpoints that do not support these parameters.
      if (listings.length === 0 && Object.keys(filters).length > 0) {
        const retryRows = await fetchIdxBrokerRows(IDXBROKER_SEARCH_PATH);
        listings = rowsToListings(retryRows);
      }

      // Fallback to featured feed when search endpoint is empty or account-restricted.
      if (listings.length === 0 && IDXBROKER_SEARCH_PATH !== IDXBROKER_FEATURED_PATH) {
        const fallbackRows = await fetchIdxBrokerRows(IDXBROKER_FEATURED_PATH);
        listings = rowsToListings(fallbackRows);
      }

      return applyLocalFilters(listings, filters);
    } catch (error) {
      console.error('IDX Broker searchListings error:', error);
      return [];
    }
  }

  async getListingById(id: string): Promise<Listing | null> {
    try {
      const path = IDXBROKER_LISTING_PATH_TEMPLATE.replace('{id}', encodeURIComponent(id));
      const rows = await fetchIdxBrokerRows(path);
      const listing = rows.map(listingFromRow).find(Boolean);
      return listing || null;
    } catch (error) {
      console.error('IDX Broker getListingById error:', error);
      return null;
    }
  }

  async getFeaturedListings(): Promise<Listing[]> {
    try {
      const primaryRows = await fetchIdxBrokerRows(IDXBROKER_FEATURED_PATH);
      const primaryListings = rowsToListings(primaryRows);
      if (primaryListings.length > 0) {
        return primaryListings.slice(0, 6);
      }

      // Some accounts do not return rows for "featured" endpoints. Fallback to general search feed.
      if (IDXBROKER_FEATURED_PATH !== IDXBROKER_SEARCH_PATH) {
        const fallbackRows = await fetchIdxBrokerRows(IDXBROKER_SEARCH_PATH);
        return rowsToListings(fallbackRows).slice(0, 6);
      }

      return [];
    } catch (error) {
      console.error('IDX Broker getFeaturedListings error:', error);
      return [];
    }
  }
}
const configuredProvider = isIdxBrokerApiConfigured() ? 'idxbroker' : 'mock';

export const idxProvider: IdxProvider =
  configuredProvider === 'idxbroker' ? new IdxBrokerProvider() : new MockIdxProvider();
