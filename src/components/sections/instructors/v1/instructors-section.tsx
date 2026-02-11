"use client";

import { useState, useRef } from "react";
import Image from "next/image";
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
  className = "",
}: InstructorsSectionProps) {
  const [activeInstructor, setActiveInstructor] = useState(instructors[0]);

  const ref = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleMobileSelect = (instructor: (typeof instructors)[number]) => {
    setActiveInstructor(instructor);
    // Smooth scroll to details on mobile
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <section
      ref={ref}
      className={`relative py-32 overflow-hidden ${className}`}
    >
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
            animate={
              isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
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
            animate={
              isInView
                ? { opacity: 1, width: "100px" }
                : { opacity: 0, width: 0 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent mx-auto my-4"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>

        {/* ─── Mobile Layout (< lg) ─── */}
        <div className="lg:hidden">
          {/* Compact instructor selector — 2 col grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-10">
            {instructors.map((instructor) => {
              const isActive = instructor.id === activeInstructor.id;
              return (
                <button
                  key={instructor.id}
                  onClick={() => handleMobileSelect(instructor)}
                  className="group relative overflow-hidden rounded-2xl transition-all duration-500"
                >
                  {/* Photo — square aspect */}
                  <div
                    className={`relative aspect-[3/4] overflow-hidden rounded-2xl transition-all duration-500 ${
                      isActive
                        ? "ring-[3px] ring-[#FFD700] shadow-[0_0_25px_rgba(255,215,0,0.2)]"
                        : "ring-1 ring-white/10 group-hover:ring-white/25"
                    }`}
                  >
                    <Image
                      src={instructor.image}
                      alt={instructor.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 280px"
                    />
                    {/* Bottom gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Active gold overlay */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-t from-[#FFD700]/10 via-transparent to-transparent" />
                    )}

                    {/* Name + role overlay at bottom */}
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <div
                        className={`text-base sm:text-lg font-bold transition-colors duration-300 ${
                          isActive ? "text-[#FFD700]" : "text-white"
                        }`}
                      >
                        {instructor.name}
                      </div>
                      <div className="text-white/60 text-xs sm:text-sm mt-0.5 line-clamp-1">
                        {instructor.role}
                      </div>
                      {/* Active indicator bar */}
                      <div
                        className={`mt-2.5 h-[2px] rounded-full transition-all duration-500 ${
                          isActive
                            ? "w-10 bg-[#FFD700]"
                            : "w-0 bg-transparent"
                        }`}
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active instructor details */}
          <div ref={detailsRef} className="scroll-mt-8">
            <AnimatePresence mode="wait">
              <InstructorDetails
                key={activeInstructor.id}
                instructor={activeInstructor}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* ─── Desktop Layout (lg+) ─── */}
        <div className="hidden lg:grid grid-cols-2 gap-16">
          {/* Instructor Cards Grid */}
          <div className="grid grid-cols-2 gap-6">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1 * index },
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
              <InstructorDetails
                key={activeInstructor.id}
                instructor={activeInstructor}
              />
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
