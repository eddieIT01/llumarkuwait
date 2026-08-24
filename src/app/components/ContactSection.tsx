'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const contactItems = [
  {
    label: 'Shuwaikh Showroom',
    detail: 'Shuwaikh Industrial Area, Kuwait',
    phone: '+965 566 17907',
    whatsapp: '96556617907',
    maps: 'https://maps.app.goo.gl/V4aDScBpW8dYkC8H8',
  },
  {
    label: 'Al Rai Showroom',
    detail: 'Al Ghazali Street, Al Rai',
    phone: '+965 6500 8585',
    whatsapp: '96565008585',
    maps: 'https://maps.app.goo.gl/VV6JvW3YLXCe8TGT6',
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="bg-[#F5F0EA] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div ref={sectionRef} className="reveal-up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div>
              <span className="section-label">Visit Us</span>
              <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                Two Locations<br />
                <span className="italic text-[#6B6560]">Across Kuwait</span>
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-[#6B6560]">8:30 AM – 7:30 PM</p>
              <a href="mailto:info@llumarkuwait.com" className="text-sm text-[#1A1A1A] hover:text-[#CC0000] transition-colors duration-200">info@llumarkuwait.com</a>
              <a href="tel:1886660" className="text-sm text-[#1A1A1A] hover:text-[#CC0000] transition-colors duration-200">Hotline: 1886660</a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E0DBD5]">
            {contactItems?.map((item) => (
              <div key={item?.label} className="bg-[#F5F0EA] p-8 lg:p-10">
                <p className="text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-3">Showroom</p>
                <h3 className="text-xl font-display font-light text-[#1A1A1A] mb-1">{item?.label}</h3>
                <p className="text-sm text-[#6B6560] mb-6">{item?.detail}</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${item?.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 border border-[#25D366] text-[#25D366] text-[11px] font-semibold tracking-wider uppercase hover:bg-[#25D366] hover:text-white transition-all duration-300"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${item?.phone?.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 px-4 py-2.5 border border-[#1A1A1A] text-[#1A1A1A] text-[11px] font-semibold tracking-wider uppercase hover:bg-[#1A1A1A] hover:text-white transition-all duration-300"
                  >
                    {item?.phone}
                  </a>
                  <a
                    href={item?.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 border border-[#E0DBD5] text-[#6B6560] text-[11px] font-semibold tracking-wider uppercase hover:border-[#1A1A1A] hover:text-[#1A1A1A] transition-all duration-300"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                    Directions
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/contact" className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#CC0000] hover:gap-5 transition-all duration-300">
              Full Contact Page
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}