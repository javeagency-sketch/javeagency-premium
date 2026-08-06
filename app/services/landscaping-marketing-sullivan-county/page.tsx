import type { Metadata } from "next";
import { IndustryLocationPageContent } from "@/components/industry-location-page";
import { getIndustryLocationPage } from "@/lib/industry-locations";

const page = getIndustryLocationPage("landscaping-marketing-sullivan-county")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "/services/landscaping-marketing-sullivan-county" },
  openGraph: {
    title: `${page.metaTitle} — Javé Agency`,
    description: page.metaDescription,
    url: "/services/landscaping-marketing-sullivan-county",
  },
  twitter: { title: `${page.metaTitle} — Javé Agency`, description: page.metaDescription },
};

export default function LandscapingMarketingSullivanCountyPage() {
  return <IndustryLocationPageContent page={page} />;
}
