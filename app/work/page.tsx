import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { InlineCta } from "@/components/inline-cta";
import { WorkProjectBlock } from "@/components/work-project-block";
import { RevealMask } from "@/components/ui/reveal";
import { workHero, workProjects } from "@/lib/work";

const description =
  "Case studies from JAVE AGENCY's work with businesses in the United States, Chile, and Colombia — real e-commerce, B2B, branding, and entertainment projects.";

export const metadata: Metadata = {
  title: "Work",
  description,
  alternates: { canonical: "/work" },
  openGraph: { title: "Work — Javé Agency", description, url: "/work" },
  twitter: { title: "Work — Javé Agency", description },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow={workHero.eyebrow}
        headline={workHero.headline}
        subheadline={workHero.subheadline}
        crumbs={[{ label: "Work" }]}
      />

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="divide-line border-line divide-y border-t">
            {workProjects.map((project, i) => (
              <WorkProjectBlock key={project.slug} project={project} reversed={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-line bg-paper border-t py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <RevealMask className="mx-auto max-w-2xl">
            <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
              What&apos;s Next
            </span>
            <h2 className="mb-5 text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl">
              Your project could be next on this page.
            </h2>
            <p className="text-ink-soft text-lg leading-relaxed">
              Every case study here started as a first conversation. If you&apos;re considering a
              new website, brand identity, or growth system, we&apos;d like to hear about it.
            </p>
          </RevealMask>
        </div>
      </section>

      <InlineCta
        heading="Ready to start your own case study?"
        body="Tell us about your business and where you want it to go — we'll take it from there."
        secondaryLabel="Explore Services"
        secondaryHref="/services"
      />
    </>
  );
}
