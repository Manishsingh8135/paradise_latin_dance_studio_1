"use client";

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play, Pause, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { MediaItem } from '../types/media-types';

interface MediaCardProps {
  item: MediaItem;
}

export function MediaCard({ item }: MediaCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current && item.type === 'video') {
          if (entry.isIntersecting) {
            videoRef.current.play()
              .then(() => setIsPlaying(true))
              .catch((error) => console.error('Error playing video:', error));
          } else {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      },
      { threshold: 0.6 } // 60% visibility threshold
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [item.type]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const sizeClasses = {
    large: 'md:col-span-4 md:row-span-3 aspect-[16/9]',
    medium: 'md:col-span-2 md:row-span-3 aspect-[9/16]',
    small: 'md:col-span-2 md:row-span-2 aspect-square'
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${sizeClasses[item.size]} rounded-xl lg:rounded-2xl overflow-hidden group`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Border */}
      <div className="absolute inset-0 p-[1px] rounded-xl lg:rounded-2xl bg-gradient-to-br from-white/30 via-white/20 to-white/5">
        <div className="absolute inset-0 rounded-xl lg:rounded-2xl bg-black/90" />
      </div>

      {/* Media Content */}
      <div className="relative w-full h-full rounded-xl lg:rounded-2xl overflow-hidden">
        {item.type === 'video' ? (
          <>
            <video
              ref={videoRef}
              loop
              muted={isMuted}
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-[1.01] transition-transform duration-700 group-hover:scale-[1.05]"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              src={item.src}
            />
            <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-4 p-6"
              >
                {/* Play/Pause Button */}
                <motion.button
                  onClick={togglePlay}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 rounded-full bg-black/50 flex items-center justify-center border border-[#FFD700]/30 hover:bg-[#FFD700]/40 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-white" />
                  ) : (
                    <Play className="w-6 h-6 text-white ml-1" />
                  )}
                </motion.button>

                {/* Mute/Unmute Button */}
                <motion.button
                  onClick={toggleMute}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 rounded-full bg-black/50 flex items-center justify-center border border-[#FFD700]/30 hover:bg-[#FFD700]/40 transition-colors"
                >
                  {isMuted ? (
                    <VolumeX className="w-6 h-6 text-white" />
                  ) : (
                    <Volume2 className="w-6 h-6 text-white" />
                  )}
                </motion.button>
              </motion.div>
            </div>
          </>
        ) : (
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-cover scale-[1.01] transition-transform duration-700 group-hover:scale-[1.05]"
          />
        )}

        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
        >
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              <h3 className="text-white text-xl font-semibold">{item.title}</h3>
              {item.description && (
                <p className="text-white/70 text-base">{item.description}</p>
              )}
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-[#FFD700] font-medium group"
              >
                Learn more <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 