"use client";

import { useDictionary } from "@/components/LocaleProvider";
import { montserrat } from "@/lib/theme";

export function MarqueeTicker() {
  const { ticker } = useDictionary();
  const doubled = [...ticker.items, ...ticker.items];

  return (
    <div className="relative overflow-hidden border-y border-[#aaff00]/20 bg-[#aaff00]/5 py-3">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-black to-transparent" />

      <div
        className="flex animate-marquee gap-0 whitespace-nowrap"
        style={{ animationDuration: "28s" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex shrink-0 items-center gap-3 px-5 text-[11px] font-black tracking-[0.3em] text-[#aaff00]"
            style={{ fontFamily: montserrat }}
          >
            <svg width="10" height="10" viewBox="0 0 32 32" aria-hidden="true" className="shrink-0 opacity-70">
              <polygon points="16,2 28,9 16,16 4,9" fill="#aaff00" />
              <polygon points="4,9 16,16 16,30 4,23" fill="#55aa00" />
              <polygon points="28,9 16,16 16,30 28,23" fill="#77cc00" />
            </svg>
            {item}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </div>
  );
}
