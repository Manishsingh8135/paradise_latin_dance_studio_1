"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { MembershipPlan } from "../data/membership-data";
import { PremiumCard } from "../../../ui/premium-card";
import { PremiumButton } from "../../../ui/premium-button";

interface MembershipCardProps {
  plan: MembershipPlan;
  className?: string;
}

export function MembershipCard({ plan, className }: MembershipCardProps) {
  return (
    <PremiumCard
      variant={plan.highlight ? "gradient" : "glass"}
      className={cn(
        "p-6 flex flex-col",
        plan.highlight && "scale-105",
        className
      )}
      motionProps={{
        whileHover: { scale: plan.highlight ? 1.02 : 1.05 },
        transition: { duration: 0.2 }
      }}
    >
      {/* Popular Choice Badge */}
      {plan.popularChoice && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] text-black text-sm font-semibold px-4 py-1 rounded-full shadow-lg"
          >
            Most Popular
          </motion.div>
        </div>
      )}

      {/* Plan Header */}
      <div className={cn(
        "text-center mb-6",
        plan.popularChoice && "mt-6"
      )}>
        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
            {plan.price}
          </span>
          <span className="text-white/60">{plan.duration}</span>
        </div>
        <p className="text-white/80 mt-2">{plan.description}</p>
      </div>

      {/* Features List */}
      <div className="flex-1">
        <div className="space-y-4">
          {plan.features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              {feature.included ? (
                <div className="w-5 h-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-[#FFD700]" />
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                  <X className="w-3 h-3 text-white/40" />
                </div>
              )}
              <span className={cn(
                "text-sm",
                feature.included ? "text-white" : "text-white/40"
              )}>
                {feature.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-8">
        <PremiumButton
          variant={plan.highlight ? "primary" : "secondary"}
          className="w-full"
          scale={true}
          glow={true}
        >
          {plan.ctaText}
        </PremiumButton>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_100%_0%,rgba(255,215,0,0.1),transparent_50%)]" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[radial-gradient(circle_at_0%_100%,rgba(255,215,0,0.05),transparent_50%)]" />
    </PremiumCard>
  );
}
