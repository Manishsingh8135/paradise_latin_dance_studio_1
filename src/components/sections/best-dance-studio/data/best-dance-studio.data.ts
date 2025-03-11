import { BestDanceStudioData } from "../types/best-dance-studio.types";
import { Award, Star, Users, Calendar, Trophy, Heart } from "lucide-react";

export const bestDanceStudioData: BestDanceStudioData = {
  title: "Crown of Paradise",
  subtitle: "Hawaii's Premier Latin Dance Studio",
  tagline: "Where Hawaiian Aloha meets Latin Fire",
  description: "Paradise Latin Dance Studio stands as the undisputed leader in authentic Latin dance education in Hawaii, bringing the vibrant rhythms and passionate movements of Latin culture to the islands with unparalleled expertise and style.",
  
  accolades: [
    {
      id: "best-studio-2023",
      type: "award",
      title: "Best Dance Studio in O'ahu",
      description: "Recognized as the top dance studio across all genres by Honolulu Magazine's 'Best of O'ahu' readers' choice awards.",
      year: "2023",
      icon: "Trophy",
      featured: true,
    },
    {
      id: "cultural-excellence",
      type: "recognition",
      title: "Cultural Excellence Award",
      description: "Honored for outstanding contributions to cultural diversity and education in Hawaii.",
      year: "2022",
      icon: "Award",
    },
    {
      id: "instructor-certification",
      type: "milestone",
      title: "Professional Certification Excellence",
      description: "100% of our instructors hold international certifications in their dance specialties, the highest rate in Hawaii.",
      icon: "Medal",
    },
    {
      id: "community-impact",
      type: "recognition",
      title: "Community Impact Recognition",
      description: "Acknowledged for providing free Latin dance education programs to underserved communities across the Hawaiian islands.",
      year: "2023",
      icon: "Heart",
    },
  ],
  
  statistics: [
    {
      id: "student-count",
      label: "Active Students",
      value: 1250,
      unit: "+",
      icon: "Users",
      description: "Dancing with us across all levels and styles",
    },
    {
      id: "experience",
      label: "Years of Excellence",
      value: 8,
      icon: "Calendar",
      description: "Setting the standard for Latin dance in Hawaii",
    },
    {
      id: "classes",
      label: "Weekly Classes",
      value: 45,
      icon: "Clock",
      description: "Diverse options for all schedules and levels",
    },
    {
      id: "satisfaction",
      label: "Student Satisfaction",
      value: 98,
      unit: "%",
      icon: "Star",
      description: "Based on our continuous feedback system",
    },
  ],
  
  testimonialQuotes: [
    {
      id: "mayor-quote",
      quote: "Paradise Latin Dance Studio has become a cultural treasure of our islands, bringing communities together through the universal language of dance.",
      author: "Honorable Mayor of Honolulu",
      role: "City Official",
      featured: true,
    },
    {
      id: "celebrity-quote",
      quote: "When I'm in Hawaii, Paradise is my go-to for keeping my salsa skills sharp. No other studio comes close to their authenticity and energy.",
      author: "Jennifer Santos",
      role: "Professional Dancer & TV Personality",
    },
    {
      id: "tourism-quote",
      quote: "We consistently recommend Paradise Latin Dance to visitors seeking authentic cultural experiences beyond the typical tourist activities.",
      author: "Hawaii Tourism Authority",
      role: "Official Tourism Board",
    },
  ],
  
  visualLayers: [
    {
      id: "bg-island",
      imageUrl: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738826481/Ripfitness/Dance-studio/lds-2_rgxwi8.jpg",
      depth: 90,
      opacity: 0.1,
      blur: 0,
      animation: "float",
    },
    {
      id: "bg-pattern",
      imageUrl: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738826480/Ripfitness/Dance-studio/lds-3_jlnuvb.jpg",
      depth: 70,
      opacity: 0.08,
      animation: "pulse",
    },
    {
      id: "dancers-silhouette",
      imageUrl: "https://res.cloudinary.com/dyop38nwj/image/upload/v1737477080/Ripfitness/Dance-studio/481ED18E-99CB-445B-8ADF-CB8291395D88_morepr.jpg",
      depth: 40,
      opacity: 0.6,
      animation: "float",
    },
    {
      id: "crown-accent",
      imageUrl: "https://res.cloudinary.com/dyop38nwj/image/upload/v1739866250/Ripfitness/Dance-studio/gold-crown_ahgvxf.png",
      depth: 20,
      opacity: 0.9,
      animation: "pulse",
    },
    {
      id: "tropical-overlay",
      imageUrl: "https://res.cloudinary.com/dyop38nwj/image/upload/v1737476989/Ripfitness/Dance-studio/ParadaiseLatinDance_46of55_yz6tx4.jpg",
      depth: 10,
      opacity: 0.15,
      animation: "float",
    }
  ],
  
  cta: {
    primary: {
      text: "Experience the Best",
      url: "/classes",
    },
    secondary: {
      text: "Our Achievement Gallery",
      url: "/achievements",
    },
  },
}; 