"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: {
    src: string;
    alt: string;
  };
}

export function ImageModal({ isOpen, onClose, image }: ImageModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && image.src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        >
          {/* Backdrop with premium blur effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />

          {/* Premium border glow effect */}
          <div className="absolute inset-0 bg-gradient-conic from-transparent via-[#FFD700]/10 to-transparent animate-spin-slow opacity-50" />
          
          {/* Content Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ 
              type: "spring",
              damping: 25,
              stiffness: 300,
              duration: 0.3 
            }}
            className={cn(
              "relative w-full max-w-6xl rounded-[2rem] overflow-hidden",
              "bg-gradient-to-b from-black/80 to-black/60",
              "border border-white/10",
              "shadow-2xl shadow-black/50"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Premium corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#FFD700]/20 opacity-50" />
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FFD700]/20 opacity-50" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#FFD700]/20 opacity-50" />
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#FFD700]/20 opacity-50" />

            {/* Image Container with aspect ratio */}
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 90vw, 1024px"
                priority
                quality={100}
              />
            </div>

            {/* Close Button with premium styling */}
            <motion.button
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className={cn(
                "absolute top-4 right-4 z-10",
                "p-2 rounded-full",
                "bg-black/50 backdrop-blur-sm",
                "border border-white/10",
                "text-white hover:text-[#FFD700]",
                "transform hover:scale-110 hover:rotate-90",
                "transition-all duration-300",
                "shadow-lg shadow-black/50",
                "group"
              )}
              aria-label="Close modal"
            >
              <X className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-300" />
            </motion.button>

            {/* Image Title (optional) */}
            {image.alt && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
              >
                <p className="text-white/90 text-center font-medium">{image.alt}</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
