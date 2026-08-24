import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ceramic Window Tint — Maximum Heat Rejection | LLumar Kuwait',
  description: 'LLumar ceramic window tint in Kuwait. Nano-ceramic technology blocks 99% UV rays and rejects significant solar heat without interfering with signals.'
};

const features = [
{ title: 'Up to 99% UV Rejection', desc: 'Nano-ceramic technology blocks virtually all harmful UV rays that cause skin damage and interior fading.' },
{ title: 'Maximum Heat Rejection', desc: 'Significantly reduces solar heat entering your vehicle — critical in Kuwait\'s extreme summer climate.' },
{ title: 'No Signal Interference', desc: 'Unlike metallized films, ceramic tint does not interfere with mobile, GPS, or toll transponder signals.' },
{ title: 'Color Stable', desc: 'Ceramic films maintain their appearance over time — no fading, no purple tint, no bubbling.' },
{ title: 'Optical Clarity', desc: 'Crystal-clear visibility day and night. No reflective haze or distortion.' },
{ title: 'Scratch Resistant', desc: 'Hard-coat surface resists everyday scratches and maintains clarity for years.' }];


export default function CeramicTintPage() {
  return (
    <main className="bg-[#FAFAF8] text-[#111111] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[65vh] min-h-[500px] overflow-hidden bg-[#1A1A1A] flex items-end">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1076c9a92-1768736888399.png"
          alt="LLumar ceramic window tint on a luxury vehicle — maximum heat rejection technology"
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
            <span className="text-white/70">Ceramic</span>
          </nav>
          <span className="section-label" style={{ color: '#CC0000' }}>Automotive</span>
          <h1 className="mt-3 font-display font-light text-white leading-tight" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            Ceramic Tint<br />
            <span className="italic text-white/70">Maximum Performance</span>
          </h1>
          <p className="mt-4 text-base text-white/55 max-w-[480px] leading-relaxed">
            LLumar's premium nano-ceramic technology delivers the highest level of heat rejection and UV protection — without compromising signal clarity or optical quality.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#FAFAF8] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <span className="section-label">Ceramic Technology</span>
          <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-14" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Why Ceramic<br />
            <span className="italic text-[#6B6560]">is the Premium Choice</span>
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
          <span className="section-label" style={{ color: '#CC0000' }}>Upgrade Your Tint</span>
          <h2 className="mt-4 font-display font-light text-white leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Book Ceramic Tint Installation
          </h2>
          <p className="text-sm text-white/45 mb-10 max-w-[400px] mx-auto leading-relaxed">
            Visit our Shuwaikh or Al Rai showroom, or contact us via WhatsApp to book your ceramic tint installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/96565008585?text=I'm interested in ceramic window tint for my vehicle."
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