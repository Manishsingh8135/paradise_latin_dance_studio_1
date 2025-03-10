"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Volume2, VolumeX } from "lucide-react";

interface BackgroundVideoProps {
  src: string;
  poster?: string;
}

export function BackgroundVideo({ src, poster }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVideoFailed, setIsVideoFailed] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isInView, setIsInView] = useState(true);

  // Handle intersection observer for video visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the video is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle video playback based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      video.play().catch(error => {
        console.error('Video play failed:', error);
        setIsVideoFailed(true);
      });
    } else {
      video.pause();
    }
  }, [isInView]);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  if (isVideoFailed || !src) {
    return (
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={poster || ""}
          alt="Gym background"
          fill
          className="object-cover opacity-50"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        poster={poster}
        onError={() => setIsVideoFailed(true)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Mute/Unmute Button - Only show when video is in view */}
      {isInView && src && !isVideoFailed && (
        <button
          onClick={toggleMute}
          className="absolute bottom-6 right-6 z-50 p-3 rounded-full bg-black/50 backdrop-blur-sm 
                   hover:bg-black/70 transition-all duration-300 group
                   border border-white/10 hover:border-white/20"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-white opacity-70 group-hover:opacity-100" />
          ) : (
            <Volume2 className="w-5 h-5 text-white opacity-70 group-hover:opacity-100" />
          )}
        </button>
      )}
    </div>
  );
}