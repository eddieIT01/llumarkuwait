import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Commercial Window Film — Solar Control & Energy Efficiency | LLumar Kuwait',
  description: 'LLumar commercial window film in Kuwait. Solar control, energy efficiency, glare reduction, and privacy for offices, retail, and commercial buildings.'
};

const benefits = [
{ title: 'Energy Efficiency', desc: 'Reduce HVAC load and energy costs by blocking solar heat before it enters the building.' },
{ title: 'Glare Control', desc: 'Improve employee productivity and comfort by eliminating harsh glare on screens and workspaces.' },
{ title: 'UV Protection', desc: 'Protect merchandise, furnishings, and interiors from UV-induced fading and damage.' },
{ title: 'Privacy & Branding', desc: 'Decorative and privacy films for meeting rooms, reception areas, and branded glass surfaces.' },
{ title: 'Safety Compliance', desc: 'Safety and security films help meet building codes and protect occupants from glass hazards.' },
{ title: 'Minimal Disruption', desc: 'Professional installation with minimal disruption to business operations.' }];


export default function CommercialPage() {
  return (
    <main className="bg-[#FAFAF8] text-[#111111] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[65vh] min-h-[500px] overflow-hidden bg-[#1A1A1A] flex items-end">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_15257e16c-1787541997232.png"
          alt="Modern commercial office building with LLumar solar control window film installed"
          fill
          className="object-cover opacity-60"
          priority />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-16 w-full">
          <nav className="flex items-center gap-2 text-[10px] tracking-wider text-white/40 uppercase mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Commercial</span>
          </nav>
          <span className="section-label" style={{ color: '#CC0000' }}>Architectural</span>
          <h1 className="mt-3 font-display font-light text-white leading-tight" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            Commercial<br />
            <span className="italic text-white/70">Window Film</span>
          </h1>
          <p className="mt-4 text-base text-white/55 max-w-[480px] leading-relaxed">
            Solar control, energy efficiency, and privacy solutions for Kuwait's commercial buildings. Trusted by offices, retail spaces, and hospitality venues.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#FAFAF8] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <span className="section-label">Commercial Benefits</span>
          <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-14" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Smarter Buildings.<br />
            <span className="italic text-[#6B6560]">Lower Costs.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E0DBD5]">
            {benefits.map((b, i) =>
            <div key={b.title} className="bg-[#FAFAF8] p-8 hover:bg-white transition-colors duration-300">
                <div className="text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-3">0{i + 1}</div>
                <h3 className="text-lg font-display font-light text-[#1A1A1A] mb-3">{b.title}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{b.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <span className="section-label" style={{ color: '#CC0000' }}>Commercial Projects</span>
          <h2 className="mt-4 font-display font-light text-white leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Request a Commercial Quote
          </h2>
          <p className="text-sm text-white/45 mb-10 max-w-[400px] mx-auto leading-relaxed">
            Contact our commercial team to discuss your project requirements and receive a detailed proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/96565008585?text=I'm interested in commercial window film for my building."
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