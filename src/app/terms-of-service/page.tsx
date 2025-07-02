"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, FileText, AlertTriangle, DollarSign, Shield, Users, Calendar, Scale } from "lucide-react";
import { HeroParticles } from "@/components/ui/hero-particles";

export default function TermsOfServicePage() {
  const lastUpdated = "July 1, 2025";

  const sections = [
    {
      title: "Acceptance of Terms",
      icon: FileText,
      content: [
        "By accessing and using Paradise Latin Dance Studio's services, you accept and agree to be bound by these Terms of Service.",
        "If you do not agree to these terms, please do not use our services or website.",
        "We reserve the right to update these terms at any time, and continued use constitutes acceptance of any changes.",
        "It is your responsibility to review these terms periodically for updates."
      ]
    },
    {
      title: "Class Registration & Attendance",
      icon: Users,
      content: [
        "All students must register for classes in advance through our booking system or by contacting the studio.",
        "Class spots are reserved upon payment confirmation and are subject to availability.",
        "Students must arrive on time for classes. Late arrivals may be denied entry to maintain class flow.",
        "Appropriate dance attire and footwear are required for all classes.",
        "Students under 18 must have parental/guardian consent to participate in classes.",
        "We reserve the right to refuse service to anyone who does not comply with studio policies."
      ]
    },
    {
      title: "Payment Terms",
      icon: DollarSign,
      content: [
        "All class fees must be paid in advance unless otherwise arranged.",
        "Payment can be made through our website, in person, or via approved payment methods.",
        "Package deals and memberships are non-transferable unless explicitly stated.",
        "Prices are subject to change with 30 days notice to existing students.",
        "Outstanding balances may result in suspension of class privileges.",
        "We accept major credit cards, cash, and digital payment methods."
      ]
    },
    {
      title: "Cancellation & Refund Policy",
      icon: AlertTriangle,
      content: [
        "Class cancellations must be made at least 24 hours in advance for a full refund or credit.",
        "No-shows and late cancellations (less than 24 hours) forfeit the class fee.",
        "In case of instructor illness or studio closure, classes will be rescheduled or refunded.",
        "Package deals and memberships are non-refundable after 48 hours of purchase.",
        "Refunds for special events and workshops are subject to specific terms announced at registration.",
        "Medical emergencies or extenuating circumstances will be reviewed on a case-by-case basis."
      ]
    },
    {
      title: "Health & Safety",
      icon: Shield,
      content: [
        "Students participate in dance classes at their own risk and must disclose any medical conditions that may affect participation.",
        "The studio is not liable for injuries sustained during classes, events, or on studio premises.",
        "Students are responsible for their own health insurance and medical expenses.",
        "Anyone feeling unwell or exhibiting symptoms of illness should not attend classes.",
        "The studio maintains the right to implement health protocols as deemed necessary.",
        "Emergency contact information must be provided and kept current."
      ]
    },
    {
      title: "Conduct & Behavior",
      icon: Users,
      content: [
        "All students and visitors must treat instructors, staff, and fellow students with respect and courtesy.",
        "Inappropriate behavior, harassment, or disruptive conduct will result in immediate removal and possible ban.",
        "The use of alcohol or illegal substances on studio premises is strictly prohibited.",
        "Photography and video recording during classes require explicit permission from instructors.",
        "Personal belongings are stored at the owner's risk; the studio is not responsible for lost or stolen items.",
        "Violation of studio policies may result in loss of class privileges without refund."
      ]
    },
    {
      title: "Intellectual Property",
      icon: Scale,
      content: [
        "All choreography, teaching methods, and proprietary techniques remain the intellectual property of Paradise Latin Dance Studio and its instructors.",
        "Students may not record, reproduce, or teach studio choreography without written permission.",
        "The studio name, logo, and branding materials are protected trademarks and may not be used without authorization.",
        "Any content created by students on studio premises may be used for promotional purposes unless otherwise requested.",
        "Violation of intellectual property rights may result in legal action."
      ]
    },
    {
      title: "Limitation of Liability",
      icon: Shield,
      content: [
        "Paradise Latin Dance Studio's liability is limited to the amount paid for the specific service in question.",
        "We are not liable for indirect, incidental, or consequential damages arising from use of our services.",
        "The studio is not responsible for personal property damage or loss on premises.",
        "Our liability does not extend to actions or services provided by third-party vendors or partners.",
        "These limitations apply to the fullest extent permitted by law."
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
                      <Scale className="w-4 h-4 text-[#FFD700]" />
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
                    Terms of Service
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
                      <Scale className="w-4 h-4" />
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
                Welcome to Paradise Latin Dance Studio! These Terms of Service govern your use of our services, website, and facilities. Please read these terms carefully before enrolling in classes or using our services.
              </p>
              <div className="bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-[#FFD700] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[#FFD700] font-medium mb-2">Important Notice</p>
                    <p className="text-white/80">
                      By registering for classes or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Terms Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
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

            {/* Contact & Disputes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="bg-black/50 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#FFD700]" />
                  Questions or Concerns
                </h3>
                <p className="text-white/80 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-1 text-white/60">
                  <p>Email: paradiselatindance@gmail.com</p>
                  <p>Phone: (808) 840-9926</p>
                </div>
              </div>

              <div className="bg-black/50 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-[#FFD700]" />
                  Governing Law
                </h3>
                <p className="text-white/80">
                  These Terms of Service are governed by and construed in accordance with the laws of the State of Hawaii. Any disputes will be resolved in the courts of Hawaii.
                </p>
              </div>
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="mt-12 p-6 bg-[#FFD700]/5 border border-[#FFD700]/20 rounded-xl"
            >
              <p className="text-white/80 text-center">
                These Terms of Service are effective as of {lastUpdated}. We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
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
