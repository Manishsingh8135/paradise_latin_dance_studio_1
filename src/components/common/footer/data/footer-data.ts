import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "#careers" },
    { label: "Blog", href: "/blogs" },
    
  ],
  services: [
    { label: "Paradise Latin Dance", href: "/dance-studio" },
    { label: "R1P Store", href: "#merchandise" },
    { label: "Trainers", href: "/trainers" },
    { label: "Training Programs", href: "#training-programs" }
  ],
  resources: [
    { label: "Success Stories", href: "#stories" },
    { label: "Workout Plans", href: "#workouts" },
    { label: "FAQ", href: "#faq" },
    { label: "Community", href: "#community" }
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "Help Center", href: "/help-center" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ]
};

export const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/R1PFITNESS/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/r1pfitness/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@r1pfitness728", label: "Youtube" }
];

export const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    text: "94-111 Leokane St #150A, Waipahu, HI 96797",
    href: "https://maps.google.com"
  },
  {
    icon: Phone,
    label: "Phone",
    text: "(808) 208-1066",
    href: "tel:+18082081066"
  },
  {
    icon: Mail,
    label: "Email",
    text: "r1pfitnesspr@gmail.com",
    href: "mailto:r1pfitnesspr@gmail.com"
  },
  {
    icon: Clock,
    label: "Hours",
    text: "Mon-Fri: 6AM-9PM | Sat: 7AM-4PM | Sun: 7AM-1PM",
    href: "/schedule"
  }
];
