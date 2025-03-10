"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
// import { navItems, navActions, mobileNavFeatures } from "../data/navbar.data";
import { navItems, navActions } from "../data/navbar.data";
import { THEME_CONFIG } from "../data/navbar.theme";
import { ChevronDown, ChevronRight } from "lucide-react";

interface NavbarMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NavbarMobile({ isOpen, onClose }: NavbarMobileProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className={cn(
              "fixed inset-0 z-40",
              "bg-black/60 backdrop-blur-sm"
            )}
          />

          {/* Mobile Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className={cn(
              "fixed inset-y-0 right-0 z-50",
              "w-full max-w-xs",
              "bg-black",
              "flex flex-col",
              "border-l border-white/10"
            )}
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dot-white/[0.05]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/5 via-transparent to-[#C6930A]/5" />

            {/* Content Container */}
            <div className="relative flex-1 flex flex-col">
              {/* Menu Items */}
              <nav className="flex-1 overflow-y-auto p-6">
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <div key={item.id}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative"
                      >
                        {item.features ? (
                          <button
                            onClick={() => setExpandedItem(
                              expandedItem === item.id ? null : item.id
                            )}
                            className={cn(
                              "flex items-center justify-between w-full",
                              "px-4 py-2 rounded-xl",
                              "text-lg font-medium",
                              "text-white/80 hover:text-white",
                              expandedItem === item.id && "text-[#FFD700]",
                              THEME_CONFIG.transitions.base
                            )}
                          >
                            <span>{item.label}</span>
                            <ChevronDown 
                              className={cn(
                                "w-5 h-5",
                                THEME_CONFIG.transitions.base,
                                expandedItem === item.id && "rotate-180"
                              )} 
                            />
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className={cn(
                              "flex items-center justify-between",
                              "px-4 py-2 rounded-xl",
                              "text-lg font-medium",
                              "text-white/80 hover:text-white",
                              THEME_CONFIG.transitions.base
                            )}
                          >
                            <span>{item.label}</span>
                            <ChevronRight className="w-5 h-5" />
                          </Link>
                        )}
                      </motion.div>

                      {/* Expandable Features */}
                      {item.features && (
                        <AnimatePresence>
                          {expandedItem === item.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-2 pb-4 pl-4">
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
                                      onClick={onClose}
                                      className={cn(
                                        "flex items-center gap-3",
                                        "px-4 py-2 rounded-xl",
                                        "group",
                                        THEME_CONFIG.transitions.base
                                      )}
                                    >
                                      <div className={cn(
                                        "flex-shrink-0 w-8 h-8",
                                        "flex items-center justify-center",
                                        "rounded-lg",
                                        "bg-gradient-to-br from-[#FFD700]/10 to-[#C6930A]/10",
                                        "border border-[#FFD700]/20",
                                        "group-hover:border-[#FFD700]/40",
                                        THEME_CONFIG.transitions.base
                                      )}>
                                        <span className="w-4 h-4 text-[#FFD700]">
                                          <feature.icon />
                                        </span>
                                      </div>
                                      <div>
                                        <h4 className={cn(
                                          "font-medium",
                                          "text-white/80 group-hover:text-[#FFD700]",
                                          THEME_CONFIG.transitions.base
                                        )}>
                                          {feature.title}
                                        </h4>
                                        <p className={cn(
                                          "text-sm",
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
                </div>

                {/* Additional Mobile Features */}
                {/* <div className="mt-8 pt-8 border-t border-white/10">
                  <h3 className="px-4 text-sm font-medium text-white/40 uppercase">
                    Additional Features
                  </h3>
                  <div className="mt-4 space-y-2">
                    {mobileNavFeatures.map((feature, idx) => (
                      <motion.div
                        key={feature.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { delay: 0.2 + idx * 0.1 }
                        }}
                      >
                        <Link
                          href={feature.href}
                          onClick={onClose}
                          className={cn(
                            "flex items-center gap-3",
                            "px-4 py-2 rounded-xl",
                            "group",
                            THEME_CONFIG.transitions.base
                          )}
                        >
                          <div className={cn(
                            "flex-shrink-0 w-8 h-8",
                            "flex items-center justify-center",
                            "rounded-lg",
                            "bg-gradient-to-br from-[#FFD700]/10 to-[#C6930A]/10",
                            "border border-[#FFD700]/20",
                            "group-hover:border-[#FFD700]/40",
                            THEME_CONFIG.transitions.base
                          )}>
                            <span className="w-4 h-4 text-[#FFD700]">
                              <feature.icon />
                            </span>
                          </div>
                          <div>
                            <h4 className={cn(
                              "font-medium",
                              "text-white/80 group-hover:text-[#FFD700]",
                              THEME_CONFIG.transitions.base
                            )}>
                              {feature.title}
                            </h4>
                            <p className={cn(
                              "text-sm",
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
                </div> */}
              </nav>

              {/* Action Buttons */}
              <div className={cn(
                "p-6 pt-0",
                "flex flex-col gap-3",
                "border-t border-white/10"
              )}>
                {navActions.map((action, idx) => (
                  <motion.div
                    key={action.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: 0.3 + idx * 0.1 } 
                    }}
                    className="w-full"
                  >
                    <Link
                      href={action.href}
                      onClick={onClose}
                      className={cn(
                        "flex items-center justify-center gap-2",
                        "w-full px-4 py-2 rounded-xl",
                        action.variant === "primary" ? [
                          "bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#C6930A]",
                          "text-black font-semibold",
                        ] : [
                          "border-2 border-[#FFD700]/20",
                          "text-white/80",
                          "hover:text-white hover:border-[#FFD700]/40"
                        ],
                        THEME_CONFIG.transitions.base
                      )}
                    >
                      <span>{action.label}</span>
                      {action.icon && (
                        <span
                          className={cn(
                            "w-4 h-4",
                            action.variant === "primary" ? "text-black" : "text-current"
                          )}
                        >
                          <action.icon />
                        </span>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}