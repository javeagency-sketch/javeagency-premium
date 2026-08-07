"use client";

import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { localeFromPathname } from "@/lib/i18n";

/**
 * The embedded Sanity Studio at /studio needs the full viewport with no
 * site chrome around it. A single root layout can't opt a nested route out
 * of its parent's JSX, so this hides Navbar/Footer client-side instead of
 * moving every route into a route-group layout split.
 */
export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");
  const locale = localeFromPathname(pathname);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  if (isStudio) return <>{children}</>;

  return (
    <>
      <Navbar locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </>
  );
}
