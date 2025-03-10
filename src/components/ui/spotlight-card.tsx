"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { Clock } from "lucide-react";

export interface SpotlightCardBadge {
  text: string;
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  withBorder?: boolean;
}

export interface SpotlightCardStat {
  label: string;
  value: string | number;
}

export interface SpotlightCardProps extends Omit<HTMLMotionProps<"div">, "className" | "children"> {
  className?: string;
  image?: {
    src: string;
    alt: string;
  };
  size?: 'small' | 'medium' | 'large';
  title?: string;
  description?: string;
  badges?: SpotlightCardBadge[];
  features?: string[];
  stats?: SpotlightCardStat[];
  schedule?: {
    text: string;
    icon?: React.ReactNode;
  };
  expandOnHover?: boolean;
  glowOnHover?: boolean;
  interactive?: boolean;
  children?: React.ReactNode;
}

const getBadgeStyles = (variant: SpotlightCardBadge['variant'], withBorder: boolean = false) => {
  const baseStyles = "px-2 py-1 rounded-full text-xs font-medium";
  const borderStyles = withBorder ? "border" : "";
  
  switch (variant) {
    case 'primary':
      return cn(baseStyles, borderStyles, "bg-yellow-500/20 text-yellow-400", withBorder && "border-yellow-500/30");
    case 'secondary':
      return cn(baseStyles, borderStyles, "bg-purple-500/20 text-purple-400", withBorder && "border-purple-500/30");
    case 'success':
      return cn(baseStyles, borderStyles, "bg-green-500/20 text-green-400", withBorder && "border-green-500/30");
    case 'warning':
      return cn(baseStyles, borderStyles, "bg-orange-500/20 text-orange-400", withBorder && "border-orange-500/30");
    case 'danger':
      return cn(baseStyles, borderStyles, "bg-red-500/20 text-red-400", withBorder && "border-red-500/30");
    case 'info':
      return cn(baseStyles, borderStyles, "bg-blue-500/20 text-blue-400", withBorder && "border-blue-500/30");
    default:
      return cn(baseStyles, borderStyles, "bg-white/10 text-white/80");
  }
};

export function SpotlightCard({
  className,
  image,
  size = 'medium',
  title,
  description,
  badges,
  features,
  stats,
  schedule,
  expandOnHover = true,
  glowOnHover = true,
  interactive = true,
  children,
  ...props
}: SpotlightCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "relative rounded-3xl overflow-hidden",
        interactive && "cursor-pointer",
        "border border-white/10 hover:border-[#FFD700]/30 transition-colors duration-300",
        glowOnHover && "group hover:shadow-[0_0_50px_-12px] hover:shadow-[#FFD700]/20",
        size === 'large' && "lg:col-span-2 lg:row-span-2",
        size === 'medium' && "lg:col-span-1 lg:row-span-2",
        size === 'small' && "lg:col-span-1 lg:row-span-1",
        className
      )}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      {...props}
    >
      {/* Glow Effect */}
      {glowOnHover && (
        <>
          <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
          <div className="absolute -inset-[1px] bg-gradient-to-b from-transparent via-[#FFD700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
        </>
      )}

      {/* Background Image */}
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className={cn(
              "object-cover transition-transform duration-500 ease-out",
              expandOnHover && "group-hover:scale-105"
            )}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>
      )}

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-between">
        {/* Header Content */}
        <div className="space-y-4">
          {/* Badges */}
          {badges && badges.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className={getBadgeStyles(badge.variant, badge.withBorder)}
                >
                  {badge.text}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          {title && (
            <motion.h3 
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {title}
            </motion.h3>
          )}
        </div>

        {/* Main Content */}
        <motion.div 
          className={cn(
            "space-y-4",
            "transform transition-all duration-300",
            expandOnHover && [
              "group-hover:translate-y-0 group-hover:opacity-100",
              isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            ]
          )}
        >
          {/* Description */}
          {description && (
            <p className="text-white/80 text-sm">
              {description}
            </p>
          )}
          
          {/* Features */}
          {features && features.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {features.map((feature, index) => (
                <span
                  key={index}
                  className="px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}

          {/* Stats */}
          {(stats || schedule) && (
            <div className="flex flex-wrap gap-3">
              {stats?.map((stat, index) => (
                <div key={index} className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-lg">
                  <div className="text-[#FFD700] font-bold">{stat.value}</div>
                  <div className="text-white/40 text-sm">{stat.label}</div>
                </div>
              ))}
              {schedule && (
                <div className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-lg flex items-center gap-2">
                  {schedule.icon || <Clock className="w-4 h-4 text-[#FFD700]" />}
                  <span className="text-white/80 text-sm">{schedule.text}</span>
                </div>
              )}
            </div>
          )}

          {/* Custom Content */}
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}
