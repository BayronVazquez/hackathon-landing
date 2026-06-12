"use client";

import { motion } from "motion/react";
import { montserrat, outfit } from "@/lib/theme";

type SectionHeadingProps = {
  label: string;
  title: string;
  /** Wrap this word in the title with neon accent color */
  accentWord?: string;
  subtitle?: string;
  align?: "center" | "left";
};

export function SectionHeading({ label, title, accentWord, subtitle, align = "center" }: SectionHeadingProps) {
  const alignClass = align === "left" ? "text-left" : "text-center";
  const subtitleAlign = align === "left" ? "mx-0" : "mx-auto";

  // Split title around accentWord for coloring
  let titleNodes: React.ReactNode = title;
  if (accentWord && title.includes(accentWord)) {
    const parts = title.split(accentWord);
    titleNodes = (
      <>
        {parts[0]}
        <span className="text-[#aaff00] drop-shadow-[0_0_20px_rgba(170,255,0,0.4)]">{accentWord}</span>
        {parts[1]}
      </>
    );
  }

  return (
    <div className={alignClass}>
      {/* Pill chip label — SpaceAndTime style */}
      <motion.div
        className={`mb-4 inline-flex items-center gap-2 rounded-full border border-[#aaff00]/25 bg-[#aaff00]/8 px-3 py-1`}
        initial={{ opacity: 0, y: -8, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#aaff00] shadow-[0_0_6px_#aaff00]" />
        <span
          className="text-[10px] font-black tracking-[0.35em] text-[#aaff00]"
          style={{ fontFamily: montserrat }}
        >
          {label}
        </span>
      </motion.div>

      <motion.h2
        className="text-2xl font-black tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
        style={{ fontFamily: montserrat }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        {titleNodes}
      </motion.h2>

      {subtitle && (
        <motion.p
          className={`mt-4 max-w-xl text-sm text-white/55 sm:mt-5 sm:text-base ${subtitleAlign}`}
          style={{ fontFamily: outfit }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
