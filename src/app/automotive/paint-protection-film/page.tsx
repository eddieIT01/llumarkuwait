import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Paint Protection Film — LLumar Kuwait',
  description: 'LLumar® PPF in Kuwait. Self-healing, hydrophobic paint protection film in 6 variants. Valor, Platinum, Select Black and more. 10-year warranty.'
};

const products = [
{
  name: 'Valor PPF',
  tagline: '2-in-1 PPF + Ceramic Coating',
  description: 'Get the sought-after benefits of premium PPF and easy-wash ceramic coating with 2-in-1 Valor, featuring our OEM-trusted Tetrashield™ technology.',
  features: ['Super hydrophobic surface', 'Deep gloss finish', 'Stands up to bird droppings & corrosives', 'Tetrashield™ technology'],
  badge: 'PREMIUM'
},
{
  name: 'Select Black PPF',
  tagline: 'Restyle & Protect',
  description: 'Transform your paint color to a rich, glossy black with all the protective benefits of our Platinum PPF.',
  features: ['Full color transformation', 'More affordable than paint', 'Tougher than vinyl', 'Full wrap or accent coverage'],
  badge: 'STYLE'
},
{
  name: 'Platinum Extra PPF',
  tagline: 'Maximum Impact Resistance',
  description: 'Our highest impact resistance in a thicker, stronger PPF made for gravel roads, track racing, and harsh weather.',
  features: ['Chip-fighting finish defense', 'Ideal for high-vulnerability areas', '10-year limited warranty', 'Track & off-road ready'],
  badge: 'EXTREME'
},
{
  name: 'Platinum Gloss PPF',
  tagline: 'The Enthusiast\'s Choice',
  description: 'A favorite of auto enthusiasts and purists; helps your vehicle retain its value by defending the finish.',
  features: ['High-shine top-coat', 'Blends with factory paint', 'HydroGard™ stain resistance', 'Self-healing'],
  badge: 'POPULAR'
},
{
  name: 'Platinum Matte PPF',
  tagline: 'Flat Finish, Full Protection',
  description: 'All the features of our Platinum PPF, in a standout flat finish that can transform glossy paint or blend with custom matte paint.',
  features: ['Flat matte finish', 'Beads water & fights stains', 'Self-heals with heat', 'HydroGard™ technology'],
  badge: 'MATTE'
},
{
  name: 'Gloss & Matte PPF',
  tagline: 'Road-Tested Value',
  description: 'Affordable, extensively road-tested, and made to help keep high-shine or flat finishes looking pristine for years.',
  features: ['Available in gloss or matte', 'Self-heals with sun or engine heat', 'Extensively road-tested', 'Budget-friendly protection'],
  badge: 'VALUE'
}];


export default function PPFPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[70vh] flex items-end overflow-hidden">
        <AppImage
          src="https://llumarkuwait.com/wp-content/uploads/2024/10/3.Paint-protection-films-1024x684.jpg"
          alt="LLumar paint protection film applied to vehicle showing self-healing and hydrophobic properties"
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
            <span className="text-[#C9A84C]">Paint Protection Film</span>
          </nav>
          <span className="text-[10px] tracking-[0.5em] text-[#C9A84C] uppercase font-medium">Automotive</span>
          <h1 className="mt-3 text-5xl md:text-7xl font-display font-light text-white leading-none tracking-tight">
            Paint Protection<br />
            <span className="italic text-white/60">Film</span>
          </h1>
          <div className="mt-6 flex flex-wrap gap-4">
            {['SELF-HEALING', 'HYDROPHOBIC', 'FACTORY-BACKED'].map((tag) =>
            <span key={tag} className="text-[10px] tracking-widest text-white/40 border border-white/15 px-3 py-1.5 uppercase">{tag}</span>
            )}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-lg text-white/70 leading-relaxed font-light">
              LLumar® paint protection film makes it easy to keep your car's finish looking like you just drove off the lot. Paint protection film effectively stands up to flying rocks, bird droppings, salt, sand and more.
            </p>
            <p className="mt-4 text-sm text-white/40 leading-relaxed">
              We offer multiple finishes, innovative 2-in-1 products, and go-to favorites, all of which are self-healing, extensively tested, and factory-backed. Decide what coverage you need, select your product and take any road with confidence.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
            { value: '10yr', label: 'Warranty' },
            { value: '6', label: 'Film Variants' },
            { value: '25+', label: 'Years in Kuwait' }].
            map((stat) =>
            <div key={stat.label} className="border border-white/10 p-6 text-center">
                <div className="text-3xl font-display font-light text-white">{stat.value}</div>
                <div className="text-[10px] tracking-widest text-white/30 uppercase mt-2">{stat.label}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-24">
        <h2 className="text-3xl font-display font-light text-white mb-12 tracking-tight">
          Our PPF Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
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
          <h2 className="text-3xl md:text-4xl font-display font-light text-white mb-4">Ready to protect your paint?</h2>
          <p className="text-sm text-white/40 mb-8">Book your PPF installation at either of our Kuwait showrooms.</p>
          <Link href="/#booking" className="inline-flex items-center gap-3 bg-[#C9A84C] text-black text-xs font-semibold tracking-widest uppercase px-8 py-4 hover:bg-[#E8C96A] transition-colors duration-300">
            Book Installation
          </Link>
        </div>
      </section>

      <Footer />
    </main>);

}