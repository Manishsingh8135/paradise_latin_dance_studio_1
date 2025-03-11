"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { HelpCategory } from "../types/help-types";

export function HelpCenterCard({
  icon: Icon,
  title,
  description,
  articles,
}: HelpCategory) {
  return (
    <div className="group relative bg-black/40 backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-[#FFD700]/20">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#FFD700]/30 transition-all duration-300" />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          {/* Icon */}
          <div className="relative shrink-0">
            <div className="relative w-12 h-12">
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
          </div>

          {/* Title & Description */}
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-[#FFD700] transition-colors duration-300">
              {title}
            </h3>
            <p className="mt-1 text-sm text-white/60 group-hover:text-white/70 transition-colors duration-300">
              {description}
            </p>
          </div>
        </div>

        {/* Articles List */}
        <ul className="space-y-3">
          {articles.map((article) => (
            <li key={article.title}>
              <a
                href={article.link}
                className="flex items-center justify-between group/link"
              >
                <span className="text-white/70 group-hover/link:text-[#FFD700] transition-colors duration-300">
                  {article.title}
                </span>
                <ChevronRight className="w-4 h-4 text-white/30 group-hover/link:text-[#FFD700] group-hover/link:translate-x-1 transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#FFD700]/30 transition-all duration-300" />
    </div>
  );
}
