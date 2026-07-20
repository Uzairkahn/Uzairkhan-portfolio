"use client";

import { motion } from "framer-motion";
import { spaceGrotesk, jetbrainsMono } from "@/lib/fonts";
import { fadeUp, blurReveal } from "@/lib/motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#05070E] px-6 py-28 sm:px-10 lg:px-16"
    >
      {/* Ambient background, consistent with the rest of the page */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-[460px] w-[460px] rounded-full bg-[#4C7CFF]/10 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-[#9D5CFF]/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
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
            <span className="h-1.5 w-1.5 rounded-full bg-[#4C7CFF]" />
            Featured Projects
          </motion.span>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={blurReveal}
            className={`mx-auto mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl ${spaceGrotesk.className}`}
          >
            Real-world software,{" "}
            <span className="bg-gradient-to-r from-[#4C7CFF] to-[#9D5CFF] bg-clip-text text-transparent">
              engineered end to end
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
            Real-world software engineered through internships, freelance work,
            and academic research.
          </motion.p>
        </div>

        {/* Project case studies */}
        <div className="mt-24 flex flex-col gap-0">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}