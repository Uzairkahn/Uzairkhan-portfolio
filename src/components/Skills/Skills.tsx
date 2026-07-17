"use client";

import { motion } from "framer-motion";
import { spaceGrotesk, jetbrainsMono } from "@/lib/fonts";
import { fadeUp } from "@/lib/motion";
import { skillCategories } from "@/data/skills";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#05070E] px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-[420px] w-[420px] rounded-full bg-[#4C7CFF]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 h-[420px] w-[420px] rounded-full bg-[#9D5CFF]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="text-center">
          <motion.span
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60 backdrop-blur-md ${jetbrainsMono.className}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#9D5CFF]" />
            Skills
          </motion.span>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className={`mx-auto mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl ${spaceGrotesk.className}`}
          >
            Tools I reach for{" "}
            <span className="bg-gradient-to-r from-[#4C7CFF] to-[#9D5CFF] bg-clip-text text-transparent">
              every day
            </span>
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-base text-white/50"
          >
            A snapshot of the stack I use to take a product from idea to
            production, across web, mobile, and AI-assisted features.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <SkillCard key={category.title} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}