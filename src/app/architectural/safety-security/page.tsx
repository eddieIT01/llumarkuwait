import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Safety & Security Film — LLumar Kuwait',
  description: 'LLumar® safety and security window film in Kuwait. Protection against break-ins, blasts, storms, and vandalism. Certified to international standards.'
};

const products = [
{
  name: 'Clear Safety & Security Film',
  description: 'Physically strong and designed to add protection, this virtually invisible film helps glass stand up to a variety of threats.',
  features: ['For display windows, doors and more', 'Helps prevent break-ins and burglary', 'Virtually invisible', 'Heavy-duty polyester construction'],
  icon: '🔍'
},
{
  name: 'Solar Safety & Security Film',
  description: 'Film that combines solar control with safety and security features, upgrading existing glass with multiple types of protection.',
  features: ['Tinted protection from break-ins', 'Controls heat, glare, and UV rays', 'Dual-purpose performance', 'Energy-saving benefits'],
  icon: '☀️'
},
{
  name: 'Anti-Graffiti Film',
  description: 'Sacrificial film resistant to spray paint, scratching and chemicals, formulated with adhesives for easy removal and replacement.',
  features: ['Virtually invisible vandalism protection', 'Good for high-traffic wear and tear', 'Use on glass and other hard surfaces', 'Easy removal and replacement'],
  icon: '🛡️'
}];


const certifications = ['ANSI Z97.1', 'CPSC 16 CFR 1201', 'EN12600', 'GSA TS01', 'ISO 16933', 'ASTM F1642', 'ASTM F2912', 'EN356 P2A'];

const benefits = [
{ title: 'Burglary Defense', desc: 'Safety and security film makes glass harder to penetrate so intruders will likely move on, instead of forcing their way in.' },
{ title: 'Holding Power', desc: 'Even when glass breaks, the film holds the shards together, preventing dangerous scatter.' },
{ title: 'Minimized Damage', desc: 'Reduces the risk of injury and property damage from broken glass in accidents or attacks.' },
{ title: 'Storm Safety', desc: 'Protects against windborne debris and extreme weather events.' },
{ title: 'Consistent Comfort', desc: 'Solar safety films also control heat and glare for year-round comfort.' },
{ title: 'UV Protection', desc: 'Blocks harmful UV rays that cause fading of furnishings and skin damage.' }];


export default function SafetySecurityPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[70vh] flex items-end overflow-hidden">
        <AppImage
          src="https://llumarkuwait.com/wp-content/uploads/2024/10/7.-Safety-Security-Film.jpg"
          alt="LLumar safety and security film holding shattered glass together after impact"
          fill
          className="object-cover object-center opacity-45"
          priority />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pb-16 w-full">
          <nav className="flex items-center gap-2 text-xs text-white/30 mb-6 tracking-wider">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/50">Architectural</span>
            <span>/</span>
            <span className="text-[#C9A84C]">Safety & Security</span>
          </nav>
          <span className="text-[10px] tracking-[0.5em] text-[#C9A84C] uppercase font-medium">Architectural</span>
          <h1 className="mt-3 text-5xl md:text-7xl font-display font-light text-white leading-none tracking-tight">
            Safety &<br />
            <span className="italic text-white/60">Security</span>
          </h1>
          <p className="mt-4 text-sm text-white/50 max-w-md">
            Defend what's most valuable against break-ins, vandalism, accidents, storms, seismic tremors and blasts.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-lg text-white/70 leading-relaxed font-light">
              Safety and security film is engineered for strength, using a heavy-duty polyester film that bonds to glass with strong adhesives. Once installed, this film provides low-profile defense for windows, glass doors, bathroom mirrors, elevator finishes and other vulnerable hard surfaces.
            </p>
            <p className="mt-4 text-sm text-white/40 leading-relaxed">
              Suitable for office buildings, schools, public spaces and jewelry or electronic store display windows. Our film products are extensively tested for optimal performance, meeting numerous certifications and test standards worldwide.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-widest text-white/30 uppercase mb-4">International Certifications</p>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) =>
              <span key={cert} className="text-xs text-white/40 border border-white/10 px-3 py-2 tracking-wider">{cert}</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-20">
        <h2 className="text-2xl font-display font-light text-white mb-8">Why Safety Film?</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5">
          {benefits.map((b) =>
          <div key={b.title} className="bg-black p-6 hover:bg-white/3 transition-colors duration-300">
              <h3 className="text-sm font-medium text-white mb-2">{b.title}</h3>
              <p className="text-xs text-white/35 leading-relaxed">{b.desc}</p>
            </div>
          )}
        </div>
      </section>

      {/* Products */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-24 border-t border-white/10 pt-20">
        <h2 className="text-3xl font-display font-light text-white mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {products.map((p) =>
          <div key={p.name} className="bg-black p-8 hover:bg-white/3 transition-colors duration-300">
              <span className="text-3xl block mb-5">{p.icon}</span>
              <h3 className="text-xl font-display font-light text-white mb-3">{p.name}</h3>
              <p className="text-sm text-white/40 leading-relaxed mb-6">{p.description}</p>
              <ul className="flex flex-col gap-2">
                {p.features.map((feat) =>
              <li key={feat} className="flex items-center gap-2 text-xs text-white/35">
                    <span className="w-1 h-1 bg-[#C9A84C] rounded-full flex-shrink-0" />
                    {feat}
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl font-display font-light text-white mb-4">Protect what matters</h2>
          <p className="text-sm text-white/40 mb-8">Get a professional safety film assessment at our Kuwait showrooms.</p>
          <Link href="/#booking" className="inline-flex items-center gap-3 bg-[#C9A84C] text-black text-xs font-semibold tracking-widest uppercase px-8 py-4 hover:bg-[#E8C96A] transition-colors duration-300">
            Book Assessment
          </Link>
        </div>
      </section>

      <Footer />
    </main>);

}