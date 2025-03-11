import { Metadata } from "next";
import { PrivacyPolicySection } from "@/components/sections/privacy/v1/privacy-policy-section";

export const metadata: Metadata = {
  title: "Privacy Policy | RIP FITNESS - Home away from Home",
  description: "Learn about how RIP FITNESS protects your privacy and personal information. We are committed to maintaining the trust and confidence of our visitors and members.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyPolicySection />
    </main>
  );
}
