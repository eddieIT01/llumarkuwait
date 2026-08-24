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

  return (
    <section className="bg-[#FAFAF8] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          ref={(el) => { revealRefs.current[0] = el; }}
          className="reveal-up mb-16"
        >
          <span className="section-label">Why LLumar Kuwait</span>
          <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            One Uncompromising<br />
            <span className="italic text-[#6B6560]">Standard.</span>
          </h2>
        </div>

        {/* Items — editorial numbered list */}
        <div className="flex flex-col gap-0">
          {whyItems.map((item, i) => (
            <div
              key={item.num}
              ref={(el) => { revealRefs.current[i + 1] = el; }}
              className={`reveal-up stagger-${i + 1} grid grid-cols-1 lg:grid-cols-[120px_1fr_1fr] gap-6 lg:gap-12 py-10 border-t border-[#E0DBD5] ${i === whyItems.length - 1 ? 'border-b' : ''} items-start`}
            >
              <div className="font-display font-light text-[#CC0000]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{item.num}</div>
              <h3 className="text-xl lg:text-2xl font-display font-light text-[#1A1A1A] leading-snug">{item.title}</h3>
              <p className="text-sm text-[#6B6560] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          ref={(el) => { revealRefs.current[whyItems.length + 1] = el; }}
          className="reveal-up mt-16 flex flex-col sm:flex-row gap-4"
        >
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
