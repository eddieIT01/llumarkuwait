import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us — LLumar Kuwait',
  description: "Kuwait's exclusive LLumar distributor since 2000. 25+ years of experience in window film installation for automotive, architectural, and protective applications."
};

const pillars = [
{
  num: '01',
  title: 'Expertise & Experience',
  desc: 'Our team of skilled technicians boasts years of experience in the industry, ensuring meticulous application and optimal results.'
},
{
  num: '02',
  title: 'Premium Products',
  desc: 'We exclusively use the highest quality paint protection and glass film products, renowned for their durability and performance.'
},
{
  num: '03',
  title: 'Quality Time Delivery',
  desc: 'Your satisfaction is our top priority. We strive to provide exceptional customer service, from initial consultation to aftercare support.'
}];


const services = [
'Automotive Window Tint',
'Paint Protection Film',
'Residential Window Film',
'Commercial Window Film',
'Safety & Security Film',
'Decorative Films',
'Architectural Films',
'Windshield Protection'];


export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[60vh] flex items-end overflow-hidden pt-20">
        <AppImage
          src="https://llumarkuwait.com/wp-content/uploads/2023/05/WhatsApp-Image-2024-10-23-at-7.18.43-PM.jpeg"
          alt="LLumar Kuwait showroom interior with professional window film installation team"
          fill
          className="object-cover object-center opacity-35"
          priority />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pb-16 w-full">
          <span className="text-[10px] tracking-[0.5em] text-[#C9A84C] uppercase font-medium">Since 2000</span>
          <h1 className="mt-3 text-5xl md:text-7xl font-display font-light text-white leading-none tracking-tight">
            About<br />
            <span className="italic text-white/60">LLumar Kuwait</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xl text-white/70 leading-relaxed font-light">
              We are the Exclusive Distributor of LLumar Brand Films in Kuwait since 2000 with over 25 Years of experience in the Market.
            </p>
            <p className="mt-6 text-sm text-white/45 leading-relaxed">
              We operate under the primary principle of "Best Quality & Best Service". The company has grown to become the leader of Window Film Installation in Kuwait for Automotive, Paint Protection, Architectural, Safety & Security, Decorative And Privacy Films.
            </p>
            <p className="mt-4 text-sm text-white/45 leading-relaxed">
              Our goal is incredible service — a weapon against the competition that makes a difference.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-px bg-white/5">
            {[
            { value: '25+', label: 'Years of Experience' },
            { value: '2000', label: 'Established' },
            { value: '2', label: 'Kuwait Showrooms' },
            { value: '#1', label: 'Film Installer in Kuwait' }].
            map((stat) =>
            <div key={stat.label} className="bg-black p-8 text-center">
                <div className="text-4xl font-display font-light text-white">{stat.value}</div>
                <div className="text-[10px] tracking-widest text-white/30 uppercase mt-2">{stat.label}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t border-white/10 max-w-[1400px] mx-auto px-6 md:px-10 py-20">
        <span className="text-[10px] tracking-[0.5em] text-[#C9A84C] uppercase font-medium">Why Choose Us</span>
        <h2 className="mt-3 text-3xl font-display font-light text-white mb-12">About Our Company</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {pillars.map((p) =>
          <div key={p.num} className="bg-black p-8 hover:bg-white/3 transition-colors duration-300">
              <div className="text-[10px] tracking-[0.4em] text-[#C9A84C] mb-4 font-medium">{p.num}</div>
              <h3 className="text-xl font-display font-light text-white mb-4">{p.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{p.desc}</p>
            </div>
          )}
        </div>
      </section>

      {/* Services list */}
      <section className="border-t border-white/10 max-w-[1400px] mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[10px] tracking-[0.5em] text-[#C9A84C] uppercase font-medium">What We Do</span>
            <h2 className="mt-3 text-3xl font-display font-light text-white mb-8">Our Services</h2>
            <div className="grid grid-cols-2 gap-2">
              {services.map((svc) =>
              <div key={svc} className="flex items-center gap-2 py-3 border-b border-white/5">
                  <span className="w-1 h-1 bg-[#C9A84C] rounded-full flex-shrink-0" />
                  <span className="text-sm text-white/50">{svc}</span>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="border border-white/10 p-6">
              <div className="text-xs tracking-widest text-white/30 uppercase mb-2">24/7 Services Available</div>
              <p className="text-sm text-white/50">We're committed to being available when you need us most.</p>
            </div>
            <div className="border border-white/10 p-6">
              <div className="text-xs tracking-widest text-white/30 uppercase mb-2">Skilled Technicians</div>
              <p className="text-sm text-white/50">Every installation is performed by trained, certified professionals.</p>
            </div>
            <div className="border border-white/10 p-6">
              <div className="text-xs tracking-widest text-white/30 uppercase mb-2">Exclusive Distributor</div>
              <p className="text-sm text-white/50">The only authorized LLumar distributor in Kuwait since 2000.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl font-display font-light text-white mb-4">Visit our showrooms</h2>
          <p className="text-sm text-white/40 mb-8">Two locations across Kuwait — Shuwaikh and Al Rai.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white text-xs font-semibold tracking-widest uppercase px-8 py-4 hover:bg-white/5 transition-colors duration-300">
              Contact Us
            </Link>
            <Link href="/#booking" className="inline-flex items-center justify-center gap-3 bg-[#C9A84C] text-black text-xs font-semibold tracking-widest uppercase px-8 py-4 hover:bg-[#E8C96A] transition-colors duration-300">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>);

}