'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function SafetySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const [cracked, setCracked] = useState(false);
  const [held, setHeld] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setCracked(true), 1200);
          setTimeout(() => setHeld(true), 2200);
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-black overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 to-black" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Interactive glass visual */}
          <div className="flex flex-col items-center justify-center">
            <div
              ref={glassRef}
              className="relative w-full max-w-sm aspect-[3/4] cursor-pointer select-none"
              onClick={() => { setCracked(true); setTimeout(() => setHeld(true), 1000); }}
            >
              {/* Glass panel */}
              <div className={`absolute inset-0 border border-white/20 transition-all duration-700 ${cracked ? 'border-white/10' : 'border-white/20'}`}>
                {/* Glass sheen */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                {/* Impact point */}
                {cracked && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Crack lines radiating from center */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 400" fill="none">
                      {/* Main cracks */}
                      <line x1="150" y1="200" x2="60" y2="80" stroke="white" strokeWidth="0.8" strokeOpacity="0.4" className="animate-[drawLine_0.4s_ease-out_forwards]" style={{ strokeDasharray: 200, strokeDashoffset: cracked ? 0 : 200, transition: 'stroke-dashoffset 0.5s ease-out' }} />
                      <line x1="150" y1="200" x2="280" y2="100" stroke="white" strokeWidth="0.8" strokeOpacity="0.35" style={{ strokeDasharray: 200, strokeDashoffset: cracked ? 0 : 200, transition: 'stroke-dashoffset 0.6s ease-out 0.1s' }} />
                      <line x1="150" y1="200" x2="30" y2="300" stroke="white" strokeWidth="0.6" strokeOpacity="0.3" style={{ strokeDasharray: 200, strokeDashoffset: cracked ? 0 : 200, transition: 'stroke-dashoffset 0.5s ease-out 0.15s' }} />
                      <line x1="150" y1="200" x2="290" y2="350" stroke="white" strokeWidth="0.6" strokeOpacity="0.3" style={{ strokeDasharray: 200, strokeDashoffset: cracked ? 0 : 200, transition: 'stroke-dashoffset 0.5s ease-out 0.2s' }} />
                      <line x1="150" y1="200" x2="150" y2="20" stroke="white" strokeWidth="0.5" strokeOpacity="0.25" style={{ strokeDasharray: 200, strokeDashoffset: cracked ? 0 : 200, transition: 'stroke-dashoffset 0.4s ease-out 0.05s' }} />
                      <line x1="150" y1="200" x2="150" y2="390" stroke="white" strokeWidth="0.5" strokeOpacity="0.25" style={{ strokeDasharray: 200, strokeDashoffset: cracked ? 0 : 200, transition: 'stroke-dashoffset 0.4s ease-out 0.1s' }} />
                      <line x1="150" y1="200" x2="20" y2="180" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" style={{ strokeDasharray: 200, strokeDashoffset: cracked ? 0 : 200, transition: 'stroke-dashoffset 0.4s ease-out 0.25s' }} />
                      <line x1="150" y1="200" x2="290" y2="220" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" style={{ strokeDasharray: 200, strokeDashoffset: cracked ? 0 : 200, transition: 'stroke-dashoffset 0.4s ease-out 0.3s' }} />
                      {/* Impact circle */}
                      <circle cx="150" cy="200" r="8" fill="white" fillOpacity={cracked ? 0.15 : 0} style={{ transition: 'fill-opacity 0.3s ease-out' }} />
                      <circle cx="150" cy="200" r="20" stroke="white" strokeWidth="0.5" strokeOpacity={cracked ? 0.2 : 0} fill="none" style={{ transition: 'stroke-opacity 0.4s ease-out 0.2s' }} />
                    </svg>
                  </div>
                )}

                {/* Film held overlay */}
                {held && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/8 via-transparent to-[#C9A84C]/5 transition-opacity duration-1000" />
                )}
              </div>

              {/* Impact indicator */}
              {!cracked && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3 animate-pulse">
                    <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.5">
                        <path d="M12 2L12 22M2 12L22 12" />
                      </svg>
                    </div>
                    <span className="text-[9px] tracking-[0.4em] text-white/30 uppercase">Impact</span>
                  </div>
                </div>
              )}

              {/* "Film holds" label */}
              {held && (
                <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                  <span className="text-[9px] tracking-[0.4em] text-[#C9A84C] uppercase font-medium animate-[fadeIn_0.8s_ease-out_forwards]">
                    Film holds. Glass stays.
                  </span>
                </div>
              )}
            </div>
            <p className="mt-4 text-[9px] tracking-[0.3em] text-white/20 uppercase">Click to simulate impact</p>
          </div>

          {/* Right — Content */}
          <div
            className="flex flex-col gap-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
            }}
          >
            <span className="text-[10px] tracking-[0.5em] text-[#C9A84C] uppercase font-medium">03 — Safety & Security</span>
            <h2 className="text-5xl md:text-6xl font-display font-light text-white leading-none tracking-tight">
              PROTECT<br />
              <span className="italic text-white/60">WHAT</span><br />
              MATTERS.
            </h2>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm">
              Safety and security film defends against break-ins, vandalism, accidents, storms, and blasts. Engineered for strength using heavy-duty polyester film bonded with industrial adhesives.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-2">
              {[
                { icon: '🛡️', label: 'Burglary Defense' },
                { icon: '💥', label: 'Blast Protection' },
                { icon: '🌪️', label: 'Storm Safety' },
                { icon: '☀️', label: 'UV Protection' },
              ]?.map((item) => (
                <div key={item?.label} className="flex items-center gap-3 border border-white/8 px-4 py-3">
                  <span className="text-base">{item?.icon}</span>
                  <span className="text-xs text-white/50 tracking-wider">{item?.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-2 flex flex-col gap-2">
              <p className="text-[10px] tracking-widest text-white/25 uppercase">Certified to international standards</p>
              <div className="flex flex-wrap gap-2">
                {['ANSI Z97.1', 'GSA TS01', 'ASTM F1642', 'EN356 P2A']?.map((cert) => (
                  <span key={cert} className="text-[9px] tracking-wider text-white/30 border border-white/10 px-2 py-1">{cert}</span>
                ))}
              </div>
            </div>

            <a href="/architectural/safety-security" className="mt-2 inline-flex items-center gap-3 text-xs tracking-widest text-[#C9A84C] uppercase font-medium group">
              Explore Safety Films
              <span className="w-8 h-px bg-[#C9A84C] group-hover:w-14 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
