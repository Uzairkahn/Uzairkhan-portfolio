"use client";

import { motion } from "framer-motion";
import { spaceGrotesk, jetbrainsMono } from "@/lib/fonts";
import { fadeUp } from "@/lib/motion";
import { experienceEntries, type ExperienceEntry } from "../../data/experience";
import { education } from "../../data/education";
import { achievements, type Achievement } from "../../data/achievements";
import ExperienceCard from "./ExperienceCard";
import SectionDivider from "./SectionDivider";
import EducationCard from "./EducationCard";
import AchievementCard from "./AchievementCard";
import ExperienceCTA from "./ExperienceCTA";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#05070E] px-6 py-28 sm:px-10 lg:px-16"
    >
      {/* Ambient background, consistent with the rest of the page */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[460px] w-[460px] rounded-full bg-[#9D5CFF]/10 blur-[130px]" />
        <div className="absolute bottom-1/4 left-0 h-[460px] w-[460px] rounded-full bg-[#4C7CFF]/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section title */}
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
            Professional Journey
          </motion.span>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className={`mx-auto mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl ${spaceGrotesk.className}`}
          >
            Experience that{" "}
            <span className="bg-gradient-to-r from-[#4C7CFF] to-[#9D5CFF] bg-clip-text text-transparent">
              speaks for itself
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
            Building scalable software through internships, freelance
            development, AI research, and continuous learning.
          </motion.p>
        </div>

        {/* Experience timeline */}
        <div className="mt-20">
          {experienceEntries.map((entry: ExperienceEntry, i: number) => (
            <ExperienceCard
              key={entry.company}
              entry={entry}
              index={i}
              isLast={i === experienceEntries.length - 1}
            />
          ))}
        </div>

        <SectionDivider />

        {/* Education */}
        <div>
          <motion.span
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className={`mx-auto flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60 backdrop-blur-md ${jetbrainsMono.className}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#4C7CFF]" />
            Education
          </motion.span>

          <div className="mt-10">
            <EducationCard entry={education} />
          </div>
        </div>

        <SectionDivider />

        {/* Certifications & Achievements */}
        <div>
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
              Certifications & Achievements
            </motion.span>

            <motion.h3
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className={`mx-auto mt-6 max-w-lg text-3xl font-semibold tracking-tight text-white sm:text-4xl ${spaceGrotesk.className}`}
            >
              Recognition along the way
            </motion.h3>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement: Achievement, i: number) => (
              <AchievementCard key={achievement.title} achievement={achievement} index={i} />
            ))}
          </div>
        </div>

        <ExperienceCTA />
      </div>
    </section>
  );
}