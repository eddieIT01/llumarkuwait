'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const ppfBenefits = [
{ title: 'Self-Healing', desc: 'Minor scratches disappear with heat exposure. The film restores itself.' },
{ title: 'Hydrophobic', desc: 'Water beads and rolls off the surface, carrying contaminants with it.' },
{ title: 'Impact Resistant', desc: 'Absorbs road debris, stone chips, and minor impacts before they reach the paint.' },
{ title: 'UV Stable', desc: 'Resists yellowing and maintains optical clarity over years of use.' }];


const finishes = [
{ id: 'gloss', label: 'Gloss', desc: 'Crystal-clear protection that enhances your paint\'s depth and shine.', href: '/automotive/ppf-gloss' },
{ id: 'matte', label: 'Matte', desc: 'Transforms gloss paint to a premium satin finish while protecting it.', href: '/automotive/ppf-matte' }];


export default function PPFSection() {
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
    revealRefs.current.forEach((el) => {if (el) observer.observe(el);});
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#FAFAF8] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Full-bleed image with text overlay */}
        <div
          ref={(el) => {revealRefs.current[0] = el;}}
          className="reveal-up relative h-[60vh] min-h-[400px] overflow-hidden mb-16">

          <AppImage
            src="https://llumar.com/content/dam/eastman/performance-films/llumar/imagery/ppf/llumar-ppf-installation.jpg"
            alt="Professional LLumar paint protection film being applied to a vehicle hood"
            fill
            className="object-cover" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-end p-8 lg:p-14">
            <div className="max-w-[560px]">
              <span className="section-label" style={{ color: '#CC0000' }}>Paint Protection Film</span>
              <h2 className="mt-4 font-display font-light text-white leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
                The Invisible<br />
                <span className="italic text-white/70">Shield.</span>
              </h2>
              <p className="mt-4 text-base text-white/60 leading-relaxed">
                Virtually invisible protection that preserves your vehicle's finish against the road's daily assault.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits grid — asymmetric */}
        <div
          ref={(el) => {revealRefs.current[1] = el;}}
          className="reveal-up stagger-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E0DBD5] mb-16">

          {ppfBenefits.map((benefit, i) =>
          <div key={benefit.title} className="bg-[#FAFAF8] p-8 hover:bg-white transition-colors duration-300">
              <div className="text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-3">0{i + 1}</div>
              <h3 className="text-lg font-display font-light text-[#1A1A1A] mb-3">{benefit.title}</h3>
              <p className="text-sm text-[#6B6560] leading-relaxed">{benefit.desc}</p>
            </div>
          )}
        </div>

        {/* Finish options */}
        <div
          ref={(el) => {revealRefs.current[2] = el;}}
          className="reveal-up stagger-3">

          <div className="flex flex-col lg:flex-row gap-0 border border-[#E0DBD5]">
            {finishes.map((finish, i) =>
            <Link
              key={finish.id}
              href={finish.href}
              className={`group flex-1 p-10 lg:p-12 hover:bg-[#1A1A1A] transition-all duration-500 ${i === 0 ? 'border-b lg:border-b-0 lg:border-r border-[#E0DBD5]' : ''}`}>

                <div className="flex items-start justify-between mb-6">
                  <span className="text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold group-hover:text-[#CC0000]">{finish.label} Finish</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#9A9590] group-hover:text-white transition-colors duration-300 group-hover:translate-x-1 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-light text-[#1A1A1A] group-hover:text-white transition-colors duration-300 mb-3">{finish.label} PPF</h3>
                <p className="text-sm text-[#6B6560] group-hover:text-white/60 transition-colors duration-300 leading-relaxed">{finish.desc}</p>
              </Link>
            )}
          </div>
        </div>

        {/* CTA */}
        <div
          ref={(el) => {revealRefs.current[3] = el;}}
          className="reveal-up stagger-4 mt-12 flex flex-col sm:flex-row gap-4">

          <Link href="/automotive/paint-protection-film" className="inline-flex items-center gap-3 bg-[#CC0000] text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#A30000] transition-colors duration-300">
            Explore PPF Options
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-3 border border-[#1A1A1A] text-[#1A1A1A] text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#1A1A1A] hover:text-white transition-all duration-300">
            Get a Quote
          </Link>
        </div>
      </div>
    </section>);

}