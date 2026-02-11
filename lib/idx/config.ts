export type IdxProviderMode = 'idxbroker' | 'mock';
export type IdxSearchMode = 'api' | 'hosted';

export function getIdxProviderMode(): IdxProviderMode {
  const value = (process.env.IDX_PROVIDER || 'idxbroker').toLowerCase();
  return value === 'mock' ? 'mock' : 'idxbroker';
}

export function isIdxBrokerApiConfigured() {
  return getIdxProviderMode() === 'idxbroker' && Boolean(process.env.IDXBROKER_API_KEY);
}

export function isUsingMockIdxData() {
  return !isIdxBrokerApiConfigured();
}

export function getIdxSearchMode(): IdxSearchMode {
  const value = (process.env.IDX_SEARCH_MODE || 'api').toLowerCase();
  return value === 'hosted' ? 'hosted' : 'api';
}

export function getIdxHostedSearchUrl() {
  const value = process.env.NEXT_PUBLIC_IDXBROKER_SEARCH_URL?.trim();
  return value ? value : '';
}

export function shouldUseHostedIdxSearch() {
  return getIdxSearchMode() === 'hosted' && Boolean(getIdxHostedSearchUrl());
}
