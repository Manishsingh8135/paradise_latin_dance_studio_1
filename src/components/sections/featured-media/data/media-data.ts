import { MediaItem } from "../types/media-types";
import { OPTIMIZED_URLS } from "@/lib/cloudinary";

export const mediaItems: MediaItem[] = [
  {
    type: 'video',
    src: OPTIMIZED_URLS.featuredVideo1,
    title: 'Dance Showcase 2024',
    description: 'Experience the magic of our annual showcase featuring top performers',
    size: 'medium'
  },
  {
    type: 'image',
    src: OPTIMIZED_URLS.salsa,
    title: 'Salsa Performance',
    description: 'Where modern meets tradition in fluid motion',
    size: 'large'
  },
  {
    type: 'image',
    src: OPTIMIZED_URLS.lds6,
    title: 'Ballet Excellence',
    description: 'Grace and precision in every movement',
    size: 'small'
  },
  {
    type: 'image',
    src: OPTIMIZED_URLS.paradiseDance,
    title: 'Jazz Fusion',
    description: 'Where traditional jazz meets contemporary style',
    size: 'small'
  },
  {
    type: 'video',
    src: OPTIMIZED_URLS.halloweenVideo,
    title: 'Hip Hop Battle',
    description: 'Urban rhythm meets island vibes',
    size: 'medium'
  },
  {
    type: 'image',
    src: OPTIMIZED_URLS.lds5,
    title: 'Modern Dance',
    description: 'Pushing boundaries with innovative movements',
    size: 'large'
  },
  {
    type: 'image',
    src: OPTIMIZED_URLS.dancePhoto2,
    title: 'Jazz Fusion',
    description: 'Where traditional jazz meets contemporary style',
    size: 'small'
  },
  {
    type: 'video',
    src: OPTIMIZED_URLS.featuredVideo2,
    title: 'Hip Hop Battle',
    description: 'Urban rhythm meets island vibes',
    size: 'medium'
  },
  {
    type: 'image',
    src: OPTIMIZED_URLS.lds4,
    title: 'Modern Dance',
    description: 'Pushing boundaries with innovative movements',
    size: 'small'
  },
  {
    type: 'image',
    src: OPTIMIZED_URLS.lds8,
    title: 'Modern Dance',
    description: 'Pushing boundaries with innovative movements',
    size: 'small'
  },
  {
    type: 'image',
    src: OPTIMIZED_URLS.lds3,
    title: 'Modern Dance',
    description: 'Pushing boundaries with innovative movements',
    size: 'large'
  }
];

export const featuredMediaSection = {
  title: "Showcase Gallery",
  subtitle: "Explore our vibrant dance community through captivating moments and performances",
  showParticles: true
}; 