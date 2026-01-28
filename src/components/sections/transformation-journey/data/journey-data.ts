import { OPTIMIZED_URLS } from "@/lib/cloudinary";

// Define types directly in this file to avoid any import issues
type JourneyLevel = "beginner" | "intermediate" | "advanced";

interface JourneyStage {
  id: JourneyLevel;
  title: string;
  description: string;
  achievements: string[];
  timeframe: string;
  image: string;
  testimonial: string;
  studentName: string;
  badgeColor: string;
  skillLevels: {
    technique: number;
    confidence: number;
    expression: number;
  };
  communityDescription: string;
}

export const journeyStages: JourneyStage[] = [
  {
    id: "beginner",
    title: "First Steps",
    description: "Where passion meets guidance. Begin your dance journey with foundational techniques in a supportive environment.",
    achievements: ["Basic movement patterns", "Rhythm foundation", "Simple partner connection"],
    timeframe: "1-3 months",
    image: OPTIMIZED_URLS.paradiseDance,
    testimonial: "I was so nervous on my first day, but the instructors made me feel welcome immediately. Now I look forward to every class!",
    studentName: "Michelle K.",
    badgeColor: "from-amber-400 to-amber-600",
    skillLevels: {
      technique: 30,
      confidence: 20,
      expression: 15
    },
    communityDescription: "Welcome to the dance family - you'll meet supportive peers in your journey."
  },
  {
    id: "intermediate",
    title: "Finding Your Rhythm",
    description: "Develop fluid movement and expressive styling as your confidence grows and techniques become second nature.",
    achievements: ["Style variations", "Complex turn patterns", "Improved musicality"],
    timeframe: "4-8 months",
    image: OPTIMIZED_URLS.dancePhoto1,
    testimonial: "The moment everything clicked was magical. I went from counting steps to feeling the music. The journey has transformed more than just my dancing.",
    studentName: "James T.",
    badgeColor: "from-[#FDB931] to-[#DAA520]",
    skillLevels: {
      technique: 60,
      confidence: 70,
      expression: 50
    },
    communityDescription: "Regular practice partners and social dance opportunities expand your circle."
  },
  {
    id: "advanced",
    title: "Expressive Mastery",
    description: "Transform technical skills into artistry. Express yourself authentically through movement with nuance and personal style.",
    achievements: ["Performance readiness", "Style mastery", "Dance composition"],
    timeframe: "9+ months",
    image: OPTIMIZED_URLS.lds4,
    testimonial: "Dancing has become my passion, my joy, and my community. What started as a hobby has become an essential part of who I am.",
    studentName: "Keoni M.",
    badgeColor: "from-[#FFD700] to-[#FDB931]",
    skillLevels: {
      technique: 90,
      confidence: 85,
      expression: 95
    },
    communityDescription: "Deep integration with the dance community and mentorship opportunities."
  }
];

export const journeySection = {
  title: "Transformation Journey",
  subtitle: "Your Dance Evolution",
  description: "Witness the progression from first steps to expressive mastery through our guided pathway to dance excellence.",
  ctaText: "Start Your Journey"
}; 