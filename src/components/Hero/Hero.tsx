"use client";

import { motion } from "framer-motion";
import { spaceGrotesk, jetbrainsMono } from "@/lib/fonts";
import { socialLinks } from "@/data/navigation";
import HeroIllustration from "./HeroIllustration";

const roles = ["Full Stack Developer", "MERN Stack Developer", "AI Enthusiast"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 * i, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#05070E] px-6 pt-28 pb-16 sm:px-10 lg:px-16"
    >
      {/* Ambient background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#4C7CFF]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[#9D5CFF]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* Left — text content */}
        <div className="text-center lg:text-left">
          <motion.span
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60 backdrop-blur-md ${jetbrainsMono.className}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#28C840]" />
            Available for internship opportunities
          </motion.span>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className={`mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl ${spaceGrotesk.className}`}
          >
            Uzair{" "}
            <span className="bg-gradient-to-r from-[#4C7CFF] to-[#9D5CFF] bg-clip-text text-transparent">
              Khan
            </span>
          </motion.h1>

          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 lg:justify-start"
          >
            {roles.map((role, i) => (
              <span key={role} className="flex items-center gap-3">
                <span className={`text-base text-white/60 sm:text-lg ${jetbrainsMono.className}`}>
                  {role}
                </span>
                {i < roles.length - 1 && <span className="h-1 w-1 rounded-full bg-white/20" />}
              </span>
            ))}
          </motion.div>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/50 lg:mx-0"
          >
            I build fast, well-structured web and mobile products end to end —
            from React and Node APIs to Android apps — with a growing focus on
            integrating AI into real, usable features.
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-[#4C7CFF] to-[#9D5CFF] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105"
            >
              View Projects
            </a>

            <a
              href={socialLinks.resume}
              download
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-colors duration-300 hover:border-white/30 hover:text-white"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex items-center justify-center gap-5 lg:justify-start"
          >
            {[
              { href: socialLinks.github, label: "GitHub" },
              { href: socialLinks.linkedin, label: "LinkedIn" },
              { href: socialLinks.email, label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors duration-300 hover:border-white/30 hover:text-white"
              >
                <span className="text-xs">{social.label[0]}</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <HeroIllustration />
        </motion.div>
      </div>
    </section>
  );
}