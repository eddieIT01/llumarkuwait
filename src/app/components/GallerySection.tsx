'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { useLanguage } from '@/context/LanguageContext';

const galleryItems = [
  { id: 1, categoryKey: 0, titleKey: 0, image: "https://img.rocket.new/generatedImages/rocket_gen_img_108242f7a-1779492497419.png", alt: 'LLumar ceramic window tint installed on a luxury sedan in Kuwait', span: 'col-span-2 row-span-2' },
  { id: 2, categoryKey: 1, titleKey: 1, image: "https://img.rocket.new/generatedImages/rocket_gen_img_1aa13ae2e-1773778991648.png", alt: 'Full-body LLumar paint protection film applied to a sports car', span: 'col-span-1 row-span-1' },
  { id: 3, categoryKey: 2, titleKey: 2, image: "https://img.rocket.new/generatedImages/rocket_gen_img_13816b611-1787540512677.png", alt: 'LLumar residential window film installed in a modern Kuwait home', span: 'col-span-1 row-span-1' },
  { id: 4, categoryKey: 3, titleKey: 3, image: "https://img.rocket.new/generatedImages/rocket_gen_img_12d8c5931-1787540513272.png", alt: 'LLumar commercial solar control film on office building glass facade', span: 'col-span-1 row-span-1' },
  { id: 5, categoryKey: 4, titleKey: 4, image: "https://img.rocket.new/generatedImages/rocket_gen_img_1386b3083-1787540513255.png", alt: 'FormulaOne by LLumar premium tint on a high-performance vehicle', span: 'col-span-1 row-span-1' },
];

export default function GallerySection() {
  const { t, isArabic } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      if (headerRef.current) { headerRef.current.style.opacity = '1'; headerRef.current.style.transform = 'none'; }
      itemRefs.current.forEach(el => {
        if (el) { el.style.opacity = '1'; el.style.clipPath = 'none'; el.style.transform = 'none'; }
      });
      return;
    }

    let gsapCtx: { revert: () => void } | null = null;

    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      gsapCtx = gsap.context(() => {
        // Header reveal
        gsap.set(headerRef.current, { opacity: 0, y: 30 });
        ScrollTrigger.create({
          trigger: headerRef.current,
          start: 'top 85%',
          onEnter: () => {
            gsap.to(headerRef.current, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' });
          },
        });

        // Gallery items — editorial clip-path reveal with stagger
        itemRefs.current.forEach((el, i) => {
          if (!el) return;
          const isLarge = i === 0;
          // Large item: reveal from bottom
          // Small items: alternating reveal directions
          const clipStart = isLarge ? 'inset(100% 0 0 0)' : i % 2 === 0 ? 'inset(0 0 100% 0)' : 'inset(0 100% 0 0)';

          gsap.set(el, {
            clipPath: clipStart,
            opacity: 0,
          });

          ScrollTrigger.create({
            trigger: gridRef.current,
            start: 'top 75%',
            onEnter: () => {
              gsap.to(el, {
                clipPath: 'inset(0 0% 0 0)',
                opacity: 1,
                duration: isLarge ? 1.2 : 0.9,
                delay: isLarge ? 0 : 0.15 + i * 0.12,
                ease: 'power3.out',
              });
            },
          });
        });
      }, sectionRef);
    };

    initGSAP();
    return () => { gsapCtx?.revert(); };
  }, []);

  const galleryTranslations = t.gallery.items;

  return (
    <section ref={sectionRef} className="bg-[#FAFAF8] py-24 lg:py-32" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 ${isArabic ? 'lg:flex-row-reverse' : ''}`}
          style={{ opacity: 0 }}
        >
          <div className={isArabic ? 'text-right' : ''}>
            <span className="section-label">{t.gallery.label}</span>
            <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              {t.gallery.headline1}<br />
              <span className="italic text-[#6B6560]">{t.gallery.headline2}</span>
            </h2>
          </div>
          <a href="/gallery" className={`inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#CC0000] hover:gap-5 transition-all duration-300 ${isArabic ? 'flex-row-reverse tracking-normal' : ''}`}>
            {t.gallery.viewAll}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isArabic ? 'rotate-180' : ''}>
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Asymmetric editorial gallery grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-3 grid-rows-2 gap-3 h-[500px] lg:h-[600px]"
        >
          {galleryItems.map((item, i) =>
          <div
            key={item.id}
            ref={(el) => { itemRefs.current[i] = el; }}
            className={`gallery-item-editorial relative overflow-hidden bg-[#1A1A1A] ${item.span}`}
            style={{ opacity: 0 }}
          >
              <AppImage
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out"
              style={{ transform: 'scale(1.04)' }}
            />
              {/* Overlay */}
              <div className="gallery-editorial-overlay absolute inset-0 bg-black/0 hover:bg-black/45 transition-colors duration-500 flex items-end p-5 lg:p-6">
                <div className={`translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ${isArabic ? 'text-right' : ''}`}>
                  <span className={`text-[9px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold block mb-1 ${isArabic ? 'tracking-normal' : ''}`}>{galleryTranslations[i]?.category}</span>
                  <span className="text-sm font-medium text-white">{galleryTranslations[i]?.title}</span>
                </div>
              </div>
              {/* Always-visible subtle category tag on large item */}
              {i === 0 && (
                <div className={`absolute top-5 ${isArabic ? 'right-5' : 'left-5'} z-10`}>
                  <span className={`text-[9px] tracking-[0.4em] text-white/50 uppercase font-medium ${isArabic ? 'tracking-normal' : ''}`}>{galleryTranslations[0]?.category}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}