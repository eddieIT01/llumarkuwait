'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppImage from '@/components/ui/AppImage';

const automotiveLinks = [
{ label: 'Paint Protection Film', href: '/automotive/paint-protection-film' },
{ label: 'Automotive Window Tint', href: '/automotive/window-tint' }];


const architecturalLinks = [
{ label: 'Residential & Commercial', href: '/architectural/residential-commercial' },
{ label: 'Decorative Films', href: '/architectural/decorative' },
{ label: 'Safety & Security', href: '/architectural/safety-security' }];


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [autoDropdown, setAutoDropdown] = useState(false);
  const [archDropdown, setArchDropdown] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {document.body.style.overflow = '';};
  }, [mobileOpen]);

  const navBg = isHome ?
  scrolled ?
  'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)]' :
  'bg-transparent' : 'bg-black/95 backdrop-blur-xl border-b border-white/10';

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:flex items-center justify-between px-8 py-2 bg-black border-b border-white/10 text-xs text-white/50 z-50 relative">
        <div className="flex items-center gap-6">
          <a href="mailto:info@llumarkuwait.com" className="flex items-center gap-1.5 hover:text-[#C9A84C] transition-colors duration-200">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
            </svg>
            info@llumarkuwait.com
          </a>
          <span className="text-white/20">|</span>
          <span className="flex items-center gap-1.5">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
            8:30 AM – 7:30 PM
          </span>
        </div>
        <a href="tel:+96565008585" className="flex items-center gap-1.5 hover:text-[#C9A84C] transition-colors duration-200 font-medium tracking-wider">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          +965 6500 8585
        </a>
      </div>
      {/* Main Nav */}
      <header className={`fixed left-0 right-0 z-50 transition-all duration-500 ${isHome ? scrolled ? 'top-0' : 'top-0 md:top-8' : 'top-0'} ${navBg}`}>
        <nav className="flex items-center justify-between px-6 md:px-10 py-4 max-w-[1400px] mx-auto">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <AppImage
              src="https://llumarkuwait.com/wp-content/uploads/2024/09/LLumar-logo-e1727115848481.png"
              alt="LLumar Kuwait — official exclusive distributor logo"
              width={130}
              height={44}
              className="h-9 w-auto object-contain brightness-0 invert"
              priority />

          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-xs font-medium tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-200">Home</Link>
            <Link href="/about" className="text-xs font-medium tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-200">About Us</Link>

            {/* Automotive Dropdown */}
            <div className="relative" onMouseEnter={() => setAutoDropdown(true)} onMouseLeave={() => setAutoDropdown(false)}>
              <button className="text-xs font-medium tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-1.5">
                Automotive
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${autoDropdown ? 'rotate-180' : ''}`}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className={`absolute top-full left-0 mt-4 w-56 bg-black border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-300 ${autoDropdown ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                {automotiveLinks?.map((link) =>
                <Link key={link?.label} href={link?.href} className="block px-5 py-3.5 text-xs tracking-wider text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200 border-b border-white/5 last:border-0 uppercase">
                    {link?.label}
                  </Link>
                )}
              </div>
            </div>

            {/* Architectural Dropdown */}
            <div className="relative" onMouseEnter={() => setArchDropdown(true)} onMouseLeave={() => setArchDropdown(false)}>
              <button className="text-xs font-medium tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-1.5">
                Architectural
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${archDropdown ? 'rotate-180' : ''}`}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className={`absolute top-full left-0 mt-4 w-60 bg-black border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-300 ${archDropdown ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                {architecturalLinks?.map((link) =>
                <Link key={link?.label} href={link?.href} className="block px-5 py-3.5 text-xs tracking-wider text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200 border-b border-white/5 last:border-0 uppercase">
                    {link?.label}
                  </Link>
                )}
              </div>
            </div>

            <Link href="/contact" className="text-xs font-medium tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-200">Contact Us</Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/#booking" className="text-xs font-semibold px-6 py-2.5 bg-[#C9A84C] text-black tracking-widest uppercase hover:bg-[#E8C96A] transition-colors duration-300">
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle mobile menu">
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </nav>
      </header>
      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-black flex flex-col pt-24 pb-10 px-8 transition-all duration-500 md:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col gap-0">
          {[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
          { label: '— Paint Protection Film', href: '/automotive/paint-protection-film' },
          { label: '— Automotive Window Tint', href: '/automotive/window-tint' },
          { label: '— Residential & Commercial', href: '/architectural/residential-commercial' },
          { label: '— Decorative Films', href: '/architectural/decorative' },
          { label: '— Safety & Security', href: '/architectural/safety-security' },
          { label: 'Contact Us', href: '/contact' }]?.
          map((item, i) =>
          <Link
            key={item?.label}
            href={item?.href}
            onClick={() => setMobileOpen(false)}
            className="py-4 border-b border-white/10 text-white/60 hover:text-white text-sm font-medium tracking-widest uppercase transition-colors duration-200"
            style={{ animationDelay: `${i * 40}ms` }}>

              {item?.label}
            </Link>
          )}
        </div>
        <div className="mt-8 flex flex-col gap-3">
          <a href="tel:+96565008585" className="flex items-center justify-center gap-2 py-4 border border-[#C9A84C]/40 text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">
            +965 6500 8585
          </a>
          <Link href="/#booking" onClick={() => setMobileOpen(false)} className="flex items-center justify-center py-4 bg-[#C9A84C] text-black text-xs font-semibold tracking-widest uppercase">
            Book Installation
          </Link>
        </div>
        <div className="mt-auto text-xs text-white/30 text-center tracking-wider">
          8:30 AM – 7:30 PM · info@llumarkuwait.com
        </div>
      </div>
    </>);

}