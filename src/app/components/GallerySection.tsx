'use client';
import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const galleryImages = [
{ src: 'https://llumarkuwait.com/wp-content/uploads/2024/10/New-Project-9-150x150.jpg', alt: 'LLumar window tint installation on luxury sedan in Kuwait showroom' },
{ src: 'https://llumarkuwait.com/wp-content/uploads/2024/10/New-Project-10-150x150.jpg', alt: 'LLumar paint protection film applied to sports car hood' },
{ src: 'https://llumarkuwait.com/wp-content/uploads/2024/10/New-Project-11-150x150.jpg', alt: 'LLumar ceramic tint on SUV rear window showing heat rejection' },
{ src: 'https://llumarkuwait.com/wp-content/uploads/2024/10/New-Project-12-150x150.jpg', alt: 'LLumar PPF installation on vehicle front bumper' },
{ src: 'https://llumarkuwait.com/wp-content/uploads/2024/10/New-Project-13-150x150.jpg', alt: 'LLumar architectural film on commercial building glass facade' },
{ src: 'https://llumarkuwait.com/wp-content/uploads/2024/10/New-Project-14-150x150.jpg', alt: 'LLumar residential window film installation on home windows' },
{ src: 'https://llumarkuwait.com/wp-content/uploads/2024/10/New-Project-14-1-150x150.jpg', alt: 'LLumar decorative frosted film on office partition glass' },
{ src: 'https://llumarkuwait.com/wp-content/uploads/2024/10/New-Project-14-2-150x150.jpg', alt: 'LLumar safety security film on commercial storefront window' },
{ src: 'https://llumarkuwait.com/wp-content/uploads/2024/10/New-Project-15-150x150.jpg', alt: 'LLumar Kuwait showroom completed installation portfolio' }];


export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-[10px] tracking-[0.5em] text-[#C9A84C] uppercase font-medium">Our Work</span>
            <h2 className="mt-3 text-4xl font-display font-light text-white tracking-tight">Installation Gallery</h2>
          </div>
          <span className="text-xs text-white/25 tracking-wider hidden md:block">{galleryImages?.length} Projects</span>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-px bg-white/5">
          {galleryImages?.map((img, i) =>
          <button
            key={i}
            onClick={() => setLightbox(i)}
            className="relative aspect-square overflow-hidden group bg-black"
            aria-label={`View gallery image ${i + 1}`}>

              <AppImage
              src={img?.src}
              alt={img?.alt}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-80 opacity-70" />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </button>
          )}
        </div>
      </div>
      {/* Lightbox */}
      {lightbox !== null &&
      <div
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
        onClick={() => setLightbox(null)}>

          <button
          className="absolute top-6 right-6 text-white/50 hover:text-white text-xs tracking-widest uppercase"
          onClick={() => setLightbox(null)}>

            Close ✕
          </button>
          <div className="relative w-full max-w-2xl aspect-square" onClick={(e) => e?.stopPropagation()}>
            <AppImage
            src={galleryImages?.[lightbox]?.src?.replace('150x150', '1024x1024')}
            alt={galleryImages?.[lightbox]?.alt}
            fill
            className="object-contain" />

          </div>
          <div className="absolute bottom-6 flex items-center gap-4">
            <button
            onClick={(e) => {e?.stopPropagation();setLightbox(Math.max(0, lightbox - 1));}}
            disabled={lightbox === 0}
            className="text-white/40 hover:text-white disabled:opacity-20 text-xs tracking-widest uppercase px-4 py-2">

              ← Prev
            </button>
            <span className="text-xs text-white/25 tracking-wider">{lightbox + 1} / {galleryImages?.length}</span>
            <button
            onClick={(e) => {e?.stopPropagation();setLightbox(Math.min(galleryImages?.length - 1, lightbox + 1));}}
            disabled={lightbox === galleryImages?.length - 1}
            className="text-white/40 hover:text-white disabled:opacity-20 text-xs tracking-widest uppercase px-4 py-2">

              Next →
            </button>
          </div>
        </div>
      }
    </section>);

}