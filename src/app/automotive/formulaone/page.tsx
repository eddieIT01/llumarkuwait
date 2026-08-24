import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FormulaOne by LLumar — Flagship Tint Line | LLumar Kuwait',
  description: 'FormulaOne by LLumar in Kuwait. The flagship automotive window film line combining maximum performance, clarity, and style for discerning vehicle owners.'
};

const series = [
{ name: 'Pinnacle', tagline: 'The ultimate in ceramic performance', desc: 'The highest-performing film in the FormulaOne lineup. Nano-ceramic technology delivers maximum heat rejection, 99% UV blocking, and crystal-clear optical quality.' },
{ name: 'Stratos', tagline: 'Premium ceramic with enhanced clarity', desc: 'Stratos combines high-performance ceramic technology with exceptional optical clarity — the ideal balance of protection and aesthetics.' },
{ name: 'Celsius', tagline: 'Advanced heat rejection technology', desc: 'Celsius delivers outstanding heat rejection and UV protection using advanced multi-layer technology, without the metallic appearance.' }];


export default function FormulaOnePage() {
  return (
    <main className="bg-[#FAFAF8] text-[#111111] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[65vh] min-h-[500px] overflow-hidden bg-[#1A1A1A] flex items-end">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1c61245cd-1787541997966.png"
          alt="FormulaOne by LLumar — flagship automotive window film on a luxury vehicle"
          fill
          className="object-cover opacity-60"
          priority />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-16 w-full">
          <nav className="flex items-center gap-2 text-[10px] tracking-wider text-white/40 uppercase mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/automotive/window-tint" className="hover:text-white transition-colors">Window Tint</Link>
            <span>/</span>
            <span className="text-white/70">FormulaOne</span>
          </nav>
          <span className="section-label" style={{ color: '#CC0000' }}>Automotive</span>
          <h1 className="mt-3 font-display font-light text-white leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}>
            FormulaOne<br />
            <span className="italic text-white/70">by LLumar</span>
          </h1>
          <p className="mt-4 text-base text-white/55 max-w-[480px] leading-relaxed">
            LLumar's flagship automotive window film line. Engineered for those who demand the very best in performance, clarity, and style.
          </p>
        </div>
      </section>

      {/* Series */}
      <section className="bg-[#FAFAF8] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <span className="section-label">The FormulaOne Series</span>
          <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-14" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Choose Your<br />
            <span className="italic text-[#6B6560]">Performance Level</span>
          </h2>
          <div className="flex flex-col gap-px bg-[#E0DBD5]">
            {series.map((s, i) =>
            <div key={s.name} className="bg-[#FAFAF8] p-8 lg:p-10 hover:bg-white transition-colors duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 items-start">
                  <div>
                    <div className="text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-2">0{i + 1}</div>
                    <h3 className="text-2xl font-display font-light text-[#1A1A1A]">{s.name}</h3>
                    <p className="text-sm font-medium text-[#6B6560] mt-1">{s.tagline}</p>
                  </div>
                  <p className="text-sm text-[#6B6560] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <span className="section-label" style={{ color: '#CC0000' }}>Experience FormulaOne</span>
          <h2 className="mt-4 font-display font-light text-white leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Book Your Installation
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/96565008585?text=I'm interested in FormulaOne by LLumar for my vehicle."
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