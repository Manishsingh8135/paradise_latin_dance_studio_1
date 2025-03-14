"use client";

// Removed unused motion import

import { DanceStyles } from "./sections/dance-styles";
// Removed unused DanceInstructors import
import { DanceSchedule } from "./sections/dance-schedule";
import { DanceTestimonials } from "./sections/dance-testimonials";
// Import the new EventsSection instead of DanceEvents
import { EventsSection } from "@/components/sections/events/v1/events-section";

import { TransformationJourneySectionV2 } from "@/components/sections/transformation-journey/v2/transformation-journey-section";

import { DanceFAQ } from "./sections/dance-faq";

import { DanceHeroV2 } from "./sections/dance-hero-v2";
import { DanceFeaturedMedia } from "./sections/dance-featured-media";

// Import the new Crown of Paradise section (v3)
import { BestDanceStudioV3 } from "@/components/sections/best-dance-studio/v3";
import { MembershipSection } from "../sections/memberships/membership/membership-section";
import { DanceInstructorsV2 } from "./sections/dance-instructors-v2";

export function DanceStudioPage() {
  return (
    <main className="relative bg-black text-white overflow-hidden">
      {/* Decorative Elements - matching main site */}
      <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(255,215,0,0.1),transparent_50%)] blur-3xl pointer-events-none" />
      <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(218,165,32,0.1),transparent_50%)] blur-3xl pointer-events-none" />

      {/* Hero Section */}
      {/* <DanceHero /> */}
      <DanceHeroV2 />

      {/* Best Dance Studio in Hawaii Section - Now using V3 */}
      <BestDanceStudioV3 />

     {/* Upcoming Events - Now using new EventsSection */}
     <EventsSection />

      {/* Dance Styles */}
      <DanceStyles />

      {/* Dance Transformation Journey - Now using V2 */}
      <TransformationJourneySectionV2 />

      {/* Dance Instructors */}
      <DanceInstructorsV2/>


      {/* Class Schedule */}
      <DanceSchedule />

      

       {/* Featured Media */}
       <DanceFeaturedMedia />

      {/* Testimonials */}
      <DanceTestimonials />

      {/* Pricing Plans */}

      <MembershipSection/>

      {/* FAQ Section */}
      <DanceFAQ />

     
    </main>
  );
}
