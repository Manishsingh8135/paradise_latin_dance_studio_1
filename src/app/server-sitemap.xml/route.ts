import { getServerSideSitemap } from 'next-sitemap';
import { blogData } from "@/components/sections/blogs/data/blog-data";
import { instructors } from "@/components/sections/instructors/data/instructors-data";

// Define a type for sitemap entries
type SitemapEntry = {
  loc: string;
  lastmod: string;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
};

export async function GET() {
  try {
    // Create entries for blog posts (if they exist)
    let blogEntries: SitemapEntry[] = [];
    try {
      blogEntries = blogData.map((post) => ({
        loc: `https://paradiselatindance.com/blogs/${post.slug}`,
        lastmod: new Date(post.publishDate || Date.now()).toISOString(),
        changefreq: 'weekly',
        priority: 0.8,
      }));
    } catch (error) {
      console.error("Error processing blog data:", error);
      blogEntries = [];
    }
    
    // Create entries for instructor pages
    let instructorEntries: SitemapEntry[] = [];
    try {
      instructorEntries = instructors.map((instructor) => ({
        loc: `https://paradiselatindance.com/instructors/${instructor.id}`,
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7,
      }));
    } catch (error) {
      console.error("Error processing instructor data:", error);
      instructorEntries = [];
    }

    // Create entries for dance style pages
    const danceStyleEntries: SitemapEntry[] = [
      {
        loc: `https://paradiselatindance.com/dance-styles/salsa`,
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8,
      },
      {
        loc: `https://paradiselatindance.com/dance-styles/bachata`,
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8,
      },
      {
        loc: `https://paradiselatindance.com/dance-styles/contemporary`,
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7,
      },
      {
        loc: `https://paradiselatindance.com/dance-styles/hip-hop`,
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7,
      },
    ];

    // Combine all dynamic entries
    const entries = [...blogEntries, ...instructorEntries, ...danceStyleEntries];

    return getServerSideSitemap(entries);
  } catch (error) {
    console.error("Error generating server sitemap:", error);
    return new Response("Error generating sitemap", { status: 500 });
  }
} 