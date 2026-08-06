import { defineQuery } from "next-sanity";
import { sanityClient } from "@/lib/sanity.client";

const siteSettingsQuery = defineQuery(`*[_type == "siteSettings"][0]`);
const servicesQuery = defineQuery(`*[_type == "service"] | order(_createdAt asc)`);
const workProjectsQuery = defineQuery(
  `*[_type == "workProject"] | order(featured desc, _createdAt desc)`,
);
const teamMembersQuery = defineQuery(`*[_type == "teamMember"] | order(order asc)`);
const templatesQuery = defineQuery(`*[_type == "template"] | order(_createdAt asc)`);

export type SanitySiteSettings = {
  title?: string;
  heroHeading?: string;
  heroSubheading?: string;
  heroVideoUrl?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  seoTitle?: string;
  seoDescription?: string;
};

export type SanityImageRef = {
  asset?: { _ref: string; _type: string };
  [key: string]: unknown;
};

export type SanityService = {
  _id: string;
  title: string;
  slug: { current: string };
  category?: string;
  shortDescription?: string;
  fullDescription?: unknown[];
  seoTitle?: string;
  seoDescription?: string;
  featuredImage?: SanityImageRef;
};

export type SanityWorkProject = {
  _id: string;
  title: string;
  slug: { current: string };
  category?: string;
  shortDescription?: string;
  externalUrl?: string;
  coverImage?: SanityImageRef;
  galleryImages?: SanityImageRef[];
  featured?: boolean;
};

export type SanityTeamMember = {
  _id: string;
  name: string;
  role?: string;
  bio?: string;
  profileImage?: SanityImageRef;
  linkedinUrl?: string;
};

export type SanityTemplate = {
  _id: string;
  title: string;
  slug: { current: string };
  category?: string;
  shortDescription?: string;
  previewImages?: SanityImageRef[];
  requestEnabled?: boolean;
};

/**
 * Every helper below returns `null`/`[]` instead of throwing — Sanity may
 * not be configured yet (no project created), the dataset may be empty, or
 * the network call may fail. Callers fall back to the site's static content
 * in that case.
 */
async function safeFetch<T>(query: string, fallback: T): Promise<T> {
  if (!sanityClient) return fallback;
  try {
    const result = await sanityClient.fetch<T>(query);
    return result ?? fallback;
  } catch {
    return fallback;
  }
}

export function getSiteSettings() {
  return safeFetch<SanitySiteSettings | null>(siteSettingsQuery, null);
}

export function getServices() {
  return safeFetch<SanityService[]>(servicesQuery, []);
}

export function getWorkProjects() {
  return safeFetch<SanityWorkProject[]>(workProjectsQuery, []);
}

export function getTeamMembers() {
  return safeFetch<SanityTeamMember[]>(teamMembersQuery, []);
}

export function getTemplates() {
  return safeFetch<SanityTemplate[]>(templatesQuery, []);
}
