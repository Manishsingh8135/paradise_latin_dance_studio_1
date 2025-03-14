"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Star, ArrowRight } from "lucide-react";
import { DanceEvent } from "../types/events-types";

interface EventDetailsProps {
  event: DanceEvent;
}

export function EventDetails({ event }: EventDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 bg-[#FFD700]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#FFD700]/10 relative overflow-hidden"
    >
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-12 h-12 opacity-30">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2V18M2 2H18M2 2L18 18" stroke="#FFD700" strokeWidth="3" strokeOpacity="0.6"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-12 h-12 opacity-30">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M46 46V30M46 46H30M46 46L30 30" stroke="#FFD700" strokeWidth="3" strokeOpacity="0.6"/>
        </svg>
      </div>
      
      {/* Event Title and Description */}
      <div>
        <h3 className="text-3xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
          {event.title}
        </h3>
        <p className="mt-4 text-lg text-white/80 leading-relaxed">
          {event.description}
        </p>
      </div>

      {/* Event Details Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <div className="text-[#FFD700]">Date</div>
          <div className="flex items-center gap-2 text-white">
            <Calendar className="w-5 h-5 text-[#FFD700]" />
            <span>{event.date}</span>
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-[#FFD700]">Time</div>
          <div className="flex items-center gap-2 text-white">
            <Clock className="w-5 h-5 text-[#FFD700]" />
            <span>{event.time}</span>
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-[#FFD700]">Location</div>
          <div className="flex items-center gap-2 text-white">
            <MapPin className="w-5 h-5 text-[#FFD700]" />
            <span>{event.location}</span>
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-[#FFD700]">Price</div>
          <div className="flex items-center gap-2 text-white">
            <Star className="w-5 h-5 text-[#FFD700]" />
            <span>{event.price}</span>
          </div>
        </div>
      </div>

      {/* Event Highlights */}
      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-[#FFD700]">Event Highlights</h4>
        <ul className="grid grid-cols-2 gap-3">
          {event.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700] mt-2" />
              <span className="text-white/80">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Instructors */}
      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-[#FFD700]">Instructors</h4>
        <div className="flex flex-wrap gap-2">
          {event.instructors.map((instructor, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-[#FFD700]/10 text-white text-sm font-medium border border-[#FFD700]/20 hover:border-[#FFD700]/40 hover:bg-[#FFD700]/15 transition-colors duration-300"
            >
              {instructor}
            </span>
          ))}
        </div>
      </div>

      {/* Registration Button */}
      <div className="mt-8">
        <a
          href={event.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full group relative inline-flex items-center justify-center gap-4 px-8 py-4 rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]"
        >
          {/* Button Background with hover effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FDB931] opacity-100 group-hover:opacity-90 transition-opacity duration-500" />
          
          {/* Button Content */}
          <span className="relative text-lg font-bold text-black group-hover:scale-105 transition-transform duration-500">Register Now</span>
          <ArrowRight className="relative w-5 h-5 text-black transition-all duration-500 transform group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
} 