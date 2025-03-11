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
        <div className="text-lg md:text-xl text-[#FFD700] font-medium mb-1 ml-2 md:ml-3">HAWAII&apos;S PREMIER</div>
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white ml-2 md:ml-3">
          {subtitle}
        </div>
      </h2>
      
      {/* Floating Royal Crown with glowing effect */}
      <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 w-[80px] h-[80px] text-[#FFD700]">
        <div className="relative w-full h-full animate-pulse">
          <Crown className="w-full h-full" />
          <div className="absolute inset-0 blur-xl bg-[#FFD700]/30 rounded-full -z-10"></div>
        </div>
        
        {/* Crown rays */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          {[...Array(8)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute top-1/2 left-1/2 h-[60px] w-[2px] bg-gradient-to-t from-[#FFD700]/0 via-[#FFD700]/20 to-[#FFD700]/0"
              style={{ 
                rotate: `${i * 45}deg`,
                transformOrigin: 'bottom center',
                top: '-10px',
                left: 'calc(50% - 1px)',
              }}
              animate={{ 
                scaleY: [0.6, 1, 0.6],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
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