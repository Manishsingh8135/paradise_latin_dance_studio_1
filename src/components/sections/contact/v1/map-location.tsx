"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

export function MapLocation() {
  const address = "94-111 Leokane St, Waipahu, HI 96797, United States";
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.5731446170394!2d-158.00756492376526!3d21.3367144798683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006676f90e1b11%3A0x6d8787c9cdf7a5aa!2s94-111%20Leokane%20St%2C%20Waipahu%2C%20HI%2096797!5e0!3m2!1sen!2sus!4v1707349161051!5m2!1sen!2sus";
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <div className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10" />

      {/* Container */}
      <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/5">
        {/* Top Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />

        {/* Content */}
        <div className="grid lg:grid-cols-5 gap-8 p-8 lg:p-12">
          {/* Left Side - Info */}
          <div className="relative lg:col-span-2">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Visit Our Gym
              </h2>
              <div className="h-1 w-24 bg-[#FFD700]" />
            </motion.div>

            {/* Address Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Location Card */}
              <div className="relative bg-white/5 rounded-xl p-6 group hover:bg-white/10 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="relative w-12 h-12">
                    {/* Icon Background */}
                    <div className="absolute inset-0 bg-[#FFD700] rounded-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                    
                    {/* Icon */}
                    <div className="relative h-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-[#FFD700]" />
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute -top-1 -right-1 w-3 h-3">
                      <div className="absolute inset-0 rotate-45 bg-[#FFD700] opacity-50" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Our Location</h3>
                    <p className="text-base text-white/60 group-hover:text-white/70 transition-colors duration-300">
                      94-111 Leokane St,<br />
                      Waipahu, HI 96797<br />
                      United States
                    </p>
                  </div>
                </div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#FFD700]/30 transition-all duration-300" />
              </div>

              {/* CTA Button */}
              <motion.a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-[#FFD700] text-black font-bold px-8 py-4 rounded-xl group"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side - Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 relative min-h-[500px] lg:min-h-[600px] rounded-xl overflow-hidden bg-white/5"
          >
            {/* Actual Google Maps Embed */}
            <iframe
              src={googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />

            {/* Theme Overlays */}
            <div className="absolute inset-0 mix-blend-color-burn opacity-30 bg-gradient-to-br from-[#FFD700]/40 via-transparent to-[#FDB931]/40 pointer-events-none" />
            <div className="absolute inset-0 mix-blend-overlay opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.4),transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-[#FFD700]/5 to-transparent pointer-events-none" />
            
            {/* Edge Glow */}
            <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(255,215,0,0.1)] pointer-events-none" />
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#FFD700]/20 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FFD700]/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#FFD700]/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#FFD700]/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
      </div>
    </div>
  );
}
