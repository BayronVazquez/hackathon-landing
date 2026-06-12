"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "@/components/SectionHeading";
import { useDictionary } from "@/components/LocaleProvider";
import { montserrat, outfit } from "@/lib/theme";

export function FaqSection() {
  const { faq } = useDictionary();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-16 overflow-hidden border-t border-[#aaff00]/10 bg-[#030303] px-4 py-16 sm:px-6 sm:py-24 md:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#aaff00]/6 blur-[80px]" />

      <div className="relative mx-auto max-w-3xl">
        <SectionHeading
          label={faq.label}
          title={faq.title}
          accentWord={faq.accentWord}
          subtitle={faq.subtitle}
        />

        <div className="mt-10 space-y-2 sm:mt-14">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  animate={isOpen
                    ? { borderColor: "rgba(170,255,0,0.3)", backgroundColor: "rgba(170,255,0,0.03)" }
                    : { borderColor: "rgba(255,255,255,0.07)", backgroundColor: "rgba(0,0,0,0.4)" }
                  }
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden rounded-xl border"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-5"
                    aria-expanded={isOpen}
                  >
                    <span
                      className="text-sm font-semibold text-white transition-colors duration-200 sm:text-base"
                      style={{ fontFamily: montserrat, color: isOpen ? "rgba(170,255,0,0.9)" : "white" }}
                    >
                      {item.question}
                    </span>
                    <motion.span
                      className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full border border-[#aaff00]/30 text-[#aaff00] text-sm font-black"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      aria-hidden="true"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <p
                          className="px-4 pb-4 text-sm leading-relaxed text-white/60 sm:px-6 sm:pb-5"
                          style={{ fontFamily: outfit }}
                        >
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
