// types/hero.ts

export interface HeroStats {
    value: string;
    label: string;
    description: string;
  }
  
  export interface HeroFeature {
    title: string;
    description: string;
    icon: string; // This will be mapped to the appropriate icon component
  }
  
  export interface HeroTestimonial {
    id: string;
    name: string;
    role: string;
    image: string;
    quote: string;
    achievement: string;
    transformationImage?: {
      before: string;
      after: string;
    };
  }
  
  export interface HeroAction {
    title: string;
    href: string;
    variant: 'primary' | 'secondary';
  }
  
  export interface HeroSection {
    mainTitle: {
      firstLine: string;
      highlightedText: string;
      lastLine: string;
    };
    subtitle: string;
    description: string;
    stats: HeroStats[];
    features: HeroFeature[];
    testimonials: HeroTestimonial[];
    actions: HeroAction[];
    backgroundVideo: {
      url: string;
      poster: string;
    };
  }