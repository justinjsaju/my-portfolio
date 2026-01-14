import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/*
 * ============================================================================
 * 🎯 CUSTOMIZE YOUR PORTFOLIO METADATA HERE
 * ============================================================================
 * This controls what appears in browser tabs, search results, and social shares.
 * 
 * To update with AI: "Update the metadata with my name [YOUR NAME], 
 * degree [YOUR DEGREE], and university [YOUR UNIVERSITY]"
 * ============================================================================
 */
export const metadata: Metadata = {
  title: "Justin Saju | B.Tech ECE Student, SRMIST",
  description: "Portfolio of Justin Saju - 3rd Year B.Tech Electronics and Communication Engineering student at SRM Institute of Science & Technology. Passionate about Embedded Systems, Signal Processing, and PCB Design.",
  keywords: ["Justin Saju", "SRMIST", "ECE Student", "Embedded Systems", "Signal Processing", "Arduino", "ESP32", "Electronics Engineering"],
  authors: [{ name: "Justin Saju" }],
  openGraph: {
    title: "Justin Saju | B.Tech ECE Student, SRMIST",
    description: "Student portfolio showcasing projects in Embedded Systems, Robotics, and IoT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
