"use client";

import { useState, useRef, useEffect } from "react";
import { motion, MotionValue, useTransform, AnimatePresence } from "framer-motion";
import { Trophy, Award, Medal, Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Achievement {
  id: number;
  title: string;
  description: string;
  year: string;
  icon: 'trophy' | 'award' | 'medal' | 'star';
}

interface AchievementShowcaseProps {
  scrollYProgress: MotionValue<number>;
}

export function AchievementShowcase({ scrollYProgress }: AchievementShowcaseProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const containerParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  // Sample achievements data
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Best in Hawaii",
      description: "Recognized as the leading destination for authentic Latin dance instruction in Hawaii, bringing Dominican expertise and aloha spirit together.",
      year: "2024",
      icon: "trophy"
    },
    {
      id: 2,
      title: "Community Dance Excellence Award",
      description: "Honored for creating Hawaii's most vibrant and inclusive Latin dance community with over 500+ active dancers.",
      year: "2023",
      icon: "star"
    },
    {
      id: 3,
      title: "Excellence in Dance Education",
      description: "Recognized for outstanding contribution to dance education and cultural diversity through authentic Latin instruction.",
      year: "2022",
      icon: "award"
    },
    {
      id: 4,
      title: "R1P Fitness Integration Achievement",
      description: "Successfully pioneered the integration of Latin dance and fitness, creating a unique wellness experience in Hawaii.",
      year: "2023",
      icon: "medal"
    }
  ];

  // Auto-advance carousel with pause on hover
  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % achievements.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [achievements.length, isHovering]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'trophy':
        return <Trophy className="w-full h-full" />;
      case 'award':
        return <Award className="w-full h-full" />;
      case 'medal':
        return <Medal className="w-full h-full" />;
      case 'star':
        return <Star className="w-full h-full" />;
      default:
        return <Trophy className="w-full h-full" />;
    }
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  };
  
  // Variants for card animations
  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
        rotateY: { duration: 0.8 }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
        rotateY: { duration: 0.8 }
      }
    })
  };

  return (
    <motion.div 
      ref={ref}
      className="relative w-full py-10 md:py-12"
      style={{ y: containerParallax }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Updated heading with mobile centering */}
      <h2 className="relative mb-10 max-w-md mx-auto md:max-w-lg lg:max-w-2xl px-4 sm:px-0">
        {/* On mobile, we'll hide the vertical bar and center the text */}
        <div className="hidden sm:block absolute -left-2 md:-left-3 top-0 w-1 md:w-1.5 h-full bg-[#FFD700]"></div>
        <div className="text-lg md:text-xl text-[#FFD700] font-medium mb-1 text-center sm:text-left sm:ml-2 md:ml-3">ROYAL RECOGNITION</div>
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center sm:text-left sm:ml-2 md:ml-3">
          Our Accolades & Achievements
        </div>
      </h2>
      
      {/* Achievement showcase - Added more top padding for mobile and adjusted height */}
      <div className="relative max-w-6xl mx-auto h-[580px] sm:h-[520px] md:h-[550px] lg:h-[600px] perspective-1000 px-4 md:px-8 pt-12 sm:pt-0">
        {/* Background decorative elements */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#FFD700]/20 to-transparent opacity-60"></div>
          <div className="absolute w-[400px] h-[400px] border-2 border-[#FFD700]/40 rounded-full"></div>
          <div className="absolute w-[300px] h-[300px] border-2 border-[#FFD700]/30 rounded-full"></div>
          
          {/* Royal corner ornaments */}
          {[0, 1, 2, 3].map((i) => (
            <div 
              key={i}
              className="absolute w-20 h-20 opacity-60"
              style={{
                top: i < 2 ? -20 : 'auto',
                bottom: i >= 2 ? -20 : 'auto',
                left: i % 2 === 0 ? -20 : 'auto',
                right: i % 2 === 1 ? -20 : 'auto',
              }}
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M90 10C70 10 10 70 10 90M10 10C10 30 70 90 90 90" stroke="#FFD700" strokeWidth="2.5"/>
                <path d="M50 0V100M0 50H100" stroke="#FFD700" strokeWidth="1.5" strokeDasharray="5 5"/>
                <circle cx="50" cy="50" r="8" fill="#FFD700" fillOpacity="0.4"/>
              </svg>
            </div>
          ))}
        </div>
        
        {/* Main carousel - Increased top padding for mobile */}
        <div className="relative h-full w-full overflow-visible py-10 md:py-12">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex items-center justify-center mt-8 sm:mt-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-[95%] max-w-5xl bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-xl px-6 py-10 sm:px-8 md:px-12 md:py-14 shadow-2xl border-2 border-[#FFD700]/50 transform preserve-3d group mt-8 sm:mt-0">
                {/* Royal crown at the top - Adjusted positioning for mobile */}
                <div className="absolute -top-14 sm:-top-8 left-1/2 transform -translate-x-1/2 z-30">
                  <div className="relative flex items-center justify-center w-16 h-16 bg-black/80 rounded-full border-2 border-[#FFD700]/70 shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                    <div className="text-[#FFD700] w-8 h-8">
                      {getIcon(achievements[currentIndex].icon)}
                    </div>
                    <div className="absolute inset-0 blur-xl bg-[#FFD700]/40 rounded-full -z-10"></div>
                  </div>
                </div>
                
                {/* Animated spotlight effect */}
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <motion.div 
                    className="absolute top-0 left-0 w-[300%] h-[100%] bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent -z-10"
                    animate={{ 
                      x: ['-100%', '100%'],
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>
                
                {/* Glowing corners */}
                {[0, 1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="absolute w-10 h-10 bg-[#FFD700]/40 rounded-full blur-md"
                    style={{
                      top: i < 2 ? -5 : 'auto',
                      bottom: i >= 2 ? -5 : 'auto',
                      left: i % 2 === 0 ? -5 : 'auto',
                      right: i % 2 === 1 ? -5 : 'auto',
                    }}
                  />
                ))}
                
                {/* Gold shimmering edge glow on hover */}
                <div className="absolute inset-0 rounded-xl opacity-30 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 rounded-xl border-2 border-[#FFD700]/70 blur-sm"></div>
                </div>
                
                {/* Achievement content with 3D effect */}
                <div className="flex flex-col items-center gap-6 transform preserve-3d">
                  {/* Year with royal styling */}
                  <div className="flex justify-center items-center mb-2">
                    <div className="px-6 py-2 bg-black/60 border-2 border-[#FFD700]/60 rounded-full transform -rotate-1 shadow-[0_0_10px_rgba(255,215,0,0.2)]">
                      <span className="text-[#FFD700] font-semibold text-lg">{achievements[currentIndex].year}</span>
                    </div>
                  </div>
                  
                  {/* Title with royal decorations */}
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 relative"
                  >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full blur-xl bg-[#FFD700]/20 -z-10 scale-75"></div>
                    <span className="bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] bg-clip-text text-transparent drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)]">
                      {achievements[currentIndex].title}
                    </span>
                    
                    {/* Decorative underline */}
                    <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#FFD700]/60 to-transparent mx-auto mt-3"></div>
                  </motion.h3>
                  
                  {/* Description with enhanced styling */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="max-w-3xl px-4 py-6 rounded-lg bg-black/40 border border-[#FFD700]/30 relative"
                  >
                    {/* Decorative corners */}
                    {[0, 1, 2, 3].map((i) => (
                      <div 
                        key={`corner-${i}`}
                        className="absolute w-6 h-6"
                        style={{
                          top: i < 2 ? -2 : 'auto',
                          bottom: i >= 2 ? -2 : 'auto',
                          left: i % 2 === 0 ? -2 : 'auto',
                          right: i % 2 === 1 ? -2 : 'auto',
                        }}
                      >
                        <svg viewBox="0 0 24 24" fill="none">
                          <path 
                            d={
                              i === 0 ? "M1 23L1 1L23 1" : 
                              i === 1 ? "M23 23L23 1L1 1" : 
                              i === 2 ? "M1 1L1 23L23 23" : 
                              "M23 1L23 23L1 23"
                            }
                            stroke="#FFD700" 
                            strokeWidth="2" 
                            strokeOpacity="0.7"
                          />
                        </svg>
                      </div>
                    ))}
                    
                    <p className="text-lg md:text-xl text-white/90 text-center">
                      <span className="drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]">
                        {achievements[currentIndex].description}
                      </span>
                    </p>
                  </motion.div>
                </div>
                
                {/* Royal embellishment */}
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-40 h-10">
                  <svg viewBox="0 0 128 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64 0L74 20L64 40L54 20L64 0Z" fill="#FFD700" fillOpacity="0.3" />
                    <path d="M0 20H40L64 0L88 40L112 20H128" stroke="#FFD700" strokeWidth="1.5" strokeOpacity="0.6"/>
                    <circle cx="64" cy="20" r="4" fill="#FFD700" fillOpacity="0.5"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Enhanced navigation arrows with royal styling */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white bg-gradient-to-br from-[#B8860B]/90 to-[#FFD700]/90 border-2 border-[#FFD700]/80 hover:border-[#FFD700] rounded-full transition-all duration-300 z-10 shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]"
            aria-label="Previous achievement"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white bg-gradient-to-br from-[#B8860B]/90 to-[#FFD700]/90 border-2 border-[#FFD700]/80 hover:border-[#FFD700] rounded-full transition-all duration-300 z-10 shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]"
            aria-label="Next achievement"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Enhanced indicator dots */}
        <div className="flex justify-center mt-8 gap-3">
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className="relative group"
              aria-label={`Go to achievement ${index + 1}`}
            >
              <div className={`w-4 h-4 rounded-full transition-all duration-300 border-2 
                ${index === currentIndex 
                  ? 'bg-[#FFD700] border-[#FFD700]' 
                  : 'bg-transparent border-white/40 group-hover:border-white/70'
                }`}
              />
              {index === currentIndex && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#FFD700]/30"
                  animate={{ scale: [1, 2.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Add this to your global CSS
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    .animate-shimmer {
      animation: shimmer 3s infinite;
    }
    .perspective-1000 {
      perspective: 1000px;
    }
    .preserve-3d {
      transform-style: preserve-3d;
    }
  `;
  document.head.appendChild(style);
} 