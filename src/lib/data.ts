import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPython,
  SiDjango,
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiExpo,
  SiDocker,
  SiGit,
  SiSupabase,
  SiFirebase,
} from "react-icons/si";
import { Cloud } from "lucide-react";
import type { IconType } from "react-icons";

export interface Project {
  name: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  comingSoon?: boolean;
  launchingSoon?: boolean;
}

export const projects: Project[] = [
  {
    name: "Around Town Property Brokers",
    description:
      "Single-page marketing site for a real-estate agency. Fully responsive, with seamless section scrolling and polished UI interactions — developed end-to-end as a client project.",
    tags: ["Next.js", "React", "TypeScript"],
    image:
      "https://res.cloudinary.com/ddbs7m7nt/image/upload/f_auto,q_auto/c_fill,w_600,h_400/v1751911736/atpb_kuwbij.png",
    liveUrl: "https://www.atpb.org",
  },
  {
    name: "EventLight",
    description:
      "A modern event discovery platform — browse and filter events by category, date, and location, save the ones you care about, or list your own. Built solo, front to back.",
    tags: ["React", "TypeScript", "Chakra UI", "Django"],
    launchingSoon: true,
  },
  {
    name: "More work coming soon",
    description:
      "Another project in progress. Check back soon, or reach out if you want the details before it's posted.",
    tags: [],
    comingSoon: true,
  },
];

export interface ExperienceEntry {
  company: string;
  role: string;
  description: string;
  tags: string[];
  href?: string;
  current?: boolean;
}

export const experience: ExperienceEntry[] = [
  {
    company: "Bucks",
    role: "Full-time Software Engineer",
    description:
      "Building and maintaining a mobile banking app end-to-end — customer app, internal admin tools, and the API behind both.",
    tags: ["React Native", "Next.js", "Express", "MongoDB", "Redis"],
    href: "https://apps.apple.com/us/app/bucks-borderless-banking/id6757264502",
    current: true,
  },
  {
    company: "Talim",
    role: "Software Engineer",
    description:
      "Part of the team building a school management platform — grading, attendance, and real-time chat across a teacher portal, student portal, and mobile app.",
    tags: ["Next.js", "NestJS", "MongoDB", "Socket.IO"],
  },
  {
    company: "FarmConnect",
    role: "Backend Engineer",
    description:
      "Contributed to a fintech platform for agriculture — loans, payroll, and wallet features, as part of a larger engineering team.",
    tags: ["NestJS", "TypeScript"],
  },
];

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "NestJS", icon: SiNestjs },
      { name: "Python", icon: SiPython },
      { name: "Django", icon: SiDjango },
      { name: "Prisma", icon: SiPrisma },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    category: "Mobile",
    skills: [
      { name: "React Native", icon: SiReact },
      { name: "Expo", icon: SiExpo },
    ],
  },
  {
    category: "Cloud & Tools",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "AWS S3", icon: Cloud },
      { name: "Supabase", icon: SiSupabase },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/desegya" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/desmond-egya/" },
  { label: "X / Twitter", href: "https://x.com/DesmondEgya" },
  { label: "Instagram", href: "https://instagram.com/desmond_egya" },
];

export const email = "egyadesmond@gmail.com";
