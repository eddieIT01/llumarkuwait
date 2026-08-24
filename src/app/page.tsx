import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import HeritageStrip from '@/app/components/HeritageStrip';
import ShowroomSection from '@/app/components/ShowroomSection';
import WindowTintSection from '@/app/components/WindowTintSection';
import PPFSection from '@/app/components/PPFSection';
import AboutSection from '@/app/components/AboutSection';
import SafetySection from '@/app/components/SafetySection';
import GallerySection from '@/app/components/GallerySection';
import BookingFlowSection from '@/app/components/BookingFlowSection';
import ContactSection from '@/app/components/ContactSection';

export const metadata: Metadata = {
  title: 'LLumar Kuwait — Engineered to Protect',
  description: "Kuwait's exclusive LLumar distributor since 2000. Premium automotive tint, paint protection film, and architectural window films — 25+ years of engineered protection.",
};

export default function HomePage() {
  return (
    <main className="bg-[#FAFAF8] text-[#111111] overflow-x-hidden">
      <Header />
      <HeroSection />
      <HeritageStrip />
      <ShowroomSection />
      <WindowTintSection />
      <PPFSection />
      <AboutSection />
      <SafetySection />
      <GallerySection />
      <BookingFlowSection />
      <ContactSection />
      <Footer />
    </main>
  );
}