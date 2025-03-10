"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { LucideIcon } from "lucide-react";

export type BadgeVariant = 
  | "primary"   // Golden/Yellow - for premium/featured items
  | "secondary" // Purple - for special items
  | "success"   // Green - for active/completed states
  | "warning"   // Orange - for attention items
  | "danger"    // Red - for important/critical items
  | "info"      // Blue - for informational items
  | "elite"     // Special purple for elite items
  | "custom";   // For custom color schemes

export type BadgeSize = "sm" | "md" | "lg";

export interface StatusBadgeProps extends Omit<HTMLMotionProps<"div">, "className" | "children"> {
  text: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  withBorder?: boolean;
  withGlow?: boolean;
  icon?: LucideIcon;
  className?: string;
  customColors?: {
    background?: string;
    text?: string;
    border?: string;
    glow?: string;
  };
}

const getDefaultColors = (variant: BadgeVariant) => {
  switch (variant) {
    case "primary":
      return {
        background: "bg-yellow-500/20",
        text: "text-yellow-400",
        border: "border-yellow-500/30",
        glow: "shadow-yellow-500/20"
      };
    case "secondary":
      return {
        background: "bg-purple-500/20",
        text: "text-purple-400",
        border: "border-purple-500/30",
        glow: "shadow-purple-500/20"
      };
    case "success":
      return {
        background: "bg-green-500/20",
        text: "text-green-400",
        border: "border-green-500/30",
        glow: "shadow-green-500/20"
      };
    case "warning":
      return {
        background: "bg-orange-500/20",
        text: "text-orange-400",
        border: "border-orange-500/30",
        glow: "shadow-orange-500/20"
      };
    case "danger":
      return {
        background: "bg-red-500/20",
        text: "text-red-400",
        border: "border-red-500/30",
        glow: "shadow-red-500/20"
      };
    case "info":
      return {
        background: "bg-blue-500/20",
        text: "text-blue-400",
        border: "border-blue-500/30",
        glow: "shadow-blue-500/20"
      };
    case "elite":
      return {
        background: "bg-violet-500/20",
        text: "text-violet-400",
        border: "border-violet-500/30",
        glow: "shadow-violet-500/20"
      };
    default:
      return {
        background: "bg-white/10",
        text: "text-white/80",
        border: "border-white/20",
        glow: "shadow-white/20"
      };
  }
};

const getSizeClasses = (size: BadgeSize) => {
  switch (size) {
    case "sm":
      return "px-2 py-0.5 text-xs";
    case "lg":
      return "px-4 py-2 text-sm";
    default: // md
      return "px-3 py-1 text-sm";
  }
};

export function StatusBadge({
  text,
  variant = "primary",
  size = "md",
  withBorder = false,
  withGlow = false,
  icon: Icon,
  className,
  customColors,
  ...props
}: StatusBadgeProps) {
  const colors = variant === "custom" && customColors 
    ? customColors 
    : getDefaultColors(variant);

  return (
    <motion.div
      className={cn(
        // Base styles
        "inline-flex items-center gap-1.5 rounded-full font-medium",
        "transition-all duration-300",
        
        // Size
        getSizeClasses(size),
        
        // Colors
        colors.background,
        colors.text,
        
        // Border
        withBorder && ["border", colors.border],
        
        // Glow
        withGlow && [
          "hover:shadow-lg",
          colors.glow
        ],
        
        className
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      {...props}
    >
      {Icon && <Icon className={cn("w-4 h-4", size === "sm" && "w-3 h-3")} />}
      <span>{text}</span>
    </motion.div>
  );
}

// Helper function to create preset badge variants
export const Badges = {
  Premium: (props: Omit<StatusBadgeProps, "variant" | "text">) => (
    <StatusBadge variant="primary" text="Premium" withBorder withGlow {...props} />
  ),
  Elite: (props: Omit<StatusBadgeProps, "variant" | "text">) => (
    <StatusBadge variant="elite" text="Elite" withBorder withGlow {...props} />
  ),
  New: (props: Omit<StatusBadgeProps, "variant" | "text">) => (
    <StatusBadge variant="success" text="New" withGlow {...props} />
  ),
  Featured: (props: Omit<StatusBadgeProps, "variant" | "text">) => (
    <StatusBadge variant="secondary" text="Featured" withGlow {...props} />
  ),
  Hot: (props: Omit<StatusBadgeProps, "variant" | "text">) => (
    <StatusBadge variant="danger" text="Hot" withGlow {...props} />
  ),
  Coming: (props: Omit<StatusBadgeProps, "variant" | "text">) => (
    <StatusBadge variant="info" text="Coming Soon" {...props} />
  ),
};
