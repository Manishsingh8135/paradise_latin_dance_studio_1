// src/components/hero/GymHero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroContent } from "./HeroContent";
import { HeroMedia } from "./HeroMedia";
import { BackgroundVideo } from "./background-video";
import { heroData } from "@/data/hero/hero-data";

export function GymHero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <BackgroundVideo 
        src={heroData.backgroundVideo.url}
        poster={heroData.backgroundVideo.poster}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-10rem)]">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <HeroContent />
          </motion.div>

          {/* Right Side - Media */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10 lg:pl-10"
          >
            <HeroMedia />
          </motion.div>
        </div>
      </div>

      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 pointer-events-none" />
    </section>
  );
}