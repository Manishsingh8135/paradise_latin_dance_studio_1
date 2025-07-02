// src/components/hero/hero2/HeroContent.tsx
"use client";

import { motion } from "framer-motion";
import { HeroStatsGrid } from "./HeroStatsGrid";
import { PremiumButton } from "../ui/premium-button";
import { heroData } from "@/data/hero/hero-data";
import { cn } from "@/lib/utils";
import { ArrowRight, Dumbbell } from "lucide-react";

export function HeroContent() {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <div className="flex flex-col space-y-8 text-center md:text-left">
      {/* Pre-title */}
      <motion.div
        variants={slideUpVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
        className="flex items-center gap-3 justify-center md:justify-start"
      >
        <div className="h-px w-12 bg-gradient-to-r from-[#FFD700] to-transparent" />
        <span className="text-[#FFD700] uppercase tracking-widest text-sm font-medium">
          {heroData.subtitle}
        </span>
      </motion.div>

      {/* Main Title */}
      <div className="space-y-4">
        <motion.h1 
          variants={slideUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
        >
          <span className="block text-white">
            {heroData.mainTitle.firstLine}
          </span>
          <span className={cn(
            "block bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#C6930A]",
            "bg-clip-text text-transparent",
            "bg-[length:200%_auto]",
            "animate-shimmer"
          )}>
            {heroData.mainTitle.highlightedText}
          </span>
          <span className="block text-white/90">
            {heroData.mainTitle.lastLine}
          </span>
        </motion.h1>

        {/* Description - Hidden on mobile */}
        <motion.p
          variants={slideUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="hidden md:block text-lg md:text-xl text-neutral-300 max-w-xl md:mx-0 mx-auto"
        >
          {heroData.description}
        </motion.p>
      </div>

      {/* CTA Buttons */}
      <motion.div
        variants={slideUpVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start"
      >
        <PremiumButton href={heroData.actions[0].href} variant="primary">
          {heroData.actions[0].title}
          <Dumbbell className="w-5 h-5 ml-2" />
        </PremiumButton>
        <PremiumButton href={heroData.actions[1].href} variant="secondary">
          {heroData.actions[1].title}
          <ArrowRight className="w-5 h-5 ml-2" />
        </PremiumButton>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={slideUpVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
        className="pt-8"
      >
        <HeroStatsGrid stats={heroData.stats} />
      </motion.div>
    </div>
  );
}