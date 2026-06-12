"use client";

import { motion } from "motion/react";
import { Flame, ArrowRight } from "lucide-react";
import ClickSpark from "@/components/reactbits/ClickSpark";
import StarBorder from "@/components/reactbits/StarBorder";
import { useDictionary } from "@/components/LocaleProvider";
import { montserrat, outfit } from "@/lib/theme";

type CtaSectionProps = {
  onRegisterClick: () => void;
};

export function CtaSection({ onRegisterClick }: CtaSectionProps) {
  const { cta } = useDictionary();

  return (
    <section className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-28 md:py-36">
      {/* Deep radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(170,255,0,0.12)_0%,transparent_70%)]" />
      {/* Scan lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(170,255,0,1) 2px, rgba(170,255,0,1) 3px)",
        }}
      />
      {/* Corner accents */}
      <div className="pointer-events-none absolute top-0 left-0 h-24 w-24">
        <div className="absolute top-0 left-0 h-px w-16 bg-gradient-to-r from-[#aaff00]/50 to-transparent" />
        <div className="absolute top-0 left-0 h-16 w-px bg-gradient-to-b from-[#aaff00]/50 to-transparent" />
      </div>
      <div className="pointer-events-none absolute top-0 right-0 h-24 w-24">
        <div className="absolute top-0 right-0 h-px w-16 bg-gradient-to-l from-[#aaff00]/50 to-transparent" />
        <div className="absolute top-0 right-0 h-16 w-px bg-gradient-to-b from-[#aaff00]/50 to-transparent" />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-24">
        <div className="absolute bottom-0 left-0 h-px w-16 bg-gradient-to-r from-[#aaff00]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 h-16 w-px bg-gradient-to-t from-[#aaff00]/50 to-transparent" />
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24">
        <div className="absolute bottom-0 right-0 h-px w-16 bg-gradient-to-l from-[#aaff00]/50 to-transparent" />
        <div className="absolute bottom-0 right-0 h-16 w-px bg-gradient-to-t from-[#aaff00]/50 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        {/* Urgency badge */}
        <motion.div
          className="mb-6 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "backOut" }}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border border-[#aaff00]/30 bg-[#aaff00]/10 px-4 py-1.5 text-[11px] font-black tracking-[0.25em] text-[#aaff00]"
            style={{ fontFamily: montserrat }}
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              <Flame size={12} fill="currentColor" strokeWidth={0} />
            </motion.span>
            {cta.urgencyBadge}
            <ArrowRight size={11} strokeWidth={2.5} />
          </span>
        </motion.div>

        <motion.p
          className="text-xs tracking-[0.4em] text-[#aaff00]/80"
          style={{ fontFamily: outfit }}
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          {cta.label}
        </motion.p>

        <motion.h2
          className="mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl md:text-5xl"
          style={{ fontFamily: montserrat }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {cta.title}
        </motion.h2>

        <motion.p
          className="mt-5 text-base text-white/55 sm:text-lg"
          style={{ fontFamily: outfit }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {cta.subtitle}
        </motion.p>

        {/* Social proof row */}
        <motion.div
          className="mt-6 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {/* Avatar stack placeholders */}
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-7 w-7 rounded-full border-2 border-black bg-gradient-to-br from-[#aaff00]/40 to-[#aaff00]/10"
                style={{ zIndex: 5 - i }}
              />
            ))}
          </div>
          <span
            className="text-xs text-white/50"
            style={{ fontFamily: outfit }}
          >
            {cta.socialProof}
          </span>
        </motion.div>

        <motion.div
          className="mx-auto mt-10 flex w-full max-w-sm items-center sm:max-w-none"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "backOut" }}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#aaff00]/60 to-[#aaff00]/80" />
          <ClickSpark
            sparkColor="#aaff00"
            sparkCount={10}
            sparkRadius={28}
            extraScale={1.4}
          >
            <StarBorder
              as="button"
              type="button"
              onClick={onRegisterClick}
              color="#aaff00"
              speed="4s"
              thickness={1.5}
              className="cursor-pointer"
              style={{ fontFamily: montserrat }}
            >
              {cta.button}
            </StarBorder>
          </ClickSpark>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#aaff00]/60 to-[#aaff00]/80" />
        </motion.div>

        {/* Free / no credit card note */}
        <motion.p
          className="mt-4 text-xs text-white/30"
          style={{ fontFamily: outfit }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {cta.footnote}
        </motion.p>
      </div>
    </section>
  );
}
