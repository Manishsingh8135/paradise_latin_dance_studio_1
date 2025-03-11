import { LucideIcon } from "lucide-react";

export type Article = {
  title: string;
  link: string;
};

export type HelpCategory = {
  icon: LucideIcon;
  title: string;
  description: string;
  articles: Article[];
};

export type AiFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};
