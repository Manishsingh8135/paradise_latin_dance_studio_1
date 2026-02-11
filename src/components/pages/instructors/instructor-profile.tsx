/**
 * Instructor Profile Page - World-Class UI/UX Design
 * Stunning visuals, animations, and interactions for Paradise Dance Studio
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Instagram, 
  MapPin, 
  Award, 
  Star, 
  Calendar, 
  Users, 
  Heart,
  PlayCircle,
  ExternalLink,
  ArrowRight,
  Phone,
  Mail,
  ChevronDown
} from 'lucide-react';
import { Instructor } from '@/components/sections/instructors/types/instructors-types';
import { styleColors } from '@/components/sections/instructors/data/instructors-data';

interface InstructorProfilePageProps {
  instructor: Instructor;
}

export default function InstructorProfilePage({ instructor }: InstructorProfilePageProps) {
  const [activeTab, setActiveTab] = useState('about');
  const { scrollY } = useScroll();
  
  // Parallax effects
  const heroY = useTransform(scrollY, [0, 500], [0, 250]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Cinematic Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, scale: heroScale }}
        >
          <Image
            src={instructor.image}
            alt={instructor.name}
            fill
            className="object-cover object-center md:object-top"
            priority
          />
          {/* Lighter gradients for better image visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        </motion.div>

        {/* Floating Particles Animation */}
        <div className="absolute inset-0 z-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400/30 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero Content with Enhanced Text Backdrop */}
        <motion.div 
          className="relative z-20 text-center max-w-4xl mx-auto px-6"
          style={{ opacity: heroOpacity }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Text backdrop for better readability */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-3xl -z-10 transform scale-110" />
          {/* Specialty Pills */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {instructor.specialties.map((specialty, index) => {
              const colors = styleColors[specialty as keyof typeof styleColors];
              return (
                <motion.span
                  key={specialty}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${colors?.bg} ${colors?.border} border backdrop-blur-sm`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  {specialty}
                </motion.span>
              );
            })}
          </motion.div>

          {/* Name with Cinematic Typography */}
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            {instructor.name}
          </motion.h1>

          {/* Role with Elegant Animation */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-6 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            {instructor.role}
          </motion.p>

          {/* Experience Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-3 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(251, 191, 36, 0.3)' }}
          >
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-100 font-medium">{instructor.experience} Experience</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/trial"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300"
              >
                <Heart className="w-5 h-5 group-hover:animate-pulse" />
                Book Trial with {instructor.name.split(' ')[0]}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Teaching Video
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/60"
          >
            <span className="text-sm font-light">Discover More</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Content Sections */}
      <div className="relative z-30 bg-gradient-to-b from-black to-gray-900">
        {/* Navigation Tabs with Mobile Scroll Indicators */}
        <motion.section 
          className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-gray-800"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative">
              {/* Left fade indicator for mobile - shows more content to the left */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none md:hidden" />
              
              {/* Right fade indicator for mobile - shows more content to the right */}
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none md:hidden" />
              
              {/* Scroll hint dots for mobile */}
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1 md:hidden z-20">
                <div className="w-1 h-1 bg-yellow-400/60 rounded-full animate-pulse" />
                <div className="w-1 h-1 bg-yellow-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-1 h-1 bg-yellow-400/20 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
              
              {/* Mobile scroll hint text */}
              <div className="absolute left-2 top-1 text-xs text-yellow-400/60 md:hidden pointer-events-none">
                Swipe →
              </div>
              
              <div className="flex gap-4 md:gap-8 overflow-x-auto py-4 scrollbar-hide scroll-smooth">
                {[
                  { id: 'about', label: 'About', icon: Users },
                  { id: 'achievements', label: 'Achievements', icon: Award },
                  { id: 'testimonials', label: 'Reviews', icon: Star },
                  { id: 'connect', label: 'Connect', icon: Instagram },
                ].map(({ id, label, icon: Icon }) => (
                  <motion.button
                    key={id}
                    className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                      activeTab === id
                        ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/25'
                        : 'text-gray-400 hover:text-white hover:bg-white/10 border border-gray-700/50 hover:border-gray-600'
                    }`}
                    onClick={() => setActiveTab(id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm md:text-base">{label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <AnimatePresence mode="wait">
            {activeTab === 'about' && (
              <AboutSection instructor={instructor} />
            )}
            {activeTab === 'achievements' && (
              <AchievementsSection instructor={instructor} />
            )}
            {activeTab === 'testimonials' && (
              <TestimonialsSection instructor={instructor} />
            )}
            {activeTab === 'connect' && (
              <ConnectSection instructor={instructor} />
            )}
          </AnimatePresence>
        </div>

        {/* Final CTA Section */}
        <motion.section 
          className="relative py-20 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border-y border-yellow-400/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-4xl mx-auto text-center px-6">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Ready to Dance with {instructor.name.split(' ')[0]}?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join thousands of students who have discovered the joy of Latin dance
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link 
                href="/trial"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-105"
              >
                <Heart className="w-6 h-6 group-hover:animate-pulse" />
                Start Your Dance Journey
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

// Individual Section Components
function AboutSection({ instructor }: { instructor: Instructor }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="grid lg:grid-cols-2 gap-12 items-center"
    >
      <div>
        <motion.h2 
          className="text-4xl font-bold mb-6 text-yellow-400"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Meet Your Instructor
        </motion.h2>
        <motion.div 
          className="prose prose-lg prose-invert max-w-none"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            {instructor.bio}
          </p>
          <blockquote className="border-l-4 border-yellow-400 pl-6 italic text-yellow-100 text-xl my-8">
            &ldquo;{instructor.quote}&rdquo;
          </blockquote>
        </motion.div>
      </div>
      
      <motion.div 
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={instructor.image}
            alt={instructor.name}
            width={500}
            height={600}
            className="object-cover w-full h-[600px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        
        {/* Location Badge */}
        <motion.div 
          className="absolute bottom-6 left-6 flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-4 py-2"
          whileHover={{ scale: 1.05 }}
        >
          <MapPin className="w-4 h-4 text-yellow-400" />
          <span className="text-white font-medium">{instructor.location}</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function AchievementsSection({ instructor }: { instructor: Instructor }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center text-yellow-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Achievements & Certifications
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-yellow-300">Professional Achievements</h3>
          <div className="space-y-4">
            {instructor.achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                className="flex items-start gap-3 p-4 bg-yellow-400/10 rounded-xl border border-yellow-400/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ backgroundColor: 'rgba(251, 191, 36, 0.15)', scale: 1.02 }}
              >
                <Award className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-yellow-300">Certifications</h3>
          <div className="space-y-4">
            {instructor.certifications?.map((cert, index) => (
              <motion.div
                key={cert}
                className="flex items-start gap-3 p-4 bg-blue-400/10 rounded-xl border border-blue-400/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', scale: 1.02 }}
              >
                <Star className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function TestimonialsSection({ instructor }: { instructor: Instructor }) {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      quote: `${instructor.name.split(' ')[0]} transformed my confidence on the dance floor. Their teaching style is both professional and incredibly encouraging.`,
      rating: 5,
      class: "Dance Foundations - Bachata"
    },
    {
      name: "David Kim",
      quote: "I've been taking classes for 6 months and the progress is amazing. The atmosphere is welcoming and the instruction is top-notch.",
      rating: 5,
      class: "Dance Rhythm - Salsa"
    },
    {
      name: "Sarah Johnson",
      quote: "Best dance studio in Hawaii! The personalized attention and authentic techniques make all the difference.",
      rating: 5,
      class: "Dance Dynamics"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center text-yellow-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        What Students Say
      </motion.h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(17, 24, 39, 0.7)' }}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            {/* Quote */}
            <blockquote className="text-gray-300 mb-4 italic">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            
            {/* Author */}
            <div className="pt-4 border-t border-gray-700">
              <div className="font-semibold text-white">{testimonial.name}</div>
              <div className="text-sm text-yellow-400">{testimonial.class}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ConnectSection({ instructor }: { instructor: Instructor }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <motion.h2 
        className="text-4xl font-bold mb-12 text-yellow-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Connect with {instructor.name.split(' ')[0]}
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-yellow-300">Follow the Journey</h3>
          <div className="space-y-4">
            {[
              { 
                url: instructor.social.instagram, 
                label: 'Personal Instagram', 
                icon: Instagram,
                description: 'Daily dance inspiration & behind the scenes'
              },
              {
                url: instructor.social.paradiseDance,
                label: 'Paradise Latin Dance',
                icon: Instagram,
                description: 'Studio updates & class highlights'
              }
            ].map(({ url, label, icon: Icon, description }, index) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(147, 51, 234, 0.15)' }}
              >
                <Icon className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                <div className="text-left flex-1">
                  <div className="font-semibold text-white">{label}</div>
                  <div className="text-sm text-gray-400">{description}</div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-yellow-300">Get In Touch</h3>
          <div className="space-y-6">
            <motion.a
              href="tel:+18088409926"
              className="flex items-center gap-4 p-4 bg-green-500/10 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 group"
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(34, 197, 94, 0.15)' }}
            >
              <Phone className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" />
              <div className="text-left flex-1">
                <div className="font-semibold text-white">Call Paradise Studio</div>
                <div className="text-green-400">(808) 840-9926</div>
              </div>
            </motion.a>

            <motion.a
              href="mailto:admin@paradiselatindance.com"
              className="flex items-center gap-4 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group"
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(59, 130, 246, 0.15)' }}
            >
              <Mail className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
              <div className="text-left flex-1">
                <div className="font-semibold text-white">Email Us</div>
                <div className="text-blue-400">admin@paradiselatindance.com</div>
              </div>
            </motion.a>

            <div className="pt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/trial"
                  className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  Book Trial Class Now
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 