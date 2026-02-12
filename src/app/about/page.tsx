import { AboutSection } from "@/components/sections/about/v1/about-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Paradise Latin Dance Studio",
  description: "Founded in 2019 in Hawaii, Paradise Latin Dance Studio is the premier Latin dance community on O'ahu. From salsa to bachata, we bring the vibrant rhythms of Latin culture to the islands with world-class instruction and authentic passion.",
  keywords: [
    "Paradise Latin Dance Studio",
    "about paradise dance",
    "latin dance hawaii",
    "dance studio oahu",
    "salsa bachata hawaii",
    "dance community hawaii",
    "Rico dance instructor",
    "Mike Lorenzo dance",
  ],
  openGraph: {
    title: "About Us | Paradise Latin Dance Studio",
    description: "Founded in 2019 in Hawaii, Paradise Latin Dance Studio is the premier Latin dance community on O'ahu.",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "About Paradise Latin Dance Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Paradise Latin Dance Studio",
    description: "Founded in 2019 in Hawaii, Paradise Latin Dance Studio is the premier Latin dance community on O'ahu.",
  },
};

export default function AboutPage() {
  return <AboutSection />;
}
