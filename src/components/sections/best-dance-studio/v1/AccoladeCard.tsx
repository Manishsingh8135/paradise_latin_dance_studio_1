"use client";

import { motion } from "framer-motion";
import { Accolade } from "../types/best-dance-studio.types";
import { Award, Medal, Trophy, Heart } from "lucide-react";

interface AccoladeCardProps {
  accolade: Accolade;
  index: number;
}

export function AccoladeCard({ accolade, index }: AccoladeCardProps) {
  // Get the correct icon component
  const IconComponent = () => {
    switch (accolade.icon) {
      case "Trophy":
        return <Trophy className="w-6 h-6 text-[#FFD700]" />;
      case "Award":
        return <Award className="w-6 h-6 text-[#FFD700]" />;
      case "Medal":
        return <Medal className="w-6 h-6 text-[#FFD700]" />;
      case "Heart":
        return <Heart className="w-6 h-6 text-[#FFD700]" />;
      default:
        return <Award className="w-6 h-6 text-[#FFD700]" />;
    }
  };

  // Animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateY: 15,
      scale: 0.9,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 70,
        damping: 20,
        delay: index * 0.15,
      }
    },
    hover: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  // Different styling based on accolade type
  const getTypeStyles = () => {
    switch (accolade.type) {
      case "award":
        return "from-yellow-500/30 to-amber-600/30 border-yellow-500/30";
      case "recognition":
        return "from-blue-500/30 to-indigo-600/30 border-blue-500/30";
      case "milestone":
        return "from-emerald-500/30 to-teal-600/30 border-emerald-500/30";
      case "testimonial":
        return "from-purple-500/30 to-pink-600/30 border-purple-500/30";
      default:
        return "from-[#FFD700]/30 to-[#FDB931]/30 border-[#FFD700]/30";
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className={`
        relative p-6 rounded-2xl backdrop-blur-sm
        bg-gradient-to-br ${getTypeStyles()}
        border border-[#FFD700]/20
        overflow-hidden
        transform perspective-1000
      `}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-black/40 -z-10" />
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FFD700]/10 rounded-full blur-3xl" />
      
      {/* Card header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-shrink-0 p-3 rounded-full bg-black/50 backdrop-blur-sm">
          <IconComponent />
        </div>
        <div>
          <h3 className="font-bold text-lg text-white">{accolade.title}</h3>
          {accolade.year && (
            <p className="text-xs text-white/70">{accolade.year}</p>
          )}
        </div>
      </div>
      
      {/* Card body */}
      <p className="text-white/90 leading-relaxed mb-4">{accolade.description}</p>
      
      {/* Card footer */}
      {accolade.source && (
        <p className="text-sm text-[#FFD700]">— {accolade.source}</p>
      )}
      
      {/* Decorative elements */}
      {accolade.featured && (
        <motion.div 
          className="absolute -top-1 -right-1 w-20 h-20"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-5 right-5 w-10 h-10 rounded-full border-2 border-dashed border-[#FFD700]/40" />
        </motion.div>
      )}
    </motion.div>
  );
} 