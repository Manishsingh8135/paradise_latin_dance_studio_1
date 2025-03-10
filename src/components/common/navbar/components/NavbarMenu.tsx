"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navItems } from "../data/navbar.data";
import { navMenuItemVariants, navFeatureCardVariants } from "../data/navbar.constants";
import { THEME_CONFIG } from "../data/navbar.theme";
import { ChevronDown } from "lucide-react";

export function NavbarMenu() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav className="flex items-center gap-2">
      {navItems.map((item) => (
        <div
          key={item.id}
          className="relative"
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {/* Menu Item */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <Link
              href={item.href}
              className={cn(
                navMenuItemVariants({}),
                "group"
              )}
            >
              <span>{item.label}</span>
              {item.features && (
                <ChevronDown
                  className={cn(
                    "w-4 h-4",
                    THEME_CONFIG.transitions.base,
                    "group-hover:text-[#FFD700]",
                    hoveredItem === item.id && "rotate-180"
                  )}
                />
              )}

              {/* Hover Effect Line */}
              <motion.div
                className={cn(
                  "absolute left-0 right-0 bottom-0 h-0.5",
                  "bg-gradient-to-r from-[#FFD700] to-[#FDB931]",
                  "origin-left"
                )}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredItem === item.id ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
          </motion.div>

          {/* Dropdown Menu */}
          {item.features && (
            <AnimatePresence>
              {hoveredItem === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "absolute top-full left-0",
                    "w-[400px] p-4 mt-2",
                    THEME_CONFIG.borderRadius.xl,
                    "bg-black/90 backdrop-blur-xl",
                    "border border-white/10",
                    THEME_CONFIG.effects.shadows.basicGlow,
                    "grid grid-cols-1 gap-2",
                    "overflow-hidden"
                  )}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-dot-white/[0.05]" />

                  {/* Features Grid */}
                  <div className="relative grid gap-2">
                    {item.features.map((feature, idx) => (
                      <motion.div
                        key={feature.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { delay: idx * 0.1 }
                        }}
                      >
                        <Link
                          href={feature.href}
                          className={navFeatureCardVariants({ interactive: true })}
                        >
                          <div className={cn(
                            "flex-shrink-0 w-10 h-10",
                            "flex items-center justify-center",
                            "rounded-full",
                            "bg-gradient-to-br from-[#FFD700]/10 to-[#C6930A]/10",
                            "border border-[#FFD700]/20",
                            THEME_CONFIG.transitions.base
                          )}>
                            <span className="w-5 h-5 text-[#FFD700]">
                              <feature.icon />
                            </span>
                          </div>
                          <div>
                            <h4 className={cn(
                              "font-medium",
                              "text-white group-hover:text-[#FFD700]",
                              THEME_CONFIG.transitions.base
                            )}>
                              {feature.title}
                            </h4>
                            <p className={cn(
                              "text-sm mt-0.5",
                              "text-white/60 group-hover:text-white/80",
                              THEME_CONFIG.transitions.base
                            )}>
                              {feature.description}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      ))}
    </nav>
  );
}