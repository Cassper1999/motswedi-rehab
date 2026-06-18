import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import SparkleCursor from "@/components/ui/SparkleCursor";
import FloatingHelpButton from "@/components/FloatingHelpButton";
import ScrollProgress from "@/components/ui/ScrollProgress";

export const metadata: Metadata = {
  title: "Motswedi Rehabilitation Centre",
  description: "A Fountain of Hope",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        
        <ScrollProgress />
        <SparkleCursor />
        <Navbar />

        {children}

        <FloatingHelpButton />
      </body>
    </html>
  );
}