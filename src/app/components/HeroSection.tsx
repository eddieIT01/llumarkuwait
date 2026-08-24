'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroSection() {
  const { t, isArabic } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headline1Ref = useRef<HTMLHeadingElement>(null);
  const headline2Ref = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const accentLineRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      [eyebrowRef, headline1Ref, headline2Ref, dividerRef, sublineRef, ctasRef, accentLineRef, scrollIndicatorRef, statsRef].forEach(r => {
        if (r.current) {
          r.current.style.opacity = '1';
          r.current.style.transform = 'none';
          r.current.style.clipPath = 'none';
        }
      });
      return;
    }

    let gsapCtx: { revert: () => void } | null = null;

    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      gsapCtx = gsap.context(() => {
        gsap.set([eyebrowRef.current, dividerRef.current, sublineRef.current, ctasRef.current, scrollIndicatorRef.current, statsRef.current], {
          opacity: 0,
          y: 20,
        });
        gsap.set(headline1Ref.current, { opacity: 0, y: 40, clipPath: 'inset(0 0 100% 0)' });
        gsap.set(headline2Ref.current, { opacity: 0, y: 40, clipPath: 'inset(0 0 100% 0)' });
        gsap.set(accentLineRef.current, { opacity: 0, scaleY: 0, transformOrigin: 'top center' });
        gsap.set(imgRef.current, { scale: 1.08 });

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.to(imgRef.current, { scale: 1.02, duration: 2.2, ease: 'power2.out' }, 0)
          .to(accentLineRef.current, { opacity: 1, scaleY: 1, duration: 1.2, ease: 'power2.out' }, 0.3)
          .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.4)
          .to(headline1Ref.current, { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 1.0 }, 0.6)
          .to(headline2Ref.current, { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 1.0 }, 0.8)
          .to(dividerRef.current, { opacity: 1, y: 0, duration: 0.7 }, 1.0)
          .to(sublineRef.current, { opacity: 1, y: 0, duration: 0.7 }, 1.1)
          .to(ctasRef.current, { opacity: 1, y: 0, duration: 0.7 }, 1.25)
          .to(scrollIndicatorRef.current, { opacity: 1, y: 0, duration: 0.6 }, 1.5)
          .to(statsRef.current, { opacity: 1, y: 0, duration: 0.6 }, 1.4);

        ScrollTrigger.create({
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          onUpdate: (self) => {
            if (imgRef.current) {
              gsap.set(imgRef.current, { y: self.progress * 80 });
            }
          },
        });

        gsap.to('.hero-scroll-line', {
          scaleY: 0.3,
          transformOrigin: 'top center',
          duration: 1.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 2,
        });
      }, heroRef);
    };

    initGSAP();
    return () => { gsapCtx?.revert(); };
  }, []);

  const stats = [
    { value: t.hero.stat1Value, label: t.hero.stat1Label },
    { value: t.hero.stat2Value, label: t.hero.stat2Label },
    { value: t.hero.stat3Value, label: t.hero.stat3Label },
  ];

  return (
    <section ref={heroRef} className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#050505] flex items-end" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Background image with parallax */}
      <div ref={imgRef} className="absolute inset-0 will-change-transform" style={{ transform: 'scale(1.08)' }}>
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_108242f7a-1779492497419.png"
          alt="Premium LLumar automotive window tint on a luxury vehicle in Kuwait"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      {/* Cinematic gradient layers */}
      <div className={`absolute inset-0 ${isArabic ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-black/95 via-black/65 to-transparent`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />
      {/* Subtle red vignette */}
      <div className={`absolute bottom-0 ${isArabic ? 'right-0' : 'left-0'} w-[600px] h-[300px] ${isArabic ? 'bg-gradient-to-tl' : 'bg-gradient-to-tr'} from-[#CC0000]/15 to-transparent pointer-events-none`} />
      {/* Vertical red accent line */}
      <div
        ref={accentLineRef}
        className={`absolute ${isArabic ? 'right-0' : 'left-0'} top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[#CC0000] to-transparent`}
        style={{ opacity: 0 }}
      />
      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-28 w-full">
        <div className={`max-w-[780px] ${isArabic ? 'mr-0 ml-auto text-right' : ''}`}>

          {/* Eyebrow label */}
          <div ref={eyebrowRef} className={`flex items-center gap-3 mb-8 ${isArabic ? 'flex-row-reverse justify-end' : ''}`} style={{ opacity: 0 }}>
            <span className="w-10 h-px bg-[#CC0000]" />
            <span className={`text-[10px] tracking-[0.55em] text-white/50 uppercase font-medium ${isArabic ? 'tracking-normal' : ''}`}>{t.hero.eyebrow}</span>
          </div>

          {/* Main headline */}
          <h1
            ref={headline1Ref}
            className="font-display font-light text-white leading-[0.88] tracking-tight mb-4"
            style={{
              fontSize: 'clamp(4rem, 10vw, 9.5rem)',
              opacity: 0,
              clipPath: 'inset(0 0 100% 0)',
            }}
          >
            {t.hero.headline1}
          </h1>
          <h1
            ref={headline2Ref}
            className="font-display font-light leading-[0.88] tracking-tight mb-8"
            style={{
              fontSize: 'clamp(4rem, 10vw, 9.5rem)',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(255,255,255,0.35)',
              opacity: 0,
              clipPath: 'inset(0 0 100% 0)',
            }}
          >
            {t.hero.headline2}
          </h1>

          {/* Arabic brand accent — subtle, only in Arabic mode */}
          {isArabic && (
            <div className="mb-6 text-right">
              <span className="text-[11px] tracking-[0.3em] text-white/25 uppercase font-light" style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '0.1em' }}>
                {t.hero.brandAccentAr}
              </span>
            </div>
          )}

          {/* Divider */}
          <div ref={dividerRef} className={`flex items-center gap-4 mb-8 ${isArabic ? 'flex-row-reverse justify-end' : ''}`} style={{ opacity: 0 }}>
            <span className="w-16 h-px bg-[#CC0000]" />
            <span className="w-4 h-px bg-white/20" />
          </div>

          {/* Subline */}
          <p
            ref={sublineRef}
            className={`text-[15px] text-white/50 leading-relaxed max-w-[460px] mb-12 font-light ${isArabic ? 'mr-0 ml-auto' : ''}`}
            style={{ opacity: 0 }}
          >
            {t.hero.subline}
          </p>

          {/* CTAs */}
          <div ref={ctasRef} className={`flex flex-col sm:flex-row gap-4 ${isArabic ? 'sm:flex-row-reverse justify-end' : ''}`} style={{ opacity: 0 }}>
            <Link
              href="/automotive/window-tint"
              className={`inline-flex items-center gap-3 bg-[#CC0000] text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-9 py-4 hover:bg-[#A30000] transition-colors duration-300 group ${isArabic ? 'flex-row-reverse tracking-normal' : ''}`}
            >
              {t.hero.cta1}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${isArabic ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'} transition-transform duration-300`}>
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-white/25 text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-9 py-4 hover:bg-white/8 hover:border-white/50 transition-all duration-300"
            >
              {t.hero.cta2}
            </Link>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className={`absolute bottom-10 ${isArabic ? 'left-10' : 'right-10'} hidden lg:flex flex-col items-center gap-2`}
        style={{ opacity: 0 }}
      >
        <span className="text-[9px] tracking-[0.45em] text-white/25 uppercase" style={{ writingMode: 'vertical-rl' }}>{t.hero.scroll}</span>
        <div className="hero-scroll-line w-px h-14 bg-gradient-to-b from-white/25 to-transparent" />
      </div>
      {/* Stats strip */}
      <div
        ref={statsRef}
        className="absolute bottom-0 left-0 right-0 border-t border-white/8 bg-black/50 backdrop-blur-md"
        style={{ opacity: 0 }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className={`grid grid-cols-3 divide-x divide-white/8 ${isArabic ? 'divide-x-reverse' : ''}`}>
            {stats.map((stat) => (
              <div key={stat.label} className="py-5 px-6 text-center group">
                <div className="text-xl font-display font-light text-white group-hover:text-[#CC0000] transition-colors duration-300">{stat.value}</div>
                <div className={`text-[9px] tracking-[0.35em] text-white/30 uppercase mt-0.5 ${isArabic ? 'tracking-normal' : ''}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
