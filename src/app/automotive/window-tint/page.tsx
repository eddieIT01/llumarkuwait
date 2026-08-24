import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Automotive Window Tint — LLumar Kuwait',
  description: 'LLumar® automotive window tint in Kuwait. Ceramic, metallized, dyed, and clear options. Fight heat, glare, and UV rays.'
};

const products = [
{
  name: 'Ceramic Auto Tint',
  tagline: 'Maximum Heat Rejection',
  description: 'Powerful nano-ceramic design that targets heat-generating infrared rays to help cool down your car more quickly.',
  features: ['Nano-ceramic technology', 'Targets infrared rays', 'No signal interference', 'Maximum heat rejection'],
  badge: 'BEST'
},
{
  name: 'Metallized Auto Tint',
  tagline: 'Reflective Performance',
  description: 'Features a metallized layer to fight heat, glare, and harmful UV rays. Gives your windows a slightly shiny, reflective look.',
  features: ['Metallized layer', 'Fights heat & glare', 'UV ray protection', 'Reflective finish'],
  badge: 'POPULAR'
},
{
  name: 'Dyed Auto Tint',
  tagline: 'Color-Stable Looks',
  description: 'Made for great looks that last, featuring integrated, color-stable charcoal dye. Most other tint has dye applied only to the surface.',
  features: ['Integrated charcoal dye', 'Color-stable formula', 'Resists discoloration', 'Clean aesthetic'],
  badge: 'STYLE'
},
{
  name: 'Clear Auto Film',
  tagline: 'Invisible Protection',
  description: 'LLumar clear auto film boosts UV protection to safer levels and helps you stay cooler, without darkening your windows.',
  features: ['Virtually invisible', 'UV protection boost', 'Keeps cabin cooler', 'Works on all glass shades'],
  badge: 'CLEAR'
}];


const benefits = [
{ icon: '🌡️', title: 'Heat Rejection', desc: 'Significantly reduces cabin temperature, easing the load on your AC.' },
{ icon: '☀️', title: 'UV Protection', desc: 'Blocks up to 99% of harmful UV rays that cause skin damage and interior fading.' },
{ icon: '👁️', title: 'Glare Control', desc: 'Reduces eye-irritating glare from the sun and headlights.' },
{ icon: '🔒', title: 'Privacy', desc: 'Adds a layer of privacy without compromising outward visibility.' }];


export default function WindowTintPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[70vh] flex items-end overflow-hidden">
        <AppImage
          src="https://llumarkuwait.com/wp-content/uploads/2024/10/4.Automotive-window-tint-1024x575.jpg"
          alt="LLumar automotive window tint applied to luxury vehicle showing heat rejection and privacy"
          fill
          className="object-cover object-center opacity-50"
          priority />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pb-16 w-full">
          <nav className="flex items-center gap-2 text-xs text-white/30 mb-6 tracking-wider">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/50">Automotive</span>
            <span>/</span>
            <span className="text-[#C9A84C]">Window Tint</span>
          </nav>
          <span className="text-[10px] tracking-[0.5em] text-[#C9A84C] uppercase font-medium">Automotive</span>
          <h1 className="mt-3 text-5xl md:text-7xl font-display font-light text-white leading-none tracking-tight">
            Window<br />
            <span className="italic text-white/60">Tint</span>
          </h1>
          <p className="mt-4 text-sm text-white/50 max-w-md">
            More than just a sleek look. LLumar® automotive window tint fights heat, glare, and UV rays — engineered for Kuwait's extreme climate.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
          {benefits.map((b) =>
          <div key={b.title} className="bg-black p-8">
              <span className="text-3xl block mb-4">{b.icon}</span>
              <h3 className="text-sm font-medium text-white mb-2 tracking-wide">{b.title}</h3>
              <p className="text-xs text-white/40 leading-relaxed">{b.desc}</p>
            </div>
          )}
        </div>
      </section>

      {/* Products */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-24">
        <h2 className="text-3xl font-display font-light text-white mb-12 tracking-tight">
          Tint Options
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {products.map((product) =>
          <div key={product.name} className="bg-black p-8 group hover:bg-white/3 transition-colors duration-300 relative">
              <div className="absolute top-6 right-6">
                <span className="text-[9px] tracking-widest text-[#C9A84C] border border-[#C9A84C]/30 px-2 py-1 uppercase">{product.badge}</span>
              </div>
              <h3 className="text-xl font-display font-light text-white mb-1">{product.name}</h3>
              <p className="text-xs text-[#C9A84C] tracking-wider mb-4">{product.tagline}</p>
              <p className="text-sm text-white/40 leading-relaxed mb-6">{product.description}</p>
              <ul className="flex flex-col gap-2">
                {product.features.map((feat) =>
              <li key={feat} className="flex items-center gap-2 text-xs text-white/40">
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
          <h2 className="text-3xl md:text-4xl font-display font-light text-white mb-4">Ready to tint your vehicle?</h2>
          <p className="text-sm text-white/40 mb-8">Visit either of our Kuwait showrooms for a professional consultation.</p>
          <Link href="/#booking" className="inline-flex items-center gap-3 bg-[#C9A84C] text-black text-xs font-semibold tracking-widest uppercase px-8 py-4 hover:bg-[#E8C96A] transition-colors duration-300">
            Book Installation
          </Link>
        </div>
      </section>

      <Footer />
    </main>);

}