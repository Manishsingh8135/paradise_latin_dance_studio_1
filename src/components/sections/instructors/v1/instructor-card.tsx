"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { InstructorCardProps } from "../types/instructors-types";
import { styleColors } from "../data/instructors-data";

export function InstructorCard({ instructor, isActive, onClick }: InstructorCardProps) {
  // Get colors for the primary specialty to use as accent
  const primaryStyle = instructor.specialties[0];
  const styleColor = styleColors[primaryStyle] || {
    bg: "from-gray-500/20 to-gray-600/20",
    border: "border-gray-500/30",
    text: "text-gray-400"
  };

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`
        relative group cursor-pointer overflow-hidden rounded-2xl
        transition-all duration-500 ease-out 
        ${isActive 
          ? 'ring-4 ring-[#FFD700]/30 scale-[1.02] shadow-[0_0_30px_rgba(255,215,0,0.2)]' 
          : 'hover:ring-2 ring-[#FFD700]/20'}
      `}
    >
      {/* Specialty Tag */}
      <div className="absolute top-4 left-4 z-30">
        <div className={`
          px-3 py-1 rounded-full text-xs font-medium
          bg-gradient-to-r ${styleColor.bg} ${styleColor.text} border ${styleColor.border}
          backdrop-blur-sm
        `}>
          {primaryStyle}
        </div>
      </div>
      
      {/* Featured Badge */}
      {instructor.featured && (
        <div className="absolute top-4 right-4 z-30">
          <div className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-[#FFD700]/20 to-[#DAA520]/20 text-[#FFD700] border border-[#FFD700]/30 backdrop-blur-sm">
            Featured
          </div>
        </div>
      )}

      {/* Image */}
      <div className="aspect-[3/4] relative">
        <Image
          src={instructor.image}
          alt={instructor.name}
          fill
          className="object-cover transition-all duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay Gradients */}
        <div className={`
          absolute inset-0 transition-opacity duration-500
          ${isActive 
            ? 'bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90' 
            : 'bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 group-hover:opacity-90'}
        `} />
        
        {/* Active accent glow */}
        {isActive && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/10 via-transparent to-[#FFD700]/10" />
        )}

        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-10 h-10 opacity-70">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1V15M1 1H15M1 1L15 15" stroke={isActive ? "#FFD700" : "#FFFFFF"} strokeWidth="1.5" strokeOpacity="0.5"/>
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-10 h-10 opacity-70">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39 1V15M39 1H25M39 1L25 15" stroke={isActive ? "#FFD700" : "#FFFFFF"} strokeWidth="1.5" strokeOpacity="0.5" />
          </svg>
        </div>
      </div>
      
      {/* Info Card */}
      <div className="absolute inset-x-0 bottom-0 p-6 transform transition-transform duration-300">
        <h3 className={`text-2xl font-bold mb-1 ${isActive ? 'text-[#FFD700]' : 'text-white group-hover:text-[#FFD700]'}`}>
          {instructor.name}
        </h3>
        <p className="text-white/80 text-sm mb-2">
          {instructor.role}
        </p>
        
        {/* Specialties Pills */}
        <div className="flex flex-wrap gap-1 mt-3">
          {instructor.specialties.slice(0, 3).map((specialty, index) => {
            const colors = styleColors[specialty];
            return (
              <span 
                key={index}
                className={`text-xs px-2 py-0.5 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
              >
                {specialty}
              </span>
            );
          })}
        </div>
        
        {/* View Details Bar */}
        <div className={`
          mt-4 flex items-center justify-between px-4 py-2 rounded-lg
          ${isActive 
            ? 'bg-[#FFD700]/20 border border-[#FFD700]/30'
            : 'bg-white/5 border border-white/10 group-hover:bg-[#FFD700]/10 group-hover:border-[#FFD700]/20'
          }
        `}>
          <span className={`text-sm font-medium ${isActive ? 'text-[#FFD700]' : 'text-white/70 group-hover:text-[#FFD700]'}`}>
            {isActive ? 'Selected' : 'View Details'}
          </span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke={isActive ? "#FFD700" : "rgba(255,255,255,0.7)"}
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={`transition-transform duration-300 ${isActive ? 'rotate-90' : 'group-hover:translate-x-1'}`}
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </div>
      </div>
    </motion.div>
  );
} 