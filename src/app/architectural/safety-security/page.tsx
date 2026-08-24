import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Safety & Security Film — LLumar Kuwait',
  description: 'LLumar safety and security window film in Kuwait. Glass fragment containment, impact resistance and security applications for residential and commercial properties.'
};

const applications = [
{ title: 'Glass Fragment Containment', desc: 'When glass breaks, safety film holds the fragments together — reducing the risk of injury from flying shards.' },
{ title: 'Impact Resistance', desc: 'Adds a layer of resistance to glass, making it more difficult to penetrate quickly.' },
{ title: 'Residential Security', desc: 'Protect your home\'s glass entry points against accidental breakage and forced entry attempts.' },
{ title: 'Commercial Security', desc: 'Protect storefronts, offices and commercial properties against vandalism and break-in attempts.' },
{ title: 'Accidental Breakage', desc: 'Reduce injury risk from accidental glass breakage in high-traffic areas.' },
{ title: 'UV & Solar Control', desc: 'Many safety films also provide UV protection and solar heat reduction as an added benefit.' }];


export default function SafetySecurityPage() {
  return (
    <main className="bg-[#FAFAF8] text-[#111111] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[65vh] min-h-[500px] overflow-hidden bg-[#1A1A1A] flex items-end">
        <AppImage
          src="https://llumar.com/content/dam/eastman/performance-films/llumar/imagery/architectural/llumar-safety-security.jpg"
          alt="LLumar safety and security window film holding glass fragments together"
          fill
          className="object-cover opacity-55"
          priority />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-16 w-full">
          <span className="section-label" style={{ color: '#CC0000' }}>Architectural</span>
          <h1 className="mt-3 font-display font-light text-white leading-tight" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            Safety &<br />
            <span className="italic text-white/70">Security Film</span>
          </h1>
          <p className="mt-4 text-base text-white/55 max-w-[480px] leading-relaxed">
            Protect what matters. LLumar safety film holds glass together when it breaks — reducing injury risk and adding a layer of security to any glazed surface.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#FAFAF8] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="section-label">How It Works</span>
              <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Glass Breaks.<br />
                <span className="italic text-[#6B6560]">Film Holds.</span>
              </h2>
              <p className="text-base text-[#1A1A1A] leading-relaxed mb-4">
                LLumar safety and security film is a thick, optically clear film applied to the interior surface of glass. When glass is broken — by impact, accident or attempted forced entry — the film holds the fragments together.
              </p>
              <p className="text-sm text-[#6B6560] leading-relaxed">
                This containment dramatically reduces the risk of injury from flying glass shards and makes it significantly more difficult and time-consuming to penetrate the glass opening. The film is virtually invisible once installed — providing protection without altering the appearance of your windows.
              </p>
            </div>
            <div className="bg-[#1A1A1A] p-10">
              <p className="text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-6">Key Properties</p>
              {[
              { label: 'Fragment Containment', value: 'Holds glass in place' },
              { label: 'Appearance', value: 'Optically clear' },
              { label: 'UV Protection', value: 'Available in most grades' },
              { label: 'Application', value: 'Interior surface' },
              { label: 'Installation', value: 'Professional only' }].
              map((item) =>
              <div key={item.label} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                  <span className="text-sm text-white/50">{item.label}</span>
                  <span className="text-sm font-medium text-white">{item.value}</span>
                </div>
              )}
            </div>
          </div>

          {/* Applications */}
          <span className="section-label">Applications</span>
          <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-12" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Where Safety Film<br />
            <span className="italic text-[#6B6560]">Makes a Difference</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E0DBD5]">
            {applications.map((app, i) =>
            <div key={app.title} className="bg-[#FAFAF8] p-8 hover:bg-white transition-colors duration-300">
                <div className="text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-3">0{i + 1}</div>
                <h3 className="text-lg font-display font-light text-[#1A1A1A] mb-3">{app.title}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{app.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display font-light text-white leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Protect Your Property
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/96565008585?text=I'm interested in safety and security window film." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#CC0000] text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#A30000] transition-colors duration-300">
              Get a Quote
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