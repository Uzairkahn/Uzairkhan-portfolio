"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
  { label: "React", style: "top-[6%] left-[2%]", delay: 0, drift: 8 },
  { label: "Node.js", style: "top-[14%] right-[-2%]", delay: 0.6, drift: 10 },
  { label: "MongoDB", style: "bottom-[18%] left-[-4%]", delay: 1.2, drift: 9 },
  { label: "TypeScript", style: "bottom-[4%] right-[6%]", delay: 1.8, drift: 7 },
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

  // Subtle 3D tilt for the terminal card, driven by cursor position
  // over the illustration. Springs smooth it into a premium, weighty feel.
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, { stiffness: 150, damping: 20, mass: 0.5 });
  const rotateY = useSpring(rawRotateY, { stiffness: 150, damping: 20, mass: 0.5 });
  // A matching light-reflection position, so the glass sheen tracks the tilt.
  const sheenX = useTransform(rotateY, [-9, 9], [20, 80]);
  const sheenY = useTransform(rotateX, [9, -9], [20, 80]);
  const sheenBackground = useTransform(
    [sheenX, sheenY],
    ([x, y]: number[]) =>
      `radial-gradient(220px circle at ${x}% ${y}%, rgba(255,255,255,0.14), transparent 60%)`
  );

  useEffect(() => {
    // mouse.x/y are 0-100 percentages relative to the container;
    // map the offset from center to a small rotation range.
    rawRotateY.set(((mouse.x - 50) / 50) * 9);
    rawRotateX.set(((mouse.y - 50) / 50) * -9);
  }, [mouse.x, mouse.y, rawRotateX, rawRotateY]);

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
          className={`absolute ${chip.style} rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 shadow-[0_8px_24px_rgba(0,0,0,0.25)] backdrop-blur-md transition-colors duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white`}
          animate={{ y: [0, -chip.drift, 0], x: [0, chip.drift / 3, 0], rotate: [0, 1.5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: chip.delay }}
          whileHover={{ scale: 1.08, y: -chip.drift, transition: { duration: 0.25 } }}
        >
          {chip.label}
        </motion.div>
      ))}

      {/* Terminal card — signature element, with mouse-driven 3D tilt */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1200,
          transformStyle: "preserve-3d",
        }}
        className="group/card relative z-10 w-[88%] max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F1D]/70 shadow-[0_20px_60px_rgba(0,0,0,0.45),0_2px_0_rgba(255,255,255,0.06)_inset,0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_28px_80px_rgba(0,0,0,0.55),0_30px_100px_rgba(76,124,255,0.15),0_2px_0_rgba(255,255,255,0.08)_inset]"
      >
        {/* Glass reflection sheen — follows the tilt direction */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
          style={{ background: sheenBackground }}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        {/* Title bar */}
        <div className="relative flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <span className={`ml-2 text-[11px] text-white/40 ${jetbrainsMono.className}`}>
            stack.ts
          </span>
        </div>

        {/* Code body */}
        <div className={`relative min-h-[176px] px-5 py-4 text-[13px] leading-relaxed text-[#8FE3B0] ${jetbrainsMono.className}`}>
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