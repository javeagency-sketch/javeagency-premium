import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { metrics } from "@/lib/content";

export function TrustMetrics() {
  return (
    <section className="border-line bg-paper/60 border-y">
      <RevealGroup className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="divide-line border-line grid grid-cols-2 divide-x divide-y border-x lg:grid-cols-4 lg:divide-y-0">
          {metrics.map((m) => (
            <RevealItem key={m.label} className="px-6 py-10 text-center">
              <div className="text-terracotta mb-2 font-serif text-2xl tracking-tight sm:text-3xl">
                {m.value}
              </div>
              <div className="text-ink-soft text-[11px] tracking-[0.12em] uppercase sm:text-xs">
                {m.label}
              </div>
            </RevealItem>
          ))}
        </div>
      </RevealGroup>
    </section>
  );
}
