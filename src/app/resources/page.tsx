'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function ResourcesPage() {
  const { t, isArabic } = useLanguage();
  const rt = t?.resources;

  return (
    <main className="bg-[#FAFAF8] text-[#111111] min-h-screen" dir={isArabic ? 'rtl' : 'ltr'}>
      <Header />
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#FAFAF8]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <span className="section-label">{rt?.label}</span>
          <h1 className={`mt-3 font-display font-light text-[#1A1A1A] leading-tight ${isArabic ? 'text-right' : ''}`} style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            {rt?.headline1}<br />
            <span className="italic text-[#6B6560]">{rt?.headline2}</span>
          </h1>
          <p className={`mt-6 text-sm text-[#6B6560] max-w-[480px] leading-relaxed ${isArabic ? 'text-right' : ''}`}>
            {rt?.subline}
          </p>
        </div>
      </section>
      {/* Resources grid */}
      <section className="bg-[#FAFAF8] pb-20 lg:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col gap-16">
            {rt?.categories?.map((section) => (
              <div key={section?.category}>
                <div className={`flex items-center gap-4 mb-8 ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <span className="w-6 h-px bg-[#CC0000]" />
                  <h2 className={`text-[11px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold ${isArabic ? 'tracking-normal' : ''}`}>{section?.category}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E0DBD5]">
                  {section?.items?.map((item) => (
                    <div key={item?.title} className={`bg-[#FAFAF8] p-8 hover:bg-white transition-colors duration-300 group cursor-pointer ${isArabic ? 'text-right' : ''}`}>
                      <h3 className="text-base font-medium text-[#1A1A1A] mb-3 group-hover:text-[#CC0000] transition-colors duration-200">{item?.title}</h3>
                      <p className="text-sm text-[#6B6560] leading-relaxed">{item?.desc}</p>
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
          <span className="section-label">{rt?.faqLabel}</span>
          <h2 className={`mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-14 ${isArabic ? 'text-right' : ''}`} style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            {isArabic ? 'الأسئلة' : 'Common'}<br />
            <span className="italic text-[#6B6560]">{isArabic ? 'الشائعة' : 'Questions'}</span>
          </h2>
          <div className="flex flex-col gap-0">
            {rt?.faqs?.map((faq, i) => (
              <div key={i} className={`py-8 border-t border-[#E0DBD5] ${i === rt?.faqs?.length - 1 ? 'border-b' : ''}`}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 ${isArabic ? 'text-right' : ''}`}>
                  <h3 className="text-base font-medium text-[#1A1A1A]">{faq?.q}</h3>
                  <p className="text-sm text-[#6B6560] leading-relaxed">{faq?.a}</p>
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
            {isArabic ? 'هل لديك المزيد من الأسئلة؟' : 'Have More Questions?'}
          </h2>
          <p className="text-sm text-white/45 mb-10 max-w-[400px] mx-auto leading-relaxed">{rt?.contactCta}</p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isArabic ? 'sm:flex-row-reverse' : ''}`}>
            <a href="https://wa.me/96565008585" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-3 bg-[#CC0000] text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#A30000] transition-colors duration-300 ${isArabic ? 'tracking-normal' : ''}`}>
              {isArabic ? 'اسأل عبر واتساب' : 'Ask via WhatsApp'}
            </a>
            <Link href="/contact" className={`inline-flex items-center justify-center gap-3 border border-white/30 text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-white/10 transition-colors duration-300 ${isArabic ? 'tracking-normal' : ''}`}>
              {rt?.contactBtn}
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
