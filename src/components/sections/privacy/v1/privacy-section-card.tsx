"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PrivacySection } from "../types/privacy-types";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";

interface PrivacySectionCardProps {
  section: PrivacySection;
  index: number;
}

type IconComponent = (props: { className?: string }) => React.ReactElement;

export function PrivacySectionCard({ section, index }: PrivacySectionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = section.icon ? (Icons[section.icon as keyof typeof Icons] as IconComponent) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "relative group cursor-pointer",
        "bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden",
        "border border-white/10",
        "hover:border-[#FFD700]/30 transition-colors duration-300",
        "hover:shadow-[0_0_50px_-12px] hover:shadow-[#FFD700]/20"
      )}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Glow Effects */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      <div className="absolute -inset-[1px] bg-gradient-to-b from-transparent via-[#FFD700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      {/* Header */}
      <div className="relative z-10 p-6 flex items-start gap-4">
        {/* Icon */}
        {IconComponent && (
          <div className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
            "bg-gradient-to-br from-[#FFD700]/10 to-[#FDB931]/10",
            "border border-[#FFD700]/20"
          )}>
            <IconComponent className="w-6 h-6 text-[#FFD700]" />
          </div>
        )}

        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 text-white">
            {section.title}
          </h3>
          <p className="text-white/60">
            {section.description}
          </p>
        </div>

        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </div>

      {/* Subsections */}
      <AnimatePresence>
        {isExpanded && section.subsections && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <div className="px-6 pb-6 space-y-6">
              {section.subsections.map((subsection) => (
                <div
                  key={subsection.id}
                  className={cn(
                    "p-4 rounded-xl",
                    "bg-white/5",
                    subsection.isImportant && "border border-[#FFD700]/20"
                  )}
                >
                  <h4 className="text-lg font-medium mb-3 text-white">
                    {subsection.title}
                  </h4>
                  <ul className="space-y-2">
                    {subsection.content.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-white/60"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
