"use client";

import { HoverLift, RevealGroup, RevealItem, RevealMask } from "@/components/ui/reveal";
import { growthStack } from "@/lib/content";

export function GrowthStack() {
  return (
    <section className="bg-ink text-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RevealMask className="mb-20 max-w-2xl md:mb-28">
          <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
            Built to Perform, Not Just Look Good
          </span>
          <h2 className="text-paper mb-6 text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl">
            Modern infrastructure, built for outcomes.
          </h2>
          <p className="text-paper/65 text-lg leading-relaxed">
            We don&apos;t pick tools because they&apos;re trendy — every layer of our stack exists
            to make your site faster, your leads better handled, and your team faster to ship.
          </p>
        </RevealMask>

        <RevealGroup className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {growthStack.map((item) => (
            <RevealItem key={item.title}>
              <HoverLift className="group border-paper/12 hover:border-terracotta/50 h-full rounded-xl border p-6 transition-colors duration-500 md:p-8">
                <item.Icon className="text-terracotta mb-5" size={28} strokeWidth={1.75} />
                <h3 className="text-paper mb-2 text-lg leading-[1.15] font-medium tracking-tight md:text-xl">
                  {item.title}
                </h3>
                <p className="text-paper/65 text-sm leading-relaxed md:text-base">{item.desc}</p>
              </HoverLift>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
