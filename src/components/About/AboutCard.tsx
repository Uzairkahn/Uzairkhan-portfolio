"use client";

import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { spaceGrotesk } from "@/lib/fonts";
import { scaleIn } from "@/lib/motion";
import type { AboutStat } from "@/data/about";

const icons: Record<AboutStat["icon"], ReactElement> = {
  briefcase: (
    <path
      d="M3 8.5h18v9a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 17.5v-9zM8 8.5V6a2 2 0 012-2h4a2 2 0 012 2v2.5M3 13h18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  folder: (
    <path
      d="M3 7a1.5 1.5 0 011.5-1.5h4.4l1.6 2h9a1.5 1.5 0 011.5 1.5v8.5A1.5 1.5 0 0119.5 19h-15A1.5 1.5 0 013 17.5V7z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  cpu: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path
        d="M9.5 3.5v3M14.5 3.5v3M9.5 17.5v3M14.5 17.5v3M3.5 9.5h3M3.5 14.5h3M17.5 9.5h3M17.5 14.5h3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </>
  ),
};

interface AboutCardProps {
  stat: AboutStat;
  index: number;
}

/**
 * Splits "10+" into a numeric target (10) and a suffix ("+") so the
 * number can animate on scroll while the suffix stays static. Falls
 * back to the raw string for any non-numeric stat value.
 */
function parseStatValue(value: string): { target: number | null; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { target: null, suffix: value };
  return { target: Number(match[1]), suffix: match[2] };
}

export default function AboutCard({ stat, index }: AboutCardProps) {
  const { target, suffix } = parseStatValue(stat.value);
  const [displayValue, setDisplayValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started || target === null) return;
    const controls = animate(0, target, {
      duration: 1.3,
      ease: "easeOut",
      onUpdate: (v) => setDisplayValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [started, target]);

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={scaleIn}
      onViewportEnter={() => setStarted(true)}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F1D]/60 p-6 backdrop-blur-xl transition-colors duration-300 hover:border-white/20"
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-[#4C7CFF]/0 to-[#9D5CFF]/0 blur-2xl transition-all duration-500 group-hover:from-[#4C7CFF]/25 group-hover:to-[#9D5CFF]/25"
        aria-hidden="true"
      />

      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#4C7CFF]">
        <svg width="20" height="20" viewBox="0 0 24 24">
          {icons[stat.icon]}
        </svg>
      </div>

      <p className={`relative mt-4 text-3xl font-semibold text-white ${spaceGrotesk.className}`}>
        {target !== null ? `${displayValue}${suffix}` : stat.value}
      </p>
      <p className="relative mt-1 text-sm text-white/50">{stat.label}</p>
    </motion.div>
  );
}
