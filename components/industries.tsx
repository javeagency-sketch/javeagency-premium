"use client";

import Link from "next/link";
import { RevealMask } from "@/components/ui/reveal";
import { industries, industriesSection, type IndustryItem } from "@/lib/content";

export function Industries() {
  const mobileItems = industries.slice(0, 5);

  return (
    <section className="bg-cream overflow-x-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="px-6">
          <RevealMask className="mb-14 max-w-2xl md:mb-20 lg:mb-28">
            <h2 className="text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl">
              {industriesSection.heading}
            </h2>
            <p className="text-ink-soft mt-6 text-lg leading-relaxed">
              {industriesSection.subheading}
            </p>
          </RevealMask>
        </div>

        {/* Mobile: 5 cards + a "+ Services" card, swipeable */}
        <div className="-mx-6 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-6 pb-2 [-ms-overflow-style:none] md:hidden [&::-webkit-scrollbar]:hidden">
          {mobileItems.map((item) => (
            <IndustryCard key={item.name} item={item} className="w-[82%]" />
          ))}
          <Link
            href="/services"
            className="border-line bg-paper flex w-[82%] shrink-0 snap-center flex-col items-center justify-center gap-2 rounded-xl border p-7 text-center"
          >
            <span className="text-2xl leading-[1.05] font-medium tracking-tight">
              + Services
            </span>
            <span className="text-terracotta-dark text-[13px] font-semibold tracking-[0.04em] uppercase">
              See All →
            </span>
          </Link>
        </div>

        {/* Tablet/desktop: full 12-industry carousel */}
        <div className="[scrollbar-width:none] hidden gap-6 overflow-x-auto px-6 pb-2 [-ms-overflow-style:none] md:flex lg:px-0 [&::-webkit-scrollbar]:hidden">
          {industries.map((item) => (
            <IndustryCard key={item.name} item={item} className="md:w-[300px]" />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ item, className }: { item: IndustryItem; className?: string }) {
  return (
    <div
      className={`border-line bg-paper shrink-0 snap-start rounded-xl border p-7 ${className ?? ""}`}
    >
      <div className="mb-5 flex items-center gap-4">
        <item.Icon className="text-terracotta shrink-0" size={24} strokeWidth={1.75} />
        <h3 className="text-xl leading-[1.05] font-medium tracking-tight">{item.name}</h3>
      </div>
      <p className="text-ink-soft mb-5 text-base leading-relaxed">{item.desc}</p>
      <Link
        href="#contact"
        className="text-terracotta-dark hover:text-terracotta text-[13px] font-semibold tracking-[0.04em] uppercase transition-colors"
      >
        Explore →
      </Link>
    </div>
  );
}
