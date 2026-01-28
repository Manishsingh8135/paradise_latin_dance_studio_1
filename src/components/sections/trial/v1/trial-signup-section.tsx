"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Star, Heart, Users, Music } from "lucide-react";
import { HeroParticles } from "@/components/ui/hero-particles";
import { TrialSignupForm } from "./trial-signup-form";
import { TrialClassSelection } from "./trial-class-selection";
import { TrialCelebration } from "./trial-celebration";

export type TrialStep = "welcome" | "classes" | "details" | "celebration";

export interface TrialFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  selectedClass: string;
  experience: string;
  hearAbout: string;
  goals: string[];
}

export function TrialSignupSection() {
  const [currentStep, setCurrentStep] = useState<TrialStep>("welcome");
  const [formData, setFormData] = useState<TrialFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    selectedClass: "",
    experience: "",
    hearAbout: "",
    goals: [],
  });

  const handleStepChange = (step: TrialStep) => {
    // Add a brief visual feedback when switching steps
    setCurrentStep(step);
  };

  const handleFormDataUpdate = (data: Partial<TrialFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Background Effects */}
      <HeroParticles />
      
      {/* Animated Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-8">
        
        {/* Welcome Hero Section */}
        <AnimatePresence mode="wait">
          {currentStep === "welcome" && (
            <WelcomeSection onContinue={() => handleStepChange("classes")} />
          )}
          
          {currentStep === "classes" && (
            <TrialClassSelection
              formData={formData}
              onUpdate={handleFormDataUpdate}
              onBack={() => handleStepChange("welcome")}
              onContinue={() => handleStepChange("details")}
            />
          )}
          
          {currentStep === "details" && (
            <TrialSignupForm
              formData={formData}
              onUpdate={handleFormDataUpdate}
              onBack={() => handleStepChange("classes")}
              onContinue={() => handleStepChange("celebration")}
            />
          )}
          
          {currentStep === "celebration" && (
            <TrialCelebration
              formData={formData}
              onStartOver={() => {
                setFormData({
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  selectedClass: "",
                  experience: "",
                  hearAbout: "",
                  goals: [],
                });
                handleStepChange("welcome");
              }}
            />
          )}
        </AnimatePresence>

        {/* Interactive Step Navigation */}
        <StepIndicator currentStep={currentStep} onStepClick={handleStepChange} />
      </div>
    </section>
  );
}

interface WelcomeSectionProps {
  onContinue: () => void;
}

function WelcomeSection({ onContinue }: WelcomeSectionProps) {
  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] justify-center max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        {/* Compact Main Heading */}
        <div className="relative mb-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 relative z-10"
          >
            Welcome to{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
                Paradise
              </span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#FFD700] to-[#FDB931]"
              />
            </span>
          </motion.h1>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15),transparent_50%)] blur-xl" />
        </div>

        {/* Compact Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed"
        >
          Start your dance journey with a{" "}
          <span className="text-[#FFD700] font-semibold">FREE trial class</span>
          <br />
          and become part of our warm{" "}
          <span className="text-[#FFD700] font-semibold">Ohana family</span>
        </motion.p>

        {/* Compact Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="group"
            >
              <div className="relative bg-black/40 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-[#FFD700]/30 transition-all duration-300 hover:transform hover:scale-105">
                {/* Icon */}
                <div className="w-10 h-10 mx-auto mb-3 relative">
                  <div className="absolute inset-0 bg-[#FFD700]/20 rounded-xl group-hover:bg-[#FFD700]/30 transition-colors duration-300" />
                  <feature.icon className="relative w-5 h-5 text-[#FFD700] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                
                {/* Content */}
                <h3 className="text-white font-semibold mb-1 group-hover:text-[#FFD700] transition-colors duration-300 text-sm">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-xs">
                  {feature.description}
                </p>

                {/* Bottom Glow */}
                <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-6"
        >
          <motion.button
            onClick={onContinue}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-gradient-to-r from-[#FFD700] to-[#FDB931] text-black font-bold px-10 py-3 rounded-xl text-lg overflow-hidden"
          >
            {/* Button Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            
            {/* Button Content */}
            <div className="relative flex items-center gap-3">
              <span>Start Your Journey</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </motion.button>
        </motion.div>

        {/* Compact Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/50 text-xs"
        >
          <div className="flex items-center gap-2">
            <Star className="w-3 h-3 text-[#FFD700]" />
            <span>No Experience Required</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-3 h-3 text-[#FFD700]" />
            <span>100% Welcoming Community</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-3 h-3 text-[#FFD700]" />
            <span>Family-Friendly Environment</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

interface StepIndicatorProps {
  currentStep: TrialStep;
  onStepClick: (step: TrialStep) => void;
}

function StepIndicator({ currentStep, onStepClick }: StepIndicatorProps) {
  const steps = [
    { key: "welcome", icon: Star },
    { key: "classes", icon: Music },
    { key: "details", icon: Users },
    { key: "celebration", icon: Heart },
  ];

  const currentIndex = steps.findIndex(step => step.key === currentStep);

  const handleStepClick = (step: typeof steps[0], index: number) => {
    // Only allow clicking on completed steps or current step
    if (index <= currentIndex) {
      onStepClick(step.key as TrialStep);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed top-1/2 right-6 transform -translate-y-1/2 z-30"
    >
      <div className="bg-black/40 backdrop-blur-md rounded-xl border border-white/10 p-3 shadow-lg">
        <div className="flex flex-col gap-3">
          {steps.map((step, index) => {
            const isActive = index === currentIndex;
            const isCompleted = index < currentIndex;
            const isClickable = index <= currentIndex;
            const Icon = step.icon;

            return (
              <div key={step.key} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-4 bg-white/10">
                    <motion.div
                      initial={{ height: "0%" }}
                      animate={{ height: isCompleted ? "100%" : "0%" }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="w-full bg-gradient-to-b from-[#FFD700] to-[#FDB931]"
                    />
                  </div>
                )}

                {/* Step Button */}
                <motion.button
                  onClick={() => handleStepClick(step, index)}
                  disabled={!isClickable}
                  whileHover={isClickable ? { scale: 1.1 } : {}}
                  whileTap={isClickable ? { scale: 0.95 } : {}}
                  className={`relative w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isClickable ? "cursor-pointer" : "cursor-not-allowed"
                  }`}
                >
                  {/* Step Circle */}
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? "bg-[#FFD700] text-black" :
                    isCompleted 
                      ? "bg-[#FFD700]/80 text-black" :
                      "bg-white/20 text-white/50"
                  }`}>
                    
                    {/* Icon or Checkmark */}
                    {isCompleted && !isActive ? (
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </motion.svg>
                    ) : (
                      <Icon className="w-3 h-3" />
                    )}
                  </div>

                  {/* Active Pulse Effect */}
                  {isActive && (
                    <motion.div
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-[#FFD700] rounded-full opacity-20"
                    />
                  )}

                  {/* Hover Effect */}
                  {isClickable && (
                    <div className="absolute inset-0 bg-[#FFD700] rounded-full opacity-0 hover:opacity-10 transition-opacity duration-300" />
                  )}
                </motion.button>

                {/* Step Number Tooltip */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: -10 }}
                  className="absolute top-0 right-8 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none"
                >
                  Step {index + 1}
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Progress Indicator */}
        <div className="mt-3 pt-3 border-t border-white/20">
          <div className="flex justify-center">
            <span className="text-white/60 text-xs font-medium">
              {currentIndex + 1}/{steps.length}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const features = [
  {
    icon: Star,
    title: "Free Trial Class",
    description: "Experience our teaching style and community vibe with zero commitment"
  },
  {
    icon: Heart,
    title: "Warm Ohana Family",
    description: "Join a supportive community that celebrates every step of your journey"
  },
  {
    icon: Users,
    title: "All Skill Levels",
    description: "From complete beginners to advanced dancers - everyone is welcome"
  }
]; 