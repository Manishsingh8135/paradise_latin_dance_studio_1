"use client";

import { motion, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { VisualLayer } from "../types/best-dance-studio.types";
import { useParallaxTransform } from "./best-dance-studio.utils";

interface ParallaxLayerProps {
  layer: VisualLayer;
  scrollYProgress: MotionValue<number>;
}

export function ParallaxLayer({ layer, scrollYProgress }: ParallaxLayerProps) {
  const ref = useRef(null);
  
  // Calculate parallax effect based on depth
  const y = useParallaxTransform(scrollYProgress, layer.depth, "up");
  
  // Handle different animation types
  const getAnimationStyles = () => {
    switch (layer.animation) {
      case "float":
        return {
          animate: {
            y: ["-5%", "5%", "-5%"],
            transition: {
              duration: 6 + Math.random() * 4, // Slightly randomize to avoid uniform movement
              repeat: Infinity,
              repeatType: "reverse" as const,
              ease: "easeInOut",
            },
          },
        };
      case "pulse":
        return {
          animate: {
            scale: [1, 1.05, 1],
            opacity: [layer.opacity, layer.opacity + 0.1, layer.opacity],
            transition: {
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse" as const,
              ease: "easeInOut",
            },
          },
        };
      case "rotate":
        return {
          animate: {
            rotate: [0, 360],
            transition: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            },
          },
        };
      default:
        return {};
    }
  };

  const animationStyles = getAnimationStyles();

  return (
    <motion.div
      ref={ref}
      className="absolute inset-0 pointer-events-none"
      style={{ 
        y,
        opacity: layer.opacity,
        filter: layer.blur ? `blur(${layer.blur}px)` : undefined,
        zIndex: 100 - layer.depth, // Layers with smaller depth values are "closer" to viewer
      }}
      {...animationStyles}
    >
      <Image
        src={layer.imageUrl}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority={layer.depth < 50} // Prioritize loading closer layers first
      />
    </motion.div>
  );
} 