// src/components/hero/hero2/ui/premium-button.tsx
"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary";
  scale?: boolean;
  glow?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function PremiumButton({
  href,
  variant = "primary",
  scale = true,
  glow = true,
  className,
  children,
  ...props
}: PremiumButtonProps) {
  const buttonClasses = cn(
    // Base styles
    "relative group inline-flex items-center justify-center",
    "px-8 py-4 rounded-full",
    "text-lg font-semibold",
    "transition-all duration-300 ease-out",
    "overflow-hidden",
    
    // Variant specific styles
    variant === "primary" && [
      "bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#C6930A]",
      "text-black",
      "hover:from-[#FDB931] hover:via-[#C6930A] hover:to-[#FFD700]",
      glow && "shadow-[0_0_20px_rgba(218,165,32,0.3)]",
      "hover:shadow-[0_0_25px_rgba(218,165,32,0.5)]",
    ],
    variant === "secondary" && [
      "bg-black/10",
      "backdrop-blur-sm",
      "text-white",
      "border-2 border-[#FFD700]/50",
      "hover:border-[#FFD700]",
      "hover:bg-black/20",
    ],
    className
  );

  const contentWrapper = (
    <motion.div
      className="relative"
      whileHover={scale ? { scale: 1.02 } : {}}
      whileTap={{ scale: 0.98 }}
    >
      {/* Shine effect overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000" />
      </div>

      {/* Button content */}
      <span className="relative flex items-center gap-2">
        {children}
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {contentWrapper}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {contentWrapper}
    </button>
  );
}