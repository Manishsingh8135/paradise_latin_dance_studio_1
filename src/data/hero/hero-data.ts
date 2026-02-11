import { HeroSection } from '@/types/hero/hero-types';
import { OPTIMIZED_URLS } from '@/lib/cloudinary';

export const heroData: HeroSection = {
  mainTitle: {
    firstLine: "Paradise Latin Dance",
    highlightedText: "Feel the Rhythm",
    lastLine: "Dance with Passion"
  },
  subtitle: "Hawaii's Premier Latin Dance Studio",
  description: "Experience the joy of Latin dance at Paradise Latin Dance Studio in Waipahu, Hawaii. Whether you're a complete beginner or an experienced dancer, our passionate instructors Rico and Mike will guide you through Salsa and Bachata in a welcoming, fun environment.",
  stats: [
    {
      value: "2",
      label: "Expert Instructors",
      description: "Rico & Mike Lorenzo"
    },
    {
      value: "3",
      label: "Class Levels",
      description: "Foundations, Rhythm, Dynamics"
    },
    {
      value: "2",
      label: "Dance Styles",
      description: "Salsa & Bachata"
    },
    {
      value: "6",
      label: "Days a Week",
      description: "Classes Mon-Sat"
    }
  ],
  features: [
    {
      title: "Dance Foundations",
      description: "Perfect for new dancers",
      icon: "music"
    },
    {
      title: "Dance Rhythm",
      description: "For experienced dancers",
      icon: "users"
    },
    {
      title: "Dance Dynamics",
      description: "Advanced techniques",
      icon: "star"
    },
    {
      title: "Social Dancing",
      description: "Friday night socials",
      icon: "heart"
    }
  ],
  testimonials: [
    {
      id: "1",
      name: "Rico",
      role: "Lead Dance Instructor & Co-Founder",
      image: OPTIMIZED_URLS.rico,
      quote: "Dance is about expressing yourself and connecting with others. Join us and discover the joy of Latin dance.",
      achievement: "Professional Latin Dance Instructor"
    },
    {
      id: "2",
      name: "Mike Lorenzo",
      role: "Senior Dance Instructor & Co-Founder",
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
      title: "View Schedule",
      href: "/schedule",
      variant: "secondary"
    }
  ],
  backgroundVideo: {
    url: "",
    poster: OPTIMIZED_URLS.salsa
  }
};
