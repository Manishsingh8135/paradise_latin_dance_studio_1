import {
  Book,
  Dumbbell,
  CreditCard,
  Users,
  Calendar,
  Bot,
  MessageSquare,
  Zap,
} from "lucide-react";
import { HelpCategory, AiFeature } from "../types/help-types";

export const helpCategories: HelpCategory[] = [
  {
    icon: Dumbbell,
    title: "Workout Programs",
    description: "Learn about our training programs and exercise routines",
    articles: [
      { title: "Getting Started with RIP Fitness", link: "/help/getting-started" },
      { title: "Understanding Program Types", link: "/help/program-types" },
      { title: "Customizing Your Workout", link: "/help/customize-workout" },
    ],
  },
  {
    icon: CreditCard,
    title: "Membership & Billing",
    description: "Information about plans, payments, and account management",
    articles: [
      { title: "Membership Plans Explained", link: "/help/membership-plans" },
      { title: "Billing FAQ", link: "/help/billing-faq" },
      { title: "Cancellation Policy", link: "/help/cancellation" },
    ],
  },
  {
    icon: Calendar,
    title: "Classes & Scheduling",
    description: "Everything about booking classes and managing your schedule",
    articles: [
      { title: "How to Book Classes", link: "/help/book-classes" },
      { title: "Class Schedule Guide", link: "/help/class-schedule" },
      { title: "Cancellation Policy", link: "/help/class-cancellation" },
    ],
  },
  {
    icon: Users,
    title: "Personal Training",
    description: "Guide to personal training sessions and trainers",
    articles: [
      { title: "Meet Our Trainers", link: "/help/our-trainers" },
      { title: "PT Session Guide", link: "/help/pt-guide" },
      { title: "Book a Trainer", link: "/help/book-trainer" },
    ],
  },
  {
    icon: Book,
    title: "Policies & Guidelines",
    description: "Important information about gym rules and policies",
    articles: [
      { title: "Gym Rules & Etiquette", link: "/help/gym-rules" },
      { title: "Safety Guidelines", link: "/help/safety" },
      { title: "COVID-19 Protocols", link: "/help/covid" },
    ],
  },
];

export const aiFeatures: AiFeature[] = [
  {
    icon: Bot,
    title: "AI Personal Assistant",
    description: "Get instant answers to your fitness and wellness questions",
  },
  {
    icon: MessageSquare,
    title: "Smart Chat Support",
    description: "Real-time conversation with our AI-powered support system",
  },
  {
    icon: Zap,
    title: "Instant Solutions",
    description: "Quick and accurate responses to your queries 24/7",
  },
];
