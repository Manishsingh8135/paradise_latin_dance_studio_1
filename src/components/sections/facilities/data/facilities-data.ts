import { OPTIMIZED_URLS } from "@/lib/cloudinary";

export type FacilityType = 'Premium' | 'Elite' | 'Standard' | 'Community';
export type FacilityCategory = 'Dance Studio' | 'Practice' | 'Social' | 'Wellness' | 'Events & Activities';
interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
  size: 'large' | 'medium' | 'small';
  type: FacilityType;
  category: FacilityCategory;
  features: string[];
  stats: {
    label: string;
    value: string;
  }[];
  availability: {
    weekdays: string;
    weekends: string;
  };
  capacity: number;
  area: string;
}

export const facilities: Facility[] = [
  {
    id: 'main-dance-studio',
    title: 'Main Dance Studio',
    description: 'Experience the transformative power of dance at Paradise Latin Dance Studio. Our main studio is more than just a place to dance; it\'s a community built on passion, connection, and joy. Join us and discover the rhythm within.',
    image: OPTIMIZED_URLS.salsa,
    size: 'large',
    type: 'Premium',
    category: 'Dance Studio',
    features: ['Professional Sound System', 'Mirror Walls', 'Sprung Dance Floor'],
    stats: [
      { label: 'Studio Space', value: '2000 sq ft' },
      { label: 'Dance Capacity', value: '40+' }
    ],
    availability: {
      weekdays: '6:00 AM - 9:00 PM',
      weekends: '7:00 AM - 4:00 PM'
    },
    capacity: 50,
    area: '2000 sq ft'
  },
  {
    id: 'practice-room',
    title: 'Practice Room',
    description: 'Dedicated practice space for perfecting your dance moves and private lessons.',
    image: OPTIMIZED_URLS.bachata,
    size: 'medium',
    type: 'Standard',
    category: 'Practice',
    features: ['Private Space', 'Music System', 'Video Recording'],
    stats: [
      { label: 'Practice Area', value: '800 sq ft' },
      { label: 'Private Lessons', value: 'Available' }
    ],
    availability: {
      weekdays: '6:00 AM - 9:00 PM',
      weekends: '7:00 AM - 4:00 PM'
    },
    capacity: 10,
    area: '800 sq ft'
  },
  {
    id: 'social-dance-floor',
    title: 'Social Dance Floor',
    description: 'Our vibrant social dance floor where the community comes together for practice parties and social dancing.',
    image: OPTIMIZED_URLS.lds3,
    size: 'large',
    type: 'Elite',
    category: 'Social',
    features: ['DJ Setup', 'Ambient Lighting', 'Seating Areas'],
    stats: [
      { label: 'Dance Floor', value: '1500 sq ft' },
      { label: 'Events/Week', value: '3+' }
    ],
    availability: {
      weekdays: '5:00 PM - 9:00 PM',
      weekends: '7:00 PM - 11:00 PM'
    },
    capacity: 60,
    area: '1500 sq ft'
  },
  {
    id: 'group-class-studio',
    title: 'Group Class Studio',
    description: 'Spacious studio designed for group dance classes with professional instruction.',
    image: OPTIMIZED_URLS.lds4,
    size: 'large',
    type: 'Premium',
    category: 'Dance Studio',
    features: ['Professional Instructors', 'Group Classes', 'All Levels Welcome'],
    stats: [
      { label: 'Class Size', value: '15-20' },
      { label: 'Classes/Day', value: '2+' }
    ],
    availability: {
      weekdays: '6:00 AM - 9:00 PM',
      weekends: '7:00 AM - 4:00 PM'
    },
    capacity: 30,
    area: '1800 sq ft'
  },
  {
    id: 'wellness-lounge',
    title: 'Wellness Lounge',
    description: 'Relaxing space for warming up, cooling down, and connecting with fellow dancers.',
    image: OPTIMIZED_URLS.lds5,
    size: 'medium',
    type: 'Premium',
    category: 'Wellness',
    features: ['Stretching Area', 'Refreshments', 'Comfortable Seating'],
    stats: [
      { label: 'Lounge Area', value: '500 sq ft' },
      { label: 'Amenities', value: '10+' }
    ],
    availability: {
      weekdays: '6:00 AM - 9:00 PM',
      weekends: '7:00 AM - 4:00 PM'
    },
    capacity: 20,
    area: '500 sq ft'
  },
  {
    id: 'community-space',
    title: 'Dance Community Space',
    description: 'Join the Paradise Latin Dance Ohana! This space captures the spirit of our amazing community coming together for special events and celebrations.',
    image: OPTIMIZED_URLS.paradiseDance,
    size: 'large',
    type: 'Community',
    category: 'Events & Activities',
    features: ['Community Events', 'Dance Socials', 'Special Celebrations'],
    stats: [
      { label: 'Community Size', value: '500+' },
      { label: 'Events/Month', value: '4+' }
    ],
    availability: {
      weekdays: 'N/A',
      weekends: 'See Schedule'
    },
    capacity: 100,
    area: 'Variable'
  }
];
