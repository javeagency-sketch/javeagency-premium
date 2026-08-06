import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { InlineCta } from "@/components/inline-cta";
import { DemoOnlyBadge, TemplatePreview } from "@/components/template-preview";
import { templates } from "@/lib/templates";

const template = templates.find((t) => t.slug === "beauty-salon")!;

const description =
  "Preview the Beauty Salon template — an editorial, booking-first design for salons and spas, from JAVE AGENCY's premium template line.";

export const metadata: Metadata = {
  title: "Beauty Salon Template Preview",
  description,
  alternates: { canonical: "/templates/beautysalon" },
  openGraph: {
    title: "Beauty Salon Template — Javé Agency",
    description,
    url: "/templates/beautysalon",
    images: [{ url: template.image }],
  },
  twitter: {
    title: "Beauty Salon Template — Javé Agency",
    description,
    images: [template.image],
  },
};

export default function BeautySalonTemplatePage() {
  return (
    <>
      <DemoOnlyBadge />
      <PageHero
        eyebrow={template.category}
        headline={template.name}
        subheadline="A preview of the design system — booking buttons, forms, and submit actions are disabled on this demo."
        crumbs={[{ label: "Templates", href: "/templates" }, { label: template.name }]}
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <TemplatePreview
            title={template.name}
            previewImage={template.image}
            demoUrl={template.demoUrl}
            category={template.category}
            isLive={template.isLive}
          />
        </div>
      </section>

      <InlineCta
        heading="Want this for your salon?"
        body="This template can be customized with your branding, services, and booking flow. Reach out to get started."
        secondaryLabel="Browse All Templates"
        secondaryHref="/templates"
      />
    </>
  );
}
