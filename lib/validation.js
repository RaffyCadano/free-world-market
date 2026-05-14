/**
 * lib/validation.js
 *
 * Zod schemas for all API request bodies.
 * Import the schema you need and call .safeParse(body).
 *
 * USAGE:
 *   import { submitSchema, emailOnlySchema } from '@/lib/validation';
 *   const result = emailOnlySchema.safeParse(body);
 *   if (!result.success) { ... }
 */

import { z } from 'zod';

/* ── Shared email field ──────────────────────────────────── */
const emailField = z
  .string({ required_error: 'Email is required.' })
  .trim()
  .toLowerCase()
  .email('A valid email address is required.')
  .max(254, 'Email address is too long.');

/* ── CTA / final section form (email only) ───────────────── */
// Used by #cta-final — matches the handoff spec (email capture only)
export const emailOnlySchema = z.object({
  email: emailField,
});

/* ── Full contact / lead form ────────────────────────────── */
export const submitSchema = z.object({
  firstName: z
    .string({ required_error: 'First name is required.' })
    .trim()
    .min(1, 'First name is required.')
    .max(100, 'First name is too long.')
    .optional()
    .default(''),

  lastName: z
    .string({ required_error: 'Last name is required.' })
    .trim()
    .min(1, 'Last name is required.')
    .max(100, 'Last name is too long.')
    .optional()
    .default(''),

  email: emailField,

  company: z
    .string()
    .trim()
    .max(200, 'Company name is too long.')
    .optional()
    .default(''),

  message: z
    .string()
    .trim()
    .max(2000, 'Message is too long.')
    .optional()
    .default(''),
});

/**
 * Format the first Zod error into a user-friendly string.
 * @param {import('zod').ZodError} zodError
 * @returns {string}
 */
export function firstZodError(zodError) {
  return zodError.errors[0]?.message ?? 'Invalid request.';
}
