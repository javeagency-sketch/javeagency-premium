# Javé Agency

Marketing site for Javé Agency, built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Motion (Framer Motion). `../index.html` is the original single-file prototype, kept as a content/design reference.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script                 | Purpose                          |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start the dev server (Turbopack) |
| `npm run build`        | Production build                 |
| `npm run start`        | Serve the production build       |
| `npm run lint`         | ESLint                           |
| `npm run format`       | Format with Prettier             |
| `npm run format:check` | Check formatting without writing |
| `npm run type-check`   | `tsc --noEmit`                   |
| `npm run test:e2e`     | Playwright end-to-end tests      |
| `npm run audit`        | `npm audit`                      |

## Content

All copy, service/portfolio/FAQ data lives in [`lib/content.ts`](./lib/content.ts) — edit there rather than in components.

## Contact form

The contact form is handled by `app/api/contact/route.ts` via [Resend](https://resend.com): set `RESEND_API_KEY`, `CONTACT_EMAIL`, and `RESEND_FROM_EMAIL` in `.env.local`.

## Analytics

Set `NEXT_PUBLIC_GA_ID` to enable Google Analytics 4 via [`lib/analytics.ts`](./lib/analytics.ts).

## CI

`.github/workflows/ci.yml` runs format/lint/type-check/build/audit/Playwright on every push. Semgrep and Gitleaks steps are stubbed in but commented out — enable them once the repo is on GitHub.
