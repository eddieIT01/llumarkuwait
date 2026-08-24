import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PPF Coverage Options — Partial to Full Body | LLumar Kuwait',
  description: 'LLumar PPF coverage options in Kuwait. From partial front protection to full-body coverage. Choose the right level of protection for your vehicle.',
};

const coverageOptions = [
  {
    title: 'Partial Front',
    subtitle: 'Essential Protection',
    desc: 'Hood, front bumper, and mirrors — protecting the highest-impact areas that take the most road debris. The most popular entry-level PPF package.',
    includes: ['Full hood', 'Front bumper', 'Side mirrors', 'Headlights'],
    ideal: 'Daily drivers seeking targeted protection at an accessible price point.',
  },
  {
    title: 'Full Front',
    subtitle: 'Comprehensive Front Coverage',
    desc: 'Complete front-end protection including fenders, A-pillars, and headlights. Covers every surface that faces oncoming road debris.',
    includes: ['Full hood', 'Full front bumper', 'Full fenders', 'A-pillars', 'Headlights', 'Side mirrors'],
    ideal: 'Vehicles driven frequently on highways or in high-debris environments.',
  },
  {
    title: 'Full Body',
    subtitle: 'Maximum Protection',
    desc: 'Comprehensive protection for the entire vehicle exterior. Every painted panel is shielded from chips, scratches, and environmental damage.',
    includes: ['All panels front to rear', 'Doors and door edges', 'Roof', 'Trunk/boot lid', 'Rear bumper', 'All pillars'],
    ideal: 'New vehicles, luxury cars, and owners who want complete peace of mind.',
  },
  {
    title: 'Custom',
    subtitle: 'Tailored Coverage',
    desc: 'Targeted protection for specific panels, door edges, or high-wear areas. Ideal for addressing particular concerns or complementing existing protection.',
    includes: ['Door edge guards', 'Rocker panels', 'Rear arch protection', 'Trunk ledge', 'Any specific panel'],
    ideal: 'Vehicles with existing partial coverage or specific high-wear concerns.',
  },
];

export default function PPFCoveragePage() {
  return (
    <main className="bg-[#FAFAF8] text-[#111111] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1A1A1A]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <nav className="flex items-center gap-2 text-[10px] tracking-wider text-white/40 uppercase mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/automotive/paint-protection-film" className="hover:text-white transition-colors">PPF</Link>
            <span>/</span>
            <span className="text-white/70">Coverage Options</span>
          </nav>
          <span className="section-label" style={{ color: '#CC0000' }}>Paint Protection Film</span>
          <h1 className="mt-3 font-display font-light text-white leading-tight" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            Coverage<br />
            <span className="italic text-white/70">Options</span>
          </h1>
          <p className="mt-4 text-base text-white/55 max-w-[480px] leading-relaxed">
            From targeted front-end protection to full-body coverage — choose the right level of protection for your vehicle and budget.
          </p>
        </div>
      </section>

      {/* Coverage options */}
      <section className="bg-[#FAFAF8] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E0DBD5]">
            {coverageOptions.map((opt, i) => (
              <div key={opt.title} className="bg-[#FAFAF8] p-10 hover:bg-white transition-colors duration-300">
                <div className="text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-2">0{i + 1}</div>
                <h3 className="text-2xl font-display font-light text-[#1A1A1A] mb-1">{opt.title}</h3>
                <p className="text-sm font-medium text-[#CC0000] mb-4">{opt.subtitle}</p>
                <p className="text-sm text-[#6B6560] leading-relaxed mb-6">{opt.desc}</p>
                <div className="mb-6">
                  <p className="text-[10px] tracking-[0.3em] text-[#9A9590] uppercase mb-3">Includes</p>
                  <div className="grid grid-cols-2 gap-2">
                    {opt.includes.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#CC0000] rounded-full flex-shrink-0" />
                        <span className="text-xs text-[#6B6560]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-[#9A9590] italic">{opt.ideal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <span className="section-label" style={{ color: '#CC0000' }}>Get a Quote</span>
          <h2 className="mt-4 font-display font-light text-white leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Discuss Your Coverage Needs
          </h2>
          <p className="text-sm text-white/45 mb-10 max-w-[400px] mx-auto leading-relaxed">
            Contact our team to discuss the right coverage option for your vehicle and receive a personalised quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/96565008585?text=I'd like to discuss PPF coverage options for my vehicle."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#1DA851] transition-colors duration-300"
            >
              WhatsApp Us
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 border border-white/30 text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-white/10 transition-colors duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
