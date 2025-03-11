export type BlogCategory = 
  | "Fitness"
  | "Nutrition"
  | "Mental Health"
  | "Training"
  | "Recovery"
  | "Lifestyle"
  | "Success Stories"
  | "Military Fitness"
  | "Dance"
  | "Community";

export type BlogTag = 
  | "Beginner"
  | "Advanced"
  | "Tips"
  | "Guide"
  | "Workout"
  | "Diet"
  | "Motivation"
  | "Transformation"
  | "Interview"
  | "Event"
  | "Mental Training"
  | "Discipline"
  | "Weight Loss"
  | "Science"
  | "Nutrition"
  | "Exercise"
  | "Psychology";

export interface BlogAuthor {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
  social: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export interface BlogImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface BlogLink {
  text: string;
  href: string;
}

export interface BlogListItem {
  text: string;
  links?: BlogLink[];
}

export interface BlogContent {
  type: "paragraph" | "heading" | "image" | "quote" | "list" | "video";
  content: string | (string | BlogListItem)[] | BlogImage;
  links?: BlogLink[];
}

export interface Blog {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  tags: BlogTag[];
  author: BlogAuthor;
  publishDate: string;
  readTime: number;
  featured: boolean;
  premium: boolean;
  mainImage: BlogImage;
  content: BlogContent[];
  relatedPosts?: string[]; // IDs of related blog posts
  likes: number;
  views: number;
  comments: number;
} 