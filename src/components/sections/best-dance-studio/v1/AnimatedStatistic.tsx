"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Statistic } from "../types/best-dance-studio.types";
import { countingVariants } from "./best-dance-studio.utils";
import { Award, Star, Users, Calendar, Clock, Heart, Medal, Trophy } from "lucide-react";

interface AnimatedStatisticProps {
  statistic: Statistic;
  index: number;
}

export function AnimatedStatistic({ statistic, index }: AnimatedStatisticProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Get the correct icon component
  const IconComponent = () => {
    switch (statistic.icon) {
      case "Trophy":
        return <Trophy className="w-8 h-8 text-[#FFD700]" />;
      case "Award":
        return <Award className="w-8 h-8 text-[#FFD700]" />;
      case "Medal":
        return <Medal className="w-8 h-8 text-[#FFD700]" />;
      case "Star":
        return <Star className="w-8 h-8 text-[#FFD700]" />;
      case "Users":
        return <Users className="w-8 h-8 text-[#FFD700]" />;
      case "Calendar":
        return <Calendar className="w-8 h-8 text-[#FFD700]" />;
      case "Clock":
        return <Clock className="w-8 h-8 text-[#FFD700]" />;
      case "Heart":
        return <Heart className="w-8 h-8 text-[#FFD700]" />;
      default:
        return <Award className="w-8 h-8 text-[#FFD700]" />;
    }
  };

  // Animate the counter when in view
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = statistic.value;
      
      // Calculate duration based on value size
      const duration = Math.min(2000, Math.max(1000, end * 2));
      const increment = end / (duration / 16);
      
      // Don't use RAF for small numbers to ensure we hit the exact value
      if (end < 30) {
        const timer = setInterval(() => {
          start += 1;
          setCount(start);
          if (start >= end) {
            clearInterval(timer);
            setCount(end);
          }
        }, duration / end);
        
        return () => clearInterval(timer);
      }
      
      // Use RAF for smoother large number animations
      let rafId: number;
      const updateCount = () => {
        start += increment;
        if (start < end) {
          setCount(Math.floor(start));
          rafId = requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };
      
      rafId = requestAnimationFrame(updateCount);
      return () => cancelAnimationFrame(rafId);
    }
  }, [isInView, statistic.value]);

  return (
    <motion.div 
      ref={ref}
      variants={countingVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index}
      className="relative flex flex-col items-center bg-[#FFD700]/5 backdrop-blur-sm rounded-2xl p-6 border border-[#FFD700]/20 overflow-hidden group"
    >
      {/* Radial glow effect */}
      <div className="absolute inset-0 bg-radial-gradient from-[#FFD700]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Icon */}
      <div className="relative mb-4 p-4 rounded-full bg-black/30 border border-[#FFD700]/30 group-hover:scale-110 transition-transform duration-500">
        <IconComponent />
      </div>
      
      {/* Value */}
      <div className="relative text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent mb-2 flex items-baseline">
        {statistic.prefix && <span>{statistic.prefix}</span>}
        <span>{count}</span>
        {statistic.unit && <span>{statistic.unit}</span>}
      </div>
      
      {/* Label */}
      <h4 className="text-xl font-medium text-white mb-2">{statistic.label}</h4>
      
      {/* Description */}
      {statistic.description && (
        <p className="text-white/70 text-center text-sm">{statistic.description}</p>
      )}
      
      {/* Decorative elements */}
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FFD700]/5 rounded-full blur-xl" />
    </motion.div>
  );
} 