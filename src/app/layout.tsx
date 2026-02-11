import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/common/navbar";
import { PremiumFooter } from "@/components/common/footer/premium-footer";
import { ToastProvider } from "@/components/ui/toast";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Optimize font loading
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Optimize font loading
});

export const metadata: Metadata = {
  title: {
    template: "%s | Paradise Latin Dance Studio",
    default: "Paradise Latin Dance Studio - Premier Latin Dance Classes in Hawaii"
  },
  description: "Learn authentic Latin dance styles like Salsa, Bachata & more at Paradise Latin Dance Studio in O'ahu, Hawaii. Join our inclusive dance community today!",
  keywords: ["Latin dance Hawaii", "Salsa classes Oahu", "Bachata lessons Hawaii", "Paradise Latin Dance", "Dance studio Hawaii", "Latin dance community", "Hawaiian dance school", "Latin dance instructors", "Dance lessons Waipahu", "Rico Latin dance teacher"],
  authors: [{ name: "Paradise Latin Dance Studio" }],
  creator: "Paradise Latin Dance Studio",
  publisher: "Paradise Latin Dance Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://paradiselatindance.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Paradise Latin Dance Studio - Premier Latin Dance Classes in Hawaii",
    description: "Learn authentic Latin dance styles like Salsa, Bachata & more at Paradise Latin Dance Studio in O'ahu, Hawaii. Join our inclusive dance community today!",
    url: "https://paradiselatindance.com",
    siteName: "Paradise Latin Dance Studio",
    images: [
      {
        url: "/og-image.jpg", // Will be resolved against metadataBase
        width: 1200,
        height: 630,
        alt: "Paradise Latin Dance Studio - Premium dance instruction in Hawaii",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paradise Latin Dance Studio - Premier Latin Dance Classes in Hawaii",
    description: "Learn authentic Latin dance styles like Salsa, Bachata & more at Paradise Latin Dance Studio in O'ahu, Hawaii. Join our inclusive dance community today!",
    images: ["/og-image.jpg"], // Will be resolved against metadataBase
    creator: "@paradiselatindance",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script id="organization-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DanceSchool",
            "name": "Paradise Latin Dance Studio",
            "url": "https://paradiselatindance.com",
            "logo": "https://paradiselatindance.com/logo.png",
            "image": "https://paradiselatindance.com/og-image.jpg",
            "description": "Premier Latin dance instruction in Hawaii, offering classes in Salsa, Bachata, and more.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "94-111 Leokane St",
              "addressLocality": "Waipahu",
              "addressRegion": "HI",
              "postalCode": "96797",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 21.3889, 
              "longitude": -157.9874
            },
            "telephone": "+18088409926", 
            "email": "paradiselatindance@gmail.com",
            "openingHours": "Mo-Fr 16:00-22:00 Sa 09:00-18:00",
            "sameAs": [
              "https://www.instagram.com/paradiselatindance/",
              "https://www.facebook.com/p/Paradise-Latin-Dance-61555017040130/",
              "https://www.youtube.com/@Paradiselatindance",
              "https://www.tiktok.com/@paradiselatindance"
            ]
          })}
        </Script>
        <ToastProvider>
          <Navbar/>
          {children}
          <PremiumFooter/>
        </ToastProvider>
      </body>
    </html>
  );
}
