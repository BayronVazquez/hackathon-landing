"use client";

import { motion } from "motion/react";
import { Rocket, Users, GraduationCap, Presentation, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { useDictionary } from "@/components/LocaleProvider";
import { montserrat, outfit } from "@/lib/theme";

const HIGHLIGHT_VISUALS = {
  ship: {
    Icon: Rocket,
    gradient: "from-[#aaff00]/20 via-[#aaff00]/5 to-transparent",
    iconGlow: "drop-shadow-[0_0_12px_rgba(170,255,0,0.7)]",
  },
  crew: {
    Icon: Users,
    gradient: "from-[#aaff00]/15 via-[#aaff00]/5 to-transparent",
    iconGlow: "drop-shadow-[0_0_12px_rgba(170,255,0,0.7)]",
  },
  learn: {
    Icon: GraduationCap,
    gradient: "from-[#aaff00]/20 via-[#aaff00]/5 to-transparent",
    iconGlow: "drop-shadow-[0_0_12px_rgba(170,255,0,0.7)]",
  },
  win: {
    Icon: Presentation,
    gradient: "from-[#aaff00]/20 via-[#aaff00]/5 to-transparent",
    iconGlow: "drop-shadow-[0_0_12px_rgba(170,255,0,0.7)]",
  },
} as const;

export function HighlightsSection() {
  const { highlights } = useDictionary();

  return (
    <section id="highlights" className="relative scroll-mt-16 overflow-hidden border-t border-[#aaff00]/10 bg-[#030303] px-4 py-16 sm:px-6 sm:py-24 md:py-32">
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(170,255,0,0.9) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Side glows */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#aaff00]/10 blur-[90px]" />
      <div className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#aaff00]/8 blur-[90px]" />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          label={highlights.label}
          title={highlights.title}
          accentWord={highlights.accentWord}
          subtitle={highlights.subtitle}
        />

        {/* Bento grid — first card is wide/feature, rest are smaller */}
        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-5 md:grid-cols-2 md:grid-rows-2">
          {highlights.items.map((item, index) => {
            const config = HIGHLIGHT_VISUALS[item.id];
            const { Icon } = config;
            const isFeatured = index === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-white/[0.03] to-black/60 ${isFeatured ? "md:row-span-2 md:flex md:flex-col md:justify-between" : ""} p-6 sm:p-7`}
              >
                {/* Hover glow */}
                <div className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${config.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="absolute inset-0 rounded-2xl opacity-0 ring-1 ring-inset ring-[#aaff00]/30 transition-opacity duration-300 group-hover:opacity-100" />
                {/* Bottom neon sweep */}
                <div className="absolute bottom-0 left-0 right-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-[#aaff00]/50 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                <div>
                  {/* Tag + index */}
                  <div className="mb-5 flex items-center justify-between">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#aaff00]/20 bg-[#aaff00]/8 px-2.5 py-1 text-[10px] font-black tracking-[0.25em] text-[#aaff00]"
                      style={{ fontFamily: montserrat }}
                    >
                      {item.tag}
                    </span>
                    <span
                      className="text-[11px] font-black tracking-[0.3em] text-white/12 transition-colors duration-300 group-hover:text-[#aaff00]/30"
                      style={{ fontFamily: montserrat }}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`mb-5 inline-flex items-center justify-center rounded-2xl border border-[#aaff00]/25 bg-[#aaff00]/8 text-[#aaff00] ${isFeatured ? "h-16 w-16" : "h-12 w-12"}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 350, damping: 14 }}
                  >
                    <Icon size={isFeatured ? 30 : 22} strokeWidth={1.6} className={config.iconGlow} />
                  </motion.div>

                  <h3
                    className={`font-black text-white transition-colors duration-300 group-hover:text-[#aaff00]/95 ${isFeatured ? "text-2xl sm:text-3xl" : "text-lg"}`}
                    style={{ fontFamily: montserrat }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-3 leading-relaxed text-white/55 ${isFeatured ? "text-base" : "text-sm"}`}
                    style={{ fontFamily: outfit }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Arrow — always at bottom */}
                <div className="mt-6 flex items-center gap-1.5 text-[#aaff00]/0 transition-colors duration-300 group-hover:text-[#aaff00]/60">
                  <span className="text-[10px] font-black tracking-[0.25em]" style={{ fontFamily: montserrat }}>
                    {isFeatured ? highlights.featuredCta : highlights.learnMoreCta}
                  </span>
                  <ArrowRight size={12} strokeWidth={2.5} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
