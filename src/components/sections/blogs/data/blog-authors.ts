import { BlogAuthor } from "../types/blog-types";
import { OPTIMIZED_URLS } from "@/lib/cloudinary";

export const blogAuthors: BlogAuthor[] = [
  {
    id: "hipolito-rivera",
    name: "Hipolito Rivera",
    role: "Founder & Master Trainer",
    image: OPTIMIZED_URLS.rico, // Using Rico's image as placeholder
    bio: "High School All-American Athlete and 8 years US Navy Command Fitness Leader with 13+ years of expert training experience.",
    specialties: ["Military Training", "Strength & Conditioning", "Leadership"],
    social: {
      instagram: "https://www.instagram.com/r1pfitness",
      facebook: "https://www.facebook.com/R1PFITNESS"
    }
  },
  {
    id: "jonathan-diaz",
    name: "Jonathan Diaz",
    role: "Elite Trainer & Champion",
    image: OPTIMIZED_URLS.mike, // Using Mike's image as placeholder
    bio: "NASM Certified Personal Trainer specializing in strength & conditioning, bodybuilding, and weight loss transformations. 2-Time Hawaiian Physique Bodybuilding Champion.",
    specialties: ["Bodybuilding", "Weight Loss", "Competition Prep"],
    social: {
      instagram: "https://www.instagram.com/r1pfitness"
    }
  },
  {
    id: "rico-dance",
    name: "Rico",
    role: "Lead Dance Instructor",
    image: OPTIMIZED_URLS.rico,
    bio: "Professional dance instructor specializing in Latin dance styles. Passionate about bringing dance and fitness together.",
    specialties: ["Latin Dance", "Choreography", "Dance Fitness"],
    social: {
      instagram: "https://www.instagram.com/r1pfitness"
    }
  },
  {
    id: "mike-dance",
    name: "Mike",
    role: "Senior Dance Instructor",
    image: OPTIMIZED_URLS.mike,
    bio: "Experienced dance instructor with expertise in multiple Latin dance styles. Specializes in beginner-friendly instruction.",
    specialties: ["Salsa", "Bachata", "Dance Instruction"],
    social: {
      instagram: "https://www.instagram.com/r1pfitness"
    }
  }
]; 