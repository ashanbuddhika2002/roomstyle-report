import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StyleVault | Home Decor & Interior Design",
  description: "Discover curated room style aesthetics, AI-powered interior design reports, and home decor inspiration.",
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