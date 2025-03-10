"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navActions } from "../data/navbar.data";
import { navButtonVariants } from "../data/navbar.constants";

export function NavbarAction() {
  return (
    <div className="flex items-center gap-3">
      {navActions.map((action, idx) => (
        <motion.div
          key={action.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            transition: { delay: idx * 0.1 } 
          }}
        >
          <Link href={action.href}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                navButtonVariants({ variant: action.variant }),
                "group"
              )}
            >
              {/* Button Content */}
              <span className="relative">
                {action.label}
                
                {/* Sparkle Effect for Primary Variant */}
                {action.variant === 'primary' && (
                  <span className={cn(
                    "absolute top-0 right-0 -mr-1 -mt-1",
                    "w-2 h-2 rounded-full",
                    "bg-white",
                    "opacity-75",
                    "group-hover:animate-ping"
                  )} />
                )}
              </span>

              {/* Icon if present */}
              {action.icon && (
                <span
                  className={cn(
                    "w-4 h-4",
                    "transition-transform duration-300",
                    "group-hover:scale-110",
                    action.variant === 'primary' 
                      ? "text-black"
                      : "text-current"
                  )}
                >
                  <action.icon />
                </span>
              )}

              {/* Hover Effects */}
              {action.variant === 'primary' ? (
                // Glow effect for primary buttons
                <div className={cn(
                  "absolute inset-0",
                  "rounded-full",
                  "bg-gradient-to-r from-[#FFD700] to-[#FDB931]",
                  "opacity-0 group-hover:opacity-20",
                  "blur-xl",
                  "transition-opacity duration-300"
                )} />
              ) : action.variant === 'secondary' ? (
                // Border shine effect for secondary buttons
                <div className={cn(
                  "absolute inset-0 -z-10",
                  "rounded-full",
                  "bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent",
                  "opacity-0 group-hover:opacity-100",
                  "translate-x-[100%] group-hover:translate-x-[-100%]",
                  "transition-all duration-1000",
                  "ease-out"
                )} />
              ) : null}
            </motion.button>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}