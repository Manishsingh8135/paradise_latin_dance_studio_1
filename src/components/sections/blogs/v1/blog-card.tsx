"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, Eye, MessageCircle, Heart, Crown, ArrowUpRight } from "lucide-react";
import { BlogCardProps } from "../types/blog-section-types";
import { categoryMetadata } from "../data/blog-categories";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export function BlogCard({ blog, variant = "default", showAuthor = true, showExcerpt = true, className }: BlogCardProps) {
  // Find category metadata
  const category = categoryMetadata.find(c => c.category === blog.category);
  const CategoryIcon = category?.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative overflow-hidden",
        variant === "featured" ? "rounded-3xl" : "rounded-2xl",
        "bg-black/40 backdrop-blur-sm border border-white/10",
        "hover:border-[#FFD700]/30 transition-colors duration-300",
        "hover:shadow-[0_0_50px_-12px] hover:shadow-[#FFD700]/20",
        className
      )}
    >
      {/* Premium Badge */}
      {blog.premium && (
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-[#FFD700]/10 backdrop-blur-sm border border-[#FFD700]/20 rounded-full px-3 py-1">
          <Crown className="w-4 h-4 text-[#FFD700]" />
          <span className="text-[#FFD700] text-xs font-medium">Premium</span>
        </div>
      )}

      {/* Image Container */}
      <div className={cn(
        "relative overflow-hidden",
        variant === "featured" ? "aspect-[2/1]" : "aspect-[3/2]"
      )}>
        <Image
          src={blog.mainImage.url}
          alt={blog.mainImage.alt}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
        
        {/* Category Badge */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <div className={cn(
            "flex items-center gap-2 px-3 py-1.5 rounded-full",
            "bg-black/40 backdrop-blur-sm border border-white/10",
            "group-hover:border-[#FFD700]/20 transition-colors duration-300"
          )}>
            {CategoryIcon && <CategoryIcon className="w-4 h-4 text-[#FFD700]" />}
            <span className="text-white text-sm font-medium">{blog.category}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className={cn(
          "font-bold text-white group-hover:text-[#FFD700] transition-colors duration-300",
          variant === "featured" ? "text-2xl md:text-3xl mb-4" : "text-xl mb-3"
        )}>
          {blog.title}
        </h3>

        {/* Excerpt */}
        {showExcerpt && (
          <p className="text-white/60 text-sm mb-6 line-clamp-2">
            {blog.description}
          </p>
        )}

        {/* Author */}
        {showAuthor && (
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#FFD700]/20">
              <Image
                src={blog.author.image}
                alt={blog.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-white font-medium text-sm">{blog.author.name}</div>
              <div className="text-white/60 text-xs">{blog.author.role}</div>
            </div>
          </div>
        )}

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4 text-white/60">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{blog.readTime} min read</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{blog.views}</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-white/60">
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>{blog.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" />
              <span>{blog.comments}</span>
            </div>
          </div>
        </div>

        {/* Date */}
        <div className="mt-4 text-xs text-white/40">
          {format(new Date(blog.publishDate), "MMMM d, yyyy")}
        </div>

        {/* Hover Action */}
        <div className={cn(
          "absolute right-6 bottom-6",
          "transform transition-all duration-300",
          "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
        )}>
          <div className="flex items-center gap-1 text-[#FFD700]">
            <span className="text-sm font-medium">Read More</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Link overlay */}
      <Link href={`/blogs/${blog.slug}`} className="absolute inset-0 z-20">
        <span className="sr-only">Read more about {blog.title}</span>
      </Link>
    </motion.div>
  );
} 