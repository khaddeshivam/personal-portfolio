import type { LucideIcon } from "lucide-react";

export type NavItem = { label: string; href: string; icon: LucideIcon };
export type Project = { number: string; type: string; title: string; description: string; stack: string[]; github?: string; demo?: string };
export type SkillGroup = { category: string; items: string[] };
