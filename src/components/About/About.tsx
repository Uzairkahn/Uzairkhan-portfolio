"use client";

import { motion } from "framer-motion";
import { spaceGrotesk, jetbrainsMono } from "@/lib/fonts";
import { fadeUp } from "@/lib/motion";
import { highlights, aboutStats } from "@/data/about";
import AboutCard from "./AboutCard";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#05070E] px-6 py-24 sm:px-10 lg:px-16"
    >
      {/* Ambient background, consistent with Hero */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-1/3 h-[420px] w-[420px] rounded-full bg-[#9D5CFF]/10 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-[420px] w-[420px] rounded-full bg-[#4C7CFF]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.span
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60 backdrop-blur-md ${jetbrainsMono.className}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#4C7CFF]" />
          About Me
        </motion.span>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          {/* Left — image placeholder */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#4C7CFF]/20 to-[#9D5CFF]/20 blur-2xl" />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0B0F1D]/70 backdrop-blur-xl">
              {/* Replace this block with a real <Image /> when ready */}
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-white/30">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="9" cy="10" r="1.75" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M4 17l5-5 3 3 3-3.5 5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                <span className={`text-xs tracking-widest ${jetbrainsMono.className}`}>YOUR PHOTO HERE</span>
              </div>

              {/* Gradient border ring on hover */}
              <div className="absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -right-5 rounded-2xl border border-white/10 bg-[#0B0F1D]/90 px-4 py-3 backdrop-blur-xl"
            >
              <p className={`text-lg font-semibold text-white ${spaceGrotesk.className}`}>BS CS</p>
              <p className="text-[11px] text-white/50">Sukkur IBA, 2026</p>
            </motion.div>
          </motion.div>

          {/* Right — content */}
          <div>
            <motion.h2
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className={`text-4xl font-semibold tracking-tight text-white sm:text-5xl ${spaceGrotesk.className}`}
            >
              Building products,{" "}
              <span className="bg-gradient-to-r from-[#4C7CFF] to-[#9D5CFF] bg-clip-text text-transparent">
                not just features
              </span>
            </motion.h2>

            <motion.p
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/50"
            >
              I recently graduated with a BS in Computer Science and I'm currently
              splitting my time across two internships as a full-stack and mobile
              developer. I like owning things end to end — planning, building, and
              shipping — and I'm increasingly focused on weaving AI into products
              in ways that actually help people, not just as a buzzword.
            </motion.p>

            <motion.div
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-2.5"
            >
              {highlights.map((item) => (
                <span
                  key={item.label}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-md transition-colors duration-300 hover:border-white/25 hover:text-white"
                >
                  {item.label}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stat cards */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {aboutStats.map((stat, i) => (
            <AboutCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}