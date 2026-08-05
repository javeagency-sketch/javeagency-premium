import type { Metadata } from "next";
import { ServicePageContent } from "@/components/service-page";
import { getServiceBySlug } from "@/lib/services";

const service = getServiceBySlug("web-design")!;

const description =
  "Custom web design and development for businesses in the United States, Chile, and Colombia — premium, conversion-focused websites built on modern, fast infrastructure.";

export const metadata: Metadata = {
  title: service.title,
  description,
  alternates: { canonical: "/services/web-design" },
  openGraph: { title: `${service.title} — Javé Agency`, description, url: "/services/web-design" },
  twitter: { title: `${service.title} — Javé Agency`, description },
};

export default function WebDesignPage() {
  return <ServicePageContent service={service} />;
}
