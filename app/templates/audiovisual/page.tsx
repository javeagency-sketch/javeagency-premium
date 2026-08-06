import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { InlineCta } from "@/components/inline-cta";
import { DemoOnlyBadge, TemplatePreview } from "@/components/template-preview";
import { templates } from "@/lib/templates";

const template = templates.find((t) => t.slug === "audiovisual-portfolio")!;

const description =
  "Preview the Audiovisual Portfolio template — a cinematic showcase design for filmmakers, photographers, and studios, from JAVE AGENCY's premium template line.";

export const metadata: Metadata = {
  title: "Audiovisual Portfolio Template Preview",
  description,
  alternates: { canonical: "/templates/audiovisual" },
  openGraph: {
    title: "Audiovisual Portfolio Template — Javé Agency",
    description,
    url: "/templates/audiovisual",
    images: [{ url: template.image }],
  },
  twitter: {
    title: "Audiovisual Portfolio Template — Javé Agency",
    description,
    images: [template.image],
  },
};

export default function AudiovisualTemplatePage() {
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
        body="This template can be customized with your reel, projects, and contact flow. Reach out to get started."
        secondaryLabel="Browse All Templates"
        secondaryHref="/templates"
      />
    </>
  );
}
