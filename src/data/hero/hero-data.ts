import { HeroSection } from '@/types/hero/hero-types';

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
      name: "Hipolito Rivera",
      role: "Founder & Master Trainer",
      image: "https://res.cloudinary.com/dyop38nwj/image/upload/v1739171300/Ripfitness/Trainers/Hip/hip9.jpg",
      quote: "Transforming you mentally, physically, and emotionally. High School All-American Athlete and 8 years US Navy Command Fitness Leader.",
      achievement: "13+ years of expert training experience"
    },
    {
      id: "2",
      name: "Jonathan Diaz",
      role: "Elite Trainer & Champion",
      image: "https://res.cloudinary.com/dyop38nwj/image/upload/v1736184236/Ripfitness/Trainers/Jonathan/Jonathan-1.jpg",
      quote: "NASM Certified Personal Trainer with 9 years of experience specializing in strength & conditioning, bodybuilding, and weight loss transformations",
      achievement: "2-Time Hawaiian Physique Bodybuilding Champion (2019 & 2020)"
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
    poster: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738339648/Ripfitness/Gym/Gym5.jpg"
  }
};

