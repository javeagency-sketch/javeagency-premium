import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { InlineCta } from "@/components/inline-cta";
import { DemoOnlyBadge, TemplatePreview } from "@/components/template-preview";
import { templates } from "@/lib/templates";

const template = templates.find((t) => t.slug === "portfolio")!;

const description =
  "Preview the Creative Portfolio template — a cinematic showcase design for filmmakers, photographers, and creative studios, from JAVE AGENCY's premium template line.";

export const metadata: Metadata = {
  title: "Creative Portfolio Template Preview",
  description,
  alternates: { canonical: "/templates/portfolio" },
  openGraph: {
    title: "Creative Portfolio Template — Javé Agency",
    description,
    url: "/templates/portfolio",
    images: [{ url: template.image }],
  },
  twitter: {
    title: "Creative Portfolio Template — Javé Agency",
    description,
    images: [template.image],
  },
};

export default function PortfolioTemplatePage() {
  return (
    <>
      <DemoOnlyBadge />
      <PageHero
        eyebrow={template.category}
        headline={template.name}
        subheadline="A preview of the design system — forms and submit actions are disabled on this demo."
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
        heading="Want this for your studio?"
        body="This template can be customized with your reel, projects, and contact flow. Reach out to get started."
        secondaryLabel="Browse All Templates"
        secondaryHref="/templates"
      />
    </>
  );
}
