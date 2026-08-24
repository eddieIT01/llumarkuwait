'use client';
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function HeritageSection() {
  const { t, isArabic } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    statsRef.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#1A1A1A] py-24 lg:py-32 overflow-hidden" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center`}>
          {/* Left — editorial text */}
          <div ref={sectionRef} className={`reveal-left ${isArabic ? 'text-right' : ''}`}>
            <span className="section-label" style={{ color: '#CC0000' }}>{t.heritage.label}</span>
            <div className="mt-6">
              <div className="font-display font-light text-white leading-none" style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}>
                {t.heritage.yearsValue}
              </div>
              <div className="text-xl lg:text-2xl font-display font-light text-white/60 mt-1 mb-8">
                {t.heritage.yearsLabel}
              </div>
              <div className={`w-10 h-px bg-[#CC0000] mb-8 ${isArabic ? 'mr-0 ml-auto' : ''}`} />
              <p className="text-base text-white/55 leading-relaxed max-w-[440px]">
                {t.heritage.body1}
              </p>
              <p className="mt-4 text-sm text-white/35 leading-relaxed max-w-[440px]">
                {t.heritage.body2}
              </p>
            </div>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-px bg-white/5">
            {t.heritage.stats.map((stat, i) => (
              <div
                key={stat.label}
                ref={(el) => { statsRef.current[i] = el; }}
                className={`reveal-up stagger-${i + 1} bg-[#1A1A1A] p-8 hover:bg-white/3 transition-colors duration-300 ${isArabic ? 'text-right' : ''}`}
              >
                <div className="font-display font-light text-white mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                  {stat.value}
                </div>
                <div className={`text-[11px] font-semibold tracking-[0.2em] text-white/60 uppercase mb-1 ${isArabic ? 'tracking-normal' : ''}`}>{stat.label}</div>
                <div className="text-[11px] text-white/25">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}