import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blogs" },
  ],
  services: [
    { label: "Elite Instructors", href: "/instructors" },
    { label: "Class Schedule", href: "/schedule" },
  ],
  resources: [
    { label: "Free Trial", href: "/trial" },
    { label: "FAQ", href: "/#faq" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "Help Center", href: "/help-center" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
  family: [
    { label: "R1P Fitness", href: "https://www.r1pfitness.com/" },
    { label: "R1P Ohana Store", href: "https://www.r1pohana.com/" },
  ]
};

export const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/p/Paradise-Latin-Dance-61555017040130/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/paradiselatindance/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@Paradiselatindance", label: "Youtube" }
];

// TikTok link (icon handled separately in component)
export const tiktokLink = {
  href: "https://www.tiktok.com/@paradiselatindance",
  label: "TikTok"
};

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
    text: "(808) 840-9926",
    href: "tel:+18088409926"
  },
  {
    icon: Mail,
    label: "Email",
    text: "paradiselatindance@gmail.com",
    href: "mailto:paradiselatindance@gmail.com"
  },
  {
    icon: Clock,
    label: "Hours",
    text: "Mon-Fri: 6AM-9PM | Sat: 7AM-4PM | Sun: 7AM-1PM",
    href: "/schedule"
  }
];
