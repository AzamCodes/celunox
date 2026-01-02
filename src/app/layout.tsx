

import type { Metadata, Viewport } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Script from "next/script";
// import Footer from "./components/Footer";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#000000',
};

export const metadata: Metadata = {
  title: {
    default: "Celunox – Full-Service Digital Agency",
    template: "%s | Celunox"
  },
  description: "Celunox is a full-service digital agency specializing in websites, content, and media designed to scale businesses with clarity and impact.",
  keywords: ["Digital Agency", "Web Development", "UX/UI Design", "Next.js", "React", "Performance", "Celunox"],
  authors: [{ name: "Celunox", url: "https://celunox.com" }],
  creator: "Celunox",
  publisher: "Celunox",
  metadataBase: new URL('https://celunox.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://celunox.com',
    title: 'Celunox – Full-Service Digital Agency',
    description: 'Websites, content, and media designed to scale businesses with clarity and impact.',
    siteName: 'Celunox',
    images: [
      {
        url: '/celunox-og.png',
        width: 1200,
        height: 630,
        alt: 'Celunox – Full-Service Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Celunox – Full-Service Digital Agency',
    description: 'Websites, content, and media designed to scale businesses with clarity and impact.',
    creator: '@celunox',
    images: ['/celunox-og.png'],
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Celunox",
    "url": "https://celunox.com",
    "logo": "https://celunox.com/celunox-logo.png",
    "sameAs": [
      "https://linkedin.com/company/celunox",
      "https://twitter.com/celunox",
      "https://github.com/celunox"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@celunox.com",
      "contactType": "customer support"
    },
    "description": "Celunox is a full-service digital agency delivering professional web, content, and media solutions designed for business growth.",
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "Celunox Team"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressCountry": "IN"
    }
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${interTight.variable} ${jetbrainsMono.variable} antialiased`} style={{ fontFamily: 'var(--font-inter-tight)' }}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
