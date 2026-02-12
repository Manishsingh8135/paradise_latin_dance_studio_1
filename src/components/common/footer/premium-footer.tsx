"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { footerLinks, socialLinks, contactInfo, tiktokLink } from "./data/footer-data";
import { HeroParticles } from "../../ui/hero-particles";
import { ChevronRight } from "lucide-react";

// TikTok icon (not available in lucide-react)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);
import { PremiumButton } from "../../ui/premium-button";
import Image from "next/image";

export function PremiumFooter() {
  return (
    <footer className="relative pt-12 md:pt-24 overflow-hidden px-4 md:px-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black pointer-events-none">
        <HeroParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="container mx-auto px-2 md:px-4 mb-12 md:mb-20">
          <motion.div 
            className="relative rounded-3xl bg-gradient-to-r from-black to-black/95 p-4 md:p-12 border border-white/10 overflow-hidden text-center"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Glow Effects */}
            <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(255,215,0,0.15),transparent_50%)] blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(218,165,32,0.1),transparent_50%)] blur-3xl pointer-events-none" />

            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Join Our
              </span>{" "}
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
                Elite Community
              </span>
            </h2>
            <p className="text-white/60 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base px-2">
              Get exclusive dance tips, event invites, and special offers delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto px-2">
              <div className="relative w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-[#FDB931]/20 rounded-xl blur-xl" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="relative w-full px-4 md:px-6 py-3 md:py-4 bg-black/50 rounded-xl border border-white/10 focus:border-[#FFD700]/50 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/20"
                />
              </div>
              <PremiumButton variant="primary" className="w-full sm:w-auto">
                Subscribe <ChevronRight className="w-4 h-4" />
              </PremiumButton>
            </div>
          </motion.div>
        </div>

        {/* Quick Links Grid */}
        <div className="container mx-auto px-2 md:px-4 mb-12 md:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center md:text-left"
              >
                <h4 className="inline-flex items-center text-lg font-semibold text-white capitalize mb-6">
                  <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
                    {title}
                  </span>
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group relative inline-flex items-center text-white/60 hover:text-[#FFD700] transition-colors duration-300"
                      >
                        <span className="absolute -left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ChevronRight className="w-4 h-4 text-[#FFD700]" />
                        </span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact & Social */}
        <div className="container mx-auto px-2 md:px-4 mb-12 md:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-center lg:text-left">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  whileHover={{ scale: 1.02 }}
                  className="group relative"
                >
                  <Link
                    href={info.href}
                    className="block p-6 rounded-2xl bg-black/50 border border-white/10 hover:border-[#FFD700]/20 transition-colors duration-300"
                  >
                    <div className="flex flex-col items-center lg:items-start gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#FFD700]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative w-12 h-12 rounded-full bg-black/50 border border-white/10 group-hover:border-[#FFD700]/20 flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-[#FFD700]" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-2">{info.label}</h5>
                        <p className="text-white/60">{info.text}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="text-center lg:text-left">
              {/* Brand */}
              <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative w-16 h-16"
                >
                  <motion.div
                    animate={{ 
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-[#FFD700]/20 rounded-full blur-xl"
                  />
                  <div className="relative h-16 w-16">
                    <Image
                      src="/logo/logo.png"
                      alt="Paradise Latin Dance Studio Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
                    Paradise
                  </h3>
                  <p className="text-white/60">Latin Dance Studio</p>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-center justify-center lg:justify-start gap-4">
                {socialLinks.map((social) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={social.href}
                      className="group relative block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="absolute inset-0 bg-[#FFD700]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative w-12 h-12 rounded-full bg-black/50 border border-white/10 group-hover:border-[#FFD700]/20 flex items-center justify-center transition-all duration-300">
                        <social.icon className="w-5 h-5 text-white/60 group-hover:text-[#FFD700] transition-colors duration-300" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
                {/* TikTok */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={tiktokLink.href}
                    className="group relative block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="absolute inset-0 bg-[#FFD700]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-12 h-12 rounded-full bg-black/50 border border-white/10 group-hover:border-[#FFD700]/20 flex items-center justify-center transition-all duration-300">
                      <TikTokIcon className="w-5 h-5 text-white/60 group-hover:text-[#FFD700] transition-colors duration-300" />
                    </div>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/40 text-sm text-center md:text-left">
                &copy; {new Date().getFullYear()} Paradise Latin Dance Studio. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-8">
                <Link
                  href="/privacy-policy"
                  className="text-sm text-white/40 hover:text-[#FFD700] transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-sm text-white/40 hover:text-[#FFD700] transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/help-center"
                  className="text-sm text-white/40 hover:text-[#FFD700] transition-colors duration-300"
                >
                  Help Center
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent pointer-events-none" />
    </footer>
  );
}
