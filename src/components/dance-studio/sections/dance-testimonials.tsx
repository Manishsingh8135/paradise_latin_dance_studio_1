"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, Pause, Quote } from "lucide-react";
import { HeroParticles } from "@/components/ui/hero-particles";

const testimonials = [
  {
    id: "1",
    name: "",
    role: "Student",
    quote: "The instructors here are amazing! I went from having two left feet to confidently dancing salsa in just a few months. The supportive community makes learning so much fun.",
    longQuote: "I was always hesitant to try dance classes, thinking I'd never be able to keep up. But from day one, the instructors made me feel welcome and confident. Their step-by-step approach and positive energy made learning fun and natural. Now, I can't imagine my life without dancing!",
    image: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738865409/Ripfitness/Dance-studio/testmonial-thumb-1_lionkd.png",
    video: "https://res.cloudinary.com/dyop38nwj/video/upload/v1738864745/Ripfitness/Dance-studio/12._Student_Tesitmonial_kv4sbn.mov",
    thumbnail: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738865409/Ripfitness/Dance-studio/testmonial-thumb-1_lionkd.png",
    rating: 5,
    featured: true
  },
  {
    id: "2",
    name: "",
    role: "Professional Dancer",
    quote: "Paradise Latin Dance Studio has become my second home. The energy, the people, and the instruction are unmatched anywhere else in Hawaii.",
    longQuote: "As someone who's danced professionally for years, I can truly say that Paradise Latin Dance Studio stands out. The attention to technique, the welcoming atmosphere, and the quality of instruction are exceptional. Whether you're a beginner or an advanced dancer, this is the place to grow.",
    image: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738865545/Ripfitness/Dance-studio/testimonial-thumb-2_fqsjvb.png",
    video: "https://res.cloudinary.com/dyop38nwj/video/upload/v1738864743/Ripfitness/Dance-studio/15._Student_Testimonial_Nalani_mflwcw.mov",
    thumbnail: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738865545/Ripfitness/Dance-studio/testimonial-thumb-2_fqsjvb.png",
    rating: 5,
    featured: true
  },
  {
    id: "3",
    name: "",
    role: "Dance Enthusiast",
    quote: "The passion for dance here is contagious. Every class feels like a celebration, and the progress I've made is incredible.",
    longQuote: "What sets Paradise Latin Dance apart is how they make every student feel special. The instructors remember your name, your goals, and your challenges. They adapt their teaching style to help you succeed. I've made amazing friends here, and my confidence has grown both on and off the dance floor.",
    image: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738865639/Ripfitness/Dance-studio/testimonial-thumb-3_ug0kgj.png",
    video: "https://res.cloudinary.com/dyop38nwj/video/upload/v1738864741/Ripfitness/Dance-studio/13._Student_Testimonial_p0abao.mov",
    thumbnail: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738865639/Ripfitness/Dance-studio/testimonial-thumb-3_ug0kgj.png",
    rating: 5,
    featured: false
  }
];

export function DanceTestimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const toggleVideo = () => {
    const video = document.getElementById("testimonial-video") as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTestimonialChange = (testimonial: typeof testimonials[0]) => {
    setActiveTestimonial(testimonial);
    setIsPlaying(false);
    setIsExpanded(false);
  };

  return (
    <section className="relative py-32 overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black">
        <HeroParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>
      
      {/* Animated Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5 animate-pulse z-[1]" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-white">Our Students&apos;</span>{" "}
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Real stories from our dance family that inspire and motivate.
            </p>
          </motion.div>
        </div>

        {/* Featured Video Testimonial */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
          <div className="relative aspect-[9/16] xl:aspect-[3/4] group">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-full h-full rounded-3xl overflow-hidden ring-4 ring-[#FFD700]/20"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <video
                    id="testimonial-video"
                    src={activeTestimonial.video}
                    poster={activeTestimonial.thumbnail}
                    className="w-full h-full object-cover"
                    onEnded={handleVideoEnd}
                    playsInline
                  />
                </motion.div>
              </AnimatePresence>

              {/* Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
              
              {/* Play/Pause Button */}
              <motion.button
                onClick={toggleVideo}
                className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="
                  w-24 h-24 rounded-full 
                  bg-gradient-to-r from-[#FFD700] to-[#FDB931] 
                  flex items-center justify-center 
                  shadow-[0_0_30px_rgba(255,215,0,0.3)]
                ">
                  {isPlaying ? (
                    <Pause className="w-12 h-12 text-black" />
                  ) : (
                    <Play className="w-12 h-12 text-black ml-2" />
                  )}
                </div>
              </motion.button>

              {/* Testimonial Info */}
              <motion.div 
                className="absolute inset-x-0 bottom-0 p-8 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-4">
                  <div className="ring-4 ring-[#FFD700]/30 rounded-full p-1">
                    <Image
                      src={activeTestimonial.image}
                      alt={activeTestimonial.name}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  </div>
                  {(activeTestimonial.name || activeTestimonial.role) && (
                    <div>
                      {activeTestimonial.name && (
                        <h4 className="text-xl font-bold text-[#FFD700] mb-1">{activeTestimonial.name}</h4>
                      )}
                      {activeTestimonial.role && (
                        <p className="text-white/80 text-lg">{activeTestimonial.role}</p>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Quote and Navigation */}
          <div className="space-y-12">
            {/* Main Quote */}
            <motion.div
              className="relative bg-[#FFD700]/5 rounded-3xl p-8 lg:p-12 border border-[#FFD700]/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Quote className="absolute -top-6 -left-6 w-16 h-16 text-[#FFD700]/20" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id + (isExpanded ? '-expanded' : '-collapsed')}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  <p className="text-2xl md:text-3xl text-white/90 leading-relaxed font-light">
                    {isExpanded ? activeTestimonial.longQuote : activeTestimonial.quote}
                  </p>
                  {activeTestimonial.longQuote && activeTestimonial.longQuote !== activeTestimonial.quote && (
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="mt-6 text-[#FFD700] hover:text-[#FDB931] transition-colors text-lg flex items-center gap-2"
                    >
                      {isExpanded ? 'Show less' : 'Read full story'}
                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        ↓
                      </motion.span>
                    </button>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Testimonial Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {testimonials.map((testimonial) => {
                const isActive = testimonial.id === activeTestimonial.id;
                
                return (
                  <motion.button
                    key={testimonial.id}
                    onClick={() => handleTestimonialChange(testimonial)}
                    className={`
                      group relative overflow-hidden rounded-2xl cursor-pointer
                      aspect-[4/3] border-2
                      ${isActive 
                        ? 'border-[#FFD700] shadow-[0_0_30px_rgba(255,215,0,0.2)]' 
                        : 'border-white/10 hover:border-[#FFD700]/50'
                      }
                    `}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                    
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-x-0 bottom-0 p-6 z-20">
                      <div className="flex items-center gap-4">
                        <div className={`
                          ring-2 ${isActive ? 'ring-[#FFD700]' : 'ring-[#FFD700]/20'} 
                          rounded-full p-0.5 transition-all duration-300
                          group-hover:ring-[#FFD700]/60
                        `}>
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        {(testimonial.name || testimonial.role) && (
                          <div className="text-left">
                            {testimonial.name && (
                              <h4 className="font-semibold text-[#FFD700]">{testimonial.name}</h4>
                            )}
                            {testimonial.role && (
                              <p className="text-white/80">{testimonial.role}</p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
