"use client";

import { motion } from "framer-motion";
import { BlogCategoryProps } from "../types/blog-section-types";
import { categoryMetadata } from "../data/blog-categories";
import { cn } from "@/lib/utils";
import type { BlogCategory as BlogCategoryType } from "../types/blog-types";

export function BlogCategoryItem({ category, count, selected, onClick }: BlogCategoryProps) {
  // Find category metadata
  const metadata = categoryMetadata.find(c => c.category === category);
  const Icon = metadata?.icon;

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "group relative w-full",
        "px-4 py-3 rounded-xl",
        "border transition-all duration-300",
        selected
          ? "bg-[#FFD700]/10 border-[#FFD700]/30 shadow-[0_0_20px_-12px] shadow-[#FFD700]/50"
          : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
      )}
    >
      <div className="flex items-center gap-3">
        {/* Icon */}
        {Icon && (
          <div className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center",
            "bg-gradient-to-br transition-colors duration-300",
            selected
              ? [metadata.color.dark, "shadow-[0_0_15px_-3px] shadow-[#FFD700]/20"]
              : "from-white/5 to-white/10"
          )}>
            <Icon className={cn(
              "w-5 h-5 transition-colors duration-300",
              selected ? "text-[#FFD700]" : "text-white/60 group-hover:text-white"
            )} />
          </div>
        )}

        {/* Content */}
        <div className="flex-1 text-left">
          <div className={cn(
            "font-medium transition-colors duration-300",
            selected ? "text-[#FFD700]" : "text-white group-hover:text-white"
          )}>
            {category}
          </div>
          <div className={cn(
            "text-sm transition-colors duration-300",
            selected ? "text-[#FFD700]/60" : "text-white/40 group-hover:text-white/60"
          )}>
            {count} {count === 1 ? "post" : "posts"}
          </div>
        </div>

        {/* Count Badge */}
        <div className={cn(
          "px-2 py-1 rounded-full text-xs font-medium transition-all duration-300",
          selected
            ? "bg-[#FFD700] text-black"
            : "bg-white/10 text-white/60 group-hover:bg-white/20"
        )}>
          {count}
        </div>
      </div>

      {/* Description on Hover */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute left-4 right-4 -bottom-12 z-50"
      >
        <div className="bg-black/90 backdrop-blur-sm text-xs text-white/60 p-2 rounded-lg">
          {metadata?.description}
        </div>
      </motion.div>
    </motion.button>
  );
}

export function BlogCategories({ 
  categories,
  selectedCategory,
  onCategoryChange
}: {
  categories: { category: string; count: number }[];
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map(({ category, count }) => (
        <BlogCategoryItem
          key={category}
          category={category as BlogCategoryType}
          count={count}
          selected={category === selectedCategory}
          onClick={() => onCategoryChange?.(category)}
        />
      ))}
    </div>
  );
} 