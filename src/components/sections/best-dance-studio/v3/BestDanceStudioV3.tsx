"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Import all the subcomponents
import { RoyalBackground } from "./RoyalBackground";
import { MajesticTitle } from "./MajesticTitle";
import { AchievementShowcase } from "./AchievementShowcase";
import { RoyalStatistics } from "./RoyalStatistics";
import { ImperialDivider } from "./ImperialDivider";

export function BestDanceStudioV3() {
  // Reference for the scrollable container
  const ref = useRef<HTMLDivElement>(null);
  
  // Get scroll progress for parallax effects
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  return (
    <motion.div
      ref={ref}
      id="best-dance-studio"
      className="relative w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background with enhanced royal elements */}
      <RoyalBackground scrollYProgress={scrollYProgress} />
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16 md:py-20">
          {/* Main title section - reduced bottom margin */}
          <MajesticTitle
            title="Best in Hawaii"
            subtitle="Paradise Dance Studio"
            tagline="Where champions are born and legends are made"
            scrollYProgress={scrollYProgress}
          />
          
          {/* Royal divider for visual separation - reduced padding */}
          <div className="py-4">
            <ImperialDivider scrollYProgress={scrollYProgress} variant="crown" />
          </div>
          
          {/* Achievement showcase section - enhanced with larger cards */}
          <AchievementShowcase scrollYProgress={scrollYProgress} />
          
          {/* Imperial divider for visual separation - reduced padding */}
          <div className="py-4">
            <ImperialDivider scrollYProgress={scrollYProgress} variant="ornate" />
          </div>
          
          {/* Royal statistics section */}
          <RoyalStatistics scrollYProgress={scrollYProgress} />
          
          {/* Call-to-action section with royal styling */}
          <div className="mt-16">
            <h2 className="relative mb-8 max-w-md mx-auto md:max-w-lg lg:max-w-2xl">
              <div className="absolute -left-2 md:-left-3 top-0 w-1 md:w-1.5 h-full bg-[#FFD700]"></div>
              <div className="text-lg md:text-xl text-[#FFD700] font-medium mb-1 ml-2 md:ml-3">JOIN THE ROYALTY</div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white ml-2 md:ml-3">
                Begin Your Journey
              </div>
            </h2>
            
            <div className="text-center mt-10">
              <motion.div
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <button className="relative group px-8 py-3 overflow-hidden rounded-lg">
                  {/* Background layers for depth and glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-black rounded-lg"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#FFD700]/20 to-black/80 rounded-lg"></div>
                  
                  {/* Animated borders */}
                  <div className="absolute inset-0 rounded-lg border border-[#FFD700]/40 z-10"></div>
                  <motion.div 
                    className="absolute inset-0 rounded-lg z-0 overflow-hidden"
                    initial={false}
                  >
                    <motion.div
                      className="absolute top-0 left-0 w-[200%] h-[200%]"
                      animate={{
                        x: ["0%", "100%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                      }}
                      style={{
                        background: "linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.3), transparent)",
                      }}
                    />
                  </motion.div>
                  
                  {/* Button content */}
                  <div className="relative z-20 flex items-center justify-center space-x-2">
                    <span className="text-white font-medium text-base md:text-lg tracking-wide">Start Dancing Today</span>
                    
                    {/* Arrow with animation */}
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronDown className="text-[#FFD700] w-5 h-5" />
                    </motion.div>
                  </div>
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 blur-md -z-10 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-lg bg-[#FFD700]/10"></div>
                </button>
              </motion.div>
              
              {/* Supportive text */}
              <motion.p
                className="mt-4 text-white/70 text-sm md:text-base max-w-lg mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Begin your journey to dance excellence with Hawaii's premier Latin dance studio. 
                First class is complimentary for new students.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 