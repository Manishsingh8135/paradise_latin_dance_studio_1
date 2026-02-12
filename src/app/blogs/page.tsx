import { BlogSection } from "@/components/sections/blogs/v1/blog-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Paradise Latin Dance Studio",
  description: "Dance tips, Latin dance culture, and inspiring stories from the Paradise Latin Dance community in Hawaii.",
  keywords: [
    "latin dance blog",
    "salsa tips hawaii",
    "bachata guide",
    "dance culture hawaii",
    "paradise dance blog",
    "learn latin dance",
  ],
  openGraph: {
    title: "Blog | Paradise Latin Dance Studio",
    description: "Dance tips, Latin dance culture, and inspiring stories from the Paradise Latin Dance community in Hawaii.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Paradise Latin Dance Studio",
    description: "Dance tips, Latin dance culture, and inspiring stories from the Paradise Latin Dance community.",
  },
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-black">
      <BlogSection />
    </main>
  );
} 