"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HeroParticles } from "../ui/hero-particles";
import { Music } from "lucide-react";

export function DanceStudioSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black">
        <HeroParticles />
        <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        {/* Decorative dance-themed gradients */}
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(255,20,147,0.1),transparent_50%)] blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(255,215,0,0.1),transparent_50%)] blur-3xl pointer-events-none" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <div className="bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10 flex items-center gap-2">
              <Music className="w-4 h-4 text-[#FFD700]" />
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent font-medium">
                Best in Hawaii
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mt-6 mb-6"
          >
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Paradise
            </span>{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
              Latin Dance Studio
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            Experience the passion and rhythm of Latin dance in Hawaii&apos;s most prestigious dance studio.
            From salsa to bachata, our expert instructors bring the authentic Latin dance experience to paradise.
          </motion.p>
        </div>

        {/* Main Content will go here - We'll add this next */}

      </div>
    </section>
  );
}
