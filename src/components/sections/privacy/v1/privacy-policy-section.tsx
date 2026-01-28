"use client";

import { motion } from "framer-motion";
import { privacyHighlights, privacySections, privacyContact } from "../data/privacy-data";
import { PrivacyHighlightCard } from "./privacy-highlight-card";
import { PrivacySectionCard } from "./privacy-section-card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { HeroParticles } from "@/components/ui/hero-particles";

export function PrivacyPolicySection() {
  return (
    <div className="relative min-h-screen w-full bg-black py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <HeroParticles />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10">
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent font-medium">
                Privacy Policy
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Your Privacy is Our
            </span>{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
              Priority
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            We take your privacy seriously and are committed to protecting your personal information
            with the same dedication we bring to your fitness journey.
          </motion.p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {privacyHighlights.map((highlight, index) => (
            <PrivacyHighlightCard
              key={highlight.id}
              highlight={highlight}
              index={index}
            />
          ))}
        </div>

        {/* Privacy Sections */}
        <div className="space-y-6 mb-16">
          {privacySections.map((section, index) => (
            <PrivacySectionCard
              key={section.id}
              section={section}
              index={index}
            />
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 hover:border-[#FFD700]/30 transition-colors duration-300"
        >
          {/* Glow Effects */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          <div className="absolute -inset-[1px] bg-gradient-to-b from-transparent via-[#FFD700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold mb-6 text-white">
              {privacyContact.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#FFD700] mt-1" />
                <div>
                  <div className="text-sm text-white/60 mb-1">Email</div>
                  <a href={`mailto:${privacyContact.email}`} className="text-white hover:text-[#FFD700] transition-colors">
                    {privacyContact.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#FFD700] mt-1" />
                <div>
                  <div className="text-sm text-white/60 mb-1">Phone</div>
                  <a href={`tel:${privacyContact.phone}`} className="text-white hover:text-[#FFD700] transition-colors">
                    {privacyContact.phone}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFD700] mt-1" />
                <div>
                  <div className="text-sm text-white/60 mb-1">Address</div>
                  <address className="text-white not-italic">
                    {privacyContact.address}
                  </address>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#FFD700] mt-1" />
                <div>
                  <div className="text-sm text-white/60 mb-1">Hours</div>
                  <div className="text-white space-y-1">
                    {privacyContact.hours.map((hour, index) => (
                      <div key={index}>{hour}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
