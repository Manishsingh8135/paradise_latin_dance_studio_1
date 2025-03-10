"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

const danceStyles = [
  {
    id: "salsa",
    name: "Salsa",
    description: "Feel the rhythm of Cuba flow through your body with our dynamic salsa classes. Perfect for beginners and advanced dancers alike.",
    image: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738826472/Ripfitness/Dance-studio/lds-1_licbfa.jpg",
    features: ["Social Dancing", "Partner Work", "Body Movement", "Timing & Rhythm"],
    level: "All Levels",
    duration: "60 mins",
    color: "from-[#FFD700]/20 to-transparent"
  },
  {
    id: "bachata",
    name: "Bachata",
    description: "Experience the sensual Dominican dance style that's taking the world by storm. Learn authentic moves and styling.",
    image: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738826481/Ripfitness/Dance-studio/lds-2_rgxwi8.jpg",
    features: ["Body Isolation", "Hip Movement", "Footwork", "Partner Connection"],
    level: "All Levels",
    duration: "60 mins",
    color: "from-[#DAA520]/20 to-transparent"
  },
 
];

export function DanceStyles() {
  const [activeStyle, setActiveStyle] = useState(danceStyles[0]);
  const [hoveredStyle, setHoveredStyle] = useState<string | null>(null);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
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
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Pre-title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-[#FFD700] to-transparent" />
            <span className="text-[#FFD700] uppercase tracking-widest text-sm font-medium">
              Our Dance Programs
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            Discover Your 
            <span className="block bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#DAA520] bg-clip-text text-transparent">
              Perfect Dance Style
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-[#FDB931]/80"
          >
            From Latin rhythms to contemporary movements, find the perfect dance style that speaks to your soul.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Style List */}
          <div className="space-y-4">
            {danceStyles.map((style) => {
              const isActive = style.id === activeStyle.id;
              const isHovered = style.id === hoveredStyle;
              
              return (
                <motion.div
                  key={style.id}
                  onMouseEnter={() => setHoveredStyle(style.id)}
                  onMouseLeave={() => setHoveredStyle(null)}
                  onClick={() => setActiveStyle(style)}
                  className={`
                    relative rounded-2xl cursor-pointer overflow-hidden
                    transition-all duration-500 ease-out
                    ${isActive ? 'bg-gradient-to-r from-[#FFD700]/20 to-transparent' : 'hover:bg-[#FFD700]/10'}
                  `}
                  initial={false}
                  animate={{
                    y: isHovered ? -5 : 0,
                    scale: isActive ? 1.02 : 1,
                  }}
                >
                  <div className="relative p-6">
                    <h3 className={`text-2xl font-bold mb-2 ${isActive ? 'text-[#FFD700]' : 'text-white'}`}>
                      {style.name}
                    </h3>
                    <p className="text-[#FDB931]/80 mb-4">
                      {style.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-[#FFD700]" />
                        <span>{style.level}</span>
                      </div>
                      <div>{style.duration}</div>
                    </div>

                    {isActive && (
                      <div className="absolute top-6 right-6">
                        <div className="w-8 h-8 rounded-full bg-[#FFD700] flex items-center justify-center">
                          <ArrowRight className="w-4 h-4 text-black" />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Style Details */}
          <div className="lg:pl-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStyle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-[#FFD700]/10 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-[#FFD700]/20"
              >
                <h4 className="text-xl font-semibold mb-6">Key Features</h4>
                <div className="grid grid-cols-2 gap-4">
                  {activeStyle.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-[#FDB931]/90"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent" />
    </section>
  );
}
