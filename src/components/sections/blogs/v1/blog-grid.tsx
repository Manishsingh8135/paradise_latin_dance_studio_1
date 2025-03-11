"use client";

import { motion } from "framer-motion";
import { BlogGridProps } from "../types/blog-section-types";
import { BlogCard } from "./blog-card";
import { cn } from "@/lib/utils";

export function BlogGrid({ blogs, showFeatured = true, columns = 3, maxItems }: BlogGridProps) {
  const featuredBlogs = blogs.filter(blog => blog.featured);
  const regularBlogs = blogs.filter(blog => !blog.featured);
  
  // If maxItems is specified, limit both featured and regular blogs
  const displayFeaturedBlogs = maxItems 
    ? featuredBlogs.slice(0, Math.min(2, maxItems))
    : featuredBlogs;
    
  const displayRegularBlogs = maxItems 
    ? regularBlogs.slice(0, Math.max(0, maxItems - displayFeaturedBlogs.length))
    : regularBlogs;

  // Calculate remaining featured blogs that weren't shown in the featured section
  const remainingFeaturedBlogs = maxItems 
    ? featuredBlogs.slice(Math.min(2, maxItems))
    : featuredBlogs.slice(2);

  // Combine remaining featured blogs with regular blogs
  const allRemainingBlogs = [...remainingFeaturedBlogs, ...displayRegularBlogs];

  return (
    <div className="space-y-8">
      {/* Featured Blogs - Show max 2 in featured layout */}
      {showFeatured && displayFeaturedBlogs.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {displayFeaturedBlogs.slice(0, 2).map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard
                blog={blog}
                variant="featured"
                showAuthor
                showExcerpt
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* Regular Blogs Grid - Show all remaining blogs */}
      {allRemainingBlogs.length > 0 && (
        <div className={cn(
          "grid gap-6",
          columns === 1 && "grid-cols-1",
          columns === 2 && "grid-cols-1 md:grid-cols-2",
          columns === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          columns === 4 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        )}>
          {allRemainingBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard
                blog={blog}
                variant="default"
                showAuthor
                showExcerpt
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {blogs.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="text-white/60">No blog posts found</div>
        </motion.div>
      )}
    </div>
  );
} 