'use client';
import React, { useState } from 'react';

type ServiceType = 'Automotive Tint' | 'Paint Protection Film' | 'Architectural Film' | 'Safety & Security' | null;
type BranchType = 'Shuwaikh' | 'Al Rai' | null;

const services: ServiceType[] = ['Automotive Tint', 'Paint Protection Film', 'Architectural Film', 'Safety & Security'];

const branchInfo = {
  Shuwaikh: {
    label: 'LLumar Main Showroom',
    address: 'Shuwaikh Industrial Area, Kuwait',
    phone: '+965 566 17907',
    whatsapp: '+96556617907',
    map: 'https://maps.app.goo.gl/V4aDScBpW8dYkC8H8',
  },
  'Al Rai': {
    label: 'LLumar Al Rai Branch',
    address: 'Al Ghazali Street, Al Rai',
    phone: '+965 6500 8585',
    whatsapp: '+96565008585',
    map: 'https://maps.app.goo.gl/VV6JvW3YLXCe8TGT6',
  },
};

export default function BookingSection() {
  const [selectedService, setSelectedService] = useState<ServiceType>(null);
  const [selectedBranch, setSelectedBranch] = useState<BranchType>(null);
  const [step, setStep] = useState(1);

  const handleServiceSelect = (s: ServiceType) => {
    setSelectedService(s);
    setStep(2);
  };

  const handleBranchSelect = (b: BranchType) => {
    setSelectedBranch(b);
    setStep(3);
  };

  const reset = () => {
    setSelectedService(null);
    setSelectedBranch(null);
    setStep(1);
  };

  const branch = selectedBranch ? branchInfo[selectedBranch] : null;

  return (
    <section id="booking" className="relative py-24 md:py-32 bg-secondary/40 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px line-gold" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-px bg-primary" />
              <span className="text-micro text-primary font-semibold">Book Your Installation</span>
            </div>
            <h2 className="font-display font-light leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Ridiculously Easy<br />
              <span className="text-gradient-gold italic">to Book.</span>
            </h2>
            <p className="text-foreground/60 text-sm font-light leading-relaxed mb-8">
              Choose your service, pick your nearest branch, and reach us instantly via WhatsApp or call. We respond within minutes.
            </p>
            {/* Hotline */}
            <div className="p-5 border border-border/50 bg-card/50 rounded-sm">
              <p className="text-micro text-muted-foreground mb-2">Hotline</p>
              <a href="tel:18866660" className="font-display text-2xl font-light text-primary hover:text-accent transition-colors duration-200">
                1886660
              </a>
              <p className="text-xs text-muted-foreground mt-1">Available 8:30 AM – 7:30 PM</p>
            </div>
          </div>

          {/* Right: Booking flow */}
          <div className="lg:col-span-8">
            {/* Step indicator */}
            <div className="flex items-center gap-3 mb-8">
              {[1, 2, 3].map((s) => (
                <React.Fragment key={s}>
                  <div className={`flex items-center gap-2 transition-all duration-300 ${step >= s ? 'opacity-100' : 'opacity-30'}`}>
                    <div className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs font-semibold transition-all duration-300 ${step >= s ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground'}`}>
                      {step > s ? '✓' : s}
                    </div>
                    <span className="text-xs text-muted-foreground hidden sm:block">
                      {s === 1 ? 'Service' : s === 2 ? 'Branch' : 'Contact'}
                    </span>
                  </div>
                  {s < 3 && <div className={`flex-1 h-px transition-colors duration-500 ${step > s ? 'bg-primary/50' : 'bg-border/50'}`} />}
                </React.Fragment>
              ))}
            </div>

            {/* Step 1: Select service */}
            {step === 1 && (
              <div className="booking-step">
                <p className="text-sm text-foreground/70 mb-6 font-light">What do you need?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((s) => (
                    <button
                      key={s}
                      onClick={() => handleServiceSelect(s)}
                      className="group text-left p-5 border border-border/50 bg-card/50 hover:border-primary/50 hover:bg-card transition-all duration-300 rounded-sm min-h-[64px]"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-200">{s}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">
                          <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Select branch */}
            {step === 2 && (
              <div className="booking-step">
                <div className="flex items-center gap-3 mb-2">
                  <button onClick={reset} className="text-micro text-muted-foreground hover:text-foreground transition-colors duration-200 min-h-[44px]">← Back</button>
                  <span className="text-xs text-primary">{selectedService}</span>
                </div>
                <p className="text-sm text-foreground/70 mb-6 font-light">Choose your nearest branch:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(Object.keys(branchInfo) as BranchType[]).filter(Boolean).map((b) => {
                    const info = branchInfo[b as 'Shuwaikh' | 'Al Rai'];
                    return (
                      <button
                        key={b}
                        onClick={() => handleBranchSelect(b)}
                        className="group text-left p-6 border border-border/50 bg-card/50 hover:border-primary/50 hover:bg-card transition-all duration-300 rounded-sm min-h-[44px]"
                      >
                        <p className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">{info.label}</p>
                        <p className="text-xs text-muted-foreground mb-3">{info.address}</p>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary/60" />
                          <span className="text-xs text-muted-foreground">{info.phone}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Contact options */}
            {step === 3 && branch && (
              <div className="booking-step">
                <div className="flex items-center gap-3 mb-2">
                  <button onClick={() => setStep(2)} className="text-micro text-muted-foreground hover:text-foreground transition-colors duration-200 min-h-[44px]">← Back</button>
                  <span className="text-xs text-primary">{selectedService} · {selectedBranch}</span>
                </div>
                <p className="text-sm text-foreground/70 mb-6 font-light">How would you like to connect?</p>

                <div className="p-6 border border-border/50 bg-card/50 rounded-sm mb-6">
                  <p className="font-semibold text-foreground mb-1">{branch.label}</p>
                  <p className="text-sm text-muted-foreground mb-4">{branch.address}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <a
                      href={`https://wa.me/${branch.whatsapp}?text=Hi, I'd like to book a ${selectedService} installation at ${branch.label}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] text-white text-xs font-semibold tracking-wide rounded-sm hover:opacity-90 transition-opacity duration-200 min-h-[44px]"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp
                    </a>
                    <a
                      href={`tel:${branch.phone}`}
                      className="flex items-center justify-center gap-2 py-3 px-4 bg-primary text-primary-foreground text-xs font-semibold tracking-wide rounded-sm hover:bg-accent transition-colors duration-200 min-h-[44px]"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                      Call Now
                    </a>
                    <a
                      href={branch.map}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 px-4 border border-border/60 text-foreground/70 text-xs font-semibold tracking-wide rounded-sm hover:border-primary/50 hover:text-foreground transition-all duration-200 min-h-[44px]"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                      Directions
                    </a>
                  </div>
                </div>

                <button
                  onClick={reset}
                  className="text-micro text-muted-foreground hover:text-primary transition-colors duration-200 min-h-[44px]"
                >
                  Start over
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px line-gold" />
    </section>
  );
}