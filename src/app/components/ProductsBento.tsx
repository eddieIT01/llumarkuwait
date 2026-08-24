'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

/*
BENTO GRID AUDIT:
Array has 7 cards: [PPF, AutoTint, Residential, Safety, Decorative, CommercialSolar, CommercialFilms]

grid-cols-3 layout:
Row 1: [col-1-2: PPF cs-2 rs-1] [col-3: AutoTint cs-1 rs-1]
Row 2: [col-1: Residential cs-1 rs-1] [col-2-3: Safety cs-2 rs-1]
Row 3: [col-1: Decorative cs-1 rs-1] [col-2: CommercialSolar cs-1 rs-1] [col-3: CommercialFilms cs-1 rs-1]

Placed 7/7 ✓
No empty cells ✓
*/

const products = [
{
  id: 'ppf',
  title: 'Paint Protection Film',
  tagline: 'Self-healing. Hydrophobic. Built to protect.',
  desc: 'LLumar PPF effectively stands up to flying rocks, bird droppings, salt, sand, and more. Multiple finishes, 2-in-1 products, factory-backed.',
  image: 'https://llumarkuwait.com/wp-content/uploads/2024/10/3.Paint-protection-films-1024x684.jpg',
  alt: 'Car hood with transparent paint protection film being applied, glossy finish in studio lighting',
  badge: 'Most Popular',
  colSpan: 'md:col-span-2',
  aspectRatio: 'aspect-[16/9] md:aspect-[2/1]',
  features: ['10-yr Warranty', 'Self-Healing', 'Hydrophobic']
},
{
  id: 'auto-tint',
  title: 'Automotive Tint',
  tagline: 'Ceramic. Metallized. Dyed. Clear.',
  desc: 'Fight heat, glare, and UV rays. Explore ceramic, metallized, dyed and clear tint options.',
  image: 'https://llumarkuwait.com/wp-content/uploads/2024/10/4.Automotive-window-tint-1024x575.jpg',
  alt: 'Car side window with dark tint film, sleek black vehicle in showroom, warm spotlight',
  badge: null,
  colSpan: 'md:col-span-1',
  aspectRatio: 'aspect-[4/5]',
  features: ['99% UV Block', 'Heat Reject']
},
{
  id: 'residential',
  title: 'Residential Films',
  tagline: 'Make your home a better place.',
  desc: 'Solar control, decorative, and safety film for homes. Installed quickly by professionals.',
  image: 'https://llumarkuwait.com/wp-content/uploads/2024/10/5.Residential-Window-Film-1024x768.jpg',
  alt: 'Modern home interior with large windows and residential window film, bright natural light, reduced glare',
  badge: null,
  colSpan: 'md:col-span-1',
  aspectRatio: 'aspect-square',
  features: ['Solar Control', 'Privacy']
},
{
  id: 'safety',
  title: 'Safety & Security Film',
  tagline: 'Protect what matters.',
  desc: 'Heavy-duty polyester film that bonds to glass with strong adhesives. Defends against break-ins, vandalism, storms, and blasts. Meets GSA, ASTM, and EN356 standards.',
  image: 'https://llumarkuwait.com/wp-content/uploads/2024/10/7.-Safety-Security-Film.jpg',
  alt: 'Security film on commercial glass building facade, shatterproof window in dramatic low-key lighting',
  badge: 'GSA Certified',
  colSpan: 'md:col-span-2',
  aspectRatio: 'aspect-[16/9] md:aspect-[2/1]',
  features: ['Blast Protection', 'Burglary Defense', 'Storm Safety']
},
{
  id: 'decorative',
  title: 'Decorative Films',
  tagline: 'Designer style. Added privacy.',
  desc: 'LLumar iLLusions™ decorative film — frosted looks, nature motifs, playful patterns for any glass surface.',
  image: 'https://llumarkuwait.com/wp-content/uploads/2024/10/6.-Residential-decorative-1024x768.jpg',
  alt: 'Frosted decorative window film on glass door with elegant geometric pattern, soft diffused light',
  badge: null,
  colSpan: 'md:col-span-1',
  aspectRatio: 'aspect-square',
  features: ['Frosted', 'Patterned']
},
{
  id: 'commercial-solar',
  title: 'Commercial Solar Film',
  tagline: 'Elevate your property.',
  desc: 'Engineered to control costs while improving tenant comfort, productivity, and satisfaction.',
  image: 'https://llumarkuwait.com/wp-content/uploads/2024/10/8.-Commercial-Solar-Film-1024x683.jpg',
  alt: 'Commercial office building with reflective solar control window film, glass tower exterior, bright Kuwait sun',
  badge: null,
  colSpan: 'md:col-span-1',
  aspectRatio: 'aspect-square',
  features: ['Energy Saving', 'Glare Control']
},
{
  id: 'commercial-films',
  title: 'Commercial Window Films',
  tagline: 'Transform your commercial space.',
  desc: 'Decorative privacy film for partitions, doors, cabinets, and glass furniture. Budget-friendly vs specialty glass.',
  image: 'https://llumarkuwait.com/wp-content/uploads/2024/10/9.-Commercial-Window-Films-1024x768.jpg',
  alt: 'Modern office space with decorative window film on glass partition, frosted brand logo design',
  badge: null,
  colSpan: 'md:col-span-1',
  aspectRatio: 'aspect-square',
  features: ['Privacy', 'Custom Design']
}];


export default function ProductsBento() {
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
      { threshold: 0.05, rootMargin: '0px 0px -5% 0px' }
    );
    const el = ref.current;
    if (el) {
      el.querySelectorAll('.scroll-animate').forEach((node) => {
        node.classList.add('is-hidden');
        observer.observe(node);
      });
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-secondary/30">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="scroll-animate opacity-100 flex items-center gap-4 mb-4">
              <span className="w-8 h-px bg-primary" />
              <span className="text-micro text-primary font-semibold">Full Product Range</span>
            </div>
            <h2 className="scroll-animate opacity-100 font-display font-light leading-tight" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              Every Film.<br />
              <span className="text-gradient-gold italic">Every Surface.</span>
            </h2>
          </div>
          <a
            href="#booking"
            className="scroll-animate opacity-100 self-start md:self-end inline-flex items-center gap-2 text-micro text-primary border-b border-primary/40 pb-1 hover:border-primary transition-colors duration-200 group min-h-[44px]">

            Book an Installation
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Row 1: col-1-2: PPF cs-2 | col-3: AutoTint cs-1 */}
          {/* PPF - col-span-2 */}
          <div className={`md:col-span-2 scroll-animate opacity-100`} style={{ animationDelay: '0ms' }}>
            <BentoCard product={products[0]} />
          </div>
          {/* AutoTint - col-span-1 */}
          <div className="md:col-span-1 scroll-animate opacity-100" style={{ animationDelay: '80ms' }}>
            <BentoCard product={products[1]} />
          </div>

          {/* Row 2: col-1: Residential cs-1 | col-2-3: Safety cs-2 */}
          {/* Residential - col-span-1 */}
          <div className="md:col-span-1 scroll-animate opacity-100" style={{ animationDelay: '160ms' }}>
            <BentoCard product={products[2]} />
          </div>
          {/* Safety - col-span-2 */}
          <div className="md:col-span-2 scroll-animate opacity-100" style={{ animationDelay: '240ms' }}>
            <BentoCard product={products[3]} />
          </div>

          {/* Row 3: col-1: Decorative | col-2: CommercialSolar | col-3: CommercialFilms */}
          <div className="md:col-span-1 scroll-animate opacity-100" style={{ animationDelay: '320ms' }}>
            <BentoCard product={products[4]} />
          </div>
          <div className="md:col-span-1 scroll-animate opacity-100" style={{ animationDelay: '400ms' }}>
            <BentoCard product={products[5]} />
          </div>
          <div className="md:col-span-1 scroll-animate opacity-100" style={{ animationDelay: '480ms' }}>
            <BentoCard product={products[6]} />
          </div>
        </div>
      </div>
    </section>);

}

function BentoCard({ product }: {product: typeof products[0];}) {
  return (
    <div className="bento-card rounded-sm group relative overflow-hidden h-full min-h-[280px]">
      {/* Image */}
      <div className="absolute inset-0 overflow-hidden">
        <AppImage
          src={product.image}
          alt={product.alt}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw" />

      </div>

      {/* Scrim — dark bg ensures white text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-background/10" />

      {/* Badge */}
      {product.badge &&
      <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold tracking-wide rounded-sm">
          {product.badge}
        </div>
      }

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-6 min-h-[280px]">
        <div className="mt-auto">
          <p className="text-micro text-primary mb-1">{product.tagline}</p>
          <h3 className="font-display text-xl md:text-2xl font-light text-foreground mb-2">{product.title}</h3>
          <p className="text-xs text-foreground/60 font-light leading-relaxed mb-4 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400">
            {product.desc}
          </p>
          <div className="flex flex-wrap gap-2">
            {product.features.map((f) =>
            <span key={f} className="text-xs px-2.5 py-1 bg-foreground/10 border border-foreground/20 text-foreground/70 rounded-sm backdrop-blur-sm">
                {f}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Hover arrow */}
      <div className="absolute top-4 left-4 z-10 w-8 h-8 rounded-full border border-border/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/40 backdrop-blur-sm">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    </div>);

}