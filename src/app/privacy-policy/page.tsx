"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Shield, Eye, Lock, Users, Mail, Calendar, FileText } from "lucide-react";
import { HeroParticles } from "@/components/ui/hero-particles";

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 1, 2025";

  const sections = [
    {
      title: "Information We Collect",
      icon: Eye,
      content: [
        "Personal Information: Name, email address, phone number, and billing information when you register for classes or contact us.",
        "Usage Data: Information about how you use our website, including pages visited, time spent, and interactions.",
        "Communication Data: Records of your communications with us, including emails, phone calls, and chat messages.",
        "Class Data: Information about the classes you attend, your progress, and instructor feedback."
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Users,
      content: [
        "To provide and improve our dance instruction services",
        "To communicate with you about classes, events, and studio updates",
        "To process payments and manage your account",
        "To send you marketing communications (with your consent)",
        "To ensure the safety and security of our studio and students",
        "To comply with legal obligations and protect our rights"
      ]
    },
    {
      title: "Information Sharing",
      icon: Lock,
      content: [
        "We do not sell, trade, or rent your personal information to third parties.",
        "We may share information with trusted service providers who assist in operating our business (payment processors, email services, etc.)",
        "We may disclose information when required by law or to protect the safety of our students and staff.",
        "Anonymous, aggregated data may be used for marketing and business analysis purposes."
      ]
    },
    {
      title: "Data Security",
      icon: Shield,
      content: [
        "We implement industry-standard security measures to protect your personal information.",
        "All payment processing is handled through secure, PCI-compliant payment gateways.",
        "Our website uses SSL encryption to protect data transmission.",
        "We regularly update our security practices and conduct security audits.",
        "Staff access to personal information is limited and monitored."
      ]
    },
    {
      title: "Your Rights",
      icon: FileText,
      content: [
        "Access: You can request a copy of the personal information we hold about you.",
        "Correction: You can request that we correct any inaccurate information.",
        "Deletion: You can request that we delete your personal information (subject to legal requirements).",
        "Portability: You can request your data in a portable format.",
        "Objection: You can object to certain types of processing.",
        "Withdrawal: You can withdraw consent for marketing communications at any time."
      ]
    },
    {
      title: "Cookies and Tracking",
      icon: Eye,
      content: [
        "We use cookies to enhance your website experience and analyze usage patterns.",
        "Essential cookies are necessary for website functionality and cannot be disabled.",
        "Analytics cookies help us understand how visitors interact with our site.",
        "Marketing cookies may be used to show you relevant advertisements.",
        "You can control cookie preferences through your browser settings."
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-black w-full overflow-x-hidden">
      <article className="relative">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <HeroParticles />
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        {/* Hero Section */}
        <div className="relative">
          {/* Header with gradient background */}
          <div className="relative h-[50vh] min-h-[300px] bg-gradient-to-br from-black via-black to-[#FFD700]/10">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  {/* Back Button */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
                    >
                      <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                      <span>Back to Home</span>
                    </Link>
                  </motion.div>

                  {/* Category */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-4"
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                      <Shield className="w-4 h-4 text-[#FFD700]" />
                      <span className="text-white">Legal</span>
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                  >
                    Privacy Policy
                  </motion.h1>

                  {/* Meta Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap items-center gap-6 text-white/60"
                  >
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Last Updated: {lastUpdated}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      <span>Paradise Latin Dance Studio</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                At Paradise Latin Dance Studio, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
              </p>
              <div className="bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-xl p-6">
                <p className="text-[#FFD700] font-medium">
                  By using our website and services, you agree to the collection and use of information in accordance with this policy.
                </p>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12"
            >
              <div className="bg-black/50 border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-5 h-5 text-[#FFD700]" />
                  <h3 className="text-xl font-semibold text-white">Contact Us</h3>
                </div>
                <p className="text-white/80 mb-2">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="space-y-1 text-white/60">
                  <p>Email: paradiselatindance@gmail.com</p>
                  <p>Phone: (808) 840-9926</p>
                  <p>Address: 94-111 Leokane St #150A, Waipahu, HI 96797</p>
                </div>
              </div>
            </motion.div>

            {/* Policy Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
                  className="bg-black/30 border border-white/10 rounded-xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#FFD700]/20 flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-white/80 text-lg leading-relaxed flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#FFD700] mt-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 p-6 bg-[#FFD700]/5 border border-[#FFD700]/20 rounded-xl"
            >
              <p className="text-white/80 text-center">
                This Privacy Policy is effective as of {lastUpdated} and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(255,215,0,0.1),transparent_50%)] blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(218,165,32,0.1),transparent_50%)] blur-3xl pointer-events-none" />
      </article>
    </main>
  );
}
