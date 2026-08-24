'use client';
import React, { useState } from 'react';

type Step = 'service' | 'branch' | 'action';

const services = [
  { id: 'automotive-tint', icon: '🚗', label: 'Automotive Tint', sub: 'Window film for vehicles' },
  { id: 'ppf', icon: '🛡️', label: 'Paint Protection', sub: 'PPF for bodywork' },
  { id: 'architectural', icon: '🏢', label: 'Architectural Film', sub: 'Residential & commercial' },
  { id: 'safety', icon: '🔒', label: 'Safety & Security', sub: 'Blast & break-in defense' },
];

const branches = [
  {
    id: 'shuwaikh',
    name: 'Shuwaikh Branch',
    area: 'Shuwaikh Industrial Area',
    phones: ['+965 566 17907', '+965 9771 4949'],
    whatsapp: '96556617907',
    maps: 'https://maps.app.goo.gl/V4aDScBpW8dYkC8H8',
  },
  {
    id: 'alrai',
    name: 'Al Rai Branch',
    area: 'Al Ghazali Street, Al Rai',
    phones: ['+965 6500 8585', '+965 6633 0880'],
    whatsapp: '96565008585',
    maps: 'https://maps.app.goo.gl/VV6JvW3YLXCe8TGT6',
  },
];

export default function BookingFlowSection() {
  const [step, setStep] = useState<Step>('service');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);

  const branch = branches.find((b) => b.id === selectedBranch);
  const service = services.find((s) => s.id === selectedService);

  const waMessage = encodeURIComponent(
    `Hello LLumar Kuwait! I'd like to book an installation.\nService: ${service?.label || ''}\nBranch: ${branch?.name || ''}`
  );

  return (
    <section id="booking" className="relative w-full bg-black py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.5em] text-[#C9A84C] uppercase font-medium">Book Your Installation</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-display font-light text-white tracking-tight">
            Ready to protect<br />
            <span className="italic text-white/50">your vehicle?</span>
          </h2>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto">
            Three steps. That's all it takes to get LLumar protection installed.
          </p>
        </div>

        {/* Step indicators */}
        <div className="flex items-center justify-center gap-0 mb-12">
          {(['service', 'branch', 'action'] as Step[]).map((s, i) => (
            <React.Fragment key={s}>
              <div className={`flex items-center gap-2 px-4 py-2 transition-all duration-300 ${step === s ? 'text-white' : (
                (s === 'branch' && selectedService) || (s === 'action' && selectedBranch) ? 'text-white/50 cursor-pointer' : 'text-white/20'
              )}`}
                onClick={() => {
                  if (s === 'branch' && selectedService) setStep('branch');
                  if (s === 'action' && selectedBranch) setStep('action');
                  if (s === 'service') setStep('service');
                }}
              >
                <span className={`w-6 h-6 flex items-center justify-center text-[10px] border transition-colors duration-300 ${step === s ? 'border-[#C9A84C] text-[#C9A84C]' : 'border-white/20 text-white/30'}`}>
                  {i + 1}
                </span>
                <span className="text-xs tracking-widest uppercase hidden sm:block">
                  {s === 'service' ? 'What do you need?' : s === 'branch' ? 'Choose branch' : 'Connect'}
                </span>
              </div>
              {i < 2 && <div className="w-8 h-px bg-white/10" />}
            </React.Fragment>
          ))}
        </div>

        {/* Step content */}
        <div className="max-w-2xl mx-auto">
          {/* Step 1 — Service */}
          {step === 'service' && (
            <div className="grid grid-cols-2 gap-3">
              {services.map((svc) => (
                <button
                  key={svc.id}
                  onClick={() => { setSelectedService(svc.id); setStep('branch'); }}
                  className={`text-left p-5 border transition-all duration-300 group ${selectedService === svc.id ? 'border-[#C9A84C] bg-[#C9A84C]/5' : 'border-white/10 hover:border-white/30 hover:bg-white/3'}`}
                >
                  <span className="text-2xl block mb-3">{svc.icon}</span>
                  <div className="text-sm font-medium text-white tracking-wide">{svc.label}</div>
                  <div className="text-xs text-white/30 mt-1">{svc.sub}</div>
                </button>
              ))}
            </div>
          )}

          {/* Step 2 — Branch */}
          {step === 'branch' && (
            <div className="flex flex-col gap-4">
              <button onClick={() => setStep('service')} className="text-xs text-white/30 hover:text-white/60 tracking-widest uppercase text-left flex items-center gap-2 mb-2 transition-colors duration-200">
                <span>←</span> Back
              </button>
              {branches.map((br) => (
                <button
                  key={br.id}
                  onClick={() => { setSelectedBranch(br.id); setStep('action'); }}
                  className={`text-left p-6 border transition-all duration-300 ${selectedBranch === br.id ? 'border-[#C9A84C] bg-[#C9A84C]/5' : 'border-white/10 hover:border-white/30 hover:bg-white/3'}`}
                >
                  <div className="text-sm font-medium text-white tracking-wide">{br.name}</div>
                  <div className="text-xs text-white/40 mt-1">{br.area}</div>
                  <div className="flex gap-4 mt-3">
                    {br.phones.map((p) => (
                      <span key={p} className="text-xs text-white/30">{p}</span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Step 3 — Action */}
          {step === 'action' && branch && (
            <div className="flex flex-col gap-4">
              <button onClick={() => setStep('branch')} className="text-xs text-white/30 hover:text-white/60 tracking-widest uppercase text-left flex items-center gap-2 mb-2 transition-colors duration-200">
                <span>←</span> Back
              </button>
              <div className="border border-white/10 p-6 mb-2">
                <div className="text-[10px] tracking-widest text-white/30 uppercase mb-2">Your selection</div>
                <div className="text-sm text-white">{service?.label} · {branch.name}</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={`https://wa.me/${branch.whatsapp}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-6 border border-white/10 hover:border-[#25D366]/40 hover:bg-[#25D366]/5 transition-all duration-300 group"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="text-xs tracking-widest text-white/60 uppercase">WhatsApp</span>
                </a>
                <a
                  href={`tel:${branch.phones[0].replace(/\s/g, '')}`}
                  className="flex flex-col items-center gap-3 p-6 border border-white/10 hover:border-white/30 hover:bg-white/3 transition-all duration-300"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/60">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="text-xs tracking-widest text-white/60 uppercase">Call</span>
                </a>
                <a
                  href={branch.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-6 border border-white/10 hover:border-white/30 hover:bg-white/3 transition-all duration-300"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/60">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-xs tracking-widest text-white/60 uppercase">Directions</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
