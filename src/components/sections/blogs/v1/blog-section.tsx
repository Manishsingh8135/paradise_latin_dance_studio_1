"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BookOpen, Filter, X } from "lucide-react";
import { BlogGrid } from "./blog-grid";
import { BlogCategories } from "./blog-categories";
import { blogData } from "../data/blog-data";
import { categoryMetadata } from "../data/blog-categories";
import { HeroParticles } from "@/components/ui/hero-particles";
import { BlogCategory } from "../types/blog-types";
import { cn } from "@/lib/utils";

interface MobileFilterProps {
  selectedCategories: BlogCategory[];
  onCategoryChange: (category: BlogCategory) => void;
  onClearFilters: () => void;
  isOpen: boolean;
  onClose: () => void;
}

function MobileFilter({
  selectedCategories,
  onCategoryChange,
  onClearFilters,
  isOpen,
  onClose
}: MobileFilterProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="fixed inset-x-4 top-[10%] bottom-[10%] rounded-2xl bg-black/90 border border-white/10 overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-black/90 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-[#FFD700]" />
            <span className="text-white font-medium">Filter Blogs</span>
            {selectedCategories.length > 0 && (
              <span className="bg-[#FFD700] text-black text-xs font-medium px-2 py-1 rounded-full">
                {selectedCategories.length} selected
              </span>
            )}
          </div>
          <button 
            onClick={onClose} 
            className="text-white/60 hover:text-white"
            aria-label="Close filter menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Categories */}
        <div className="p-4 overflow-y-auto max-h-[calc(100%-8rem)]">
          <div className="space-y-2">
            {categoryMetadata.map(({ category, icon: Icon, description }) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={cn(
                  "w-full p-4 rounded-xl flex items-center gap-3 transition-all duration-300",
                  selectedCategories.includes(category)
                    ? "bg-[#FFD700]/10 border border-[#FFD700]/30"
                    : "bg-white/5 border border-white/10"
                )}
              >
                {Icon && (
                  <Icon className={cn(
                    "w-5 h-5",
                    selectedCategories.includes(category) ? "text-[#FFD700]" : "text-white/60"
                  )} />
                )}
                <div className="flex-1 text-left">
                  <div className={cn(
                    "font-medium",
                    selectedCategories.includes(category) ? "text-[#FFD700]" : "text-white"
                  )}>
                    {category}
                  </div>
                  <div className="text-sm text-white/60">{description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 z-10 p-4 bg-black/90 border-t border-white/10">
          <div className="flex gap-3">
            <button
              onClick={onClearFilters}
              className="flex-1 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              Clear All
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-2 rounded-xl bg-[#FFD700] text-black font-medium hover:bg-[#FFD700]/90 transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BlogSection() {
  const [selectedCategories, setSelectedCategories] = useState<BlogCategory[]>([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Calculate category counts
  const categoryCounts = categoryMetadata.map(({ category }) => ({
    category,
    count: blogData.filter(blog => blog.category === category).length
  }));

  // Filter blogs based on selected categories
  const filteredBlogs = selectedCategories.length === 0
    ? blogData
    : blogData.filter(blog => selectedCategories.includes(blog.category));

  const handleCategoryChange = (category: BlogCategory) => {
    setSelectedCategories(prev => {
      const isSelected = prev.includes(category);
      if (isSelected) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
  };

  return (
    <section className="relative py-32 overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <HeroParticles />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10">
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent font-medium">
                Latest Articles
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mt-6 mb-6"
          >
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Fitness & Wellness
            </span>{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
              Blog
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg mb-8"
          >
            Expert insights, training tips, and success stories to help you on your fitness journey
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={() => setSelectedCategories([])}
              className={`
                px-6 py-3 rounded-xl text-sm font-medium
                transition-all duration-300
                ${selectedCategories.length === 0
                  ? "bg-[#FFD700] text-black"
                  : "bg-white/5 text-white hover:bg-white/10"
                }
              `}
            >
              <BookOpen className="w-4 h-4 inline-block mr-2" />
              All Articles
            </button>
          </motion.div>
        </div>

        {/* Mobile Filter Button */}
        <div className="md:hidden mb-8">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-[#FFD700]" />
              <span className="text-white">Filter Blogs</span>
              {selectedCategories.length > 0 && (
                <span className="bg-[#FFD700] text-black text-xs font-medium px-2 py-1 rounded-full">
                  {selectedCategories.length}
                </span>
              )}
            </div>
            <svg
              className="w-5 h-5 text-white/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Mobile Filter Modal */}
        <MobileFilter
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
          onClearFilters={handleClearFilters}
          isOpen={isMobileFilterOpen}
          onClose={() => setIsMobileFilterOpen(false)}
        />

        {/* Desktop Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:block max-w-7xl mx-auto mb-16"
        >
          <BlogCategories
            categories={categoryCounts}
            selectedCategory={selectedCategories[0]}
            onCategoryChange={(category) => handleCategoryChange(category as BlogCategory)}
          />
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <BlogGrid
            blogs={filteredBlogs}
            showFeatured={selectedCategories.length === 0}
            columns={3}
          />
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(255,215,0,0.1),transparent_50%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(218,165,32,0.1),transparent_50%)] blur-3xl pointer-events-none" />
    </section>
  );
} 