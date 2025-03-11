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
  
  // Create transforms for all directions and return the appropriate one
  const upTransform = useTransform(scrollYProgress, [0, 1], [`${scaledDepth}%`, `-${scaledDepth}%`]);
  const downTransform = useTransform(scrollYProgress, [0, 1], [`-${scaledDepth}%`, `${scaledDepth}%`]);
  const leftTransform = useTransform(scrollYProgress, [0, 1], [`${scaledDepth}%`, `-${scaledDepth}%`]);
  const rightTransform = useTransform(scrollYProgress, [0, 1], [`-${scaledDepth}%`, `${scaledDepth}%`]);
  
  // Return the appropriate transform based on direction
  if (direction === "up") return upTransform;
  if (direction === "down") return downTransform;
  if (direction === "left") return leftTransform;
  if (direction === "right") return rightTransform;
  
  // Default fallback
  return upTransform;
};

/**
 * Creates an opacity effect based on scroll progress
 */
export const useOpacityTransform = (
  scrollYProgress: MotionValue<number>,
  fadePoint: "early" | "middle" | "late" = "middle"
) => {
  // Create transforms for all fade points
  const earlyFade = useTransform(scrollYProgress, [0, 0.3, 0.4], [0, 1, 1]);
  const middleFade = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 1]);
  const lateFade = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 1]);
  
  // Return the appropriate transform based on fadePoint
  if (fadePoint === "early") return earlyFade;
  if (fadePoint === "middle") return middleFade;
  if (fadePoint === "late") return lateFade;
  
  // Default fallback
  return middleFade;
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