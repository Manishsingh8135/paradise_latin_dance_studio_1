export type DanceStyle = 
  | "Salsa" 
  | "Bachata" 
  | "Cha Cha" 
  | "Contemporary" 
  | "Modern" 
  | "Ballet" 
  | "Hip Hop" 
  | "Breaking" 
  | "Street Jazz" 
  | "Jazz" 
  | "Tap" 
  | "Musical Theatre";

export type ColorScheme = {
  bg: string;
  border: string;
  text: string;
  gradient?: string;
};

export interface Instructor {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  location?: string;
  specialties: DanceStyle[];
  achievements: string[];
  certifications?: string[];
  experience?: string;
  quote?: string;
  social: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    paradiseDance?: string;
    ripFitness?: string;
    website?: string;
  };
  featured?: boolean;
}

export interface InstructorCardProps {
  instructor: Instructor;
  isActive: boolean;
  onClick: () => void;
}

export interface InstructorDetailsProps {
  instructor: Instructor;
}

export interface InstructorsSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
} 