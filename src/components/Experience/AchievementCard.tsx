"use client";

import { motion } from "framer-motion";
import type { Achievement } from "@/data/achievements";

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

export default function AchievementCard({ achievement, index }: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F1D]/60 p-6 backdrop-blur-xl transition-colors duration-300 hover:border-white/25"
    >
      {/* Glow border on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#4C7CFF]/30 via-transparent to-[#9D5CFF]/30" />
        <div className="absolute inset-[1px] rounded-2xl bg-[#0B0F1D]" />
      </div>

      <div className="relative">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl">
          {achievement.emoji}
        </span>
        <h4 className="mt-4 text-sm font-semibold leading-snug text-white">{achievement.title}</h4>
        <p className="mt-1.5 text-xs leading-relaxed text-white/50">{achievement.description}</p>
      </div>
    </motion.div>
  );
}