"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { DanceEvent } from "../types/events-types";

interface EventCardProps {
  event: DanceEvent;
  isActive: boolean;
  onClick: () => void;
}

export function EventCard({ event, isActive, onClick }: EventCardProps) {
  return (
    <motion.div
      onClick={onClick}
      className={`
        group relative h-[280px] overflow-hidden rounded-2xl cursor-pointer
        transition-all duration-500 ease-out
        ${isActive 
          ? 'shadow-[0_0_25px_rgba(255,215,0,0.2)]' 
          : 'hover:shadow-[0_0_15px_rgba(255,215,0,0.1)]'}
      `}
      initial={false}
      animate={{
        scale: isActive ? 1.02 : 1,
        y: isActive ? -5 : 0
      }}
      whileHover={{ y: -3 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className={`
            object-cover transition-all duration-700
            ${isActive ? 'scale-105' : 'group-hover:scale-102'}
            ${isActive ? 'brightness-100' : 'brightness-75 group-hover:brightness-90'}
          `}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Gradient overlay - more elegant for active state */}
        <div className={`
          absolute inset-0 transition-all duration-500
          ${isActive 
            ? 'bg-gradient-to-t from-black/70 via-black/30 to-transparent' 
            : 'bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/80 group-hover:via-black/40'}
        `} />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full p-6 flex flex-col justify-end">
        {/* Event Type Badge */}
        <div className="absolute top-4 right-4">
          <motion.span 
            className={`
              px-3 py-1 rounded-full text-xs font-medium tracking-wide
              transition-all duration-300
              ${isActive 
                ? 'bg-gradient-to-r from-[#FFD700] to-[#FDB931] text-black' 
                : 'bg-white/10 text-white/90 backdrop-blur-sm group-hover:bg-white/15'}
            `}
            animate={{
              scale: isActive ? 1.05 : 1
            }}
          >
            {event.type}
          </motion.span>
        </div>

        {/* Event Info */}
        <div className="space-y-3">
          <motion.h3 
            className={`
              text-2xl font-bold transition-all duration-300
              ${isActive 
                ? 'text-[#FFD700]' 
                : 'text-white group-hover:text-white/95'}
            `}
            animate={{ 
              scale: isActive ? 1.02 : 1,
              y: isActive ? -2 : 0
            }}
          >
            {event.title}
          </motion.h3>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className={`
                w-4 h-4 transition-colors duration-300
                ${isActive ? 'text-[#FFD700]' : 'text-white/70 group-hover:text-white/90'}
              `} />
              <span className={`
                transition-colors duration-300
                ${isActive ? 'text-white/90' : 'text-white/70 group-hover:text-white/90'}
              `}>
                {event.date}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className={`
                w-4 h-4 transition-colors duration-300
                ${isActive ? 'text-[#FFD700]' : 'text-white/70 group-hover:text-white/90'}
              `} />
              <span className={`
                transition-colors duration-300
                ${isActive ? 'text-white/90' : 'text-white/70 group-hover:text-white/90'}
              `}>
                {event.time}
              </span>
            </div>
          </div>

          {/* Selection Indicator - more subtle and elegant */}
          <motion.div 
            className="flex items-center gap-2 text-xs font-medium mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: isActive ? 1 : 0,
              y: isActive ? 0 : 5
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-px w-5 bg-[#FFD700]" />
            <span className="text-[#FFD700] uppercase tracking-wider">Selected</span>
          </motion.div>
        </div>
      </div>

      {/* Elegant border for active state */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
        style={{
          background: isActive ? 'linear-gradient(to right, transparent, rgba(255,215,0,0.1), transparent)' : 'none',
          boxShadow: isActive ? 'inset 0 0 0 1px rgba(255,215,0,0.3)' : 'none'
        }}
      />
      
      {/* Bottom highlight bar for active state */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD700] to-[#FDB931]"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ 
          scaleX: isActive ? 1 : 0,
          opacity: isActive ? 1 : 0
        }}
        style={{ 
          transformOrigin: 'left',
          borderTopLeftRadius: '2px',
          borderTopRightRadius: '2px'
        }}
      />
    </motion.div>
  );
} 