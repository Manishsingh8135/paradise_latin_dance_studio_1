"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

type ContactDetail = {
  text: string;
  link?: string;
};

type ContactInfo = {
  icon: React.ElementType;
  title: string;
  details: ContactDetail[];
};

const contactInfo: ContactInfo[] = [
  {
    icon: Phone,
    title: "Call Us",
    details: [
      { text: "(808) 208-1066", link: "tel:+18082081066" }
    ],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: [
      { text: "r1pfitnesspr@gmail.com", link: "mailto:r1pfitnesspr@gmail.com" }
    ],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      { 
        text: "94-111 Leokane St #150A, Waipahu, HI 96797",
        link: "https://maps.google.com/?q=94-111+Leokane+St+%23150A,+Waipahu,+HI+96797"
      }
    ],
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: [
      { text: "Mon-Fri: 6AM-9PM" },
      { text: "Sat: 7AM-4PM" },
      { text: "Sun: 7AM-1PM" }
    ],
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-4">
      {contactInfo.map((info, index) => (
        <motion.div
          key={info.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group"
        >
          {/* Card */}
          <div className="relative bg-black/40 backdrop-blur-xl rounded-xl p-6 border border-white/5 hover:border-[#FFD700]/20 transition-colors duration-300">
            <div className="flex items-center gap-6">
              {/* Icon */}
              <div className="relative shrink-0">
                <div className="relative w-14 h-14">
                  {/* Icon Background */}
                  <div className="absolute inset-0 bg-[#FFD700] rounded-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                  
                  {/* Icon Content */}
                  <div className="relative h-full flex items-center justify-center">
                    <info.icon className="w-7 h-7 text-[#FFD700]" />
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute -top-1 -right-1 w-3 h-3">
                    <div className="absolute inset-0 rotate-45 bg-[#FFD700] opacity-50" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="min-w-0 flex-grow">
                <h3 className="text-lg font-bold text-white group-hover:text-[#FFD700] transition-colors duration-300">
                  {info.title}
                </h3>
                <div className="mt-2 space-y-1">
                  {info.details.map((detail, i) => (
                    <div key={i}>
                      {detail.link ? (
                        <a
                          href={detail.link}
                          target={detail.link.startsWith('http') ? "_blank" : undefined}
                          rel={detail.link.startsWith('http') ? "noopener noreferrer" : undefined}
                          className="text-base text-white/60 hover:text-[#FFD700] transition-colors duration-300 truncate block"
                        >
                          {detail.text}
                        </a>
                      ) : (
                        <p className="text-base text-white/60 group-hover:text-white/70 transition-colors duration-300 truncate">
                          {detail.text}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Icon */}
              {info.details[0].link && (
                <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#FFD700]/10 flex items-center justify-center">
                    {info.icon === Phone && <Phone className="w-5 h-5 text-[#FFD700]" />}
                    {info.icon === Mail && <Mail className="w-5 h-5 text-[#FFD700]" />}
                    {info.icon === MapPin && <MapPin className="w-5 h-5 text-[#FFD700]" />}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#FFD700]/30 transition-all duration-300" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
