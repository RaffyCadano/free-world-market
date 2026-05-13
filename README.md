# Free World Market Landing Site

Premium conversion-focused marketing site built with Next.js (App Router).

## Tech Stack

- Next.js 16
- React 19
- Framer Motion
- CSS Modules + global CSS
- API Route for HubSpot form submissions

## Quick Start

1. Install dependencies:

```bash
npm install
```

1. Create an environment file:

```bash
copy .env.example .env.local
```

If you do not have `.env.example`, create `.env.local` manually using the variables in the Environment Variables section.

1. Run locally:

```bash
npm run dev
```

1. Open:

[http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Create production build
- `npm run start` - Run production build locally
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env.local` file in the project root.

### Server-only (required for lead submission)

- `HUBSPOT_PORTAL_ID`
- `HUBSPOT_FORM_GUID`

These are used by `POST /api/submit` in `app/api/submit/route.js`.

### Client/public (optional analytics)

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` (example format: `G-XXXXXXXX`)
- `NEXT_PUBLIC_META_PIXEL_ID` (numeric Pixel ID)

These are used by `app/components/Analytics.jsx`. If omitted or invalid, scripts are skipped safely.

## Route Map

- `/` - Home landing page
- `/approach` - Approach page
- `/services` - Services page
- `/pricing` - Pricing page
- `/problem` - Problem framing page
- `/api/submit` - Lead/contact submission endpoint

## Project Structure

```text
app/
  page.js                     # Home page
  layout.js                   # Root layout, fonts, global shell
  api/submit/route.js         # HubSpot submission endpoint
  components/                 # Shared UI (Navbar, Footer, Analytics, etc.)
  sections/                   # Home page section components
  approach/, services/, pricing/, problem/
lib/
  analytics.js                # Event tracking helpers
styles/
  globals.css
```

## Lead Submission Flow

1. Client submits form data.
2. Request is sent to `/api/submit`.
3. Server validates and sanitizes input.
4. Server forwards data to HubSpot Forms API.
5. API returns `success: true` or a safe error payload.

No HubSpot secret values are exposed to the browser.

## Deployment Notes

- Set all required environment variables in your hosting platform.
- Run `npm run build` during CI/CD.
- Validate that `/api/submit` works in production with real HubSpot IDs.

## Notes

- Calendly widget script is loaded globally via `app/components/Analytics.jsx`.
- Footer is rendered globally in `app/layout.js`.

## Developer TODO Checklist

Use this list to track requested improvements.

- [X] #1 Responsive design across all screen sizes (mobile, tablet, desktop, and large displays).
- [ ] #2 Update site title/branding text to:
  - XiXi Marketing & Sales
  - Free World Market Holdings
- [ ] #3 Improve/fix the home page hero results stats presentation for:
  - 3x - Average lead volume increase
  - 68% - Higher close rate after positioning
  - < 30d - Time to first qualified booking
  - $2.4M - Revenue generated for clients
- [ ] #4 Add scroll-triggered card animations across all pages (for both scrolling down and up).
- [ ] #5 On Problem page, shorten this copy:
  - Current: "Most premium businesses plateau because referrals are not a scalable system."
  - Replace with a shorter version.
- [ ] #6 On Pricing page, fix "Book Discovery Call" button sizing/typography (button size or font size).
