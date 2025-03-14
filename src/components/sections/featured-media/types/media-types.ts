export type MediaSize = 'large' | 'medium' | 'small';
export type MediaType = 'image' | 'video';

export interface MediaItem {
  type: MediaType;
  src: string;
  title: string;
  description?: string;
  size: MediaSize;
}

export interface FeaturedMediaSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  showParticles?: boolean;
} 