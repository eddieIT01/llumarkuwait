import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Architectural Window Films — LLumar Kuwait',
  description: 'LLumar architectural window films for residential and commercial properties in Kuwait. Solar control, privacy, safety and decorative film solutions.'
};

const categories = [
{
  id: 'residential',
  title: 'Residential',
  tagline: 'Your home. Your comfort. Your control.',
  desc: 'LLumar residential window films reduce heat, block UV rays and enhance privacy — without sacrificing natural light or views. Designed for Kuwait\'s intense sun and high temperatures.',
  benefits: ['Heat reduction', 'UV protection', 'Glare control', 'Privacy options', 'Interior protection', 'Energy comfort'],
  image: 'https://llumar.com/content/dam/eastman/performance-films/llumar/imagery/architectural/llumar-architectural-residential-hero.jpg',
  alt: 'Modern Kuwait home interior with LLumar residential window film on large glass windows',
  href: '/architectural/residential'
},
{
  id: 'commercial',
  title: 'Commercial',
  tagline: 'Productive spaces. Controlled environments.',
  desc: 'LLumar commercial films address the unique challenges of office, retail and commercial spaces — solar control, privacy, safety and decorative applications for any building type.',
  benefits: ['Solar control', 'Occupant comfort', 'Privacy solutions', 'Safety compliance', 'Decorative options', 'Professional installation'],
  image: 'https://llumar.com/content/dam/eastman/performance-films/llumar/imagery/architectural/llumar-architectural-commercial.jpg',
  alt: 'Modern commercial building with LLumar architectural window film on glass facade',
  href: '/architectural/commercial'
}];


export default function ResidentialCommercialPage() {
  return (
    <main className="bg-[#FAFAF8] text-[#111111] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[65vh] min-h-[500px] overflow-hidden bg-[#1A1A1A] flex items-end">
        <AppImage
          src="https://llumar.com/content/dam/eastman/performance-films/llumar/imagery/architectural/llumar-architectural-residential-hero.jpg"
          alt="Modern interior with LLumar architectural window film"
          fill
          className="object-cover opacity-55"
          priority />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-16 w-full">
          <span className="section-label" style={{ color: '#CC0000' }}>Architectural</span>
          <h1 className="mt-3 font-display font-light text-white leading-tight" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            Residential &<br />
            <span className="italic text-white/70">Commercial</span>
          </h1>
          <p className="mt-4 text-base text-white/55 max-w-[480px] leading-relaxed">
            Transform your space. Control your environment. LLumar architectural films for homes and businesses across Kuwait.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[#FAFAF8] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col gap-0">
            {categories.map((cat, i) =>
            <div key={cat.id} className={`grid grid-cols-1 lg:grid-cols-2 border-t border-[#E0DBD5] ${i === categories.length - 1 ? 'border-b' : ''}`}>
                <div className={`py-14 lg:py-20 ${i % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16 lg:order-2'}`}>
                  <span className="section-label">0{i + 1}</span>
                  <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                    {cat.title}
                  </h2>
                  <p className="text-base font-medium text-[#1A1A1A] mb-4">{cat.tagline}</p>
                  <p className="text-sm text-[#6B6560] leading-relaxed mb-8">{cat.desc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {cat.benefits.map((b) =>
                  <div key={b} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#CC0000] rounded-full flex-shrink-0" />
                        <span className="text-sm text-[#1A1A1A]">{b}</span>
                      </div>
                  )}
                  </div>
                  <Link href={cat.href} className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#CC0000] hover:gap-5 transition-all duration-300">
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
                <div className={`relative h-72 lg:h-auto overflow-hidden bg-[#1A1A1A] ${i % 2 === 0 ? '' : 'lg:order-1'}`}>
                  <AppImage src={cat.image} alt={cat.alt} fill className="object-cover" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label" style={{ color: '#CC0000' }}>Why Film?</span>
              <h2 className="mt-4 font-display font-light text-white leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Kuwait's Climate<br />
                <span className="italic text-white/60">Demands It</span>
              </h2>
              <p className="text-sm text-white/50 leading-relaxed mb-4">
                Kuwait's extreme heat and intense UV exposure create real challenges for any building. LLumar architectural films address these challenges directly — reducing solar heat gain, blocking UV radiation, and improving occupant comfort.
              </p>
              <p className="text-sm text-white/35 leading-relaxed">
                Every film is professionally installed by LLumar Kuwait's certified team, ensuring optimal performance and a flawless finish.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-white/5">
              {[
              { value: '99%', label: 'UV Rejection' },
              { value: '60%', label: 'Heat Reduction' },
              { value: '25+', label: 'Years Experience' },
              { value: '2', label: 'Kuwait Showrooms' }].
              map((stat) =>
              <div key={stat.label} className="bg-[#1A1A1A] p-8 text-center hover:bg-white/3 transition-colors duration-300">
                  <div className="font-display font-light text-white mb-1" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{stat.value}</div>
                  <div className="text-[10px] tracking-[0.3em] text-white/30 uppercase">{stat.label}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F0EA] py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display font-light text-[#1A1A1A] leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Ready to Transform Your Space?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/96565008585?text=I'm interested in architectural window film for my property." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#CC0000] text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#A30000] transition-colors duration-300">
              Get a Quote
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 border border-[#1A1A1A] text-[#1A1A1A] text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#1A1A1A] hover:text-white transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>);

}