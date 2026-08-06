import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { InlineCta } from "@/components/inline-cta";
import { DemoOnlyBadge, TemplatePreview } from "@/components/template-preview";
import { templates } from "@/lib/templates";

const template = templates.find((t) => t.slug === "tattoo-artist")!;

const description =
  "Preview the Tattoo Artist template — a bold, portfolio-first design for tattoo artists and studios, from JAVE AGENCY's premium template line.";

export const metadata: Metadata = {
  title: "Tattoo Artist Template Preview",
  description,
  alternates: { canonical: "/templates/tattoo" },
  openGraph: {
    title: "Tattoo Artist Template — Javé Agency",
    description,
    url: "/templates/tattoo",
    images: [{ url: template.image }],
  },
  twitter: {
    title: "Tattoo Artist Template — Javé Agency",
    description,
    images: [template.image],
  },
};

export default function TattooTemplatePage() {
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
        heading="Want this for your studio?"
        body="This template can be customized with your branding, gallery, and consultation flow. Reach out to get started."
        secondaryLabel="Browse All Templates"
        secondaryHref="/templates"
      />
    </>
  );
}
