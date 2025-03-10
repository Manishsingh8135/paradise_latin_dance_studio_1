// src/components/hero/hero2/HeroFeatureCard.tsx
"use client";

import { motion } from "framer-motion";
import { PremiumCard } from "../ui/premium-card";
import { cn } from "@/lib/utils";
import { HeroFeature } from "@/types/hero/hero-types";
import { 
  Dumbbell, 
  Users, 
  Apple, 
  Sparkles,
  LucideIcon 
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  dumbbell: Dumbbell,
  users: Users,
  apple: Apple,
  sparkles: Sparkles,
};

interface HeroFeatureCardProps {
  feature: HeroFeature;
  className?: string;
}

export function HeroFeatureCard({ feature, className }: HeroFeatureCardProps) {
  const IconComponent = iconMap[feature.icon];

  return (
    <PremiumCard
      variant="glass"
      className={cn("p-4 group", className)}
      motionProps={{
        whileHover: { scale: 1.02 },
        transition: { duration: 0.2 }
      }}
    >
      <div className="flex items-start gap-4">
        {/* Icon container with glow effect */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-[#FFD700]/20 blur-lg rounded-full"
          />
          <div className={cn(
            "relative w-10 h-10 rounded-full",
            "flex items-center justify-center",
            "bg-gradient-to-br from-[#FFD700] to-[#FDB931]",
            "text-black"
          )}>
            {IconComponent && <IconComponent className="w-5 h-5" />}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-white mb-1 truncate">
            {feature.title}
          </h3>
          <p className="text-sm text-white/70">
            {feature.description}
          </p>
        </div>
      </div>

      {/* Hover highlight effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 w-20 h-20 bg-[radial-gradient(circle_at_0%_0%,rgba(255,215,0,0.1),transparent_50%)]" />
      </div>

      {/* Border glow on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute -inset-px bg-gradient-to-r from-[#FFD700]/20 to-transparent rounded-xl blur-sm" />
      </div>
    </PremiumCard>
  );
}