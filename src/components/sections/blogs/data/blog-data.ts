import { Blog } from "../types/blog-types";
import { blogAuthors } from "./blog-authors";
import { OPTIMIZED_URLS } from "@/lib/cloudinary";

export const blogData: Blog[] = [
  {
    id: "dance-fitness-revolution",
    slug: "dance-fitness-revolution",
    title: "The Dance Fitness Revolution: Where Joy Meets Results",
    description: "Experience the perfect blend of fun and fitness with our revolutionary dance workouts that transform both body and spirit.",
    category: "Dance",
    tags: ["Beginner", "Guide", "Technique"],
    author: blogAuthors[2], // Rico
    publishDate: "2025-02-01",
    readTime: 6,
    featured: true,
    premium: false,
    mainImage: {
      url: OPTIMIZED_URLS.lds3,
      alt: "Dance fitness class in action"
    },
    content: [
      {
        type: "paragraph",
        content: "Discover the joy of fitness through dance at Paradise Latin Dance Studio. Our dance programs combine high-energy choreography with effective movement principles to create an experience that's both fun and transformative."
      }
    ],
    likes: 189,
    views: 1240,
    comments: 28
  },
]; 