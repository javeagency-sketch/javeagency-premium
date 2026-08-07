import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { TrustMetrics } from "@/components/trust-metrics";
import { AboutTeaser } from "@/components/about-teaser";
import { WhatWeBuild } from "@/components/what-we-build";
import { Industries } from "@/components/industries";
import { Process } from "@/components/process";
import { SelectedWork } from "@/components/selected-work";
import { GrowthStack } from "@/components/growth-stack";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { siteUrl } from "@/lib/content";

const seoTitle = "Javé Agency | Diseño Web, SEO y Marketing Digital en Sullivan County, NY";
const description =
  "Sitios web premium, SEO local, branding y marketing digital impulsado por IA para negocios en Monticello, Liberty, Wurtsboro, Bloomingburg, Rock Hill y Sullivan County, NY.";

export const metadata: Metadata = {
  title: seoTitle,
  description,
  alternates: {
    canonical: "/es",
    languages: { en: `${siteUrl}/`, es: `${siteUrl}/es` },
  },
  openGraph: {
    type: "website",
    title: seoTitle,
    description,
    url: "/es",
    locale: "es_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Javé Agency" }],
  },
  twitter: { card: "summary_large_image", title: seoTitle, description, images: ["/og-image.png"] },
};

export default function HomeEs() {
  return (
    <>
      <Hero locale="es" />
      <TrustMetrics locale="es" />
      <AboutTeaser locale="es" />
      <WhatWeBuild locale="es" />
      <Industries locale="es" />
      <Process locale="es" />
      <SelectedWork locale="es" />
      <GrowthStack locale="es" />
      <Faq locale="es" />
      <FinalCta locale="es" />
    </>
  );
}
