"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FacilityRule } from "../types/terms-types";
import { cn } from "@/lib/utils";
import { AlertTriangle, Check, Info } from "lucide-react";

interface FacilityRulesTabsProps {
  rules: FacilityRule[];
}

export function FacilityRulesTabs({ rules }: FacilityRulesTabsProps) {
  const [activeTab, setActiveTab] = useState(rules[0].id);

  return (
    <div className="space-y-8">
      {/* Tabs */}
      <div className="flex flex-wrap gap-3">
        {rules.map((rule) => (
          <button
            key={rule.id}
            onClick={() => setActiveTab(rule.id)}
            className={cn(
              "relative group overflow-hidden",
              "px-6 py-3 rounded-xl text-base font-medium",
              "transition-all duration-300",
              activeTab === rule.id
                ? "bg-[#FFD700] text-black shadow-[0_0_20px_0] shadow-[#FFD700]/20"
                : "bg-black/20 text-white/60 hover:text-white hover:bg-white/5"
            )}
          >
            {/* Gradient overlay */}
            {activeTab === rule.id && (
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] opacity-100" />
            )}
            
            {/* Content */}
            <span className="relative z-10">{rule.category}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {rules.map((rule) => {
          if (rule.id !== activeTab) return null;

          return (
            <motion.div
              key={rule.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Rules */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#FFD700]/10 border border-[#FFD700]/20">
                    <Check className="w-5 h-5 text-[#FFD700]" />
                  </div>
                  Rules & Guidelines
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {rule.rules.map((item, index) => (
                    <div
                      key={index}
                      className={cn(
                        "relative group",
                        "bg-black/40 backdrop-blur-xl rounded-xl p-4",
                        "border border-white/10",
                        "hover:border-[#FFD700]/30 transition-all duration-300",
                        "hover:shadow-[0_0_20px_-12px] hover:shadow-[#FFD700]/20"
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-[#FFD700]/10 border border-[#FFD700]/20">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
                        </div>
                        <p className="text-white/80 text-base leading-relaxed">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consequences */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-red-500/10 border border-red-500/20">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  Consequences
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {rule.consequences.map((item, index) => (
                    <div
                      key={index}
                      className={cn(
                        "relative group",
                        "bg-black/40 backdrop-blur-xl rounded-xl p-4",
                        "border border-white/10",
                        "hover:border-red-500/30 transition-all duration-300",
                        "hover:shadow-[0_0_20px_-12px] hover:shadow-red-500/20"
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-red-500/10 border border-red-500/20">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        </div>
                        <p className="text-white/80 text-base leading-relaxed">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exceptions */}
              {rule.exceptions && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-500/10 border border-blue-500/20">
                      <Info className="w-5 h-5 text-blue-500" />
                    </div>
                    Exceptions
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {rule.exceptions.map((item, index) => (
                      <div
                        key={index}
                        className={cn(
                          "relative group",
                          "bg-black/40 backdrop-blur-xl rounded-xl p-4",
                          "border border-white/10",
                          "hover:border-blue-500/30 transition-all duration-300",
                          "hover:shadow-[0_0_20px_-12px] hover:shadow-blue-500/20"
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-blue-500/10 border border-blue-500/20">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          </div>
                          <p className="text-white/80 text-base leading-relaxed">{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
