// Types for the Best Dance Studio section

export type AccoladeType = 'award' | 'recognition' | 'milestone' | 'testimonial';

export interface Accolade {
  id: string;
  type: AccoladeType;
  title: string;
  description: string;
  year?: string;
  icon?: string;
  image?: string;
  source?: string;
  featured?: boolean;
}

export interface Statistic {
  id: string;
  label: string;
  value: number;
  unit?: string;
  prefix?: string;
  icon?: string;
  description?: string;
}

export interface TestimonialQuote {
  id: string;
  quote: string;
  author: string;
  role?: string;
  image?: string;
  featured?: boolean;
}

export interface VisualLayer {
  id: string;
  imageUrl: string;
  videoUrl?: string;
  depth: number; // Controls parallax effect intensity (0-100)
  opacity: number;
  blur?: number;
  animation?: 'float' | 'pulse' | 'rotate' | 'none';
}

export interface BestDanceStudioData {
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  accolades: Accolade[];
  statistics: Statistic[];
  testimonialQuotes: TestimonialQuote[];
  visualLayers: VisualLayer[];
  cta: {
    primary: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
} 