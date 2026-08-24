'use client';
import React, { useEffect, useRef } from 'react';

const stats = [
  { value: '25+', label: 'Years of Experience', detail: 'Serving Kuwait since 2000' },
  { value: '65+', label: 'Years of LLumar Technology', detail: 'Global film engineering expertise' },
  { value: '2', label: 'Kuwait Showrooms', detail: 'Shuwaikh & Al Rai' },
  { value: '#1', label: 'Film Installer in Kuwait', detail: 'Exclusive authorized distributor' },
];

export default function HeritageSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    statsRef.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#1A1A1A] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — editorial text */}
          <div ref={sectionRef} className="reveal-left">
            <span className="section-label" style={{ color: '#CC0000' }}>The LLumar Difference</span>
            <div className="mt-6">
              <div className="font-display font-light text-white leading-none" style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}>
                25+
              </div>
              <div className="text-xl lg:text-2xl font-display font-light text-white/60 mt-1 mb-8">
                Years of Experience
              </div>
              <div className="w-10 h-px bg-[#CC0000] mb-8" />
              <p className="text-base text-white/55 leading-relaxed max-w-[440px]">
                One uncompromising standard. Since 2000, LLumar Kuwait has set the benchmark for professional film installation in the region — combining global LLumar technology with deep local expertise.
              </p>
              <p className="mt-4 text-sm text-white/35 leading-relaxed max-w-[440px]">
                Every installation is performed by trained technicians using authentic LLumar films — the same technology trusted by professionals across 100+ countries.
              </p>
            </div>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-px bg-white/5">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                ref={(el) => { statsRef.current[i] = el; }}
                className={`reveal-up stagger-${i + 1} bg-[#1A1A1A] p-8 hover:bg-white/3 transition-colors duration-300`}
              >
                <div className="font-display font-light text-white mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                  {stat.value}
                </div>
                <div className="text-[11px] font-semibold tracking-[0.2em] text-white/60 uppercase mb-1">{stat.label}</div>
                <div className="text-[11px] text-white/25">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}