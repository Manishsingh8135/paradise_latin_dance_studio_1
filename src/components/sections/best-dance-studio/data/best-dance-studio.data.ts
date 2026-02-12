import { BestDanceStudioData } from "../types/best-dance-studio.types";
import { OPTIMIZED_URLS } from "@/lib/cloudinary";

export const bestDanceStudioData: BestDanceStudioData = {
  title: "Crown of Paradise",
  subtitle: "Hawaii's Premier Latin Dance Studio",
  tagline: "Where Hawaiian Aloha meets Latin Fire",
  description: "Paradise Latin Dance Studio stands as the undisputed leader in authentic Latin dance education in Hawaii, bringing the vibrant rhythms and passionate movements of Latin culture to the islands with unparalleled expertise and style.",
  
  accolades: [
    {
      id: "best-studio",
      type: "award",
      title: "Hawaii's Premier Latin Dance Studio",
      description: "Recognized by the local dance community as the go-to destination for authentic salsa and bachata instruction on O'ahu.",
      year: "2024",
      icon: "Trophy",
      featured: true,
    },
    {
      id: "community-builder",
      type: "recognition",
      title: "Building Hawaii's Latin Dance Scene",
      description: "Bringing authentic Latin dance culture to the islands and fostering a thriving community of passionate dancers since 2019.",
      year: "2019",
      icon: "Award",
    },
    {
      id: "expert-instruction",
      type: "milestone",
      title: "Expert Instruction",
      description: "Our instructors bring 10+ years of combined experience in salsa and bachata, with deep roots in authentic Latin dance traditions.",
      icon: "Medal",
    },
    {
      id: "community-impact",
      type: "recognition",
      title: "Dance Ohana Community",
      description: "Building a welcoming, inclusive community where dancers of all backgrounds and skill levels can grow together on and off the dance floor.",
      year: "2024",
      icon: "Heart",
    },
  ],
  
  statistics: [
    {
      id: "student-count",
      label: "Happy Dancers",
      value: 500,
      unit: "+",
      icon: "Users",
      description: "Have danced with us since 2019",
    },
    {
      id: "experience",
      label: "Years of Passion",
      value: 6,
      unit: "+",
      icon: "Calendar",
      description: "Setting the standard for Latin dance in Hawaii since 2019",
    },
    {
      id: "classes",
      label: "Weekly Classes",
      value: 8,
      unit: "+",
      icon: "Clock",
      description: "Salsa & Bachata for every level, Monday through Friday",
    },
    {
      id: "satisfaction",
      label: "5-Star Reviews",
      value: 100,
      unit: "+",
      icon: "Star",
      description: "From our amazing dance community",
    },
  ],
  
  testimonialQuotes: [
    {
      id: "community-quote",
      quote: "Paradise Latin Dance Studio has become a cultural gem on the island, bringing people together through the universal language of dance.",
      author: "Dance Community Member",
      role: "Long-time Student",
      featured: true,
    },
    {
      id: "student-quote",
      quote: "The energy at Paradise is unmatched. Rico and Mike create an atmosphere where everyone feels welcome, whether you're a beginner or an experienced dancer.",
      author: "Returning Student",
      role: "Bachata Enthusiast",
    },
    {
      id: "visitor-quote",
      quote: "If you're visiting Hawaii and love Latin dance, Paradise is a must. The authentic instruction and welcoming vibe make it an incredible experience.",
      author: "Visiting Dancer",
      role: "Dance Traveler",
    },
  ],
  
  visualLayers: [
    {
      id: "bg-island",
      imageUrl: OPTIMIZED_URLS.bachata,
      depth: 90,
      opacity: 0.1,
      blur: 0,
      animation: "float",
    },
    {
      id: "bg-pattern",
      imageUrl: OPTIMIZED_URLS.lds3,
      depth: 70,
      opacity: 0.08,
      animation: "pulse",
    },
    {
      id: "dancers-silhouette",
      imageUrl: OPTIMIZED_URLS.dancePhoto2,
      depth: 40,
      opacity: 0.6,
      animation: "float",
    },
    {
      id: "crown-accent",
      imageUrl: OPTIMIZED_URLS.lds5,
      depth: 20,
      opacity: 0.9,
      animation: "pulse",
    },
    {
      id: "tropical-overlay",
      imageUrl: OPTIMIZED_URLS.paradiseDance,
      depth: 10,
      opacity: 0.15,
      animation: "float",
    }
  ],
  
  cta: {
    primary: {
      text: "Experience the Best",
      url: "/trial",
    },
    secondary: {
      text: "View Our Schedule",
      url: "/schedule",
    },
  },
}; 