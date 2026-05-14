/**
 * lib/rateLimit.js
 *
 * Lightweight in-memory IP rate limiter.
 * Works for single-instance Node.js / Vercel serverless deployments.
 *
 * For multi-instance / high-traffic production, replace the store
 * with @upstash/ratelimit + Redis:
 *   npm install @upstash/ratelimit @upstash/redis
 *
 * USAGE:
 *   import { rateLimit } from '@/lib/rateLimit';
 *
 *   const { allowed, retryAfter } = rateLimit(ip);
 *   if (!allowed) return 429;
 */

/** @type {Map<string, { count: number; resetAt: number }>} */
const store = new Map();

const MAX_REQUESTS  = 5;          // requests allowed per window
const WINDOW_MS     = 15 * 60 * 1000; // 15 minutes

/**
 * Check whether a given IP is within the rate limit.
 * @param {string} ip
 * @returns {{ allowed: boolean; retryAfter: number }}
 *   retryAfter — seconds until the window resets (0 when allowed)
 */
export function rateLimit(ip) {
  const now = Date.now();

  // Prune stale entries to prevent unbounded memory growth
  if (store.size > 10_000) {
    for (const [key, entry] of store) {
      if (entry.resetAt <= now) store.delete(key);
    }
  }

  const entry = store.get(ip);

  if (!entry || entry.resetAt <= now) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }

  if (entry.count >= MAX_REQUESTS) {
    const retryAfter = Math.ceil((entry.resetAt - now) / 1000);
    return { allowed: false, retryAfter };
  }

  entry.count += 1;
  return { allowed: true, retryAfter: 0 };
}
