"use client";

import { motion } from "motion/react";
import {
  Coffee,
  Wifi,
  Users,
  Lightbulb,
  Code2,
  Megaphone,
  Heart,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { useDictionary } from "@/components/LocaleProvider";
import { montserrat, outfit } from "@/lib/theme";
import type { Dictionary } from "@/lib/dictionaries/types";

const PERK_ICONS: Record<
  Dictionary["perks"]["items"][number]["id"],
  LucideIcon
> = {
  food: Coffee,
  wifi: Wifi,
  mentors: Lightbulb,
  workshops: Code2,
  teams: Users,
  demo: Megaphone,
  community: Heart,
  swag: Zap,
};

export function PrizesSection() {
  const { perks } = useDictionary();
  const featured = perks.items[0];
  const FeaturedIcon = PERK_ICONS[featured.id];

  return (
    <section className="relative overflow-hidden border-t border-[#aaff00]/10 bg-[#030303] px-4 py-16 sm:px-6 sm:py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(170,255,0,0.06)_0%,transparent_70%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(170,255,0,0.9) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          label={perks.label}
          title={perks.title}
          accentWord={perks.accentWord}
          subtitle={perks.subtitle}
        />

        <div className="mt-12 grid auto-rows-auto gap-4 sm:mt-16 sm:gap-5 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative overflow-hidden rounded-2xl border border-[#aaff00]/20 bg-gradient-to-br from-[#aaff00]/8 via-[#aaff00]/4 to-transparent p-7 md:col-span-1 md:row-span-2"
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 ring-1 ring-inset ring-[#aaff00]/40 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#aaff00]/10 blur-[40px]" />

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#aaff00]/30 bg-[#aaff00]/12 text-[#aaff00]">
              <FeaturedIcon size={26} strokeWidth={1.6} className="drop-shadow-[0_0_10px_rgba(170,255,0,0.7)]" />
            </div>
            <h3
              className="text-2xl font-black text-white transition-colors duration-300 group-hover:text-[#aaff00]/95"
              style={{ fontFamily: montserrat }}
            >
              {featured.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60" style={{ fontFamily: outfit }}>
              {featured.body}
            </p>
            <div className="mt-8 border-t border-[#aaff00]/15 pt-6">
              <p className="text-[10px] font-black tracking-[0.3em] text-[#aaff00]/60" style={{ fontFamily: montserrat }}>
                {perks.featuredNote}
              </p>
            </div>
          </motion.div>

          {perks.items.slice(1).map((perk, i) => {
            const Icon = PERK_ICONS[perk.id];
            return (
              <motion.div
                key={perk.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.55, delay: (i + 1) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-2xl border border-white/7 bg-white/[0.025] p-5"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#aaff00]/[0.05] to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                <div className="absolute inset-0 rounded-2xl opacity-0 ring-1 ring-inset ring-[#aaff00]/22 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#aaff00]/20 bg-[#aaff00]/8 text-[#aaff00]">
                    <Icon size={17} strokeWidth={1.75} className="drop-shadow-[0_0_6px_rgba(170,255,0,0.5)] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3
                    className="text-sm font-black text-white transition-colors duration-300 group-hover:text-[#aaff00]/90"
                    style={{ fontFamily: montserrat }}
                  >
                    {perk.title}
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-white/48" style={{ fontFamily: outfit }}>
                  {perk.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-10 flex items-center justify-center gap-3 sm:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#aaff00]/40" />
          <p
            className="text-center text-xs tracking-[0.2em] text-white/35"
            style={{ fontFamily: outfit }}
          >
            {perks.bottomCallout}
          </p>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#aaff00]/40" />
        </motion.div>
      </div>
    </section>
  );
}
