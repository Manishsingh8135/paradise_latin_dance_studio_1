"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface ImperialDividerProps {
  scrollYProgress?: MotionValue<number>;
  variant?: "simple" | "ornate" | "crown";
  color?: string;
}

export function ImperialDivider({ 
  scrollYProgress, 
  variant = "ornate",
  color = "#FFD700" 
}: ImperialDividerProps) {
  // Create a dummy MotionValue if scrollYProgress is not provided
  const safeScrollYProgress = scrollYProgress || new MotionValue();
  
  // If we created a new MotionValue, set its initial value to 0
  if (!scrollYProgress) {
    safeScrollYProgress.set(0);
  }
  
  // Now we can safely use the hook unconditionally
  const offsetY = useTransform(safeScrollYProgress, [0, 1], [0, -30]);
  
  // Get the correct divider based on variant
  const renderDivider = () => {
    switch (variant) {
      case "simple":
        return <SimpleDivider color={color} />;
      case "crown":
        return <CrownDivider color={color} />;
      case "ornate":
      default:
        return <OrnateDivider color={color} />;
    }
  };

  return (
    <motion.div 
      className="w-full py-4 flex justify-center items-center"
      style={{ y: offsetY }}
    >
      {renderDivider()}
    </motion.div>
  );
}

// Simple elegant divider with a central element
function SimpleDivider({ color }: { color: string }) {
  return (
    <div className="relative w-full max-w-4xl flex items-center justify-center">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent"></div>
      <div className="mx-4 relative">
        <div className="w-3 h-3 rotate-45 bg-gradient-to-tr" style={{ backgroundColor: color }}></div>
        <div className="absolute inset-0 blur-md -z-10 opacity-60" style={{ backgroundColor: color }}></div>
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent"></div>
    </div>
  );
}

// Ornate divider with decorative elements
function OrnateDivider({ color }: { color: string }) {
  // Convert hex to rgba for glow effects
  const getRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div className="relative w-full max-w-5xl flex items-center justify-center">
      {/* Left decorative line */}
      <div className="flex-1 relative">
        <div className="h-px w-full bg-gradient-to-r from-transparent to-[#FFD700]/40"></div>
        <motion.div 
          className="absolute top-0 right-0 h-px w-[50%] z-10"
          style={{ backgroundColor: color }}
          animate={{ scaleX: [1, 0.3, 1], opacity: [0.2, 0.6, 0.2], x: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      {/* Central ornate element */}
      <div className="mx-6 relative">
        <div className="relative w-16 h-16">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Central diamond */}
            <motion.path
              d="M50 10L90 50L50 90L10 50L50 10Z"
              stroke={color}
              strokeWidth="1.5"
              fill={getRgba(color, 0.05)}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Outer decorative circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              stroke={color}
              strokeWidth="0.5"
              strokeDasharray="3 5"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner decorative elements */}
            <motion.path
              d="M50 25L75 50L50 75L25 50L50 25Z"
              stroke={color}
              strokeWidth="1"
              animate={{ rotate: -180 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Central dot with glow */}
            <circle cx="50" cy="50" r="4" fill={color} />
            <circle cx="50" cy="50" r="8" fill={getRgba(color, 0.3)} />
            
            {/* Four directional flairs */}
            {[0, 90, 180, 270].map((angle, i) => (
              <motion.path
                key={i}
                d={`M50 50L${50 + 30 * Math.cos(angle * Math.PI / 180)} ${50 + 30 * Math.sin(angle * Math.PI / 180)}`}
                stroke={color}
                strokeWidth="0.5"
                strokeOpacity="0.6"
                animate={{ 
                  strokeWidth: [0.5, 1.5, 0.5],
                  strokeOpacity: [0.3, 0.8, 0.3]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: i * 0.75,
                  ease: "easeInOut"
                }}
              />
            ))}
          </svg>
          
          {/* Glow effect */}
          <div className="absolute inset-0 blur-xl -z-10 opacity-30 rounded-full" style={{ backgroundColor: color }}></div>
        </div>
      </div>
      
      {/* Right decorative line */}
      <div className="flex-1 relative">
        <div className="h-px w-full bg-gradient-to-r from-[#FFD700]/40 to-transparent"></div>
        <motion.div 
          className="absolute top-0 left-0 h-px w-[50%] z-10"
          style={{ backgroundColor: color }}
          animate={{ scaleX: [1, 0.3, 1], opacity: [0.2, 0.6, 0.2], x: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

// Royal crown-inspired divider
function CrownDivider({ color }: { color: string }) {
  return (
    <div className="relative w-full max-w-4xl flex items-center justify-center">
      {/* Left line with dot pattern */}
      <div className="flex-1 h-px relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#FFD700]/40"></div>
        <div className="absolute right-0 flex items-center space-x-4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full"
              style={{ backgroundColor: color }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Central crown element */}
      <div className="mx-6 relative">
        <div className="relative w-16 h-12">
          <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Crown base shape */}
            <motion.path
              d="M10 45L20 15L40 30L60 15L70 45H10Z"
              stroke={color}
              strokeWidth="1.5"
              fill="transparent"
              animate={{ 
                strokeDashoffset: [0, -30],
                strokeOpacity: [1, 0.5, 1]
              }}
              style={{
                strokeDasharray: 30,
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Crown points */}
            {[20, 40, 60].map((x, i) => (
              <motion.circle
                key={i}
                cx={x}
                cy={i === 1 ? 25 : 15}
                r="2"
                fill={color}
                animate={{ 
                  y: [0, -3, 0],
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* Crown gems */}
            {[25, 40, 55].map((x, i) => (
              <motion.path
                key={i}
                d={`M${x-5} 40L${x} 32L${x+5} 40L${x} 44L${x-5} 40Z`}
                fill={color}
                fillOpacity="0.3"
                stroke={color}
                strokeWidth="0.5"
                animate={{ 
                  fillOpacity: [0.3, 0.7, 0.3],
                  y: [0, -1, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  delay: i * 1.3,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* Base line */}
            <motion.line
              x1="10"
              y1="45"
              x2="70"
              y2="45"
              stroke={color}
              strokeWidth="2"
              animate={{ strokeDashoffset: [60, 0] }}
              style={{ strokeDasharray: 60 }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </svg>
          
          {/* Glow effect */}
          <div className="absolute inset-0 blur-lg -z-10 opacity-30" style={{ backgroundColor: color }}></div>
        </div>
      </div>
      
      {/* Right line with dot pattern */}
      <div className="flex-1 h-px relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/40 to-transparent"></div>
        <div className="absolute left-0 flex items-center space-x-4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full"
              style={{ backgroundColor: color }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 