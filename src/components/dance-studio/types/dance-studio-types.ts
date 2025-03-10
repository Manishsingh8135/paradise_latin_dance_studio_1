export type DanceStyle = 
  | "Salsa"
  | "Bachata"
  | "Merengue"
  | "Cha Cha"
  | "Reggaeton"
  | "Latin Fusion";

export type DanceLevel = 
  | "Beginner"
  | "Intermediate"
  | "Advanced"
  | "Pro";

export interface Instructor {
  id: string;
  name: string;
  title: string;
  specialties: DanceStyle[];
  bio: string;
  image: string;
  achievements: string[];
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
}

export interface DanceClass {
  id: string;
  style: DanceStyle;
  name: string;
  description: string;
  level: DanceLevel;
  duration: string;
  instructor: Instructor;
  schedule: {
    day: string;
    time: string;
    duration: string;
  }[];
  benefits: string[];
  image: string;
  videoPreview?: string;
}

export interface Showcase {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  video?: string;
  performers: string[];
  style: DanceStyle;
}
