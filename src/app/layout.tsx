import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Fraunces, DM_Sans } from 'next/font/google';
import '../styles/tailwind.css';
import { LanguageProvider } from '@/context/LanguageContext';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'LLumar Kuwait — Engineered to Protect',
  description: "Kuwait's exclusive LLumar distributor since 2000. Premium automotive tint, paint protection film, and architectural window films — 25+ years of engineered protection.",
  icons: {
    icon: [
      { url: '/assets/images/E059CFB8-5B26-481D-9D1A-D046B41D54D0-1787551591514.png', type: 'image/png' },
    ],
    shortcut: '/assets/images/E059CFB8-5B26-481D-9D1A-D046B41D54D0-1787551591514.png',
    apple: '/assets/images/E059CFB8-5B26-481D-9D1A-D046B41D54D0-1787551591514.png',
  },
  openGraph: {
    title: 'LLumar Kuwait — Engineered to Protect',
    description: "Exclusive LLumar distributor in Kuwait since 2000. Automotive tint, PPF, and architectural films.",
    images: [{ url: 'https://llumarkuwait.com/wp-content/uploads/2024/09/LLumar-logo.png', width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className={`${dmSans.className} bg-[#FAFAF8] text-[#111111]`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fllumarkuwa9745back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}