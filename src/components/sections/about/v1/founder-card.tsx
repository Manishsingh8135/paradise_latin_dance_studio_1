"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TeamMember } from "../types/about-types";

export function FounderCard({
  name,
  role,
  image,
  description,
  achievements,
}: TeamMember) {
  return (
    <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent" />

      <div className="grid md:grid-cols-2 gap-8 p-8">
        {/* Image Section */}
        <div className="relative">
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
            <Image
              src={image}
              alt={name}
              className="object-cover"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Name and Role */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
            <p className="text-[#FFD700]">{role}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center">
          {/* Description */}
          <p className="text-white/80 mb-8 text-lg leading-relaxed">
            {description}
          </p>

          {/* Achievements */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Achievements</h4>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <motion.li
                  key={achievement}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-white/60"
                >
                  <div className="w-2 h-2 bg-[#FFD700] rounded-full" />
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent" />
    </div>
  );
}
