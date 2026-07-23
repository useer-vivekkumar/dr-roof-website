import type { Metadata } from "next";
import { Zilla_Slab, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://www.drroof.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dr. Roof | Roswell & Atlanta Roofing Contractor | Free Inspections",
  description:
    "Dr. Roof provides residential and commercial roof repair, replacement, and inspections across Roswell, Atlanta, and Marietta, GA. Rated 4.8 stars from 1,900+ homeowners. Request a free inspection today.",
  keywords: [
    "roofing contractor Roswell GA",
    "roof repair Atlanta",
    "roof replacement Marietta GA",
    "commercial roofing Georgia",
    "roof inspection Atlanta",
  ],
  authors: [{ name: "Dr. Roof" }],
  openGraph: {
    title: "Dr. Roof | Roswell & Atlanta Roofing Contractor",
    description:
      "Trusted by 1,900+ homeowners across metro Atlanta. Residential & commercial roofing, repair, replacement, and free inspections.",
    url: siteUrl,
    siteName: "Dr. Roof",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Roof | Roswell & Atlanta Roofing Contractor",
    description:
      "Residential & commercial roofing across metro Atlanta. Rated 4.8/5 from 1,900+ homeowners. Free inspections.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${zillaSlab.variable} ${inter.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
