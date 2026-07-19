"use client";

import { motion } from "framer-motion";
import { Building2, CheckCircle2, Star } from "lucide-react";
import { spaceGrotesk, jetbrainsMono } from "@/lib/fonts";
import { fadeUp } from "@/lib/motion";
import TechBadge from "@/components/Projects/TechBadge";
import type { ExperienceEntry } from "../../data/experience";

interface ExperienceCardProps {
  entry: ExperienceEntry;
  index: number;
  isLast: boolean;
}

export default function ExperienceCard({ entry, index, isLast }: ExperienceCardProps) {
  return (
    <div className="relative pl-14 sm:pl-20">
      {/* Timeline rail */}
      {!isLast && (
        <motion.span
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          style={{ transformOrigin: "top" }}
          className="absolute left-[19px] top-10 h-full w-px bg-gradient-to-b from-[#4C7CFF]/50 via-white/10 to-transparent sm:left-[27px]"
        />
      )}

      {/* Timeline node */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0B0F1D] shadow-[0_0_20px_rgba(76,124,255,0.25)] sm:h-14 sm:w-14"
      >
        {entry.current && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4C7CFF]/20" />
        )}
        <Building2 size={18} className="relative text-[#4C7CFF] sm:h-5 sm:w-5" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        whileHover={{ y: -4 }}
        className="group relative mb-16 overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F1D]/60 p-6 backdrop-blur-xl transition-colors duration-300 hover:border-white/20 sm:p-8"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-[#4C7CFF]/0 to-[#9D5CFF]/0 blur-3xl transition-all duration-500 group-hover:from-[#4C7CFF]/15 group-hover:to-[#9D5CFF]/15" />

        <div className="relative flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className={`text-xl font-semibold text-white sm:text-2xl ${spaceGrotesk.className}`}>
                {entry.company}
              </h3>
              {entry.current && (
                <span className={`inline-flex items-center gap-1.5 rounded-full border border-[#28C840]/30 bg-[#28C840]/10 px-2.5 py-1 text-[10px] text-[#28C840] ${jetbrainsMono.className}`}>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#28C840]" />
                  CURRENT
                </span>
              )}
              {entry.badge === "fiverr" && (
                <span className={`inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-gradient-to-r from-[#4C7CFF]/15 to-[#9D5CFF]/15 px-2.5 py-1 text-[10px] text-white/70 ${jetbrainsMono.className}`}>
                  <Star size={11} className="text-[#9D5CFF]" fill="currentColor" />
                  FIVERR LEVEL 2 SELLER
                </span>
              )}
            </div>
            <p className="mt-1 text-sm font-medium text-[#4C7CFF]">{entry.role}</p>
          </div>
          <span className={`rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50 ${jetbrainsMono.className}`}>
            {entry.duration}
          </span>
        </div>

        <p className="relative mt-5 text-sm leading-relaxed text-white/55">{entry.overview}</p>

        <div className="relative mt-6">
          <p className={`text-[11px] tracking-widest text-white/40 ${jetbrainsMono.className}`}>FEATURED WORK</p>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {entry.featuredWork.map((work) => (
              <li key={work} className="flex items-start gap-2 text-sm text-white/65">
                <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[#9D5CFF]" />
                <span>{work}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mt-6">
          <p className={`text-[11px] tracking-widest text-white/40 ${jetbrainsMono.className}`}>ENGINEERING HIGHLIGHTS</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {entry.highlights.map((h) => (
              <span key={h} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60">
                {h}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mt-6">
          <p className={`text-[11px] tracking-widest text-white/40 ${jetbrainsMono.className}`}>TECHNOLOGIES USED</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {entry.tech.map((tech, i) => (
              <TechBadge key={tech} label={tech} index={i} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}