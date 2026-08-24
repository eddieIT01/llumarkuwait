import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Decorative & Privacy Films — LLumar Kuwait',
  description: 'LLumar decorative and privacy window films in Kuwait. Transform glass into a design element with patterns, gradients and privacy solutions.'
};

const applications = [
{ title: 'Office Partitions', desc: 'Create elegant glass partitions with privacy while maintaining an open, light-filled environment.' },
{ title: 'Bathroom Privacy', desc: 'Frosted and patterned films for bathroom windows — privacy without sacrificing natural light.' },
{ title: 'Retail Branding', desc: 'Custom graphics and branded films for storefronts and retail environments.' },
{ title: 'Conference Rooms', desc: 'Privacy films for meeting room glass walls — professional and functional.' },
{ title: 'Decorative Accents', desc: 'Geometric patterns, gradients and artistic films that transform glass into a design feature.' },
{ title: 'Entrance Glass', desc: 'Elegant frosted or patterned films for entrance doors and sidelights.' }];


export default function DecorativePage() {
  return (
    <main className="bg-[#FAFAF8] text-[#111111] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[65vh] min-h-[500px] overflow-hidden bg-[#1A1A1A] flex items-end">
        <AppImage
          src="https://llumar.com/content/dam/eastman/performance-films/llumar/imagery/architectural/llumar-decorative-film.jpg"
          alt="Elegant LLumar decorative window film creating privacy patterns on office glass"
          fill
          className="object-cover opacity-55"
          priority />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-16 w-full">
          <span className="section-label" style={{ color: '#CC0000' }}>Architectural</span>
          <h1 className="mt-3 font-display font-light text-white leading-tight" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            Decorative &<br />
            <span className="italic text-white/70">Privacy Films</span>
          </h1>
          <p className="mt-4 text-base text-white/55 max-w-[480px] leading-relaxed">
            Transform glass into a design element. LLumar decorative films combine aesthetic appeal with functional privacy — for homes, offices and commercial spaces.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#FAFAF8] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="section-label">Design Meets Function</span>
              <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Glass as a<br />
                <span className="italic text-[#6B6560]">Design Element</span>
              </h2>
              <p className="text-base text-[#1A1A1A] leading-relaxed mb-4">
                LLumar decorative films transform ordinary glass into a sophisticated design feature. From frosted privacy films to geometric patterns and custom graphics — the possibilities are extensive.
              </p>
              <p className="text-sm text-[#6B6560] leading-relaxed mb-8">
                Unlike etched or sandblasted glass, decorative film can be removed or replaced — giving you the flexibility to update your space without replacing the glass itself.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['Frosted Privacy', 'Geometric Patterns', 'Custom Graphics', 'Gradient Effects', 'Removable', 'Cost-effective'].map((f) =>
                <div key={f} className="flex items-center gap-2.5">
                    <span className="w-1 h-1 bg-[#CC0000] rounded-full flex-shrink-0" />
                    <span className="text-sm text-[#1A1A1A]">{f}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="relative h-80 lg:h-[500px] overflow-hidden bg-[#1A1A1A]">
              <AppImage
                src="https://llumar.com/content/dam/eastman/performance-films/llumar/imagery/architectural/llumar-decorative-film.jpg"
                alt="LLumar decorative window film in a modern office space"
                fill
                className="object-cover" />

            </div>
          </div>

          {/* Applications */}
          <span className="section-label">Applications</span>
          <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-12" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Where Decorative Film<br />
            <span className="italic text-[#6B6560]">Works Best</span>
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
      <section className="bg-[#F5F0EA] py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display font-light text-[#1A1A1A] leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Discuss Your Project
          </h2>
          <p className="text-sm text-[#6B6560] mb-10 max-w-[400px] mx-auto leading-relaxed">
            Contact LLumar Kuwait to discuss your decorative film requirements and explore the available options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/96565008585?text=I'm interested in decorative and privacy window film." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#CC0000] text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#A30000] transition-colors duration-300">
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