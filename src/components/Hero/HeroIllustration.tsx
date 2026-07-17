"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { jetbrainsMono } from "@/lib/fonts";
import { useMousePosition } from "@/hooks/useMousePosition";

// The lines the terminal card types out — reflects the real stack,
// not filler text, so the illustration is specific to this developer.
const CODE_LINES = [
  "const stack = {",
  "  frontend: 'React, Next.js',",
  "  backend: 'Node.js, Express',",
  "  database: 'MongoDB',",
  "  focus: 'AI-integrated apps',",
  "};",
];

const TECH_CHIPS = [
  { label: "React", style: "top-[6%] left-[2%]", delay: 0 },
  { label: "Node.js", style: "top-[14%] right-[-2%]", delay: 0.6 },
  { label: "MongoDB", style: "bottom-[18%] left-[-4%]", delay: 1.2 },
  { label: "TypeScript", style: "bottom-[4%] right-[6%]", delay: 1.8 },
];

/**
 * Pure CSS/Tailwind + Framer Motion developer illustration.
 * No stock imagery — built from gradient blobs, a glassmorphic
 * "terminal" card with a typewriter effect, and floating tech chips.
 */
export default function HeroIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useMousePosition(containerRef);
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");

  // Simple line-by-line typewriter effect, loops once then holds.
  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let cancelled = false;

    const typeNext = () => {
      if (cancelled || lineIndex >= CODE_LINES.length) return;
      const line = CODE_LINES[lineIndex];

      if (charIndex <= line.length) {
        setCurrentLine(line.slice(0, charIndex));
        charIndex++;
        setTimeout(typeNext, 28);
      } else {
        setTypedLines((prev) => [...prev, line]);
        setCurrentLine("");
        lineIndex++;
        charIndex = 0;
        setTimeout(typeNext, 220);
      }
    };

    const start = setTimeout(typeNext, 700);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center sm:h-[480px] lg:h-[560px]"
    >
      {/* Mouse-follow glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[40px] opacity-70 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mouse.x}% ${mouse.y}%, rgba(157,92,255,0.18), transparent 70%)`,
        }}
      />

      {/* Animated gradient blobs */}
      <motion.div
        className="absolute -left-10 top-4 h-56 w-56 rounded-full bg-[#4C7CFF]/30 blur-[70px]"
        animate={{ x: [0, 20, 0], y: [0, -16, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-6 bottom-6 h-64 w-64 rounded-full bg-[#9D5CFF]/30 blur-[80px]"
        animate={{ x: [0, -18, 0], y: [0, 20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Soft noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[40px] opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Floating tech chips */}
      {TECH_CHIPS.map((chip) => (
        <motion.div
          key={chip.label}
          className={`absolute ${chip.style} rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 backdrop-blur-md`}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: chip.delay }}
        >
          {chip.label}
        </motion.div>
      ))}

      {/* Terminal card — signature element */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        whileHover={{ rotate: 0, scale: 1.02 }}
        className="relative z-10 w-[88%] max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F1D]/70 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <span className={`ml-2 text-[11px] text-white/40 ${jetbrainsMono.className}`}>
            stack.ts
          </span>
        </div>

        {/* Code body */}
        <div className={`min-h-[176px] px-5 py-4 text-[13px] leading-relaxed text-[#8FE3B0] ${jetbrainsMono.className}`}>
          {typedLines.map((line, i) => (
            <div key={i} className="text-white/70">
              {line}
            </div>
          ))}
          <div className="text-white/70">
            {currentLine}
            <span className="ml-0.5 inline-block h-3.5 w-[2px] animate-pulse bg-[#4C7CFF] align-middle" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}