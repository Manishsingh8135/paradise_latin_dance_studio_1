"use client";

import { motion } from "framer-motion";
import { PrivacyHighlight } from "../types/privacy-types";
import { Shield, Eye, Lock, FileText, UserCheck, Bell, Server, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const iconComponents = {
  Shield,
  Eye,
  Lock,
  FileText,
  UserCheck,
  Bell,
  Server,
  Mail,
};

interface PrivacyHighlightCardProps {
  highlight: PrivacyHighlight;
  index: number;
}

export function PrivacyHighlightCard({ highlight, index }: PrivacyHighlightCardProps) {
  const IconComponent = iconComponents[highlight.icon as keyof typeof iconComponents];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "relative group",
        "p-6 rounded-2xl",
        "bg-black/40 backdrop-blur-sm",
        "border border-white/10",
        "hover:border-[#FFD700]/30 transition-colors duration-300",
        "hover:shadow-[0_0_50px_-12px] hover:shadow-[#FFD700]/20",
        highlight.isPrimary && "md:col-span-2 bg-black/60"
      )}
    >
      {/* Glow Effects */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      <div className="absolute -inset-[1px] bg-gradient-to-b from-transparent via-[#FFD700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className={cn(
          "w-12 h-12 rounded-xl mb-4 flex items-center justify-center",
          "bg-gradient-to-br from-[#FFD700]/10 to-[#FDB931]/10",
          "border border-[#FFD700]/20"
        )}>
          {IconComponent && (
            <IconComponent className="w-6 h-6 text-[#FFD700]" />
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 text-white">
          {highlight.title}
        </h3>

        {/* Description */}
        <p className="text-white/60">
          {highlight.description}
        </p>
      </div>
    </motion.div>
  );
}
