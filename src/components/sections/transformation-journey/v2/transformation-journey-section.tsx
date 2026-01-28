"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Award, Clock, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HeroParticles } from "@/components/ui/hero-particles";
import { journeyStages, journeySection } from "../data/journey-data";

// Define types directly in this file to avoid any import issues
type JourneyLevel = "beginner" | "intermediate" | "advanced";

interface JourneyStage {
  id: JourneyLevel;
  title: string;
  description: string;
  achievements: string[];
  timeframe: string;
  image: string;
  testimonial: string;
  studentName: string;
  badgeColor: string;
  skillLevels: {
    technique: number;
    confidence: number;
    expression: number;
  };
  communityDescription: string;
}

export function TransformationJourneySectionV2() {
  const [activeStage, setActiveStage] = useState<JourneyStage>(journeyStages[0]);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.8, 0.9], [0, 1, 1, 0]);
  
  const handleStageChange = (stage: JourneyStage) => {
    setActiveStage(stage);
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black">
        {/* Container for HeroParticles */}
        <div className="absolute inset-0 bg-black">
          <HeroParticles />
        </div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5"></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <motion.div 
        className="relative container mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity: contentOpacity }}
      >
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-white">Your </span>
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
                Transformation
              </span>
              <span className="text-white"> Journey</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              {journeySection.description}
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Journey Map */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-5 md:left-8 w-px bg-gradient-to-b from-[#FFD700]/10 via-[#FFD700]/40 to-[#FFD700]/10"></div>
              
              {journeyStages.map((stage, index) => {
                const isActive = activeStage.id === stage.id;
                return (
                  <motion.div 
                    key={stage.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => handleStageChange(stage)}
                    className={`
                      relative pl-12 md:pl-16 py-6 pr-6 rounded-xl cursor-pointer 
                      transition-all duration-300 group hover:pl-14 md:hover:pl-18
                      ${isActive 
                        ? 'bg-[#FFD700]/10 border border-[#FFD700]/30 shadow-lg shadow-[#FFD700]/10' 
                        : 'hover:bg-white/5 border border-transparent hover:border-white/10'}
                    `}
                  >
                    {/* Left Highlight Line for Active State */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeHighlight"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FFD700] via-[#FDB931] to-[#FFD700] rounded-l-full"
                      />
                    )}
                    
                    {/* Stage Marker */}
                    <div className={`
                      absolute left-3 md:left-6 top-1/2 transform -translate-y-1/2 
                      w-10 h-10 rounded-full 
                      flex items-center justify-center 
                      shadow-lg transition-all duration-300
                      ${isActive 
                        ? `shadow-[0_0_15px_rgba(255,215,0,0.5)] bg-gradient-to-br ${stage.badgeColor} p-0.5` 
                        : 'shadow-[#FFD700]/10 bg-gradient-to-br from-white/10 to-white/5 p-1 group-hover:shadow-[#FFD700]/20 group-hover:from-white/15 group-hover:to-white/10'}
                    `}>
                      <div className="bg-black/80 w-full h-full rounded-full flex items-center justify-center">
                        <span className={`font-bold transition-colors duration-300 ${isActive ? 'text-[#FFD700]' : 'text-white/70 group-hover:text-white'}`}>
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    
                    {/* Stage Content */}
                    <div className={`transition-all duration-300 ${isActive ? 'transform scale-[1.02] origin-left' : ''}`}>
                      <h3 className={`
                        text-2xl font-bold mb-2 transition-colors duration-300
                        ${isActive 
                          ? 'bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent' 
                          : 'text-white group-hover:bg-gradient-to-r group-hover:from-[#FFD700]/70 group-hover:to-[#FDB931]/70 group-hover:bg-clip-text group-hover:text-transparent'}
                      `}>
                        {stage.title}
                      </h3>
                      <p className={`text-white/70 mb-3 transition-colors duration-300 ${isActive ? 'text-white/90' : 'group-hover:text-white/80'}`}>
                        {stage.description}
                      </p>
                      
                      {/* Quick Stats */}
                      <div className="flex flex-wrap gap-4 mt-3">
                        <div className={`
                          flex items-center gap-2 px-3 py-1 rounded-full border transition-all duration-300
                          ${isActive 
                            ? 'bg-white/10 border-[#FFD700]/30' 
                            : 'bg-white/5 border-white/10 group-hover:border-white/20 group-hover:bg-white/8'}
                        `}>
                          <Clock className={`w-4 h-4 transition-colors duration-300 ${isActive ? 'text-[#FFD700]' : 'text-white/50 group-hover:text-[#FFD700]/70'}`} />
                          <span className={`text-sm transition-colors duration-300 ${isActive ? 'text-white/90' : 'text-white/50 group-hover:text-white/70'}`}>
                            {stage.timeframe}
                          </span>
                        </div>
                        
                        <div className={`
                          flex items-center gap-2 px-3 py-1 rounded-full border transition-all duration-300
                          ${isActive 
                            ? 'bg-white/10 border-[#FFD700]/30' 
                            : 'bg-white/5 border-white/10 group-hover:border-white/20 group-hover:bg-white/8'}
                        `}>
                          <Award className={`w-4 h-4 transition-colors duration-300 ${isActive ? 'text-[#FFD700]' : 'text-white/50 group-hover:text-[#FFD700]/70'}`} />
                          <span className={`text-sm transition-colors duration-300 ${isActive ? 'text-white/90' : 'text-white/50 group-hover:text-white/70'}`}>
                            {stage.achievements.length} key skills
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right arrow indicator for active state */}
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#FFD700]"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.div>
                    )}
                    
                    {/* Subtle glow overlay on hover/active */}
                    <div className={`
                      absolute inset-0 rounded-xl opacity-0 pointer-events-none
                      transition-opacity duration-500 
                      ${isActive 
                        ? 'bg-gradient-to-r from-[#FFD700]/5 to-transparent opacity-100' 
                        : 'bg-gradient-to-r from-[#FFD700]/5 to-transparent group-hover:opacity-30'}
                    `} />
                  </motion.div>
                );
              })}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/classes"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-black bg-gradient-to-r from-[#FFD700] to-[#FDB931] rounded-full shadow-lg shadow-[#FFD700]/20 hover:shadow-xl hover:shadow-[#FFD700]/30 transition-all duration-300 transform hover:translate-y-[-2px]"
              >
                {journeySection.ctaText}
                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
          
          {/* Right Column - Visual Transformation */}
          <div className="relative">
            {/* Images Container */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden ring-4 ring-[#FFD700]/20"
              >
                <Image
                  src={activeStage.image}
                  alt={activeStage.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Achievement Badges */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                  <h3 className="text-2xl font-bold mb-4 text-white">{activeStage.title} Achievements:</h3>
                  <div className="flex flex-wrap gap-3">
                    {activeStage.achievements.map((achievement, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                        className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm border border-[#FFD700]/30"
                      >
                        <span className="text-white">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Skill Level Indicators */}
            <motion.div
              key={`skills-${activeStage.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-3 gap-4 mt-4"
            >
              {["Technique", "Confidence", "Expression"].map((skill, i) => {
                const level = activeStage.skillLevels[skill.toLowerCase() as keyof typeof activeStage.skillLevels];
                return (
                  <div key={skill} className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <p className="text-white/70 mb-2 text-sm">{skill}</p>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${activeStage.badgeColor}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${level}%` }}
                        transition={{ duration: 1, delay: 0.1 * i }}
                      />
                    </div>
                  </div>
                );
              })}
            </motion.div>
            
            {/* Testimonial */}
            <motion.div
              key={`testimonial-${activeStage.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 bg-[#FFD700]/5 backdrop-blur-sm rounded-2xl p-6 border border-[#FFD700]/10 relative"
            >
              <div className="text-[#FFD700]/20 text-5xl absolute top-6 left-6">&ldquo;</div>
              <p className="text-white/70 text-lg italic mb-3 relative z-10 pl-4">
                {activeStage.testimonial}
              </p>
              <p className="text-[#FFD700] pl-4">— {activeStage.studentName}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-4 rounded-xl bg-[#FFD700]/5 border border-[#FFD700]/10 p-4 flex items-center gap-4"
            >
              <Users className="w-6 h-6 text-[#FFD700]" />
              <div>
                <p className="text-white font-medium">Community Connection</p>
                <p className="text-white/60 text-sm">
                  {activeStage.communityDescription}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 