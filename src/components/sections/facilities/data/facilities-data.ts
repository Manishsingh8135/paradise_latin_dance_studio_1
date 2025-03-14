export type FacilityType = 'Premium' | 'Elite' | 'Standard' | 'Retail' | 'Community';
export type FacilityCategory = 'Strength' | 'Cardio' | 'Combat' | 'Recovery' | 'Functional' | 'Wellness' | 'Merchandise' | 'Events & Activities';
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
    id: 'reborn-1n-paradise-gym',
    title: 'Reborn 1n Paradise Gym',
    description: 'Experience the transformative power of fitness at Reborn 1n Paradise (R1PFitness). Our gym is more than just a place to work out; it\'s a community built on physical, mental, and spiritual health. Join us and rise from challenges stronger than before.',
    image: 'https://res.cloudinary.com/dyop38nwj/image/upload/v1738914820/Ripfitness/Gym/gym13.jpg',
    size: 'large',
    type: 'Standard',
    category: 'Cardio',
    features: ['Community Focused', 'Holistic Fitness', 'State-of-the-Art Equipment'],
    stats: [
      { label: 'Cardio Machines', value: '15' },
      { label: 'Weight Stations', value: '10' }
    ],
    availability: {
      weekdays: '6:00 AM - 10:00 PM',
      weekends: '7:00 AM - 9:00 PM'
    },
    capacity: 50,
    area: '5000 sq ft'
  },
  {
    id: 'functional-zone',
    title: 'Functional Zone',
    description: 'Dynamic training space equipped for CrossFit, HIIT, and functional fitness workouts.',
    image: 'https://res.cloudinary.com/dyop38nwj/image/upload/v1738914821/Ripfitness/Gym/gym17.jpg',
    size: 'medium',
    type: 'Premium',
    category: 'Functional',
    features: ['Rigs', 'Kettlebells', 'Plyo Boxes', 'Turf Track'],
    stats: [
      { label: 'Training Area', value: '1500 sq ft' },
      { label: 'Equipment Sets', value: '25+' }
    ],
    availability: {
      weekdays: '5:00 AM - 11:00 PM',
      weekends: '6:00 AM - 10:00 PM'
    },
    capacity: 20,
    area: '1500 sq ft'
  },
  {
    id: 'cardio-deck',
    title: 'Cardio Deck',
    description: 'Elevated cardio experience with premium treadmills, bikes, and ellipticals overlooking the city.',
    image: 'https://res.cloudinary.com/dyop38nwj/image/upload/v1738914817/Ripfitness/Gym/gym15.jpg',
    size: 'medium',
    type: 'Elite',
    category: 'Cardio',
    features: ['Smart Equipment', 'Entertainment Systems', 'Heart Rate Monitoring'],
    stats: [
      { label: 'Machines', value: '30+' },
      { label: 'TV Screens', value: '12' }
    ],
    availability: {
      weekdays: '5:00 AM - 11:00 PM',
      weekends: '6:00 AM - 10:00 PM'
    },
    capacity: 30,
    area: '1500 sq ft'
  },
  {
    id: 'strength-zone',
    title: 'Strength Zone',
    description: 'State-of-the-art strength training area featuring premium equipment for both powerlifting and bodybuilding.',
    image: 'https://res.cloudinary.com/dyop38nwj/image/upload/v1738914872/Ripfitness/Gym/gym29.jpg',
    size: 'large',
    type: 'Premium',
    category: 'Strength',
    features: ['Power Racks', 'Olympic Platforms', 'Free Weights', 'Machines'],
    stats: [
      { label: 'Equipment', value: '50+' },
      { label: 'Stations', value: '20' },
      { label: 'Max Load', value: '500kg' }
    ],
    availability: {
      weekdays: '5:00 AM - 11:00 PM',
      weekends: '6:00 AM - 10:00 PM'
    },
    capacity: 40,
    area: '2000 sq ft'
  },
  {
    id: 'wellness-studio',
    title: 'Wellness Studio',
    description: 'Tranquil space for yoga, meditation, and mindfulness practices with ambient lighting and sound system.',
    image: 'https://res.cloudinary.com/dyop38nwj/image/upload/v1738914513/Ripfitness/Gym/gym12.jpg',
    size: 'medium',
    type: 'Premium',
    category: 'Wellness',
    features: ['Yoga Equipment', 'Meditation Space', 'Sound System'],
    stats: [
      { label: 'Class Size', value: '20' },
      { label: 'Props Sets', value: '15' }
    ],
    availability: {
      weekdays: '6:00 AM - 9:00 PM',
      weekends: '7:00 AM - 8:00 PM'
    },
    capacity: 20,
    area: '1000 sq ft'
  },
  {
    id: 'recovery-suite',
    title: 'Recovery Suite',
    description: 'Dedicated recovery area featuring advanced therapeutic equipment and relaxation spaces.',
    image: 'https://res.cloudinary.com/dyop38nwj/image/upload/v1738914451/Ripfitness/Gym/gym4.jpg',
    size: 'small',
    type: 'Elite',
    category: 'Recovery',
    features: ['Massage Therapy', 'Compression Therapy', 'Stretching Area'],
    stats: [
      { label: 'Therapy Rooms', value: '4' },
      { label: 'Recovery Tools', value: '10+' }
    ],
    availability: {
      weekdays: '7:00 AM - 9:00 PM',
      weekends: '8:00 AM - 8:00 PM'
    },
    capacity: 10,
    area: '800 sq ft'
  },
  {
    id: 'hiit-studio',
    title: 'HIIT Studio',
    description: 'High-intensity interval training space with advanced performance tracking and group fitness capabilities.',
    image: 'https://res.cloudinary.com/dyop38nwj/image/upload/v1738914819/Ripfitness/Gym/gym16.jpg',
    size: 'medium',
    type: 'Elite',
    category: 'Functional',
    features: ['Performance Tracking', 'LED Timers', 'Circuit Equipment', 'Group Training'],
    stats: [
      { label: 'Stations', value: '15' },
      { label: 'Max Class', value: '25' },
      { label: 'Screens', value: '6' }
    ],
    availability: {
      weekdays: '5:00 AM - 10:00 PM',
      weekends: '6:00 AM - 9:00 PM'
    },
    capacity: 25,
    area: '1200 sq ft'
  },
  {
    id: 'team-photo',
    title: 'R1PFitness Team & Community',
    description: 'Join the R1PFitness Ohana! This photo captures our amazing team and gym members together after an exhilarating outdoor activity. Experience the camaraderie and support that defines our community.',
    image: 'https://res.cloudinary.com/dyop38nwj/image/upload/v1738914500/Ripfitness/Gym/gym8.jpg',
    size: 'large',
    type: 'Community',
    category: 'Events & Activities',
    features: ['Outdoor Activities', 'Team Building', 'Community Support', 'Group Fitness'],
    stats: [
      { label: 'Members in Photo', value: '40+' },
      { label: 'Outdoor Events/Month', value: '2' }
    ],
    availability: {
      weekdays: 'N/A',
      weekends: 'See Schedule'
    },
    capacity: 40,
    area: 'Outdoor'
  },
  {
    id: 'abs-zone',
    title: 'Abs & Core Zone',
    description: 'Sculpt your core in our dedicated Abs & Core Zone. Featuring specialized equipment like dip machines for leg raises and a variety of tools to target every angle of your abs.',
    image: 'https://res.cloudinary.com/dyop38nwj/image/upload/v1738914822/Ripfitness/Gym/gym21.jpg',
    size: 'small',
    type: 'Standard',
    category: 'Functional',
    features: ['Dip Machines', 'Ab Rollers', 'Stability Balls', 'Core Training'],
    stats: [
      { label: 'Dip Machines', value: '3' },
      { label: 'Ab Rollers', value: '5' }
    ],
    availability: {
      weekdays: '6:00 AM - 10:00 PM',
      weekends: '7:00 AM - 9:00 PM'
    },
    capacity: 10,
    area: '600 sq ft'
  },
  {
    id: 'squat-rack-zone',
    title: 'Squat Rack Zone',
    description: 'Build strength and power in our Squat Rack Zone. This area is fully equipped with multiple squat racks and safety features for effective and safe lower body training.',
    image: 'https://res.cloudinary.com/dyop38nwj/image/upload/v1738914820/Ripfitness/Gym/gym18.jpg',
    size: 'small',
    type: 'Standard',
    category: 'Strength',
    features: ['Squat Racks', 'Safety Catches', 'Weightlifting Platforms'],
    stats: [
      { label: 'Squat Racks', value: '6' },
      { label: 'Weight Capacity', value: '800 lbs' }
    ],
    availability: {
      weekdays: '6:00 AM - 10:00 PM',
      weekends: '7:00 AM - 9:00 PM'
    },
    capacity: 12,
    area: '700 sq ft'
  },
  {
    id: 'mobility-lab',
    title: 'Mobility Lab',
    description: 'Cutting-edge mobility and rehabilitation space with advanced assessment and training tools.',
    image: 'https://res.cloudinary.com/dyop38nwj/image/upload/v1738914820/Ripfitness/Gym/gym7.jpg',
    size: 'medium',
    type: 'Elite',
    category: 'Recovery',
    features: ['3D Movement Analysis', 'Mobility Tools', 'Rehab Equipment'],
    stats: [
      { label: 'Assessment Pods', value: '4' },
      { label: 'Specialists', value: '3' }
    ],
    availability: {
      weekdays: '7:00 AM - 9:00 PM',
      weekends: '8:00 AM - 6:00 PM'
    },
    capacity: 8,
    area: '600 sq ft'
  },
  {
    id: 'r1p-merch-shop',
    title: 'R1p Fitness Shop',
    description: 'Your one-stop destination for top-quality, premium, and stylish R1p Fitness merchandise. Our merch is so popular, it\'s often out of stock as soon as new items arrive!',
    image: 'https://res.cloudinary.com/dyop38nwj/image/upload/v1738914868/Ripfitness/Gym/gym28.jpg',
    size: 'large',
    type: 'Retail',
    category: 'Merchandise',
    features: ['Premium Quality', 'Stylish Designs', 'Limited Edition Items'],
    stats: [
      { label: 'Items Sold Daily', value: '50+' },
      { label: 'Restock Frequency', value: 'Weekly' }
    ],
    availability: {
      weekdays: '9:00 AM - 8:00 PM',
      weekends: '10:00 AM - 6:00 PM'
    },
    capacity: 20,
    area: '300 sq ft'
  }
];
