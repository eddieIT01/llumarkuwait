import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CinematicHero from '@/app/components/CinematicHero';
import WindowTintSection from '@/app/components/WindowTintSection';
import PPFSection from '@/app/components/PPFSection';
import SafetySection from '@/app/components/SafetySection';
import ShowroomSection from '@/app/components/ShowroomSection';
import BookingFlowSection from '@/app/components/BookingFlowSection';
import GallerySection from '@/app/components/GallerySection';
import ContactSection from '@/app/components/ContactSection';

export const metadata: Metadata = {
  title: 'LLumar Kuwait — Protection Without Compromise',
  description: "Kuwait's exclusive LLumar distributor since 2000. Premium automotive tint, paint protection film, and architectural window films — 25+ years of engineered protection.",
};

export default function HomePage() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Header />
      <CinematicHero />
      <WindowTintSection />
      <PPFSection />
      <SafetySection />
      <ShowroomSection />
      <BookingFlowSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}