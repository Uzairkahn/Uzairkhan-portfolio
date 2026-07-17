export type SkillIconName = "frontend" | "backend" | "mobile" | "database" | "tools" | "ai";

export interface Skill {
  name: string;
  level: number; // 0–100, self-assessed — adjust freely
}

export interface SkillCategory {
  icon: SkillIconName;
  title: string;
  skills: Skill[];
}

// TODO: fine-tune levels to reflect your real comfort with each tool.
export const skillCategories: SkillCategory[] = [
  {
    icon: "frontend",
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    icon: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 85 },
      { name: "Python / Flask", level: 65 },
    ],
  },
  {
    icon: "mobile",
    title: "Mobile",
    skills: [
      { name: "Flutter", level: 75 },
      { name: "Kotlin", level: 70 },
      { name: "Jetpack Compose", level: 70 },
    ],
  },
  {
    icon: "database",
    title: "Database",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Firebase / Firestore", level: 80 },
    ],
  },
  {
    icon: "tools",
    title: "Tools",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Vercel / Render", level: 80 },
      { name: "Postman", level: 80 },
    ],
  },
  {
    icon: "ai",
    title: "AI",
    skills: [
      { name: "Hugging Face Transformers", level: 65 },
      { name: "OpenAI / Whisper API", level: 70 },
      { name: "Prompt Engineering", level: 75 },
    ],
  },
];