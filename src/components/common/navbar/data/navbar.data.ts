import { NavMenuItem, NavAction, NavbarBrandProps } from '../types/navbar.types';

export const navBrand: NavbarBrandProps = {
  logo: {
    src: "/logo/logo.png",
    alt: "RipFitness Logo",
    width: 48,
    height: 48
  },
  name: "Paradise",
  tagline: "Latin Dance"
};

export const navItems: NavMenuItem[] = [
  // {
  //   id: 'programs',
  //   label: 'Programs',
  //   href: '/programs',
  //   features: [
  //     {
  //       id: 'strength',
  //       title: 'Strength Training',
  //       description: 'Build muscle and increase power',
  //       icon: 'Dumbbell',
  //       href: '/programs/strength'
  //     },
  //     {
  //       id: 'cardio',
  //       title: 'Cardio Excellence',
  //       description: 'Enhance endurance and stamina',
  //       icon: 'Running',
  //       href: '/programs/cardio'
  //     },
  //     {
  //       id: 'hiit',
  //       title: 'HIIT Sessions',
  //       description: 'Maximum results in minimum time',
  //       icon: 'Timer',
  //       href: '/programs/hiit'
  //     },
  //     {
  //       id: 'yoga',
  //       title: 'Elite Yoga',
  //       description: 'Flexibility and mindfulness',
  //       icon: 'Yoga',
  //       href: '/programs/yoga'
  //     }
  //   ]
  // },
  // {
  //   id: 'amenities',
  //   label: 'Amenities',
  //   href: '/amenities',
  //   features: [
  //     {
  //       id: 'equipment',
  //       title: 'Premium Equipment',
  //       description: 'State-of-the-art fitness machines',
  //       icon: 'Gym',
  //       href: '/amenities/equipment'
  //     },
  //     {
  //       id: 'spa',
  //       title: 'Luxury Spa',
  //       description: 'Recovery and relaxation',
  //       icon: 'Spa',
  //       href: '/amenities/spa'
  //     },
  //     {
  //       id: 'pool',
  //       title: 'Olympic Pool',
  //       description: 'Indoor heated swimming',
  //       icon: 'Pool',
  //       href: '/amenities/pool'
  //     },
  //     {
  //       id: 'cafe',
  //       title: 'Nutrition Bar',
  //       description: 'Healthy meals and supplements',
  //       icon: 'Coffee',
  //       href: '/amenities/cafe'
  //     }
  //   ]
  // },
  {
    id: 'trainers',
    label: 'Elite Instructors',
    href: '/instructors'
  },
  // {
  //   id: 'schedule',
  //   label: 'Class Schedule',
  //   href: '/schedule',
  //   isDynamic: true
  // },
  {
    id: 'contact',
    label: 'Contact Us',
    href: '/contact',
  }

];

export const navActions: NavAction[] = [
  // {
  //   id: 'member-login',
  //   label: 'Member Login',
  //   href: '/login',
  //   variant: 'ghost',
  //   icon: 'User'
  // },
  {
    id: 'book-class',
    label: 'Free Trial',
    href: '/trial',
    variant: 'primary',
    icon: 'Sparkles'
  }
];

export const mobileNavFeatures = [
  {
    id: 'locations',
    title: 'Find a Gym',
    description: 'Locate our premium facilities near you',
    icon: 'MapPin',
    href: '/locations'
  },
  {
    id: 'virtual',
    title: 'Virtual Training',
    description: 'Elite workouts from anywhere',
    icon: 'Video',
    href: '/virtual'
  }
];