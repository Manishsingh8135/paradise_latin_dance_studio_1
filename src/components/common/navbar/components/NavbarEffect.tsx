"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavbarEffectProps {
  isScrolled: boolean;
}

export function NavbarEffect({ isScrolled }: NavbarEffectProps) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dot-white/[0.05]" />

      {/* Gradient Background */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-gradient-to-b from-black via-black/80 to-black/60",
          "transition-opacity duration-500",
          isScrolled ? "opacity-95" : "opacity-60"
        )}
      />

      {/* Ambient Light Effect */}
      <div
        className={cn(
          "absolute -inset-[100%]",
          "bg-gradient-to-r from-transparent via-[#FFD700]/5 to-transparent",
          "animate-ambient-light"
        )}
      />

      {/* Top Border Glow */}
      <div
        className={cn(
          "absolute top-0 inset-x-0 h-px",
          "bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent",
          "transition-opacity duration-500",
          isScrolled ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Glowing Orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 0.5 : 0.2 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        {/* Primary Orb */}
        <div 
          className={cn(
            "absolute -left-20 top-10",
            "w-40 h-40 rounded-full",
            "bg-[#FFD700]",
            "opacity-20 blur-[100px]",
            "transition-transform duration-1000",
            isScrolled ? "-translate-y-10" : "translate-y-0"
          )} 
        />

        {/* Secondary Orb */}
        <div 
          className={cn(
            "absolute -right-20 top-20",
            "w-40 h-40 rounded-full",
            "bg-[#C6930A]",
            "opacity-20 blur-[100px]",
            "transition-transform duration-1000",
            isScrolled ? "-translate-y-10" : "translate-y-0"
          )} 
        />
      </motion.div>

      {/* Grain Effect */}
      <div 
        className={cn(
          "absolute inset-0",
          "opacity-20",
          "bg-[url('/grain.svg')]",
          "transition-opacity duration-500",
          isScrolled ? "opacity-10" : "opacity-20"
        )} 
      />
    </div>
  );
}