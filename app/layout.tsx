import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Inter-Cleaning Services — Premium Cleaning across the GTA",
  description:
    "Professional, premium residential, commercial, deep, carpet, and window cleaning services in Toronto & Greater Toronto Area. Dedicated to sparkling standards.",
  keywords: [
    "cleaning services toronto",
    "gta residential cleaning",
    "office cleaning toronto",
    "deep cleaning service gta",
    "carpet cleaning",
    "window washing",
  ],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Inter-Cleaning Services — Premium Cleaning across the GTA",
    description:
      "Spotless residential and commercial cleaning services across Toronto and the Greater Toronto Area. Get a free estimate online.",
    url: "https://intercleaning.ca",
    siteName: "Inter-Cleaning Services",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col font-opensans bg-white text-text-dark">
        <LanguageProvider>
          <Header />
          <main className="flex-grow pt-[72px] lg:pt-[84px]">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

