import Link from "next/link";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/content";

export function InlineCta({
  heading,
  body,
  primaryLabel = "Book a Strategy Call",
  secondaryLabel,
  secondaryHref,
}: {
  heading: string;
  body: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="from-terracotta to-terracotta-dark text-paper bg-gradient-to-br py-20 text-center md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="text-paper mb-5 font-serif text-3xl leading-[1.1] font-medium tracking-tight text-balance md:text-5xl">
            {heading}
          </h2>
          <p className="text-paper/90 mx-auto mb-9 max-w-xl text-lg leading-relaxed">{body}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticLink
              href={site.bookingUrl}
              target="_blank"
              rel="noopener"
              className="bg-paper text-ink hover:bg-ink hover:text-paper w-full rounded-sm px-8 py-4 text-center text-[13px] font-semibold tracking-[0.06em] uppercase transition-colors sm:w-auto"
            >
              {primaryLabel}
            </MagneticLink>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="border-paper/60 text-paper hover:bg-paper/12 w-full rounded-sm border px-8 py-4 text-center text-[13px] font-semibold tracking-[0.06em] uppercase transition-colors sm:w-auto"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
