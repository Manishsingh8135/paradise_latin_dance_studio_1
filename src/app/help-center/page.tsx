import { HelpCenterSection } from "@/components/sections/help/v1/help-center-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center | Paradise Latin Dance Studio",
  description: "Get answers to your questions about Paradise Latin Dance Studio classes, memberships, schedules, and more. Access our knowledge base and support resources.",
  keywords: [
    "dance studio help",
    "dance class FAQ",
    "paradise dance support",
    "latin dance questions",
    "dance membership help",
    "salsa class booking",
  ],
  openGraph: {
    title: "Help Center | Paradise Latin Dance Studio",
    description: "Get answers to your questions about Paradise Latin Dance Studio classes, memberships, schedules, and more.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Help Center | Paradise Latin Dance Studio",
    description: "Get answers to your questions about Paradise Latin Dance Studio classes, memberships, schedules, and more.",
  },
};

export default function HelpCenterPage() {
  return <HelpCenterSection />;
}
