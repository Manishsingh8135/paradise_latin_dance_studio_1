"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { CoreValueCard } from "./core-value-card";
import { MilestoneCard } from "./milestone-card";
import { FounderCard } from "./founder-card";
import { PhoenixIcon } from "./phoenix-icon"; // Import the PhoenixIcon component
import { coreValues, milestones, founderInfo } from "../data/about-data";
import { OPTIMIZED_URLS } from "@/lib/cloudinary";

export function AboutSection() {
  return (
    <section className="relative bg-black min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5" />

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Gradient */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src={OPTIMIZED_URLS.paradiseDance}
            alt="Paradise Latin Dance Community"
            className="object-cover"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </motion.div>

        {/* Content */}
        <div className="relative text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="relative inline-block">
              {/* Animated Background Glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="absolute -inset-8 bg-radial-gradient from-[#FFD700]/20 to-transparent blur-2xl"
              />

              <h1 className="text-7xl md:text-9xl font-bold mb-6 relative">
                <span className="bg-gradient-to-r from-[#FFD700] via-[#FFDF40] to-[#FFD700] text-transparent bg-clip-text relative inline-block">
                  Reborn
                  {/* Floating Particles */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="absolute -top-4 -right-6"
                  >
                    <div className="w-3 h-3 bg-[#FFD700] rounded-full absolute animate-float" />
                    <div className="w-2 h-2 bg-[#FFDF40] rounded-full absolute -top-2 -right-2 animate-float-delayed" />
                  </motion.div>
                </span>
                <span className="text-white drop-shadow-gold">1n Paradise</span>
              </h1>
              
              {/* Animated Phoenix Emblem */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.7 }}
                className="absolute -top-20 -left-20 w-[400px] opacity-10"
              >
                <PhoenixIcon className="text-[#FFD700] w-full h-full" />
              </motion.div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-3xl md:text-4xl text-white/80 mb-12 font-light tracking-wide"
            >
              Where <span className="text-[#FFD700] font-medium">Strength</span> Meets {' '}
              <span className="text-[#FFD700] font-medium">Soul</span>
            </motion.p>
            
            <motion.div
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="#story"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FFD700] to-[#FFB300] text-black font-bold px-8 py-4 rounded-xl
                         hover:shadow-gold-glow transition-all duration-300 group"
              >
                <span>Discover Our Journey</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }} 
              className="w-6 h-10 rounded-full border-2 border-[#FFD700]/30 flex items-start justify-center p-2"
            >
              <div className="w-1.5 h-3 bg-[#FFD700] rounded-full" />
            </motion.div>
            <span className="text-sm text-[#FFD700]/60 font-medium">Scroll to Explore</span>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Our Story */}
        <div id="story" className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Born from Purpose
            </h2>
            <p className="text-lg text-white/60">
              In 2019, amidst the serene landscapes of Hawaii, RIP FITNESS emerged
              from a profound need to support military members struggling with
              stress, anxiety, and mental health challenges. What began as a
              support group has evolved into a comprehensive fitness ecosystem,
              built on the foundation of holistic wellness.
            </p>
          </motion.div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CoreValueCard {...value} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Founder Section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FounderCard {...founderInfo} />
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              From humble beginnings to a thriving community, every step of our
              journey has been guided by our mission to transform lives.
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MilestoneCard {...milestone} align={index % 2 === 0 ? "left" : "right"} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Join Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Community
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            Experience the power of transformation in a community that supports and
            uplifts each other. Start your journey with us today.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FFD700] text-black font-bold px-8 py-4 rounded-xl hover:bg-[#FFD700]/90 transition-all duration-300"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
