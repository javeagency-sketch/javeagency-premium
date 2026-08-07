export type Locale = "en" | "es";

/** Known EN <-> ES page pairs, used by the language switcher and hreflang tags. */
export const localeRouteMap: Record<string, string> = {
  "/": "/es",
  "/services": "/es/servicios",
  "/work": "/es/trabajos",
  "/about": "/es/sobre-nosotros",
  "/templates": "/es/templates",
  "/contact": "/es/contacto",
  "/es": "/",
  "/es/servicios": "/services",
  "/es/trabajos": "/work",
  "/es/sobre-nosotros": "/about",
  "/es/templates": "/templates",
  "/es/contacto": "/contact",
};

export function localeFromPathname(pathname: string | null): Locale {
  return pathname?.startsWith("/es") ? "es" : "en";
}

/** Best-effort alternate-locale URL for the language switcher; falls back to each locale's home. */
export function alternatePath(pathname: string | null, locale: Locale): string {
  if (!pathname) return locale === "es" ? "/" : "/es";
  return localeRouteMap[pathname] ?? (locale === "es" ? "/" : "/es");
}
