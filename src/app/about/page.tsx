import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About LLumar Kuwait — 25+ Years of Excellence',
  description: "Kuwait's exclusive LLumar distributor since 2000. 25+ years of experience in window film installation for automotive, architectural, and protective applications.",
};

const pillars = [
  {
    num: '01',
    title: 'Engineered Performance',
    desc: 'Every LLumar film is manufactured to precise engineering standards — tested for heat rejection, UV blocking, optical clarity and long-term durability in extreme conditions.',
  },
  {
    num: '02',
    title: 'Exclusive Distributor',
    desc: 'LLumar Kuwait is the only authorized LLumar distributor in Kuwait. Every film we install is authentic — backed by LLumar\'s global quality standards and warranty.',
  },
  {
    num: '03',
    title: 'Professional Installation',
    desc: 'Our certified technicians have installed thousands of vehicles and properties across Kuwait. Precision application is what separates a premium result from an ordinary one.',
  },
  {
    num: '04',
    title: 'Kuwait Expertise',
    desc: 'We understand Kuwait\'s unique climate, regulations and market. Our recommendations are based on 25+ years of local experience — not generic advice.',
  },
];

const services = [
  'Automotive Window Tint',
  'Ceramic Tint',
  'Paint Protection Film',
  'FormulaOne by LLumar',
  'Windshield Protection',
  'Residential Window Film',
  'Commercial Window Film',
  'Safety & Security Film',
  'Decorative Films',
  'Privacy Films',
  'Solar Control Film',
  'Architectural Films',
];

export default function AboutPage() {
  return (
    <main className="bg-[#FAFAF8] text-[#111111] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[65vh] min-h-[500px] overflow-hidden bg-[#1A1A1A] flex items-end">
        <AppImage
          src="https://llumarkuwait.com/wp-content/uploads/2023/05/WhatsApp-Image-2024-10-23-at-7.18.43-PM.jpeg"
          alt="LLumar Kuwait showroom interior with professional window film installation team"
          fill
          className="object-cover opacity-45"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-16 w-full">
          <span className="section-label" style={{ color: '#CC0000' }}>Since 2000</span>
          <h1 className="mt-3 font-display font-light text-white leading-tight" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            About<br />
            <span className="italic text-white/70">LLumar Kuwait</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#FAFAF8] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                25+ Years.<br />
                <span className="italic text-[#6B6560]">One Standard.</span>
              </h2>
              <p className="text-base text-[#1A1A1A] leading-relaxed mb-4">
                LLumar Kuwait has been the exclusive distributor of LLumar brand films in Kuwait since 2000. Over 25 years, we have built Kuwait's most trusted window film installation operation — serving thousands of vehicles and properties across the country.
              </p>
              <p className="text-sm text-[#6B6560] leading-relaxed mb-4">
                We operate under a single principle: uncompromising quality. Every film we install is authentic LLumar — manufactured by Eastman Performance Films, one of the world's leading film technology companies with over 65 years of experience.
              </p>
              <p className="text-sm text-[#6B6560] leading-relaxed">
                Our team of certified technicians brings the same precision and care to every installation — whether it's a single vehicle window or a complete commercial building.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-px bg-[#E0DBD5]">
              {[
                { value: '25+', label: 'Years of Experience', detail: 'In Kuwait since 2000' },
                { value: '2000', label: 'Established', detail: 'Exclusive distributor' },
                { value: '2', label: 'Kuwait Showrooms', detail: 'Shuwaikh & Al Rai' },
                { value: '#1', label: 'Film Installer', detail: 'In Kuwait' },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#FAFAF8] p-8 text-center hover:bg-white transition-colors duration-300">
                  <div className="font-display font-light text-[#1A1A1A] mb-1" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{stat.value}</div>
                  <div className="text-[11px] font-semibold tracking-[0.2em] text-[#1A1A1A] uppercase mb-1">{stat.label}</div>
                  <div className="text-[11px] text-[#9A9590]">{stat.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#F5F0EA] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <span className="section-label">Why Choose Us</span>
          <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-14" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            The LLumar Kuwait<br />
            <span className="italic text-[#6B6560]">Difference</span>
          </h2>
          <div className="flex flex-col gap-0">
            {pillars.map((p, i) => (
              <div key={p.num} className={`grid grid-cols-1 lg:grid-cols-[100px_1fr_1fr] gap-6 lg:gap-12 py-10 border-t border-[#E0DBD5] ${i === pillars.length - 1 ? 'border-b' : ''} items-start`}>
                <div className="font-display font-light text-[#CC0000]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>{p.num}</div>
                <h3 className="text-xl lg:text-2xl font-display font-light text-[#1A1A1A] leading-snug">{p.title}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#FAFAF8] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label">What We Do</span>
              <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Complete Film<br />
                <span className="italic text-[#6B6560]">Solutions</span>
              </h2>
              <div className="grid grid-cols-2 gap-0">
                {services.map((svc) => (
                  <div key={svc} className="flex items-center gap-2.5 py-3 border-b border-[#E0DBD5]">
                    <span className="w-1 h-1 bg-[#CC0000] rounded-full flex-shrink-0" />
                    <span className="text-sm text-[#1A1A1A]">{svc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-[#1A1A1A] p-8">
                <div className="text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-3">LLumar Technology</div>
                <p className="text-sm text-white/55 leading-relaxed">LLumar is manufactured by Eastman Performance Films — a global leader in film technology with over 65 years of experience. Every LLumar product is engineered to perform in demanding conditions.</p>
              </div>
              <div className="border border-[#E0DBD5] p-8">
                <div className="text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-3">Certified Installation</div>
                <p className="text-sm text-[#6B6560] leading-relaxed">Every installation is performed by trained, certified technicians. We use professional-grade tools and techniques to ensure a flawless result every time.</p>
              </div>
              <div className="border border-[#E0DBD5] p-8">
                <div className="text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-3">Warranty Coverage</div>
                <p className="text-sm text-[#6B6560] leading-relaxed">LLumar films come with manufacturer warranty coverage. Ask our team about the specific warranty applicable to your chosen product.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display font-light text-white leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Visit Our Showrooms
          </h2>
          <p className="text-sm text-white/45 mb-10 max-w-[400px] mx-auto leading-relaxed">
            Two locations across Kuwait — Shuwaikh and Al Rai. Come in and speak with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#CC0000] text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#A30000] transition-colors duration-300">
              Contact Us
            </Link>
            <Link href="/gallery" className="inline-flex items-center justify-center gap-3 border border-white/30 text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-white/10 transition-colors duration-300">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
