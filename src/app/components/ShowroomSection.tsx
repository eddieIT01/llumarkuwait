'use client';
import React, { useState, useRef, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';

const showrooms = [
{
  id: '01',
  label: 'AUTOMOTIVE',
  tagline: 'Heat. Glare. UV. Protection.',
  description: 'Ceramic, metallized, dyed, and clear tint options. Paint protection film in gloss and matte. Engineered for Kuwait\'s extreme climate.',
  image: 'https://llumarkuwait.com/wp-content/uploads/2024/10/4.Automotive-window-tint-1024x575.jpg',
  alt: 'LLumar automotive window tint applied to luxury vehicle in Kuwait showroom',
  href: '/automotive/window-tint',
  cta: 'Explore Automotive',
  accent: '#C9A84C'
},
{
  id: '02',
  label: 'PAINT PROTECTION',
  tagline: 'Your paint. Protected from the road.',
  description: 'Self-healing PPF in 6 variants. From Valor\'s ceramic coating hybrid to Platinum Extra for track racing. Factory-backed 10-year warranty.',
  image: 'https://llumarkuwait.com/wp-content/uploads/2024/10/3.Paint-protection-films-1024x684.jpg',
  alt: 'LLumar paint protection film being applied to vehicle hood showing self-healing properties',
  href: '/automotive/paint-protection-film',
  cta: 'Explore PPF',
  accent: '#C9A84C'
},
{
  id: '03',
  label: 'ARCHITECTURAL',
  tagline: 'Buildings that perform.',
  description: 'Solar control, decorative, and safety films for residential and commercial properties. Energy savings, privacy, and protection in one solution.',
  image: 'https://llumarkuwait.com/wp-content/uploads/2024/10/5.Residential-Window-Film-1024x768.jpg',
  alt: 'LLumar architectural window film installed on commercial building glass facade in Kuwait',
  href: '/architectural/residential-commercial',
  cta: 'Explore Architectural',
  accent: '#C9A84C'
}];


export default function ShowroomSection() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSelect = (idx: number) => {
    if (idx === active || animating) return;
    setAnimating(true);
    setActive(idx);
    setTimeout(() => setAnimating(false), 600);
  };

  const current = showrooms[active];

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col">
      {/* Header */}
      <div
        className="relative z-10 pt-20 pb-8 px-6 md:px-10 max-w-[1400px] mx-auto w-full"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease'
        }}>

        <span className="text-[10px] tracking-[0.5em] text-[#C9A84C] uppercase font-medium">Our Services</span>
        <h2 className="mt-3 text-4xl md:text-5xl font-display font-light text-white tracking-tight">
          Interactive Showroom
        </h2>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left — selector tabs */}
        <div className="lg:w-80 flex flex-row lg:flex-col border-b lg:border-b-0 lg:border-r border-white/10 flex-shrink-0">
          {showrooms.map((item, idx) =>
          <button
            key={item.id}
            onClick={() => handleSelect(idx)}
            className={`flex-1 lg:flex-none text-left px-6 md:px-10 py-6 lg:py-8 border-r lg:border-r-0 lg:border-b border-white/10 last:border-0 transition-all duration-300 group relative overflow-hidden ${active === idx ? 'bg-white/5' : 'hover:bg-white/3'}`}>

              {active === idx &&
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#C9A84C]" />
            }
              <div className={`text-[10px] tracking-[0.4em] font-medium mb-1 transition-colors duration-300 ${active === idx ? 'text-[#C9A84C]' : 'text-white/30'}`}>
                {item.id}
              </div>
              <div className={`text-sm md:text-base font-display font-light tracking-wider transition-colors duration-300 ${active === idx ? 'text-white' : 'text-white/50 group-hover:text-white/70'}`}>
                {item.label}
              </div>
              <div className={`hidden lg:block text-xs text-white/30 mt-1 transition-all duration-300 ${active === idx ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                {item.tagline}
              </div>
            </button>
          )}
        </div>

        {/* Right — full-bleed image + content */}
        <div className="flex-1 relative min-h-[60vh] lg:min-h-0 overflow-hidden">
          {showrooms.map((item, idx) =>
          <div
            key={item.id}
            className="absolute inset-0 transition-all duration-700"
            style={{
              opacity: active === idx ? 1 : 0,
              transform: active === idx ? 'scale(1)' : 'scale(1.03)',
              pointerEvents: active === idx ? 'auto' : 'none'
            }}>

              <AppImage
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover object-center" />

              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          )}

          {/* Content overlay */}
          <div className="absolute inset-0 z-10 flex items-end p-8 md:p-12">
            <div
              key={active}
              className="max-w-lg"
              style={{
                opacity: animating ? 0 : 1,
                transform: animating ? 'translateY(10px)' : 'translateY(0)',
                transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s'
              }}>

              <h3 className="text-3xl md:text-5xl font-display font-light text-white leading-tight tracking-tight">
                {current.tagline}
              </h3>
              <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-sm">
                {current.description}
              </p>
              <a
                href={current.href}
                className="mt-6 inline-flex items-center gap-3 text-xs tracking-widest text-[#C9A84C] uppercase font-medium group">

                {current.cta}
                <span className="w-8 h-px bg-[#C9A84C] group-hover:w-14 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}