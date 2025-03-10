// src/components/hero/hero2/HeroTestimonialCard.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PremiumCard } from "../ui/premium-card";
import { cn } from "@/lib/utils";
import { HeroTestimonial } from "@/types/hero/hero-types";
import { Quote } from "lucide-react";
import { useState } from "react";

interface HeroTestimonialCardProps {
  testimonial: HeroTestimonial;
  featured?: boolean;
  className?: string;
}

export function HeroTestimonialCard({ 
  testimonial, 
  featured = false,
  className 
}: HeroTestimonialCardProps) {
  const [isBeforeShown, setIsBeforeShown] = useState(true);

  return (
    <PremiumCard
      variant="gradient"
      className={cn(
        "p-6 group relative overflow-hidden",
        featured ? "h-full" : "h-full",
        className
      )}
      motionProps={{
        whileHover: { scale: 1.02 },
        transition: { duration: 0.2 }
      }}
    >
      <div className="relative z-10 h-full flex flex-col">
        {/* Quote and Image */}
        <div className="flex items-start gap-4 mb-4">
          {/* Avatar */}
          <motion.div 
            className="relative flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#FFD700]/20">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-[#FFD700] rounded-full p-1">
              <Quote className="w-3 h-3 text-black" />
            </div>
          </motion.div>

          {/* Name and Role */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              {testimonial.name}
            </h3>
            <p className="text-sm text-white/70">
              {testimonial.role}
            </p>
            <p className="text-sm text-[#FFD700] mt-1 font-medium">
              {testimonial.achievement}
            </p>
          </div>
        </div>

        {/* Quote */}
        <p className="text-white/80 text-lg mb-6">
          &quot;{testimonial.quote}&quot;
        </p>

        {/* Transformation Images */}
        {testimonial.transformationImage && (
          <div className="mt-auto">
            <div className="relative h-48 sm:h-60 rounded-xl overflow-hidden">
              {/* Before Image */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                initial={false}
                animate={{ opacity: isBeforeShown ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={testimonial.transformationImage.before}
                  alt="Before transformation"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                  Before
                </div>
              </motion.div>

              {/* After Image */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                initial={false}
                animate={{ opacity: isBeforeShown ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={testimonial.transformationImage.after}
                  alt="After transformation"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 bg-[#FFD700] text-black text-xs px-2 py-1 rounded">
                  After
                </div>
              </motion.div>

              {/* Slider Control */}
              <div 
                className="absolute inset-0 cursor-pointer"
                onMouseEnter={() => setIsBeforeShown(false)}
                onMouseLeave={() => setIsBeforeShown(true)}
              >
                <div className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 bg-white/20">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: isBeforeShown ? 180 : 0 }}
                      className="text-black text-xs font-medium"
                    >
                      ↔
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Premium decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle_at_100%_0%,rgba(255,215,0,0.15),transparent_50%)] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[radial-gradient(circle,rgba(218,165,32,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </PremiumCard>
  );
}