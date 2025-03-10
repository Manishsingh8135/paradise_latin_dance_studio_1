"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroParticles } from "../../ui/hero-particles";
import { Music, ArrowRight, Play } from "lucide-react";
import { PremiumButton } from "../../ui/premium-button";

const danceStyles = [
  {
    id: "salsa",
    name: "Salsa",
    description: "Feel the rhythm of Cuba flow through your body",
    image: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738826484/Ripfitness/Dance-studio/lds-5_bavqe8.jpg",
    video: "/videos/salsa.mp4",
    color: "from-[#FFD700]/20 to-transparent"
  },
  {
    id: "bachata",
    name: "Bachata",
    description: "Experience the sensual Dominican dance style",
    image: "https://res.cloudinary.com/dyop38nwj/image/upload/v1737476989/Ripfitness/Dance-studio/ParadaiseLatinDance_46of55_yz6tx4.jpg",
    video: "/videos/bachata.mp4",
    color: "from-[#FDB931]/20 to-transparent"
  },
  
];

const danceHighlights = [
  {
    id: 1,
    title: "",
    image: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738826472/Ripfitness/Dance-studio/lds-1_licbfa.jpg",
    color: "from-[#FFD700]/30 to-transparent"
  },
  {
    id: 2,
    title: "",
    image: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738826479/Ripfitness/Dance-studio/lds-4_lmrs4d.jpg",
    color: "from-[#FDB931]/30 to-transparent"
  },
  {
    id: 3,
    title: "",
    image: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738826480/Ripfitness/Dance-studio/lds-3_jlnuvb.jpg",
    color: "from-[#DAA520]/30 to-transparent"
  },
  {
    id: 4,
    title: "",
    image: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738826481/Ripfitness/Dance-studio/lds-2_rgxwi8.jpg",
    color: "from-[#FFD700]/30 to-transparent"
  }
];

export function DanceStudioSectionV3() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStyle, setActiveStyle] = useState(danceStyles[0]);
  const [hoveredStyle, setHoveredStyle] = useState<string | null>(null);
  const [activeHighlight, setActiveHighlight] = useState(0);

  // Auto-rotate highlights
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHighlight((prev) => (prev + 1) % danceHighlights.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen pb-32 overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <HeroParticles />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5" />
        
        {/* Dynamic Background based on active style */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStyle.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={activeStyle.image}
              alt={activeStyle.name}
              fill
              className="object-cover opacity-60 transition-opacity duration-1000"
            />
            {/* Subtle black overlay */}
            <div className="absolute inset-0 bg-black/60" />
            {/* Additional gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50" />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4">
        {/* Header Section */}
        <div className="pt-32 pb-16 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <div className="bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full border border-[#FFD700]/20 flex items-center gap-2">
              <Music className="w-4 h-4 text-[#FFD700]" />
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent font-medium">
                Best Latin Dance Studio in Hawaii
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-5xl lg:text-7xl font-bold mt-8 mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Paradise
            </span>{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent block md:inline">
              Latin Dance
            </span>
          </motion.h2>
        </div>

        {/* 3D Rotating Showcase */}
        <div className="relative z-10 py-16 overflow-hidden">
          <div className="relative h-[60vh] max-h-[600px]">
            <AnimatePresence mode="wait">
              {danceHighlights.map((highlight, index) => (
                index === activeHighlight && (
                  <motion.div
                    key={highlight.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                      duration: 1.2,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0"
                  >
                    <div className="relative w-full h-full rounded-3xl overflow-hidden group">
                      <Image
                        src={highlight.image}
                        alt={highlight.title}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                        priority
                      />
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2 }}
                        className={`absolute inset-0 bg-gradient-to-t ${highlight.color}`} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <motion.h3 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ 
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.2
                          }}
                          className="text-4xl font-bold text-white mb-4"
                        >
                          {highlight.title}
                        </motion.h3>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {danceHighlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveHighlight(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeHighlight 
                      ? "bg-[#FFD700] w-6" 
                      : "bg-white/40 hover:bg-[#FFD700]/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Dance Styles Showcase */}
        <motion.div 
          style={{ y, opacity }}
          className="relative z-10 py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Featured Style Display */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStyle.id}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeStyle.image}
                    alt={activeStyle.name}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${activeStyle.color}`} />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-20 h-20 rounded-full bg-[#FFD700]/10 backdrop-blur-sm border border-[#FFD700]/20 flex items-center justify-center group"
                    >
                      <Play className="w-8 h-8 text-white group-hover:text-[#FFD700] transition-colors" />
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Style Selection and Description */}
            <div className="space-y-12">
              {/* Style Navigation */}
              <div className="space-y-6">
                {danceStyles.map((style) => (
                  <motion.button
                    key={style.id}
                    onClick={() => setActiveStyle(style)}
                    onMouseEnter={() => setHoveredStyle(style.id)}
                    onMouseLeave={() => setHoveredStyle(null)}
                    className={`w-full text-left p-6 rounded-2xl transition-colors relative overflow-hidden ${
                      activeStyle.id === style.id
                        ? "bg-[#FFD700]/10 backdrop-blur-sm"
                        : "hover:bg-[#FFD700]/5"
                    }`}
                  >
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
                          {style.name}
                        </span>
                      </h3>
                      <p className="text-white/80">{style.description}</p>
                    </div>
                    
                    {/* Animated Background */}
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: hoveredStyle === style.id || activeStyle.id === style.id ? 1 : 0
                      }}
                      className={`absolute inset-0 bg-gradient-to-r ${style.color} pointer-events-none`}
                    />
                  </motion.button>
                ))}
              </div>

              {/* Call to Action */}
              <Link href="/dance-studio" className="block w-full sm:w-auto">
                <PremiumButton className="group text-lg px-8 py-4 w-full">
                  Explore All Classes
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </PremiumButton>
              </Link>
            </div>
          </div>
        </motion.div>

        
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(255,215,0,0.1),transparent_50%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(218,165,32,0.1),transparent_50%)] blur-3xl pointer-events-none" />
    </section>
  );
}
