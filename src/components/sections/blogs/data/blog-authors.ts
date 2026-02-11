import { BlogAuthor } from "../types/blog-types";
import { OPTIMIZED_URLS } from "@/lib/cloudinary";

export const blogAuthors: BlogAuthor[] = [
  {
    id: "rico-dance",
    name: "Rico",
    role: "Lead Dance Instructor & Co-Founder",
    image: OPTIMIZED_URLS.rico,
    bio: "A passionate dance instructor from the Dominican Republic, Rico brings authentic Latin flavor and vibrant energy to Paradise Latin Dance. His dynamic teaching style inspires students of all levels.",
    specialties: ["Salsa", "Bachata", "Latin Dance Culture"],
    social: {
      instagram: "https://www.instagram.com/_ricostory/",
      facebook: "https://www.facebook.com/p/Paradise-Latin-Dance-61555017040130/"
    }
  },
  {
    id: "mike-dance",
    name: "Mike Lorenzo",
    role: "Senior Dance Instructor & Co-Founder",
    image: OPTIMIZED_URLS.mike,
    bio: "Experienced dance instructor with expertise in multiple Latin dance styles. Mike specializes in breaking down complex movements into easy-to-follow steps for dancers of all levels.",
    specialties: ["Salsa", "Bachata", "Partner Work"],
    social: {
      instagram: "https://www.instagram.com/mikelorenzojr/",
      facebook: "https://www.facebook.com/p/Paradise-Latin-Dance-61555017040130/"
    }
  },
  {
    id: "paradise-team",
    name: "Paradise Latin Dance Team",
    role: "Studio Team",
    image: OPTIMIZED_URLS.paradiseDance,
    bio: "The Paradise Latin Dance team is dedicated to bringing the joy of Latin dance to Hawaii. Our community-focused approach makes learning dance fun and accessible.",
    specialties: ["Community Events", "Dance Education", "Hawaiian Dance Scene"],
    social: {
      instagram: "https://www.instagram.com/paradiselatindance/",
      facebook: "https://www.facebook.com/p/Paradise-Latin-Dance-61555017040130/"
    }
  }
];
