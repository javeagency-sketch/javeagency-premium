"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RevealMask } from "@/components/ui/reveal";
import { industries, industriesSection, type IndustryItem } from "@/lib/content";

export function Industries() {
  const mobileItems = industries.slice(0, 5);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-industry-card]");
    const amount = (card?.offsetWidth ?? 300) + 24;
    track.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

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

        {/* Tablet/desktop: full 12-industry carousel with arrow controls */}
        <div className="relative hidden md:block">
          <div
            ref={trackRef}
            className="[scrollbar-width:none] flex gap-6 overflow-x-auto px-6 pb-2 [-ms-overflow-style:none] lg:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {industries.map((item) => (
              <IndustryCard key={item.name} item={item} className="md:w-[300px]" data-industry-card />
            ))}
          </div>

          <button
            type="button"
            aria-label="Scroll industries left"
            onClick={() => scrollByCard("left")}
            className="border-line bg-paper text-ink hover:bg-terracotta hover:text-paper hover:border-terracotta absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border p-2.5 shadow-sm transition-colors lg:-left-5"
          >
            <ChevronLeft size={20} strokeWidth={1.75} />
          </button>
          <button
            type="button"
            aria-label="Scroll industries right"
            onClick={() => scrollByCard("right")}
            className="border-line bg-paper text-ink hover:bg-terracotta hover:text-paper hover:border-terracotta absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 rounded-full border p-2.5 shadow-sm transition-colors lg:-right-5"
          >
            <ChevronRight size={20} strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </section>
  );
}

function IndustryCard({
  item,
  className,
  ...rest
}: {
  item: IndustryItem;
  className?: string;
  "data-industry-card"?: boolean;
}) {
  return (
    <div
      {...rest}
      className={`border-line bg-paper shrink-0 snap-start rounded-xl border p-7 ${className ?? ""}`}
    >
      <div className="mb-5 flex items-center gap-4">
        <item.Icon className="text-terracotta shrink-0" size={24} strokeWidth={1.75} />
        <h3 className="text-xl leading-[1.05] font-medium tracking-tight">{item.name}</h3>
      </div>
      <p className="text-ink-soft mb-5 text-base leading-relaxed">{item.desc}</p>
      <Link
        href={item.href}
        className="text-terracotta-dark hover:text-terracotta text-[13px] font-semibold tracking-[0.04em] uppercase transition-colors"
      >
        Explore →
      </Link>
    </div>
  );
}
