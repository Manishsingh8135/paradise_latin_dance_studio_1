"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    id: "bundle",
    name: "12 Class Bundle Pack",
    description: "Perfect for those who want flexibility with their dance schedule",
    price: {
      monthly: 225,
      yearly: 2160 // $180 * 12 months - 20% discount
    },
    features: [
      "12 Classes to Use Within 6 Months",
      "Book Any Class Type",
      "Flexible Schedule",
      "Access to Basic Classes",
      "Online Class Booking",
      "Community Events Access",
      "No Monthly Commitment"
    ],
    popular: false,
    type: "bundle"
  },
  {
    id: "unlimited",
    name: "Unlimited Dance Classes",
    description: "Best value for dedicated dance enthusiasts",
    price: {
      monthly: 180,
      yearly: 1728 // $180 * 12 months - 20% discount
    },
    features: [
      "Unlimited Classes per Month",
      "Access to All Class Types",
      "Priority Class Booking",
      "Member-Only Events",
      "Free Practice Sessions",
      "Community Events Access",
      "Flexible Class Times",
      "Monthly Payment Option"
    ],
    popular: true,
    type: "subscription"
  }
];

export function DancePricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            <span className="text-white">Flexible</span>{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">Pricing Options</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-white/80"
          >
            Choose the plan that best fits your dance journey
          </motion.p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <span className={`text-lg ${!isYearly ? 'text-[#FFD700]' : 'text-white/60'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-16 h-8 rounded-full bg-[#FFD700]/20 p-1 transition-colors duration-300 ring-1 ring-[#FFD700]/30"
            aria-label="Toggle between monthly and yearly billing"
          >
            <motion.div
              animate={{ x: isYearly ? 32 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-6 h-6 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FDB931]"
            />
          </button>
          <span className={`text-lg ${isYearly ? 'text-[#FFD700]' : 'text-white/60'}`}>
            Yearly
            <span className="ml-2 text-sm text-[#FFD700]">Save 20%</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`
                relative overflow-visible rounded-2xl backdrop-blur-sm mt-8
                ${plan.popular
                  ? 'bg-gradient-to-b from-[#FFD700]/20 to-[#FDB931]/10 ring-2 ring-[#FFD700]/50 shadow-[0_0_30px_rgba(255,215,0,0.15)]'
                  : 'bg-[#FFD700]/5 hover:bg-[#FFD700]/10 hover:ring-1 ring-[#FFD700]/20 hover:shadow-[0_0_20px_rgba(255,215,0,0.1)]'
                }
                transition-all duration-300
              `}
            >
              {plan.popular && (
                <div className="absolute -top-6 right-8">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FDB931] text-black text-sm font-medium shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                    Best Value
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className={`text-2xl font-bold ${plan.popular ? 'text-[#FFD700]' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className="mt-2 text-white/80">{plan.description}</p>

                <div className="mt-6">
                  <div className="flex items-end gap-2">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-[#FFD700]' : 'text-white'}`}>
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-white/60 mb-1">
                      {plan.type === 'subscription' 
                        ? (isYearly ? '/year' : '/month')
                        : ' one-time'
                      }
                    </span>
                  </div>
                  {isYearly && plan.type === 'subscription' && (
                    <p className="mt-2 text-[#FFD700]/80 text-sm">
                      That&apos;s only ${Math.round(plan.price.yearly / 12)} per month
                    </p>
                  )}
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 ${plan.popular ? 'text-[#FFD700]' : 'text-[#FFD700]/60'} mt-0.5`} />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`
                    mt-8 w-full group relative inline-flex items-center justify-center gap-4 px-8 py-4 rounded-full
                    transition-all duration-300 overflow-hidden
                    ${plan.popular
                      ? 'bg-gradient-to-r from-[#FFD700] to-[#FDB931] text-black hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]'
                      : 'bg-[#FFD700]/10 text-white hover:bg-[#FFD700]/20 hover:ring-1 ring-[#FFD700]/30'
                    }
                  `}
                  aria-label={`Get started with ${plan.name}`}
                >
                  <span className="text-lg font-semibold">
                    Get Started
                  </span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-white/80">
            All new members get a complimentary consultation with our instructors.
            <br />
            Need a custom plan for your group or organization?{' '}
            <a href="#contact" className="text-[#FFD700] hover:text-[#FFD700]/80 underline">
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
