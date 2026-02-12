"use client";

import React from "react";
import { motion } from "framer-motion";
import { ContactForm } from "./contact-form";
import { ContactInfo } from "./contact-info";
import { MapLocation } from "./map-location";

export function ContactSection() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-20" />
      
      {/* Animated Circles */}
      <div className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)] blur-3xl animate-blob" />
      <div className="absolute -bottom-[40%] -right-[20%] w-[80%] h-[80%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)] blur-3xl animate-blob animation-delay-2000" />

      {/* Content */}
      <div className="relative">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-8 py-24">
          {/* Header */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <div className="inline-block">
                <div className="relative">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">
                    Ready to Transform?
                  </h1>
                  <div className="absolute -inset-x-6 -inset-y-4 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15),transparent_50%)] blur-xl" />
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
              </div>
              <p className="text-lg md:text-xl text-white/60 mt-6 max-w-2xl mx-auto">
                Your dance journey begins with a conversation. Let&apos;s make it happen together.
              </p>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="relative grid lg:grid-cols-12 gap-12 items-stretch">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 h-full"
            >
              <div className="h-full flex flex-col">
                <ContactInfo />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-8 h-full"
            >
              <ContactForm />
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-24"
          >
            <MapLocation />
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
