'use client';
import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function CinematicHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0);
  // 0 = black, 1 = car emerges, 2 = brand text, 3 = tagline, 4 = scroll ready

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setPhase(1), 600));
    timers.push(setTimeout(() => setPhase(2), 1800));
    timers.push(setTimeout(() => setPhase(3), 2800));
    timers.push(setTimeout(() => setPhase(4), 4000));
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (phase < 4) return;
    const handleScroll = () => {
      if (!heroRef.current || !carRef.current) return;
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight * 0.8;
      const progress = Math.min(scrollY / maxScroll, 1);
      if (carRef.current) {
        carRef.current.style.transform = `translateX(${progress * 8}%) scale(${1 + progress * 0.06}) translateY(${progress * -3}%)`;
        carRef.current.style.filter = `brightness(${0.55 + progress * 0.25})`;
      }
      if (textRef.current) {
        textRef.current.style.opacity = `${Math.max(0, 1 - progress * 2.5)}`;
        textRef.current.style.transform = `translateY(${progress * -40}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [phase]);

  return (
    <section ref={heroRef} className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Car image — emerges from darkness */}
      <div
        ref={carRef}
        className="absolute inset-0 transition-all duration-[2000ms] ease-out"
        style={{
          opacity: phase >= 1 ? 1 : 0,
          filter: 'brightness(0.55)',
          transform: phase >= 1 ? 'scale(1.05)' : 'scale(1.12)',
          transition: 'opacity 2s ease-out, transform 2.5s cubic-bezier(0.16,1,0.3,1), filter 2s ease-out'
        }}>

        <AppImage
          src="https://llumarkuwait.com/wp-content/uploads/2024/10/irx-pro-tint-min-1-e1728241602857.jpg"
          alt="Luxury vehicle with LLumar premium window tint and paint protection film"
          fill
          className="object-cover object-center"
          priority />

        {/* Radial vignette — car emerges from center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_55%,transparent_0%,rgba(0,0,0,0.5)_60%,rgba(0,0,0,0.95)_100%)]" />
      </div>

      {/* Absolute black overlay that fades out */}
      <div
        className="absolute inset-0 bg-black pointer-events-none z-10 transition-opacity duration-[1800ms] ease-out"
        style={{ opacity: phase >= 1 ? 0 : 1 }} />


      {/* Brand text */}
      <div ref={textRef} className="relative z-20 text-center flex flex-col items-center gap-3 px-6">
        <div
          className="transition-all duration-[1200ms] ease-out"
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? 'translateY(0)' : 'translateY(12px)',
            transitionDelay: '0ms'
          }}>

          <span className="text-[10px] md:text-xs tracking-[0.5em] text-[#C9A84C] font-medium uppercase">
            LLUMAR KUWAIT
          </span>
        </div>

        <div
          className="transition-all duration-[1400ms] ease-out"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '0ms'
          }}>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-white tracking-tight leading-none">
            PROTECTION<br />
            <span className="italic text-white/70">WITHOUT</span><br />
            COMPROMISE.
          </h1>
        </div>

        <div
          className="mt-6 transition-all duration-[1000ms] ease-out"
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transform: phase >= 4 ? 'translateY(0)' : 'translateY(8px)'
          }}>

          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.4em] text-white/30 uppercase">Scroll to explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
    </section>);

}