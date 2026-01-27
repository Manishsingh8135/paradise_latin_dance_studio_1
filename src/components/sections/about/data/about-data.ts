import {
  Heart,
  Brain,
  Music,
  Users,
  Star,
  Sparkles,
} from "lucide-react";
import { CoreValue, Milestone } from "../types/about-types";
import { OPTIMIZED_URLS } from "@/lib/cloudinary";

export const coreValues: CoreValue[] = [
  {
    icon: Heart,
    title: "Passion for Dance",
    description: "Experience the joy of Latin dance through expert instruction and a love for movement.",
  },
  {
    icon: Brain,
    title: "Mental Wellness",
    description: "Dancing releases stress and boosts happiness through movement and music.",
  },
  {
    icon: Sparkles,
    title: "Creative Expression",
    description: "Find your unique style and express yourself through the art of Latin dance.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Join our dance ohana where everyone belongs, grows, and thrives together.",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Learn from Hawaii's top Latin dance instructors in a supportive environment.",
  },
  {
    icon: Music,
    title: "Expert Instruction",
    description: "Professional guidance from experienced instructors passionate about Latin dance.",
  },
];

export const milestones: Milestone[] = [
  {
    year: "2019",
    title: "The Birth of Paradise",
    description: "Founded in Hawaii with a vision to bring authentic Latin dance to the islands.",
    image: OPTIMIZED_URLS.salsa,
  },
  {
    year: "2020",
    title: "Growing Community",
    description: "Our dance family grew as more people discovered the joy of Latin dance.",
    image: OPTIMIZED_URLS.bachata,
  },
  {
    year: "2021",
    title: "New Studio Home",
    description: "Opened our dance studio in Waipahu, creating a sanctuary for Latin dance lovers.",
    image: OPTIMIZED_URLS.lds3,
  },
  {
    year: "2023",
    title: "Community Events",
    description: "Launched regular social dances and community events bringing dancers together.",
    image: OPTIMIZED_URLS.lds4,
  },
  {
    year: "2024",
    title: "Hawaii's Premier Studio",
    description: "Recognized as one of Hawaii's top Latin dance studios with a thriving community.",
    image: OPTIMIZED_URLS.paradiseDance,
  },
];

export const founderInfo = {
  name: "Rico",
  role: "Lead Dance Instructor",
  image: OPTIMIZED_URLS.rico,
  description: "A passionate Latin dance instructor dedicated to sharing the joy of Salsa, Bachata, and more with the Hawaii community. Rico brings expertise and enthusiasm to every class.",
  achievements: [
    "Professional Latin Dance Instructor",
    "Expert in Salsa & Bachata",
    "Community Dance Event Organizer",
    "Passionate About Dance Education",
    "Building Hawaii's Dance Community",
  ],
};
