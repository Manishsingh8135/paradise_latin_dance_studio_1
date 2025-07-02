import { ContactSection } from "@/components/sections/contact/v1/contact-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Paradise Latin Dance Studio",
  description: "Get in touch with Paradise Latin Dance Studio in Waipahu, Hawaii. Questions about classes, private lessons, or special events? We're here to help you start your dance journey!",
  keywords: ["contact dance studio Hawaii", "Paradise Latin Dance contact", "dance class inquiry", "Waipahu dance studio location", "Latin dance lessons contact", "Hawaii dance studio phone", "book dance class Hawaii", "private dance lessons inquiry", "Paradise dance studio address", "dance instructor contact"],
  openGraph: {
    title: "Contact Us | Paradise Latin Dance Studio",
    description: "Get in touch with Paradise Latin Dance Studio in Waipahu, Hawaii. Questions about classes, private lessons, or special events? We're here to help!",
    images: [
      {
        url: "/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Paradise Latin Dance Studio in Hawaii",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Paradise Latin Dance Studio",
    description: "Get in touch with Paradise Latin Dance Studio in Waipahu, Hawaii. We're here to help you start your dance journey!",
    images: ["/contact-og.jpg"],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="pt-20">
        <ContactSection />
      </div>
    </div>
  );
}
