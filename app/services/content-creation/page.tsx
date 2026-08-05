import type { Metadata } from "next";
import { ServicePageContent } from "@/components/service-page";
import { getServiceBySlug } from "@/lib/services";

const service = getServiceBySlug("content-creation")!;

const description =
  "Content and social asset design for businesses in the United States, Chile, and Colombia — consistent, on-brand content planned, designed, and published on schedule.";

export const metadata: Metadata = {
  title: service.title,
  description,
  alternates: { canonical: "/services/content-creation" },
  openGraph: {
    title: `${service.title} — Javé Agency`,
    description,
    url: "/services/content-creation",
  },
  twitter: { title: `${service.title} — Javé Agency`, description },
};

export default function ContentCreationPage() {
  return <ServicePageContent service={service} />;
}
