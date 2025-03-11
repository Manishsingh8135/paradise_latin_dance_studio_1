"use client";

// Removed unused motion import

import { DanceStyles } from "./sections/dance-styles";
import { DanceInstructors } from "./sections/dance-instructors";
import { DanceSchedule } from "./sections/dance-schedule";
import { DanceTestimonials } from "./sections/dance-testimonials";
import { DanceEvents } from "./sections/dance-events";
import { DancePricing } from "./sections/dance-pricing";
import { DanceTransformationJourney } from "./sections/dance-transformation-journey";

import { DanceFAQ } from "./sections/dance-faq";

import { DanceHeroV2 } from "./sections/dance-hero-v2";
import { DanceFeaturedMedia } from "./sections/dance-featured-media";

export function DanceStudioPage() {
  return (
    <main className="relative bg-black text-white overflow-hidden">
      {/* Decorative Elements - matching main site */}
      <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(255,215,0,0.1),transparent_50%)] blur-3xl pointer-events-none" />
      <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(218,165,32,0.1),transparent_50%)] blur-3xl pointer-events-none" />

      {/* Hero Section */}
      {/* <DanceHero /> */}
      <DanceHeroV2 />

     {/* Upcoming Events */}
     <DanceEvents />

      {/* Dance Styles */}
      <DanceStyles />

      {/* Dance Transformation Journey */}
      <DanceTransformationJourney />

      {/* Dance Instructors */}
      <DanceInstructors />

      {/* Class Schedule */}
      <DanceSchedule />

      

       {/* Featured Media */}
       <DanceFeaturedMedia />

      

      {/* Testimonials */}
      <DanceTestimonials />

      {/* Pricing Plans */}
      <DancePricing />

      {/* FAQ Section */}
      <DanceFAQ />

     
    </main>
  );
}
