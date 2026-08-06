"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { EASE } from "@/components/ui/reveal";

/** Full-width preview image with a dark gradient hover overlay and "View Project" CTA — shared by the homepage portfolio section and the /work page. */
export function PortfolioImage({
  name,
  image,
  alt,
  href,
  priority = false,
}: {
  name: string;
  image: string;
  alt: string;
  href?: string;
  priority?: boolean;
}) {
  return (
    <div className="group relative">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <motion.a
          href={href}
          target={href ? "_blank" : undefined}
          rel={href ? "noopener" : undefined}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: EASE }}
          aria-label={href ? `View ${name} project` : undefined}
          className={`from-ink/90 via-ink/40 text-paper absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-t to-transparent ${href ? "cursor-pointer" : "pointer-events-none"}`}
        >
          {href && (
            <>
              <span className="border-paper/50 flex h-12 w-12 items-center justify-center rounded-full border">
                <ArrowUpRight size={20} />
              </span>
              <span className="text-xs font-semibold tracking-[0.16em] uppercase">
                View Project
              </span>
            </>
          )}
        </motion.a>
      </div>
    </div>
  );
}
