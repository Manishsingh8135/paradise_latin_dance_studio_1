"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Program } from "../data/programs-data";
import { 
  Clock, 
  Flame, 
  ChevronRight, 
  Users, 
  Dumbbell,
  Trophy,
  Calendar
} from "lucide-react";
import { PremiumButton } from "../../../ui/premium-button";

interface ProgramCardProps {
  program: Program;
  isExpanded: boolean;
  onExpand: () => void;
}

export function ProgramCard({ program, isExpanded, onExpand }: ProgramCardProps) {
  // Get the next available class time
  const getNextClass = () => {
    const today = new Date().getDay();
    const todayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][today];
    
    // Check today's remaining classes
    if (program.schedule[todayName]) {
      const now = new Date();
      const currentTime = now.getHours() * 60 + now.getMinutes();
      
      const todayClass = program.schedule[todayName].find(slot => {
        const [hours, minutes] = slot.startTime.split(":").map(Number);
        const slotTime = hours * 60 + minutes;
        return slotTime > currentTime;
      });
      
      if (todayClass) {
        return { day: "Today", time: todayClass };
      }
    }
    
    // Find next day with classes
    for (let i = 1; i <= 7; i++) {
      const nextDay = (today + i) % 7;
      const nextDayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][nextDay];
      
      if (program.schedule[nextDayName]?.[0]) {
        return {
          day: i === 1 ? "Tomorrow" : nextDayName,
          time: program.schedule[nextDayName][0]
        };
      }
    }
    
    return null;
  };

  const nextClass = getNextClass();

  return (
    <motion.div
      onClick={onExpand}
      className={[
        "relative bg-black/40 backdrop-blur-sm rounded-3xl overflow-hidden cursor-pointer",
        "border border-white/10 hover:border-[#FFD700]/30 transition-colors duration-300",
        "group hover:shadow-[0_0_50px_-12px] hover:shadow-[#FFD700]/20",
        isExpanded ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
      ].join(" ")}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
      <div className="absolute -inset-[1px] bg-gradient-to-b from-transparent via-[#FFD700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
      
      {/* Background Image with Gradient */}
      <motion.div 
        layout
        className="absolute inset-0"
      >
        <Image
          src={program.classImage}
          alt={program.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </motion.div>

      {/* Content */}
      <motion.div layout className="relative p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <motion.div layout className="flex items-center gap-2 mb-2">
              <span className={[
                "px-2 py-1 rounded-full text-xs font-medium",
                program.category === "Special Ops" && "bg-red-500/20 text-red-400",
                program.category === "Strength" && "bg-yellow-500/20 text-yellow-400",
                program.category === "Combat" && "bg-purple-500/20 text-purple-400",
                program.category === "Recovery" && "bg-green-500/20 text-green-400"
              ].filter(Boolean).join(" ")}>
                {program.category}
              </span>
              <span className="bg-white/10 px-2 py-1 rounded-full text-xs font-medium text-white">
                {program.difficulty}
              </span>
            </motion.div>
            <motion.h3 layout className="text-2xl font-bold text-white mb-1">
              {program.name}
            </motion.h3>
            <motion.div layout className="flex items-center gap-4 text-sm text-white/60">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {program.duration}
              </div>
              <div className="flex items-center gap-1">
                <Flame className="w-4 h-4" />
                {program.calories} cal
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            layout
            className="flex flex-col items-end gap-2"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={program.trainerImage}
                alt={program.trainer}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs text-white/60">{program.trainer}</span>
          </motion.div>
        </div>

        {/* Expanded Content */}
        <motion.div
          layout
          className={[
            "flex-1",
            isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
          ].join(" ")}
        >
          <p className="text-white/80 mb-6">{program.description}</p>
          
          {/* Benefits and Equipment */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="flex items-center gap-2 text-[#FFD700] font-medium mb-3">
                <Trophy className="w-4 h-4" /> Benefits
              </h4>
              <ul className="space-y-2">
                {program.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm text-white/60">
                    <ChevronRight className="w-3 h-3 text-[#FFD700]" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-[#FFD700] font-medium mb-3">
                <Dumbbell className="w-4 h-4" /> Equipment
              </h4>
              <ul className="space-y-2">
                {program.equipment.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                    <ChevronRight className="w-3 h-3 text-[#FFD700]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Next Class */}
          {nextClass && (
            <div className="bg-white/5 rounded-2xl p-4 mb-6">
              <h4 className="flex items-center gap-2 text-[#FFD700] font-medium mb-3">
                <Calendar className="w-4 h-4" /> Next Available Class
              </h4>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">{nextClass.day}</p>
                  <p className="text-sm text-white/60">
                    {nextClass.time.startTime} - {nextClass.time.endTime}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-white/80 mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{nextClass.time.availableSpots} spots left</span>
                  </div>
                  <PremiumButton
                    variant="secondary"
                    className="text-sm px-4 py-2"
                    scale={true}
                  >
                    Book Now
                  </PremiumButton>
                </div>
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {program.tags.map((tag) => (
              <span
                key={tag}
                className="bg-white/5 px-3 py-1 rounded-full text-xs text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Intensity Indicator */}
        <motion.div
          layout
          className="absolute bottom-6 right-6"
        >
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={[
                  "w-1 h-4 rounded-full",
                  i < program.intensity ? "bg-[#FFD700]" : "bg-white/20"
                ].join(" ")}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
