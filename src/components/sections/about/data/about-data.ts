import {
  Heart,
  Brain,
  Dumbbell,
  Users,
  Target,
  Sparkles,
} from "lucide-react";
import { CoreValue, Milestone } from "../types/about-types";

export const coreValues: CoreValue[] = [
  {
    icon: Heart,
    title: "Physical Health",
    description: "Building strength, endurance, and vitality through expert-led training programs and state-of-the-art facilities.",
  },
  {
    icon: Brain,
    title: "Mental Health",
    description: "Supporting emotional well-being and resilience through community support and professional guidance.",
  },
  {
    icon: Sparkles,
    title: "Spiritual Health",
    description: "Nurturing inner peace and personal growth through holistic wellness practices and mindful training.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Creating a supportive family where everyone belongs, grows, and thrives together.",
  },
  {
    icon: Target,
    title: "Military Focus",
    description: "Specialized support and understanding for military members, addressing their unique challenges.",
  },
  {
    icon: Dumbbell,
    title: "Expert Training",
    description: "Professional guidance from experienced trainers with military and athletic backgrounds.",
  },
];

export const milestones: Milestone[] = [
  {
    year: "2019",
    title: "The Birth of a Vision",
    description: "Founded in Hawaii as a support group for military members dealing with stress and mental health challenges.",
    image: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738557459/Ripfitness/Gym/about/about-1.jpg",
  },
  {
    year: "2020",
    title: "Growing Community",
    description: "Launched our first merchandise line, symbolizing unity and strength within our growing family.",
    image: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738557461/Ripfitness/Gym/about/about-3.jpg",
  },
  {
    year: "2021",
    title: "Physical Home",
    description: "Opened our flagship gym in Waipahu, creating a sanctuary for physical and mental transformation.",
    image: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738558029/Ripfitness/Gym/about/R1P_Gym-4_iaw3s5.jpg",
  },
  {
    year: "2023",
    title: "Digital Evolution",
    description: "Embarked on a digital transformation to reach and support more people worldwide.",
    image: "https://res.cloudinary.com/dyop38nwj/image/upload/v1736184972/Ripfitness/Trainers/Hip/DSC01422_vf8tnz.jpg",
  },
  {
    year: "2024",
    title: "Global Impact",
    description: "Expanding our reach and impact through innovative programs and digital solutions.",
    image: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738558161/Ripfitness/Gym/about/about-6.png",
  },
];

export const founderInfo = {
  name: "Hipolito Rivera",
  role: "Founder & CEO",
  image: "https://res.cloudinary.com/dyop38nwj/image/upload/v1736156346/Ripfitness/Trainers/Hip/IMG_0417_xha3br.jpg",
  description: "With 13 years of experience and a background as an All-American high school athlete and 8 years of service in the United States Navy, Hipolito brings expertise in strength & conditioning, bodybuilding, and holistic fitness training.",
  achievements: [
    "Former All-American High School Athlete",
    "8 Years U.S. Navy Service",
    "Command Fitness Leader",
    "Expert in Military-Style Training",
    "Holistic Fitness Specialist",
  ],
};
