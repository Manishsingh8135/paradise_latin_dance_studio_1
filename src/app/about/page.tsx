import { AboutSection } from "@/components/sections/about/v1/about-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | RIP Fitness - Reborn 1n Paradise",
  description: "Founded in Hawaii, RIP FITNESS is more than a gym - we're a community dedicated to transforming lives through physical, mental, and spiritual wellness. Join our mission of strength and support.",
};

export default function AboutPage() {
  return <AboutSection />;
}
