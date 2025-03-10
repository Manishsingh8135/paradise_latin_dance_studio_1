"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Instagram, Facebook, Twitter } from "lucide-react";

type DanceStyle = 
  | "Salsa" 
  | "Bachata" 
  | "Cha Cha" 
  | "Contemporary" 
  | "Modern" 
  | "Ballet" 
  | "Hip Hop" 
  | "Breaking" 
  | "Street Jazz" 
  | "Jazz" 
  | "Tap" 
  | "Musical Theatre";

type ColorScheme = {
  bg: string;
  border: string;
  text: string;
};

type Instructor = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  location?: string;
  specialties: DanceStyle[];
  achievements: string[];
  social: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    paradiseDance?: string;
    ripFitness?: string;
  };
};

const instructors: Instructor[] = [
  {
    id: "rico",
    name: "Rico",
    role: "Lead Dance Instructor",
    bio: "A passionate dance instructor from the Dominican Republic 🇩🇴, Rico brings authentic Latin flavor and vibrant energy to the Reborn In Paradise family. As both a dance instructor and fitness coach at R1P Fitness, he embodies the perfect blend of dance and fitness, inspiring students with his dynamic teaching style.",
    image: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738822187/Ripfitness/Dance-studio/Rico-1_iieiwy.jpg", // You'll need to add his actual image
    location: "O'ahu, Hawaii",
    specialties: ["Bachata", "Salsa"],
    achievements: [
      "Lead Instructor at Paradise Latin Dance",
      "Expert Fitness Coach at R1P Fitness",
      "188+ Dance Choreographies",
      "Inspiring the R1P Community"
    ],
    social: {
      instagram: "https://www.instagram.com/_ricostory/",
      paradiseDance: "https://www.instagram.com/paradiselatindance",
      ripFitness: "https://www.instagram.com/r1pfitness"
    }
  },
  {
    id: "mike",
    name: "Mike Lorenzo",
    role: "Latin Dance Instructor & Fitness Coach",
    bio: "A dynamic instructor bringing passion and expertise to both dance and fitness. Mike's dedication to the Reborn In Paradise community shines through in every class, creating an energetic and welcoming environment for all students.",
    image: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738822151/Ripfitness/Dance-studio/Mike-1_npyna3.jpg", // You'll need to add his actual image
    location: "Hawaii",
    specialties: ["Bachata", "Salsa"],
    achievements: [
      "Instructor at Paradise Latin Dance",
      "Fitness Coach at R1P Fitness",
      "4,900+ Social Following",
      "Community Builder"
    ],
    social: {
      instagram: "https://www.instagram.com/mikelorenzojr/",
      paradiseDance: "https://www.instagram.com/paradiselatindance",
      ripFitness: "https://www.instagram.com/r1pfitness"
    }
  }
];

const specialtyColors: Record<DanceStyle, ColorScheme> = {
  "Salsa": { bg: "from-red-500/20 to-pink-500/20", border: "border-red-500/30", text: "text-red-400" },
  "Bachata": { bg: "from-purple-500/20 to-pink-500/20", border: "border-purple-500/30", text: "text-purple-400" },
  "Cha Cha": { bg: "from-orange-500/20 to-yellow-500/20", border: "border-orange-500/30", text: "text-orange-400" },
  "Contemporary": { bg: "from-blue-500/20 to-indigo-500/20", border: "border-blue-500/30", text: "text-blue-400" },
  "Modern": { bg: "from-indigo-500/20 to-violet-500/20", border: "border-indigo-500/30", text: "text-indigo-400" },
  "Ballet": { bg: "from-pink-500/20 to-rose-500/20", border: "border-pink-500/30", text: "text-pink-400" },
  "Hip Hop": { bg: "from-emerald-500/20 to-teal-500/20", border: "border-emerald-500/30", text: "text-emerald-400" },
  "Breaking": { bg: "from-cyan-500/20 to-blue-500/20", border: "border-cyan-500/30", text: "text-cyan-400" },
  "Street Jazz": { bg: "from-violet-500/20 to-purple-500/20", border: "border-violet-500/30", text: "text-violet-400" },
  "Jazz": { bg: "from-amber-500/20 to-yellow-500/20", border: "border-amber-500/30", text: "text-amber-400" },
  "Tap": { bg: "from-teal-500/20 to-cyan-500/20", border: "border-teal-500/30", text: "text-teal-400" },
  "Musical Theatre": { bg: "from-rose-500/20 to-red-500/20", border: "border-rose-500/30", text: "text-rose-400" }
};

export function DanceInstructors() {
  const [activeInstructor, setActiveInstructor] = useState<Instructor>(instructors[0]);
  const [hoveredInstructor, setHoveredInstructor] = useState<string | null>(null);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          >
            Meet Our <span className="bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#DAA520] bg-clip-text text-transparent">Expert Instructors</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-white/80"
          >
            Learn from world-class dancers who are passionate about sharing their knowledge and expertise.
          </motion.p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Profile Cards */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {instructors.map((instructor) => {
              const isActive = instructor.id === activeInstructor.id;
              const isHovered = instructor.id === hoveredInstructor;
              
              return (
                <motion.div
                  key={instructor.id}
                  onClick={() => setActiveInstructor(instructor)}
                  onHoverStart={() => setHoveredInstructor(instructor.id)}
                  onHoverEnd={() => setHoveredInstructor(null)}
                  className={`
                    relative overflow-hidden rounded-2xl cursor-pointer
                    transition-all duration-500 ease-out
                    ${isActive ? 'ring-4 ring-[#FFD700]/30 scale-[1.02] shadow-[0_0_30px_rgba(255,215,0,0.2)]' : 'hover:ring-2 ring-[#FFD700]/20 hover:scale-[1.01]'}
                    ${isHovered ? 'ring-2 ring-[#FFD700]/40' : ''}
                  `}
                  initial={false}
                  animate={{
                    y: isActive ? -5 : 0,
                    opacity: isActive ? 1 : 0.8,
                  }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={instructor.image}
                      alt={instructor.name}
                      fill
                      className={`object-cover transition-all duration-500 ${isActive ? 'brightness-110 contrast-110' : ''}`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500
                      ${isActive ? 'from-black/90 via-black/20 to-transparent' : 'from-black via-black/20 to-transparent'}`} 
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/10 via-transparent to-[#FFD700]/10" />
                    )}
                  </div>
                  
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className={`text-xl font-semibold ${isActive ? 'text-[#FFD700]' : 'text-white'}`}>
                      {instructor.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/80">
                      {instructor.role}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Instructor Details */}
          <div className="lg:pl-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeInstructor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-3xl font-bold text-[#FFD700]">{activeInstructor.name}</h3>
                  <p className="text-xl text-white/80">{activeInstructor.role}</p>
                  <p className="mt-4 text-lg text-white/80 leading-relaxed">
                    {activeInstructor.bio}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-[#FFD700]">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeInstructor.specialties.map((specialty, index) => {
                      const colors = specialtyColors[specialty] || { 
                        bg: "from-gray-500/20 to-gray-600/20", 
                        border: "border-gray-500/30", 
                        text: "text-gray-400" 
                      };
                      return (
                        <span
                          key={index}
                          className={`px-4 py-2 rounded-full bg-gradient-to-r ${colors.bg} ${colors.text} 
                            text-sm font-medium border ${colors.border} backdrop-blur-sm
                            transition-all duration-300 hover:scale-105`}
                        >
                          {specialty}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-[#FFD700]">Achievements</h4>
                  <ul className="space-y-3">
                    {activeInstructor.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
                        <span className="text-white/80">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-6">
                  <a
                    href={activeInstructor.social.instagram}
                    className="text-white/60 hover:text-[#FFD700] transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href={activeInstructor.social.facebook}
                    className="text-white/60 hover:text-[#FFD700] transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href={activeInstructor.social.twitter}
                    className="text-white/60 hover:text-[#FFD700] transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>

                          {/* Booking button */}
                {/* <button className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#DAA520] text-black px-8 py-4 rounded-full overflow-hidden transition-all duration-300
                  hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] backdrop-blur-sm">
                  <span className="relative text-lg font-semibold">
                    Book a Class with {activeInstructor.name.split(" ")[0]}
                  </span>
                  <ArrowRight className="w-5 h-5 relative transition-transform duration-300 group-hover:translate-x-1" />
                </button> */}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
