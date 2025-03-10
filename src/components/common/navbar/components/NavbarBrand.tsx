"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { THEME_CONFIG } from "../data/navbar.theme";
import { NAVBAR_DIMENSIONS } from "../data/navbar.constants";
import { navBrand } from "../data/navbar.data";

export function NavbarBrand() {
  return (
    <Link href="/" className="flex items-center gap-3">
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "relative",
          NAVBAR_DIMENSIONS.width.logo,
          "overflow-hidden",
          THEME_CONFIG.borderRadius.full,
          THEME_CONFIG.transitions.base,
          "bg-gradient-to-tr from-[#FFD700] via-[#FDB931] to-[#C6930A]",
          "p-0.5" // Border width using padding
        )}
      >
        <div className={cn(
          "relative w-full h-full",
          THEME_CONFIG.borderRadius.full,
          "overflow-hidden",
          "bg-black" // Inner background
        )}>
          {/* Logo Image */}
          <Image
            src={navBrand.logo.src}
            alt={navBrand.logo.alt}
            width={navBrand.logo.width}
            height={navBrand.logo.height}
            className="object-cover"
          />

          {/* Shine Effect */}
          <div 
            className={cn(
              "absolute inset-0",
              "bg-gradient-to-br from-white/20 to-transparent",
              "pointer-events-none"
            )}
          />
        </div>
      </motion.div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "text-xl font-bold",
            "bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700]",
            "bg-clip-text text-transparent",
            "drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]"
          )}
        >
          {navBrand.name}
        </motion.span>
        
        {navBrand.tagline && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={cn(
              "text-sm",
              "text-white/60",
              THEME_CONFIG.transitions.base
            )}
          >
            {navBrand.tagline}
          </motion.span>
        )}
      </div>
    </Link>
  );
}