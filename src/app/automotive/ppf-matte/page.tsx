import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Matte PPF — Satin Paint Protection Film | LLumar Kuwait',
  description: 'LLumar Matte Paint Protection Film in Kuwait. Transform gloss paint to a premium satin finish while protecting against chips and scratches. Professional installation.'
};

const features = [
{ title: 'Satin Matte Finish', desc: 'Transforms any gloss paint to a sophisticated, premium satin appearance that turns heads.' },
{ title: 'Self-Healing', desc: 'Minor surface scratches disappear with heat exposure, maintaining the flawless matte look.' },
{ title: 'Hydrophobic Surface', desc: 'Water beads and rolls off, carrying contaminants with it for effortless maintenance.' },
{ title: 'Impact Resistant', desc: 'Absorbs stone chips, road debris and minor impacts before they reach your paint.' },
{ title: 'UV Stable', desc: 'Resists discoloration and maintains the consistent matte appearance over time.' },
{ title: 'Premium Appearance', desc: 'Achieve a factory matte look at a fraction of the cost of a matte paint job.' }];


export default function MattePPFPage() {
  return (
    <main className="bg-[#FAFAF8] text-[#111111] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[65vh] min-h-[500px] overflow-hidden bg-[#1A1A1A] flex items-end">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_18dca8555-1782695651053.png"
          alt="LLumar Matte PPF applied to a vehicle — premium satin paint protection film"
          fill
          className="object-cover opacity-50"
          priority />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-16 w-full">
          <nav className="flex items-center gap-2 text-[10px] tracking-wider text-white/40 uppercase mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/automotive/paint-protection-film" className="hover:text-white transition-colors">PPF</Link>
            <span>/</span>
            <span className="text-white/70">Matte</span>
          </nav>
          <span className="section-label" style={{ color: '#CC0000' }}>Paint Protection Film</span>
          <h1 className="mt-3 font-display font-light text-white leading-tight" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            Matte PPF<br />
            <span className="italic text-white/70">Premium Satin Protection</span>
          </h1>
          <p className="mt-4 text-base text-white/55 max-w-[480px] leading-relaxed">
            Transform your vehicle's gloss paint into a sophisticated satin finish while protecting it from chips, scratches, and environmental damage.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#FAFAF8] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <span className="section-label">Why Matte PPF?</span>
          <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-14" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Protection Meets<br />
            <span className="italic text-[#6B6560]">Sophistication</span>
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

      {/* Official LLumar Matte Finish Visual */}
      <section className="bg-[#F5F0EA] py-20 lg:py-28 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1fd30418b-1782695650755.png"
                  alt="LLumar Matte PPF official product shot — premium satin finish paint protection film on a vehicle"
                  fill
                  className="object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[10px] tracking-[0.3em] text-white/80 uppercase font-semibold">LLumar® Matte PPF</span>
                </div>
              </div>
              {/* Accent border */}
              <div className="absolute -bottom-3 -left-3 w-full h-full border border-[#1A1A1A]/20 pointer-events-none" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="section-label" style={{ color: '#CC0000' }}>Official LLumar Product</span>
              <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
                The Matte Finish<br />
                <span className="italic text-[#6B6560]">Up Close</span>
              </h2>
              <p className="text-sm text-[#6B6560] leading-relaxed mb-6 max-w-[420px]">
                LLumar Matte PPF delivers a velvety, non-reflective satin surface that transforms any gloss paint into a premium factory-matte look — without the cost or permanence of a matte respray.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                'Velvety satin, zero glare',
                'Consistent sheen across all panels',
                'Transforms gloss paint instantly',
                'Removable — restore original finish anytime'].
                map((item) =>
                <li key={item} className="flex items-center gap-3 text-sm text-[#4A4540]">
                    <span className="w-1.5 h-1.5 bg-[#CC0000] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compare finishes */}
      <section className="bg-[#F5F0EA] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <span className="section-label">Finish Options</span>
          <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-14" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Matte vs<br />
            <span className="italic text-[#6B6560]">Gloss PPF</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E0DBD5]">
            <div className="bg-[#1A1A1A] p-10 lg:p-12">
              <div className="text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-3">Currently Viewing</div>
              <h3 className="text-2xl font-display font-light text-white mb-3">Matte PPF</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-6">Transforms gloss paint to a premium satin finish. The ultimate upgrade for discerning vehicle owners who want to stand out.</p>
              <ul className="flex flex-col gap-2">
                {['Satin matte appearance', 'Transforms gloss paint', 'Premium factory-matte look', 'Self-healing surface'].map((item) =>
                <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                    <span className="w-1 h-1 bg-[#CC0000] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                )}
              </ul>
            </div>
            <Link href="/automotive/ppf-gloss" className="group bg-[#F5F0EA] p-10 lg:p-12 hover:bg-[#CC0000] transition-all duration-500">
              <div className="text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-3 group-hover:text-white/60">Explore Instead</div>
              <h3 className="text-2xl font-display font-light text-[#1A1A1A] group-hover:text-white transition-colors duration-300 mb-3">Gloss PPF</h3>
              <p className="text-sm text-[#6B6560] group-hover:text-white/70 transition-colors duration-300 leading-relaxed mb-6">Crystal-clear protection that preserves your vehicle's original finish and enhances paint depth.</p>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wider text-[#CC0000] uppercase group-hover:text-white transition-colors duration-300">
                View Gloss PPF
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <span className="section-label" style={{ color: '#CC0000' }}>Protect Your Vehicle</span>
          <h2 className="mt-4 font-display font-light text-white leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Book Your Matte PPF Installation
          </h2>
          <p className="text-sm text-white/45 mb-10 max-w-[400px] mx-auto leading-relaxed">
            Contact LLumar Kuwait to discuss your PPF requirements and book a professional installation at our Shuwaikh or Al Rai showroom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/96565008585?text=I'm interested in Matte PPF for my vehicle."
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