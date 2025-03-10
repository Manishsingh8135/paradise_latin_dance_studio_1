// src/components/hero/hero2/ui/premium-card.tsx
"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import React, { useState } from "react";

interface PremiumCardProps extends Omit<HTMLMotionProps<"div">, "className" | "children"> {
  className?: string;
  children: React.ReactNode;
  variant?: "glass" | "solid" | "gradient";
  glowOnHover?: boolean;
  interactive?: boolean;
  motionProps?: HTMLMotionProps<"div">;
}

export function PremiumCard({
  className,
  children,
  variant = "glass",
  glowOnHover = true,
  interactive = true,
  motionProps,
  ...props
}: PremiumCardProps) {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      {...props}
      {...motionProps}
      onMouseMove={handleMouseMove}
      className={cn(
        // Base styles
        "relative rounded-3xl overflow-hidden",
        "transition-all duration-300",

        // Variant specific styles
        variant === "glass" && [
          "bg-white/5",
          "backdrop-blur-lg",
          "border border-white/10",
        ],
        variant === "solid" && [
          "bg-black/40",
          "border border-[#FFD700]/20",
        ],
        variant === "gradient" && [
          "bg-gradient-to-br from-[#FFD700]/10 via-black/50 to-[#C6930A]/10",
          "border border-[#FFD700]/20",
        ],

        // Interactive styles
        interactive && "hover:scale-[1.02] hover:border-[#FFD700]/40",
        glowOnHover && interactive && "hover:shadow-[0_0_30px_rgba(218,165,32,0.2)]",
        className
      )}
    >
      {/* Gradient overlay based on mouse position */}
      {interactive && (
        <div 
          className="absolute inset-0 opacity-0 hover:opacity-100 pointer-events-none transition-opacity"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,215,0,0.06), transparent 40%)`,
          }}
        />
      )}

      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(255,215,0,0.03),transparent)]" />

      {/* Card content */}
      <div className="relative">
        {children}
      </div>
    </motion.div>
  );
}