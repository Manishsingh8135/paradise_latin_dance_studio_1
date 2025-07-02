import { ScheduleSection } from "@/components/sections/schedule/v1/schedule-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class Schedule & Dance Calendar | Paradise Latin Dance Studio",
  description: "Browse our comprehensive dance class schedule at Paradise Latin Dance Studio in Waipahu, Hawaii. Find Salsa, Bachata, Hip Hop, and more classes at convenient times throughout the week.",
  keywords: ["Latin dance schedule Hawaii", "Salsa class times Oahu", "Bachata lessons schedule", "Dance calendar Waipahu", "Weekly dance classes", "Paradise Dance Studio schedule", "Evening dance classes Hawaii", "Weekend dance lessons", "Drop-in dance classes", "Hawaii dance calendar"],
  openGraph: {
    title: "Class Schedule & Dance Calendar | Paradise Latin Dance Studio",
    description: "Browse our comprehensive dance class schedule at Paradise Latin Dance Studio in Waipahu, Hawaii. Find the perfect class that fits your schedule and skill level.",
    images: [
      {
        url: "/schedule-og.jpg",
        width: 1200,
        height: 630,
        alt: "Dance class schedule at Paradise Latin Dance Studio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Class Schedule & Dance Calendar | Paradise Latin Dance Studio",
    description: "Browse our comprehensive dance class schedule at Paradise Latin Dance Studio in Waipahu, Hawaii. Find the perfect class that fits your schedule and skill level.",
    images: ["/schedule-og.jpg"],
  },
};

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="pt-20">
        <ScheduleSection />
      </div>
    </main>
  );
} 