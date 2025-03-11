"use client";

import { useRef, useEffect } from "react";
import { motion, MotionValue, useTransform, useInView } from "framer-motion";
import { Users, Star, Clock, Music } from "lucide-react";

interface Stat {
  id: string;
  label: string;
  value: string;
  icon: 'users' | 'star' | 'clock' | 'music';
  color: string;
}

interface RoyalStatisticsProps {
  scrollYProgress: MotionValue<number>;
}

export function RoyalStatistics({ scrollYProgress }: RoyalStatisticsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const containerParallax = useTransform(scrollYProgress, [0, 1], [0, -70]);
  
  // Stats data
  const statistics: Stat[] = [
    {
      id: "students",
      label: "Happy Students",
      value: "1,500+",
      icon: "users",
      color: "#FFD700"
    },
    {
      id: "satisfaction",
      label: "Satisfaction Rate",
      value: "99%",
      icon: "star",
      color: "#FF5E5E"
    },
    {
      id: "experience",
      label: "Years Experience",
      value: "15+",
      icon: "clock",
      color: "#64CCC5"
    },
    {
      id: "styles",
      label: "Dance Styles",
      value: "12",
      icon: "music",
      color: "#AA77FF"
    }
  ];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'users':
        return <Users className="w-full h-full" />;
      case 'star':
        return <Star className="w-full h-full" />;
      case 'clock':
        return <Clock className="w-full h-full" />;
      case 'music':
        return <Music className="w-full h-full" />;
      default:
        return <Star className="w-full h-full" />;
    }
  };

  // Counter animation
  const AnimatedCounter = ({ value, inView }: { value: string; inView: boolean }) => {
    const counterRef = useRef<HTMLSpanElement>(null);
    
    useEffect(() => {
      if (!counterRef.current || !inView) return;
      
      const target = parseInt(value.replace(/,/g, '').replace(/\+/g, '').replace(/%/g, ''));
      const suffix = value.includes('+') ? '+' : value.includes('%') ? '%' : '';
      const hasComma = value.includes(',');
      
      let startValue = 0;
      const duration = 2500;
      const step = timestamp => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const easedProgress = easeOutQuart(progress);
        const currentValue = Math.floor(easedProgress * target);
        
        if (counterRef.current) {
          let formatted = currentValue.toString();
          if (hasComma && formatted.length > 3) {
            formatted = formatted.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
          counterRef.current.textContent = `${formatted}${suffix}`;
        }
        
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      
      let start: number | null = null;
      requestAnimationFrame(step);
    }, [inView, value]);
    
    // Easing function for smooth counter animation
    const easeOutQuart = (x: number): number => {
      return 1 - Math.pow(1 - x, 4);
    };
    
    return <span ref={counterRef}>0</span>;
  };

  return (
    <motion.div 
      ref={ref}
      className="relative py-12 w-full"
      style={{ y: containerParallax }}
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Decorative background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#FFD700]/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-[#FFD700]/10 rounded-full"></div>
        <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-[#FFD700]/5 rounded-full blur-xl"></div>
        
        {/* Particle floating effect */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#FFD700]/30"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <h2 className="relative mb-10 max-w-md mx-auto md:max-w-lg lg:max-w-2xl">
        <div className="absolute -left-2 md:-left-3 top-0 w-1 md:w-1.5 h-full bg-[#FFD700]"></div>
        <div className="text-lg md:text-xl text-[#FFD700] font-medium mb-1 ml-2 md:ml-3">EXCEPTIONAL NUMBERS</div>
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white ml-2 md:ml-3">
          By The Numbers
        </div>
      </h2>
      
      <div className="flex flex-wrap justify-center items-stretch gap-4 md:gap-8 max-w-6xl mx-auto px-4">
        {statistics.map((stat, index) => (
          <motion.div
            key={stat.id}
            className="flex-1 min-w-[240px] max-w-xs"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
          >
            <div className="relative h-full bg-gradient-to-br from-black/60 to-black/80 rounded-xl border border-[#FFD700]/20 shadow-xl p-6 overflow-hidden group">
              {/* Border glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 rounded-xl border-2 border-[#FFD700]/30 blur"></div>
              </div>
              
              {/* Diagonal sparkle line */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                  className="absolute w-[200%] h-[200%] -top-[100%] -left-[100%]"
                  style={{
                    background: `linear-gradient(45deg, transparent 45%, ${stat.color}20 49%, ${stat.color}40 50%, ${stat.color}20 51%, transparent 55%)`,
                    backgroundSize: '250% 250%',
                  }}
                  animate={{
                    backgroundPosition: ['200% 200%', '-50% -50%'],
                  }}
                  transition={{
                    duration: 8,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>
              
              {/* Icon container with glow effect */}
              <div className="relative mb-6 flex justify-center">
                <div
                  className="relative w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}10` }}
                >
                  {/* Pulsing background */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: `${stat.color}30` }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Icon */}
                  <div className="relative z-10" style={{ color: stat.color }}>
                    {getIcon(stat.icon)}
                  </div>
                </div>
                
                {/* Halo glow effect */}
                <div 
                  className="absolute inset-0 blur-lg -z-10 opacity-60 rounded-full"
                  style={{ backgroundColor: `${stat.color}20` }}
                />
              </div>
              
              {/* Value with animated counter */}
              <div className="relative text-center mb-3">
                <div 
                  className="text-4xl md:text-5xl font-bold" 
                  style={{ color: stat.color }}
                >
                  <AnimatedCounter value={stat.value} inView={isInView} />
                </div>
                
                {/* Decorative underline */}
                <motion.div
                  className="h-px w-16 mx-auto mt-3"
                  style={{ backgroundColor: stat.color }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 64 } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </div>
              
              {/* Label with royal styling */}
              <div className="text-center text-white/80 font-medium text-base md:text-lg mt-4">
                {stat.label}
              </div>
              
              {/* Royal corner ornaments */}
              {[0, 1].map((i) => (
                <div 
                  key={i}
                  className="absolute w-8 h-8 opacity-80 pointer-events-none"
                  style={{
                    top: i === 0 ? 4 : 'auto',
                    bottom: i === 1 ? 4 : 'auto',
                    right: 4,
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d={i === 0 ? "M1 1L23 1L23 5L19 5L19 9L15 9L15 13L11 13L11 17L7 17L7 21L3 21L1 23" 
                          : "M1 23L1 1L5 1L5 5L9 5L9 9L13 9L13 13L17 13L17 17L21 17L21 21L23 23"}
                      stroke={stat.color}
                      strokeWidth="0.5"
                      strokeOpacity="0.6"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Royal filigree divider - reduced margin-top */}
      <div className="mt-12 flex justify-center">
        <div className="relative w-full max-w-md h-px bg-gradient-to-r from-transparent via-[#FFD700]/40 to-transparent">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/50 rounded-full border border-[#FFD700]/30">
            <div className="w-3 h-3 bg-[#FFD700] rounded-full"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 