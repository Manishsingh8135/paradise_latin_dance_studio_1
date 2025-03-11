"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowLeft, Clock, Eye, Heart, MessageCircle, Crown } from "lucide-react";
import { Blog, BlogContent, BlogListItem } from "../types/blog-types";
import { categoryMetadata } from "../data/blog-categories";
import { HeroParticles } from "@/components/ui/hero-particles";

interface BlogPostProps {
  blog: Blog;
}

export function BlogPost({ blog }: BlogPostProps) {
  // Find category metadata
  const category = categoryMetadata.find(c => c.category === blog.category);
  const CategoryIcon = category?.icon;

  const renderContent = (content: BlogContent) => {
    switch (content.type) {
      case "paragraph":
        let text = content.content as string;
        const links = content.links || [];
        
        // Replace each link text with a Next.js Link component
        links.forEach(link => {
          const parts = text.split(link.text);
          text = parts.join(
            `<link href="${link.href}">${link.text}</link>`
          );
        });

        // Split the text by link tags and render accordingly
        const parts = text.split(/<link|<\/link>/);
        return (
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            {parts.map((part, index) => {
              if (part.startsWith(" href=")) {
                const href = part.match(/href="([^"]+)"/)?.[1];
                const linkText = part.split(">")[1];
                return (
                  <Link
                    key={index}
                    href={href || ""}
                    className="text-[#FFD700] hover:underline"
                  >
                    {linkText}
                  </Link>
                );
              }
              return part;
            })}
          </p>
        );
      case "heading":
        return (
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            {content.content as string}
          </h2>
        );
      case "list":
        const items = content.content as (string | BlogListItem)[];
        return (
          <ul className="list-disc list-inside text-white/80 space-y-2 mb-6">
            {items.map((item, index) => {
              if (typeof item === "string") {
                return <li key={index} className="text-lg">{item}</li>;
              }
              
              let text = item.text;
              const links = item.links || [];
              
              // Replace each link text with a Next.js Link component
              links.forEach(link => {
                const parts = text.split(link.text);
                text = parts.join(
                  `<link href="${link.href}">${link.text}</link>`
                );
              });

              // Split the text by link tags and render accordingly
              const parts = text.split(/<link|<\/link>/);
              return (
                <li key={index} className="text-lg">
                  {parts.map((part, partIndex) => {
                    if (part.startsWith(" href=")) {
                      const href = part.match(/href="([^"]+)"/)?.[1];
                      const linkText = part.split(">")[1];
                      return (
                        <Link
                          key={partIndex}
                          href={href || ""}
                          className="text-[#FFD700] hover:underline"
                        >
                          {linkText}
                        </Link>
                      );
                    }
                    return part;
                  })}
                </li>
              );
            })}
          </ul>
        );
      case "image":
        const image = content.content as { url: string; alt: string; caption?: string };
        return (
          <figure className="mb-6">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
            {image.caption && (
              <figcaption className="text-center text-white/60 text-sm mt-2">
                {image.caption}
              </figcaption>
            )}
          </figure>
        );
      case "quote":
        return (
          <blockquote className="border-l-4 border-[#FFD700] pl-6 my-8">
            <p className="text-xl text-white/90 italic">
              {content.content as string}
            </p>
          </blockquote>
        );
      default:
        return null;
    }
  };

  return (
    <article className="relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <HeroParticles />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Hero Section */}
      <div className="relative">
        {/* Header Image */}
        <div className="relative h-[60vh] min-h-[400px]">
          <Image
            src={blog.mainImage.url}
            alt={blog.mainImage.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
                >
                  <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                  <span>Back to Blogs</span>
                </Link>
              </motion.div>

              {/* Category */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-4"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                  {CategoryIcon && <CategoryIcon className="w-4 h-4 text-[#FFD700]" />}
                  <span className="text-white">{blog.category}</span>
                </div>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                {blog.title}
              </motion.h1>

              {/* Meta Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-6 text-white/60"
              >
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blog.readTime} min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{blog.views} views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  <span>{blog.likes} likes</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>{blog.comments} comments</span>
                </div>
                <div>
                  {format(new Date(blog.publishDate), "MMMM d, yyyy")}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Premium Badge */}
          {blog.premium && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/20">
                <Crown className="w-5 h-5 text-[#FFD700]" />
                <span className="text-[#FFD700] font-medium">Premium Article</span>
              </div>
            </motion.div>
          )}

          {/* Author */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#FFD700]/20">
              <Image
                src={blog.author.image}
                alt={blog.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-white font-medium">{blog.author.name}</div>
              <div className="text-white/60">{blog.author.role}</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {blog.content.map((content, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {renderContent(content)}
              </motion.div>
            ))}
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12"
          >
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <div
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-sm"
                >
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(255,215,0,0.1),transparent_50%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(218,165,32,0.1),transparent_50%)] blur-3xl pointer-events-none" />
    </article>
  );
} 