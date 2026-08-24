'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const whyItems = [
  {
    num: '01',
    title: 'Engineered Performance',
    desc: 'LLumar films are manufactured to precise engineering standards — tested for heat rejection, UV blocking, optical clarity and long-term durability.',
  },
  {
    num: '02',
    title: '25+ Years in Kuwait',
    desc: 'Since 2000, we\'ve built Kuwait\'s most trusted film installation operation — with the experience to handle every vehicle and every building.',
  },
  {
    num: '03',
    title: 'Advanced Film Technology',
    desc: 'From nano-ceramic automotive tint to self-healing PPF — every LLumar product represents decades of material science and film engineering.',
  },
  {
    num: '04',
    title: 'Professional Installation',
    desc: 'Every film is installed by trained, certified technicians. Precision application is what separates a premium result from an ordinary one.',
  },
];

export default function SafetySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      if (headerRef.current) { headerRef.current.style.opacity = '1'; headerRef.current.style.transform = 'none'; }
      itemRefs.current.forEach(el => { if (el) { el.style.opacity = '1'; el.style.transform = 'none'; } });
      if (ctaRef.current) { ctaRef.current.style.opacity = '1'; ctaRef.current.style.transform = 'none'; }
      return;
    }

    let gsapCtx: { revert: () => void } | null = null;

    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      gsapCtx = gsap.context(() => {
        gsap.set(headerRef.current, { opacity: 0, y: 30 });
        ScrollTrigger.create({
          trigger: headerRef.current,
          start: 'top 85%',
          onEnter: () => gsap.to(headerRef.current, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }),
        });

        itemRefs.current.forEach((el, i) => {
          if (!el) return;
          gsap.set(el, { opacity: 0, y: 24 });
          ScrollTrigger.create({
            trigger: el,
            start: 'top 88%',
            onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.8, delay: i * 0.08, ease: 'power3.out' }),
          });
        });

        if (ctaRef.current) {
          gsap.set(ctaRef.current, { opacity: 0, y: 20 });
          ScrollTrigger.create({
            trigger: ctaRef.current,
            start: 'top 90%',
            onEnter: () => gsap.to(ctaRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }),
          });
        }
      }, sectionRef);
    };

    initGSAP();
    return () => { gsapCtx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#FAFAF8] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={headerRef} className="mb-20" style={{ opacity: 0 }}>
          <span className="section-label">Why LLumar Kuwait</span>
          <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            One Uncompromising<br />
            <span className="italic text-[#6B6560]">Standard.</span>
          </h2>
        </div>

        {/* Editorial numbered list — large type, no cards */}
        <div className="flex flex-col gap-0">
          {whyItems.map((item, i) => (
            <div
              key={item.num}
              ref={(el) => { itemRefs.current[i] = el; }}
              className={`grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-0 lg:gap-0 border-t border-[#E0DBD5] ${i === whyItems.length - 1 ? 'border-b' : ''}`}
              style={{ opacity: 0 }}
            >
              {/* Large editorial number */}
              <div className="pt-10 pb-4 lg:py-12 pr-0 lg:pr-8">
                <span
                  className="font-display font-light text-[#CC0000] select-none"
                  style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1 }}
                >
                  {item.num}
                </span>
              </div>
              {/* Content */}
              <div className="pb-10 lg:py-12 lg:pl-8 lg:border-l border-[#E0DBD5] flex flex-col lg:flex-row gap-4 lg:gap-16 items-start">
                <h3
                  className="font-display font-light text-[#1A1A1A] leading-tight flex-shrink-0"
                  style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', minWidth: '220px' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-[#6B6560] leading-relaxed max-w-[480px] pt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div ref={ctaRef} className="mt-16 flex flex-col sm:flex-row gap-4" style={{ opacity: 0 }}>
          <Link href="/about" className="inline-flex items-center gap-3 bg-[#CC0000] text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#A30000] transition-colors duration-300">
            About LLumar Kuwait
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-3 border border-[#1A1A1A] text-[#1A1A1A] text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#1A1A1A] hover:text-white transition-all duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
