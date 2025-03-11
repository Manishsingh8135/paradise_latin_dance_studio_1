"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AlertTriangle } from "lucide-react";
import { InteractiveTimeline } from "./interactive-timeline";
import { FacilityRulesTabs } from "./facility-rules-tabs";
import type {
  TermsSection as TermsSectionType,
  TermsContent,
  TimelineContent,
  InteractiveContent,
  CalloutContent,

  FacilityRule,
} from "../types/terms-types";

interface TermsSectionProps {
  section: TermsSectionType;
}

export function TermsSection({ section }: TermsSectionProps) {
  const renderContent = (content: TermsContent) => {
    switch (content.type) {
      case "timeline":
        return (
          <InteractiveTimeline
            items={(content as TimelineContent).content.items}
          />
        );
      case "interactive": {
        const interactiveContent = content as InteractiveContent;
        switch (interactiveContent.content.type) {
          case "tabs":
            return (
              <FacilityRulesTabs
                rules={interactiveContent.content.data as FacilityRule[]}
              />
            );
          default:
            return null;
        }
      }
      case "callout": {
        const calloutContent = content as CalloutContent;
        return (
          <div
            className={cn(
              "relative group",
              "bg-black/40 backdrop-blur-xl rounded-2xl p-8",
              "border border-white/10",
              "hover:border-[#FFD700]/30 transition-all duration-300",
              "hover:shadow-[0_0_30px_-12px] hover:shadow-[#FFD700]/20"
            )}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-amber-500/10 border border-amber-500/20">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {calloutContent.content.title}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  {calloutContent.content.message}
                </p>
              </div>
            </div>
          </div>
        );
      }
      default:
        return null;
    }
  };

  return (
    <div className="relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/80 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none" />

      {/* Content */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[90rem] mx-auto px-8 lg:px-12 py-24"
        >
          {/* Header */}
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] mb-6">
              {section.title}
            </h2>
            <p className="text-xl md:text-2xl text-white/60 max-w-4xl mx-auto">
              {section.description}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-16">
            {section.content.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {renderContent(item)}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
