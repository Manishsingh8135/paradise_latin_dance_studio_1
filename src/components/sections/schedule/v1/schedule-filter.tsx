"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, ChevronDown } from "lucide-react";
import { ScheduleFilterProps } from "../types/schedule-types";
import { days, styles, levels } from "../data/schedule-data";

export function ScheduleFilter({
  selectedDay,
  selectedStyle,
  selectedLevel,
  onDayChange,
  onStyleChange,
  onLevelChange
}: ScheduleFilterProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownClick = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const getDropdownVariants = () => {
    return {
      hidden: { opacity: 0, y: -10, height: 0 },
      visible: { opacity: 1, y: 0, height: "auto" },
      exit: { opacity: 0, y: -10, height: 0 }
    };
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto relative z-50"
    >
      <div className="relative flex flex-col items-center sm:flex-row sm:justify-center gap-4 p-6 rounded-2xl bg-gradient-to-b from-[#1a1a1a]/90 to-[#0a0a0a]/80 backdrop-blur-sm border border-[#FFD700]/10 shadow-lg shadow-black/20">
        {/* Filter Header */}
        <div className="flex items-center gap-2 text-[#FFD700]">
          <Filter className="w-5 h-5" />
          <span className="font-medium">Filters:</span>
        </div>
        
        {/* Day Dropdown */}
        <div className="relative w-full sm:w-40">
          <button
            onClick={() => handleDropdownClick('day')}
            className="flex items-center justify-between w-full px-4 py-2 rounded-xl bg-[#FFD700]/10 hover:bg-[#FFD700]/20 transition-colors border border-[#FFD700]/20 text-white"
          >
            <span>{selectedDay}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'day' ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openDropdown === 'day' && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={getDropdownVariants()}
                className="absolute z-[60] w-full mt-2 py-2 rounded-xl bg-black/90 backdrop-blur-sm border border-[#FFD700]/20 shadow-lg shadow-black/50"
              >
                {days.map((day) => (
                  <button
                    key={day}
                    onClick={() => {
                      onDayChange(day);
                      setOpenDropdown(null);
                    }}
                    className={`w-full px-4 py-2 text-center hover:bg-[#FFD700]/10 transition-colors ${
                      selectedDay === day ? 'text-[#FFD700]' : 'text-white'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Style Dropdown */}
        <div className="relative w-full sm:w-40">
          <button
            onClick={() => handleDropdownClick('style')}
            className="flex items-center justify-between w-full px-4 py-2 rounded-xl bg-[#FFD700]/10 hover:bg-[#FFD700]/20 transition-colors border border-[#FFD700]/20 text-white"
          >
            <span>{selectedStyle}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'style' ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openDropdown === 'style' && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={getDropdownVariants()}
                className="absolute z-[60] w-full mt-2 py-2 rounded-xl bg-black/90 backdrop-blur-sm border border-[#FFD700]/20 shadow-lg shadow-black/50"
              >
                {styles.map((style) => (
                  <button
                    key={style}
                    onClick={() => {
                      onStyleChange(style);
                      setOpenDropdown(null);
                    }}
                    className={`w-full px-4 py-2 text-center hover:bg-[#FFD700]/10 transition-colors ${
                      selectedStyle === style ? 'text-[#FFD700]' : 'text-white'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Level Dropdown */}
        <div className="relative w-full sm:w-40">
          <button
            onClick={() => handleDropdownClick('level')}
            className="flex items-center justify-between w-full px-4 py-2 rounded-xl bg-[#FFD700]/10 hover:bg-[#FFD700]/20 transition-colors border border-[#FFD700]/20 text-white"
          >
            <span>{selectedLevel}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'level' ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openDropdown === 'level' && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={getDropdownVariants()}
                className="absolute z-[60] w-full mt-2 py-2 rounded-xl bg-black/90 backdrop-blur-sm border border-[#FFD700]/20 shadow-lg shadow-black/50"
              >
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => {
                      onLevelChange(level);
                      setOpenDropdown(null);
                    }}
                    className={`w-full px-4 py-2 text-center hover:bg-[#FFD700]/10 transition-colors ${
                      selectedLevel === level ? 'text-[#FFD700]' : 'text-white'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
} 