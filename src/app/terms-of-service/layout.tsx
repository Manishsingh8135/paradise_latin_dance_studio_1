import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Paradise Latin Dance Studio",
  description: "Terms and conditions for using Paradise Latin Dance Studio services, classes, and facilities in Waipahu, Hawaii.",
  openGraph: {
    title: "Terms of Service | Paradise Latin Dance Studio",
    description: "Terms and conditions for using Paradise Latin Dance Studio services, classes, and facilities.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | Paradise Latin Dance Studio",
    description: "Terms and conditions for using Paradise Latin Dance Studio services, classes, and facilities.",
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
