"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ClipboardList, Users2, Flame, Presentation } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { useDictionary } from "@/components/LocaleProvider";
import { montserrat, outfit } from "@/lib/theme";

const STEP_ICONS = [ClipboardList, Users2, Flame, Presentation];

export function HowItWorksSection() {
  const { howItWorks } = useDictionary();
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="relative scroll-mt-16 overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-24 md:py-32">
      {/* Subtle scan lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(170,255,0,0.6) 3px, rgba(170,255,0,0.6) 4px)",
        }}
      />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#aaff00]/5 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          label={howItWorks.label}
          title={howItWorks.title}
          accentWord={howItWorks.accentWord}
          subtitle={howItWorks.subtitle}
        />

        <div className="relative mt-12 sm:mt-16">
          {/* Animated timeline line */}
          <div
            ref={lineRef}
            className="absolute left-[27px] top-8 hidden h-[calc(100%-4rem)] w-px overflow-hidden md:block"
            aria-hidden="true"
          >
            <motion.div
              className="h-full w-full bg-gradient-to-b from-[#aaff00]/70 via-[#aaff00]/30 to-transparent"
              initial={{ scaleY: 0 }}
              animate={lineInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "top" }}
            />
          </div>

          <div className="space-y-6">
            {howItWorks.steps.map((item, index) => {
              const StepIcon = STEP_ICONS[index];
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex gap-5 overflow-hidden rounded-2xl border border-white/6 bg-white/[0.025] p-5 transition-colors duration-300 hover:border-[#aaff00]/25 hover:bg-[#aaff00]/[0.02] sm:gap-7 sm:p-6 md:gap-10"
                >
                  {/* Hover left accent bar */}
                  <div className="absolute left-0 top-4 bottom-4 w-0.5 scale-y-0 rounded-full bg-[#aaff00]/60 transition-transform duration-300 group-hover:scale-y-100" style={{ transformOrigin: "bottom" }} />

                  {/* Step circle with icon */}
                  <div className="shrink-0">
                    <motion.div
                      className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#aaff00]/35 bg-[#aaff00]/10 text-[#aaff00]"
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      {/* Pulse ring */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl border border-[#aaff00]/25"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2.8, delay: index * 0.5, repeat: Infinity, ease: "easeOut" }}
                      />
                      <StepIcon size={24} strokeWidth={1.75} className="drop-shadow-[0_0_8px_rgba(170,255,0,0.6)]" />
                    </motion.div>
                    {/* Step number below icon */}
                    <p
                      className="mt-2 text-center text-[10px] font-black tracking-[0.25em] text-[#aaff00]/50"
                      style={{ fontFamily: montserrat }}
                    >
                      {item.step}
                    </p>
                  </div>

                  <div className="py-1">
                    <h3
                      className="text-xl font-black text-white transition-colors duration-300 group-hover:text-[#aaff00]/90"
                      style={{ fontFamily: montserrat }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mt-2 max-w-lg text-base leading-relaxed text-white/55"
                      style={{ fontFamily: outfit }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
