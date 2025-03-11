import { HelpCenterSection } from "@/components/sections/help/v1/help-center-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center | RIP Fitness",
  description: "Get answers to your questions about RIP Fitness programs, memberships, classes, and more. Access our knowledge base and support resources.",
};

export default function HelpCenterPage() {
  return <HelpCenterSection />;
}
