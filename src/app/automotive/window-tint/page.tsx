import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Automotive Window Tint — LLumar Kuwait',
  description: 'Premium LLumar automotive window tint in Kuwait. Ceramic, metallized and dyed films for heat rejection, UV protection and privacy.'
};

const tintProducts = [
{
  id: 'ceramic',
  name: 'Ceramic Tint',
  tagline: 'Maximum performance. Zero compromise.',
  desc: 'LLumar ceramic films use nano-ceramic technology to block up to 99% of UV rays and reject significant solar heat — without interfering with mobile, GPS or toll signals. The premium choice for Kuwait\'s extreme climate.',
  benefits: ['Up to 99% UV rejection', 'Significant heat rejection', 'No signal interference', 'Color-stable over time', 'Scratch-resistant coating', 'Optical clarity'],
  href: '/automotive/ceramic-tint'
},
{
  id: 'metallized',
  name: 'Metallized Tint',
  tagline: 'High performance with a distinctive finish.',
  desc: 'Metallized films use a thin metallic layer to reflect solar energy, delivering strong heat rejection and a sleek, reflective appearance. A proven technology with excellent durability.',
  benefits: ['Strong solar heat rejection', 'Reflective finish', 'Enhanced privacy', 'Durable construction', 'UV protection', 'Glare reduction'],
  href: '/automotive/window-tint'
},
{
  id: 'dyed',
  name: 'Dyed Tint',
  tagline: 'Reliable protection at an accessible level.',
  desc: 'Dyed films absorb solar energy to reduce glare and heat. An effective solution for privacy and comfort at a practical price point — professionally installed to LLumar standards.',
  benefits: ['Glare reduction', 'Privacy enhancement', 'UV protection', 'Non-reflective appearance', 'Cost-effective', 'Professional installation'],
  href: '/automotive/window-tint'
}];


const benefits = [
{ title: 'Heat Rejection', desc: 'Reduce interior temperatures significantly — critical in Kuwait\'s extreme summer heat.' },
{ title: 'UV Protection', desc: 'Block up to 99% of harmful UV rays that cause skin damage and interior fading.' },
{ title: 'Glare Reduction', desc: 'Reduce eye strain and improve driving comfort in bright conditions.' },
{ title: 'Privacy', desc: 'Control visibility into your vehicle without compromising outward visibility.' },
{ title: 'Interior Protection', desc: 'Prevent dashboard cracking, seat fading and interior deterioration.' },
{ title: 'Comfort', desc: 'A cooler, more comfortable cabin for every journey.' }];


export default function WindowTintPage() {
  return (
    <main className="bg-[#FAFAF8] text-[#111111] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[65vh] min-h-[500px] overflow-hidden bg-[#1A1A1A] flex items-end">
        <AppImage
          src="https://llumar.com/content/dam/eastman/performance-films/llumar/imagery/automotive/llumar-automotive-tint-hero.jpg"
          alt="LLumar premium automotive window tint on a luxury vehicle"
          fill
          className="object-cover opacity-60"
          priority />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-16 w-full">
          <span className="section-label" style={{ color: '#CC0000' }}>Automotive</span>
          <h1 className="mt-3 font-display font-light text-white leading-tight" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            Window Tint
          </h1>
          <p className="mt-4 text-base text-white/55 max-w-[480px] leading-relaxed">
            Engineered comfort for every drive. LLumar automotive films deliver heat rejection, UV protection and privacy — professionally installed in Kuwait.
          </p>
        </div>
      </section>

      {/* Benefits overview */}
      <section className="bg-[#FAFAF8] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <span className="section-label">Why Tint?</span>
              <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Six Reasons<br />
                <span className="italic text-[#6B6560]">to Tint Your Vehicle</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E0DBD5]">
            {benefits.map((b, i) =>
            <div key={b.title} className="bg-[#FAFAF8] p-8 hover:bg-white transition-colors duration-300">
                <div className="text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-3">0{i + 1}</div>
                <h3 className="text-lg font-display font-light text-[#1A1A1A] mb-3">{b.title}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{b.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-[#F5F0EA] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <span className="section-label">Film Technologies</span>
          <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-14" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Choose Your<br />
            <span className="italic text-[#6B6560]">Technology</span>
          </h2>
          <div className="flex flex-col gap-px bg-[#E0DBD5]">
            {tintProducts.map((product, i) =>
            <div key={product.id} className="bg-[#F5F0EA] p-8 lg:p-10 hover:bg-white transition-colors duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-8 items-start">
                  <div>
                    <div className="text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-2">0{i + 1}</div>
                    <h3 className="text-2xl font-display font-light text-[#1A1A1A]">{product.name}</h3>
                    <p className="text-sm font-medium text-[#1A1A1A] mt-1">{product.tagline}</p>
                  </div>
                  <p className="text-sm text-[#6B6560] leading-relaxed">{product.desc}</p>
                  <div>
                    <div className="grid grid-cols-1 gap-2">
                      {product.benefits.slice(0, 4).map((b) =>
                    <div key={b} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-[#CC0000] rounded-full flex-shrink-0" />
                          <span className="text-xs text-[#6B6560]">{b}</span>
                        </div>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <span className="section-label" style={{ color: '#CC0000' }}>Ready to Tint?</span>
          <h2 className="mt-4 font-display font-light text-white leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Book Your Installation
          </h2>
          <p className="text-sm text-white/45 mb-10 max-w-[400px] mx-auto leading-relaxed">
            Visit either of our Kuwait showrooms or contact us via WhatsApp to book your automotive tint installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/96565008585?text=I'm interested in automotive window tint." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#1DA851] transition-colors duration-300">
              Book via WhatsApp
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 border border-white/30 text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-white/10 transition-colors duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>);

}