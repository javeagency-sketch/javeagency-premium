import { CountUp } from "@/components/ui/count-up";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { metrics } from "@/lib/content";

export function TrustMetrics() {
  return (
    <section className="border-line bg-paper/60 border-y">
      <RevealGroup className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="divide-line border-line grid grid-cols-3 divide-x border-x">
          {metrics.map((m) => (
            <RevealItem key={m.label} className="px-2 py-8 text-center sm:px-6 sm:py-10">
              <div className="text-terracotta mb-1.5 font-serif text-2xl tracking-tight sm:mb-2 sm:text-3xl md:text-4xl">
                <CountUp target={m.target} suffix={m.suffix} />
              </div>
              <div className="text-ink-soft text-[9.5px] tracking-[0.08em] uppercase sm:text-[11px] sm:tracking-[0.12em] md:text-xs">
                {m.label}
              </div>
            </RevealItem>
          ))}
        </div>
      </RevealGroup>
    </section>
  );
}
