export interface HeroButton {
  text: string;
  url: string;
  isPrimary?: boolean;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  buttons: HeroButton[];
}

export interface HeroMedia {
  type: 'video' | 'image';
  src: string;
  alt?: string;
  poster?: string;
}

export interface HeroSectionProps {
  content?: HeroContent;
  media?: HeroMedia;
  className?: string;
  showParticles?: boolean;
} 