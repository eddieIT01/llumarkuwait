'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const galleryItems = [
{
  id: 1,
  category: 'Automotive',
  title: 'Ceramic Tint Installation',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_108242f7a-1779492497419.png",
  alt: 'LLumar ceramic window tint installed on a luxury sedan in Kuwait',
  span: 'col-span-2 row-span-2'
},
{
  id: 2,
  category: 'PPF',
  title: 'Full-Body PPF',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1aa13ae2e-1773778991648.png",
  alt: 'Full-body LLumar paint protection film applied to a sports car',
  span: 'col-span-1 row-span-1'
},
{
  id: 3,
  category: 'Architectural',
  title: 'Residential Installation',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_13816b611-1787540512677.png",
  alt: 'LLumar residential window film installed in a modern Kuwait home',
  span: 'col-span-1 row-span-1'
},
{
  id: 4,
  category: 'Commercial',
  title: 'Office Solar Control',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12d8c5931-1787540513272.png",
  alt: 'LLumar commercial solar control film on office building glass facade',
  span: 'col-span-1 row-span-1'
},
{
  id: 5,
  category: 'Automotive',
  title: 'FormulaOne Tint',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1386b3083-1787540513255.png",
  alt: 'FormulaOne by LLumar premium tint on a high-performance vehicle',
  span: 'col-span-1 row-span-1'
}];


export default function GallerySection() {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((el) => {if (el) observer.observe(el);});
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#FAFAF8] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          ref={(el) => {revealRefs.current[0] = el;}}
          className="reveal-up flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">

          <div>
            <span className="section-label">Gallery & Projects</span>
            <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Work That<br />
              <span className="italic text-[#6B6560]">Speaks for Itself</span>
            </h2>
          </div>
          <a href="/gallery" className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#CC0000] hover:gap-5 transition-all duration-300">
            View Full Gallery
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Asymmetric gallery grid */}
        <div
          ref={(el) => {revealRefs.current[1] = el;}}
          className="reveal-up stagger-2 grid grid-cols-3 grid-rows-2 gap-3 h-[500px] lg:h-[600px]">

          {galleryItems.map((item) =>
          <div
            key={item.id}
            className={`gallery-item relative overflow-hidden bg-[#1A1A1A] ${item.span}`}>

              <AppImage
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover" />

              <div className="gallery-overlay">
                <div>
                  <span className="text-[9px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold block mb-1">{item.category}</span>
                  <span className="text-sm font-medium text-white">{item.title}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}