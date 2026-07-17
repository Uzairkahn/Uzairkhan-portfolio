export interface Highlight {
  label: string;
}

// Identity tags shown as pills in the About section.
export const highlights: Highlight[] = [
  { label: "Fresh Computer Science Graduate" },
  { label: "Full Stack Developer" },
  { label: "MERN Stack" },
  { label: "AI Enthusiast" },
  { label: "Mobile App Development" },
  { label: "Flutter" },
  { label: "React" },
  { label: "Next.js" },
];

export interface AboutStat {
  icon: "briefcase" | "folder" | "cpu";
  value: string;
  label: string;
}

// TODO: swap these with your real numbers before publishing.
export const aboutStats: AboutStat[] = [
  { icon: "briefcase", value: "2+", label: "Internships" },
  { icon: "folder", value: "10+", label: "Projects Delivered" },
  { icon: "cpu", value: "15+", label: "Technologies" },
];