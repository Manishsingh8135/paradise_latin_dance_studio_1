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
      title: "Best Dance Studio in Hawaii",
      description: "Voted #1 Latin dance studio in Hawaii for six consecutive years by the Hawaii Dance Association.",
      year: "2018-2023",
      icon: "trophy"
    },
    {
      id: 2,
      title: "International Dance Competition Gold",
      description: "Our instructors and students won gold medals at the International Latin Dance Championship.",
      year: "2022",
      icon: "medal"
    },
    {
      id: 3,
      title: "Excellence in Dance Education",
      description: "Recognized for outstanding contribution to dance education and cultural diversity.",
      year: "2021",
      icon: "award"
    },
    {
      id: 4,
      title: "Community Impact Award",
      description: "Honored for making dance accessible to underserved communities through scholarship programs.",
      year: "2020",
      icon: "star"
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
      <h2 className="relative mb-10 max-w-md mx-auto md:max-w-lg lg:max-w-2xl">
        <div className="absolute -left-2 md:-left-3 top-0 w-1 md:w-1.5 h-full bg-[#FFD700]"></div>
        <div className="text-lg md:text-xl text-[#FFD700] font-medium mb-1 ml-2 md:ml-3">ROYAL RECOGNITION</div>
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white ml-2 md:ml-3">
          Our Accolades & Achievements
        </div>
      </h2>
      
      {/* Achievement showcase */}
      <div className="relative max-w-5xl mx-auto h-[450px] md:h-[500px] perspective-1000">
        {/* Background decorative elements */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#FFD700]/10 to-transparent opacity-40"></div>
          <div className="absolute w-[400px] h-[400px] border border-[#FFD700]/30 rounded-full"></div>
          <div className="absolute w-[300px] h-[300px] border border-[#FFD700]/20 rounded-full"></div>
          
          {/* Royal corner ornaments */}
          {[0, 1, 2, 3].map((i) => (
            <div 
              key={i}
              className="absolute w-20 h-20 opacity-40"
              style={{
                top: i < 2 ? -20 : 'auto',
                bottom: i >= 2 ? -20 : 'auto',
                left: i % 2 === 0 ? -20 : 'auto',
                right: i % 2 === 1 ? -20 : 'auto',
              }}
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M90 10C70 10 10 70 10 90M10 10C10 30 70 90 90 90" stroke="#FFD700" strokeWidth="2"/>
                <path d="M50 0V100M0 50H100" stroke="#FFD700" strokeWidth="1" strokeDasharray="5 5"/>
                <circle cx="50" cy="50" r="8" fill="#FFD700" fillOpacity="0.3"/>
              </svg>
            </div>
          ))}
        </div>
        
        {/* Main carousel */}
        <div className="relative h-full w-full overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-[95%] max-w-4xl bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-xl px-8 py-10 md:p-10 shadow-2xl border border-[#FFD700]/40 transform preserve-3d group">
                {/* Royal crown at the top */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-30">
                  <div className="relative flex items-center justify-center w-16 h-16 bg-black/80 rounded-full border-2 border-[#FFD700]/60">
                    <div className="text-[#FFD700] w-8 h-8">
                      {getIcon(achievements[currentIndex].icon)}
                    </div>
                    <div className="absolute inset-0 blur-xl bg-[#FFD700]/30 rounded-full -z-10"></div>
                  </div>
                </div>
                
                {/* Animated spotlight effect */}
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <motion.div 
                    className="absolute top-0 left-0 w-[300%] h-[100%] bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent -z-10"
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
                    className="absolute w-8 h-8 bg-[#FFD700]/30 rounded-full blur-md"
                    style={{
                      top: i < 2 ? -3 : 'auto',
                      bottom: i >= 2 ? -3 : 'auto',
                      left: i % 2 === 0 ? -3 : 'auto',
                      right: i % 2 === 1 ? -3 : 'auto',
                    }}
                  />
                ))}
                
                {/* Gold shimmering edge glow on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 rounded-xl border-2 border-[#FFD700]/60 blur-sm"></div>
                </div>
                
                {/* Achievement content with 3D effect */}
                <div className="flex flex-col items-center gap-6 transform preserve-3d">
                  {/* Year with royal styling */}
                  <div className="flex justify-center items-center mb-2">
                    <div className="px-6 py-2 bg-black/50 border-2 border-[#FFD700]/40 rounded-full transform -rotate-1">
                      <span className="text-[#FFD700] font-semibold text-lg">{achievements[currentIndex].year}</span>
                    </div>
                  </div>
                  
                  {/* Title with enhanced glowing effect */}
                  <div className="text-center mb-8">
                    <h4 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-1 text-white relative">
                      <span className="absolute inset-0 blur-md bg-[#FFD700]/20 -z-10 transform scale-110"></span>
                      <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-[#FFD700]/80">
                        {achievements[currentIndex].title}
                      </span>
                    </h4>
                    
                    {/* Royal decorative underline */}
                    <div className="relative h-[3px] w-3/4 mx-auto mt-4 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent">
                      <motion.div 
                        className="absolute inset-0 bg-white/70 blur-sm"
                        animate={{ opacity: [0, 0.8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      />
                    </div>
                  </div>
                  
                  {/* Description with elegant design and larger text */}
                  <motion.div 
                    className="relative bg-black/30 rounded-lg p-6 border border-[#FFD700]/20 max-w-3xl transform rotate-[0.5deg]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    {/* Decorative corner flourishes */}
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
                            strokeWidth="1.5" 
                            strokeOpacity="0.6"
                          />
                        </svg>
                      </div>
                    ))}
                    
                    <p className="text-lg md:text-xl text-white/80 text-center">
                      <span className="drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]">
                        {achievements[currentIndex].description}
                      </span>
                    </p>
                  </motion.div>
                </div>
                
                {/* Royal embellishment */}
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-32 h-10">
                  <svg viewBox="0 0 128 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64 0L74 20L64 40L54 20L64 0Z" fill="#FFD700" fillOpacity="0.2" />
                    <path d="M0 20H40L64 0L88 40L112 20H128" stroke="#FFD700" strokeWidth="1" strokeOpacity="0.5"/>
                    <circle cx="64" cy="20" r="4" fill="#FFD700" fillOpacity="0.3"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Enhanced navigation arrows with royal styling */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/80 hover:text-white bg-black/30 hover:bg-black/60 border-2 border-[#FFD700]/40 hover:border-[#FFD700]/70 rounded-full transition-all duration-300 z-10 group"
            aria-label="Previous achievement"
          >
            <ChevronLeft className="w-6 h-6" />
            <div className="absolute inset-0 rounded-full bg-[#FFD700]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10"></div>
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/80 hover:text-white bg-black/30 hover:bg-black/60 border-2 border-[#FFD700]/40 hover:border-[#FFD700]/70 rounded-full transition-all duration-300 z-10 group"
            aria-label="Next achievement"
          >
            <ChevronRight className="w-6 h-6" />
            <div className="absolute inset-0 rounded-full bg-[#FFD700]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10"></div>
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