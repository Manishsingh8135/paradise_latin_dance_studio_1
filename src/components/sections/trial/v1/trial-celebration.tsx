"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, Star, Sparkles, Calendar, MapPin, Clock, Phone, Mail, RefreshCw } from "lucide-react";
import { TrialFormData } from "./trial-signup-section";

interface TrialCelebrationProps {
  formData: TrialFormData;
  onStartOver: () => void;
}

export function TrialCelebration({ formData, onStartOver }: TrialCelebrationProps) {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Hide confetti after 5 seconds
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-[calc(100vh-8rem)] justify-center max-w-4xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="text-center relative"
      >
      {/* Confetti Effect */}
      {showConfetti && <ConfettiEffect />}

      {/* Success Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
        className="relative w-32 h-32 mx-auto mb-8"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FDB931] rounded-full flex items-center justify-center">
          <Heart className="w-16 h-16 text-black" />
        </div>
        
        {/* Pulsing Rings */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 border-4 border-[#FFD700]/30 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="absolute inset-0 border-2 border-[#FFD700]/20 rounded-full"
        />
      </motion.div>

      {/* Welcome Message */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
            Paradise!
          </span>
        </h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl text-white/80 mb-4"
        >
          🎉 Aloha {formData.firstName}! Your free trial class is confirmed!
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg text-white/60"
        >
          You&apos;re now part of our beautiful Ohana family. Get ready to dance, smile, and create amazing memories!
        </motion.p>
      </motion.div>

      {/* Class Details */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="bg-gradient-to-r from-[#FFD700]/10 to-[#FDB931]/10 backdrop-blur-xl rounded-2xl p-6 border border-[#FFD700]/30 mb-8"
      >
        <h2 className="text-xl font-bold text-white mb-6 flex items-center justify-center gap-2">
          <Star className="w-5 h-5 text-[#FFD700]" />
          Your {formData.selectedClass} Trial Class
        </h2>

        <div className="space-y-4">
          <div className="bg-black/20 rounded-xl p-4">
            <div className="flex items-center gap-3 text-white mb-2">
              <Calendar className="w-5 h-5 text-[#FFD700] shrink-0" />
              <div className="flex-1">
                <div className="font-semibold text-white">Next Available Class</div>
                <div className="text-white/70 text-sm">We&apos;ll send you available times shortly</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-black/20 rounded-xl p-4">
              <div className="flex items-center gap-3 text-white">
                <Clock className="w-5 h-5 text-[#FFD700] shrink-0" />
                <div>
                  <div className="font-semibold text-sm">Duration</div>
                  <div className="text-white/70 text-xs">60 minutes</div>
                </div>
              </div>
            </div>

            <div className="bg-black/20 rounded-xl p-4">
              <div className="flex items-center gap-3 text-white">
                <MapPin className="w-5 h-5 text-[#FFD700] shrink-0" />
                <div>
                  <div className="font-semibold text-sm">Location</div>
                  <div className="text-white/70 text-xs">Paradise Latin Dance, Waipahu</div>
                </div>
              </div>
            </div>

            <div className="bg-black/20 rounded-xl p-4">
              <div className="flex items-center gap-3 text-white">
                <Sparkles className="w-5 h-5 text-[#FFD700] shrink-0" />
                <div>
                  <div className="font-semibold text-sm">Level</div>
                  <div className="text-white/70 text-xs capitalize">{formData.experience.replace("_", " ")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Next Steps */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="bg-black/40 backdrop-blur-xl rounded-xl p-6 border border-white/10 mb-8"
      >
        <h3 className="text-xl font-semibold text-white mb-4">What happens next?</h3>
        
        <div className="space-y-4 text-left">
          {nextSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center text-black font-bold text-sm">
                {index + 1}
              </div>
              <div>
                <div className="font-medium text-white">{step.title}</div>
                <div className="text-white/60 text-sm">{step.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
      >
        <div className="bg-black/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-2 text-white mb-2">
            <Phone className="w-4 h-4 text-[#FFD700]" />
            <span className="font-medium">Questions?</span>
          </div>
          <a 
            href="tel:+18088409926"
            className="text-[#FFD700] hover:text-[#FDB931] transition-colors"
          >
            (808) 840-9926
          </a>
        </div>

        <div className="bg-black/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-2 text-white mb-2">
            <Mail className="w-4 h-4 text-[#FFD700]" />
            <span className="font-medium">Email Us</span>
          </div>
          <a 
            href="mailto:paradiselatindance@gmail.com"
            className="text-[#FFD700] hover:text-[#FDB931] transition-colors"
          >
            paradiselatindance@gmail.com
          </a>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] text-black font-bold px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-[#FFD700]/25 transition-all duration-300"
        >
          View Schedule
        </motion.button>

        <motion.button
          onClick={onStartOver}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white hover:border-[#FFD700]/50 hover:text-[#FFD700] transition-all duration-300"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Book Another Trial</span>
        </motion.button>
      </motion.div>

      {/* Social Proof */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="mt-12 text-center"
      >
        <p className="text-white/50 text-sm">
          Join 500+ happy dancers in our Paradise family 💃🕺
        </p>
      </motion.div>
    </motion.div>
    </div>
  );
}

function ConfettiEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: -20,
            rotate: 0,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: window.innerHeight + 20,
            rotate: 360,
            transition: {
              duration: Math.random() * 3 + 2,
              ease: "easeOut",
              delay: Math.random() * 2,
            },
          }}
          className={`absolute w-3 h-3 ${
            Math.random() > 0.5 ? "bg-[#FFD700]" : "bg-[#FDB931]"
          } ${Math.random() > 0.5 ? "rounded-full" : "rounded-sm"}`}
        />
      ))}
    </div>
  );
}

const nextSteps = [
  {
    title: "Check your email",
    description: "We've sent you a welcome email with all the details and what to bring"
  },
  {
    title: "We&apos;ll contact you",
    description: "Our team will reach out within 24 hours to schedule your perfect class time"
  },
  {
    title: "Come dance with us",
    description: "Show up ready to move, laugh, and become part of our Ohana family"
  },
  {
    title: "Fall in love",
    description: "Experience the joy of dance and discover why our community is so special"
  }
]; 