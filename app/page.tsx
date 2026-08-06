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
import { getSiteSettings } from "@/lib/sanity.queries";

export default async function Home() {
  const settings = await getSiteSettings();

  return (
    <>
      <Hero
        headline={settings?.heroHeading || undefined}
        subheadline={settings?.heroSubheading || undefined}
        primaryCtaText={settings?.primaryCtaText || undefined}
        secondaryCtaText={settings?.secondaryCtaText || undefined}
      />
      <TrustMetrics />
      <AboutTeaser />
      <WhatWeBuild />
      <Industries />
      <Process />
      <SelectedWork />
      <GrowthStack />
      <Faq />
      <FinalCta />
    </>
  );
}
