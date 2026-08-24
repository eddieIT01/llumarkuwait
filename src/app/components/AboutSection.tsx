'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { useLanguage } from '@/context/LanguageContext';

const archCategoryImages = [
  { id: 'residential', image: "https://img.rocket.new/generatedImages/rocket_gen_img_12cb6da1c-1772555229436.png", alt: 'Modern home interior with LLumar residential window film on large windows', href: '/architectural/residential' },
  { id: 'commercial', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ade036f9-1786290288813.png", alt: 'Modern commercial building with LLumar architectural window film', href: '/architectural/commercial' },
  { id: 'safety', image: "https://img.rocket.new/generatedImages/rocket_gen_img_18da24a61-1787540513538.png", alt: 'LLumar safety and security window film demonstration on glass panel', href: '/architectural/safety-security' },
  { id: 'decorative', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e4657528-1787540513278.png", alt: 'Decorative LLumar window film creating elegant privacy patterns on office glass', href: '/architectural/decorative' },
];

export default function ArchitecturalSection() {
  const { t, isArabic } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef<HTMLDivElement>(null);
  const autoImgRef = useRef<HTMLDivElement>(null);
  const archImgRef = useRef<HTMLDivElement>(null);
  const transitionLabelRef = useRef<HTMLDivElement>(null);
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
    revealRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      if (autoImgRef.current) autoImgRef.current.style.opacity = '0';
      if (archImgRef.current) archImgRef.current.style.opacity = '1';
      return;
    }

    let gsapCtx: { revert: () => void } | null = null;

    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      gsapCtx = gsap.context(() => {
        if (!transitionRef.current) return;

        gsap.set(autoImgRef.current, { opacity: 1, scale: 1 });
        gsap.set(archImgRef.current, { opacity: 0, scale: 1.04, clipPath: 'inset(0 100% 0 0)' });
        gsap.set(transitionLabelRef.current, { opacity: 0, y: 12 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: transitionRef.current,
            start: 'top 60%',
            end: 'bottom 40%',
            scrub: 1.5,
          },
        });

        tl.to(autoImgRef.current, { opacity: 0, scale: 1.06, duration: 2, ease: 'power2.inOut' }, 0);
        tl.to(archImgRef.current, { opacity: 1, scale: 1, clipPath: 'inset(0 0% 0 0)', duration: 2, ease: 'power2.inOut' }, 0.5);
        tl.to(transitionLabelRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 1.2);
      }, sectionRef);
    };

    initGSAP();
    return () => { gsapCtx?.revert(); };
  }, []);

  const archCategories = t.architectural.categories.map((cat, i) => ({
    ...cat,
    ...archCategoryImages[i],
  }));

  return (
    <section ref={sectionRef} className="bg-[#F5F0EA]" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Transition: Automotive glass → Architectural glass */}
      <div ref={transitionRef} className="relative w-full h-[50vh] min-h-[320px] overflow-hidden bg-[#0A0A0A]">
        <div ref={autoImgRef} className="absolute inset-0 will-change-transform">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1368dd118-1787554002803.png"
            alt="Automotive glass with LLumar window film — transitioning to architectural"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div ref={archImgRef} className="absolute inset-0 will-change-transform" style={{ clipPath: 'inset(0 100% 0 0)' }}>
          <AppImage
            src="https://images.unsplash.com/photo-1724588846681-3cf43f15c8d2"
            alt="Modern architectural interior with LLumar window film on large glass panels"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div ref={transitionLabelRef} className="absolute inset-0 flex items-center justify-center z-10" style={{ opacity: 0 }}>
          <div className="text-center">
            <span className={`text-[10px] tracking-[0.5em] text-white/40 uppercase ${isArabic ? 'tracking-normal' : ''}`}>{t.architectural.transitionFrom}</span>
            <div className="flex items-center justify-center gap-3 my-2">
              <span className="w-8 h-px bg-white/20" />
              <span className={`text-[10px] tracking-[0.5em] text-[#CC0000] uppercase font-medium ${isArabic ? 'tracking-normal' : ''}`}>{t.architectural.transitionTo}</span>
              <span className="w-8 h-px bg-white/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Existing Architectural content */}
      <div className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div
            ref={(el) => { revealRefs.current[0] = el; }}
            className={`reveal-up flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 ${isArabic ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className={isArabic ? 'text-right' : ''}>
              <span className="section-label">{t.architectural.label}</span>
              <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                {t.architectural.headline1}<br />
                <span className="italic text-[#6B6560]">{t.architectural.headline2}</span>
              </h2>
            </div>
            <p className={`text-sm text-[#6B6560] leading-relaxed max-w-[360px] ${isArabic ? 'text-right lg:text-left' : 'lg:text-right'}`}>
              {t.architectural.subline}
            </p>
          </div>

          <div
            ref={(el) => { revealRefs.current[1] = el; }}
            className="reveal-up stagger-2 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E0DBD5]"
          >
            {archCategories.map((cat, i) => (
              <Link
                key={cat.id}
                href={cat.href}
                className={`group relative overflow-hidden bg-[#1A1A1A] ${i === 0 ? 'md:row-span-1' : ''}`}
                style={{ minHeight: i < 2 ? '380px' : '280px' }}
              >
                <AppImage
                  src={cat.image}
                  alt={cat.alt}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className={`absolute inset-0 p-8 flex flex-col justify-end ${isArabic ? 'text-right' : ''}`}>
                  <span className={`text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-2 ${isArabic ? 'tracking-normal' : ''}`}>{t.architectural.categoryLabel}</span>
                  <h3 className="text-2xl font-display font-light text-white mb-2">{cat.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed mb-4 max-w-[320px]">{cat.desc}</p>
                  <span className={`inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-white/70 group-hover:text-white group-hover:gap-4 transition-all duration-300 ${isArabic ? 'flex-row-reverse tracking-normal' : ''}`}>
                    {t.architectural.learnMore}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isArabic ? 'rotate-180' : ''}>
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}