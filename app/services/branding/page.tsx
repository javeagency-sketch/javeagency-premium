import type { Metadata } from "next";
import { ServicePageContent } from "@/components/service-page";
import { getServiceBySlug } from "@/lib/services";

const service = getServiceBySlug("branding")!;

const description =
  "Brand identity systems for businesses in the United States, Chile, and Colombia — logo, palette, typography, and guidelines built to hold up as you scale.";

export const metadata: Metadata = {
  title: service.title,
  description,
  alternates: { canonical: "/services/branding" },
  openGraph: { title: `${service.title} — Javé Agency`, description, url: "/services/branding" },
  twitter: { title: `${service.title} — Javé Agency`, description },
};

export default function BrandingPage() {
  return <ServicePageContent service={service} />;
}
