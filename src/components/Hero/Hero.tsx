"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { spaceGrotesk, jetbrainsMono } from "@/lib/fonts";
import { socialLinks } from "@/data/navigation";
import { cn, focusRing } from "@/lib/utils";
import { useMousePosition } from "@/hooks/useMousePosition";
import HeroIllustration from "./HeroIllustration";

const socialIcons = [
  { href: socialLinks.github, label: "GitHub", icon: AiFillGithub },
  { href: socialLinks.linkedin, label: "LinkedIn", icon: AiFillLinkedin },
  { href: socialLinks.email, label: "Email", icon: Mail },
];

const roles = ["Full Stack Developer • Mobile App Developer • AI Engineer"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 * i, ease: "easeOut" as const },
  }),
};

// Deterministic pseudo-random ambient particles — derived from index
// (not Math.random) so server and client render the same positions.
const PARTICLES = Array.from({ length: 16 }, (_, i) => {
  const seed = i * 137.508; // golden-angle spread, avoids a visible grid
  return {
    id: i,
    left: seed % 100,
    top: (seed * 1.618) % 100,
    size: 2 + (i % 3),
    duration: 10 + (i % 6) * 2,
    delay: (i % 8) * 0.6,
  };
});

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouse = useMousePosition(sectionRef);
  const parallaxX = (mouse.x - 50) * 0.08;
  const parallaxY = (mouse.y - 50) * 0.08;

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#05070E] px-6 pt-28 pb-16 sm:px-10 lg:px-16"
    >
      {/* Ambient aurora background — layered, slowly drifting blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{ transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)` }}
        >
          <div className="animate-aurora-a absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#4C7CFF]/10 blur-[120px]" />
          <div className="animate-aurora-b absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[#9D5CFF]/10 blur-[120px]" />
          <div className="animate-aurora-c absolute left-1/2 top-1/3 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#8FE3B0]/[0.06] blur-[110px]" />
        </div>

        {/* Layered lighting — soft top-down key light + cursor-follow glow */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.04] to-transparent" />
        <div
          className="absolute inset-0 opacity-60 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mouse.x}% ${mouse.y}%, rgba(76,124,255,0.06), transparent 60%)`,
          }}
        />

        {/* Floating ambient particles */}
        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-white/30"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{ y: [0, -22, 0], opacity: [0, 0.6, 0] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
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
            Open to Software Engineering Opportunities
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
            I design and build web and mobile applications, taking products
            from idea to deployment with a focus on scalability and the
            people who&apos;ll actually use them. Lately that includes weaving
            AI integration into real features rather than bolting it on.
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
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#4C7CFF] to-[#9D5CFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(76,124,255,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(76,124,255,0.45)]"
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
            </a>

            <a
              href={socialLinks.resume}
              download
              className="relative rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 text-sm font-semibold text-white/80 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white hover:shadow-[0_0_24px_rgba(255,255,255,0.08)]"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex items-center justify-center gap-4 lg:justify-start"
          >
            {socialIcons.map((social) => (
              <div key={social.label} className="group/tip relative">
                <motion.a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -3, scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:text-white hover:shadow-[0_0_22px_rgba(76,124,255,0.35)]",
                    focusRing
                  )}
                >
                  <social.icon size={17} strokeWidth={1.75} />
                </motion.a>

                {/* Tooltip */}
                <span
                  role="tooltip"
                  className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-[#0B0F1D] px-2.5 py-1 text-[11px] text-white/70 opacity-0 shadow-lg transition-opacity duration-200 group-hover/tip:opacity-100"
                >
                  {social.label}
                </span>
              </div>
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