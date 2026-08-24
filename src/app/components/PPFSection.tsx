'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { useLanguage } from '@/context/LanguageContext';

export default function PPFSection() {
  const { t, isArabic } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const filmLayerRef = useRef<HTMLDivElement>(null);
  const filmSweepRef = useRef<HTMLDivElement>(null);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);
  const finishRevealRef = useRef<HTMLDivElement>(null);
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
      [filmLayerRef, filmSweepRef, finishRevealRef].forEach(r => {
        if (r.current) { r.current.style.opacity = '1'; r.current.style.clipPath = 'none'; }
      });
      phaseRefs.current.forEach(el => { if (el) { el.style.opacity = '1'; el.style.transform = 'none'; } });
      return;
    }

    let gsapCtx: { revert: () => void } | null = null;

    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      gsapCtx = gsap.context(() => {
        const mm = gsap.matchMedia();

        mm.add('(min-width: 1024px)', () => {
          if (!pinnedRef.current) return;

          gsap.set(filmLayerRef.current, { opacity: 0 });
          gsap.set(filmSweepRef.current, { clipPath: 'inset(0 100% 0 0)', opacity: 0.18 });
          gsap.set(finishRevealRef.current, { opacity: 0, y: 20 });
          phaseRefs.current.forEach(el => {
            if (el) gsap.set(el, { opacity: 0, y: 24 });
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: pinnedRef.current,
              start: 'top top',
              end: '+=500%',
              scrub: 1.2,
              pin: true,
              anticipatePin: 1,
            },
          });

          tl.to({}, { duration: 0.5 }, 0);
          tl.to(filmLayerRef.current, { opacity: 1, duration: 1.5, ease: 'power1.inOut' }, 0.5);
          tl.to(filmSweepRef.current, { clipPath: 'inset(0 0% 0 0)', opacity: 0.18, duration: 2, ease: 'power2.inOut' }, 1.5);
          phaseRefs.current.forEach((el, i) => {
            if (el) tl.to(el, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, 3 + i * 0.8);
          });
          tl.to(finishRevealRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 5.5);
          tl.to('.ppf-vehicle-img', { scale: 1.05, duration: 6, ease: 'none' }, 0);
        });

        mm.add('(max-width: 1023px)', () => {
          gsap.set(filmLayerRef.current, { opacity: 0 });
          phaseRefs.current.forEach(el => {
            if (el) gsap.set(el, { opacity: 0, y: 16 });
          });

          ScrollTrigger.create({
            trigger: pinnedRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 1,
            onUpdate: (self) => {
              if (filmLayerRef.current) gsap.set(filmLayerRef.current, { opacity: Math.min(self.progress * 1.5, 1) });
            },
          });

          phaseRefs.current.forEach((el, i) => {
            if (el) {
              ScrollTrigger.create({
                trigger: el,
                start: 'top 88%',
                onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: i * 0.1 }),
              });
            }
          });

          if (finishRevealRef.current) {
            ScrollTrigger.create({
              trigger: finishRevealRef.current,
              start: 'top 88%',
              onEnter: () => gsap.to(finishRevealRef.current, { opacity: 1, y: 0, duration: 0.6 }),
            });
          }
        });
      }, sectionRef);
    };

    initGSAP();
    return () => { gsapCtx?.revert(); };
  }, []);

  const ppfPhases = t.ppf.phases;
  const ppfBenefits = t.ppf.benefits;
  const finishes = t.ppf.finishes;

  const finishHrefs = ['/automotive/ppf-gloss', '/automotive/ppf-matte'];

  return (
    <section ref={sectionRef} className="bg-[#FAFAF8]" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Cinematic pinned PPF sequence */}
      <div ref={pinnedRef} className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#080808]">
        <div className="ppf-vehicle-img absolute inset-0 will-change-transform">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1e1dbdbd7-1772741557374.png"
            alt="Professional LLumar paint protection film being applied to a vehicle hood"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className={`absolute inset-0 ${isArabic ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-black/80 via-black/40 to-black/10`} />

        <div
          ref={filmLayerRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(200,220,255,0.06) 40%, rgba(255,255,255,0.03) 100%)',
            opacity: 0,
          }}
        />
        <div
          ref={filmSweepRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.07) 30%, rgba(200,220,255,0.09) 50%, rgba(255,255,255,0.05) 70%, transparent 100%)',
            clipPath: 'inset(0 100% 0 0)',
            opacity: 0,
          }}
        />

        <div className={`absolute top-10 ${isArabic ? 'right-6 lg:right-10' : 'left-6 lg:left-10'} z-10`}>
          <span className={`text-[10px] tracking-[0.45em] text-[#CC0000] uppercase font-medium ${isArabic ? 'tracking-normal' : ''}`}>{t.ppf.label}</span>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col justify-end max-w-[1400px] mx-auto px-6 lg:px-10 pb-16 lg:pb-20 w-full">
          <div className={`flex flex-col lg:flex-row gap-8 lg:gap-16 mb-10 ${isArabic ? 'lg:flex-row-reverse' : ''}`}>
            {ppfPhases.map((phase, i) => (
              <div
                key={phase.num}
                ref={(el) => { phaseRefs.current[i] = el; }}
                className={`flex flex-col gap-2 ${isArabic ? 'text-right' : ''}`}
                style={{ opacity: 0 }}
              >
                <span className="font-display font-light text-[#CC0000]" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1 }}>{phase.num}</span>
                <span className={`text-[11px] tracking-[0.4em] text-white uppercase font-semibold ${isArabic ? 'tracking-normal' : ''}`}>{phase.title}</span>
                <span className="text-[13px] text-white/55 leading-snug max-w-[200px]">{phase.body}</span>
              </div>
            ))}
          </div>

          <div ref={finishRevealRef} className={`flex flex-col sm:flex-row gap-4 ${isArabic ? 'sm:flex-row-reverse' : ''}`} style={{ opacity: 0 }}>
            {finishes.map((finish, i) => (
              <Link
                key={finish.id}
                href={finishHrefs[i]}
                className={`group flex items-center gap-4 border border-white/20 px-6 py-4 hover:border-white/50 hover:bg-white/5 transition-all duration-300 ${isArabic ? 'flex-row-reverse' : ''}`}
              >
                <div className={isArabic ? 'text-right' : ''}>
                  <span className={`text-[9px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold block mb-0.5 ${isArabic ? 'tracking-normal' : ''}`}>{finish.label}</span>
                  <span className="text-sm text-white/70 group-hover:text-white transition-colors duration-300">{finish.label} PPF</span>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`${isArabic ? 'mr-auto rotate-180' : 'ml-auto'} text-white/30 group-hover:text-white ${isArabic ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-all duration-300`}>
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Existing PPF content */}
      <div className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div ref={(el) => { revealRefs.current[0] = el; }} className={`reveal-up mb-16 ${isArabic ? 'text-right' : ''}`}>
            <span className="section-label mb-4 block">{t.ppf.label}</span>
            <h2 className="font-display font-light text-[#1A1A1A] leading-tight mb-12" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              {t.ppf.headline1}<br />
              <span className="italic text-[#6B6560]">{t.ppf.headline2}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E0DBD5]">
              {ppfBenefits.map((benefit, i) => (
                <div key={benefit.title} className={`bg-[#FAFAF8] p-8 hover:bg-white transition-colors duration-300 ${isArabic ? 'text-right' : ''}`}>
                  <div className="font-display font-light text-[#CC0000] mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1 }}>0{i + 1}</div>
                  <h3 className={`text-[11px] tracking-[0.3em] uppercase font-semibold text-[#1A1A1A] mb-3 ${isArabic ? 'tracking-normal' : ''}`}>{benefit.title}</h3>
                  <p className="text-sm text-[#6B6560] leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div ref={(el) => { revealRefs.current[1] = el; }} className="reveal-up stagger-2">
            <div className="flex flex-col lg:flex-row gap-0 border border-[#E0DBD5]">
              {finishes.map((finish, i) => (
                <Link
                  key={finish.id}
                  href={finishHrefs[i]}
                  className={`group flex-1 p-10 lg:p-12 hover:bg-[#1A1A1A] transition-all duration-500 ${i === 0 ? 'border-b lg:border-b-0 lg:border-r border-[#E0DBD5]' : ''} ${isArabic ? 'text-right' : ''}`}
                >
                  <div className={`flex items-start justify-between mb-6 ${isArabic ? 'flex-row-reverse' : ''}`}>
                    <span className={`text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold group-hover:text-[#CC0000] ${isArabic ? 'tracking-normal' : ''}`}>{finish.label}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`text-[#9A9590] group-hover:text-white transition-colors duration-300 ${isArabic ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`}>
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-display font-light text-[#1A1A1A] group-hover:text-white transition-colors duration-300 mb-3">{finish.label} PPF</h3>
                  <p className="text-sm text-[#6B6560] group-hover:text-white/60 transition-colors duration-300 leading-relaxed">{finish.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          <div ref={(el) => { revealRefs.current[2] = el; }} className={`reveal-up stagger-3 mt-12 flex flex-col sm:flex-row gap-4 ${isArabic ? 'sm:flex-row-reverse' : ''}`}>
            <Link href="/automotive/paint-protection-film" className={`inline-flex items-center gap-3 bg-[#CC0000] text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#A30000] transition-colors duration-300 ${isArabic ? 'flex-row-reverse tracking-normal' : ''}`}>
              {t.ppf.cta}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isArabic ? 'rotate-180' : ''}>
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link href="/contact" className={`inline-flex items-center gap-3 border border-[#1A1A1A] text-[#1A1A1A] text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 ${isArabic ? 'tracking-normal' : ''}`}>
              {isArabic ? 'احصل على عرض سعر' : 'Get a Quote'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
