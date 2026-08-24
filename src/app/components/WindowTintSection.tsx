'use client';
import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const tintLevels = [
{ id: 'clear', label: 'Clear', opacity: 0, desc: 'No tint — full light transmission. Maximum visibility, zero protection.' },
{ id: 'light', label: 'Light', opacity: 0.25, desc: '20–35% VLT. Subtle tint with meaningful heat and UV reduction.' },
{ id: 'medium', label: 'Medium', opacity: 0.5, desc: '15–20% VLT. Balanced privacy, heat rejection and glare control.' },
{ id: 'dark', label: 'Dark', opacity: 0.75, desc: '5% VLT. Maximum privacy and heat rejection for Kuwait\'s intense sun.' }];


const technologies = [
{
  id: 'ceramic',
  title: 'Ceramic',
  headline: 'Maximum heat rejection without signal interference.',
  desc: 'LLumar ceramic films use nano-ceramic particles to block up to 99% of UV rays and reject significant solar heat — without affecting mobile or GPS signals.',
  benefits: ['Up to 99% UV rejection', 'No signal interference', 'Color-stable over time', 'Scratch-resistant coating']
},
{
  id: 'metallized',
  title: 'Metallized',
  headline: 'High performance with a distinctive finish.',
  desc: 'Metallized films use a thin metallic layer to reflect solar energy, delivering strong heat rejection and a sleek, reflective appearance.',
  benefits: ['Strong solar heat rejection', 'Reflective finish', 'Enhanced privacy', 'Durable construction']
},
{
  id: 'dyed',
  title: 'Dyed',
  headline: 'Reliable protection at an accessible level.',
  desc: 'Dyed films absorb solar energy to reduce glare and heat. An effective solution for privacy and comfort at a practical price point.',
  benefits: ['Glare reduction', 'Privacy enhancement', 'UV protection', 'Non-reflective appearance']
}];

const tintBenefits = [
{ label: 'Heat Rejection', detail: 'Block significant solar heat before it enters the cabin.' },
{ label: 'UV Protection', detail: 'Up to 99% of harmful UV rays blocked — protecting skin and interior.' },
{ label: 'Glare Reduction', detail: 'Reduce eye strain on Kuwait\'s sun-intense roads.' },
{ label: 'Comfort', detail: 'A cooler, more comfortable drive in every condition.' },
{ label: 'Privacy', detail: 'Controlled visibility — without compromising outward clarity.' }];



export default function WindowTintSection() {
  const [activeTint, setActiveTint] = useState(1);
  const [activeTech, setActiveTech] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const benefitRefs = useRef<(HTMLDivElement | null)[]>([]);
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

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let gsapCtx: {revert: () => void;} | null = null;

    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      gsapCtx = gsap.context(() => {
        const mm = gsap.matchMedia();

        // Desktop: pinned sequence
        mm.add('(min-width: 1024px)', () => {
          if (!pinnedRef.current || !overlayRef.current) return;

          // Set initial states
          gsap.set(overlayRef.current, { opacity: 0 });
          benefitRefs.current.forEach((el) => {
            if (el) gsap.set(el, { opacity: 0, x: 30 });
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: pinnedRef.current,
              start: 'top top',
              end: '+=400%',
              scrub: 1,
              pin: true,
              anticipatePin: 1
            }
          });

          // Phase 1→2: overlay fades in (clear to tinted)
          tl.to(overlayRef.current, { opacity: 0.72, duration: 2, ease: 'power1.inOut' }, 0);

          // Phase 3: benefits reveal one by one
          benefitRefs.current.forEach((el, i) => {
            if (el) {
              tl.to(el, { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }, 1.5 + i * 0.6);
            }
          });

          // Phase 4: slight image scale for depth
          tl.to('.wt-vehicle-img', { scale: 1.04, duration: 4, ease: 'none' }, 0);
        });

        // Mobile: simplified, no pin
        mm.add('(max-width: 1023px)', () => {
          if (!overlayRef.current) return;
          gsap.set(overlayRef.current, { opacity: 0 });
          benefitRefs.current.forEach((el) => {
            if (el) gsap.set(el, { opacity: 0, y: 16 });
          });

          ScrollTrigger.create({
            trigger: pinnedRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 1,
            onUpdate: (self) => {
              if (overlayRef.current) {
                gsap.set(overlayRef.current, { opacity: Math.min(self.progress * 1.2, 0.72) });
              }
            }
          });

          benefitRefs.current.forEach((el, i) => {
            if (el) {
              ScrollTrigger.create({
                trigger: el,
                start: 'top 85%',
                onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
              });
            }
          });
        });
      }, sectionRef);
    };

    initGSAP();
    return () => {gsapCtx?.revert();};
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F5F0EA]">
      {/* ── Pinned cinematic sequence ── */}
      <div ref={pinnedRef} className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#0A0A0A]">
        {/* Vehicle image */}
        <div className="wt-vehicle-img absolute inset-0 will-change-transform">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1d5c415f9-1771910231546.png"
            alt="LLumar automotive window tint visualization showing the film being applied"
            fill
            className="object-cover object-center"
            priority={false} />

        </div>
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/10" />
        {/* Tint overlay — animated from clear to dark */}
        <div
          ref={overlayRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(10,10,10,0.85) 0%, rgba(20,20,20,0.75) 50%, rgba(10,10,10,0.65) 100%)',
            opacity: 0
          }} />

        {/* Section label */}
        <div className="absolute top-10 left-6 lg:left-10 z-10">
          <span className="text-[10px] tracking-[0.45em] text-[#CC0000] uppercase font-medium">Automotive Window Tint</span>
        </div>
        {/* Headline */}
        <div className="absolute bottom-0 left-0 right-0 z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-16 lg:pb-20">
          <h2 className="font-display font-light text-white leading-tight mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}>
            The Right Film<br />
            <span className="italic text-white/50">for Every Vehicle</span>
          </h2>
          {/* Benefits — revealed sequentially */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            {tintBenefits.map((b, i) =>
            <div
              key={b.label}
              ref={(el) => {benefitRefs.current[i] = el;}}
              className="flex flex-col gap-1"
              style={{ opacity: 0 }}>

                <span className="text-[9px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold">{b.label}</span>
                <span className="text-[12px] text-white/60 leading-snug max-w-[160px]">{b.detail}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Existing interactive content ── */}
      <div className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Header */}
          <div
            ref={(el) => {revealRefs.current[0] = el;}}
            className="reveal-up mb-16">
            <span className="section-label">Tint Technology</span>
            <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Choose Your<br />
              <span className="italic text-[#6B6560]">Level of Protection</span>
            </h2>
          </div>

          {/* Interactive tint visualizer */}
          <div
            ref={(el) => {revealRefs.current[1] = el;}}
            className="reveal-up stagger-2 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#E0DBD5] bg-white">
              {/* Visual */}
              <div className="relative h-72 lg:h-auto overflow-hidden bg-[#1A1A1A]">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_131b70dd0-1787540513236.png"
                  alt="LLumar automotive window tint visualization showing different tint levels"
                  fill
                  className="object-cover" />
                {/* Tint overlay */}
                <div
                  className="absolute inset-0 bg-black transition-opacity duration-600"
                  style={{ opacity: tintLevels[activeTint].opacity }} />
                {/* Label */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5">
                  <span className="text-[10px] tracking-[0.3em] text-white uppercase">{tintLevels[activeTint].label} Tint</span>
                </div>
              </div>
              {/* Controls */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <p className="text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-4">Interactive Tint Viewer</p>
                <p className="text-sm text-[#6B6560] leading-relaxed mb-8">
                  {tintLevels[activeTint].desc}
                </p>
                <div className="flex flex-col gap-2">
                  {tintLevels.map((level, i) =>
                  <button
                    key={level.id}
                    onClick={() => setActiveTint(i)}
                    className={`flex items-center gap-4 p-4 border transition-all duration-300 text-left ${activeTint === i ? 'border-[#CC0000] bg-[#CC0000]/5' : 'border-[#E0DBD5] hover:border-[#CC0000]/40'}`}>
                      <div
                      className="w-8 h-8 flex-shrink-0 border border-[#E0DBD5]"
                      style={{ background: `rgba(0,0,0,${level.opacity})` }} />
                      <div>
                        <span className={`text-sm font-medium block ${activeTint === i ? 'text-[#CC0000]' : 'text-[#1A1A1A]'}`}>{level.label}</span>
                        <span className="text-[11px] text-[#9A9590]">{i === 0 ? 'No tint' : i === 1 ? '20–35% VLT' : i === 2 ? '15–20% VLT' : '5% VLT'}</span>
                      </div>
                      {activeTint === i &&
                    <span className="ml-auto w-1.5 h-1.5 bg-[#CC0000] rounded-full" />
                    }
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Technology tabs */}
          <div
            ref={(el) => {revealRefs.current[2] = el;}}
            className="reveal-up stagger-3">
            <div className="flex gap-0 border-b border-[#E0DBD5] mb-10">
              {technologies.map((tech, i) =>
              <button
                key={tech.id}
                onClick={() => setActiveTech(i)}
                className={`px-6 py-4 text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-200 border-b-2 -mb-px ${activeTech === i ? 'border-[#CC0000] text-[#CC0000]' : 'border-transparent text-[#9A9590] hover:text-[#1A1A1A]'}`}>
                  {tech.title}
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-display font-light text-[#1A1A1A] mb-4">{technologies[activeTech].headline}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed mb-8">{technologies[activeTech].desc}</p>
                <div className="grid grid-cols-2 gap-3">
                  {technologies[activeTech].benefits.map((benefit) =>
                  <div key={benefit} className="flex items-center gap-2.5">
                      <span className="w-1 h-1 bg-[#CC0000] rounded-full flex-shrink-0" />
                      <span className="text-sm text-[#1A1A1A]">{benefit}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-[#1A1A1A] p-8 lg:p-10">
                <p className="text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-4">Key Benefits</p>
                <div className="flex flex-col gap-4">
                  {[
                  { label: 'Heat Rejection', value: 'Up to 60%' },
                  { label: 'UV Protection', value: 'Up to 99%' },
                  { label: 'Glare Reduction', value: 'Significant' },
                  { label: 'Interior Protection', value: 'Fading prevention' }].
                  map((item) =>
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                      <span className="text-sm text-white/50">{item.label}</span>
                      <span className="text-sm font-medium text-white">{item.value}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}