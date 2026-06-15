"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useDictionary, useLocale } from "@/components/LocaleProvider";
import { PeserosCredit } from "@/components/PeserosCredit";
import { localizedPath } from "@/lib/i18n";
import { montserrat, outfit } from "@/lib/theme";

type SiteFooterProps = {
  onSponsorClick?: () => void;
};

export function SiteFooter({ onSponsorClick }: SiteFooterProps) {
  const { locale } = useLocale();
  const dictionary = useDictionary();
  const year = new Date().getFullYear();

  const eventLinks = [
    { href: "#about", label: dictionary.nav.about },
    { href: "#highlights", label: dictionary.nav.whyJoin },
    { href: "#how-it-works", label: dictionary.nav.howItWorks },
    { href: "#faq", label: dictionary.nav.faq },
  ];

  const navLinks = [
    {
      href: localizedPath(locale, "/terms"),
      label: dictionary.footer.terms,
      isLink: true,
    },
    {
      href: localizedPath(locale, "/privacy"),
      label: dictionary.footer.privacy,
      isLink: true,
    },
  ];

  const sponsorsHref = localizedPath(locale, "/sponsors");

  return (
    <footer className="relative overflow-hidden border-t border-[#aaff00]/15 bg-black px-4 py-12 sm:px-6 sm:py-14">
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(170,255,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(170,255,0,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Top gradient fade */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent" />
      {/* Center glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-96 -translate-x-1/2 rounded-full bg-[#aaff00]/6 blur-[60px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Top row — brand + columns */}
        <motion.div
          className="grid gap-10 sm:grid-cols-2 md:grid-cols-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                aria-hidden="true"
                className="shrink-0 drop-shadow-[0_0_10px_rgba(170,255,0,0.4)]"
              >
                <rect width="32" height="32" rx="6" fill="#000" />
                <polygon points="16,5 27,11 16,17 5,11" fill="#aaff00" />
                <polygon points="5,11 16,17 16,27 5,21" fill="#55aa00" />
                <polygon points="27,11 16,17 16,27 27,21" fill="#77cc00" />
              </svg>
              <p
                className="text-base font-black tracking-tight text-white"
                style={{ fontFamily: montserrat }}
              >
                Build Pa&apos;l Norte
              </p>
            </div>
            <p
              className="mt-3 max-w-xs text-sm leading-relaxed text-white/40"
              style={{ fontFamily: outfit }}
            >
              {dictionary.footer.copyright}
            </p>
            <PeserosCredit variant="inline" className="mt-5" />
          </div>

          {/* Event links */}
          <div>
            <p
              className="mb-4 text-[10px] font-black tracking-[0.3em] text-white/30"
              style={{ fontFamily: montserrat }}
            >
              {dictionary.footer.eventHeading}
            </p>
            <nav className="flex flex-col gap-2.5" aria-label="Footer event">
              {eventLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 transition-colors hover:text-[#aaff00]"
                  style={{ fontFamily: outfit }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal + sponsor */}
          <div>
            <p
              className="mb-4 text-[10px] font-black tracking-[0.3em] text-white/30"
              style={{ fontFamily: montserrat }}
            >
              {dictionary.footer.legalHeading}
            </p>
            <nav className="flex flex-col gap-2.5" aria-label="Footer legal">
              {navLinks.map((item) =>
                item.isLink ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-white/50 transition-colors hover:text-[#aaff00]"
                    style={{ fontFamily: outfit }}
                  >
                    {item.label}
                  </Link>
                ) : null,
              )}
              {onSponsorClick ? (
                <button
                  type="button"
                  onClick={onSponsorClick}
                  className="text-left text-sm text-white/50 transition-colors hover:text-[#aaff00]"
                  style={{ fontFamily: outfit }}
                >
                  {dictionary.footer.sponsor}
                </button>
              ) : (
                <Link
                  href={sponsorsHref}
                  className="text-sm text-white/50 transition-colors hover:text-[#aaff00]"
                  style={{ fontFamily: outfit }}
                >
                  {dictionary.footer.sponsor}
                </Link>
              )}
            </nav>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="my-8 h-px w-full bg-gradient-to-r from-transparent via-[#aaff00]/20 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Bottom row */}
        <motion.div
          className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-xs text-white/25" style={{ fontFamily: outfit }}>
            © {year} Build Pa&apos;l Norte. {dictionary.footer.rightsReserved}
          </p>
          <PeserosCredit variant="stacked" />
          <p
            className="text-xs tracking-[0.2em] text-white/20"
            style={{ fontFamily: montserrat }}
          >
            {dictionary.footer.locationTag}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
