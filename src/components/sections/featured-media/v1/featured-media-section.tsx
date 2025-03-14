"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HeroParticles } from '@/components/ui/hero-particles';
import { MediaCard } from './media-card';
import { FeaturedMediaSectionProps } from '../types/media-types';
import { mediaItems, featuredMediaSection } from '../data/media-data';

export function FeaturedMediaSection({
  title = featuredMediaSection.title,
  subtitle = featuredMediaSection.subtitle,
  className = "",
  showParticles = featuredMediaSection.showParticles,
}: FeaturedMediaSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <section className={`relative py-24 bg-black overflow-hidden ${className}`} ref={containerRef}>
      {/* Particles Background */}
      {showParticles && (
        <div className="absolute inset-0 z-0">
          <HeroParticles />
        </div>
      )}
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative container mx-auto"
      >
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="mb-6 flex items-center justify-center gap-3"
          >
            <div className="h-px w-12 bg-gradient-to-r from-[#FFD700] to-transparent" />
            <span className="text-[#FFD700] uppercase tracking-widest text-sm font-medium">
              Gallery
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-[#FFD700] to-transparent" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              {title.split(' ')[0]}
            </span>{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
              {title.split(' ').slice(1).join(' ')}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(200px,auto)] gap-4 max-w-7xl mx-auto">
          {mediaItems.map((item, index) => (
            <MediaCard key={index} item={item} />
          ))}
        </div>
      </motion.div>
    </section>
  );
} 