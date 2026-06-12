"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame } from "motion/react";
import Link from "next/link";
import { montserrat, outfit, accent } from "@/lib/theme";
import StarBorder from "@/components/reactbits/StarBorder";

/* ── glitched digit ──────────────────────────────────────────── */
function GlitchDigit({ char }: { char: string }) {
  const chars = "01ABCDEF#@!%&?XZ404";
  const [display, setDisplay] = useState(char);
  const [glitching, setGlitching] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const schedule = () => {
      const delay = 1800 + Math.random() * 4000;
      timerRef.current = setTimeout(() => {
        setGlitching(true);
        let iter = 0;
        const speed = setInterval(() => {
          setDisplay(chars[Math.floor(Math.random() * chars.length)]);
          iter++;
          if (iter > 8) {
            clearInterval(speed);
            setDisplay(char);
            setGlitching(false);
            schedule();
          }
        }, 55);
      }, delay);
    };
    schedule();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [char]);

  return (
    <span
      className="relative inline-block tabular-nums"
      style={{
        color: glitching ? "rgba(255,255,255,0.9)" : accent,
        textShadow: glitching
          ? `0 0 18px #fff, 0 0 40px rgba(170,255,0,0.4)`
          : `0 0 40px rgba(170,255,0,0.7), 0 0 80px rgba(170,255,0,0.35), 0 0 160px rgba(170,255,0,0.15)`,
        transition: "color 0.05s, text-shadow 0.05s",
      }}
    >
      {display}
      {glitching && (
        <>
          <span
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              color: "#ff0055",
              transform: "translate(-3px, 1px)",
              clipPath: "polygon(0 40%,100% 40%,100% 60%,0 60%)",
            }}
            aria-hidden
          >
            {display}
          </span>
          <span
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              color: "#00ffff",
              transform: "translate(3px, -1px)",
              clipPath: "polygon(0 0,100% 0,100% 35%,0 35%)",
            }}
            aria-hidden
          >
            {display}
          </span>
        </>
      )}
    </span>
  );
}

/* ── animated scan line ──────────────────────────────────────── */
function ScanLine() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg,transparent 0%,rgba(170,255,0,0.6) 20%,rgba(170,255,0,0.9) 50%,rgba(170,255,0,0.6) 80%,transparent 100%)",
          boxShadow: "0 0 12px 2px rgba(170,255,0,0.4)",
        }}
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

/* ── CRT noise canvas ────────────────────────────────────────── */
function NoiseCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useAnimationFrame(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { width, height } = canvas;
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const v = Math.random() > 0.97 ? Math.floor(Math.random() * 60) : 0;
      data[i] = data[i + 1] = data[i + 2] = v;
      data[i + 3] = v > 0 ? 120 : 0;
    }
    ctx.putImageData(imageData, 0, 0);
  });

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-30 mix-blend-screen"
      aria-hidden
    />
  );
}

/* ── terminal typing lines ───────────────────────────────────── */
const terminalLines = [
  "> SYSTEM BOOT… [OK]",
  "> LOCATING PAGE… [FAILED]",
  "> ERR 0x404: RESOURCE_NOT_FOUND",
  "> INITIATING RECOVERY PROTOCOL…",
  "> SCANNING FILESYSTEM…",
  "> ANOMALY DETECTED IN SECTOR 7-G",
  "> CONTAINMENT BREACH — TIMELINE CORRUPTED",
  "> RECOMMEND IMMEDIATE EXFILTRATION",
];

function TerminalBlock() {
  const [lines, setLines] = useState<string[]>([]);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    let current = "";

    const tick = setInterval(() => {
      if (lineIdx >= terminalLines.length) {
        clearInterval(tick);
        return;
      }
      const target = terminalLines[lineIdx];
      if (charIdx < target.length) {
        current += target[charIdx];
        setLines((prev) => {
          const next = [...prev];
          next[lineIdx] = current;
          return next;
        });
        charIdx++;
      } else {
        lineIdx++;
        charIdx = 0;
        current = "";
      }
    }, 28);

    const blink = setInterval(() => setCursor((c) => !c), 530);
    return () => {
      clearInterval(tick);
      clearInterval(blink);
    };
  }, []);

  return (
    <div
      className="relative overflow-hidden rounded-xl border border-[#aaff00]/20 bg-black/60 p-4 sm:p-5 backdrop-blur-sm"
      style={{ fontFamily: "var(--font-geist-mono), monospace" }}
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#aaff00]/70" />
        <span
          className="ml-2 text-[10px] tracking-[0.3em] text-white/30 uppercase"
          style={{ fontFamily: montserrat }}
        >
          SYSTEM TERMINAL v2.4.0
        </span>
      </div>
      <div className="space-y-0.5 text-xs sm:text-sm">
        {lines.map((line, i) => {
          const isError =
            line.includes("ERR") ||
            line.includes("FAILED") ||
            line.includes("BREACH");
          const isOk = line.includes("[OK]");
          return (
            <div key={i}>
              <span
                style={{
                  color: isError
                    ? "#ff4466"
                    : isOk
                      ? accent
                      : "rgba(255,255,255,0.6)",
                }}
              >
                {line}
              </span>
              {i === lines.length - 1 && (
                <span
                  style={{ color: accent, opacity: cursor ? 1 : 0 }}
                  aria-hidden
                >
                  █
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── floating hex particles ──────────────────────────────────── */
const HEX_VALS = ["0x404", "NULL", "ERR", "0x00", "NaN", "EOF", "VOID", "//"];

function FloatingParticle({ i }: { i: number }) {
  const x = 5 + ((i * 137.508) % 90);
  const delay = (i * 0.7) % 6;
  const dur = 8 + (i % 5) * 2;

  return (
    <motion.div
      className="pointer-events-none absolute select-none text-[10px] sm:text-xs font-mono"
      style={{
        left: `${x}%`,
        color: `rgba(170,255,0,${0.08 + (i % 4) * 0.04})`,
        fontFamily: "var(--font-geist-mono), monospace",
      }}
      initial={{ bottom: "-5%" }}
      animate={{ bottom: "105%" }}
      transition={{
        duration: dur,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {HEX_VALS[i % HEX_VALS.length]}
    </motion.div>
  );
}

/* ── grid overlay ────────────────────────────────────────────── */
function GridOverlay() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      aria-hidden
      style={{
        backgroundImage: `
          linear-gradient(rgba(170,255,0,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(170,255,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
        maskImage:
          "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
      }}
    />
  );
}

/* ── main 404 page ───────────────────────────────────────────── */
export default function NotFound() {
  return (
    <main
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-black px-4 py-16"
      style={{ fontFamily: outfit }}
    >
      {/* ── ambient radial glows ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#aaff00]/5 blur-[120px]" />
        <div className="absolute left-[20%] top-[10%] h-72 w-72 rounded-full bg-[#aaff00]/4 blur-[90px]" />
        <div className="absolute right-[15%] bottom-[15%] h-64 w-64 rounded-full bg-[#aaff00]/3 blur-[80px]" />
      </div>

      {/* ── grid ── */}
      <GridOverlay />

      {/* ── floating hex particles ── */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        {Array.from({ length: 18 }).map((_, i) => (
          <FloatingParticle key={i} i={i} />
        ))}
      </div>

      {/* ── 404 hero number ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="relative mb-2"
      >
        {/* glitch shadow layers */}
        <div
          className="pointer-events-none absolute inset-0 select-none opacity-20"
          aria-hidden
          style={{
            fontFamily: montserrat,
            fontSize: "clamp(120px,22vw,240px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            color: "#ff0055",
            transform: "translate(-4px, 2px)",
            filter: "blur(1px)",
          }}
        >
          404
        </div>
        <div
          className="pointer-events-none absolute inset-0 select-none opacity-20"
          aria-hidden
          style={{
            fontFamily: montserrat,
            fontSize: "clamp(120px,22vw,240px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            color: "#00ffff",
            transform: "translate(4px, -2px)",
            filter: "blur(1px)",
          }}
        >
          404
        </div>

        {/* main number with per-digit glitch */}
        <div
          className="relative z-10 select-none"
          style={{
            fontFamily: montserrat,
            fontSize: "clamp(120px,22vw,240px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          <GlitchDigit char="4" />
          <GlitchDigit char="0" />
          <GlitchDigit char="4" />
        </div>

        {/* scan line over the hero number */}
        <ScanLine />

        {/* CRT noise */}
        <NoiseCanvas />
      </motion.div>

      {/* ── subtitle ── */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        className="mb-2 text-center"
      >
        <h1
          className="text-2xl font-black tracking-[0.2em] uppercase sm:text-3xl"
          style={{ fontFamily: montserrat, color: "rgba(255,255,255,0.95)" }}
        >
          PAGE{" "}
          <span style={{ color: accent }} className="neon-glow">
            NOT FOUND
          </span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        className="mb-10 max-w-md text-center text-sm text-white/40 sm:text-base"
      >
        The resource you&apos;re looking for has been wiped from the timeline.
        Sector 7-G is unreachable. You should not be here.
      </motion.p>

      {/* ── terminal block ── */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
        className="mb-10 w-full max-w-lg"
      >
        <TerminalBlock />
      </motion.div>

      {/* ── CTA buttons ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        className="flex flex-col items-center gap-4 sm:flex-row"
      >
        <Link href="/">
          <StarBorder color={accent} speed="5s">
            <span style={{ fontFamily: montserrat }} className="text-[#aaff00]">
              RETURN TO BASE
            </span>
          </StarBorder>
        </Link>

        <Link href="/">
          <button
            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-xs tracking-[0.25em] text-white/50 uppercase backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white/80 active:scale-95"
            style={{ fontFamily: montserrat }}
          >
            ABORT MISSION
          </button>
        </Link>
      </motion.div>

      {/* ── bottom status bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-[#aaff00]/10 bg-[#aaff00]/3 px-5 py-2"
      >
        <span
          className="text-[9px] tracking-[0.3em] text-white/20 uppercase"
          style={{ fontFamily: montserrat }}
        >
          STATUS: CRITICAL
        </span>
        <StatusTicker />
        <span
          className="text-[9px] tracking-[0.3em] text-white/20 uppercase"
          style={{ fontFamily: montserrat }}
        >
          CODE: 0x404
        </span>
      </motion.div>
    </main>
  );
}

/* ── scrolling status ticker ─────────────────────────────────── */
function StatusTicker() {
  const msg =
    "RESOURCE_NOT_FOUND  ·  TIMELINE_CORRUPTED  ·  SECTOR_7G_UNREACHABLE  ·  CONTAINMENT_BREACH  ·  ";

  return (
    <div className="overflow-hidden w-48 sm:w-72">
      <motion.span
        className="inline-block whitespace-nowrap text-[9px] tracking-[0.2em] text-[#aaff00]/30 uppercase"
        style={{ fontFamily: montserrat }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        {msg}
        {msg}
      </motion.span>
    </div>
  );
}
