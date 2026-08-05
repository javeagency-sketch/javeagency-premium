import type { Metadata } from "next";
import { ServicePageContent } from "@/components/service-page";
import { getServiceBySlug } from "@/lib/services";

const service = getServiceBySlug("automation")!;

const description =
  "Automation and AI-powered growth workflows for businesses in the United States, Chile, and Colombia — automated lead handling, follow-up, and reporting.";

export const metadata: Metadata = {
  title: service.title,
  description,
  alternates: { canonical: "/services/automation" },
  openGraph: { title: `${service.title} — Javé Agency`, description, url: "/services/automation" },
  twitter: { title: `${service.title} — Javé Agency`, description },
};

export default function AutomationPage() {
  return <ServicePageContent service={service} />;
}
