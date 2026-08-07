import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/content";
import { services } from "@/lib/services";
import { industryLocationPages } from "@/lib/industry-locations";
import { templates } from "@/lib/templates";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/work", priority: 0.8, changeFrequency: "monthly" },
    { path: "/templates", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" },
    { path: "/es", priority: 1, changeFrequency: "weekly" },
    { path: "/es/sobre-nosotros", priority: 0.9, changeFrequency: "monthly" },
    { path: "/es/servicios", priority: 0.9, changeFrequency: "monthly" },
    { path: "/es/trabajos", priority: 0.8, changeFrequency: "monthly" },
    { path: "/es/templates", priority: 0.7, changeFrequency: "monthly" },
    { path: "/es/contacto", priority: 0.8, changeFrequency: "yearly" },
  ];

  const serviceRoutes = services.map((service) => ({
    path: `/services/${service.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const industryLocationRoutes = industryLocationPages.map((page) => ({
    path: `/services/${page.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const templateDetailRoutes = templates
    .filter((template) => template.detailSlug)
    .map((template) => ({
      path: `/templates/${template.detailSlug}`,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryLocationRoutes,
    ...templateDetailRoutes,
  ].map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
