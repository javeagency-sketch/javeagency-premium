import { createClient, type SanityClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = "2026-01-01";

/**
 * `null` when NEXT_PUBLIC_SANITY_PROJECT_ID isn't set — lets every query
 * helper in lib/sanity.queries.ts fall back to the site's static content
 * instead of throwing, so the app keeps building/running before the Sanity
 * project is connected.
 */
export const sanityClient: SanityClient | null = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === "production",
      perspective: "published",
      token: process.env.SANITY_API_READ_TOKEN,
    })
  : null;
