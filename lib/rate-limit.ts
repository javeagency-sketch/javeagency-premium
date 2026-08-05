const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;

/**
 * In-memory, per-IP sliding-window limiter. This only holds state for the
 * lifetime of a single serverless instance — on Vercel that means it's a
 * best-effort deterrent (each cold instance starts a fresh count), not a
 * hard global guarantee. Combined with the honeypot and Zod validation it's
 * enough to blunt basic scripted abuse without needing an external store.
 */
const hits = new Map<string, number[]>();

let lastSweep = Date.now();

function sweep(now: number) {
  if (now - lastSweep < WINDOW_MS) return;
  lastSweep = now;
  for (const [ip, timestamps] of hits) {
    const recent = timestamps.filter((t) => now - t < WINDOW_MS);
    if (recent.length === 0) hits.delete(ip);
    else hits.set(ip, recent);
  }
}

export function checkRateLimit(ip: string): { allowed: boolean; retryAfterSeconds: number } {
  const now = Date.now();
  sweep(now);

  const timestamps = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS) {
    const retryAfterMs = WINDOW_MS - (now - timestamps[0]);
    hits.set(ip, timestamps);
    return { allowed: false, retryAfterSeconds: Math.max(1, Math.ceil(retryAfterMs / 1000)) };
  }

  timestamps.push(now);
  hits.set(ip, timestamps);
  return { allowed: true, retryAfterSeconds: 0 };
}
