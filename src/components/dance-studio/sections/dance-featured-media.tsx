"use client";

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Pause, ChevronRight, Volume2, VolumeX } from 'lucide-react';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  title: string;
  description?: string;
  size: 'large' | 'medium' | 'small';
}

const mediaItems: MediaItem[] = [
  {
    type: 'video',
    src: 'https://res.cloudinary.com/dyop38nwj/video/upload/v1738827537/Ripfitness/Dance-studio/master_qfajr3.mp4',
    title: 'Dance Showcase 2024',
    description: 'Experience the magic of our annual showcase featuring top performers',
    size: 'medium'
  },
  {
    type: 'image',
    src: 'https://res.cloudinary.com/dyop38nwj/image/upload/v1738826472/Ripfitness/Dance-studio/lds-1_licbfa.jpg',
    title: 'Salsa Performance',
    description: 'Where modern meets tradition in fluid motion',
    size: 'large'
  },
  {
    type: 'image',
    src: 'https://res.cloudinary.com/dyop38nwj/image/upload/v1738826477/Ripfitness/Dance-studio/lds-6_vb557d.jpg',
    title: 'Ballet Excellence',
    description: 'Grace and precision in every movement',
    size: 'small'
  },
  {
    type: 'image',
    src: 'https://res.cloudinary.com/dyop38nwj/image/upload/v1737476989/Ripfitness/Dance-studio/ParadaiseLatinDance_46of55_yz6tx4.jpg',
    title: 'Jazz Fusion',
    description: 'Where traditional jazz meets contemporary style',
    size: 'small'
  },
  {
    type: 'video',
    src: 'https://res.cloudinary.com/dyop38nwj/video/upload/v1738827102/Ripfitness/Dance-studio/Halloween_Dance_Social_cc_mntm7d.mov',
    title: 'Hip Hop Battle',
    description: 'Urban rhythm meets island vibes',
    size: 'medium'
  },
  {
    type: 'image',
    src: 'https://res.cloudinary.com/dyop38nwj/image/upload/v1738826484/Ripfitness/Dance-studio/lds-5_bavqe8.jpg',
    title: 'Modern Dance',
    description: 'Pushing boundaries with innovative movements',
    size: 'large'
  },
  {
    type: 'image',
    src: 'https://res.cloudinary.com/dyop38nwj/image/upload/v1737477080/Ripfitness/Dance-studio/481ED18E-99CB-445B-8ADF-CB8291395D88_morepr.jpg',
    title: 'Jazz Fusion',
    description: 'Where traditional jazz meets contemporary style',
    size: 'small'
  },
  {
    type: 'video',
    src: 'https://res.cloudinary.com/dyop38nwj/video/upload/v1738827014/Ripfitness/Dance-studio/master_8_zpxqbi.mp4',
    title: 'Hip Hop Battle',
    description: 'Urban rhythm meets island vibes',
    size: 'medium'
  },
  
  // {
  //   type: 'image',
  //   src: 'https://res.cloudinary.com/dyop38nwj/image/upload/v1737477080/Ripfitness/Dance-studio/481ED18E-99CB-445B-8ADF-CB8291395D88_morepr.jpg',
  //   title: 'Modern Dance',
  //   description: 'Pushing boundaries with innovative movements',
  //   size: 'small'
  // },
  {
    type: 'image',
    src: 'https://res.cloudinary.com/dyop38nwj/image/upload/v1738826479/Ripfitness/Dance-studio/lds-4_lmrs4d.jpg',
    title: 'Modern Dance',
    description: 'Pushing boundaries with innovative movements',
    size: 'small'
  },
  {
    type: 'image',
    src: 'https://res.cloudinary.com/dyop38nwj/image/upload/v1738829856/Ripfitness/Dance-studio/lds-8_v4wyiw.jpg',
    title: 'Modern Dance',
    description: 'Pushing boundaries with innovative movements',
    size: 'small'
  },
  {
    type: 'image',
    src: 'https://res.cloudinary.com/dyop38nwj/image/upload/v1738826480/Ripfitness/Dance-studio/lds-3_jlnuvb.jpg',
    title: 'Modern Dance',
    description: 'Pushing boundaries with innovative movements',
    size: 'large'
  },
  // {
  //   type: 'image',
  //   src: 'https://res.cloudinary.com/dyop38nwj/image/upload/v1737476987/Ripfitness/Dance-studio/2421C9C6-F076-4462-A5A2-F911CBA790FF_kjns2y.jpg',
  //   title: 'Modern Dance',
  //   description: 'Pushing boundaries with innovative movements',
  //   size: 'medium'
  // },
];

const MediaCard = ({ item }: { item: MediaItem }) => {
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
      className={`relative ${sizeClasses[item.size]} rounded-[2rem] overflow-hidden group`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Border */}
      <div className="absolute inset-0 p-[2px] rounded-[2rem] bg-gradient-to-br from-white/30 via-white/20 to-white/5">
        <div className="absolute inset-0 rounded-[2rem] bg-black/90" />
      </div>

      {/* Media Content */}
      <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
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
                className="flex items-center gap-4 p-8"
              >
                {/* Play/Pause Button */}
                <motion.button
                  onClick={togglePlay}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center border border-yellow-500/30 hover:bg-yellow-500/40 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 text-white" />
                  ) : (
                    <Play className="w-7 h-7 text-white ml-1" />
                  )}
                </motion.button>

                {/* Mute/Unmute Button */}
                <motion.button
                  onClick={toggleMute}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center border border-yellow-500/30 hover:bg-yellow-500/40 transition-colors"
                >
                  {isMuted ? (
                    <VolumeX className="w-7 h-7 text-white" />
                  ) : (
                    <Volume2 className="w-7 h-7 text-white" />
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
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              <h3 className="text-white text-2xl font-semibold">{item.title}</h3>
              {item.description && (
                <p className="text-white/70 text-lg">{item.description}</p>
              )}
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-yellow-400 font-medium group"
              >
                Learn more <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export function DanceFeaturedMedia() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <section className="relative py-32 px-4 md:px-8 bg-black overflow-hidden" ref={containerRef}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative container mx-auto px-4"
      >
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent"
          >
            Showcase Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-white/70"
          >
            Explore our vibrant dance community through captivating moments and performances
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(200px,auto)] gap-4 max-w-7xl mx-auto">
          {mediaItems.map((item, index) => (
            <MediaCard key={index} item={item} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
