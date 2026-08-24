'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { t, isArabic } = useLanguage();
  const at = t?.about;

  const stats = isArabic ? [
    { value: '+٢٥', label: 'عاماً من الخبرة', detail: 'في الكويت منذ عام ٢٠٠٠' },
    { value: '٢٠٠٠', label: 'تأسست عام', detail: 'الموزع الحصري' },
    { value: '٢', label: 'معرضان في الكويت', detail: 'الشويخ والري' },
    { value: '#١', label: 'مركب أفلام', detail: 'في الكويت' },
  ] : [
    { value: '25+', label: 'Years of Experience', detail: 'In Kuwait since 2000' },
    { value: '2000', label: 'Established', detail: 'Exclusive distributor' },
    { value: '2', label: 'Kuwait Showrooms', detail: 'Shuwaikh & Al Rai' },
    { value: '#1', label: 'Film Installer', detail: 'In Kuwait' },
  ];

  const techBoxes = isArabic ? [
    { label: 'تقنية لومار', body: 'لومار مُصنَّعة بواسطة Eastman Performance Films — رائدة عالمية في تقنية الأفلام بخبرة تزيد على ٦٥ عاماً. كل منتج لومار مُهندَس للأداء في الظروف القاسية.' },
    { label: 'تركيب معتمد', body: 'كل تركيب يُنجزه فنيون مدرَّبون ومعتمدون. نستخدم أدوات وتقنيات احترافية لضمان نتيجة مثالية في كل مرة.' },
    { label: 'تغطية الضمان', body: 'تأتي أفلام لومار مع ضمان الشركة المصنعة. اسأل فريقنا عن الضمان المحدد المنطبق على المنتج الذي اخترته.' },
  ] : [
    { label: 'LLumar Technology', body: 'LLumar is manufactured by Eastman Performance Films — a global leader in film technology with over 65 years of experience. Every LLumar product is engineered to perform in demanding conditions.' },
    { label: 'Certified Installation', body: 'Every installation is performed by trained, certified technicians. We use professional-grade tools and techniques to ensure a flawless result every time.' },
    { label: 'Warranty Coverage', body: 'LLumar films come with manufacturer warranty coverage. Ask our team about the specific warranty applicable to your chosen product.' },
  ];

  return (
    <main className="bg-[#FAFAF8] text-[#111111] min-h-screen" dir={isArabic ? 'rtl' : 'ltr'}>
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
          <span className="section-label" style={{ color: '#CC0000' }}>{at?.label}</span>
          <h1 className={`mt-3 font-display font-light text-white leading-tight ${isArabic ? 'text-right' : ''}`} style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            {at?.headline1}<br />
            <span className="italic text-white/70">{at?.headline2}</span>
          </h1>
        </div>
      </section>
      {/* Story */}
      <section className="bg-[#FAFAF8] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className={isArabic ? 'text-right' : ''}>
              <span className="section-label">{at?.storyLabel}</span>
              <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                {at?.storyHeadline}
              </h2>
              <p className="text-base text-[#1A1A1A] leading-relaxed mb-4">{at?.storyBody1}</p>
              <p className="text-sm text-[#6B6560] leading-relaxed">{at?.storyBody2}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-px bg-[#E0DBD5]">
              {stats?.map((stat) => (
                <div key={stat?.label} className="bg-[#FAFAF8] p-8 text-center hover:bg-white transition-colors duration-300">
                  <div className="font-display font-light text-[#1A1A1A] mb-1" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{stat?.value}</div>
                  <div className={`text-[11px] font-semibold tracking-[0.2em] text-[#1A1A1A] uppercase mb-1 ${isArabic ? 'tracking-normal' : ''}`}>{stat?.label}</div>
                  <div className="text-[11px] text-[#9A9590]">{stat?.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="bg-[#F5F0EA] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <span className="section-label">{at?.pillarsLabel}</span>
          <h2 className={`mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-14 ${isArabic ? 'text-right' : ''}`} style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            {at?.pillarsHeadline}
          </h2>
          <div className="flex flex-col gap-0">
            {at?.pillars?.map((p, i) => (
              <div key={p?.num} className={`grid grid-cols-1 lg:grid-cols-[100px_1fr_1fr] gap-6 lg:gap-12 py-10 border-t border-[#E0DBD5] ${i === at?.pillars?.length - 1 ? 'border-b' : ''} items-start ${isArabic ? 'text-right' : ''}`}>
                <div className="font-display font-light text-[#CC0000]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>{p?.num}</div>
                <h3 className="text-xl lg:text-2xl font-display font-light text-[#1A1A1A] leading-snug">{p?.title}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{p?.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services */}
      <section className="bg-[#FAFAF8] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className={isArabic ? 'text-right' : ''}>
              <span className="section-label">{at?.servicesLabel}</span>
              <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                {at?.servicesHeadline}
              </h2>
              <div className="grid grid-cols-2 gap-0">
                {at?.services?.map((svc) => (
                  <div key={svc} className={`flex items-center gap-2.5 py-3 border-b border-[#E0DBD5] ${isArabic ? 'flex-row-reverse' : ''}`}>
                    <span className="w-1 h-1 bg-[#CC0000] rounded-full flex-shrink-0" />
                    <span className="text-sm text-[#1A1A1A]">{svc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {techBoxes?.map((box, i) => (
                <div key={box?.label} className={`${i === 0 ? 'bg-[#1A1A1A]' : 'border border-[#E0DBD5]'} p-8 ${isArabic ? 'text-right' : ''}`}>
                  <div className={`text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-3 ${isArabic ? 'tracking-normal' : ''}`}>{box?.label}</div>
                  <p className={`text-sm leading-relaxed ${i === 0 ? 'text-white/55' : 'text-[#6B6560]'}`}>{box?.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display font-light text-white leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            {at?.ctaHeadline}
          </h2>
          <p className="text-sm text-white/45 mb-10 max-w-[400px] mx-auto leading-relaxed">{at?.ctaBody}</p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isArabic ? 'sm:flex-row-reverse' : ''}`}>
            <Link href="/contact" className={`inline-flex items-center justify-center gap-3 bg-[#CC0000] text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#A30000] transition-colors duration-300 ${isArabic ? 'tracking-normal' : ''}`}>
              {at?.ctaBtn}
            </Link>
            <Link href="/gallery" className={`inline-flex items-center justify-center gap-3 border border-white/30 text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-white/10 transition-colors duration-300 ${isArabic ? 'tracking-normal' : ''}`}>
              {isArabic ? 'شاهد أعمالنا' : 'View Our Work'}
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
