/**
 * lib/env.js
 *
 * Validates all required environment variables at startup.
 * Import this at the top of any API route or server module.
 * Throws immediately if a required variable is missing or empty,
 * so misconfiguration is loud and obvious — never silent.
 *
 * USAGE:
 *   import { validateEnv } from '@/lib/env';
 *   validateEnv();  // call inside your handler, not at module level
 */

const required = [
  'HUBSPOT_PORTAL_ID',
  'HUBSPOT_FORM_GUID',
  'HUBSPOT_API_KEY',
];

const optional = [
  'NEXT_PUBLIC_GA_MEASUREMENT_ID',
  'NEXT_PUBLIC_META_PIXEL_ID',
  'NEXT_PUBLIC_CALENDLY_URL',
];

/**
 * Throws if any required env var is missing.
 * Call this at the top of each API handler, not at module level,
 * so Next.js can build the route without the vars being present.
 */
export function validateEnv() {
  const missing = required.filter((key) => !process.env[key]?.trim());

  if (missing.length > 0) {
    throw new Error(
      `[env] Missing required environment variables:\n${missing.map((k) => `  • ${k}`).join('\n')}\n` +
      `Copy .env.example to .env.local and fill in the values.`
    );
  }

  // Warn (not throw) for optional vars in production
  if (process.env.NODE_ENV === 'production') {
    const missingOptional = optional.filter((key) => !process.env[key]?.trim());
    if (missingOptional.length > 0) {
      console.warn(
        `[env] Missing optional environment variables (analytics/tracking will be disabled):\n` +
        missingOptional.map((k) => `  • ${k}`).join('\n')
      );
    }
  }
}
