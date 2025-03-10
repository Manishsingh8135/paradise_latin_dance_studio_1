// src/components/hero/hero2/HeroStatsGrid.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { PremiumCard } from "../ui/premium-card";
import type { HeroStats } from "@/types/hero/hero-types";

interface CounterProps {
  value: string;
  duration?: number;
}

function Counter({ value, duration = 2 }: CounterProps) {
  const [count, setCount] = useState("0");
  const numberValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(numberValue * progress) + suffix);
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, numberValue, duration, suffix]);

  return count;
}

interface HeroStatsGridProps {
  stats: HeroStats[];
}

export function HeroStatsGrid({ stats }: HeroStatsGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.8,
            delay: index * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <PremiumCard 
            variant="gradient" 
            className="h-full p-6 flex flex-col justify-between"
            interactive={false}
          >
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
                {isInView ? <Counter value={stat.value} /> : "0"}
              </div>
              <div className="text-sm md:text-base font-medium text-white/80">
                {stat.label}
              </div>
            </div>
            <div className="mt-2 text-xs text-white/60">
              {stat.description}
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-[radial-gradient(circle_at_100%_0%,rgba(255,215,0,0.1),transparent_50%)] pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-[radial-gradient(circle,rgba(255,215,0,0.05),transparent_50%)] pointer-events-none" />
          </PremiumCard>
        </motion.div>
      ))}
    </div>
  );
}