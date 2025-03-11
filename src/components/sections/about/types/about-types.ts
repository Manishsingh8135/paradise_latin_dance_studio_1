import { LucideIcon } from "lucide-react";

export type CoreValue = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  description: string;
  achievements: string[];
};

export type Milestone = {
  year: string;
  title: string;
  description: string;
  image?: string;
};
