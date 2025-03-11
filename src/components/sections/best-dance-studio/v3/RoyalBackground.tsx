"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface RoyalBackgroundProps {
  scrollYProgress: MotionValue<number>;
}

export function RoyalBackground({ scrollYProgress }: RoyalBackgroundProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; opacity: number; duration: number; delay: number }>>([]);
  const bgParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const leftLightParallax = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const rightLightParallax = useTransform(scrollYProgress, [0, 1], [0, -120]);
  
  // Generate royal floating particles
  useEffect(() => {
    const particlesCount = 30;
    const newParticles = Array.from({ length: particlesCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage position
      y: Math.random() * 100,
      size: 2 + Math.random() * 6, // size variation
      opacity: 0.1 + Math.random() * 0.4,
      duration: 15 + Math.random() * 30, // animation duration variation
      delay: Math.random() * 5, // staggered animation
    }));
    setParticles(newParticles);
  }, []);

  return (
    <>
      {/* Base textured background with royal deep colors */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: bgParallax }}
      >
        {/* Rich gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(28,17,45,1),rgba(5,5,15,1))] opacity-90"></div>
        
        {/* Subtle royal pattern overlay */}
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5"></div>
        
        {/* Hawaiian silhouette with blend effect */}
        <div className="absolute inset-0 overflow-hidden mix-blend-soft-light opacity-20">
          <Image 
            src="https://res.cloudinary.com/dyop38nwj/image/upload/v1739866050/Ripfitness/Dance-studio/hawaii-silhouette_nmpvkq.png"
            alt="Hawaii Silhouette"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
      
      {/* Dynamic light effects with parallax */}
      <motion.div 
        className="absolute top-0 left-[50%] w-[1200px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(255,215,0,0.12),transparent_70%)] blur-3xl transform -translate-x-1/2 translate-y-[-40%]"
        style={{ y: leftLightParallax }}
      />
      <motion.div 
        className="absolute top-[40%] right-[-20%] w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle,rgba(218,165,32,0.08),transparent_70%)] blur-3xl"
        style={{ y: rightLightParallax }}
      />
      <motion.div 
        className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(139,69,19,0.05),transparent_70%)] blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -60]) }}
      />
      
      {/* Elegant Floating Royal Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-[#FFD700]"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.size/2}px rgba(255,215,0,0.6)`,
              filter: `blur(${particle.size/4}px)`
            }}
            animate={{
              y: ['-20px', '20px'],
              x: ['-10px', '10px'],
              opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>
      
      {/* Royal Filigree Border Frame */}
      <div className="absolute inset-[5vw] border-[1px] border-[#FFD700]/20 z-[1]"></div>
      
      {/* Ornate Corner Elements */}
      <div className="absolute top-[5vw] left-[5vw] w-[50px] h-[50px] z-[1]">
        <div className="absolute top-0 left-0 w-full h-full border-t-[3px] border-l-[3px] border-[#FFD700]/50 rounded-tl-sm"></div>
        <div className="absolute top-[10px] left-[10px] w-[15px] h-[15px] border-t-[2px] border-l-[2px] border-[#FFD700]/30"></div>
        <div className="absolute top-[5px] left-[5px] w-[5px] h-[5px] bg-[#FFD700]/40 rounded-full"></div>
      </div>
      
      <div className="absolute top-[5vw] right-[5vw] w-[50px] h-[50px] z-[1]">
        <div className="absolute top-0 right-0 w-full h-full border-t-[3px] border-r-[3px] border-[#FFD700]/50 rounded-tr-sm"></div>
        <div className="absolute top-[10px] right-[10px] w-[15px] h-[15px] border-t-[2px] border-r-[2px] border-[#FFD700]/30"></div>
        <div className="absolute top-[5px] right-[5px] w-[5px] h-[5px] bg-[#FFD700]/40 rounded-full"></div>
      </div>
      
      <div className="absolute bottom-[5vw] left-[5vw] w-[50px] h-[50px] z-[1]">
        <div className="absolute bottom-0 left-0 w-full h-full border-b-[3px] border-l-[3px] border-[#FFD700]/50 rounded-bl-sm"></div>
        <div className="absolute bottom-[10px] left-[10px] w-[15px] h-[15px] border-b-[2px] border-l-[2px] border-[#FFD700]/30"></div>
        <div className="absolute bottom-[5px] left-[5px] w-[5px] h-[5px] bg-[#FFD700]/40 rounded-full"></div>
      </div>
      
      <div className="absolute bottom-[5vw] right-[5vw] w-[50px] h-[50px] z-[1]">
        <div className="absolute bottom-0 right-0 w-full h-full border-b-[3px] border-r-[3px] border-[#FFD700]/50 rounded-br-sm"></div>
        <div className="absolute bottom-[10px] right-[10px] w-[15px] h-[15px] border-b-[2px] border-r-[2px] border-[#FFD700]/30"></div>
        <div className="absolute bottom-[5px] right-[5px] w-[5px] h-[5px] bg-[#FFD700]/40 rounded-full"></div>
      </div>
      
      {/* Subtle Royal Background Shimmer Effect */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <motion.div
          className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-[#FFD700]/5 to-transparent skew-x-[-20deg]"
          animate={{ left: ['0%', '100%'] }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatDelay: 5 
          }}
        />
      </div>
    </>
  );
} 