import {
  Music,
  CreditCard,
  Calendar,
  Users,
  Book,
  Bot,
  MessageSquare,
  Zap,
} from "lucide-react";
import { HelpCategory, AiFeature } from "../types/help-types";

export const helpCategories: HelpCategory[] = [
  {
    icon: Music,
    title: "Dance Classes",
    description: "Learn about our salsa, bachata, and other Latin dance classes",
    articles: [
      { title: "Getting Started at Paradise Latin Dance", link: "/schedule" },
      { title: "Understanding Class Levels", link: "/schedule" },
      { title: "What to Wear & Bring to Class", link: "/help-center" },
    ],
  },
  {
    icon: CreditCard,
    title: "Membership & Billing",
    description: "Information about plans, payments, and account management",
    articles: [
      { title: "Membership Plans Explained", link: "/schedule" },
      { title: "Billing & Payment Info", link: "/contact" },
      { title: "Cancellation Policy", link: "/terms-of-service" },
    ],
  },
  {
    icon: Calendar,
    title: "Scheduling & Booking",
    description: "Everything about booking classes and managing your schedule",
    articles: [
      { title: "How to Book Classes", link: "/schedule" },
      { title: "Class Schedule & Calendar", link: "/schedule" },
      { title: "Rescheduling & Cancellations", link: "/terms-of-service" },
    ],
  },
  {
    icon: Users,
    title: "Instructors & Styles",
    description: "Meet our world-class instructors and explore dance styles",
    articles: [
      { title: "Meet Our Instructors", link: "/instructors" },
      { title: "Salsa vs Bachata — Which is Right for You?", link: "/blogs" },
      { title: "Book a Free Trial Class", link: "/trial" },
    ],
  },
  {
    icon: Book,
    title: "Studio Policies",
    description: "Important information about studio rules and guidelines",
    articles: [
      { title: "Studio Rules & Etiquette", link: "/terms-of-service" },
      { title: "Safety Guidelines", link: "/terms-of-service" },
      { title: "Privacy Policy", link: "/privacy-policy" },
    ],
  },
];

export const aiFeatures: AiFeature[] = [
  {
    icon: Bot,
    title: "AI Dance Assistant",
    description: "Get instant answers to your questions about classes, schedules, and more",
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
