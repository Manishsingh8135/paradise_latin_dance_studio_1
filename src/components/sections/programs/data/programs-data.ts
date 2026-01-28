import { OPTIMIZED_URLS } from "@/lib/cloudinary";

export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced" | "Elite";
export type ClassCategory = "Strength" | "Cardio" | "Combat" | "Recovery" | "Special Ops";

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
    id: "military-bootcamp",
    name: "Military Bootcamp",
    category: "Special Ops",
    difficulty: "Advanced",
    description: "Experience authentic military-style training led by our veteran trainers. Push your limits with combat-inspired workouts.",
    duration: "75 min",
    calories: "800-1000",
    trainer: "Rico",
    trainerImage: OPTIMIZED_URLS.rico,
    classImage: "https://images.unsplash.com/photo-1511989130945-c2b632959395?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefits: [
      "Military-grade conditioning",
      "Mental toughness",
      "Team building",
      "Combat readiness"
    ],
    equipment: [
      "Battle ropes",
      "Sandbags",
      "Obstacle course",
      "Tactical gear"
    ],
    intensity: 5,
    schedule: {
      "Monday": [
        { id: "mb-mon-1", startTime: "06:00", endTime: "07:15", availableSpots: 8, totalSpots: 20 },
        { id: "mb-mon-2", startTime: "17:30", endTime: "18:45", availableSpots: 5, totalSpots: 20 }
      ],
      "Wednesday": [
        { id: "mb-wed-1", startTime: "06:00", endTime: "07:15", availableSpots: 12, totalSpots: 20 },
        { id: "mb-wed-2", startTime: "17:30", endTime: "18:45", availableSpots: 3, totalSpots: 20 }
      ],
      "Friday": [
        { id: "mb-fri-1", startTime: "06:00", endTime: "07:15", availableSpots: 15, totalSpots: 20 }
      ]
    },
    tags: ["Military", "HIIT", "Team", "Outdoor"]
  },
  {
    id: "elite-strength",
    name: "Elite Strength",
    category: "Strength",
    difficulty: "Elite",
    description: "Championship-level strength training focusing on compound movements and progressive overload.",
    duration: "90 min",
    calories: "600-800",
    trainer: "Mike",
    trainerImage: OPTIMIZED_URLS.mike,
    classImage: OPTIMIZED_URLS.lds5,
    benefits: [
      "Maximum strength gains",
      "Professional technique",
      "Competition prep",
      "Body recomposition"
    ],
    equipment: [
      "Olympic platform",
      "Competition bars",
      "Premium plates",
      "Specialty bars"
    ],
    intensity: 4,
    schedule: {
      "Tuesday": [
        { id: "es-tue-1", startTime: "07:00", endTime: "08:30", availableSpots: 6, totalSpots: 12 },
        { id: "es-tue-2", startTime: "18:00", endTime: "19:30", availableSpots: 4, totalSpots: 12 }
      ],
      "Thursday": [
        { id: "es-thu-1", startTime: "07:00", endTime: "08:30", availableSpots: 8, totalSpots: 12 },
        { id: "es-thu-2", startTime: "18:00", endTime: "19:30", availableSpots: 2, totalSpots: 12 }
      ],
      "Saturday": [
        { id: "es-sat-1", startTime: "09:00", endTime: "10:30", availableSpots: 7, totalSpots: 12 }
      ]
    },
    tags: ["Strength", "Competition", "Technique", "Elite"]
  },
  {
    id: "combat-conditioning",
    name: "Combat Conditioning",
    category: "Combat",
    difficulty: "Intermediate",
    description: "Blend of martial arts and conditioning workouts designed to build fighter's stamina and agility.",
    duration: "60 min",
    calories: "700-900",
    trainer: "Rico",
    trainerImage: OPTIMIZED_URLS.rico,
    classImage: "https://images.unsplash.com/photo-1602827115209-0f49346b36b2?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefits: [
      "Combat techniques",
      "Explosive power",
      "Quick reflexes",
      "Core strength"
    ],
    equipment: [
      "Boxing bags",
      "Speed bags",
      "Focus mitts",
      "Jump ropes"
    ],
    intensity: 4,
    schedule: {
      "Monday": [
        { id: "cc-mon-1", startTime: "08:00", endTime: "09:00", availableSpots: 10, totalSpots: 15 },
        { id: "cc-mon-2", startTime: "19:00", endTime: "20:00", availableSpots: 7, totalSpots: 15 }
      ],
      "Wednesday": [
        { id: "cc-wed-1", startTime: "08:00", endTime: "09:00", availableSpots: 9, totalSpots: 15 },
        { id: "cc-wed-2", startTime: "19:00", endTime: "20:00", availableSpots: 5, totalSpots: 15 }
      ],
      "Friday": [
        { id: "cc-fri-1", startTime: "08:00", endTime: "09:00", availableSpots: 12, totalSpots: 15 }
      ]
    },
    tags: ["Combat", "Boxing", "MMA", "Conditioning"]
  },
  {
    id: "tactical-recovery",
    name: "Tactical Recovery",
    category: "Recovery",
    difficulty: "Beginner",
    description: "Military-inspired recovery techniques combining mobility, stretching, and mindfulness.",
    duration: "45 min",
    calories: "200-300",
    trainer: "Mike",
    trainerImage: OPTIMIZED_URLS.mike,
    classImage: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefits: [
      "Injury prevention",
      "Flexibility",
      "Stress relief",
      "Better sleep"
    ],
    equipment: [
      "Foam rollers",
      "Resistance bands",
      "Yoga mats",
      "Recovery tools"
    ],
    intensity: 1,
    schedule: {
      "Tuesday": [
        { id: "tr-tue-1", startTime: "09:00", endTime: "09:45", availableSpots: 15, totalSpots: 20 },
        { id: "tr-tue-2", startTime: "20:00", endTime: "20:45", availableSpots: 12, totalSpots: 20 }
      ],
      "Thursday": [
        { id: "tr-thu-1", startTime: "09:00", endTime: "09:45", availableSpots: 18, totalSpots: 20 },
        { id: "tr-thu-2", startTime: "20:00", endTime: "20:45", availableSpots: 14, totalSpots: 20 }
      ],
      "Sunday": [
        { id: "tr-sun-1", startTime: "10:00", endTime: "10:45", availableSpots: 16, totalSpots: 20 }
      ]
    },
    tags: ["Recovery", "Mobility", "Mindfulness", "Flexibility"]
  }
];
