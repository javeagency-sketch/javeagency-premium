import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { InlineCta } from "@/components/inline-cta";
import { DemoOnlyBadge, TemplatePreview } from "@/components/template-preview";
import { templates } from "@/lib/templates";

const template = templates.find((t) => t.slug === "burger-scroll")!;

const description =
  "Preview the Restaurant template — a fast-paced, appetite-first design for restaurants and quick-service brands, from JAVE AGENCY's premium template line.";

export const metadata: Metadata = {
  title: "Restaurant Template Preview",
  description,
  alternates: { canonical: "/templates/restaurant" },
  openGraph: {
    title: "Restaurant Template — Javé Agency",
    description,
    url: "/templates/restaurant",
    images: [{ url: template.image }],
  },
  twitter: {
    title: "Restaurant Template — Javé Agency",
    description,
    images: [template.image],
  },
};

export default function RestaurantTemplatePage() {
  return (
    <>
      <DemoOnlyBadge />
      <PageHero
        eyebrow={template.category}
        headline={template.name}
        subheadline="A preview of the design system — ordering buttons, forms, and submit actions are disabled on this demo."
        crumbs={[{ label: "Templates", href: "/templates" }, { label: template.name }]}
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <TemplatePreview
            title={template.name}
            description={template.description}
            previewImage={template.image}
            demoUrl={template.demoUrl}
            category={template.category}
          />
        </div>
      </section>

      <InlineCta
        heading="Want this for your restaurant?"
        body="This template can be customized with your menu, branding, and ordering flow. Reach out to get started."
        secondaryLabel="Browse All Templates"
        secondaryHref="/templates"
      />
    </>
  );
}
