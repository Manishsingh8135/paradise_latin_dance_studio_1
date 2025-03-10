// src/components/hero/hero2/HeroMedia.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { heroData } from "@/data/hero/hero-data";
import { HeroFeatureCard } from "./HeroFeaturedCard";
import { HeroTestimonialCard } from "./HeroTestimonial";

export function HeroMedia() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative">
      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-6 gap-4 lg:h-[600px]">
        {/* Featured Transformation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-1 lg:col-span-4 lg:row-span-4 relative"
        >
          <HeroTestimonialCard testimonial={heroData.testimonials[0]} featured />
        </motion.div>

        {/* Feature Cards - Hidden on mobile */}
        <div className="hidden lg:flex lg:col-span-2 lg:row-span-6 flex-col gap-4">
          {heroData.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="flex-1"
            >
              <HeroFeatureCard feature={feature} />
            </motion.div>
          ))}
        </div>

        {/* Additional Testimonial - Hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block lg:col-span-4 lg:row-span-2 relative"
        >
          <HeroTestimonialCard testimonial={heroData.testimonials[1]} />
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -right-20 top-20 w-40 h-40 bg-[radial-gradient(circle,rgba(255,215,0,0.1),transparent_50%)] blur-2xl pointer-events-none" />
      <div className="absolute -left-20 bottom-20 w-40 h-40 bg-[radial-gradient(circle,rgba(218,165,32,0.1),transparent_50%)] blur-2xl pointer-events-none" />
      
      {/* Premium overlay pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat opacity-5 pointer-events-none" />
      
      {/* Hover state highlight */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#FFD700]/10 to-transparent pointer-events-none" />
    </div>
  );
}