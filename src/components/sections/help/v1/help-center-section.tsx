"use client";

import React from "react";
import { motion } from "framer-motion";
import { HelpCenterCard } from "./help-center-card";
import { AiTeaser } from "./ai-teaser";
import { helpCategories } from "../data/help-data";

export function HelpCenterSection() {
  return (
    <section className="relative bg-black min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How Can We Help?
            </h1>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-white/60 max-w-3xl mx-auto"
          >
            Find answers to common questions, explore our knowledge base, or get in
            touch with our support team.
          </motion.p>
        </div>

        {/* AI Teaser */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <AiTeaser />
        </motion.div>

        {/* Help Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {helpCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <HelpCenterCard {...category} />
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a
              href="/contact"
              className="text-[#FFD700] hover:text-[#FFD700]/80 transition-colors duration-300"
            >
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
