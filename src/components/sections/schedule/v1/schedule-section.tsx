"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { HeroParticles } from "@/components/ui/hero-particles";
import { ScheduleCard } from "./schedule-card";
import { ScheduleFilter } from "./schedule-filter";
import { ScheduleSectionProps } from "../types/schedule-types";
import { danceClasses, days, scheduleSection } from "../data/schedule-data";

export function ScheduleSection({ 
  title = scheduleSection.title,
  description = scheduleSection.description,
  className = ""
}: ScheduleSectionProps) {
  const [selectedDay, setSelectedDay] = useState<typeof days[number]>("Monday");
  const [selectedStyle, setSelectedStyle] = useState("All Styles");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredClasses = danceClasses.filter(danceClass => {
    if (selectedDay !== danceClass.day) return false;
    if (selectedStyle !== "All Styles" && selectedStyle !== danceClass.style) return false;
    if (selectedLevel !== "All Levels" && selectedLevel !== danceClass.level) return false;
    return true;
  });

  // Determine featured classes (e.g., for promotional highlighting)
  const isFeatured = (classId: string) => {
    // Logic to determine if a class should be featured
    // For example, classes on Friday evening or Saturday might be featured
    return classId.includes("social") || classId.includes("adv") && classId.includes("sat");
  };

  return (
    <section ref={ref} className={`relative py-32 overflow-hidden ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black">
        <HeroParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

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
              {title}
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
              Find Your Perfect
            </span>{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
              Dance Class
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

        {/* Schedule Filter */}
        <ScheduleFilter
          selectedDay={selectedDay}
          selectedStyle={selectedStyle}
          selectedLevel={selectedLevel}
          onDayChange={setSelectedDay}
          onStyleChange={setSelectedStyle}
          onLevelChange={setSelectedLevel}
        />

        {/* Schedule Grid */}
        <div className="mt-16 relative z-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedDay}-${selectedStyle}-${selectedLevel}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {filteredClasses.length > 0 ? (
                filteredClasses.map((danceClass, index) => (
                  <motion.div
                    key={danceClass.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <ScheduleCard 
                      danceClass={danceClass} 
                      featured={isFeatured(danceClass.id)}
                      onClick={() => console.log(`Booking class: ${danceClass.id}`)}
                    />
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-20"
                >
                  <div className="text-white/70 text-xl">
                    No classes found for the selected filters.
                  </div>
                  <button
                    onClick={() => {
                      setSelectedStyle("All Styles");
                      setSelectedLevel("All Levels");
                    }}
                    className="mt-4 px-6 py-2 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] hover:bg-[#FFD700]/20 transition-colors"
                  >
                    Reset Filters
                  </button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -left-1/4 top-0 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(255,215,0,0.1),transparent_50%)] blur-3xl pointer-events-none" />
        <div className="absolute -right-1/4 bottom-0 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(218,165,32,0.1),transparent_50%)] blur-3xl pointer-events-none" />
      </div>
    </section>
  );
} 