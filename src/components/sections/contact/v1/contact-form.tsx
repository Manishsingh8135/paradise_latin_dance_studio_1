"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Send, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="relative h-full">
      {/* Form Container */}
      <div className="relative h-full bg-black/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/5">
        {/* Top Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
        
        <form onSubmit={handleSubmit} className="h-full p-8 lg:p-10 flex flex-col">
          <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="relative group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={cn(
                  "w-full bg-white/5 rounded-xl px-6 py-4",
                  "text-white placeholder-white/30",
                  "border-2 border-transparent",
                  "focus:border-[#FFD700] focus:bg-white/10",
                  "transition-all duration-300"
                )}
                placeholder="Your Name"
              />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#FFD700]/50 transition-all duration-300" />
            </div>

            {/* Email Field */}
            <div className="relative group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={cn(
                  "w-full bg-white/5 rounded-xl px-6 py-4",
                  "text-white placeholder-white/30",
                  "border-2 border-transparent",
                  "focus:border-[#FFD700] focus:bg-white/10",
                  "transition-all duration-300"
                )}
                placeholder="Your Email"
              />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#FFD700]/50 transition-all duration-300" />
            </div>

            {/* Subject Field */}
            <div className="relative group md:col-span-2">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={cn(
                  "w-full bg-white/5 rounded-xl px-6 py-4",
                  "text-white placeholder-white/30",
                  "border-2 border-transparent",
                  "focus:border-[#FFD700] focus:bg-white/10",
                  "transition-all duration-300"
                )}
                placeholder="Subject"
              />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#FFD700]/50 transition-all duration-300" />
            </div>

            {/* Message Field */}
            <div className="relative group md:col-span-2 flex-grow">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={cn(
                  "w-full h-full min-h-[150px] bg-white/5 rounded-xl px-6 py-4",
                  "text-white placeholder-white/30",
                  "border-2 border-transparent",
                  "focus:border-[#FFD700] focus:bg-white/10",
                  "transition-all duration-300",
                  "resize-none"
                )}
                placeholder="Your Message"
              />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#FFD700]/50 transition-all duration-300" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "relative w-full md:w-auto",
                "bg-[#FFD700]",
                "text-black font-bold",
                "px-12 py-4 rounded-xl",
                "overflow-hidden",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                "group"
              )}
            >
              {/* Button Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              
              {/* Button Content */}
              <div className="relative flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </div>
            </motion.button>
          </div>
        </form>

        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
      </div>
    </div>
  );
}
