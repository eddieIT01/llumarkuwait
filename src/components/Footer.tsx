import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const footerLinks = {
  automotive: [
  { label: 'Window Tint', href: '/automotive/window-tint' },
  { label: 'Ceramic Tint', href: '/automotive/ceramic-tint' },
  { label: 'Paint Protection Film', href: '/automotive/paint-protection-film' },
  { label: 'FormulaOne by LLumar', href: '/automotive/formulaone' },
  { label: 'Windshield Protection', href: '/automotive/windshield' }],

  architectural: [
  { label: 'Residential', href: '/architectural/residential' },
  { label: 'Commercial', href: '/architectural/commercial' },
  { label: 'Safety & Security', href: '/architectural/safety-security' },
  { label: 'Decorative & Privacy', href: '/architectural/decorative' },
  { label: 'Solar Control', href: '/architectural/solar-control' }],

  company: [
  { label: 'About LLumar Kuwait', href: '/about' },
  { label: 'Gallery & Projects', href: '/gallery' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact Us', href: '/contact' }]

};

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 mb-12">
          {/* Brand column */}
          <div>
            <AppImage
              src="https://llumarkuwait.com/wp-content/uploads/2024/09/LLumar-logo-e1727115848481.png"
              alt="LLumar Kuwait official logo"
              width={130}
              height={44}
              className="h-9 w-auto object-contain brightness-0 invert mb-5" />

            <p className="text-sm text-white/45 leading-relaxed mb-6 max-w-[240px]">
              Kuwait's exclusive LLumar distributor since 2000. The standard for window film installation in Kuwait.
            </p>
            <div className="flex items-center gap-1">
              <a href="https://www.facebook.com/llumarkuwaitofficial" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 text-white/30 hover:text-white transition-colors duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="https://twitter.com/llumar_kuwait" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="p-2 text-white/30 hover:text-white transition-colors duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 text-white/30 hover:text-white transition-colors duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
            </div>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-4">Automotive</p>
              <div className="flex flex-col gap-2.5">
                {footerLinks?.automotive?.map((l) =>
                <Link key={l?.label} href={l?.href} className="text-sm text-white/40 hover:text-white transition-colors duration-200">{l?.label}</Link>
                )}
              </div>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-4">Architectural</p>
              <div className="flex flex-col gap-2.5">
                {footerLinks?.architectural?.map((l) =>
                <Link key={l?.label} href={l?.href} className="text-sm text-white/40 hover:text-white transition-colors duration-200">{l?.label}</Link>
                )}
              </div>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-4">Company</p>
              <div className="flex flex-col gap-2.5">
                {footerLinks?.company?.map((l) =>
                <Link key={l?.label} href={l?.href} className="text-sm text-white/40 hover:text-white transition-colors duration-200">{l?.label}</Link>
                )}
              </div>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-4">Contact</p>
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-[10px] text-white/25 tracking-wider uppercase mb-1">Shuwaikh</p>
                  <a href="tel:+96556617907" className="text-sm text-white/40 hover:text-white transition-colors duration-200 block">+965 566 17907</a>
                  <a href="tel:+96597714949" className="text-sm text-white/40 hover:text-white transition-colors duration-200 block">+965 9771 4949</a>
                </div>
                <div>
                  <p className="text-[10px] text-white/25 tracking-wider uppercase mb-1">Al Rai</p>
                  <a href="tel:+96565008585" className="text-sm text-white/40 hover:text-white transition-colors duration-200 block">+965 6500 8585</a>
                  <a href="tel:1886660" className="text-sm text-white/40 hover:text-white transition-colors duration-200 block">Hotline: 1886660</a>
                </div>
                <a href="mailto:info@llumarkuwait.com" className="text-sm text-white/40 hover:text-[#CC0000] transition-colors duration-200">info@llumarkuwait.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/25 tracking-wider">© 2025 LLumar Kuwait. All rights reserved. Exclusive distributor of LLumar® films in Kuwait.</p>
          <div className="flex items-center gap-1">
            <AppImage
              src="https://llumar.com/content/dam/eastman/performance-films/llumar/imagery/LL_Symbol_FullColor_RGB.png"
              alt="LLumar brand symbol"
              width={20}
              height={20}
              className="h-4 w-auto object-contain opacity-30" />

            <span className="text-[10px] text-white/20 tracking-wider ml-1">An Eastman Performance Films brand</span>
          </div>
        </div>
      </div>
    </footer>);

}