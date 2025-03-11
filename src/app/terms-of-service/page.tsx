import React from "react";
import { Metadata } from "next";
import { TermsSection } from "@/components/sections/terms/v1/terms-section";
import { termsContent } from "@/components/sections/terms/data/terms-data";

export const metadata: Metadata = {
  title: "Terms of Service | RIP FITNESS - Home away from Home",
  description: "Review our comprehensive terms of service to understand your rights and responsibilities as a valued member of RIP FITNESS.",
};

export default function TermsOfServicePage() {
  const mainSection = {
    id: "terms-main",
    title: "Terms of Service",
    description: "Our commitment to transparency and fair practices. Review our terms to understand your rights and responsibilities as a valued member of RIP FITNESS.",
    content: termsContent,
    importance: "high" as const,
  };

  return (
    <main>
      <TermsSection section={mainSection} />
    </main>
  );
}
