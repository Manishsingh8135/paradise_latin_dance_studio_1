"use client";

import React from "react";
import { CoreValue } from "../types/about-types";

export function CoreValueCard({ icon: Icon, title, description }: CoreValue) {
  return (
    <div className="group relative bg-black/40 backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-[#FFD700]/20">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#FFD700]/30 transition-all duration-300" />

      <div className="p-8">
        {/* Icon */}
        <div className="relative w-14 h-14 mb-6">
          {/* Icon Background */}
          <div className="absolute inset-0 bg-[#FFD700] rounded-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
          
          {/* Icon Content */}
          <div className="relative h-full flex items-center justify-center">
            <Icon className="w-7 h-7 text-[#FFD700]" />
          </div>

          {/* Corner Accent */}
          <div className="absolute -top-1 -right-1 w-3 h-3">
            <div className="absolute inset-0 rotate-45 bg-[#FFD700] opacity-50" />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFD700] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/60 group-hover:text-white/70 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#FFD700]/30 transition-all duration-300" />
    </div>
  );
}
