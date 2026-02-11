import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogData } from "@/components/sections/blogs/data/blog-data";
import { BlogPost } from "@/components/sections/blogs/v1/blog-post";

type Params = Promise<{ slug: string }>;
type Props = { params: Params };

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const blog = blogData.find((post) => post.slug === params.slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found | Paradise Latin Dance",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${blog.title} | Paradise Latin Dance Blog`,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [
        {
          url: blog.mainImage.url,
          width: 1200,
          height: 630,
          alt: blog.mainImage.alt,
        },
      ],
    },
  };
}

export default async function BlogPostPage(props: Props) {
  const params = await props.params;
  const blog = blogData.find((post) => post.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black w-full overflow-x-hidden">
      <div className="max-w-full">
        <BlogPost blog={blog} />
      </div>
    </main>
  );
} 