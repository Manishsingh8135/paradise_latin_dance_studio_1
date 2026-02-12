import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Paradise Latin Dance Studio",
  description: "Learn how Paradise Latin Dance Studio collects, uses, and protects your personal information. Your privacy is important to us.",
  openGraph: {
    title: "Privacy Policy | Paradise Latin Dance Studio",
    description: "Learn how Paradise Latin Dance Studio collects, uses, and protects your personal information.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Paradise Latin Dance Studio",
    description: "Learn how Paradise Latin Dance Studio collects, uses, and protects your personal information.",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
