'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef?.current) return;
      const scrollY = window.scrollY;
      imgRef.current.style.transform = `scale(1.1) translateY(${scrollY * 0.22}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#050505] flex items-end">
      {/* Background image with parallax */}
      <div ref={imgRef} className="absolute inset-0 will-change-transform" style={{ transform: 'scale(1.1)' }}>
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_108242f7a-1779492497419.png"
          alt="Premium LLumar automotive window tint on a luxury vehicle in Kuwait"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      {/* Cinematic gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />
      {/* Subtle red vignette at bottom-left */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[300px] bg-gradient-to-tr from-[#CC0000]/15 to-transparent pointer-events-none" />
      {/* Vertical red accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[#CC0000] to-transparent"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1.2s ease 0.8s',
        }}
      />
      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-28 w-full">
        <div className="max-w-[780px]">

          {/* Eyebrow label */}
          <div
            className="flex items-center gap-3 mb-8"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
            }}
          >
            <span className="w-10 h-px bg-[#CC0000]" />
            <span className="text-[10px] tracking-[0.55em] text-white/50 uppercase font-medium">Kuwait's Exclusive LLumar Distributor Since 2000</span>
          </div>

          {/* Main headline */}
          <h1
            className="font-display font-light text-white leading-[0.88] tracking-tight mb-4"
            style={{
              fontSize: 'clamp(4rem, 10vw, 9.5rem)',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 1s ease 0.35s, transform 1s ease 0.35s',
            }}
          >
            Engineered
          </h1>
          <h1
            className="font-display font-light leading-[0.88] tracking-tight mb-8"
            style={{
              fontSize: 'clamp(4rem, 10vw, 9.5rem)',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(255,255,255,0.35)',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 1s ease 0.5s, transform 1s ease 0.5s',
            }}
          >
            to Protect.
          </h1>

          {/* Divider */}
          <div
            className="flex items-center gap-4 mb-8"
            style={{
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.7s ease 0.65s',
            }}
          >
            <span className="w-16 h-px bg-[#CC0000]" />
            <span className="w-4 h-px bg-white/20" />
          </div>

          {/* Subline */}
          <p
            className="text-[15px] text-white/50 leading-relaxed max-w-[460px] mb-12 font-light"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.7s ease 0.7s, transform 0.7s ease 0.7s',
            }}
          >
            Premium window film and paint protection for vehicles and architecture.
            Precision-installed by Kuwait's most experienced team.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.7s ease 0.85s, transform 0.7s ease 0.85s',
            }}
          >
            <Link
              href="/automotive/window-tint"
              className="inline-flex items-center gap-3 bg-[#CC0000] text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-9 py-4 hover:bg-[#A30000] transition-colors duration-300 group"
            >
              Explore Automotive
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-white/25 text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-9 py-4 hover:bg-white/8 hover:border-white/50 transition-all duration-300"
            >
              Contact LLumar Kuwait
            </Link>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-2"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.7s ease 1.1s',
        }}
      >
        <span className="text-[9px] tracking-[0.45em] text-white/25 uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <div className="w-px h-14 bg-gradient-to-b from-white/25 to-transparent" />
      </div>
      {/* Stats strip — premium glass bar */}
      <div
        className="absolute bottom-0 left-0 right-0 border-t border-white/8 bg-black/50 backdrop-blur-md"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.7s ease 1s',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-3 divide-x divide-white/8">
            {[
              { value: '25+', label: 'Years in Kuwait' },
              { value: '2', label: 'Showrooms' },
              { value: '2000', label: 'Established' },
            ]?.map((stat) => (
              <div key={stat?.label} className="py-5 px-6 text-center group">
                <div className="text-xl font-display font-light text-white group-hover:text-[#CC0000] transition-colors duration-300">{stat?.value}</div>
                <div className="text-[9px] tracking-[0.35em] text-white/30 uppercase mt-0.5">{stat?.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
