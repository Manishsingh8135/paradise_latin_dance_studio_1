"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { NavbarProps } from "./types/navbar.types";
import { navbarVariants, navbarMotionVariants } from "./data/navbar.constants";
import { THEME_CONFIG } from "./data/navbar.theme";

// Components
import { NavbarBrand } from "./components/NavbarBrand";
import { NavbarMenu } from "./components/NavbarMenu";
import { NavbarAction } from "./components/NavbarAction";
import { NavbarMobile } from "./components/NavbarMobile";
import { NavbarEffect } from "./components/NavbarEffect";

export function Navbar({
  variant = "transparent",
  position = "fixed",
  className
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  const { scrollY } = useScroll();

  // Handle scroll events
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        variants={navbarMotionVariants}
        initial="transparent"
        animate={variant}
        data-scrolled={isScrolled}
        className={cn(
          "w-full z-50",
          position,
          variant === "transparent" && "bg-transparent",
          variant === "solid" && "bg-background border-b",
          navbarVariants({ variant, scrolled: isScrolled }),
          className
        )}
      >
        {/* Navbar Background Effects */}
        <NavbarEffect isScrolled={isScrolled} />

        {/* Main Navbar Content */}
        <div className="relative w-full h-full">
          <div className={cn(
            "mx-auto h-full",
            "flex items-center justify-between",
            "max-w-7xl",
            THEME_CONFIG.spacing.container
          )}>
            {/* Brand Section */}
            <NavbarBrand />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <NavbarMenu />
              <NavbarAction />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={cn(
                "lg:hidden",
                "p-2 rounded-full",
                THEME_CONFIG.transitions.base,
                "text-white/80 hover:text-white",
                "hover:bg-white/5"
              )}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ 
            scaleX: isScrolled ? 1 : 0,
            transition: { duration: 0.4, ease: "easeInOut" }
          }}
          className={cn(
            "absolute bottom-0 left-0 right-0 h-0.5 origin-left",
            "bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#C6930A]"
          )}
        />
      </motion.header>

      {/* Mobile Navigation */}
      <NavbarMobile isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}