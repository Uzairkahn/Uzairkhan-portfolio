"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Sparkles, Play } from "lucide-react";
import { AiFillGithub } from "react-icons/ai";
import { spaceGrotesk, jetbrainsMono } from "@/lib/fonts";
import { fadeUp } from "@/lib/motion";
import { cn, focusRing } from "@/lib/utils";
import type { Project } from "@/data/projects";
import ProjectMockup from "./ProjectMockup";
import TechBadge from "./TechBadge";
import VideoModal from "./VideoModal";

interface ProjectCardProps {
  project: Project;
  index: number;
  reverse: boolean;
}

export default function ProjectCard({ project, index, reverse }: ProjectCardProps) {
  const [from, to] = project.accent;
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      <div
        className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Mockup side */}
        <ProjectMockup
          title={project.title}
          accent={project.accent}
          categoryIcon={project.categoryIcon}
          chips={[project.stack[0], project.stack[1] ?? project.stack[0]]}
          coverImage={project.coverImage}
        />

        {/* Content side */}
        <div>
          {project.flagship && (
            <motion.span
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              className={`mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-gradient-to-r from-[#4C7CFF]/15 to-[#9D5CFF]/15 px-3 py-1 text-[11px] text-white/70 ${jetbrainsMono.className}`}
            >
              <Sparkles size={12} className="text-[#9D5CFF]" />
              FLAGSHIP PROJECT
            </motion.span>
          )}

          <motion.span
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className={`inline-block rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/50 ${jetbrainsMono.className}`}
            style={{ background: `linear-gradient(90deg, ${from}14, ${to}14)` }}
          >
            {project.categoryLabel}
          </motion.span>

          <motion.h3
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className={`mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl ${spaceGrotesk.className}`}
          >
            {project.title}
          </motion.h3>

          <motion.p
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="mt-5 text-[15px] leading-relaxed text-white/55"
          >
            {project.overview}
          </motion.p>

          {/* Problem solved */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
          >
            <p className={`text-[11px] tracking-widest text-white/40 ${jetbrainsMono.className}`}>PROBLEM SOLVED</p>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{project.problem}</p>
          </motion.div>

          {/* Engineering highlights */}
          <motion.div
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mt-6"
          >
            <p className={`text-[11px] tracking-widest text-white/40 ${jetbrainsMono.className}`}>
              ENGINEERING HIGHLIGHTS
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-white/65">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0" style={{ color: from }} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Key features */}
          <motion.div
            custom={6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mt-6"
          >
            <p className={`text-[11px] tracking-widest text-white/40 ${jetbrainsMono.className}`}>KEY FEATURES</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60"
                >
                  {feature}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            custom={7}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mt-6"
          >
            <p className={`text-[11px] tracking-widest text-white/40 ${jetbrainsMono.className}`}>TECH STACK</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <TechBadge key={tech} label={tech} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Outcome */}
          <motion.p
            custom={8}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="mt-6 text-sm italic leading-relaxed text-white/45"
          >
            {project.outcome}
          </motion.p>

          {/* Buttons — GitHub only renders when a real repo URL exists;
              Live Demo takes priority over Watch Demo; if neither a
              real demo nor a video exists, no action button is shown. */}
          <motion.div
            custom={9}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-3"
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/80 transition-colors duration-300 hover:border-white/30 hover:text-white",
                  focusRing
                )}
              >
                <AiFillGithub size={16} />
                GitHub
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105",
                  focusRing
                )}
                style={{ background: `linear-gradient(90deg, ${from}, ${to})` }}
              >
                Live Demo
                <ArrowUpRight size={16} />
              </a>
            )}

            {!project.demoUrl && project.videoUrl && (
              <button
                onClick={() => setIsVideoOpen(true)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105",
                  focusRing
                )}
                style={{ background: `linear-gradient(90deg, ${from}, ${to})` }}
              >
                <Play size={15} fill="currentColor" />
                Watch Demo
              </button>
            )}
          </motion.div>
        </div>
      </div>

      {project.videoUrl && (
        <VideoModal
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          videoUrl={project.videoUrl}
          title={project.title}
        />
      )}

      {/* Divider between projects */}
      {index < 3 && (
        <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      )}
    </motion.div>
  );
}
