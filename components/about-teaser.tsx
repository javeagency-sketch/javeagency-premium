import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

export function AboutTeaser() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
            Built for Ambitious Businesses
          </span>
          <p className="text-2xl leading-relaxed font-medium tracking-tight text-balance md:text-3xl">
            JAVE AGENCY is a remote marketing agency and web design studio serving Monticello, NY
            and the wider Sullivan County Catskills region, alongside clients in Chile and
            Colombia. We combine premium design, modern development, and AI-powered automation to
            help businesses look more established, perform faster, and convert better online.
          </p>
          <Link
            href="/about"
            className="text-terracotta-dark decoration-line hover:text-terracotta mt-9 inline-block text-[13px] font-semibold tracking-[0.06em] uppercase underline underline-offset-4 transition-colors"
          >
            Learn more about JAVE AGENCY →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
