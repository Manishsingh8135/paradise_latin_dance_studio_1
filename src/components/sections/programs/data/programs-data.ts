import { OPTIMIZED_URLS } from "@/lib/cloudinary";

export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced" | "All Levels";
export type ClassCategory = "Salsa" | "Bachata" | "Social" | "Foundations" | "Specialty";

export interface ClassTime {
  id: string;
  startTime: string;
  endTime: string;
  availableSpots: number;
  totalSpots: number;
}

export interface Program {
  id: string;
  name: string;
  category: ClassCategory;
  difficulty: DifficultyLevel;
  description: string;
  duration: string;
  calories: string;
  trainer: string;
  trainerImage: string;
  classImage: string;
  benefits: string[];
  equipment: string[];
  intensity: number; // 1-5
  schedule: {
    [key: string]: ClassTime[]; // key is day of week
  };
  tags: string[];
  videoPreview?: string;
}

export const programsData: Program[] = [
  {
    id: "salsa-fundamentals",
    name: "Salsa Fundamentals",
    category: "Salsa",
    difficulty: "Beginner",
    description: "Master the essential salsa steps, timing, and partner connection. Perfect for complete beginners ready to discover the joy of Latin dance.",
    duration: "60 min",
    calories: "300-500",
    trainer: "Rico",
    trainerImage: OPTIMIZED_URLS.rico,
    classImage: OPTIMIZED_URLS.lds3,
    benefits: [
      "Learn core salsa rhythm and timing",
      "Basic footwork and turn patterns",
      "Partner connection fundamentals",
      "Build confidence on the dance floor"
    ],
    equipment: [
      "Dance shoes (or clean sneakers)",
      "Comfortable clothing",
      "Water bottle",
      "Positive attitude"
    ],
    intensity: 2,
    schedule: {
      "Monday": [
        { id: "sf-mon-1", startTime: "19:00", endTime: "20:00", availableSpots: 8, totalSpots: 20 },
      ],
      "Wednesday": [
        { id: "sf-wed-1", startTime: "19:00", endTime: "20:00", availableSpots: 5, totalSpots: 20 },
      ]
    },
    tags: ["Salsa", "Beginner", "Partner Dance", "Foundations"]
  },
  {
    id: "bachata-sensual",
    name: "Bachata Sensual",
    category: "Bachata",
    difficulty: "Intermediate",
    description: "Explore the sensual Dominican rhythms of bachata with advanced body movement, musicality, and expressive partner work.",
    duration: "60 min",
    calories: "300-450",
    trainer: "Mike",
    trainerImage: OPTIMIZED_URLS.mike,
    classImage: OPTIMIZED_URLS.bachata,
    benefits: [
      "Advanced body movement techniques",
      "Musicality and interpretation",
      "Complex turn patterns",
      "Expressive partner connection"
    ],
    equipment: [
      "Dance shoes recommended",
      "Comfortable clothing",
      "Water bottle"
    ],
    intensity: 3,
    schedule: {
      "Tuesday": [
        { id: "bs-tue-1", startTime: "19:00", endTime: "20:00", availableSpots: 6, totalSpots: 15 },
      ],
      "Thursday": [
        { id: "bs-thu-1", startTime: "19:00", endTime: "20:00", availableSpots: 4, totalSpots: 15 },
      ]
    },
    tags: ["Bachata", "Sensual", "Partner Dance", "Intermediate"]
  },
  {
    id: "salsa-advanced",
    name: "Salsa Advanced",
    category: "Salsa",
    difficulty: "Advanced",
    description: "Take your salsa to the next level with complex combinations, styling, shines, and performance-level techniques.",
    duration: "90 min",
    calories: "400-600",
    trainer: "Rico",
    trainerImage: OPTIMIZED_URLS.rico,
    classImage: OPTIMIZED_URLS.dancePhoto2,
    benefits: [
      "Complex combination patterns",
      "Advanced styling and shines",
      "Performance-level technique",
      "Musicality and improvisation"
    ],
    equipment: [
      "Proper dance shoes required",
      "Comfortable clothing",
      "Water bottle"
    ],
    intensity: 4,
    schedule: {
      "Monday": [
        { id: "sa-mon-1", startTime: "20:00", endTime: "21:30", availableSpots: 10, totalSpots: 15 },
      ],
      "Wednesday": [
        { id: "sa-wed-1", startTime: "20:00", endTime: "21:30", availableSpots: 7, totalSpots: 15 },
      ],
      "Friday": [
        { id: "sa-fri-1", startTime: "19:00", endTime: "20:30", availableSpots: 12, totalSpots: 15 }
      ]
    },
    tags: ["Salsa", "Advanced", "Performance", "Styling"]
  },
  {
    id: "social-dance-practice",
    name: "Social Dance Practice",
    category: "Social",
    difficulty: "All Levels",
    description: "Open floor social dancing for all levels. Practice what you've learned, meet fellow dancers, and enjoy the music in a relaxed atmosphere.",
    duration: "120 min",
    calories: "300-500",
    trainer: "Rico",
    trainerImage: OPTIMIZED_URLS.rico,
    classImage: OPTIMIZED_URLS.paradiseDance,
    benefits: [
      "Practice in a social setting",
      "Dance with different partners",
      "Build community connections",
      "Improve lead/follow skills naturally"
    ],
    equipment: [
      "Dance shoes recommended",
      "Comfortable clothing",
      "Water bottle"
    ],
    intensity: 2,
    schedule: {
      "Friday": [
        { id: "sdp-fri-1", startTime: "20:30", endTime: "22:30", availableSpots: 30, totalSpots: 40 }
      ],
      "Saturday": [
        { id: "sdp-sat-1", startTime: "19:00", endTime: "21:00", availableSpots: 25, totalSpots: 40 }
      ]
    },
    tags: ["Social", "All Levels", "Practice", "Community"]
  }
];
