"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, MapPin, ArrowRight, Star } from "lucide-react";

const events = [
  {
    "id": "valentines-latin-dance-social",
    "title": "Valentines Paradise Latin Dance Social",
    "description": "Celebrate Valentine's Day with an exciting night of Latin dance, featuring a free class, social dancing, and great music by DJ Ever.",
    "image": "https://www.r1pfitness.com/cdn/shop/files/IMG-7055.heic?v=1738813593&width=600",
    "date": "February 15, 2024",
    "time": "20:30 - 00:00",
    "location": "Paradise Latin Dance Studio, 94-111 Leokane St, Waipahu, Hawaii 96797",
    "capacity": "150 people",
    "price": "$20 online / $25 at the door",
    "type": "Social",
    "instructors": ["Rico", "Mike"],
    "highlights": [
        "Free dance class at 8:30 PM",
        "Social dancing from 9:00 PM to midnight",
        "DJ Ever playing Latin beats",
        "Valentine's themed atmosphere with decorations"
    ],
    "registrationUrl": "https://www.r1pfitness.com/products/social-ticket?fbclid=PAZXh0bgNhZW0CMTEAAaZJsEGKEJC8IKKP5kTvkzEory16qN43ZuRKyg5uf4eVmVAzB4TfNF4VdGM_aem_QGMY6F_gMLnnhTLINw_BUg"
  },
  {
    "id": "salsa-beginner-cycle-2025",
    "title": "Reborn 1n Paradise - 2025 Salsa Cycle Special",
    "description": "Start your salsa journey with our special 12-credit dance class package. Perfect for beginners and those looking to establish a regular practice. Credits never expire!",
    "image": "https://res.cloudinary.com/dyop38nwj/image/upload/v1738826480/Ripfitness/Dance-studio/lds-3_jlnuvb.jpg",
    "date": "February 10, 2025",
    "time": "Flexible Schedule",
    "location": "Paradise Latin Dance Studio, 94-111 Leokane St, Waipahu, Hawaii 96797",
    "capacity": "Limited Spots",
    "price": "$225.00 (Regular $349.00)",
    "type": "Package",
    "instructors": ["Rico", "Mike"],
    "highlights": [
        "12 Dance Class Credits (Never Expire)",
        "Save $124 off regular price",
        "4 interest-free installments available",
        "Flexible scheduling options"
    ],
    "registrationUrl": "https://www.r1pfitness.com/products/early-bird-social?pr_prod_strat=e5_desc&pr_rec_id=53f2dafcc&pr_rec_pid=7161387515987&pr_ref_pid=7359436652627&pr_seq=uniform"
  }
];

const eventTypes = ["All", "Social", "Workshop", "Performance", "Camp", "Package"];

export function DanceEvents() {
  // Add custom scrollbar styles
 

  const [selectedType, setSelectedType] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(events[0]);

  const filteredEvents = selectedType === "All"
    ? events
    : events.filter(event => event.type === selectedType);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            <span className="text-white">Upcoming</span>{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">Events</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-white/80"
          >
            Join our vibrant dance community at these exciting events and workshops.
          </motion.p>
        </div>

        {/* Event Type Filter */}
        <div className="mt-12 flex justify-center flex-wrap gap-3">
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
        </div>

        {/* Events List and Details */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Event Cards */}
          <div className="
            relative grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-y-auto styled-scrollbar
            h-[700px]
            px-4 -mx-4 pb-4 pt-4 -mt-4
          ">
            {filteredEvents.map((event) => {
              const isActive = event.id === selectedEvent.id;
              
              return (
                <motion.div
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  className={`
                    group relative h-[280px] overflow-hidden rounded-2xl cursor-pointer
                    transition-all duration-500 ease-out
                    ${isActive 
                      ? 'ring-4 ring-[#FFD700] ring-offset-4 ring-offset-black shadow-[0_0_30px_rgba(255,215,0,0.3)] scale-[1.02]' 
                      : 'hover:ring-2 hover:ring-[#FFD700]/50 hover:shadow-[0_0_20px_rgba(255,215,0,0.15)]'}
                  `}
                  initial={false}
                  animate={{
                    scale: isActive ? 1.02 : 1,
                    y: isActive ? -10 : 0
                  }}
                  whileHover={{ y: -5 }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className={`
                        object-cover transition-all duration-700
                        ${isActive ? 'scale-105' : 'group-hover:scale-105'}
                        ${isActive ? 'brightness-90' : 'brightness-50 group-hover:brightness-75'}
                      `}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>

                  {/* Content Overlay */}
                  <div className="relative h-full p-6 flex flex-col justify-end">
                    {/* Event Type Badge */}
                    <div className="absolute top-4 right-4">
                      <motion.span 
                        className={`
                          px-4 py-1.5 rounded-full text-sm font-medium
                          ${isActive 
                            ? 'bg-[#FFD700] text-black' 
                            : 'bg-white/10 text-white backdrop-blur-sm'}
                        `}
                        animate={{
                          scale: isActive ? 1.05 : 1
                        }}
                      >
                        {event.type}
                      </motion.span>
                    </div>

                    {/* Event Info */}
                    <div className="space-y-4">
                      <motion.h3 
                        className={`text-2xl font-bold ${isActive ? 'text-[#FFD700]' : 'text-white group-hover:text-[#FFD700]/90'}`}
                        animate={{ scale: isActive ? 1.05 : 1 }}
                      >
                        {event.title}
                      </motion.h3>

                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className={`w-4 h-4 ${isActive ? 'text-[#FFD700]' : 'text-white/80'}`} />
                          <span className={isActive ? 'text-[#FFD700]' : 'text-white/80'}>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className={`w-4 h-4 ${isActive ? 'text-[#FFD700]' : 'text-white/80'}`} />
                          <span className={isActive ? 'text-[#FFD700]' : 'text-white/80'}>{event.time}</span>
                        </div>
                      </div>

                      {/* Selection Indicator */}
                      <motion.div 
                        className="flex items-center gap-2 text-sm font-medium"
                        animate={{ 
                          opacity: isActive ? 1 : 0,
                          y: isActive ? 0 : 10
                        }}
                      >
                        <span className="text-[#FFD700]">Selected Event</span>
                        <ArrowRight className="w-4 h-4 text-[#FFD700]" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Active State Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl ring-2 ring-[#FFD700] pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.95
                    }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Event Details */}
          <div className="lg:pl-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedEvent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8 bg-[#FFD700]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#FFD700]/10"
              >
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
                    {selectedEvent.title}
                  </h3>
                  <p className="mt-4 text-lg text-white/80 leading-relaxed">
                    {selectedEvent.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="text-[#FFD700]">Date</div>
                    <div className="flex items-center gap-2 text-white">
                      <Calendar className="w-5 h-5 text-[#FFD700]" />
                      <span>{selectedEvent.date}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[#FFD700]">Time</div>
                    <div className="flex items-center gap-2 text-white">
                      <Clock className="w-5 h-5 text-[#FFD700]" />
                      <span>{selectedEvent.time}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[#FFD700]">Location</div>
                    <div className="flex items-center gap-2 text-white">
                      <MapPin className="w-5 h-5 text-[#FFD700]" />
                      <span>{selectedEvent.location}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[#FFD700]">Price</div>
                    <div className="flex items-center gap-2 text-white">
                      <Star className="w-5 h-5 text-[#FFD700]" />
                      <span>{selectedEvent.price}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-[#FFD700]">Event Highlights</h4>
                  <ul className="grid grid-cols-2 gap-3">
                    {selectedEvent.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
                        <span className="text-white/80">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-[#FFD700]">Instructors</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent.instructors.map((instructor, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-full bg-[#FFD700]/10 text-white text-sm font-medium border border-[#FFD700]/20"
                      >
                        {instructor}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Registration Button */}
                <div className="mt-8">
                  <a
                    href={selectedEvent.registrationUrl}
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
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
