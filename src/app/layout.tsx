import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
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

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });


export const metadata: Metadata = {
  metadataBase: new URL("https://shrutik.space"),
  title: {
    default: "Shrutik Meshram | Software Developer",
    template: "%s | Shrutik Meshram",
  },
  description:
    "Software developer specializing in real-time systems, open source, and modern web development with Next.js, React, TypeScript, and Bun.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shrutik.space",
    title: "Shrutik Meshram | Software Developer",
    description:
      "Software developer building real-time, scalable products with Next.js, React, TypeScript, and Bun.",
    siteName: "Shrutik Meshram",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shrutik Meshram | Software Developer",
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
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${bricolage.className} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shrutik Meshram",
              url: "https://shrutik.space",
              jobTitle: "Software Developer",
              description: "Software developer specializing in Next.js, TypeScript, and Bun. NIT Karnataka graduate.",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "National Institute of Technology Karnataka"
              },
              sameAs: [
                "https://www.linkedin.com/in/shrutikcs/",
                "https://github.com/shrutikcs",
                "https://x.com/shrutikcs",
                "https://www.instagram.com/shrutikcs/",
                "https://www.youtube.com/@shrutikcs",
                "https://leetcode.com/u/shrutikcs/"
              ],
            }),
          }}
        />
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
