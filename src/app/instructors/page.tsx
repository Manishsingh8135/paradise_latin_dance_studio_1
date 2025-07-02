import { InstructorsSection } from "@/components/sections/instructors/v1/instructors-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elite Dance Instructors | Paradise Latin Dance Studio",
  description: "Learn from Hawaii's best Latin dance instructors. Our passionate team brings authentic techniques, years of experience, and vibrant energy to every class at Paradise Latin Dance Studio.",
  keywords: ["Latin dance instructors Hawaii", "Salsa teachers Oahu", "Dance instructors Waipahu", "Rico dance instructor", "Professional dance teachers", "Hawaiian dance experts", "Latin dance professionals", "Bachata instructors Hawaii", "Paradise Dance Studio teachers"],
  openGraph: {
    title: "Elite Dance Instructors | Paradise Latin Dance Studio",
    description: "Learn from Hawaii's best Latin dance instructors. Our passionate team brings authentic techniques, years of experience, and vibrant energy to every class.",
    images: [
      {
        url: "/instructors-og.jpg",
        width: 1200,
        height: 630,
        alt: "Elite dance instructors at Paradise Latin Dance Studio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Dance Instructors | Paradise Latin Dance Studio",
    description: "Learn from Hawaii's best Latin dance instructors. Our passionate team brings authentic techniques and vibrant energy to every class.",
    images: ["/instructors-og.jpg"],
  },
};

export default function InstructorsPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="pt-20">
        <InstructorsSection />
      </div>
    </main>
  );
} 