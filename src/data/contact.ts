import { socialLinks } from "./navigation";

export interface ContactMethod {
  id: "email" | "github" | "linkedin" | "location";
  label: string;
  value: string;
  href?: string;
  copyable?: boolean;
}

// Email is derived from the single source of truth in navigation.ts,
// so the two never drift out of sync again.
const emailAddress = socialLinks.email.replace(/^mailto:/, "");

export const contactMethods: ContactMethod[] = [
  {
    id: "email",
    label: "Email",
    value: emailAddress,
    href: socialLinks.email,
    copyable: true,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/Uzairkahn",
    href: socialLinks.github,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/uzair-khan-616048385",
    href: socialLinks.linkedin,
  },
  {
    id: "location",
    label: "Location",
    value: "Karachi, Pakistan",
  },
];
