"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Megaphone, Users, Wrench, Heart, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { SponsorAvatar } from "@/components/SponsorAvatar";
import { useDictionary, useLocale } from "@/components/LocaleProvider";
import { CONFIRMED_SPONSORS } from "@/lib/confirmed-sponsors";
import { localizedPath } from "@/lib/i18n";
import { montserrat, outfit } from "@/lib/theme";

const PERK_ICONS: LucideIcon[] = [Megaphone, Users, Wrench, Heart];

type SponsorsSectionProps = {
  onSponsorClick: () => void;
};

export function SponsorsSection({ onSponsorClick }: SponsorsSectionProps) {
  const { sponsorsSection } = useDictionary();
  const { locale } = useLocale();

  return (
    <section
      id="sponsors"
      className="relative overflow-hidden border-t border-[#aaff00]/10 bg-black px-4 py-16 sm:px-6 sm:py-24 md:py-28"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(170,255,0,0.07)_0%,transparent_70%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(170,255,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(170,255,0,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          label={sponsorsSection.label}
          title={sponsorsSection.title}
          accentWord={sponsorsSection.accentWord}
          subtitle={sponsorsSection.subtitle}
        />

        {/* Sponsor logo grid */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:mt-14">
          {/* Confirmed sponsors */}
          {CONFIRMED_SPONSORS.map((sponsor, i) => (
            <motion.a
              key={sponsor.name}
              href={sponsor.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-32 flex-col items-center justify-center gap-1 overflow-hidden rounded-2xl border border-[#aaff00]/25 bg-white/[0.04] px-2 py-3 transition-all duration-300 hover:border-[#aaff00]/40 hover:bg-white/[0.06]"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#aaff00]/40 to-transparent" />
              <SponsorAvatar name={sponsor.name} logo={sponsor.logo} size={48} />
              <span
                className="text-[9px] font-black tracking-[0.12em] text-white/70 transition-colors group-hover:text-white"
                style={{ fontFamily: montserrat }}
              >
                {sponsor.name}
              </span>
              {sponsor.role && (
                <span
                  className="min-h-[20px] max-w-[90%] text-center text-[8px] leading-tight tracking-wide text-white/35"
                  style={{ fontFamily: outfit }}
                >
                  {sponsor.role[locale]}
                </span>
              )}
              {!sponsor.role && (
                <span className="min-h-[20px]" aria-hidden="true" />
              )}
              <span
                className="text-[9px] tracking-[0.2em] text-[#aaff00]/60 transition-colors group-hover:text-[#aaff00]"
                style={{ fontFamily: montserrat }}
              >
                {sponsor.contribution}
              </span>
            </motion.a>
          ))}

          {/* Open slots */}
          {[...Array(5 - CONFIRMED_SPONSORS.length)].map((_, i) => (
            <motion.button
              key={`slot-${i}`}
              type="button"
              onClick={onSponsorClick}
              className="group flex h-32 items-center justify-center rounded-2xl border border-dashed border-white/[0.1] bg-white/[0.02] transition-all duration-300 hover:border-[#aaff00]/35 hover:bg-[#aaff00]/[0.04]"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (CONFIRMED_SPONSORS.length + i) * 0.07 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label={sponsorsSection.cta}
            >
              <span
                className="text-[9px] tracking-[0.25em] text-white/20 transition-colors duration-300 group-hover:text-[#aaff00]/50"
                style={{ fontFamily: montserrat }}
              >
                YOUR LOGO
              </span>
            </motion.button>
          ))}
        </div>

        {/* Why sponsor — perk pills */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-2 sm:mt-12"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          {sponsorsSection.perks.map((perk, i) => {
            const Icon = PERK_ICONS[i % PERK_ICONS.length];
            return (
              <span
                key={perk.text}
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.03] px-4 py-2 text-xs text-white/50"
                style={{ fontFamily: outfit }}
              >
                <Icon size={12} strokeWidth={2} className="shrink-0 text-[#aaff00]/60" />
                {perk.text}
              </span>
            );
          })}
        </motion.div>

        {/* CTA row */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:mt-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
            <motion.button
              type="button"
              onClick={onSponsorClick}
              className="rounded-full bg-[#aaff00] px-7 py-3.5 text-xs font-black tracking-[0.14em] text-black shadow-[0_0_24px_rgba(170,255,0,0.3)] transition-all hover:bg-[#c8ff40] hover:shadow-[0_0_36px_rgba(170,255,0,0.45)]"
              style={{ fontFamily: montserrat }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {sponsorsSection.cta}
            </motion.button>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Link
                href={localizedPath(locale, "/sponsors")}
                className="flex items-center justify-center rounded-full border-2 border-[#aaff00]/45 bg-[#aaff00]/10 px-7 py-3.5 text-xs font-black tracking-[0.14em] text-[#aaff00] shadow-[0_0_20px_rgba(170,255,0,0.12)] transition-all hover:border-[#aaff00]/70 hover:bg-[#aaff00]/20 hover:shadow-[0_0_28px_rgba(170,255,0,0.22)]"
                style={{ fontFamily: montserrat }}
              >
                {sponsorsSection.learnMore} →
              </Link>
            </motion.div>
          </div>

          <p
            className="text-[11px] tracking-wide text-white/20"
            style={{ fontFamily: outfit }}
          >
            {sponsorsSection.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
