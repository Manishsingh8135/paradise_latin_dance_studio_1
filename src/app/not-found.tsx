"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { HeroParticles } from "@/components/ui/hero-particles";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black">
        <HeroParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
      </div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5 z-[1]" />
      
      {/* Decorative Elements */}
      <div className="absolute -left-1/4 top-0 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(255,215,0,0.1),transparent_50%)] blur-3xl pointer-events-none" />
      <div className="absolute -right-1/4 bottom-0 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(218,165,32,0.1),transparent_50%)] blur-3xl pointer-events-none" />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-32 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* 404 Number */}
          <h1 className="text-9xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              4
            </span>
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
              0
            </span>
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              4
            </span>
          </h1>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Page
            </span>{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
              Not Found
            </span>
          </h2>
          
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent mx-auto my-8" />
          
          <p className="text-white/70 text-lg mb-12">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. 
            Perhaps you&apos;d like to find your rhythm on a different page?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FDB931] text-black font-medium transition-transform hover:scale-105"
            >
              <Home className="w-4 h-4" />
              Return Home
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 