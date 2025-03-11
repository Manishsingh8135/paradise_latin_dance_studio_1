"use client";

import { useState, useRef, useEffect } from "react";
import { motion, MotionValue, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  rating: number;
  imageSrc: string;
}

interface RegalTestimonialProps {
  scrollYProgress: MotionValue<number>;
}

export function RegalTestimonial({ scrollYProgress }: RegalTestimonialProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  // Sample testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Paradise Dance Studio changed my life completely. From being someone with two left feet to performing in showcases, the transformation has been incredible. The instructors have a magical way of making complex moves seem effortless!",
      author: "Sophia Chen",
      role: "Student for 3 years",
      rating: 5,
      imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      text: "As someone who was terrified of dancing in public, I never imagined I'd be performing on stage. The supportive environment at Paradise Dance Studio gave me the confidence I needed. Their teaching approach is simply unmatched!",
      author: "Marcus Johnson",
      role: "Student for 2 years",
      rating: 5,
      imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      text: "My husband and I wanted to learn a proper dance for our wedding. Not only did we nail our first dance, but we've continued lessons for years after! The studio has become our second home and the instructors like family.",
      author: "Elena & David Rivera",
      role: "Students for 4 years",
      rating: 5,
      imageSrc: "https://images.unsplash.com/photo-1623330188314-8f4645626731?w=200&h=200&auto=format&fit=crop&q=80"
    }
  ];

  // Auto-advancing carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 }
      }
    })
  };

  return (
    <motion.div 
      ref={ref}
      className="relative w-full py-20 overflow-hidden"
      style={{ y: containerParallax }}
    >
      {/* Royal background elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-[#FFD700]/5 to-transparent opacity-60"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Corner ornaments */}
          {[0, 1, 2, 3].map((i) => (
            <div 
              key={i}
              className="absolute w-24 h-24 opacity-30"
              style={{
                top: i < 2 ? 20 : 'auto',
                bottom: i >= 2 ? 20 : 'auto',
                left: i % 2 === 0 ? 20 : 'auto',
                right: i % 2 === 1 ? 20 : 'auto',
              }}
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d={
                    i === 0 ? "M90 90L90 10L10 10" : 
                    i === 1 ? "M10 90L10 10L90 10" : 
                    i === 2 ? "M90 10L90 90L10 90" : 
                    "M10 10L10 90L90 90"
                  }
                  stroke="#FFD700" 
                  strokeWidth="1" 
                  strokeOpacity="0.6"
                  strokeDasharray="2 4"
                />
                <circle 
                  cx={i % 2 === 0 ? 10 : 90} 
                  cy={i < 2 ? 10 : 90} 
                  r="4" 
                  fill="#FFD700" 
                  fillOpacity="0.3"
                />
              </svg>
            </div>
          ))}
          
          {/* Floating quote marks */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[#FFD700]/20"
              style={{
                top: `${30 + Math.random() * 40}%`,
                left: `${10 + Math.random() * 80}%`,
                transform: `rotate(${Math.random() * 40 - 20}deg)`,
                fontSize: `${3 + Math.random() * 2}rem`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              "
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-white">
          <span className="text-[#FFD700]">Royal </span>Testimonials
        </h3>
        
        {/* Main testimonial carousel */}
        <div className="relative">
          {/* Testimonial slides */}
          <div className="relative h-[450px] md:h-[350px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                  {/* Profile image with royal frame */}
                  <div className="relative flex-shrink-0">
                    {/* Decorative frame */}
                    <div className="absolute inset-0 w-[200px] h-[200px] border-[3px] border-[#FFD700]/30 rounded-xl -rotate-3"></div>
                    <div className="absolute inset-0 w-[200px] h-[200px] border-[1px] border-[#FFD700]/80 rounded-xl rotate-3"></div>
                    
                    {/* Image */}
                    <div className="relative w-[180px] h-[180px] mx-auto overflow-hidden rounded-lg shadow-xl transform rotate-1">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700]/20 via-transparent to-[#FFD700]/20 z-10 mix-blend-overlay"></div>
                      <Image 
                        src={testimonials[currentIndex].imageSrc} 
                        alt={testimonials[currentIndex].author}
                        width={180}
                        height={180}
                        className="object-cover w-full h-full" 
                      />
                    </div>
                    
                    {/* Star rating */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex bg-black/70 rounded-full px-3 py-1 border border-[#FFD700]/30 shadow-lg">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" 
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Testimonial content */}
                  <div className="relative flex-1 max-w-2xl">
                    {/* Quote icon */}
                    <div className="absolute -top-8 -left-2 text-[#FFD700]/30">
                      <Quote className="w-12 h-12" />
                    </div>
                    
                    {/* Testimonial card with royal styling */}
                    <div className="relative bg-gradient-to-b from-black/80 to-black/50 p-8 rounded-xl border border-[#FFD700]/20 shadow-xl">
                      {/* Glowing border effect on hover */}
                      <div className="absolute inset-0 rounded-xl border border-[#FFD700]/0 hover:border-[#FFD700]/30 transition-colors duration-700 pointer-events-none"></div>
                      
                      {/* Corner flairs */}
                      {[0, 1, 2, 3].map((i) => (
                        <div 
                          key={i}
                          className="absolute w-5 h-5"
                          style={{
                            top: i < 2 ? -2 : 'auto',
                            bottom: i >= 2 ? -2 : 'auto',
                            left: i % 2 === 0 ? -2 : 'auto',
                            right: i % 2 === 1 ? -2 : 'auto',
                            borderTopLeftRadius: i === 0 ? '50%' : '0',
                            borderTopRightRadius: i === 1 ? '50%' : '0',
                            borderBottomLeftRadius: i === 2 ? '50%' : '0',
                            borderBottomRightRadius: i === 3 ? '50%' : '0',
                            borderTop: i < 2 ? '2px solid rgba(255, 215, 0, 0.3)' : 'none',
                            borderBottom: i >= 2 ? '2px solid rgba(255, 215, 0, 0.3)' : 'none',
                            borderLeft: i % 2 === 0 ? '2px solid rgba(255, 215, 0, 0.3)' : 'none',
                            borderRight: i % 2 === 1 ? '2px solid rgba(255, 215, 0, 0.3)' : 'none',
                          }}
                        />
                      ))}
                      
                      {/* Testimonial text with animated reveal */}
                      <motion.p
                        className="text-white/90 text-lg md:text-xl italic mb-6 relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      >
                        "{testimonials[currentIndex].text}"
                      </motion.p>
                      
                      {/* Divider with royal styling */}
                      <div className="flex items-center my-4">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent"></div>
                      </div>
                      
                      {/* Author info with elegant styling */}
                      <motion.div
                        className="flex flex-col items-end"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <h4 className="text-[#FFD700] font-semibold text-xl">
                          {testimonials[currentIndex].author}
                        </h4>
                        <p className="text-white/70 text-sm">
                          {testimonials[currentIndex].role}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Royal navigation controls */}
          <div className="flex justify-center mt-10 gap-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-black/30 border border-[#FFD700]/30 text-white hover:bg-black/50 hover:border-[#FFD700]/50 transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
              <div className="absolute inset-0 rounded-full bg-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
            </button>
            
            {/* Indicator dots */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-[#FFD700]' : 'bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[#FFD700]/30"
                      animate={{ scale: [1, 1.8, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </button>
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-black/30 border border-[#FFD700]/30 text-white hover:bg-black/50 hover:border-[#FFD700]/50 transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
              <div className="absolute inset-0 rounded-full bg-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 