import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Residential Window Film — Comfort, Privacy & UV Control | LLumar Kuwait',
  description: 'LLumar residential window film in Kuwait. Reduce heat, block UV rays, enhance privacy, and protect your home interior. Professional installation.'
};

const benefits = [
{ title: 'Heat Reduction', desc: 'Significantly reduce solar heat entering your home — lower cooling costs and improve comfort in Kuwait\'s extreme climate.' },
{ title: 'UV Protection', desc: 'Block up to 99% of UV rays that cause furniture, flooring, and artwork to fade prematurely.' },
{ title: 'Privacy Control', desc: 'Maintain outward views while preventing unwanted visibility into your home during daylight hours.' },
{ title: 'Glare Reduction', desc: 'Eliminate harsh glare on screens and living spaces without sacrificing natural light.' },
{ title: 'Safety Film Option', desc: 'Safety films hold glass fragments together in the event of breakage, protecting your family.' },
{ title: 'Energy Savings', desc: 'Reduce your air conditioning load and energy bills with effective solar control film.' }];


export default function ResidentialPage() {
  return (
    <main className="bg-[#FAFAF8] text-[#111111] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[65vh] min-h-[500px] overflow-hidden bg-[#1A1A1A] flex items-end">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_12cb6da1c-1772555229436.png"
          alt="Modern residential interior with LLumar window film installed on large glass windows"
          fill
          className="object-cover opacity-60"
          priority />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-16 w-full">
          <nav className="flex items-center gap-2 text-[10px] tracking-wider text-white/40 uppercase mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Residential</span>
          </nav>
          <span className="section-label" style={{ color: '#CC0000' }}>Architectural</span>
          <h1 className="mt-3 font-display font-light text-white leading-tight" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            Residential<br />
            <span className="italic text-white/70">Window Film</span>
          </h1>
          <p className="mt-4 text-base text-white/55 max-w-[480px] leading-relaxed">
            Transform your home's comfort, privacy, and energy efficiency with LLumar residential window film — professionally installed across Kuwait.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#FAFAF8] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <span className="section-label">Home Benefits</span>
          <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-14" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            A More Comfortable<br />
            <span className="italic text-[#6B6560]">Home</span>
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
          <span className="section-label" style={{ color: '#CC0000' }}>Upgrade Your Home</span>
          <h2 className="mt-4 font-display font-light text-white leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Get a Free Home Assessment
          </h2>
          <p className="text-sm text-white/45 mb-10 max-w-[400px] mx-auto leading-relaxed">
            Contact LLumar Kuwait to discuss your residential window film requirements and book a professional installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/96565008585?text=I'm interested in residential window film for my home."
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