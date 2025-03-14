"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroParticles } from "@/components/ui/hero-particles";
import { EventCard } from "./event-card";
import { EventDetails } from "./event-details";
import { danceEvents, eventTypes, eventsSection } from "../data/events-data";
import { EventsSectionProps } from "../types/events-types";

export function EventsSection({
  title = eventsSection.title,
  subtitle = eventsSection.subtitle,
  description = eventsSection.description,
  className = "",
}: EventsSectionProps) {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(danceEvents[0]);

  const filteredEvents = selectedType === "All"
    ? danceEvents
    : danceEvents.filter(event => event.type === selectedType);

  // Custom scrollbar styles
  const scrollbarStyles = `
    .styled-scrollbar::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    .styled-scrollbar::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 10px;
    }
    .styled-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(255, 215, 0, 0.2);
      border-radius: 10px;
    }
    .styled-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 215, 0, 0.4);
    }
  `;

  return (
    <section className={`relative py-32 overflow-hidden ${className}`}>
      {/* Add scrollbar styles */}
      <style jsx global>{scrollbarStyles}</style>
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black">
        {/* Container for HeroParticles */}
        <div className="absolute inset-0 bg-black">
          <HeroParticles />
        </div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="mb-6 flex items-center justify-center gap-3"
          >
            <div className="h-px w-12 bg-gradient-to-r from-[#FFD700] to-transparent" />
            <span className="text-[#FFD700] uppercase tracking-widest text-sm font-medium">
              {subtitle}
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-[#FFD700] to-transparent" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Upcoming
            </span>{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-white/60 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>

        {/* Event Type Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center flex-wrap gap-3"
        >
          {eventTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`
                px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300
                ${selectedType === type
                  ? "bg-gradient-to-r from-[#FFD700] to-[#FDB931] text-black shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                  : "bg-[#FFD700]/10 text-white hover:bg-[#FFD700]/20 hover:shadow-[0_0_15px_rgba(255,215,0,0.15)]"
                }
              `}
            >
              {type}
            </button>
          ))}
        </motion.div>

        {/* Events List and Details */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Event Cards */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-y-auto styled-scrollbar h-[700px] px-4 -mx-4 pb-4 pt-4 -mt-4">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  isActive={event.id === selectedEvent.id}
                  onClick={() => setSelectedEvent(event)}
                />
              ))
            ) : (
              <div className="col-span-2 flex items-center justify-center h-full">
                <p className="text-white/60 text-lg">No events found for this category.</p>
              </div>
            )}
          </div>

          {/* Event Details */}
          <div className="lg:pl-8">
            <AnimatePresence mode="wait">
              {selectedEvent && (
                <EventDetails key={selectedEvent.id} event={selectedEvent} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
} 