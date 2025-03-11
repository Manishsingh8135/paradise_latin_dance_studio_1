import { BlogSection } from "@/components/sections/blogs/v1/blog-section";

export const metadata = {
  title: "Blog | R1P Fitness",
  description: "Expert insights, training tips, and success stories from the R1P Fitness community.",
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-black">
      <BlogSection />
    </main>
  );
} 