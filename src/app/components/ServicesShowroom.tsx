'use client';
import React, { useState, useRef, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';

const services = [
{
  number: '01',
  category: 'AUTOMOTIVE',
  tagline: 'Heat. Glare. UV. Protection.',
  description: 'LLumar automotive window tint and paint protection film — engineered to fight Kuwait\'s extreme heat, block harmful UV rays, and keep your car looking pristine from every angle.',
  cta: 'Explore Automotive',
  image: 'https://llumarkuwait.com/wp-content/uploads/2024/10/automotive-films.jpg',
  alt: 'Dark luxury car on black background with dramatic side lighting, automotive window tint showcase',
  features: ['Ceramic Tint', 'Metallized Tint', 'PPF', 'Windshield Film'],
  accentText: 'Block up to 99% UV rays'
},
{
  number: '02',
  category: 'PAINT PROTECTION',
  tagline: 'Your paint. Protected from the road.',
  description: 'Self-healing, hydrophobic PPF that stands up to flying rocks, bird droppings, salt, sand, and more. Factory-backed with up to 10-year warranty. Available in gloss and matte finishes.',
  cta: 'Explore PPF',
  image: 'https://llumarkuwait.com/wp-content/uploads/2024/10/3.Paint-protection-films-1024x684.jpg',
  alt: 'Close-up of car paint surface with protective film layer being applied, deep gloss finish',
  features: ['Valor PPF', 'Platinum Gloss', 'Platinum Matte', 'Select Black'],
  accentText: 'Self-healing with heat'
},
{
  number: '03',
  category: 'ARCHITECTURAL',
  tagline: 'Spaces that breathe easier.',
  description: 'From residential homes to commercial towers — LLumar architectural films control heat, reduce glare, block UV, and enhance privacy. Energy savings you\'ll feel from day one.',
  cta: 'Explore Architectural',
  image: 'https://llumarkuwait.com/wp-content/uploads/2024/10/architectural-films.jpg',
  alt: 'Modern glass building facade with architectural window film, cool blue-grey tones, Kuwait skyline',
  features: ['Solar Control', 'Decorative', 'Safety & Security', 'Commercial'],
  accentText: 'Cut cooling costs by 30%'
}];


export default function ServicesShowroom() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

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
      { threshold: 0.05, rootMargin: '0px 0px -5% 0px' }
    );
    const el = sectionRef?.current;
    if (el) {
      el?.querySelectorAll('.scroll-animate')?.forEach((node) => {
        node?.classList?.add('is-hidden');
        observer?.observe(node);
      });
    }
    return () => observer?.disconnect();
  }, []);

  const displayIdx = hovered !== null ? hovered : active;
  const displayService = services?.[displayIdx];

  return (
    <section id="services" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Section label */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-16">
        <div className="scroll-animate opacity-100 flex items-center gap-4 mb-4">
          <span className="w-8 h-px bg-primary" />
          <span className="text-micro text-primary font-semibold">What We Do</span>
        </div>
        <h2 className="scroll-animate opacity-100 font-display text-foreground font-light leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
          Services Engineered<br />
          <span className="text-gradient-gold italic">for Kuwait&apos;s Climate</span>
        </h2>
      </div>
      {/* Main showroom grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 min-h-[600px]">

          {/* Left: Service tiles */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {services?.map((s, i) =>
            <button
              key={s?.number}
              onClick={() => setActive(i)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`group text-left p-6 md:p-8 border rounded-sm transition-all duration-400 scroll-animate opacity-100 min-h-[44px] ${
              (hovered !== null ? hovered : active) === i ?
              'border-primary/50 bg-card card-glow-hover' : 'border-border/50 bg-card/50 hover:border-border'}`
              }
              style={{ animationDelay: `${i * 100}ms` }}
              aria-expanded={(hovered !== null ? hovered : active) === i}>

                <div className="flex items-start justify-between mb-3">
                  <span className="text-micro text-muted-foreground">{s?.number}</span>
                  <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  className={`transition-all duration-300 ${(hovered !== null ? hovered : active) === i ? 'text-primary translate-x-1' : 'text-muted-foreground/40'}`}>

                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
                <h3 className={`font-display text-xl font-light mb-1 transition-colors duration-300 ${(hovered !== null ? hovered : active) === i ? 'text-foreground' : 'text-foreground/70'}`}>
                  {s?.category}
                </h3>
                <p className="text-xs text-muted-foreground font-light">{s?.tagline}</p>

                {/* Expanded content */}
                <div className={`overflow-hidden transition-all duration-500 ${(hovered !== null ? hovered : active) === i ? 'max-h-48 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-4 font-light">{s?.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {s?.features?.map((f) =>
                  <span key={f} className="text-xs px-3 py-1 border border-primary/30 text-primary/80 rounded-sm">{f}</span>
                  )}
                  </div>
                </div>
              </button>
            )}

            {/* CTA */}
            <a
              href="#booking"
              className="scroll-animate opacity-100 delay-300 mt-2 flex items-center justify-center gap-3 py-4 bg-primary text-primary-foreground text-micro font-semibold tracking-widest hover:bg-accent transition-all duration-300 hover:-translate-y-0.5 group min-h-[48px]">

              Book Your Installation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right: Visual panel */}
          <div className="lg:col-span-7 relative rounded-sm overflow-hidden min-h-[400px] lg:min-h-0 bg-card scroll-animate opacity-100 delay-200">
            {/* Background images */}
            {services?.map((s, i) =>
            <div
              key={s?.image}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: i === displayIdx ? 1 : 0 }}>

                <AppImage
                src={s?.image}
                alt={s?.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw" />

              </div>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
              <div key={displayIdx} className="animate-reveal-up opacity-100">
                <p className="text-micro text-primary mb-2">{displayService?.number} — {displayService?.category}</p>
                <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-3">
                  {displayService?.tagline}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm text-primary font-medium">{displayService?.accentText}</span>
                </div>
              </div>
            </div>

            {/* Corner accent */}
            <div className="absolute top-6 right-6 z-10">
              <div className="bg-background/60 backdrop-blur-md border border-border/60 rounded-sm px-4 py-2">
                <span className="text-micro text-muted-foreground">{displayService?.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}