"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { spaceGrotesk, jetbrainsMono } from "@/lib/fonts";
import { fadeUp } from "@/lib/motion";
import { navItems, socialLinks } from "@/data/navigation";
import { cn, focusRing } from "@/lib/utils";
import BackToTop from "./BackToTop";

const builtWith = ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"];

const socials = [
  { label: "GitHub", href: socialLinks.github, icon: AiFillGithub },
  { label: "LinkedIn", href: socialLinks.linkedin, icon: AiFillLinkedin },
  { label: "Email", href: socialLinks.email, icon: Mail },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#05070E] px-6 pb-10 pt-16 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/3 top-0 h-[300px] w-[300px] rounded-full bg-[#4C7CFF]/8 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {/* Identity */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className={cn("flex w-fit items-center gap-2 rounded-full", focusRing)}>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#4C7CFF] to-[#9D5CFF] text-sm font-bold text-white">
                U
              </span>
              <span className={`text-sm tracking-widest text-white/70 ${jetbrainsMono.className}`}>
                uzair.dev
              </span>
            </a>
            <p className={`mt-4 text-sm font-medium text-white/80 ${spaceGrotesk.className}`}>
              Software Engineer
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/45">
              Full-stack and mobile developer building scalable, production-ready
              software across web, AI, and cross-platform apps.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className={`text-xs tracking-widest text-white/40 ${jetbrainsMono.className}`}>NAVIGATION</p>
            <nav aria-label="Footer" className="mt-4 flex flex-col gap-2.5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "w-fit rounded-sm text-sm text-white/55 transition-colors duration-300 hover:text-white",
                    focusRing
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div>
            <p className={`text-xs tracking-widest text-white/40 ${jetbrainsMono.className}`}>CONNECT</p>
            <div className="mt-4 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors duration-300 hover:border-white/25 hover:text-white",
                    focusRing
                  )}
                >
                  <social.icon size={15} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {/* Built with */}
          <div>
            <p className={`text-xs tracking-widest text-white/40 ${jetbrainsMono.className}`}>BUILT WITH</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {builtWith.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 sm:flex-row">
          <p className="text-xs text-white/35">© {year} Uzair Khan. All rights reserved.</p>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}