import { HeroSection } from '@/types/hero/hero-types';
import { OPTIMIZED_URLS } from '@/lib/cloudinary';

export const heroData: HeroSection = {
  mainTitle: {
    firstLine: "Reborn 1n Paradise",
    highlightedText: "Mind, Body & Spirit",
    lastLine: "A Home Away From Home"
  },
  subtitle: "From Military Struggles to a Global Community",
  description: "Founded in 2019 in Hawaii, R1PFitness was born from military members seeking to create a sanctuary where physical strength heals mind and spirit. Join our ohana and experience a fitness community built on physical health, mental health, and spiritual well-being.",
  stats: [
    {
      value: "4+",
      label: "Years Legacy",
      description: "Transforming lives since 2019"
    },
    {
      value: "4",
      label: "Elite Trainers",
      description: "Military-experienced professionals"
    },
    {
      value: "3",
      label: "Core Pillars",
      description: "Physical, Mental, Spiritual Health"
    },
    {
      value: "15",
      label: "Hours Daily",
      description: "Mon-Fri 6AM-9PM"
    }
  ],
  features: [
    {
      title: "Military Training",
      description: "Expert military-style PT",
      icon: "shield"
    },
    {
      title: "Personal Training",
      description: "Customized workout plans",
      icon: "users"
    },
    {
      title: "Group Training",
      description: "High-energy sessions",
      icon: "users-group"
    },
    {
      title: "Dance Experience",
      description: "Dynamic dance classes",
      icon: "music"
    }
  ],
  testimonials: [
    {
      id: "1",
      name: "Rico",
      role: "Lead Dance Instructor",
      image: OPTIMIZED_URLS.rico,
      quote: "Dance is about expressing yourself and connecting with others. Join us and discover the joy of Latin dance.",
      achievement: "Professional Latin Dance Instructor"
    },
    {
      id: "2",
      name: "Mike",
      role: "Senior Dance Instructor",
      image: OPTIMIZED_URLS.mike,
      quote: "Every step you take is a step towards becoming the best dancer you can be. We're here to guide you on that journey.",
      achievement: "Expert in Salsa & Bachata"
    }
  ],
  actions: [
    {
      title: "Start Free Trial Class",
      href: "/trial",
      variant: "primary"
    },
    {
      title: "Learn More",
      href: "/about",
      variant: "secondary"
    }
  ],
  backgroundVideo: {
    url: "",
    poster: OPTIMIZED_URLS.salsa
  }
};

