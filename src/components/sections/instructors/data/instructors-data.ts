import { Instructor, DanceStyle, ColorScheme } from "../types/instructors-types";
import { OPTIMIZED_URLS } from "@/lib/cloudinary";

export const instructors: Instructor[] = [
  {
    id: "rico",
    name: "Rico",
    role: "Lead Dance Instructor",
    bio: "A passionate dance instructor from the Dominican Republic 🇩🇴, Rico brings authentic Latin flavor and vibrant energy to the Reborn In Paradise family. As both a dance instructor and fitness coach at R1P Fitness, he embodies the perfect blend of dance and fitness, inspiring students with his dynamic teaching style.",
    image: OPTIMIZED_URLS.rico,
    location: "O'ahu, Hawaii",
    specialties: ["Bachata", "Salsa"],
    experience: "10+ years",
    quote: "Dance is not just movement; it's a conversation with the universe through your body.",
    achievements: [
      "Lead Instructor at Paradise Latin Dance",
      "Expert Fitness Coach at R1P Fitness",
      "188+ Dance Choreographies",
      "Inspiring the R1P Community"
    ],
    certifications: [
      "Certified Latin Dance Instructor",
      "Personal Fitness Trainer"
    ],
    social: {
      instagram: "https://www.instagram.com/_ricostory/",
      paradiseDance: "https://www.instagram.com/paradiselatindance",
      ripFitness: "https://www.instagram.com/r1pfitness"
    },
    featured: true
  },
  {
    id: "mike",
    name: "Mike Lorenzo",
    role: "Latin Dance Instructor & Fitness Coach",
    bio: "A dynamic instructor bringing passion and expertise to both dance and fitness. Mike's dedication to the Reborn In Paradise community shines through in every class, creating an energetic and welcoming environment for all students.",
    image: OPTIMIZED_URLS.mike,
    location: "Hawaii",
    specialties: ["Bachata", "Salsa"],
    experience: "8+ years",
    quote: "Every step on the dance floor is a step toward becoming the best version of yourself.",
    achievements: [
      "Instructor at Paradise Latin Dance",
      "Fitness Coach at R1P Fitness",
      "4,900+ Social Following",
      "Community Builder"
    ],
    certifications: [
      "Advanced Salsa Instructor",
      "Certified Fitness Trainer"
    ],
    social: {
      instagram: "https://www.instagram.com/mikelorenzojr/",
      paradiseDance: "https://www.instagram.com/paradiselatindance",
      ripFitness: "https://www.instagram.com/r1pfitness"
    }
  }
];

export const styleColors: Record<DanceStyle, ColorScheme> = {
  "Salsa": { 
    bg: "from-red-500/20 to-pink-500/20", 
    border: "border-red-500/30", 
    text: "text-red-400",
    gradient: "from-red-500 to-pink-500"
  },
  "Bachata": { 
    bg: "from-purple-500/20 to-pink-500/20", 
    border: "border-purple-500/30", 
    text: "text-purple-400",
    gradient: "from-purple-500 to-pink-500"
  },
  "Cha Cha": { 
    bg: "from-orange-500/20 to-yellow-500/20", 
    border: "border-orange-500/30", 
    text: "text-orange-400",
    gradient: "from-orange-500 to-yellow-500"
  },
  "Contemporary": { 
    bg: "from-blue-500/20 to-indigo-500/20", 
    border: "border-blue-500/30", 
    text: "text-blue-400",
    gradient: "from-blue-500 to-indigo-500"
  },
  "Modern": { 
    bg: "from-indigo-500/20 to-violet-500/20", 
    border: "border-indigo-500/30", 
    text: "text-indigo-400",
    gradient: "from-indigo-500 to-violet-500"
  },
  "Ballet": { 
    bg: "from-pink-500/20 to-rose-500/20", 
    border: "border-pink-500/30", 
    text: "text-pink-400",
    gradient: "from-pink-500 to-rose-500"
  },
  "Hip Hop": { 
    bg: "from-emerald-500/20 to-teal-500/20", 
    border: "border-emerald-500/30", 
    text: "text-emerald-400",
    gradient: "from-emerald-500 to-teal-500"
  },
  "Breaking": { 
    bg: "from-cyan-500/20 to-blue-500/20", 
    border: "border-cyan-500/30", 
    text: "text-cyan-400",
    gradient: "from-cyan-500 to-blue-500"
  },
  "Street Jazz": { 
    bg: "from-violet-500/20 to-purple-500/20", 
    border: "border-violet-500/30", 
    text: "text-violet-400",
    gradient: "from-violet-500 to-purple-500"
  },
  "Jazz": { 
    bg: "from-amber-500/20 to-yellow-500/20", 
    border: "border-amber-500/30", 
    text: "text-amber-400",
    gradient: "from-amber-500 to-yellow-500"
  },
  "Tap": { 
    bg: "from-teal-500/20 to-cyan-500/20", 
    border: "border-teal-500/30", 
    text: "text-teal-400",
    gradient: "from-teal-500 to-cyan-500"
  },
  "Musical Theatre": { 
    bg: "from-rose-500/20 to-red-500/20", 
    border: "border-rose-500/30", 
    text: "text-rose-400",
    gradient: "from-rose-500 to-red-500"
  }
};

export const instructorsSection = {
  title: "Expert Instructors",
  subtitle: "Learn from the Best",
  description: "Our passionate instructors bring authentic techniques, years of experience, and vibrant energy to every class. From authentic Latin dance to contemporary styles, our team is dedicated to helping you achieve your dance goals.",
  ctaText: "Join Our Classes"
}; 