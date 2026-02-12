import { NavMenuItem, NavAction, NavbarBrandProps } from '../types/navbar.types';
import { Sparkles } from "lucide-react";

export const navBrand: NavbarBrandProps = {
  logo: {
    src: "/logo/logo.png",
    alt: "Paradise Latin Dance Logo",
    width: 48,
    height: 48
  },
  name: "Paradise",
  tagline: "Latin Dance"
};

export const navItems: NavMenuItem[] = [
  {
    id: 'trainers',
    label: 'Elite Instructors',
    href: '/instructors'
  },
  {
    id: 'schedule',
    label: 'Class Schedule',
    href: '/schedule',
  },
  {
    id: 'contact',
    label: 'Contact Us',
    href: '/contact',
  }
];

export const navActions: NavAction[] = [
  {
    id: 'book-class',
    label: 'Free Trial',
    href: '/trial',
    variant: 'primary',
    icon: Sparkles
  }
];

export const mobileNavFeatures = [
  {
    id: 'schedule',
    title: 'Class Schedule',
    description: 'View our weekly dance class schedule',
    icon: 'Calendar',
    href: '/schedule'
  },
  {
    id: 'trial',
    title: 'Free Trial Class',
    description: 'Book your first class for free',
    icon: 'Sparkles',
    href: '/trial'
  }
];
