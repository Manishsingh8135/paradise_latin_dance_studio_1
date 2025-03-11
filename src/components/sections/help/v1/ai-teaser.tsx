"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { aiFeatures } from "../data/help-data";

export function AiTeaser() {
  return (
    <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent" />

      <div className="p-8 lg:p-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="w-6 h-6 text-[#FFD700]" />
          <span className="text-[#FFD700] font-bold">Coming Soon</span>
        </div>

        {/* Title */}
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            AI-Powered Help Center
          </h2>
          <p className="text-white/60">
            We&apos;re bringing the future of fitness support to you. Our
            AI-powered help center will provide instant, personalized assistance
            for all your fitness needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {aiFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white/5 rounded-xl p-6 group hover:bg-white/10 transition-all duration-300"
              >
                {/* Icon */}
                <div className="relative w-12 h-12 mb-4">
                  {/* Icon Background */}
                  <div className="absolute inset-0 bg-[#FFD700] rounded-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                  
                  {/* Icon Content */}
                  <div className="relative h-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#FFD700]" />
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute -top-1 -right-1 w-2 h-2">
                    <div className="absolute inset-0 rotate-45 bg-[#FFD700] opacity-50" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FFD700] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/60 group-hover:text-white/70 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#FFD700]/30 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Newsletter */}
        <div className="mt-10 pt-8 border-t border-white/5">
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-white/5 rounded-xl px-6 py-4 text-white placeholder-white/30 border-2 border-transparent focus:border-[#FFD700] focus:bg-white/10 transition-all duration-300"
            />
            <button
              type="submit"
              className="bg-[#FFD700] text-black font-bold px-8 py-4 rounded-xl hover:bg-[#FFD700]/90 transition-colors duration-300"
            >
              Get Early Access
            </button>
          </form>
          <p className="mt-3 text-sm text-white/40">
            Be the first to experience our AI-powered support system.
          </p>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent" />
    </div>
  );
}
