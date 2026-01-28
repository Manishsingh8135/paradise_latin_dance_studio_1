"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Award, Clock, Users } from "lucide-react";
import Link from "next/link";
import { OPTIMIZED_URLS } from "@/lib/cloudinary";

// Define the journey stages with rich, visual content
const journeyStages = [
  {
    id: "beginner",
    title: "First Steps",
    description: "Where passion meets guidance. Begin your dance journey with foundational techniques in a supportive environment.",
    achievements: ["Basic movement patterns", "Rhythm foundation", "Simple partner connection"],
    timeframe: "1-3 months",
    image: OPTIMIZED_URLS.paradiseDance,
    testimonial: "I was so nervous on my first day, but the instructors made me feel welcome immediately. Now I look forward to every class!",
    studentName: "Michelle K.",
    badgeColor: "from-amber-400 to-amber-600",
  },
  {
    id: "intermediate",
    title: "Finding Your Rhythm",
    description: "Develop fluid movement and expressive styling as your confidence grows and techniques become second nature.",
    achievements: ["Style variations", "Complex turn patterns", "Improved musicality"],
    timeframe: "4-8 months",
    image: OPTIMIZED_URLS.dancePhoto1,
    testimonial: "The moment everything clicked was magical. I went from counting steps to feeling the music. The journey has transformed more than just my dancing.",
    studentName: "James T.",
    badgeColor: "from-[#FDB931] to-[#DAA520]",
  },
  {
    id: "advanced",
    title: "Expressive Mastery",
    description: "Transform technical skills into artistry. Express yourself authentically through movement with nuance and personal style.",
    achievements: ["Performance readiness", "Style mastery", "Dance composition"],
    timeframe: "9+ months",
    image: OPTIMIZED_URLS.lds4,
    testimonial: "Dancing has become my passion, my joy, and my community. What started as a hobby has become an essential part of who I am.",
    studentName: "Keoni M.",
    badgeColor: "from-[#FFD700] to-[#FDB931]",
  }
];

export function DanceTransformationJourney() {
  const [activeStage, setActiveStage] = useState(journeyStages[0]);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.8, 0.9], [0, 1, 1, 0]);
  
  const handleStageChange = (stage: typeof journeyStages[0]) => {
    setActiveStage(stage);
  };
  
  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 overflow-hidden bg-black min-h-screen"
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"
        style={{ opacity: backgroundOpacity }}
      />
      
      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5" />
      
      {/* Floating light particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#FFD700]/20"
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`, 
              opacity: 0.2 + Math.random() * 0.3 
            }}
            animate={{ 
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [0.1, 0.5, 0.1]
            }}
            transition={{ 
              duration: 5 + Math.random() * 10, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
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
              Witness the progression from first steps to expressive mastery through our guided pathway to dance excellence.
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Journey Map */}
          <div className="space-y-10">
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-5 md:left-8 w-px bg-gradient-to-b from-[#FFD700]/10 via-[#FFD700]/40 to-[#FFD700]/10"></div>
              
              {journeyStages.map((stage, index) => (
                <motion.div 
                  key={stage.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative pl-12 md:pl-16 py-6 ${activeStage.id === stage.id ? 'opacity-100' : 'opacity-70'} transition-opacity cursor-pointer`}
                  onClick={() => handleStageChange(stage)}
                >
                  {/* Stage Marker */}
                  <div className={`absolute left-0 w-10 h-10 rounded-full bg-gradient-to-br ${stage.badgeColor} flex items-center justify-center shadow-lg shadow-[#FFD700]/20 p-1`}>
                    <div className="bg-black/80 w-full h-full rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                  </div>
                  
                  {/* Stage Content */}
                  <div className={`${activeStage.id === stage.id ? 'transform scale-105' : ''} transition-transform origin-left`}>
                    <h3 className={`text-2xl font-bold mb-2 ${activeStage.id === stage.id ? 'bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent' : 'text-white'}`}>
                      {stage.title}
                    </h3>
                    <p className="text-white/70 text-lg mb-3">{stage.description}</p>
                    
                    {/* Quick Stats */}
                    <div className="flex flex-wrap gap-4 mt-3">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-[#FFD700]" />
                        <span className="text-white/70">{stage.timeframe}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-[#FFD700]" />
                        <span className="text-white/70">{stage.achievements.length} key skills</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Testimonial Quote */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeStage.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-[#FFD700]/5 rounded-3xl p-8 border border-[#FFD700]/10 relative mt-10"
              >
                <svg className="absolute text-[#FFD700]/20 h-12 w-12 -top-6 -left-6" width="51" height="48" viewBox="0 0 51 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.76 23.16C7.96 24.84 5.56 28.56 5.56 34.32C5.56 37.32 6.32 39.72 7.84 41.52C9.36 43.32 11.56 44.22 14.44 44.22C17.08 44.22 19.24 43.38 20.92 41.7C22.6 40.02 23.44 37.86 23.44 35.22C23.44 32.58 22.6 30.42 20.92 28.74C19.24 27.06 17.08 26.22 14.44 26.22C13.72 26.22 13.12 26.28 12.64 26.4C12.88 24.24 14.08 22.68 16.24 21.72L12.76 23.16ZM35.96 23.16C31.16 24.84 28.76 28.56 28.76 34.32C28.76 37.32 29.52 39.72 31.04 41.52C32.56 43.32 34.76 44.22 37.64 44.22C40.28 44.22 42.44 43.38 44.12 41.7C45.8 40.02 46.64 37.86 46.64 35.22C46.64 32.58 45.8 30.42 44.12 28.74C42.44 27.06 40.28 26.22 37.64 26.22C36.92 26.22 36.32 26.28 35.84 26.4C36.08 24.24 37.28 22.68 39.44 21.72L35.96 23.16Z" fill="currentColor"/>
                </svg>
                
                <p className="text-white/80 text-xl italic mb-4">&ldquo;{activeStage.testimonial}&rdquo;</p>
                <p className="text-[#FFD700] font-medium">— {activeStage.studentName}</p>
              </motion.div>
            </AnimatePresence>
            
            {/* Call To Action */}
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
                Start Your Journey
                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
          
          {/* Right Column - Visual Transformation */}
          <div className="relative">
            {/* Images Container */}
            <AnimatePresence mode="wait">
              <motion.div
                key="stage-image"
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 grid grid-cols-3 gap-4"
            >
              {['Technique', 'Confidence', 'Expression'].map((skill, i) => (
                <div key={skill} className="rounded-xl bg-black/40 border border-[#FFD700]/10 p-4">
                  <p className="text-white/70 mb-2">{skill}</p>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${activeStage.badgeColor}`}
                      initial={{ width: 0 }}
                      animate={{ 
                        width: `${i === 0 
                          ? (activeStage.id === 'beginner' ? 30 : activeStage.id === 'intermediate' ? 60 : 90) 
                          : i === 1 
                          ? (activeStage.id === 'beginner' ? 20 : activeStage.id === 'intermediate' ? 70 : 85)
                          : (activeStage.id === 'beginner' ? 15 : activeStage.id === 'intermediate' ? 50 : 95)}%` 
                      }}
                      transition={{ duration: 1, delay: 0.1 * i }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
            
            {/* Community Indicator */}
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
                  {activeStage.id === 'beginner' 
                    ? 'Welcome to the dance family - you\'ll meet supportive peers in your journey.'
                    : activeStage.id === 'intermediate'
                    ? 'Regular practice partners and social dance opportunities expand your circle.'
                    : 'Deep integration with the dance community and mentorship opportunities.'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
