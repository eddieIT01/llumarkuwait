import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Windshield Protection Film — Clarity & UV Protection | LLumar Kuwait',
  description: 'LLumar windshield protection film in Kuwait. Optical clarity, UV protection, and glare reduction for your windshield. Professional installation.'
};

const features = [
{ title: 'Optical Clarity', desc: 'Specially formulated for windshield application — zero distortion, maximum visibility in all conditions.' },
{ title: 'UV Protection', desc: 'Blocks harmful UV rays protecting the driver and reducing dashboard fading.' },
{ title: 'Glare Reduction', desc: 'Reduces harsh glare from Kuwait\'s intense sun and oncoming headlights at night.' },
{ title: 'Heat Rejection', desc: 'Reduces solar heat entering through the windshield for a cooler cabin.' },
{ title: 'Impact Resistance', desc: 'Adds a layer of protection against minor stone chips and road debris.' },
{ title: 'Easy Maintenance', desc: 'Hydrophobic coating repels water and improves visibility in rain.' }];


export default function WindshieldPage() {
  return (
    <main className="bg-[#FAFAF8] text-[#111111] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[65vh] min-h-[500px] overflow-hidden bg-[#1A1A1A] flex items-end">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1ae9b2256-1787541997970.png"
          alt="LLumar windshield protection film — clarity and UV protection for vehicle windshield"
          fill
          className="object-cover opacity-60"
          priority />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-16 w-full">
          <nav className="flex items-center gap-2 text-[10px] tracking-wider text-white/40 uppercase mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/automotive/window-tint" className="hover:text-white transition-colors">Automotive</Link>
            <span>/</span>
            <span className="text-white/70">Windshield</span>
          </nav>
          <span className="section-label" style={{ color: '#CC0000' }}>Automotive</span>
          <h1 className="mt-3 font-display font-light text-white leading-tight" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            Windshield<br />
            <span className="italic text-white/70">Protection</span>
          </h1>
          <p className="mt-4 text-base text-white/55 max-w-[480px] leading-relaxed">
            Clarity, UV protection, and glare reduction for your windshield. LLumar windshield film is engineered for maximum visibility and driver comfort.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#FAFAF8] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <span className="section-label">Windshield Benefits</span>
          <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-14" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            See Clearly.<br />
            <span className="italic text-[#6B6560]">Drive Safely.</span>
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
          <span className="section-label" style={{ color: '#CC0000' }}>Protect Your View</span>
          <h2 className="mt-4 font-display font-light text-white leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Book Windshield Film Installation
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/96565008585?text=I'm interested in windshield protection film."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#1DA851] transition-colors duration-300">

              Book via WhatsApp
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