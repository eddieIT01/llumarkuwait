'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef?.current) return;
      const scrollY = window.scrollY;
      imgRef.current.style.transform = `scale(1.08) translateY(${scrollY * 0.25}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#0A0A0A] flex items-end">
      {/* Background image with parallax */}
      <div ref={imgRef} className="absolute inset-0 will-change-transform" style={{ transform: 'scale(1.08)' }}>
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_108242f7a-1779492497419.png"
          alt="Premium LLumar automotive window tint on a luxury vehicle in Kuwait"
          fill
          className="object-cover object-center"
          priority />
      </div>
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-20 w-full">
        <div className="max-w-[700px]">
          {/* Label */}
          <div className={`flex items-center gap-3 mb-6 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
            <span className="w-8 h-px bg-[#CC0000]" />
            <span className="text-[10px] tracking-[0.5em] text-white/60 uppercase font-medium">Kuwait's Exclusive LLumar Distributor Since 2000</span>
          </div>

          {/* Main headline */}
          <h1 className={`font-display font-light text-white leading-[0.92] tracking-tight mb-6 transition-all duration-900 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)', transitionDelay: '350ms' }}>
            Engineered<br />
            <span className="italic text-white/70">to Protect.</span>
          </h1>

          {/* Subline */}
          <p className={`text-base text-white/55 leading-relaxed max-w-[440px] mb-10 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '550ms' }}>
            Premium window film and paint protection for vehicles and architecture. Precision-installed by Kuwait's most experienced team.
          </p>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '700ms' }}>
            <Link href="/automotive/window-tint" className="inline-flex items-center gap-3 bg-[#CC0000] text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#A30000] transition-colors duration-300">
              Explore Automotive
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-3 border border-white/30 text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-white/10 transition-colors duration-300">
              Contact LLumar Kuwait
            </Link>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className={`absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-2 transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
        <span className="text-[9px] tracking-[0.4em] text-white/30 uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
      {/* Stats strip */}
      <div className={`absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '900ms' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {[
            { value: '25+', label: 'Years in Kuwait' },
            { value: '2', label: 'Showrooms' },
            { value: '2000', label: 'Established' }]?.
            map((stat) =>
            <div key={stat?.label} className="py-4 px-6 text-center">
                <div className="text-lg font-display font-light text-white">{stat?.value}</div>
                <div className="text-[9px] tracking-[0.3em] text-white/35 uppercase mt-0.5">{stat?.label}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}