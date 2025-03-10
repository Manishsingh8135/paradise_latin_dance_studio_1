"use client";

import { HeroParticles } from "./hero-particles";
import { cn } from "@/lib/utils";

interface PremiumBackgroundProps {
  className?: string;
  gradient?: "top" | "bottom" | "both" | "none";
  children?: React.ReactNode;
  glowEffects?: boolean;
}

export function PremiumBackground({ 
  className, 
  gradient = "both",
  glowEffects = true,
  children 
}: PremiumBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Particle Background */}
      <div className="absolute inset-0 bg-black">
        <HeroParticles />
        
        {/* Gradient Overlays */}
        {gradient === "top" && (
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black" />
        )}
        {gradient === "bottom" && (
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        )}
        {gradient === "both" && (
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        )}
      </div>

      {/* Glow Effects */}
      {glowEffects && (
        <>
          <div className="absolute -left-1/4 top-0 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(255,215,0,0.1),transparent_50%)] blur-3xl pointer-events-none" />
          <div className="absolute -right-1/4 bottom-0 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(218,165,32,0.1),transparent_50%)] blur-3xl pointer-events-none" />
        </>
      )}

      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
