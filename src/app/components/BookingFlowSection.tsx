'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const serviceIcons = ['🚗', '🛡️', '🏢', '🔒'];
const branchPhones = ['+965 566 17907', '+965 6500 8585'];
const branchWhatsapps = ['96556617907', '96565008585'];
const branchMaps = [
  'https://maps.app.goo.gl/V4aDScBpW8dYkC8H8',
  'https://maps.app.goo.gl/VV6JvW3YLXCe8TGT6',
];

export default function BookingFlowSection() {
  const { t, isArabic } = useLanguage();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  const services = t?.booking?.services?.map((s, i) => ({ ...s, icon: serviceIcons?.[i] }));
  const branches = t?.booking?.branches?.map((b, i) => ({
    ...b,
    phone: branchPhones?.[i],
    whatsapp: branchWhatsapps?.[i],
    maps: branchMaps?.[i],
  }));

  const selectedServiceData = services?.find((s) => s?.id === selectedService);
  const selectedBranchData = branches?.find((b) => b?.id === selectedBranch);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      t?.booking?.waMessage?.replace('{service}', selectedServiceData?.label || '')?.replace('{branch}', selectedBranchData?.name || '')
    );
    const wa = selectedBranchData?.whatsapp || '96565008585';
    window.open(`https://wa.me/${wa}?text=${msg}`, '_blank');
  };

  const stepLabels = [t?.booking?.step1, t?.booking?.step2, t?.booking?.step3];

  return (
    <section className="bg-[#1A1A1A] py-24 lg:py-32" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start ${isArabic ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Left — text */}
          <div ref={sectionRef} className={`reveal-left ${isArabic ? 'text-right' : ''}`}>
            <span className="section-label" style={{ color: '#CC0000' }}>{t?.booking?.label}</span>
            <h2 className="mt-4 font-display font-light text-white leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              {t?.booking?.headline}<br />
              <span className="italic text-white/60">{t?.booking?.subline}</span>
            </h2>
            <div className="mt-10 flex flex-col gap-4">
              {stepLabels?.map((label, i) => (
                <div key={i} className={`flex items-center gap-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 border flex items-center justify-center flex-shrink-0 ${i === 0 ? 'border-[#CC0000]' : 'border-white/20'}`}>
                    <span className={`text-[10px] font-semibold ${i === 0 ? 'text-[#CC0000]' : 'text-white/30'}`}>0{i + 1}</span>
                  </div>
                  <span className={`text-sm ${i === 0 ? 'text-white/50' : 'text-white/30'}`}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — booking flow */}
          <div className={`bg-[#FAFAF8] p-8 lg:p-10 ${isArabic ? 'text-right' : ''}`}>
            {/* Step 1 — Service */}
            {step === 1 && (
              <div>
                <p className={`text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-2 ${isArabic ? 'tracking-normal' : ''}`}>{isArabic ? 'الخطوة ١ من ٣' : 'Step 1 of 3'}</p>
                <h3 className="text-xl font-display font-light text-[#1A1A1A] mb-6">{t?.booking?.step1}</h3>
                <div className="flex flex-col gap-2">
                  {services?.map((svc) => (
                    <button
                      key={svc?.id}
                      onClick={() => { setSelectedService(svc?.id); setStep(2); }}
                      className={`booking-option ${isArabic ? 'flex-row-reverse text-right' : 'text-left'}`}
                    >
                      <span className="text-xl">{svc?.icon}</span>
                      <span className="text-sm font-medium text-[#1A1A1A]">{svc?.label}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${isArabic ? 'mr-auto rotate-180' : 'ml-auto'} text-[#9A9590]`}>
                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2 — Branch */}
            {step === 2 && (
              <div>
                <button onClick={() => setStep(1)} className={`flex items-center gap-2 text-[11px] text-[#9A9590] hover:text-[#CC0000] transition-colors duration-200 mb-4 tracking-wider uppercase ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isArabic ? 'rotate-180' : ''}>
                    <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                  </svg>
                  {t?.booking?.back}
                </button>
                <p className={`text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-2 ${isArabic ? 'tracking-normal' : ''}`}>{isArabic ? 'الخطوة ٢ من ٣' : 'Step 2 of 3'}</p>
                <h3 className="text-xl font-display font-light text-[#1A1A1A] mb-2">{t?.booking?.step2}</h3>
                <p className="text-sm text-[#9A9590] mb-6">{isArabic ? 'الخدمة: ' : 'Service: '}<span className="text-[#1A1A1A] font-medium">{selectedServiceData?.label}</span></p>
                <div className="flex flex-col gap-2">
                  {branches?.map((branch) => (
                    <button
                      key={branch?.id}
                      onClick={() => { setSelectedBranch(branch?.id); setStep(3); }}
                      className={`booking-option ${isArabic ? 'flex-row-reverse text-right' : 'text-left'}`}
                    >
                      <div>
                        <span className="text-sm font-medium text-[#1A1A1A] block">{branch?.name}</span>
                        <span className="text-[11px] text-[#9A9590]">{branch?.area}</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${isArabic ? 'mr-auto rotate-180' : 'ml-auto'} text-[#9A9590]`}>
                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3 — Contact */}
            {step === 3 && (
              <div>
                <button onClick={() => setStep(2)} className={`flex items-center gap-2 text-[11px] text-[#9A9590] hover:text-[#CC0000] transition-colors duration-200 mb-4 tracking-wider uppercase ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isArabic ? 'rotate-180' : ''}>
                    <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                  </svg>
                  {t?.booking?.back}
                </button>
                <p className={`text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-2 ${isArabic ? 'tracking-normal' : ''}`}>{isArabic ? 'الخطوة ٣ من ٣' : 'Step 3 of 3'}</p>
                <h3 className="text-xl font-display font-light text-[#1A1A1A] mb-2">{t?.booking?.step3}</h3>
                <div className="text-sm text-[#9A9590] mb-6 space-y-1">
                  <p>{isArabic ? 'الخدمة: ' : 'Service: '}<span className="text-[#1A1A1A] font-medium">{selectedServiceData?.label}</span></p>
                  <p>{isArabic ? 'المعرض: ' : 'Showroom: '}<span className="text-[#1A1A1A] font-medium">{selectedBranchData?.name}</span></p>
                </div>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleWhatsApp}
                    className={`flex items-center justify-center gap-3 py-4 bg-[#25D366] text-white text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#1DA851] transition-colors duration-300 ${isArabic ? 'flex-row-reverse tracking-normal' : ''}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    {t?.booking?.connectCta}
                  </button>
                  <a
                    href={`tel:${selectedBranchData?.phone?.replace(/\s/g, '')}`}
                    className={`flex items-center justify-center gap-3 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 ${isArabic ? 'tracking-normal' : ''}`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    {selectedBranchData?.phone}
                  </a>
                  <a
                    href={selectedBranchData?.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-3 py-4 border border-[#E0DBD5] text-[#6B6560] text-[11px] font-semibold tracking-[0.2em] uppercase hover:border-[#1A1A1A] hover:text-[#1A1A1A] transition-all duration-300 ${isArabic ? 'flex-row-reverse tracking-normal' : ''}`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                    {t?.contact?.directions}
                  </a>
                </div>
                <button onClick={() => { setStep(1); setSelectedService(null); setSelectedBranch(null); }} className="mt-4 text-[11px] text-[#9A9590] hover:text-[#CC0000] transition-colors duration-200 tracking-wider uppercase w-full text-center">
                  {isArabic ? 'البدء من جديد' : 'Start Over'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
