"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Filter, ChevronDown } from "lucide-react";

const danceClasses = [
  {
    id: "salsa-beg-mon",
    style: "Salsa",
    level: "Beginner",
    instructor: "Mike Lorenzo",
    day: "Monday",
    time: "18:00",
    duration: "60 min",
    capacity: "20 spots",
    room: "Studio A"
  },
  {
    id: "bachata-int-mon",
    style: "Bachata",
    level: "Intermediate",
    instructor: "Rico",
    day: "Monday",
    time: "19:30",
    duration: "60 min",
    capacity: "20 spots",
    room: "Studio A"
  },
  {
    id: "contemporary-beg-tue",
    style: "Contemporary",
    level: "Beginner",
    instructor: "James Chen",
    day: "Tuesday",
    time: "17:30",
    duration: "75 min",
    capacity: "15 spots",
    room: "Studio B"
  },
  {
    id: "hiphop-all-tue",
    style: "Hip Hop",
    level: "All Levels",
    instructor: "Sophia Patel",
    day: "Tuesday",
    time: "19:00",
    duration: "60 min",
    capacity: "25 spots",
    room: "Studio A"
  },
  // Add more classes...
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const styles = ["All Styles", "Salsa", "Bachata", "Contemporary", "Hip Hop"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export function DanceSchedule() {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [selectedStyle, setSelectedStyle] = useState("All Styles");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const filteredClasses = danceClasses.filter(danceClass => {
    if (selectedDay !== danceClass.day) return false;
    if (selectedStyle !== "All Styles" && selectedStyle !== danceClass.style) return false;
    if (selectedLevel !== "All Levels" && selectedLevel !== danceClass.level) return false;
    return true;
  });

  const handleDropdownClick = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            <span className="text-white">Class</span>{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">Schedule</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-white/80"
          >
            Find the perfect class that fits your schedule and skill level.
          </motion.p>
        </div>

        {/* New Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 max-w-3xl mx-auto relative z-50"
        >
          <div className="relative flex flex-col items-center sm:flex-row sm:justify-center gap-4 p-4 rounded-2xl bg-[#FFD700]/5 backdrop-blur-sm border border-[#FFD700]/10">
            <div className="flex items-center gap-2 text-[#FFD700]">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filters:</span>
            </div>
            
            {/* Day Dropdown */}
            <div className="relative w-full sm:w-40">
              <button
                onClick={() => handleDropdownClick('day')}
                className="flex items-center justify-between w-full px-4 py-2 rounded-xl bg-[#FFD700]/10 hover:bg-[#FFD700]/20 transition-colors text-white"
              >
                <span>{selectedDay}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'day' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openDropdown === 'day' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-[60] w-full mt-2 py-2 rounded-xl bg-black/90 backdrop-blur-sm border border-[#FFD700]/20 shadow-lg shadow-black/50"
                  >
                    {days.map((day) => (
                      <button
                        key={day}
                        onClick={() => {
                          setSelectedDay(day);
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
                className="flex items-center justify-between w-full px-4 py-2 rounded-xl bg-[#FFD700]/10 hover:bg-[#FFD700]/20 transition-colors text-white"
              >
                <span>{selectedStyle}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'style' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openDropdown === 'style' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-[60] w-full mt-2 py-2 rounded-xl bg-black/90 backdrop-blur-sm border border-[#FFD700]/20 shadow-lg shadow-black/50"
                  >
                    {styles.map((style) => (
                      <button
                        key={style}
                        onClick={() => {
                          setSelectedStyle(style);
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
                className="flex items-center justify-between w-full px-4 py-2 rounded-xl bg-[#FFD700]/10 hover:bg-[#FFD700]/20 transition-colors text-white"
              >
                <span>{selectedLevel}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'level' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openDropdown === 'level' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-[60] w-full mt-2 py-2 rounded-xl bg-black/90 backdrop-blur-sm border border-[#FFD700]/20 shadow-lg shadow-black/50"
                  >
                    {levels.map((level) => (
                      <button
                        key={level}
                        onClick={() => {
                          setSelectedLevel(level);
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

        {/* Schedule Grid */}
        <div className="mt-12 relative z-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedDay}-${selectedStyle}-${selectedLevel}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredClasses.map((danceClass) => (
                <motion.div
                  key={danceClass.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="group relative overflow-hidden rounded-2xl bg-[#FFD700]/5 backdrop-blur-sm p-6 hover:bg-[#FFD700]/10 transition-all duration-300 border border-[#FFD700]/10"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
                          {danceClass.style}
                        </h3>
                        <p className="text-white/80">{danceClass.level}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#FFD700]/20 text-[#FFD700] text-sm border border-[#FFD700]/20">
                        {danceClass.room}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-white/80">
                        <Clock className="w-4 h-4 text-[#FFD700]" />
                        <span>{danceClass.time} • {danceClass.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80">
                        <User className="w-4 h-4 text-[#FFD700]" />
                        <span>{danceClass.instructor}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80">
                        <Calendar className="w-4 h-4 text-[#FFD700]" />
                        <span>{danceClass.capacity}</span>
                      </div>
                    </div>

                    <button className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FDB931] text-black font-medium hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all duration-300">
                      Book Class
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
