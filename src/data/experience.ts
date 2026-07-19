export interface ExperienceEntry {
  company: string;
  role: string;
  duration: string;
  current?: boolean;
  overview: string;
  featuredWork: string[];
  tech: string[];
  highlights: string[];
  badge?: "fiverr";
}

export const experienceEntries: ExperienceEntry[] = [
  {
    company: "Zenvyro Labs",
    role: "Web Development Intern",
    duration: "Current",
    current: true,
    overview:
      "Currently contributing to modern frontend development by building responsive web applications using Next.js, TypeScript, Tailwind CSS, and modern UI engineering practices while collaborating in a professional development environment.",
    featuredWork: ["Personal Portfolio Website"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Git", "GitHub"],
    highlights: [
      "Building responsive interfaces",
      "Component architecture",
      "Modern UI development",
      "Version control workflows",
    ],
  },
  {
    company: "TEYZIX CORE",
    role: "Full Stack Developer Intern",
    duration: "2026",
    overview:
      "Designed and developed multiple production-ready full-stack applications while gaining hands-on experience in backend engineering, REST API development, authentication, deployment, and scalable software architecture.",
    featuredWork: [
      "Loka – Local Marketplace & Community Services Platform",
      "VendorHub – Vendor Quotation Management System",
      "Multi Vendor Service Marketplace",
    ],
    tech: ["Next.js", "React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Socket.io", "Cloudinary", "JWT", "Tailwind CSS"],
    highlights: [
      "Authentication & Authorization",
      "Role Based Access Control",
      "REST APIs",
      "MongoDB Data Modeling",
      "Real-time Communication",
      "Cloud Deployments",
      "Backend Architecture",
    ],
  },
  {
    company: "WebEra Solutions",
    role: "Mobile Application Developer Intern",
    duration: "2026",
    overview:
      "Developed Android and Flutter applications while working with Firebase services, modern mobile UI frameworks, and cross-platform development.",
    featuredWork: ["GlowHub – Salon Appointment Booking App", "QR Vault"],
    tech: ["Flutter", "Dart", "Java", "Kotlin", "Jetpack Compose", "Firebase", "Cloud Firestore", "REST APIs"],
    highlights: [
      "Firebase Authentication",
      "Mobile UI Development",
      "Cross-platform Development",
      "Native Android Development",
      "MVVM Principles",
    ],
  },
  {
    company: "Freelance Software Developer",
    role: "Independent Contractor",
    duration: "2022 — Present",
    overview:
      "Working directly with international clients to design, develop, debug, and deploy custom software solutions across web, backend, AI, and mobile technologies.",
    featuredWork: ["Web Applications", "Backend APIs", "AI Solutions", "Mobile Applications"],
    tech: ["React", "Next.js", "Node.js", "Express.js", "Python", "Flutter", "MongoDB", "MySQL", "Firebase"],
    highlights: [
      "Client Communication",
      "Requirement Analysis",
      "Software Architecture",
      "Debugging",
      "Deployment",
      "Problem Solving",
    ],
    badge: "fiverr",
  },
];