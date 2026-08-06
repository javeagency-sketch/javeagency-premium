"use client";

import { HoverLift, RevealGroup, RevealItem, RevealMask } from "@/components/ui/reveal";
import { whatWeBuild } from "@/lib/content";

export function WhatWeBuild() {
  return (
    <section id="services" className="bg-cream overflow-x-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="px-6">
          <RevealMask className="mb-14 max-w-2xl md:mb-20 lg:mb-28">
            <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
              What We Build
            </span>
            <h2 className="text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl">
              Everything a growing brand needs — under one roof.
            </h2>
          </RevealMask>
        </div>

        {/* Mobile: swipeable carousel */}
        <div className="-mx-6 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-6 pb-2 [-ms-overflow-style:none] md:hidden [&::-webkit-scrollbar]:hidden">
          {whatWeBuild.map((item) => (
            <div
              key={item.key}
              className="border-line bg-paper w-[82%] shrink-0 snap-center rounded-xl border p-7"
            >
              <div className="mb-5 flex items-center gap-4">
                <item.Icon className="text-terracotta shrink-0" size={24} strokeWidth={1.75} />
                <h3 className="text-2xl leading-[1.05] font-medium tracking-tight">{item.title}</h3>
              </div>
              <p className="text-ink-soft mb-4 text-base leading-relaxed">{item.desc}</p>
              <p className="text-ink-soft/70 text-xs tracking-[0.08em] uppercase">
                {item.bullets.join(" · ")}
              </p>
            </div>
          ))}
        </div>

        {/* Tablet/desktop: editorial row list */}
        <div className="hidden px-6 md:block lg:px-0">
          <RevealGroup className="border-line border-t">
            {whatWeBuild.map((item) => (
              <RevealItem key={item.key}>
                <HoverLift className="group border-line hover:border-terracotta/50 border-b py-12 transition-colors duration-500 md:py-16">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-16">
                    <div className="flex items-center gap-6 md:w-2/5">
                      <item.Icon
                        className="text-terracotta shrink-0"
                        size={28}
                        strokeWidth={1.75}
                      />
                      <h3 className="text-3xl leading-[1.05] font-medium tracking-tight md:text-4xl">
                        {item.title}
                      </h3>
                    </div>
                    <div className="md:w-2/5">
                      <p className="text-ink-soft mb-4 text-lg leading-relaxed">{item.desc}</p>
                      <p className="text-ink-soft/70 text-xs tracking-[0.08em] uppercase">
                        {item.bullets.join(" · ")}
                      </p>
                    </div>
                  </div>
                </HoverLift>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
