'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const branches = [
  {
    id: 'shuwaikh',
    name: 'Shuwaikh Showroom',
    area: 'Shuwaikh Industrial Area, Kuwait',
    arabic: 'معرض لومار — المنطقة الصناعية، الشويخ',
    phones: ['+965 566 17907', '+965 9771 4949', '+965 2491 5550', '+965 2492 5559'],
    whatsapp: '96556617907',
    maps: 'https://maps.app.goo.gl/V4aDScBpW8dYkC8H8',
  },
  {
    id: 'alrai',
    name: 'Al Rai Showroom',
    area: 'Al Ghazali Street, Al Rai, Kuwait',
    arabic: 'معرض لومار — شارع الغزالي، الري',
    phones: ['+965 6500 8585', '+965 6633 0880'],
    hotline: '1886660',
    whatsapp: '96565008585',
    maps: 'https://maps.app.goo.gl/VV6JvW3YLXCe8TGT6',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Automotive Film', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waMsg = encodeURIComponent(
      `Hello LLumar Kuwait,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\n${formData.message}`
    );
    window.open(`https://wa.me/96565008585?text=${waMsg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <main className="bg-[#FAFAF8] text-[#111111] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#FAFAF8]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <span className="section-label">Get In Touch</span>
          <h1 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            Contact<br />
            <span className="italic text-[#6B6560]">LLumar Kuwait</span>
          </h1>
          <p className="mt-6 text-sm text-[#6B6560] max-w-[480px] leading-relaxed">
            Two showrooms across Kuwait. Visit us, call us, or send a message — we're here to help with any enquiry.
          </p>
        </div>
      </section>

      {/* Quick contact */}
      <section className="bg-[#F5F0EA] py-8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-4 items-center">
            <a href="https://wa.me/96565008585" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white text-[11px] font-semibold tracking-wider uppercase hover:bg-[#1DA851] transition-colors duration-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <a href="tel:+96565008585" className="flex items-center gap-2 px-5 py-3 border border-[#1A1A1A] text-[#1A1A1A] text-[11px] font-semibold tracking-wider uppercase hover:bg-[#1A1A1A] hover:text-white transition-all duration-300">
              +965 6500 8585
            </a>
            <a href="tel:1886660" className="flex items-center gap-2 px-5 py-3 border border-[#E0DBD5] text-[#6B6560] text-[11px] font-semibold tracking-wider uppercase hover:border-[#1A1A1A] hover:text-[#1A1A1A] transition-all duration-300">
              Hotline: 1886660
            </a>
            <a href="mailto:info@llumarkuwait.com" className="flex items-center gap-2 px-5 py-3 border border-[#E0DBD5] text-[#6B6560] text-[11px] font-semibold tracking-wider uppercase hover:border-[#1A1A1A] hover:text-[#1A1A1A] transition-all duration-300">
              info@llumarkuwait.com
            </a>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="bg-[#FAFAF8] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <span className="section-label">Our Showrooms</span>
          <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-12" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Two Locations<br />
            <span className="italic text-[#6B6560]">Across Kuwait</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#E0DBD5]">
            {branches.map((branch) => (
              <div key={branch.id} className="bg-[#FAFAF8] p-8 lg:p-10 hover:bg-white transition-colors duration-300">
                <div className="text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-4">Showroom</div>
                <h3 className="text-2xl font-display font-light text-[#1A1A1A] mb-1">{branch.name}</h3>
                <p className="text-sm text-[#6B6560] mb-1">{branch.area}</p>
                <p className="text-xs text-[#9A9590] mb-6">{branch.arabic}</p>
                <div className="flex flex-col gap-2 mb-6">
                  {branch.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="text-sm text-[#1A1A1A] hover:text-[#CC0000] transition-colors duration-200 flex items-center gap-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-[#CC0000]">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      {phone}
                    </a>
                  ))}
                  {branch.hotline && (
                    <a href={`tel:${branch.hotline}`} className="text-sm text-[#1A1A1A] hover:text-[#CC0000] transition-colors duration-200">
                      Hotline: {branch.hotline}
                    </a>
                  )}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={`https://wa.me/${branch.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 border border-[#25D366] text-[#25D366] text-[11px] font-semibold tracking-wider uppercase hover:bg-[#25D366] hover:text-white transition-all duration-300">
                    WhatsApp
                  </a>
                  <a href={branch.maps} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 border border-[#E0DBD5] text-[#6B6560] text-[11px] font-semibold tracking-wider uppercase hover:border-[#1A1A1A] hover:text-[#1A1A1A] transition-all duration-300">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                    Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#F5F0EA] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="section-label">Send a Message</span>
              <h2 className="mt-3 font-display font-light text-[#1A1A1A] leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Get in Touch
              </h2>
              <p className="text-sm text-[#6B6560] leading-relaxed mb-8">
                Fill out the form and we'll respond via WhatsApp. For immediate assistance, call or WhatsApp us directly.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm text-[#6B6560]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#CC0000]">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                  8:30 AM – 7:30 PM
                </div>
                <a href="mailto:info@llumarkuwait.com" className="flex items-center gap-3 text-sm text-[#6B6560] hover:text-[#CC0000] transition-colors duration-200">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#CC0000]">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                  info@llumarkuwait.com
                </a>
              </div>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center border border-[#E0DBD5] p-12 text-center bg-white">
                <div className="w-12 h-12 border border-[#CC0000] flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CC0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-light text-[#1A1A1A] mb-2">Message Sent</h3>
                <p className="text-sm text-[#6B6560]">We'll respond via WhatsApp shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-[10px] tracking-widest text-[#9A9590] uppercase block mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-[#E0DBD5] px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#C0BBB5] focus:outline-none focus:border-[#CC0000] transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-widest text-[#9A9590] uppercase block mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-[#E0DBD5] px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#C0BBB5] focus:outline-none focus:border-[#CC0000] transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-widest text-[#9A9590] uppercase block mb-2">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white border border-[#E0DBD5] px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#CC0000] transition-colors duration-200"
                  >
                    <option value="Automotive Film">Automotive Film</option>
                    <option value="Paint Protection Film">Paint Protection Film</option>
                    <option value="Architectural Film">Architectural Film</option>
                    <option value="Safety & Security Film">Safety & Security Film</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] tracking-widest text-[#9A9590] uppercase block mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-white border border-[#E0DBD5] px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#C0BBB5] focus:outline-none focus:border-[#CC0000] transition-colors duration-200 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#CC0000] text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#A30000] transition-colors duration-300 mt-2"
                >
                  Send via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
