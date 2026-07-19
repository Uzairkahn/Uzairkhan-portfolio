"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { spaceGrotesk, jetbrainsMono } from "@/lib/fonts";
import type { EducationEntry } from "@/data/education";

interface EducationCardProps {
  entry: EducationEntry;
}

export default function EducationCard({ entry }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group relative mx-auto max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F1D]/60 p-8 backdrop-blur-xl transition-colors duration-300 hover:border-white/20 sm:p-10"
    >
      <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-[#4C7CFF]/0 to-[#9D5CFF]/0 blur-3xl transition-all duration-500 group-hover:from-[#4C7CFF]/20 group-hover:to-[#9D5CFF]/20" />

      <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#4C7CFF]/15 to-[#9D5CFF]/15 text-[#9D5CFF]">
          <GraduationCap size={28} strokeWidth={1.5} />
        </div>

        <div>
          <p className={`text-[11px] tracking-widest text-white/40 ${jetbrainsMono.className}`}>EDUCATION</p>
          <h3 className={`mt-2 text-2xl font-semibold text-white ${spaceGrotesk.className}`}>
            {entry.university}
          </h3>
          <p className="mt-1.5 text-sm text-white/60">{entry.degree}</p>
          <span
            className={`mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50 ${jetbrainsMono.className}`}
          >
            Graduated {entry.graduated}
          </span>
        </div>
      </div>
    </motion.div>
  );
}