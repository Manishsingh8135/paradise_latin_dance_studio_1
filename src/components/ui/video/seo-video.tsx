"use client";

import React from 'react';
import Script from 'next/script';

interface VideoSEOProps {
  src: string;
  poster?: string;
  title: string;
  description: string;
  uploadDate: string;
  duration?: string; // Format: PT1M33S (1 min 33 sec)
  width?: number;
  height?: number;
  autoPlay?: boolean;
  muted?: boolean;
  controls?: boolean;
  loop?: boolean;
  className?: string;
}

export const VideoSEO: React.FC<VideoSEOProps> = ({
  src,
  poster,
  title,
  description,
  uploadDate,
  duration = "PT0M0S",
  width = 1280,
  height = 720,
  autoPlay = false,
  muted = false,
  controls = true,
  loop = false,
  className = "",
}) => {
  const videoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: title,
    description,
    thumbnailUrl: poster,
    uploadDate,
    duration,
    contentUrl: src,
    embedUrl: src,
    width,
    height,
  };

  return (
    <div className="relative">
      <Script id={`video-jsonld-${title.replace(/\s+/g, '-')}`} type="application/ld+json">
        {JSON.stringify(videoJsonLd)}
      </Script>
      <video
        src={src}
        poster={poster}
        width={width}
        height={height}
        autoPlay={autoPlay}
        muted={muted}
        controls={controls}
        loop={loop}
        className={`w-full ${className}`}
        playsInline
        preload="metadata"
      />
    </div>
  );
};

// Usage example:
/*
<VideoSEO
  src="https://res.cloudinary.com/dyop38nwj/video/upload/v1234567890/Ripfitness/Dance-studio/salsa-performance.mp4"
  poster="https://res.cloudinary.com/dyop38nwj/image/upload/v1738826472/Ripfitness/Dance-studio/lds-1_licbfa.jpg"
  title="Salsa Dance Performance"
  description="Watch our instructors perform authentic Salsa at Paradise Latin Dance Studio"
  uploadDate="2023-06-15"
  duration="PT2M15S"
  width={1280}
  height={720}
  controls={true}
  muted={true}
  className="rounded-xl shadow-2xl"
/>
*/ 