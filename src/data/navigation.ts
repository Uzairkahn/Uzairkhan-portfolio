export interface NavItem {
  label: string;
  href: string;
}

// Section anchors — each id must match the section's `id` attribute
// once About/Skills/Projects/Experience/Contact are built.
export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = {
  github: "https://github.com/Uzairkahn",
  linkedin: "https://linkedin.com/in/uzair-khan-616048385",
  email: "mailto:hello@uzairkhan.dev", // TODO: replace with your real email
  resume: "/resume.pdf", // TODO: place your resume PDF in /public
};