import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gallery & Projects — LLumar Kuwait',
  description: 'Browse LLumar Kuwait\'s project gallery. Automotive tint, paint protection film, residential and commercial architectural film installations across Kuwait.'
};

const categories = ['All', 'Automotive', 'PPF', 'Residential', 'Commercial'];

const projects = [
{
  id: 1,
  category: 'Automotive',
  title: 'Ceramic Tint — Luxury Sedan',
  desc: 'Full ceramic tint installation with maximum heat rejection.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a78f5bcd-1787540188653.png",
  alt: 'LLumar ceramic window tint installed on a luxury sedan',
  span: 'col-span-2 row-span-2'
},
{
  id: 2,
  category: 'PPF',
  title: 'Full-Body PPF — Sports Car',
  desc: 'Complete paint protection film coverage in gloss finish.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f7059860-1765215518463.png",
  alt: 'Full-body LLumar paint protection film on a sports car',
  span: 'col-span-1 row-span-1'
},
{
  id: 3,
  category: 'Residential',
  title: 'Solar Control — Villa',
  desc: 'Residential solar control film for a Kuwait villa.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18a1153fe-1787540189038.png",
  alt: 'LLumar residential window film in a modern Kuwait villa',
  span: 'col-span-1 row-span-1'
},
{
  id: 4,
  category: 'Commercial',
  title: 'Office Building — Solar Control',
  desc: 'Commercial solar control film for a Kuwait office building.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_118af4ef7-1787540188300.png",
  alt: 'LLumar commercial window film on a Kuwait office building',
  span: 'col-span-1 row-span-1'
},
{
  id: 5,
  category: 'Automotive',
  title: 'FormulaOne Tint — SUV',
  desc: 'FormulaOne by LLumar premium tint installation.',
  image: 'https://llumar.com/content/dam/eastman/performance-films/llumar/imagery/automotive/llumar-formulaone.jpg',
  alt: 'FormulaOne by LLumar tint on a luxury SUV',
  span: 'col-span-1 row-span-1'
},
{
  id: 6,
  category: 'PPF',
  title: 'Matte PPF — Supercar',
  desc: 'Matte finish PPF transforming a gloss paint vehicle.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_17b820eb6-1782704228417.png",
  alt: 'LLumar matte PPF on a high-performance supercar',
  span: 'col-span-2 row-span-1'
}];


export default function GalleryPage() {
  return (
    <main className="bg-[#FAFAF8] text-[#111111] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#FAFAF8]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <span className="section-label">Gallery & Projects</span>
          <h1 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            Work That<br />
            <span className="italic text-[#6B6560]">Speaks for Itself</span>
          </h1>
          <p className="mt-6 text-sm text-[#6B6560] max-w-[480px] leading-relaxed">
            A selection of automotive, PPF and architectural installations by LLumar Kuwait's certified team.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="bg-[#FAFAF8] pb-24 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Category filter — visual only */}
          <div className="flex gap-0 border-b border-[#E0DBD5] mb-12 overflow-x-auto">
            {categories.map((cat, i) =>
            <button
              key={cat}
              className={`px-6 py-4 text-[11px] font-semibold tracking-[0.2em] uppercase whitespace-nowrap transition-all duration-200 border-b-2 -mb-px ${i === 0 ? 'border-[#CC0000] text-[#CC0000]' : 'border-transparent text-[#9A9590] hover:text-[#1A1A1A]'}`}>

                {cat}
              </button>
            )}
          </div>

          {/* Asymmetric grid */}
          <div className="grid grid-cols-3 gap-3 auto-rows-[280px]">
            {projects.map((project) =>
            <div
              key={project.id}
              className={`gallery-item relative overflow-hidden bg-[#1A1A1A] ${project.span}`}>

                <AppImage
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover" />

                <div className="gallery-overlay">
                  <div>
                    <span className="text-[9px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold block mb-1">{project.category}</span>
                    <span className="text-sm font-medium text-white block mb-1">{project.title}</span>
                    <span className="text-xs text-white/50">{project.desc}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display font-light text-white leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Ready for Your Installation?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/96565008585" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#CC0000] text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#A30000] transition-colors duration-300">
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