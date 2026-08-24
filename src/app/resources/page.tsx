import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resources — LLumar Kuwait',
  description: 'LLumar Kuwait resources. Product information, care and maintenance guides, warranty information, FAQs and technical information.',
};

const resources = [
  {
    category: 'Product Information',
    items: [
      { title: 'Automotive Film Overview', desc: 'Complete guide to LLumar automotive window tint technologies — ceramic, metallized and dyed films.' },
      { title: 'PPF Product Guide', desc: 'Detailed information on LLumar paint protection film options, finishes and coverage.' },
      { title: 'Architectural Film Guide', desc: 'Overview of LLumar architectural film solutions for residential and commercial applications.' },
      { title: 'FormulaOne by LLumar', desc: 'Technical information on LLumar\'s flagship automotive tint line.' },
    ],
  },
  {
    category: 'Care & Maintenance',
    items: [
      { title: 'Window Tint Care Guide', desc: 'How to clean and maintain your automotive window tint for long-lasting performance.' },
      { title: 'PPF Maintenance', desc: 'Caring for your paint protection film — cleaning, maintenance and what to avoid.' },
      { title: 'Architectural Film Care', desc: 'Maintaining your architectural window film for optimal performance and appearance.' },
    ],
  },
  {
    category: 'Warranty & Quality',
    items: [
      { title: 'LLumar Warranty Information', desc: 'Understanding the warranty coverage for your LLumar film products.' },
      { title: 'Quality Standards', desc: 'How LLumar films are tested and certified for performance and durability.' },
      { title: 'Installation Standards', desc: 'LLumar Kuwait\'s installation process and quality assurance procedures.' },
    ],
  },
  {
    category: 'FAQ',
    items: [
      { title: 'Automotive Tint FAQ', desc: 'Common questions about automotive window tint — legality, performance, installation and care.' },
      { title: 'PPF FAQ', desc: 'Frequently asked questions about paint protection film.' },
      { title: 'Architectural Film FAQ', desc: 'Common questions about residential and commercial window film.' },
    ],
  },
];

const faqs = [
  {
    q: 'Is window tint legal in Kuwait?',
    a: 'Window tint regulations in Kuwait specify permitted VLT (visible light transmission) levels for different windows. Our team can advise on compliant tint options for your vehicle.',
  },
  {
    q: 'How long does window tint installation take?',
    a: 'A standard automotive tint installation typically takes 2–4 hours depending on the vehicle. We recommend leaving your vehicle with us for the day to ensure a perfect result.',
  },
  {
    q: 'How long does PPF last?',
    a: 'LLumar PPF is designed for long-term durability. With proper care, it can protect your vehicle\'s paint for many years. Specific warranty terms vary by product.',
  },
  {
    q: 'Can window film be removed?',
    a: 'Yes, window film can be professionally removed. We recommend professional removal to avoid damage to the glass or adhesive residue.',
  },
  {
    q: 'Does window film affect visibility?',
    a: 'LLumar films are engineered for optical clarity. While tinted films reduce visible light transmission, they are designed to maintain clear outward visibility.',
  },
  {
    q: 'Do you offer a warranty on installations?',
    a: 'Yes. LLumar films come with manufacturer warranty coverage. Our team will advise on the specific warranty applicable to your chosen product and installation.',
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-[#FAFAF8] text-[#111111] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#FAFAF8]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <span className="section-label">Resources</span>
          <h1 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            Information<br />
            <span className="italic text-[#6B6560]">& Guidance</span>
          </h1>
          <p className="mt-6 text-sm text-[#6B6560] max-w-[480px] leading-relaxed">
            Product information, care guides, warranty details and answers to common questions about LLumar films.
          </p>
        </div>
      </section>

      {/* Resources grid */}
      <section className="bg-[#FAFAF8] pb-20 lg:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col gap-16">
            {resources.map((section) => (
              <div key={section.category}>
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-6 h-px bg-[#CC0000]" />
                  <h2 className="text-[11px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold">{section.category}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E0DBD5]">
                  {section.items.map((item) => (
                    <div key={item.title} className="bg-[#FAFAF8] p-8 hover:bg-white transition-colors duration-300 group cursor-pointer">
                      <h3 className="text-base font-medium text-[#1A1A1A] mb-3 group-hover:text-[#CC0000] transition-colors duration-200">{item.title}</h3>
                      <p className="text-sm text-[#6B6560] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F5F0EA] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <span className="section-label">FAQ</span>
          <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-14" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Common<br />
            <span className="italic text-[#6B6560]">Questions</span>
          </h2>
          <div className="flex flex-col gap-0">
            {faqs.map((faq, i) => (
              <div key={i} className={`py-8 border-t border-[#E0DBD5] ${i === faqs.length - 1 ? 'border-b' : ''}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <h3 className="text-base font-medium text-[#1A1A1A]">{faq.q}</h3>
                  <p className="text-sm text-[#6B6560] leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display font-light text-white leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Have More Questions?
          </h2>
          <p className="text-sm text-white/45 mb-10 max-w-[400px] mx-auto leading-relaxed">
            Contact our team directly — we're happy to answer any questions about our products and services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/96565008585" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#CC0000] text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#A30000] transition-colors duration-300">
              Ask via WhatsApp
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 border border-white/30 text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-white/10 transition-colors duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
