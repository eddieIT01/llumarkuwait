'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const reasons = [
{
  number: '01',
  title: 'Expertise & Experience',
  desc: 'Our team of skilled technicians boasts years of experience in the industry, ensuring meticulous application and optimal results for every vehicle and building.'
},
{
  number: '02',
  title: 'Premium LLumar Products',
  desc: 'We exclusively use the highest quality LLumar paint protection and glass film products, renowned globally for their durability and performance.'
},
{
  number: '03',
  title: 'Quality Time Delivery',
  desc: 'Your satisfaction is our top priority. We provide exceptional customer service from initial consultation to aftercare support — on time, every time.'
}];


export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);

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
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' }
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
    <section id="about" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/3 to-transparent pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Top: asymmetric split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-24">
          {/* Left: Images */}
          <div className="lg:col-span-5 relative scroll-animate opacity-100">
            <div className="relative">
              {/* Main image */}
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-card">
                <AppImage
                  src="https://llumarkuwait.com/wp-content/uploads/2024/10/irx-pro-tint-min-1-e1728241602857.jpg"
                  alt="LLumar Kuwait technician applying premium window tint film to a vehicle"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />

              </div>
              {/* Floating secondary image */}
              <div className="absolute -bottom-8 -right-4 md:-right-8 w-2/5 aspect-square overflow-hidden border-2 border-background bg-card shadow-2xl">
                <AppImage
                  src="https://llumarkuwait.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-17-at-2.02.05-PM.jpeg"
                  alt="LLumar Kuwait showroom interior with professional installation bay"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />

              </div>
              {/* Gold corner accent */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-primary/40" />
            </div>
          </div>

          {/* Right: Text content */}
          <div className="lg:col-span-7 lg:pl-8 flex flex-col justify-between min-h-full">
            <div>
              <div className="scroll-animate opacity-100 flex items-center gap-4 mb-6">
                <span className="w-8 h-px bg-primary" />
                <span className="text-micro text-primary font-semibold">Since 2000 · Kuwait</span>
              </div>
              <h2 className="scroll-animate opacity-100 font-display font-light leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Welcome to<br />
                <span className="text-gradient-gold italic">LLumar Kuwait</span>
              </h2>
              <p className="scroll-animate opacity-100 delay-100 text-foreground/70 text-base md:text-lg font-light leading-relaxed mb-4 border-l-2 border-primary/40 pl-6">
                We are the <strong className="text-foreground font-medium">Exclusive Distributor</strong> of LLumar Brand Films in Kuwait since 2000, with over 25 years of experience in the market.
              </p>
              <p className="scroll-animate opacity-100 delay-200 text-foreground/60 text-sm md:text-base font-light leading-relaxed mb-8">
                We operate under the primary principle of <em className="text-foreground/80 not-italic">"Best Quality & Best Service."</em> The company has grown to become the leader of Window Film Installation in Kuwait for Automotive, Paint Protection, Architectural, Safety & Security, Decorative and Privacy Films. Our goal is incredible service — a weapon against the competition that makes a difference.
              </p>
              {/* Credentials */}
              <div className="scroll-animate opacity-100 delay-300 grid grid-cols-2 gap-4 mb-8">
                {[
                { icon: '🛡', label: 'Protection Film Service' },
                { icon: '⏰', label: '24/7 Services Available' },
                { icon: '🔧', label: 'Great Skilled Technicians' },
                { icon: '🏗', label: 'Architectural Films' }]?.
                map((c) =>
                <div key={c?.label} className="flex items-center gap-3 py-3 px-4 border border-border/50 bg-card/50 rounded-sm hover:border-primary/30 transition-colors duration-300">
                    <span className="text-lg">{c?.icon}</span>
                    <span className="text-xs text-foreground/70 font-medium">{c?.label}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="scroll-animate opacity-100 delay-400 flex items-center gap-6">
              <a href="#booking" className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground text-micro font-semibold tracking-widest hover:bg-accent transition-all duration-300 group min-h-[44px]">
                Book Now
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a href="#contact" className="text-micro text-muted-foreground hover:text-primary transition-colors duration-200 font-medium min-h-[44px] flex items-center">
                Visit Our Showrooms →
              </a>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="border-t border-border/50 pt-16">
          <div className="scroll-animate opacity-100 mb-12 flex items-center gap-4">
            <span className="w-8 h-px bg-primary" />
            <span className="text-micro text-primary font-semibold">Why Choose Us</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons?.map((r, i) =>
            <div
              key={r?.number}
              className="scroll-animate opacity-100 group cursor-default p-6 border border-border/50 bg-card/30 hover:border-primary/30 hover:bg-card/60 transition-all duration-400 rounded-sm"
              style={{ animationDelay: `${i * 100}ms` }}>

                <div className="flex items-start justify-between mb-4">
                  <span className="font-display text-4xl font-light text-primary/20 group-hover:text-primary/40 transition-colors duration-300">{r?.number}</span>
                  <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-display text-lg font-light text-foreground mb-3 group-hover:text-gradient-gold transition-all duration-300">{r?.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{r?.desc}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}