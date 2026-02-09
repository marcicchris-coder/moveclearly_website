const requests = new Map<string, number[]>();

const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 8;

export function isRateLimited(key: string) {
  const now = Date.now();
  const history = requests.get(key) ?? [];
  const recent = history.filter((timestamp) => now - timestamp < WINDOW_MS);

  recent.push(now);
  requests.set(key, recent);

  return recent.length > MAX_REQUESTS;
}
