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

// The embedded Sanity Studio (/studio) needs its own, more permissive CSP —
// it loads its own inline styles/scripts and talks to the Sanity API and
// CDN. Next applies the last matching header for a given key, so this
// overrides cspHeader above only for /studio routes.
const studioCspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob: https://cdn.sanity.io;
  media-src 'self' https://cdn.sanity.io;
  font-src 'self' data:;
  connect-src 'self' https://*.api.sanity.io https://*.apicdn.sanity.io wss://*.api.sanity.io https://cdn.sanity.io;
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
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
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
      {
        source: "/studio/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Content-Security-Policy", value: studioCspHeader },
        ],
      },
    ];
  },
};

export default nextConfig;
