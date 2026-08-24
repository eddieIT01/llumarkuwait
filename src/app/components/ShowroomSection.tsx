'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const services = [
{
  id: 'automotive',
  num: '01',
  title: 'Automotive Films',
  tagline: 'Comfort, protection and presence — engineered for the road.',
  desc: 'From ceramic window tint to full-body paint protection, every LLumar automotive film is engineered for Kuwait\'s extreme climate.',
  href: '/automotive/window-tint',
  image: 'https://llumar.com/content/dam/eastman/performance-films/llumar/imagery/automotive/llumar-automotive-tint-hero.jpg',
  alt: 'LLumar automotive window tint on a luxury sports car',
  cta: 'Explore Automotive'
},
{
  id: 'ppf',
  num: '02',
  title: 'Paint Protection Film',
  tagline: 'Preserve the finish. Let the road take the impact.',
  desc: 'Self-healing, hydrophobic, and virtually invisible. LLumar PPF protects your vehicle\'s paint from chips, scratches, and environmental damage.',
  href: '/automotive/paint-protection-film',
  image: 'https://llumar.com/content/dam/eastman/performance-films/llumar/imagery/ppf/llumar-ppf-installation.jpg',
  alt: 'Professional LLumar paint protection film installation on a vehicle',
  cta: 'Explore PPF'
},
{
  id: 'architectural',
  num: '03',
  title: 'Architectural Films',
  tagline: 'Transform your space. Control your environment.',
  desc: 'Residential and commercial window film solutions that reduce heat, block UV, enhance privacy, and elevate the aesthetic of any space.',
  href: '/architectural/residential',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_15b0eb31f-1787540189116.png",
  alt: 'Modern interior with LLumar architectural window film on large glass panels',
  cta: 'Explore Architectural'
}];


export default function ShowroomSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.15 }
    );
    itemRefs.current.forEach((el) => {if (el) observer.observe(el);});
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#FAFAF8] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <span className="section-label">Our Services</span>
            <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              The Complete<br />
              <span className="italic text-[#6B6560]">Protection System</span>
            </h2>
          </div>
          <p className="text-sm text-[#6B6560] leading-relaxed max-w-[360px] lg:text-right">
            Three categories. One uncompromising standard. Every product installed by Kuwait's most experienced LLumar team.
          </p>
        </div>

        {/* Service items — editorial asymmetric layout */}
        <div className="flex flex-col gap-0">
          {services.map((service, i) =>
          <div
            key={service.id}
            ref={(el) => {itemRefs.current[i] = el;}}
            className={`reveal-up stagger-${i + 1} group grid grid-cols-1 lg:grid-cols-2 border-t border-[#E0DBD5] ${i === services.length - 1 ? 'border-b' : ''}`}>

              {/* Text side */}
              <div className={`py-12 lg:py-16 ${i % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16 lg:order-2'}`}>
                <div className="flex items-start gap-6">
                  <span className="text-[11px] tracking-[0.4em] text-[#CC0000] font-semibold mt-1 flex-shrink-0">{service.num}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-display font-light text-[#1A1A1A] mb-3">{service.title}</h3>
                    <p className="text-base text-[#1A1A1A] font-medium mb-4 leading-snug">{service.tagline}</p>
                    <p className="text-sm text-[#6B6560] leading-relaxed mb-8">{service.desc}</p>
                    <Link
                    href={service.href}
                    className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#CC0000] group-hover:gap-5 transition-all duration-300">

                      {service.cta}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Image side */}
              <div className={`relative h-64 lg:h-auto overflow-hidden bg-[#1A1A1A] ${i % 2 === 0 ? '' : 'lg:order-1'}`}>
                <AppImage
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105" />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}