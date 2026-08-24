'use client';
import React, { useEffect, useRef } from 'react';

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '2000', label: 'Founded' },
  { value: '2', label: 'Showrooms in Kuwait' },
  { value: '#1', label: 'Window Film Installer' },
  { value: '100%', label: 'Exclusive Distributor' },
];

export default function HeritageStrip() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            entry.target.classList.remove('is-hidden');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );
    const el = ref?.current;
    if (el) {
      el?.querySelectorAll('.scroll-animate')?.forEach((node) => {
        node?.classList?.add('is-hidden');
        observer?.observe(node);
      });
    }
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-12 bg-secondary border-y border-border/50 overflow-hidden">
      {/* Animated gold line top */}
      <div className="absolute top-0 left-0 right-0 h-px line-gold animate-line-expand opacity-100" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Brand statement */}
          <div className="scroll-animate opacity-100 max-w-xs">
            <p className="text-micro text-primary mb-2">Exclusive Distributor · Kuwait</p>
            <p className="text-foreground/80 text-sm leading-relaxed font-light">
              The leader of Window Film Installation in Kuwait, operating under the principle of <em className="text-foreground not-italic font-medium">"Best Quality & Best Service."</em>
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-12">
            {stats?.map((stat, i) => (
              <div
                key={stat?.label}
                className="scroll-animate opacity-100 text-center group cursor-default"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <p className="font-display text-2xl md:text-3xl font-light text-gradient-gold group-hover:scale-110 transition-transform duration-300 inline-block">
                  {stat?.value}
                </p>
                <p className="text-micro text-muted-foreground mt-1">{stat?.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px line-gold animate-line-expand opacity-100" />
    </section>
  );
}