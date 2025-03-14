"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { HeroParticles } from "@/components/ui/hero-particles";
import { InstructorCard } from "./instructor-card";
import { InstructorDetails } from "./instructor-details";
import { InstructorsSectionProps } from "../types/instructors-types";
import { instructors, instructorsSection } from "../data/instructors-data";

export function InstructorsSection({
  title = instructorsSection.title,
  subtitle = instructorsSection.subtitle,
  description = instructorsSection.description,
  className = ""
}: InstructorsSectionProps) {
  const [activeInstructor, setActiveInstructor] = useState(instructors[0]);
  
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className={`relative py-32 overflow-hidden ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black">
        <HeroParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5 z-[1]" />
      
      <div className="relative container mx-auto px-4 z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="mb-6 flex items-center justify-center gap-3"
          >
            <div className="h-px w-12 bg-gradient-to-r from-[#FFD700] to-transparent" />
            <span className="text-[#FFD700] uppercase tracking-widest text-sm font-medium">
              {subtitle}
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-[#FFD700] to-transparent" />
          </motion.div>
        
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Meet Our
            </span>{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: "100px" } : { opacity: 0, width: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent mx-auto my-4"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Instructors Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.1 * index }
                }}
                className="h-full"
              >
                <InstructorCard
                  instructor={instructor}
                  isActive={instructor.id === activeInstructor.id}
                  onClick={() => setActiveInstructor(instructor)}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Instructor Details */}
          <div>
            <AnimatePresence mode="wait">
              <InstructorDetails key={activeInstructor.id} instructor={activeInstructor} />
            </AnimatePresence>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -left-1/4 top-0 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(255,215,0,0.1),transparent_50%)] blur-3xl pointer-events-none" />
        <div className="absolute -right-1/4 bottom-0 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(218,165,32,0.1),transparent_50%)] blur-3xl pointer-events-none" />
      </div>
    </section>
  );
} 