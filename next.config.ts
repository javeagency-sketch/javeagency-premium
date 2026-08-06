import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// No nonces: this site is fully statically prerendered, and nonce-based CSP
// would force every route into dynamic rendering. 'unsafe-inline' is the
// pragmatic tradeoff for a marketing/brochure site with no user-generated
// script content. Resend needs no browser-facing entry — it's only ever
// called from the server (app/api/contact/route.ts).
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ""} https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob: https://www.google-analytics.com;
  media-src 'self';
  font-src 'self' data:;
  connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com https://vercel.live;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, " ")
  .trim();

const orangeCountySlugs = [
  "construction",
  "landscaping",
  "roofing",
  "plumbing",
  "hvac",
  "electrician",
  "restaurant",
  "medical",
  "legal",
  "real-estate",
  "auto-repair",
  "fitness",
];

const nextConfig: NextConfig = {
  async redirects() {
    return orangeCountySlugs.map((industry) => ({
      source: `/services/${industry}-marketing-orange-county`,
      destination: `/services/${industry}-marketing-sullivan-county`,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
          },
          { key: "Content-Security-Policy", value: cspHeader },
        ],
      },
    ];
  },
};

export default nextConfig;
