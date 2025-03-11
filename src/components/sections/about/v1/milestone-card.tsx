"use client";

import React from "react";
import Image from "next/image";
import { Milestone } from "../types/about-types";

type MilestoneCardProps = Milestone & {
  align: "left" | "right";
};

export function MilestoneCard({ year, title, description, image, align }: MilestoneCardProps) {
  return (
    <div className={`relative flex items-center ${align === "right" ? "justify-end" : ""}`}>
      {/* Timeline Line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/10" />

      {/* Content */}
      <div className={`relative w-full md:w-[calc(50%-2rem)] ${align === "right" ? "md:pl-8" : "md:pr-8"}`}>
        <div className="group relative bg-black/40 backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-[#FFD700]/20">
          {/* Top Gradient Line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#FFD700]/30 transition-all duration-300" />

          {/* Year Badge */}
          <div className="absolute top-6 right-6 bg-[#FFD700]/10 px-4 py-2 rounded-full">
            <span className="text-[#FFD700] font-bold">{year}</span>
          </div>

          <div className="p-8">
            {/* Image */}
            {image && (
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            )}

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

        {/* Timeline Dot */}
        <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4">
          <div className="absolute inset-0 bg-[#FFD700] rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
          <div className="absolute inset-1 bg-[#FFD700] rounded-full" />
        </div>
      </div>
    </div>
  );
}
