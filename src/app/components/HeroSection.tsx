'use client';
import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const slides = [
{
  image: 'https://llumarkuwait.com/wp-content/uploads/2024/10/automotive-films.jpg',
  eyebrow: 'Est. 2000 · Exclusive Distributor',
  headline: 'Protection Without',
  headlineItalic: 'Compromise.',
  sub: 'Rule the road with Kuwait\'s most trusted automotive tint and paint protection.',
  cta: 'Explore Automotive',
  ctaHref: '#services',
  tag: 'Automotive Films'
},
{
  image: 'https://llumarkuwait.com/wp-content/uploads/2024/10/ppf.jpg',
  eyebrow: 'Paint Protection Film',
  headline: 'Self-Healing.',
  headlineItalic: 'Built to Last.',
  sub: 'LLumar PPF stands up to rocks, bird droppings, salt, sand — and Kuwait\'s extreme heat.',
  cta: 'Explore PPF',
  ctaHref: '#services',
  tag: 'PPF'
},
{
  image: 'https://llumarkuwait.com/wp-content/uploads/2024/10/architectural-films.jpg',
  eyebrow: 'Architectural Films',
  headline: 'Comfort Starts',
  headlineItalic: 'at the Glass.',
  sub: 'Energy-saving solar control film for homes and commercial buildings across Kuwait.',
  cta: 'Explore Architectural',
  ctaHref: '#services',
  tag: 'Architectural'
},
{
  image: 'https://llumarkuwait.com/wp-content/uploads/2024/10/front-wind-shield.jpg',
  eyebrow: 'Windshield Protection',
  headline: 'Clear Vision.',
  headlineItalic: 'Total Defense.',
  sub: 'Windshield protection film that guards against cracks, chips, and UV without distortion.',
  cta: 'Learn More',
  ctaHref: '#services',
  tag: 'Windshield Film'
}];


export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const heroRef = useRef<HTMLElement>(null);

  const goTo = (idx: number) => {
    if (transitioning || idx === current) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(idx);
      setTransitioning(false);
    }, 400);
  };

  const next = () => goTo((current + 1) % slides.length);

  useEffect(() => {
    intervalRef.current = setInterval(next, 6000);
    return () => {if (intervalRef.current) clearInterval(intervalRef.current);};
  }, [current, transitioning]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5
      });
    };
    const el = heroRef.current;
    el?.addEventListener('mousemove', handleMouse);
    return () => el?.removeEventListener('mousemove', handleMouse);
  }, []);

  const slide = slides[current];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center"
      aria-label="Hero section">

      {/* Background images — all rendered, only active is visible */}
      {slides.map((s, i) =>
      <div
        key={s.image}
        className="absolute inset-0 transition-opacity duration-700 ease-in-out"
        style={{ opacity: i === current ? 1 : 0 }}>

          <AppImage
          src={s.image}
          alt={`LLumar Kuwait - ${s.tag} - dark automotive photography`}
          fill
          className="object-cover object-center"
          priority={i === 0}
          sizes="100vw" />

          {/* Parallax layer on active slide */}
          {i === current &&
        <div
          className="absolute inset-0"
          style={{
            transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 8}px) scale(1.04)`,
            transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)'
          }} />

        }
        </div>
      )}

      {/* Gradient scrims */}
      <div className="absolute inset-0 hero-scrim hidden md:block" />
      <div className="absolute inset-0 hero-scrim-mobile md:hidden" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
      {/* Noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-10 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            key={`eyebrow-${current}`}
            className="animate-reveal-fade opacity-100 mb-6 flex items-center gap-3">

            <span className="w-8 h-px bg-primary" />
            <span className="text-micro text-primary font-semibold">{slide.eyebrow}</span>
          </div>

          {/* Headline */}
          <h1
            key={`headline-${current}`}
            className="font-display animate-reveal-up opacity-100 mb-2 leading-none"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.02em' }}>

            <span className="text-foreground font-light block">{slide.headline}</span>
            <span className="text-gradient-gold italic block">{slide.headlineItalic}</span>
          </h1>

          {/* Sub */}
          <p
            key={`sub-${current}`}
            className="animate-reveal-up delay-200 opacity-100 text-foreground/70 text-base md:text-lg font-light leading-relaxed max-w-xl mt-6 mb-10">

            {slide.sub}
          </p>

          {/* CTAs */}
          <div
            key={`cta-${current}`}
            className="animate-reveal-up delay-300 opacity-100 flex flex-col sm:flex-row gap-4">

            <a
              href={slide.ctaHref}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-micro font-semibold tracking-widest hover:bg-accent transition-all duration-300 hover:-translate-y-0.5 group min-h-[48px]">

              {slide.cta}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="#booking"
              className="inline-flex items-center gap-3 px-8 py-4 border border-foreground/30 text-foreground text-micro font-semibold tracking-widest hover:border-primary hover:text-primary transition-all duration-300 min-h-[48px]">

              Book Installation
            </a>
          </div>
        </div>

        {/* Floating stat card */}
        <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 animate-float-slow">
          <div className="bg-card/80 backdrop-blur-xl border border-border/60 rounded-2xl p-6 w-56 card-glow">
            <div className="flex items-center justify-between mb-4">
              <span className="text-micro text-muted-foreground">Kuwait&apos;s #1</span>
              <div className="flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-3xl font-display font-light text-foreground">25+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </div>
              <div className="h-px bg-border/50" />
              <div>
                <p className="text-xl font-display font-light text-primary">Since 2000</p>
                <p className="text-xs text-muted-foreground">Exclusive LLumar Distributor</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, i) =>
        <button
          key={i}
          onClick={() => goTo(i)}
          aria-label={`Go to slide ${i + 1}`}
          className={`transition-all duration-400 rounded-full min-h-[44px] min-w-[44px] flex items-center justify-center`}>

            <span className={`block rounded-full transition-all duration-400 ${i === current ? 'w-8 h-1 bg-primary' : 'w-2 h-1 bg-foreground/30'}`} />
          </button>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-10 z-30 hidden md:flex flex-col items-center gap-2">
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
        <span className="text-micro text-muted-foreground" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 left-10 z-30 hidden md:block">
        <span className="text-micro text-muted-foreground">
          <span className="text-foreground font-semibold">{String(current + 1).padStart(2, '0')}</span>
          {' / '}
          {String(slides.length).padStart(2, '0')}
        </span>
      </div>
    </section>);

}