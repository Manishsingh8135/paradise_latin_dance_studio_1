import { MotionValue, useTransform } from "framer-motion";

/**
 * Creates a parallax effect based on scroll progress and depth
 */
export const useParallaxTransform = (
  scrollYProgress: MotionValue<number>, 
  depth: number, 
  direction: "up" | "down" | "left" | "right" = "up"
) => {
  // Scale the effect based on depth (0-100)
  const scaledDepth = depth * 0.5;
  
  // Generate different transform effects based on direction
  switch (direction) {
    case "up":
      return useTransform(scrollYProgress, [0, 1], [`${scaledDepth}%`, `-${scaledDepth}%`]);
    case "down":
      return useTransform(scrollYProgress, [0, 1], [`-${scaledDepth}%`, `${scaledDepth}%`]);
    case "left":
      return useTransform(scrollYProgress, [0, 1], [`${scaledDepth}%`, `-${scaledDepth}%`]);
    case "right":
      return useTransform(scrollYProgress, [0, 1], [`-${scaledDepth}%`, `${scaledDepth}%`]);
  }
};

/**
 * Creates an opacity effect based on scroll progress
 */
export const useOpacityTransform = (
  scrollYProgress: MotionValue<number>,
  fadePoint: "early" | "middle" | "late" = "middle"
) => {
  switch (fadePoint) {
    case "early":
      return useTransform(scrollYProgress, [0, 0.3, 0.4], [0, 1, 1]);
    case "middle":
      return useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 1]);
    case "late":
      return useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 1]);
    default:
      return useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 1]);
  }
};

/**
 * Returns animation variants for counting numbers
 */
export const countingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8,
      delay: custom * 0.1,
    }
  })
};

/**
 * Returns animation variants for revealing elements on scroll
 */
export const revealVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 50,
      damping: 20,
      delay: custom * 0.2,
    }
  })
};

/**
 * Returns animation variants for the layered parallax effect
 */
export const layerVariants = {
  hidden: (custom: number) => ({
    opacity: 0,
    y: 50 + custom * 10,
  }),
  visible: (custom: number) => ({
    opacity: custom,
    y: 0,
    transition: { 
      duration: 1.2,
      delay: custom * 0.1,
    }
  })
};

/**
 * Returns the appropriate Lucide icon based on string name
 */
export const getIconByName = (iconName: string) => {
  switch (iconName) {
    case "Trophy":
      return "trophy";
    case "Award":
      return "award";
    case "Medal":
      return "medal";
    case "Star":
      return "star";
    case "Users":
      return "users";
    case "Calendar":
      return "calendar";
    case "Clock":
      return "clock";
    case "Heart":
      return "heart";
    default:
      return "award";
  }
}; 