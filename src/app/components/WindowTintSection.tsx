'use client';
import React, { useEffect, useRef } from 'react';

export default function WindowTintSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef?.current) return;
      const rect = sectionRef?.current?.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (viewH - rect?.top) / (viewH + rect?.height)));

      if (glassRef?.current) {
        // Glass slides in from left
        const slideProgress = Math.min(1, progress * 2.5);
        glassRef.current.style.clipPath = `inset(0 ${Math.max(0, 100 - slideProgress * 100)}% 0 0)`;
      }
      if (overlayRef?.current) {
        // Tint darkens as glass slides
        const tintProgress = Math.min(1, Math.max(0, (progress - 0.2) * 3));
        overlayRef.current.style.opacity = `${tintProgress * 0.75}`;
      }
      if (textRef?.current) {
        const textProgress = Math.min(1, Math.max(0, (progress - 0.3) * 3));
        textRef.current.style.opacity = `${textProgress}`;
        textRef.current.style.transform = `translateY(${(1 - textProgress) * 20}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-black overflow-hidden flex items-center">
      {/* Background — clear view */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black" />
        {/* Clear side — bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/60 to-transparent" />
      </div>
      {/* Tinted glass overlay — slides in */}
      <div ref={glassRef} className="absolute inset-0 z-10" style={{ clipPath: 'inset(0 100% 0 0)' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/90 to-black/95" />
        <div ref={overlayRef} className="absolute inset-0 bg-[#1a2a1a]/75 transition-opacity duration-300" style={{ opacity: 0 }} />
        {/* Glass sheen */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      {/* Vertical divider line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/10 z-20 pointer-events-none" />
      {/* Labels */}
      <div className="absolute top-12 left-8 z-30">
        <span className="text-[9px] tracking-[0.5em] text-white/30 uppercase">Clear</span>
      </div>
      <div className="absolute top-12 right-8 z-30">
        <span className="text-[9px] tracking-[0.5em] text-white/30 uppercase">Tinted</span>
      </div>
      {/* Content */}
      <div className="relative z-30 max-w-[1400px] mx-auto px-6 md:px-10 w-full py-24">
        <div ref={textRef} className="max-w-xl" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
          <span className="text-[10px] tracking-[0.5em] text-[#C9A84C] uppercase font-medium">01 — Automotive</span>
          <h2 className="mt-4 text-5xl md:text-7xl font-display font-light text-white leading-none tracking-tight">
            WINDOW<br />
            <span className="italic text-white/60">TINT</span>
          </h2>
          <p className="mt-6 text-sm text-white/50 leading-relaxed max-w-sm">
            LLumar® automotive window tint fights heat, glare, and harmful UV rays. Ceramic, metallized, dyed, and clear options — engineered for Kuwait's extreme climate.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {['Heat Rejection', 'UV Protection', 'Glare Control', 'Privacy']?.map((feat) => (
              <span key={feat} className="text-[10px] tracking-widest text-white/40 uppercase border border-white/10 px-3 py-1.5">{feat}</span>
            ))}
          </div>
          <a href="/automotive/window-tint" className="mt-8 inline-flex items-center gap-3 text-xs tracking-widest text-[#C9A84C] uppercase font-medium group">
            Explore Window Tint
            <span className="w-8 h-px bg-[#C9A84C] group-hover:w-14 transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
