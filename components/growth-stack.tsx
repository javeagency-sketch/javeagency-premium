"use client";

import { HoverLift, RevealGroup, RevealItem, RevealMask } from "@/components/ui/reveal";
import { growthStack } from "@/lib/content";

export function GrowthStack() {
  return (
    <section className="bg-ink text-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RevealMask className="mb-20 max-w-2xl md:mb-28">
          <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
            The JAVE Growth Stack
          </span>
          <h2 className="text-paper mb-6 text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl">
            Modern infrastructure, built for outcomes.
          </h2>
          <p className="text-paper/65 text-lg leading-relaxed">
            We don&apos;t pick tools because they&apos;re trendy — every layer of our stack exists
            to make your site faster, your leads better handled, and your team faster to ship.
          </p>
        </RevealMask>

        <RevealGroup className="border-paper/12 border-t">
          {growthStack.map((item) => (
            <RevealItem key={item.name}>
              <HoverLift className="group border-paper/12 hover:border-terracotta/50 border-b py-10 transition-colors duration-500 md:py-12">
                <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between md:gap-16">
                  <h3 className="text-paper font-serif text-2xl tracking-tight md:w-1/4 md:text-3xl">
                    {item.name}
                  </h3>
                  <p className="text-paper/65 text-lg leading-relaxed md:w-1/2">{item.outcome}</p>
                </div>
              </HoverLift>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
