"use client";

import { useRef, useEffect } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { Crown } from "lucide-react";

interface MajesticTitleProps {
  title: string;
  subtitle: string;
  tagline: string;
  scrollYProgress: MotionValue<number>;
}

export function MajesticTitle({ 
  title, 
  subtitle, 
  tagline,
  scrollYProgress 
}: MajesticTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Split title into individual characters for animation
  const titleChars = title.split('');
  
  // Creatively enhance the title display
  useEffect(() => {
    if (!titleRef.current) return;
    
    // Store the ref value in a variable to use in cleanup
    const titleElement = titleRef.current;
    
    // Create a shimmer effect
    const shimmerInterval = setInterval(() => {
      if (titleElement) {
        const chars = titleElement.querySelectorAll('.char');
        chars.forEach((char, i) => {
          setTimeout(() => {
            char.classList.add('shimmer');
            setTimeout(() => {
              char.classList.remove('shimmer');
            }, 500);
          }, i * 50);
        });
      }
    }, 5000);
    
    return () => {
      clearInterval(shimmerInterval);
    };
  }, [title]); // Add title as a dependency since we're using titleChars derived from it

  return (
    <motion.div 
      ref={containerRef}
      className="relative mb-12 md:mb-16 text-center w-full"
      style={{ y: textParallax }}
    >
      {/* Main section header with vertical bar */}
      <h2 className="relative mb-8 max-w-md mx-auto md:max-w-lg lg:max-w-2xl">
        <div className="absolute -left-2 md:-left-3 top-0 w-1 md:w-1.5 h-full bg-[#FFD700]"></div>
        
        {/* Royal badge for "HAWAII'S PREMIER" text */}
        <div className="relative inline-block ml-2 md:ml-3 mb-3">
          {/* Multiple layers of glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B]/40 via-[#FFD700]/40 to-[#B8860B]/40 rounded-full blur-md -z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B]/20 via-[#FFD700]/20 to-[#B8860B]/20 rounded-full blur-xl -z-20 animate-pulse"></div>
          <div className="absolute inset-0 scale-110 bg-gradient-to-r from-[#B8860B]/10 via-[#FFD700]/10 to-[#B8860B]/10 rounded-full blur-2xl -z-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          
          {/* Badge with decorative elements */}
          <div className="relative px-6 py-2 bg-gradient-to-r from-[#B8860B]/90 via-[#FFD700]/90 to-[#B8860B]/90 rounded-full border-2 border-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.5)]">
            {/* Decorative dots on the badge */}
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-black"></div>
            <div className="absolute top-1/2 right-2 transform -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-black"></div>
            
            {/* Decorative lines */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-full opacity-30 pointer-events-none">
              <div className="absolute top-[10%] left-0 w-full h-[1px] bg-white"></div>
              <div className="absolute bottom-[10%] left-0 w-full h-[1px] bg-black"></div>
            </div>
            
            {/* Text with subtle animation */}
            <motion.span 
              className="text-lg md:text-xl font-bold text-black"
              animate={{ textShadow: ['0 0 0px rgba(0,0,0,0)', '0 0 2px rgba(0,0,0,0.3)', '0 0 0px rgba(0,0,0,0)'] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              HAWAII&apos;S PREMIER
            </motion.span>
          </div>
        </div>
        
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white ml-2 md:ml-3">
          {subtitle}
        </div>
      </h2>
      
      {/* Floating Royal Crown with glowing effect - moved higher */}
      <div className="absolute top-[-90px] left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] text-[#FFD700]">
        {/* Decorative circular background */}
        <div className="absolute inset-0 rounded-full bg-gradient-radial from-[#FFD700]/10 to-transparent -z-30 scale-150"></div>
        
        {/* Decorative royal pattern */}
        <div className="absolute inset-0 scale-[2] opacity-20 -z-20">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10L90 50L50 90L10 50L50 10Z" stroke="#FFD700" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="35" stroke="#FFD700" strokeWidth="0.5" strokeDasharray="3 5" />
            <path d="M30 30L70 70M30 70L70 30" stroke="#FFD700" strokeWidth="0.5" />
          </svg>
        </div>
        
        <div className="relative w-full h-full animate-pulse">
          <Crown className="w-full h-full" />
          <div className="absolute inset-0 blur-xl bg-[#FFD700]/30 rounded-full -z-10"></div>
          <div className="absolute inset-0 scale-125 blur-2xl bg-[#FFD700]/20 rounded-full -z-20"></div>
        </div>
        
        {/* Small decorative gems on the crown */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#FF0000] shadow-[0_0_5px_#FF0000] animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-[#0000FF] shadow-[0_0_5px_#0000FF] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-[#00FF00] shadow-[0_0_5px_#00FF00] animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Crown rays */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          {[...Array(12)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute top-1/2 left-1/2 h-[80px] w-[3px] bg-gradient-to-t from-[#FFD700]/0 via-[#FFD700]/40 to-[#FFD700]/10"
              style={{ 
                rotate: `${i * 30}deg`,
                transformOrigin: 'bottom center',
                top: '-15px',
                left: 'calc(50% - 1.5px)',
                filter: 'blur(1px)'
              }}
              animate={{ 
                scaleY: [0.7, 1.2, 0.7],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Main Title with advanced effects */}
      <div className="relative mt-20">
        {/* Main title shadow for depth */}
        <div className="absolute inset-0 text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#111] to-[#222] blur-xl opacity-30 select-none pointer-events-none transform scale-110">
          {title}
        </div>
        
        {/* Main title with layered effects */}
        <h1 
          ref={titleRef}
          className="relative text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold"
        >
          <span className="block absolute top-0 left-0 w-full h-full text-transparent bg-clip-text bg-gradient-to-br from-[#FFD700] via-[#FDB931] to-[#A67C00] blur-[2px] opacity-70">
            {title}
          </span>
          <span className="block relative text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] animate-text-shimmer bg-[length:200%_100%]">
            {title}
          </span>
        </h1>
        
        {/* Individual character animations */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 pointer-events-none">
          {titleChars.map((char, i) => (
            <motion.span
              key={i}
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#FFD700]/80"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.3 + (i * 0.05),
                ease: "backOut"
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>
        
        {/* Glowing underline with grand effect */}
        <div className="relative mt-4 mx-auto" style={{ maxWidth: 'calc(100% - 40px)' }}>
          <motion.div 
            className="h-[3px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '100%', opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
          <motion.div
            className="absolute top-0 left-0 right-0 h-[3px] bg-white blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{ duration: 2, delay: 2, repeat: Infinity, repeatDelay: 5 }}
          />
        </div>
      </div>
      
      {/* Tagline with motion effects */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="text-base md:text-lg text-white/80 mt-6 italic max-w-xl mx-auto"
      >
        &quot;{tagline}&quot;
      </motion.p>
    </motion.div>
  );
}

// Add this to your global CSS
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes text-shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: 0 0; }
    }
    .animate-text-shimmer {
      animation: text-shimmer 8s ease infinite;
    }
  `;
  document.head.appendChild(style);
} 