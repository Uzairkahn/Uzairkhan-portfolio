"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { NavItem } from "@/data/navigation";
import { socialLinks } from "@/data/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  activeSection: string;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const panelVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
};

const linkListVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const linkItemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
};

export default function MobileMenu({ isOpen, onClose, navItems, activeSection }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          />

          {/* Drawer panel */}
          <motion.div
            key="panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="fixed right-0 top-0 z-50 flex h-full w-[78%] max-w-sm flex-col border-l border-white/10 bg-[#0B0F1D]/95 px-8 py-8 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs tracking-widest text-white/40">MENU</span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-full border border-white/10 p-2 text-white/70 transition hover:border-white/30 hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <motion.nav
              variants={linkListVariants}
              initial="hidden"
              animate="visible"
              className="mt-12 flex flex-1 flex-col gap-6"
            >
              {navItems.map((item, i) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <motion.a
                    key={item.href}
                    variants={linkItemVariants}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-baseline gap-3 text-2xl font-medium tracking-tight"
                  >
                    <span className="font-mono text-xs text-[#4C7CFF]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={isActive ? "text-white" : "text-white/50"}>
                      {item.label}
                    </span>
                  </motion.a>
                );
              })}
            </motion.nav>

            <div className="flex flex-col gap-3 border-t border-white/10 pt-6">
              <a
                href={socialLinks.resume}
                download
                className="w-full rounded-full bg-gradient-to-r from-[#4C7CFF] to-[#9D5CFF] px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Resume
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full border border-white/15 px-5 py-3 text-center text-sm font-semibold text-white/80"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}