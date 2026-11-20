import type { Metadata } from "next";
import "./globals.css";
import OrganizationSchema from "./organization-schema";

import Navbar from "@/components/layout/Navbar";
import SparkleCursor from "@/components/ui/SparkleCursor";
import FloatingHelpButton from "@/components/FloatingHelpButton";
import ScrollProgress from "@/components/ui/ScrollProgress";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.motswedirehabcentre.com"),
  title: {
    default: "Motswedi Rehabilitation Centre | Official Website | Botswana",
    template: "%s | Motswedi Rehabilitation Centre",
  },
  description:
    "Motswedi Rehabilitation Centre in Mochudi, Botswana provides rehabilitation, physiotherapy, education support, vocational skills training and empowerment programmes.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_BW",
    siteName: "Motswedi Rehabilitation Centre",
    title: "Motswedi Rehabilitation Centre | Official Website",
    description:
      "Rehabilitation, physiotherapy, education support and vocational skills training in Mochudi, Botswana.",
    images: [
      {
        url: "/images/home/motswedihome.webp",
        alt: "Motswedi Rehabilitation Centre",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <OrganizationSchema />
        
        <ScrollProgress />
        <SparkleCursor />
        <Navbar />

        {children}

        <FloatingHelpButton />
      </body>
    </html>
  );
}
