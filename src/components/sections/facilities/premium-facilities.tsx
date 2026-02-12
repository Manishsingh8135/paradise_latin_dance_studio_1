"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { facilities, FacilityType, FacilityCategory } from './data/facilities-data';
import { cn } from '@/lib/utils';
import { Clock } from 'lucide-react';
import { HeroParticles } from '../../ui/hero-particles';

const getBadgeStyles = (type: FacilityType) => {
  switch (type) {
    case 'Premium':
      return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'Elite':
      return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    case 'Standard':
      return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    case 'Community':
      return 'bg-green-500/20 text-green-400 border-green-500/30'; // Fresh green for community
  }
};

const getCategoryStyles = (category: FacilityCategory) => {
  switch (category) {
    case 'Dance Studio':
      return 'bg-red-500/20 text-red-400';
    case 'Practice':
      return 'bg-indigo-500/20 text-indigo-400';
    case 'Social':
      return 'bg-green-500/20 text-green-400';
    case 'Wellness':
      return 'bg-teal-500/20 text-teal-400';
    case 'Events & Activities':
      return 'bg-lime-500/20 text-lime-400';
    default:
      return 'bg-white/10 text-white/60';
  }
};

export const PremiumFacilities = () => {
  const [hoveredFacility, setHoveredFacility] = useState<string | null>(null);

  return (
    <div className="relative py-24 overflow-hidden bg-black">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <HeroParticles />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10">
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent font-medium">
                Premium Experience
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mt-6 mb-6"
          >
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              World Class
            </span>{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
              Facilities
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg mb-8"
          >
            Experience premium dance spaces designed for every part of your Latin dance journey.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {facilities.map((facility) => {
            const isHovered = hoveredFacility === facility.id;
            
            return (
              <motion.div
                key={facility.id}
                onMouseEnter={() => setHoveredFacility(facility.id)}
                onMouseLeave={() => setHoveredFacility(null)}
                className={cn(
                  'relative rounded-3xl overflow-hidden',
                  'cursor-pointer',
                  'border border-white/10 hover:border-[#FFD700]/30 transition-colors duration-300',
                  'group hover:shadow-[0_0_50px_-12px] hover:shadow-[#FFD700]/20',
                  facility.size === 'large' && 'lg:col-span-2 lg:row-span-2',
                  facility.size === 'medium' && 'lg:col-span-1 lg:row-span-2',
                  facility.size === 'small' && 'lg:col-span-1 lg:row-span-1'
                )}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                <div className="absolute -inset-[1px] bg-gradient-to-b from-transparent via-[#FFD700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                {/* Background Image */}
                {facility.image && (
                  <div className="absolute inset-0">
                    <Image
                      src={facility.image}
                      alt={facility.title || 'Facility Image'}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
                  </div>
                )}

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2">
                      {facility.type && (
                        <span className={cn(
                          "px-2 py-1 rounded-full text-xs font-medium border",
                          getBadgeStyles(facility.type)
                        )}>
                          {facility.type}
                        </span>
                      )}
                      {facility.category && (
                        <span className={cn(
                          "px-2 py-1 rounded-full text-xs font-medium",
                          getCategoryStyles(facility.category)
                        )}>
                          {facility.category}
                        </span>
                      )}
                    </div>

                    {facility.title && (
                      <motion.h3 
                        className="text-2xl font-bold text-white"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {facility.title}
                      </motion.h3>
                    )}
                  </div>

                  <motion.div 
                    className={cn(
                      "space-y-4",
                      "transform transition-all duration-300",
                      "group-hover:translate-y-0 group-hover:opacity-100",
                      isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    )}
                  >
                    {facility.description && (
                      <p className="text-white/80 text-sm">
                        {facility.description}
                      </p>
                    )}
                    
                    {/* Features */}
                    {facility.features && facility.features.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {facility.features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Stats and Availability */}
                    <div className="flex flex-wrap gap-3">
                      {facility.stats && facility.stats.length > 0 && facility.stats.map((stat, index) => (
                        stat.value && stat.label && (
                          <div key={index} className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-lg">
                            <div className="text-[#FFD700] font-bold">{stat.value}</div>
                            <div className="text-white/40 text-sm">{stat.label}</div>
                          </div>
                        )
                      ))}
                      {facility.availability?.weekdays && (
                        <div className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-lg flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#FFD700]" />
                          <span className="text-white/80 text-sm">{facility.availability.weekdays}</span>
                        </div>
                      )}
                    </div>

                    {/* Additional Info */}
                    <div className="flex flex-wrap gap-3">
                      {facility.capacity && (
                        <div className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-lg">
                          <div className="text-[#FFD700] font-bold">{facility.capacity}</div>
                          <div className="text-white/40 text-sm">Capacity</div>
                        </div>
                      )}
                      {facility.area && (
                        <div className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-lg">
                          <div className="text-[#FFD700] font-bold">{facility.area}</div>
                          <div className="text-white/40 text-sm">Area</div>
                        </div>
                      )}
                    </div>
                  </motion.div>

                  <motion.div 
                    className={cn(
                      "absolute top-4 right-4",
                      "transform transition-all duration-300",
                      "group-hover:scale-110 group-hover:opacity-100",
                      isHovered ? "scale-110 opacity-100" : "scale-90 opacity-0"
                    )}
                  >
                    {/* <Maximize2 className="text-white w-6 h-6" /> */}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
