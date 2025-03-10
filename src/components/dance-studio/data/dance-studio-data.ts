import { Instructor, DanceClass, Showcase } from "../types/dance-studio-types";

export const instructors: Instructor[] = [
  {
    id: "maria-rodriguez",
    name: "Maria Rodriguez",
    title: "Latin Dance Director",
    specialties: ["Salsa", "Bachata", "Latin Fusion"],
    bio: "With over 15 years of experience in Latin dance, Maria brings authentic Cuban style salsa and modern fusion to Hawaii.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=2574&auto=format&fit=crop",
    achievements: [
      "3x World Salsa Champion",
      "Choreographer for Latin Grammy Awards",
      "Featured on Dancing with the Stars"
    ],
    socialMedia: {
      instagram: "@maria.dance",
      youtube: "@mariadance"
    }
  },
  {
    id: "carlos-santos",
    name: "Carlos Santos",
    title: "Senior Dance Instructor",
    specialties: ["Bachata", "Merengue", "Cha Cha"],
    bio: "Carlos brings the authentic Dominican style to Hawaii, with his dynamic teaching method and infectious energy.",
    image: "https://images.unsplash.com/photo-1541904845547-0eaf866de997?q=80&w=2574&auto=format&fit=crop",
    achievements: [
      "Dominican Republic National Dance Champion",
      "International Bachata Festival Judge",
      "Master Class Instructor at World Latin Dance Cup"
    ]
  }
];

export const danceClasses: DanceClass[] = [
  {
    id: "salsa-fundamentals",
    style: "Salsa",
    name: "Salsa Fundamentals",
    description: "Master the basics of Cuban and LA style salsa in this energetic class. Perfect for beginners!",
    level: "Beginner",
    duration: "60 min",
    instructor: instructors[0],
    schedule: [
      { day: "Monday", time: "18:00", duration: "60 min" },
      { day: "Wednesday", time: "18:00", duration: "60 min" }
    ],
    benefits: [
      "Learn proper technique and timing",
      "Build confidence on the dance floor",
      "Meet like-minded dance enthusiasts",
      "Great cardio workout"
    ],
    image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=2570&auto=format&fit=crop"
  },
  {
    id: "bachata-fusion",
    style: "Bachata",
    name: "Bachata Fusion",
    description: "Blend traditional bachata with modern dance styles in this innovative class.",
    level: "Intermediate",
    duration: "75 min",
    instructor: instructors[1],
    schedule: [
      { day: "Tuesday", time: "19:00", duration: "75 min" },
      { day: "Thursday", time: "19:00", duration: "75 min" }
    ],
    benefits: [
      "Learn modern bachata techniques",
      "Develop musicality and rhythm",
      "Master body isolation movements",
      "Express through dance"
    ],
    image: "https://images.unsplash.com/photo-1545959570-a94084071b5d?q=80&w=2571&auto=format&fit=crop"
  }
];

export const showcases: Showcase[] = [
  {
    id: "summer-latin-nights",
    title: "Summer Latin Nights Showcase",
    description: "Annual summer showcase featuring our top performers and students.",
    date: "2025-07-15",
    image: "https://images.unsplash.com/photo-1545959570-a94084071b5d?q=80&w=2571&auto=format&fit=crop",
    performers: ["Maria Rodriguez", "Carlos Santos", "Advanced Student Group"],
    style: "Latin Fusion"
  }
];
