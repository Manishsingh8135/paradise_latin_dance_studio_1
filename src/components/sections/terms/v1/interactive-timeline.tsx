"use client";

import React from "react";
import { motion } from "framer-motion";
import { TimelineItem } from "../types/terms-types";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";

interface TimelineProps {
  items: TimelineItem[];
}

type IconComponent = (props: { className?: string }) => React.ReactElement;

export function InteractiveTimeline({ items }: TimelineProps) {
  return (
    <div className="relative max-w-[90rem] mx-auto">
      {/* Timeline Line */}
      <div className="absolute left-6 md:left-12 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#FFD700]/10 via-[#FFD700] to-[#FFD700]/10" />

      {/* Timeline Items */}
      <div className="space-y-8">
        {items.map((item, index) => {
          const IconComponent = item.icon ? (Icons[item.icon as keyof typeof Icons] as IconComponent) : null;
          
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-12 md:pl-24"
            >
              {/* Timeline Point */}
              <div
                className={cn(
                  "absolute left-6 md:left-12 w-4 h-4 rounded-full transform -translate-x-1/2",
                  "border-2",
                  item.status === "completed"
                    ? "bg-[#FFD700] border-[#FFD700] shadow-[0_0_15px_0] shadow-[#FFD700]/30"
                    : item.status === "active"
                    ? "bg-black border-[#FFD700] shadow-[0_0_15px_0] shadow-[#FFD700]/30"
                    : "bg-gray-800 border-white/20",
                  "transition-all duration-300"
                )}
              />

              {/* Content */}
              <div
                className={cn(
                  "relative group",
                  "bg-black/40 backdrop-blur-xl rounded-xl p-5",
                  "border border-white/10",
                  "hover:border-[#FFD700]/30 transition-all duration-300",
                  "hover:shadow-[0_0_20px_-12px] hover:shadow-[#FFD700]/20"
                )}
              >
                {/* Glow Effects */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                <div className="absolute -inset-[1px] bg-gradient-to-b from-transparent via-[#FFD700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    {IconComponent && (
                      <div
                        className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
                          "bg-gradient-to-br from-[#FFD700]/10 via-[#FDB931]/10 to-[#FFD700]/10",
                          "border border-[#FFD700]/20",
                          "shadow-[0_0_10px_0] shadow-[#FFD700]/10"
                        )}
                      >
                        <IconComponent className="w-5 h-5 text-[#FFD700]" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-0.5">
                        {item.title}
                      </h3>
                      <div
                        className={cn(
                          "text-sm font-medium",
                          item.status === "completed"
                            ? "text-[#FFD700]"
                            : item.status === "active"
                            ? "text-green-400"
                            : "text-white/40"
                        )}
                      >
                        {item.date}
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
