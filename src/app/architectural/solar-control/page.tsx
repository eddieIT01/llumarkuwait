import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solar Control Window Film — Reduce Heat, Preserve Views | LLumar Kuwait',
  description: 'LLumar solar control window film in Kuwait. Reduce heat and glare while preserving your views. Energy-efficient solutions for homes and commercial buildings.'
};

const features = [
{ title: 'Heat Rejection', desc: 'Block significant solar heat before it enters your space — reducing cooling costs and improving comfort.' },
{ title: 'Preserve Views', desc: 'Unlike blinds or curtains, solar control film maintains your outward views while controlling heat and glare.' },
{ title: 'Glare Reduction', desc: 'Eliminate harsh glare on screens, workspaces, and living areas without darkening the room.' },
{ title: 'UV Blocking', desc: 'Block up to 99% of UV rays that cause fading and damage to interiors and furnishings.' },
{ title: 'Energy Savings', desc: 'Reduce your air conditioning load and energy bills with effective solar management.' },
{ title: 'Comfort Year-Round', desc: 'Maintain consistent interior temperatures and comfort throughout Kuwait\'s extreme seasons.' }];


export default function SolarControlPage() {
  return (
    <main className="bg-[#FAFAF8] text-[#111111] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[65vh] min-h-[500px] overflow-hidden bg-[#1A1A1A] flex items-end">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_13db8abff-1787541997554.png"
          alt="Modern building with LLumar solar control window film — reducing heat while preserving views"
          fill
          className="object-cover opacity-60"
          priority />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-16 w-full">
          <nav className="flex items-center gap-2 text-[10px] tracking-wider text-white/40 uppercase mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Solar Control</span>
          </nav>
          <span className="section-label" style={{ color: '#CC0000' }}>Architectural</span>
          <h1 className="mt-3 font-display font-light text-white leading-tight" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            Solar Control<br />
            <span className="italic text-white/70">Film</span>
          </h1>
          <p className="mt-4 text-base text-white/55 max-w-[480px] leading-relaxed">
            Reduce heat and glare while preserving your views. LLumar solar control film is the intelligent solution for Kuwait's intense sun.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#FAFAF8] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <span className="section-label">Solar Control Benefits</span>
          <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-14" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Control the Sun.<br />
            <span className="italic text-[#6B6560]">Keep the View.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E0DBD5]">
            {features.map((f, i) =>
            <div key={f.title} className="bg-[#FAFAF8] p-8 hover:bg-white transition-colors duration-300">
                <div className="text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-3">0{i + 1}</div>
                <h3 className="text-lg font-display font-light text-[#1A1A1A] mb-3">{f.title}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{f.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <span className="section-label" style={{ color: '#CC0000' }}>Solar Solutions</span>
          <h2 className="mt-4 font-display font-light text-white leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Get a Solar Control Assessment
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/96565008585?text=I'm interested in solar control window film."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#1DA851] transition-colors duration-300">

              WhatsApp Us
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 border border-white/30 text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-white/10 transition-colors duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>);

}