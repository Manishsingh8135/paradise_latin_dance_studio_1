"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight, Music, Clock, Users, Sparkles } from "lucide-react";
import { TrialFormData } from "./trial-signup-section";

interface TrialClassSelectionProps {
  formData: TrialFormData;
  onUpdate: (data: Partial<TrialFormData>) => void;
  onBack: () => void;
  onContinue: () => void;
}

export function TrialClassSelection({ formData, onUpdate, onBack, onContinue }: TrialClassSelectionProps) {
  const handleClassSelect = (className: string) => {
    onUpdate({ selectedClass: className });
  };

  const handleExperienceSelect = (experience: string) => {
    onUpdate({ experience });
  };

  const canContinue = formData.selectedClass && formData.experience;

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] max-w-5xl mx-auto">
      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto pr-2">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
        >
          {/* Compact Header */}
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Choose Your{" "}
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
                Dance Adventure
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 max-w-2xl mx-auto"
            >
              Pick the dance style that excites you most!
            </motion.p>
          </div>

          {/* Compact Class Selection */}
          <div className="mb-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl font-semibold text-white mb-4 text-center"
            >
              Select Your Class Type
            </motion.h3>

            {/* Horizontal Class Cards for Better Space Usage */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {danceClasses.map((danceClass, index) => (
                <motion.div
                  key={danceClass.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => handleClassSelect(danceClass.name)}
                >
                  <div className={`relative bg-black/40 backdrop-blur-xl rounded-xl p-4 border transition-all duration-300 hover:transform hover:scale-105 ${
                    formData.selectedClass === danceClass.name
                      ? "border-[#FFD700] bg-[#FFD700]/10"
                      : "border-white/10 hover:border-[#FFD700]/50"
                  }`}>
                    {/* Selection Indicator */}
                    {formData.selectedClass === danceClass.name && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-3 right-3 w-5 h-5 bg-[#FFD700] rounded-full flex items-center justify-center"
                      >
                        <Sparkles className="w-3 h-3 text-black" />
                      </motion.div>
                    )}

                    {/* Horizontal Layout */}
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className="w-12 h-12 relative shrink-0">
                        <div className={`absolute inset-0 rounded-xl transition-colors duration-300 ${
                          formData.selectedClass === danceClass.name
                            ? "bg-[#FFD700]/30"
                            : "bg-[#FFD700]/20 group-hover:bg-[#FFD700]/25"
                        }`} />
                        <danceClass.icon className="relative w-6 h-6 text-[#FFD700] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h4 className={`text-lg font-semibold mb-1 transition-colors duration-300 ${
                          formData.selectedClass === danceClass.name
                            ? "text-[#FFD700]"
                            : "text-white group-hover:text-[#FFD700]"
                        }`}>
                          {danceClass.name}
                        </h4>
                        <p className="text-white/60 text-sm mb-2">
                          {danceClass.description}
                        </p>
                        
                        {/* Class Details */}
                        <div className="flex items-center gap-4 text-xs text-white/50">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{danceClass.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span>{danceClass.level}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow */}
                    <div className={`absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent to-transparent transition-opacity duration-300 ${
                      formData.selectedClass === danceClass.name
                        ? "via-[#FFD700] opacity-100"
                        : "via-[#FFD700]/30 opacity-0 group-hover:opacity-100"
                    }`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Compact Experience Level */}
          <div className="mb-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl font-semibold text-white mb-4 text-center"
            >
              What&apos;s Your Dance Experience?
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
              {experienceLevels.map((level, index) => (
                <motion.button
                  key={level.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  onClick={() => handleExperienceSelect(level.value)}
                  className={`group relative p-3 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                    formData.experience === level.value
                      ? "bg-[#FFD700]/10 border-[#FFD700] text-[#FFD700]"
                      : "bg-black/40 border-white/10 text-white hover:border-[#FFD700]/50 hover:text-[#FFD700]"
                  }`}
                >
                  <div className="font-semibold mb-1">{level.label}</div>
                  <div className="text-sm opacity-70">{level.description}</div>

                  {formData.experience === level.value && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-2 right-2 w-4 h-4 bg-[#FFD700] rounded-full flex items-center justify-center"
                    >
                      <Sparkles className="w-2 h-2 text-black" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sticky Navigation - Always Visible */}
      <div className="border-t border-white/10 bg-black/40 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-between py-4 px-6"
        >
          {/* Back Button */}
          <motion.button
            onClick={onBack}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white hover:border-[#FFD700]/50 hover:text-[#FFD700] transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </motion.button>

          {/* Continue Button */}
          <motion.button
            onClick={onContinue}
            disabled={!canContinue}
            whileHover={canContinue ? { scale: 1.05 } : {}}
            whileTap={canContinue ? { scale: 0.95 } : {}}
            className={`group relative px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
              canContinue
                ? "bg-gradient-to-r from-[#FFD700] to-[#FDB931] text-black hover:shadow-lg hover:shadow-[#FFD700]/25"
                : "bg-white/10 text-white/50 cursor-not-allowed"
            }`}
          >
            {canContinue && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            )}
            
            <div className="relative flex items-center gap-2">
              <span>Continue</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

const danceClasses = [
  {
    name: "Salsa",
    icon: Music,
    description: "Energetic and passionate Latin dance with intricate partner work and infectious rhythms",
    duration: "60 minutes",
    level: "All levels welcome"
  },
  {
    name: "Bachata", 
    icon: Music,
    description: "Romantic and sensual dance from the Dominican Republic with beautiful hip movements",
    duration: "60 minutes",
    level: "All levels welcome"
  }
];

const experienceLevels = [
  {
    value: "beginner",
    label: "Complete Beginner",
    description: "I've never danced before"
  },
  {
    value: "some_experience", 
    label: "Some Experience",
    description: "I've taken a few classes"
  },
  {
    value: "experienced",
    label: "Experienced",
    description: "I dance regularly"
  }
]; 