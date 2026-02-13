import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import ClientLayout from "./ClientLayout";

const fallbackStorage = {
  getItem: () => null,
  setItem: () => undefined,
  removeItem: () => undefined,
  clear: () => undefined,
};

if (typeof globalThis !== "undefined") {
  const storage = (globalThis as { localStorage?: unknown }).localStorage as
    | { getItem?: unknown }
    | undefined;
  if (storage && typeof storage.getItem !== "function") {
    (globalThis as { localStorage?: unknown }).localStorage = fallbackStorage;
  }
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shrutik Meshram - Software Developer",
    template: "%s | Shrutik Meshram",
  },
  description:
    "Software developer specializing in real-time systems, open source, and modern web development with Next.js, React, TypeScript, and Bun.",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Shrutik Meshram - Software Developer",
    description:
      "Software developer building real-time, scalable products with Next.js, React, TypeScript, and Bun.",
    siteName: "Shrutik Meshram",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shrutik Meshram - Software Developer",
    description:
      "Software developer building real-time, scalable products with modern web tooling.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
