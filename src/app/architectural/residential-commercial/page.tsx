import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Residential & Commercial Window Film — LLumar Kuwait',
  description: 'LLumar® residential and commercial window films in Kuwait. Solar control, energy savings, privacy, and protection for homes and buildings.'
};

const residentialProducts = [
{
  name: 'Solar Film for Homes',
  description: 'Enjoy natural sunlight and outdoor views while taming the sun\'s harsh heat, irritating glare, and harmful UV rays.',
  icon: '☀️'
},
{
  name: 'Decorative Film for Homes',
  description: 'Add privacy or a designer touch to any room with our selection of decorative film for windows, shower doors and glass cabinets.',
  icon: '✨'
},
{
  name: 'Home Safety & Security Film',
  description: 'Add a tough layer to the glass in your home, making it less vulnerable to break-ins, vandalism, and extreme weather.',
  icon: '🛡️'
}];


const commercialProducts = [
{
  name: 'Commercial Solar Film',
  description: 'Engineered to elevate the value and experience of a property. Controls costs while improving tenant comfort, productivity, and satisfaction.',
  icon: '🏢'
},
{
  name: 'Commercial Decorative Film',
  description: 'Adds privacy to partitions and windows, can be custom cut for logo designs, or convincingly mimic expensive specialty glass.',
  icon: '🎨'
},
{
  name: 'Commercial Safety & Security Film',
  description: 'Help protect properties, occupants, and merchandise with anti-graffiti film and clear or solar safety and security film.',
  icon: '🔒'
}];


export default function ResidentialCommercialPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[70vh] flex items-end overflow-hidden">
        <AppImage
          src="https://llumarkuwait.com/wp-content/uploads/2024/10/5.Residential-Window-Film-1024x768.jpg"
          alt="LLumar residential window film installed on home windows providing solar control and privacy"
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
            <span className="text-[#C9A84C]">Residential & Commercial</span>
          </nav>
          <span className="text-[10px] tracking-[0.5em] text-[#C9A84C] uppercase font-medium">Architectural</span>
          <h1 className="mt-3 text-5xl md:text-7xl font-display font-light text-white leading-none tracking-tight">
            Residential &<br />
            <span className="italic text-white/60">Commercial</span>
          </h1>
        </div>
      </section>

      {/* Residential */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
        <div className="mb-12">
          <span className="text-[10px] tracking-[0.5em] text-[#C9A84C] uppercase font-medium">Residential</span>
          <h2 className="mt-3 text-3xl font-display font-light text-white">Window Film for Homes</h2>
          <p className="mt-4 text-sm text-white/40 leading-relaxed max-w-2xl">
            If you're feeling uncomfortable or dissatisfied with your home, start with your windows. LLumar® offers smart residential window film solutions for hot spots, high cooling costs, and afternoon glare. Installed quickly by professionals, delivering lifestyle benefits without costing a fortune.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {residentialProducts.map((p) =>
          <div key={p.name} className="bg-black p-8 hover:bg-white/3 transition-colors duration-300">
              <span className="text-3xl block mb-5">{p.icon}</span>
              <h3 className="text-lg font-display font-light text-white mb-3">{p.name}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{p.description}</p>
            </div>
          )}
        </div>
      </section>

      {/* Commercial */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-24 border-t border-white/10 pt-20">
        <div className="mb-12">
          <span className="text-[10px] tracking-[0.5em] text-[#C9A84C] uppercase font-medium">Commercial</span>
          <h2 className="mt-3 text-3xl font-display font-light text-white">Window Film for Buildings</h2>
          <p className="mt-4 text-sm text-white/40 leading-relaxed max-w-2xl">
            The glass in office, retail and residential buildings should be an asset, not a major source of discomfort or expense. Our window film solves high energy costs, tenant complaints, hot spots, glare, fading of furnishings, lack of privacy, and security concerns. All products are amazingly thin, engineered with advanced technology, and covered by our manufacturer's limited warranty.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {commercialProducts.map((p) =>
          <div key={p.name} className="bg-black p-8 hover:bg-white/3 transition-colors duration-300">
              <span className="text-3xl block mb-5">{p.icon}</span>
              <h3 className="text-lg font-display font-light text-white mb-3">{p.name}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{p.description}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl font-display font-light text-white mb-4">Transform your space</h2>
          <p className="text-sm text-white/40 mb-8">Get a professional consultation at our Kuwait showrooms.</p>
          <Link href="/#booking" className="inline-flex items-center gap-3 bg-[#C9A84C] text-black text-xs font-semibold tracking-widest uppercase px-8 py-4 hover:bg-[#E8C96A] transition-colors duration-300">
            Book Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>);

}