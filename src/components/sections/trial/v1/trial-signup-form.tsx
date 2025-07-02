"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight, User, Mail, Phone, Target, Ear, Loader2 } from "lucide-react";
import { TrialFormData } from "./trial-signup-section";
import { useToast, toast } from "@/components/ui/toast";

interface TrialSignupFormProps {
  formData: TrialFormData;
  onUpdate: (data: Partial<TrialFormData>) => void;
  onBack: () => void;
  onContinue: () => void;
}

export function TrialSignupForm({ formData, onUpdate, onBack, onContinue }: TrialSignupFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { addToast } = useToast();

  const handleInputChange = (field: keyof TrialFormData, value: string) => {
    onUpdate({ [field]: value });
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleGoalsChange = (goal: string) => {
    const currentGoals = formData.goals || [];
    const updatedGoals = currentGoals.includes(goal)
      ? currentGoals.filter(g => g !== goal)
      : [...currentGoals, goal];
    
    onUpdate({ goals: updatedGoals });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.hearAbout) {
      newErrors.hearAbout = "Please let us know how you heard about us";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      addToast(toast.error("Please check your information", "Some fields need your attention"));
      return;
    }

    setIsSubmitting(true);

    try {
      // Call the actual trial signup API
      const response = await fetch('/api/trial-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          selectedClass: formData.selectedClass,
          experience: formData.experience,
          hearAbout: formData.hearAbout,
          goals: formData.goals || [],
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        const emailStatus = result.emailDelivery?.allEmailsDelivered ? 
          "Check your email for details!" : 
          "We'll follow up soon with details!";
        
        addToast(toast.success("Welcome to Paradise!", `Your trial class is confirmed. ${emailStatus}`));
        onContinue();
      } else {
        throw new Error(result.error || 'Signup failed');
      }
    } catch (error) {
      console.error('Trial signup error:', error);
      addToast(toast.error("Something went wrong", "Please try again or contact us directly"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] max-w-4xl mx-auto">
      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto pr-2">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header with Better Spacing */}
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Almost{" "}
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
                There!
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 max-w-2xl mx-auto"
            >
              Just a few details and you&apos;ll be ready to join our Paradise family
            </motion.p>
          </div>

          {/* Form with Better Breathing Room */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* First Name */}
              <FormField
                icon={User}
                label="First Name"
                value={formData.firstName}
                onChange={(value) => handleInputChange("firstName", value)}
                error={errors.firstName}
                placeholder="Your first name"
              />

              {/* Last Name */}
              <FormField
                icon={User}
                label="Last Name"
                value={formData.lastName}
                onChange={(value) => handleInputChange("lastName", value)}
                error={errors.lastName}
                placeholder="Your last name"
              />

              {/* Email */}
              <FormField
                icon={Mail}
                label="Email"
                type="email"
                value={formData.email}
                onChange={(value) => handleInputChange("email", value)}
                error={errors.email}
                placeholder="your.email@example.com"
              />

              {/* Phone */}
              <FormField
                icon={Phone}
                label="Phone"
                type="tel"
                value={formData.phone}
                onChange={(value) => handleInputChange("phone", value)}
                error={errors.phone}
                placeholder="(808) 123-4567"
              />

              {/* How did you hear about us */}
              <div className="md:col-span-2">
                <FormSelect
                  icon={Ear}
                  label="How did you hear about us?"
                  value={formData.hearAbout}
                  onChange={(value) => handleInputChange("hearAbout", value)}
                  error={errors.hearAbout}
                  options={hearAboutOptions}
                />
              </div>

              {/* Goals */}
              <div className="md:col-span-2">
                <GoalsSelection
                  selectedGoals={formData.goals || []}
                  onGoalChange={handleGoalsChange}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Sticky Navigation - Always Visible */}
      <div className="border-t border-white/10 bg-black/40 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-between py-4 px-6"
        >
          {/* Back Button */}
          <motion.button
            onClick={onBack}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white hover:border-[#FFD700]/50 hover:text-[#FFD700] transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </motion.button>

          {/* Submit Button */}
          <motion.button
            onClick={handleSubmit}
            disabled={isSubmitting}
            whileHover={!isSubmitting ? { scale: 1.05 } : {}}
            whileTap={!isSubmitting ? { scale: 0.95 } : {}}
            className="group relative bg-gradient-to-r from-[#FFD700] to-[#FDB931] text-black font-bold px-8 py-3 rounded-xl overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {/* Button Shine Effect */}
            {!isSubmitting && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            )}
            
            {/* Button Content */}
            <div className="relative flex items-center gap-2">
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Securing...</span>
                </>
              ) : (
                <>
                  <span className="hidden sm:inline">Join Paradise Family</span>
                  <span className="sm:hidden">Join Paradise</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

interface FormFieldProps {
  icon: React.ElementType;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder: string;
}

function FormField({ icon: Icon, label, type = "text", value, onChange, error, placeholder }: FormFieldProps) {
  return (
    <div className="group">
      <label className="block text-sm font-medium text-white/80 mb-2">
        {label}
      </label>
      
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <Icon className="w-4 h-4 text-white/40 group-focus-within:text-[#FFD700] transition-colors duration-300" />
        </div>
        
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full pl-11 pr-4 py-3 bg-white/5 rounded-xl border-2 text-white placeholder-white/30 focus:outline-none transition-all duration-300 ${
            error
              ? "border-red-500 focus:border-red-400"
              : "border-transparent focus:border-[#FFD700] focus:bg-white/10"
          }`}
        />

        {/* Focus Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
      </div>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-xs mt-1.5"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

interface FormSelectProps {
  icon: React.ElementType;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  options: { value: string; label: string }[];
}

function FormSelect({ icon: Icon, label, value, onChange, error, options }: FormSelectProps) {
  return (
    <div className="group">
      <label className="block text-sm font-medium text-white/80 mb-2">
        {label}
      </label>
      
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <Icon className="w-4 h-4 text-white/40 group-focus-within:text-[#FFD700] transition-colors duration-300" />
        </div>
        
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full pl-11 pr-4 py-3 bg-white/5 rounded-xl border-2 text-white focus:outline-none transition-all duration-300 appearance-none ${
            error
              ? "border-red-500 focus:border-red-400"
              : "border-transparent focus:border-[#FFD700] focus:bg-white/10"
          }`}
        >
          <option value="" className="bg-black text-white">
            Please select...
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value} className="bg-black text-white">
              {option.label}
            </option>
          ))}
        </select>

        {/* Focus Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
      </div>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-xs mt-1.5"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

interface GoalsSelectionProps {
  selectedGoals: string[];
  onGoalChange: (goal: string) => void;
}

function GoalsSelection({ selectedGoals, onGoalChange }: GoalsSelectionProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-white/80 mb-3">
        <Target className="w-4 h-4 inline mr-2" />
        What are your dance goals? (Optional)
      </label>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {danceGoals.map((goal) => (
          <motion.button
            key={goal}
            onClick={() => onGoalChange(goal)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-3 rounded-lg border text-sm transition-all duration-300 ${
              selectedGoals.includes(goal)
                ? "bg-[#FFD700]/10 border-[#FFD700] text-[#FFD700]"
                : "bg-white/5 border-white/10 text-white/70 hover:border-[#FFD700]/50 hover:text-white"
            }`}
          >
            {goal}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

const hearAboutOptions = [
  { value: "google", label: "Google Search" },
  { value: "social_media", label: "Social Media" },
  { value: "friend_referral", label: "Friend/Family Referral" },
  { value: "gym_member", label: "I'm already an R1P Fitness member" },
  { value: "local_event", label: "Local Event" },
  { value: "flyer", label: "Flyer/Advertisement" },
  { value: "other", label: "Other" }
];

const danceGoals = [
  "Learn to dance socially",
  "Get in shape",
  "Meet new people",
  "Date night activity",
  "Improve confidence",
  "Stress relief",
  "Cultural connection",
  "Competition dancing",
  "Just for fun!"
]; 