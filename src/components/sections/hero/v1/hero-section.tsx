"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { HeroParticles } from "@/components/ui/hero-particles";
import { HeroSectionProps } from "../types/hero-types";
import { heroMedia } from "../data/hero-data";

export function HeroSection({
  media = heroMedia,
  className = "",
  showParticles = true,
}: HeroSectionProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Force video play on mount
  useEffect(() => {
    if (videoRef.current) {
      const playVideo = async () => {
        try {
          // Set muted to false before playing
          if (videoRef.current) {
            videoRef.current.muted = false;
            await videoRef.current.play();
          }
        } catch {
          // If autoplay with sound fails (common in browsers), try with mute
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            try {
              await videoRef.current.play();
            } catch {
              // Video playback failed even with mute
            }
          }
        }
      };
      playVideo();
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16 md:pt-20 ${className}`}
    >
      {/* Particles Background */}
      {showParticles && (
        <div className="absolute inset-0 z-0">
          <HeroParticles />
        </div>
      )}
      
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden bg-black/50 z-0">
        {/* Glowing Orbs */}
        <div className="absolute inset-0 opacity-50">
          {/* Large center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-[#FFD700]/20 via-transparent to-transparent blur-3xl" />
          
          {/* Additional glows */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-[#FDB931]/15 via-transparent to-transparent blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] rounded-full bg-gradient-radial from-[#DAA520]/15 via-transparent to-transparent blur-3xl animate-float-slow" />
        </div>

        {/* Floating Bubbles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-radial from-white/10 via-white/5 to-transparent blur-xl"
            style={{
              width: Math.random() * 200 + 100 + 'px',
              height: Math.random() * 200 + 100 + 'px',
            }}
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              scale: 0.8,
              opacity: 0.3
            }}
            animate={{
              y: ['-20%', '120%'],
              scale: [0.8, 1.2],
              opacity: [0.3, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Video Container */}
      <div className="absolute inset-0">
        {/* Video Wrapper with Padding */}
        <div className="absolute inset-0 p-2 sm:p-4 md:p-8 lg:p-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] backdrop-blur-sm"
          >
            {/* Video */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden bg-black/20">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  filter: 'brightness(1.2) saturate(1.4) contrast(1.05)',
                }}
              >
                <source src={media.src} type="video/mp4" />
              </video>

              {/* Video Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/30" />
            </div>

            {/* Controls */}
            <div className="absolute bottom-6 right-6 flex items-center gap-4">
              {/* Play/Pause Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlayPause}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                {isPaused ? (
                  <Play className="w-5 h-5" />
                ) : (
                  <Pause className="w-5 h-5" />
                )}
              </motion.button>

              {/* Mute/Unmute Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMute}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 