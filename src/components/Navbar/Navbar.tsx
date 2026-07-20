"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { navItems, socialLinks } from "@/data/navigation";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { jetbrainsMono } from "@/lib/fonts";
import { cn, focusRing } from "@/lib/utils";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const { isScrolled } = useScrollPosition(20);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observerRef.current?.observe(section));
    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={cn(
            "mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-500",
            isScrolled
              ? "border-white/10 bg-[#0B0F1D]/70 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          )}
        >
          <a href="#home" className={cn("flex items-center gap-2 rounded-full", focusRing)}>
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#4C7CFF] to-[#9D5CFF] text-sm font-bold text-white">
              U
            </span>
            <span className={cn("hidden text-sm tracking-widest text-white/70 sm:block", jetbrainsMono.className)}>
              uzair.dev
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={activeSection === item.href.replace("#", "")}
              />
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={socialLinks.resume}
              download
              className={cn(
                "rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-white/30 hover:text-white",
                focusRing
              )}
            >
              Resume
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "rounded-full bg-gradient-to-r from-[#4C7CFF] to-[#9D5CFF] px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105",
                focusRing
              )}
            >
              GitHub
            </a>
          </div>

          <button
            onClick={() => setIsMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            className={cn("flex flex-col items-end gap-1.5 rounded-sm p-1 md:hidden", focusRing)}
          >
            <span className="h-[1.5px] w-6 bg-white/80" />
            <span className="h-[1.5px] w-4 bg-white/80" />
          </button>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        navItems={navItems}
        activeSection={activeSection}
      />
    </>
  );
}