"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Globe } from "lucide-react";

// Import data
import { bestDanceStudioData } from "../data/best-dance-studio.data";

// Import sub-components
import { AnimatedStatistic } from "./AnimatedStatistic";
import { AccoladeCard } from "./AccoladeCard";
import { ParallaxLayer } from "./ParallaxLayer";

// Import utilities
import { revealVariants } from "./best-dance-studio.utils";

export function BestDanceStudio() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => 
        (prev + 1) % bestDanceStudioData.testimonialQuotes.length
      );
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  // Transform effects based on scroll
  const contentOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.95, 1, 1, 0.95]);
  const titleY = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [50, 0, 0, -50]);
  
  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-32 overflow-hidden bg-black text-white"
      id="best-in-hawaii"
    >
      {/* Parallax Background Layers */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10" />
        
        {bestDanceStudioData.visualLayers.map((layer) => (
          <ParallaxLayer
            key={layer.id}
            layer={layer}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
      
      {/* Main Content */}
      <motion.div
        ref={contentRef}
        className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24"
        style={{ 
          opacity: contentOpacity,
          scale: contentScale,
        }}
      >
        {/* Header Section */}
        <div className="max-w-5xl mx-auto mb-20 text-center">
          {/* Tagline */}
          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#FFD700]/10 backdrop-blur-sm rounded-full border border-[#FFD700]/20"
          >
            <Globe className="w-5 h-5 text-[#FFD700]" />
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent font-medium">
              {bestDanceStudioData.tagline}
            </span>
          </motion.div>
          
          {/* Title */}
          <motion.h1
            style={{ y: titleY }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">{bestDanceStudioData.title.split(" ")[0]} </span>
            <span className="inline-block relative">
              <span className="relative z-10 bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
                {bestDanceStudioData.title.split(" ")[1]}
              </span>
              <motion.span 
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#FFD700] to-[#FDB931] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.h2
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-2xl md:text-3xl lg:text-4xl font-light text-white/80 mb-8"
          >
            {bestDanceStudioData.subtitle}
          </motion.h2>
          
          {/* Description */}
          <motion.p
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            {bestDanceStudioData.description}
          </motion.p>
        </div>
        
        {/* Statistics Grid */}
        <div className="mb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestDanceStudioData.statistics.map((statistic, index) => (
              <AnimatedStatistic key={statistic.id} statistic={statistic} index={index} />
            ))}
          </div>
        </div>
        
        {/* Two-Column Layout for Lower Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Accolades Section */}
          <div className="space-y-6">
            <motion.h3
              variants={revealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="text-3xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent mb-8"
            >
              Recognition & Excellence
            </motion.h3>
            
            <div className="space-y-6">
              {bestDanceStudioData.accolades.map((accolade, index) => (
                <AccoladeCard key={accolade.id} accolade={accolade} index={index} />
              ))}
            </div>
          </div>
          
          {/* Testimonials Section */}
          <div className="space-y-12">
            <motion.h3
              variants={revealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="text-3xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent mb-8"
            >
              What Others Say
            </motion.h3>
            
            {/* Testimonial Carousel */}
            <div className="relative h-80">
              <AnimatePresence mode="wait">
                {bestDanceStudioData.testimonialQuotes.map((testimonial, index) => (
                  activeTestimonial === index && (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 p-10 rounded-3xl bg-[#FFD700]/5 backdrop-blur-sm border border-[#FFD700]/20 flex flex-col justify-center"
                    >
                      <div className="absolute top-6 left-6 opacity-20 text-[#FFD700]">
                        <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
                          <path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 17.36 39.52 14.8 38.64 12.44C37.68 14.08 35.92 15.2 33.92 15.2C30.64 15.2 28 12.56 28 9.28C28 6 30.64 3.36 33.92 3.36C36.92 3.36 39.36 5.56 39.84 8.44C47.92 9.92 54 15.96 54 23.36C54 32.04 47.04 39 38.36 39C34.96 39 31.8 38.04 29.08 36.36C33.4 35.28 36.72 31.76 36.72 27.56C36.72 22.52 32.6 18.4 27.56 18.4C22.52 18.4 18.4 22.52 18.4 27.56" fill="currentColor"/>
                          <path d="M60 0C48.96 0 40 8.96 40 20C40 31.04 48.96 40 60 40C71.04 40 80 31.04 80 20C80 17.36 79.52 14.8 78.64 12.44C77.68 14.08 75.92 15.2 73.92 15.2C70.64 15.2 68 12.56 68 9.28C68 6 70.64 3.36 73.92 3.36C76.92 3.36 79.36 5.56 79.84 8.44C87.92 9.92 94 15.96 94 23.36C94 32.04 87.04 39 78.36 39C74.96 39 71.8 38.04 69.08 36.36C73.4 35.28 76.72 31.76 76.72 27.56C76.72 22.52 72.6 18.4 67.56 18.4C62.52 18.4 58.4 22.52 58.4 27.56" fill="currentColor"/>
                        </svg>
                      </div>
                      
                      <p className="text-white/90 text-xl italic mb-6 leading-relaxed">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      
                      <div className="mt-auto">
                        <p className="text-[#FFD700] font-semibold">
                          {testimonial.author}
                        </p>
                        {testimonial.role && (
                          <p className="text-white/60 text-sm">
                            {testimonial.role}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
              
              {/* Indicators */}
              <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2">
                {bestDanceStudioData.testimonialQuotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeTestimonial === index 
                        ? 'bg-[#FFD700] scale-110' 
                        : 'bg-white/20 scale-100 hover:bg-white/40'
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-8">
              <Link 
                href={bestDanceStudioData.cta.primary.url}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FDB931] text-black font-bold text-lg shadow-xl shadow-[#FFD700]/20 hover:shadow-[#FFD700]/40 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
              >
                {bestDanceStudioData.cta.primary.text}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {bestDanceStudioData.cta.secondary && (
                <Link 
                  href={bestDanceStudioData.cta.secondary.url}
                  className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-[#FFD700]/20 text-white hover:bg-white/10 transition-all duration-300"
                >
                  {bestDanceStudioData.cta.secondary.text}
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Decorative Crown Divider */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="w-24 h-12 overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-[#FFD700]/20 backdrop-blur-sm rounded-t-full" />
        </div>
      </div>
    </section>
  );
} 