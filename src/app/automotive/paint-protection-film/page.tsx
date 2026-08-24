import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Paint Protection Film (PPF) — LLumar Kuwait',
  description: 'LLumar paint protection film in Kuwait. Self-healing, hydrophobic PPF in gloss and matte finishes. Professional installation by Kuwait\'s most experienced team.'
};

const ppfProducts = [
{
  id: 'gloss',
  name: 'Gloss PPF',
  tagline: 'Crystal-clear protection that enhances your paint.',
  desc: 'LLumar gloss PPF is virtually invisible — preserving your vehicle\'s original finish while providing a robust barrier against chips, scratches and environmental damage.',
  features: ['Self-healing technology', 'Hydrophobic surface', 'Optical clarity', 'UV stable', 'Scratch resistant', 'Stain resistant']
},
{
  id: 'matte',
  name: 'Matte PPF',
  tagline: 'Transform gloss paint to a premium satin finish.',
  desc: 'LLumar matte PPF converts any gloss paint to a sophisticated satin finish while providing the same level of protection. The ultimate upgrade for discerning vehicle owners.',
  features: ['Satin matte finish', 'Self-healing technology', 'Hydrophobic surface', 'UV stable', 'Scratch resistant', 'Premium appearance']
}];


const coverageOptions = [
{ title: 'Partial Front', desc: 'Hood, front bumper and mirrors — protecting the highest-impact areas.' },
{ title: 'Full Front', desc: 'Complete front-end protection including fenders, A-pillars and headlights.' },
{ title: 'Full Body', desc: 'Comprehensive protection for the entire vehicle exterior.' },
{ title: 'Custom', desc: 'Targeted protection for specific panels, door edges or high-wear areas.' }];


export default function PPFPage() {
  return (
    <main className="bg-[#FAFAF8] text-[#111111] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[65vh] min-h-[500px] overflow-hidden bg-[#1A1A1A] flex items-end">
        <AppImage
          src="https://llumar.com/content/dam/eastman/performance-films/llumar/imagery/ppf/llumar-ppf-installation.jpg"
          alt="Professional LLumar paint protection film installation on a vehicle"
          fill
          className="object-cover opacity-60"
          priority />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-16 w-full">
          <span className="section-label" style={{ color: '#CC0000' }}>Automotive</span>
          <h1 className="mt-3 font-display font-light text-white leading-tight" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            Paint Protection<br />
            <span className="italic text-white/70">Film</span>
          </h1>
          <p className="mt-4 text-base text-white/55 max-w-[480px] leading-relaxed">
            Preserve the finish. Let the road take the impact. LLumar PPF is the invisible shield between your paint and everything the road throws at it.
          </p>
        </div>
      </section>

      {/* What is PPF */}
      <section className="bg-[#FAFAF8] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">What is PPF?</span>
              <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                The Invisible<br />
                <span className="italic text-[#6B6560]">Shield</span>
              </h2>
              <p className="text-base text-[#1A1A1A] leading-relaxed mb-4">
                Paint Protection Film is a virtually invisible urethane film applied to your vehicle's painted surfaces. It acts as a sacrificial barrier — absorbing impacts, resisting scratches, and protecting your paint from the road's daily assault.
              </p>
              <p className="text-sm text-[#6B6560] leading-relaxed mb-8">
                LLumar PPF features self-healing technology — minor surface scratches disappear with heat exposure, keeping the film looking pristine. The hydrophobic surface repels water and contaminants, making maintenance effortless.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['Self-Healing', 'Hydrophobic', 'Impact Resistant', 'UV Stable', 'Optically Clear', 'Long-lasting'].map((f) =>
                <div key={f} className="flex items-center gap-2.5">
                    <span className="w-1 h-1 bg-[#CC0000] rounded-full flex-shrink-0" />
                    <span className="text-sm text-[#1A1A1A]">{f}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="relative h-80 lg:h-[500px] overflow-hidden bg-[#1A1A1A]">
              <AppImage
                src="https://llumar.com/content/dam/eastman/performance-films/llumar/imagery/ppf/llumar-ppf-installation.jpg"
                alt="Close-up of LLumar PPF being professionally applied to a vehicle"
                fill
                className="object-cover" />

            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-[#F5F0EA] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <span className="section-label">Finish Options</span>
          <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-14" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Choose Your<br />
            <span className="italic text-[#6B6560]">Finish</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E0DBD5]">
            {ppfProducts.map((product, i) =>
            <div key={product.id} className="bg-[#F5F0EA] p-10 lg:p-12 hover:bg-white transition-colors duration-300">
                <div className="text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-3">0{i + 1}</div>
                <h3 className="text-2xl font-display font-light text-[#1A1A1A] mb-2">{product.name}</h3>
                <p className="text-sm font-medium text-[#1A1A1A] mb-4">{product.tagline}</p>
                <p className="text-sm text-[#6B6560] leading-relaxed mb-8">{product.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((f) =>
                <div key={f} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#CC0000] rounded-full flex-shrink-0" />
                      <span className="text-xs text-[#6B6560]">{f}</span>
                    </div>
                )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="bg-[#FAFAF8] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <span className="section-label">Coverage Options</span>
          <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-14" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Protect What<br />
            <span className="italic text-[#6B6560]">Matters Most</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E0DBD5]">
            {coverageOptions.map((opt, i) =>
            <div key={opt.title} className="bg-[#FAFAF8] p-8 hover:bg-white transition-colors duration-300">
                <div className="text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-3">0{i + 1}</div>
                <h3 className="text-lg font-display font-light text-[#1A1A1A] mb-3">{opt.title}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{opt.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <span className="section-label" style={{ color: '#CC0000' }}>Protect Your Vehicle</span>
          <h2 className="mt-4 font-display font-light text-white leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Book Your PPF Installation
          </h2>
          <p className="text-sm text-white/45 mb-10 max-w-[400px] mx-auto leading-relaxed">
            Contact LLumar Kuwait to discuss your PPF requirements and book a professional installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/96565008585?text=I'm interested in paint protection film (PPF) for my vehicle." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#1DA851] transition-colors duration-300">
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