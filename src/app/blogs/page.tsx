import { BlogSection } from "@/components/sections/blogs/v1/blog-section";

export const metadata = {
  title: "Blog | Paradise Latin Dance Studio",
  description: "Dance tips, Latin dance culture, and inspiring stories from the Paradise Latin Dance community in Hawaii.",
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-black">
      <BlogSection />
    </main>
  );
} 