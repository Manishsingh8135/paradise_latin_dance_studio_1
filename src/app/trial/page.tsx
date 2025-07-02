import { TrialSignupSection } from "@/components/sections/trial/v1/trial-signup-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Trial Class | Paradise Latin Dance Studio - Start Your Journey",
  description: "Join the Paradise Latin Dance family with a FREE trial class! Experience the warmth of our Ohana community while learning salsa, bachata, and more. Book your spot today in Waipahu, Hawaii.",
  keywords: ["free trial dance class Hawaii", "Paradise Latin Dance free trial", "salsa bachata trial class", "Waipahu dance studio trial", "Hawaii Latin dance lessons", "free dance class trial", "Paradise dance trial booking", "Latin dance trial Hawaii", "beginner dance class trial", "dance studio free session"],
  openGraph: {
    title: "Free Trial Class | Paradise Latin Dance Studio",
    description: "Join the Paradise Latin Dance family with a FREE trial class! Experience our warm Ohana community while learning to dance.",
    images: [
      {
        url: "/trial-og.jpg",
        width: 1200,
        height: 630,
        alt: "Free Trial Class at Paradise Latin Dance Studio Hawaii",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Trial Class | Paradise Latin Dance Studio",
    description: "Join the Paradise Latin Dance family with a FREE trial class! Experience our warm Ohana community.",
    images: ["/trial-og.jpg"],
  },
};

export default function TrialPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="pt-20">
        <TrialSignupSection />
      </div>
    </div>
  );
} 