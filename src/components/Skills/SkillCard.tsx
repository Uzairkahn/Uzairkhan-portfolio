"use client";

import { motion } from "framer-motion";
import { spaceGrotesk } from "@/lib/fonts";
import { scaleIn } from "@/lib/motion";
import type { SkillCategory } from "@/data/skills";
import SkillIcon from "./SkillIcon";

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

export default function SkillCard({ category, index }: SkillCardProps) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={scaleIn}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F1D]/60 p-6 backdrop-blur-xl transition-colors duration-300 hover:border-white/20"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-[#4C7CFF]/0 to-[#9D5CFF]/0 blur-2xl transition-all duration-500 group-hover:from-[#4C7CFF]/20 group-hover:to-[#9D5CFF]/20" />

      <div className="relative flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#9D5CFF]">
          <SkillIcon name={category.icon} />
        </div>
        <h3 className={`text-lg font-semibold text-white ${spaceGrotesk.className}`}>
          {category.title}
        </h3>
      </div>

      <div className="relative mt-6 flex flex-col gap-4">
        {category.skills.map((skill, i) => (
          <div key={skill.name}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-sm text-white/70">{skill.name}</span>
              <span className="text-xs text-white/40">{skill.level}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1, delay: 0.15 + i * 0.08, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-[#4C7CFF] to-[#9D5CFF]"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}