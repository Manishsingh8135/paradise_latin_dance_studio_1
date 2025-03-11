"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Award, Star, Trophy, Crown, Users, Calendar, Clock, Heart } from "lucide-react";

// Import data
import { bestDanceStudioData } from "../data/best-dance-studio.data";

// GSAP-inspired scroll effects with Framer Motion
function useParallaxScroll(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, distance]);
}

export function BestDanceStudioV2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [activeAchievementIndex, setActiveAchievementIndex] = useState(0);
  const [activeStatIndex, setActiveStatIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Auto-rotate highlighted items
  useEffect(() => {
    const achievementInterval = setInterval(() => {
      setActiveAchievementIndex(prev => 
        (prev + 1) % bestDanceStudioData.accolades.length
      );
    }, 5000);
    
    const statInterval = setInterval(() => {
      setActiveStatIndex(prev => 
        (prev + 1) % bestDanceStudioData.statistics.length
      );
    }, 3000);
    
    return () => {
      clearInterval(achievementInterval);
      clearInterval(statInterval);
    };
  }, []);

  // Parallax scroll values
  const bgParallax = useParallaxScroll(scrollYProgress, -150);
  const textParallax = useParallaxScroll(scrollYProgress, -80);
  const contentParallax = useParallaxScroll(scrollYProgress, -30);
  
  // Get icon component based on name
  const getIconComponent = (iconName?: string) => {
    switch (iconName) {
      case "Trophy": return <Trophy className="h-full w-full" />;
      case "Award": return <Award className="h-full w-full" />;
      case "Star": return <Star className="h-full w-full" />;
      case "Users": return <Users className="h-full w-full" />;
      case "Calendar": return <Calendar className="h-full w-full" />;
      case "Clock": return <Clock className="h-full w-full" />;
      case "Heart": return <Heart className="h-full w-full" />;
      default: return <Crown className="h-full w-full" />;
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-[150vh] w-full bg-black overflow-hidden"
    >
      {/* Royal Background with parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: bgParallax }}
      >
        {/* Base textured background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,20,45,1),rgba(0,0,0,1))] opacity-70"></div>
        
        {/* Dynamic light effects */}
        <div className="absolute top-0 left-[50%] w-[1000px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,215,0,0.15),transparent_70%)] blur-3xl transform -translate-x-1/2 translate-y-[-30%]"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(128,0,128,0.1),transparent_70%)] blur-3xl"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5"></div>
        
        {/* Image layers */}
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src="https://res.cloudinary.com/dyop38nwj/image/upload/v1739866050/Ripfitness/Dance-studio/hawaii-silhouette_nmpvkq.png"
            alt="Hawaii Silhouette"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        
        {/* Royal gold border frame */}
        <div className="absolute inset-[5vw] border-[1px] border-[#FFD700]/20"></div>
        <div className="absolute top-[5vw] left-[5vw] w-[30px] h-[30px] border-t-[3px] border-l-[3px] border-[#FFD700]/50"></div>
        <div className="absolute top-[5vw] right-[5vw] w-[30px] h-[30px] border-t-[3px] border-r-[3px] border-[#FFD700]/50"></div>
        <div className="absolute bottom-[5vw] left-[5vw] w-[30px] h-[30px] border-b-[3px] border-l-[3px] border-[#FFD700]/50"></div>
        <div className="absolute bottom-[5vw] right-[5vw] w-[30px] h-[30px] border-b-[3px] border-r-[3px] border-[#FFD700]/50"></div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 flex flex-col items-center">
        
        {/* Grand Royal Title */}
        <motion.div 
          className="relative mb-16 md:mb-24 text-center w-full"
          style={{ y: textParallax }}
        >
          {/* "Best In" text with glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mb-6"
          >
            <div className="font-light text-white/70 text-2xl md:text-3xl uppercase tracking-[0.3em] ml-[0.3em]">
              The Premier
            </div>
          </motion.div>
          
          {/* Main Title with dramatic effects */}
          <div className="relative">
            {/* Shadow copy for depth effect */}
            <h1 className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#000000] to-[#222222] blur-xl opacity-30 select-none pointer-events-none">
              {bestDanceStudioData.title}
            </h1>
            
            {/* Main title with gradient */}
            <motion.h1
              ref={titleRef}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, type: "spring" }}
              className="relative text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#E6C200]"
            >
              {bestDanceStudioData.title}
            </motion.h1>
            
            {/* Glowing underline */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mt-4 mx-auto blur-sm"
              style={{ maxWidth: "80%" }}
            />
          </div>
          
          {/* Subtitle with elegant fade-in */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90 mt-6 md:mt-10"
          >
            {bestDanceStudioData.subtitle}
          </motion.h2>
          
          {/* Decorative elements */}
          <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-[60px] h-[60px] text-[#FFD700]/40">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-full h-full"
            >
              <Crown className="w-full h-full" />
            </motion.div>
          </div>
        </motion.div>
        
        {/* 3D Rotating Achievement Showcase */}
        <motion.div
          style={{ y: contentParallax }}
          className="w-full max-w-6xl mb-32"
        >
          <div className="perspective-1000 relative h-[500px] md:h-[600px] w-full">
            {/* 3D Stage */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Achievement Cards positioned in 3D space */}
                {bestDanceStudioData.accolades.map((accolade, i) => {
                  const isActive = i === activeAchievementIndex;
                  const theta = (i / bestDanceStudioData.accolades.length) * Math.PI * 2;
                  const radius = 200;
                  const x = radius * Math.sin(theta);
                  const z = radius * Math.cos(theta);
                  
                  return (
                    <motion.div
                      key={accolade.id}
                      className={`absolute left-0 top-0 w-[300px] md:w-[350px] backdrop-blur-md rounded-2xl overflow-hidden
                        ${isActive ? 'bg-gradient-to-br from-[#FFD700]/30 to-[#924500]/20 border-[#FFD700]/40' : 'bg-black/40 border-white/10'}
                        border-[1px] shadow-xl transition-all duration-300 transform-gpu`}
                      style={{ 
                        transformStyle: "preserve-3d",
                        transform: `translate3d(${x}px, 0, ${z}px) rotateY(${-theta * (180/Math.PI)}deg)`,
                        zIndex: isActive ? 10 : 0,
                        opacity: isActive ? 1 : 0.7,
                        scale: isActive ? 1.1 : 0.9,
                        padding: isActive ? "1.5rem" : "1rem",
                      }}
                    >
                      {/* Gradual lighting effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                      
                      {/* Card Content */}
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center
                            ${isActive ? 'bg-gradient-to-br from-[#FFD700] to-[#924500] text-black' : 'bg-white/10 text-white/70'}`}>
                            {getIconComponent(accolade.icon)}
                          </div>
                          <div>
                            <h3 className={`font-bold text-xl ${isActive ? 'text-[#FFD700]' : 'text-white'}`}>
                              {accolade.title}
                            </h3>
                            {accolade.year && <p className="text-white/60 text-sm">{accolade.year}</p>}
                          </div>
                        </div>
                        <p className="text-white/80 leading-relaxed">{accolade.description}</p>
                      </div>
                      
                      {/* Shimmering edge effect for active card */}
                      {isActive && (
                        <div className="absolute inset-0 overflow-hidden">
                          <motion.div
                            animate={{ left: ["0%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                            className="absolute top-0 -right-20 w-20 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-12"
                          />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
            
            {/* Selection indicators */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
              {bestDanceStudioData.accolades.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveAchievementIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-500 
                    ${i === activeAchievementIndex ? 'bg-[#FFD700] scale-125' : 'bg-white/20'}`}
                  aria-label={`Select achievement ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Statistics with dynamic visualization */}
        <motion.div
          style={{ y: contentParallax }}
          className="w-full max-w-6xl mb-32"
        >
          <div className="relative">
            {/* Section header */}
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FFFFFF] to-[#DDDDDD] bg-clip-text text-transparent mb-4"
              >
                Excellence By The Numbers
              </motion.h2>
              <div className="w-40 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
            </div>
            
            {/* Dynamic statistics display */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bestDanceStudioData.statistics.map((stat, i) => {
                const isActive = i === activeStatIndex;
                
                return (
                  <motion.div
                    key={stat.id}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`relative overflow-hidden rounded-2xl transition-all duration-500 
                      border-[1px] backdrop-blur-md
                      ${isActive ? 
                        'bg-gradient-to-br from-[#FFD700]/20 to-[#924500]/10 border-[#FFD700]/30 shadow-[0_0_25px_rgba(255,215,0,0.2)]' : 
                        'bg-black/40 border-white/10 hover:border-[#FFD700]/20'}`}
                  >
                    {/* Top glow effect */}
                    <div className={`absolute top-0 left-0 right-0 h-1 
                      ${isActive ? 'bg-[#FFD700]/70' : 'bg-white/20'}`}></div>
                    
                    {/* Radial background for active state */}
                    {isActive && (
                      <div className="absolute inset-0 bg-radial-gradient from-[#FFD700]/10 to-transparent opacity-50"></div>
                    )}
                    
                    <div className="relative p-6">
                      {/* Icon */}
                      <div className={`w-12 h-12 mx-auto mb-4 transition-all duration-500
                        ${isActive ? 'text-[#FFD700] scale-125' : 'text-white/70'}`}>
                        {getIconComponent(stat.icon)}
                      </div>
                      
                      {/* Count with dramatic presentation */}
                      <div className="text-center mb-2">
                        <div className={`text-4xl md:text-5xl font-bold transition-all duration-500
                          ${isActive ? 'text-[#FFD700] scale-110' : 'text-white'}`}>
                          {stat.prefix && <span>{stat.prefix}</span>}
                          <span className="tabular-nums">{stat.value}</span>
                          {stat.unit && <span>{stat.unit}</span>}
                        </div>
                        <h3 className="text-xl font-medium text-white/90 mt-2">{stat.label}</h3>
                      </div>
                      
                      {/* Description */}
                      {stat.description && (
                        <p className="text-center text-white/60 text-sm mt-2">{stat.description}</p>
                      )}
                    </div>
                    
                    {/* Shimmer effect on active */}
                    {isActive && (
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <motion.div
                          animate={{ left: ["-100%", "100%"] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut", repeatDelay: 0.5 }}
                          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-[-20deg]"
                        />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
        
        {/* Testimonial & CTA Section */}
        <motion.div
          style={{ y: contentParallax }}
          className="w-full max-w-6xl"
        >
          <div className="relative bg-gradient-to-br from-[#150e00]/80 to-[#000000]/90 backdrop-blur-xl rounded-3xl overflow-hidden border-[1px] border-[#FFD700]/20 p-2">
            {/* Gold corner accents */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#FFD700]/60 rounded-tl-3xl"></div>
            <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#FFD700]/60 rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#FFD700]/60 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#FFD700]/60 rounded-br-3xl"></div>
            
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Featured Testimonial */}
                <div className="relative">
                  <div className="absolute -top-4 -left-4 text-[#FFD700]/20 w-16 h-16">
                    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                    </svg>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative ml-6 mt-6"
                  >
                    <p className="text-xl md:text-2xl text-white/90 italic leading-relaxed mb-6">
                      &quot;{bestDanceStudioData.testimonialQuotes[0].quote}&quot;
                    </p>
                    
                    <div className="flex items-center">
                      <div className="mr-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FFD700] to-[#924500] flex items-center justify-center text-black text-xl font-bold">
                          {bestDanceStudioData.testimonialQuotes[0].author.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-[#FFD700]">{bestDanceStudioData.testimonialQuotes[0].author}</p>
                        {bestDanceStudioData.testimonialQuotes[0].role && (
                          <p className="text-white/60 text-sm">{bestDanceStudioData.testimonialQuotes[0].role}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* CTA Section */}
                <div className="relative flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center lg:text-left"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      <span className="text-white">Join the </span>
                      <span className="text-[#FFD700]">Excellence</span>
                    </h2>
                    
                    <p className="text-white/70 mb-8 text-lg">
                      Experience why Paradise Latin Dance Studio stands as Hawaii&apos;s premier destination for authentic Latin dance instruction.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <Link 
                        href={bestDanceStudioData.cta.primary.url} 
                        className="relative overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#924500] rounded-full transform group-hover:scale-[1.02] transition-transform duration-300"></div>
                        <div className="absolute inset-[2px] bg-gradient-to-r from-[#2A1A00] to-[#000000] rounded-full transform group-hover:scale-[0.99] transition-transform duration-300"></div>
                        <div className="relative px-8 py-3 flex items-center justify-center gap-2">
                          <span className="text-[#FFD700] font-bold text-lg">{bestDanceStudioData.cta.primary.text}</span>
                          <ChevronRight className="w-5 h-5 text-[#FFD700] transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </Link>
                      
                      {bestDanceStudioData.cta.secondary && (
                        <Link 
                          href={bestDanceStudioData.cta.secondary.url}
                          className="px-8 py-3 rounded-full border-2 border-[#FFD700]/30 text-white/90 hover:text-[#FFD700] hover:border-[#FFD700]/60 transition-all duration-300 text-center"
                        >
                          {bestDanceStudioData.cta.secondary.text}
                        </Link>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Imperial Divider */}
      <div className="relative w-full h-20 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 bg-black rounded-full border-2 border-[#FFD700]/20"></div>
            <div className="absolute inset-4 flex items-center justify-center text-[#FFD700]/60">
              <Crown className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 