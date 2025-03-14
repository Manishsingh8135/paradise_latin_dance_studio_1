"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Globe, Calendar, Award, Quote, MapPin } from "lucide-react";
import { InstructorDetailsProps } from "../types/instructors-types";
import { styleColors } from "../data/instructors-data";

export function InstructorDetails({ instructor }: InstructorDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Instructor Header */}
      <div className="space-y-3">
        <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
          {instructor.name}
        </h3>
        
        <div className="flex flex-wrap items-center gap-2 text-white/70">
          <span className="text-xl">{instructor.role}</span>
          
          {instructor.location && (
            <div className="flex items-center gap-1.5 ml-1 text-sm text-white/60">
              <MapPin className="w-3.5 h-3.5 text-[#FFD700]/70" />
              <span>{instructor.location}</span>
            </div>
          )}
        </div>
        
        {instructor.experience && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FFD700]/10 border border-[#FFD700]/20">
            <Calendar className="w-4 h-4 text-[#FFD700]" />
            <span className="text-sm text-white/80">{instructor.experience} Experience</span>
          </div>
        )}
      </div>
      
      {/* Quote */}
      {instructor.quote && (
        <div className="relative pl-6 border-l-2 border-[#FFD700]/30">
          <Quote className="absolute top-0 left-3 -translate-x-1/2 -translate-y-1/3 w-6 h-6 text-[#FFD700]/40" />
          <p className="text-lg italic text-white/80">&ldquo;{instructor.quote}&rdquo;</p>
        </div>
      )}
      
      {/* Bio */}
      <div className="space-y-2">
        <h4 className="text-xl font-semibold text-[#FFD700]">About</h4>
        <p className="text-lg text-white/80 leading-relaxed">{instructor.bio}</p>
      </div>
      
      {/* Specialties */}
      <div className="space-y-3">
        <h4 className="text-xl font-semibold text-[#FFD700]">Specialties</h4>
        <div className="flex flex-wrap gap-2">
          {instructor.specialties.map((specialty, index) => {
            const colors = styleColors[specialty];
            return (
              <div 
                key={index}
                className={`
                  px-4 py-2 rounded-full 
                  bg-gradient-to-r ${colors.bg} ${colors.text} 
                  border ${colors.border} backdrop-blur-sm
                  transition-all duration-300 hover:scale-105
                `}
              >
                <span className="text-sm font-medium">{specialty}</span>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Achievements */}
      <div className="space-y-3">
        <h4 className="text-xl font-semibold text-[#FFD700]">Achievements</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {instructor.achievements.map((achievement, index) => (
            <div key={index} className="flex items-start gap-2 p-3 rounded-lg bg-white/5 border border-white/10">
              <Award className="w-5 h-5 mt-0.5 text-[#FFD700]" />
              <span className="text-white/80">{achievement}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Certifications */}
      {instructor.certifications && instructor.certifications.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-xl font-semibold text-[#FFD700]">Certifications</h4>
          <div className="flex flex-wrap gap-2">
            {instructor.certifications.map((certification, index) => (
              <span 
                key={index} 
                className="px-3 py-1.5 rounded-lg text-sm text-white/80 bg-white/5 border border-white/10"
              >
                {certification}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* Social Links */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        {instructor.social.instagram && (
          <a
            href={instructor.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#FFD700]/10 text-white/70 hover:text-[#FFD700] hover:bg-[#FFD700]/20 transition-colors"
            aria-label={`${instructor.name}'s Instagram`}
          >
            <Instagram className="w-5 h-5" />
          </a>
        )}
        
        {instructor.social.facebook && (
          <a
            href={instructor.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#FFD700]/10 text-white/70 hover:text-[#FFD700] hover:bg-[#FFD700]/20 transition-colors"
            aria-label={`${instructor.name}'s Facebook`}
          >
            <Facebook className="w-5 h-5" />
          </a>
        )}
        
        {instructor.social.twitter && (
          <a
            href={instructor.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#FFD700]/10 text-white/70 hover:text-[#FFD700] hover:bg-[#FFD700]/20 transition-colors"
            aria-label={`${instructor.name}'s Twitter`}
          >
            <Twitter className="w-5 h-5" />
          </a>
        )}
        
        {instructor.social.website && (
          <a
            href={instructor.social.website}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#FFD700]/10 text-white/70 hover:text-[#FFD700] hover:bg-[#FFD700]/20 transition-colors"
            aria-label={`${instructor.name}'s Website`}
          >
            <Globe className="w-5 h-5" />
          </a>
        )}
        
        {/* Studio Links */}
        <div className="flex gap-2 ml-auto">
          {instructor.social.paradiseDance && (
            <a
              href={instructor.social.paradiseDance}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#FFD700]/10 to-[#FDB931]/5 text-white/80 hover:text-white border border-[#FFD700]/30 hover:border-[#FFD700]/50 transition-colors"
            >
              <span className="text-sm">Paradise Dance</span>
            </a>
          )}
          
          {instructor.social.ripFitness && (
            <a
              href={instructor.social.ripFitness}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#FFD700]/10 to-[#FDB931]/5 text-white/80 hover:text-white border border-[#FFD700]/30 hover:border-[#FFD700]/50 transition-colors"
            >
              <span className="text-sm">R1P Fitness</span>
            </a>
          )}
        </div>
      </div>
      
      {/* Booking Button */}
      <button className="w-full group relative inline-flex items-center justify-center gap-4 bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#DAA520] text-black px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] backdrop-blur-sm">
        <span className="relative text-lg font-semibold">
          Book a Class with {instructor.name.split(" ")[0]}
        </span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="relative transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-[#FFD700]/0 via-[#FFD700]/20 to-[#FFD700]/0 transition-transform duration-700 ease-in-out" />
      </button>
    </motion.div>
  );
} 