export interface NavItem {
  label: string;
  href: string;
}

// Section anchors — each id must match the section's `id` attribute
// Current page order: Home, About, Skills, Projects, Experience, Contact.
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
  email: "mailto:uzairkhan4645632@gmail.com", // TODO: replace with your real email
  resume: "/uzairkhan_Fullstack_developer.pdf", // Use public path for the resume file
};