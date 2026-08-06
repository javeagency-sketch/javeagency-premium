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

export default function Home() {
  return (
    <>
      <Hero />
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
