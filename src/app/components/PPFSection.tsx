'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function PPFSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const filmRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef?.current) return;
      const rect = sectionRef?.current?.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (viewH - rect?.top) / (viewH + rect?.height)));

      if (filmRef?.current) {
        // PPF layer physically appears — slides down from top
        const filmProgress = Math.min(1, progress * 2);
        filmRef.current.style.clipPath = `inset(${Math.max(0, 100 - filmProgress * 100)}% 0 0 0)`;
        filmRef.current.style.opacity = `${filmProgress * 0.85}`;
      }
      if (textRef?.current) {
        const tp = Math.min(1, Math.max(0, (progress - 0.2) * 2.5));
        textRef.current.style.opacity = `${tp}`;
        textRef.current.style.transform = `translateX(${(1 - tp) * -30}px)`;
      }
      if (statsRef?.current) {
        const sp = Math.min(1, Math.max(0, (progress - 0.4) * 3));
        statsRef.current.style.opacity = `${sp}`;
        statsRef.current.style.transform = `translateY(${(1 - sp) * 20}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-black overflow-hidden flex items-center">
      {/* Base paint image */}
      <div className="absolute inset-0">
        <AppImage
          src="https://llumarkuwait.com/wp-content/uploads/2024/10/3.Paint-protection-films-1024x684.jpg"
          alt="LLumar paint protection film applied to vehicle bodywork close-up"
          fill
          className="object-cover object-center opacity-40" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
      </div>
      {/* PPF layer — physically appears over bodywork */}
      <div
        ref={filmRef}
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ clipPath: 'inset(100% 0 0 0)', opacity: 0, transition: 'clip-path 0.1s, opacity 0.1s' }}>

        <div className="absolute inset-0 bg-gradient-to-b from-[#C9A84C]/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
        {/* Film edge shimmer */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent" />
      </div>
      {/* Content */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-10 w-full py-24">
        <div className="max-w-2xl">
          <div ref={textRef} style={{ opacity: 0, transform: 'translateX(-30px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
            <span className="text-[10px] tracking-[0.5em] text-[#C9A84C] uppercase font-medium">02 — Paint Protection</span>
            <h2 className="mt-4 text-5xl md:text-7xl font-display font-light text-white leading-none tracking-tight">
              PPF<br />
              <span className="italic text-white/60">PROTECTION</span>
            </h2>
            <div className="mt-6 flex flex-col gap-2">
              {['SELF-HEALING.', 'HYDROPHOBIC.', 'BUILT TO PROTECT.']?.map((line, i) =>
              <span
                key={line}
                className="text-lg md:text-2xl font-display font-light tracking-widest text-white/80"
                style={{ transitionDelay: `${i * 100}ms` }}>

                  {line}
                </span>
              )}
            </div>
            <p className="mt-6 text-sm text-white/50 leading-relaxed max-w-sm">
              LLumar® paint protection film stands up to flying rocks, bird droppings, salt, sand and more. Factory-backed, extensively tested, available in gloss and matte finishes.
            </p>
            <a href="/automotive/paint-protection-film" className="mt-8 inline-flex items-center gap-3 text-xs tracking-widest text-[#C9A84C] uppercase font-medium group">
              Explore PPF Products
              <span className="w-8 h-px bg-[#C9A84C] group-hover:w-14 transition-all duration-300" />
            </a>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="mt-12 grid grid-cols-3 gap-6" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
            {[
            { value: '10yr', label: 'Warranty' },
            { value: '6', label: 'Film Variants' },
            { value: '25+', label: 'Years in Kuwait' }]?.
            map((stat) =>
            <div key={stat?.label} className="border-l border-white/10 pl-4">
                <div className="text-2xl font-display font-light text-white">{stat?.value}</div>
                <div className="text-[10px] tracking-widest text-white/30 uppercase mt-1">{stat?.label}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}