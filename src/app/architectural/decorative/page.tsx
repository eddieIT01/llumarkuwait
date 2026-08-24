import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Decorative Window Films — LLumar Kuwait',
  description: 'LLumar® iLLusions™ decorative window films in Kuwait. Frosted, patterned, and gradient films for homes and commercial spaces.'
};

const residentialBenefits = [
{ title: 'Designer Style', desc: 'Express yourself, create a mood, or update the look of a room with a subtle or dramatic film.' },
{ title: 'Added Privacy', desc: 'Protective privacy for bathroom windows, shower doors, and glass cabinet doors.' },
{ title: 'Hidden Views', desc: 'Conceal clutter or unsightly areas while maintaining natural light flow.' },
{ title: 'Specialty Effects', desc: 'Frosted looks, nature motifs, playful patterns — a series to meet your personal taste.' },
{ title: 'Light Filtering', desc: 'Control the amount and quality of light entering any room.' },
{ title: 'Easy Updates', desc: 'Unlike specialty glass, decorative film is budget-friendly and minimally disruptive to install or remove.' }];


export default function DecorativePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[70vh] flex items-end overflow-hidden">
        <AppImage
          src="https://llumarkuwait.com/wp-content/uploads/2024/10/6.-Residential-decorative-1024x768.jpg"
          alt="LLumar iLLusions decorative window film with frosted pattern on residential window"
          fill
          className="object-cover object-center opacity-45"
          priority />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pb-16 w-full">
          <nav className="flex items-center gap-2 text-xs text-white/30 mb-6 tracking-wider">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/50">Architectural</span>
            <span>/</span>
            <span className="text-[#C9A84C]">Decorative Films</span>
          </nav>
          <span className="text-[10px] tracking-[0.5em] text-[#C9A84C] uppercase font-medium">Architectural</span>
          <h1 className="mt-3 text-5xl md:text-7xl font-display font-light text-white leading-none tracking-tight">
            Decorative<br />
            <span className="italic text-white/60">Films</span>
          </h1>
        </div>
      </section>

      {/* Residential */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <span className="text-[10px] tracking-[0.5em] text-[#C9A84C] uppercase font-medium">Residential</span>
            <h2 className="mt-3 text-3xl font-display font-light text-white">LLumar® iLLusions™</h2>
            <p className="mt-4 text-sm text-white/40 leading-relaxed">
              Enhance the privacy level, look or mood of any room with LLumar® iLLusions™ decorative window film for homes. We offer a wide variety of styles, inspired by current design trends, that can complement interiors ranging from traditional to contemporary.
            </p>
            <p className="mt-3 text-sm text-white/40 leading-relaxed">
              Classic frosted looks, soothing nature motifs, playful patterns and more — we have a series to meet your personal taste. Any smooth glass surface is fair game, so you can dream up your ideal decorative accent.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-white/5">
            {residentialBenefits.map((b) =>
            <div key={b.title} className="bg-black p-6">
                <h3 className="text-sm font-medium text-white mb-2">{b.title}</h3>
                <p className="text-xs text-white/35 leading-relaxed">{b.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Commercial */}
      <section className="border-t border-white/10 max-w-[1400px] mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[10px] tracking-[0.5em] text-[#C9A84C] uppercase font-medium">Commercial</span>
            <h2 className="mt-3 text-3xl font-display font-light text-white">Commercial Window Films</h2>
            <p className="mt-4 text-sm text-white/40 leading-relaxed">
              Our thoughtfully curated line of decorative window film transforms the function and feel of commercial spaces by adding privacy, filtering light, and creating one-of-a-kind designs.
            </p>
            <p className="mt-3 text-sm text-white/40 leading-relaxed">
              Unlike specialty glass, decorative window film is budget-friendly and minimally disruptive when installing or removing. This makes it a smart space refresher when styles or clients change.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              {['Windows & Partitions', 'Glass Doors & Cabinets', 'Custom Logo Designs', 'Glass Furniture'].map((use) =>
              <div key={use} className="flex items-center gap-2 text-sm text-white/50">
                  <span className="w-1 h-1 bg-[#C9A84C] rounded-full" />
                  {use}
                </div>
              )}
            </div>
          </div>
          <AppImage
            src="https://llumarkuwait.com/wp-content/uploads/2024/10/9.-Commercial-Window-Films-1024x768.jpg"
            alt="LLumar commercial decorative window film on office partition creating privacy and design"
            width={600}
            height={450}
            className="w-full h-80 object-cover opacity-70" />

        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl font-display font-light text-white mb-4">Design your space</h2>
          <p className="text-sm text-white/40 mb-8">Explore our decorative film options at our Kuwait showrooms.</p>
          <Link href="/#booking" className="inline-flex items-center gap-3 bg-[#C9A84C] text-black text-xs font-semibold tracking-widest uppercase px-8 py-4 hover:bg-[#E8C96A] transition-colors duration-300">
            Book Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>);

}