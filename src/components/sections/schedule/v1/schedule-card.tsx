"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, User } from "lucide-react";
import { ScheduleCardProps } from "../types/schedule-types";

export function ScheduleCard({ danceClass, onClick, featured = false }: ScheduleCardProps) {
  const levelColorMap = {
    "Beginner": "bg-[#4CAF50]/20 text-[#4CAF50] border-[#4CAF50]/30",
    "Intermediate": "bg-[#FFC107]/20 text-[#FFC107] border-[#FFC107]/30",
    "Advanced": "bg-[#F44336]/20 text-[#F44336] border-[#F44336]/30",
    "All Levels": "bg-[#3F51B5]/20 text-[#3F51B5] border-[#3F51B5]/30"
  };
  
  const levelColor = levelColorMap[danceClass.level] || levelColorMap["All Levels"];

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(255, 215, 0, 0.15)" }}
      className={`
        relative overflow-hidden rounded-2xl p-6 transition-all duration-300 border
        ${featured 
          ? 'bg-gradient-to-b from-[#FFD700]/20 to-[#0a0a0a]/90 border-[#FFD700]/40 shadow-lg' 
          : 'bg-gradient-to-b from-[#1a1a1a]/80 to-[#0a0a0a]/70 border-[#FFD700]/20 hover:border-[#FFD700]/40'
        }
      `}
    >
      {/* Royal Corner Accents */}
      <div className="absolute -top-1 -left-1 w-8 h-8">
        <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1C1 1 31 1 31 31" stroke="#FFD700" strokeOpacity={featured ? "0.8" : "0.4"} strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute -top-1 -right-1 w-8 h-8">
        <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31 1C31 1 1 1 1 31" stroke="#FFD700" strokeOpacity={featured ? "0.8" : "0.4"} strokeWidth="2" />
        </svg>
      </div>
      
      <div className="space-y-4 relative z-10">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
              {danceClass.style}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className={`px-3 py-0.5 text-xs rounded-full border ${levelColor}`}>
                {danceClass.level}
              </span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#FFD700]/20 text-[#FFD700] text-sm border border-[#FFD700]/20">
            {danceClass.room}
          </span>
        </div>

        <div className="h-px w-16 bg-gradient-to-r from-[#FFD700]/60 to-transparent opacity-70" />

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-white/80">
            <div className="w-8 h-8 rounded-full bg-[#FFD700]/10 flex items-center justify-center">
              <Clock className="w-4 h-4 text-[#FFD700]" />
            </div>
            <span>{danceClass.time} • {danceClass.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <div className="w-8 h-8 rounded-full bg-[#FFD700]/10 flex items-center justify-center">
              <User className="w-4 h-4 text-[#FFD700]" />
            </div>
            <span>{danceClass.instructor}</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <div className="w-8 h-8 rounded-full bg-[#FFD700]/10 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-[#FFD700]" />
            </div>
            <span>{danceClass.capacity}</span>
          </div>
        </div>

        <button 
          onClick={onClick}
          className={`
            w-full px-4 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden relative group
            ${featured
              ? 'bg-gradient-to-r from-[#FFD700] to-[#FDB931] text-black hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]'
              : 'bg-gradient-to-r from-[#FFD700]/10 to-[#FDB931]/5 text-white hover:from-[#FFD700]/20 hover:to-[#FDB931]/10 border border-[#FFD700]/30'
            }
          `}
        >
          <span className="relative z-10">Book Class</span>
          
          {/* Animated button effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-[#FFD700]/0 via-[#FFD700]/20 to-[#FFD700]/0 transition-transform duration-700 ease-in-out" />
        </button>
      </div>
    </motion.div>
  );
} 