import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StyleVault | Home Decor & Interior Design",
  description: "Discover curated room style aesthetics, AI-powered interior design reports, and home decor inspiration.",
  other: {
    "p:domain_verify": "70851e5ac243e1a423465b01393f3ea4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      {children}
    
  );
}