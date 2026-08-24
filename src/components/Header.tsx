'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppImage from '@/components/ui/AppImage';
import LLumarLogo from '@/components/ui/LLumarLogo';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const { language, setLanguage, t, isArabic } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const menuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Build nav items from translations
  const navItems = [
    { label: t.nav.home, href: '/' },
    {
      label: t.nav.automotive,
      children: [
        { label: t.nav.automotive_items.windowTint, href: '/automotive/window-tint', desc: t.nav.automotive_items.windowTintDesc },
        { label: t.nav.automotive_items.ceramicTint, href: '/automotive/ceramic-tint', desc: t.nav.automotive_items.ceramicTintDesc },
        { label: t.nav.automotive_items.ppf, href: '/automotive/paint-protection-film', desc: t.nav.automotive_items.ppfDesc },
        { label: t.nav.automotive_items.formulaOne, href: '/automotive/formulaone', desc: t.nav.automotive_items.formulaOneDesc },
        { label: t.nav.automotive_items.windshield, href: '/automotive/windshield', desc: t.nav.automotive_items.windshieldDesc },
      ],
      megaImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1a76a361b-1768736886730.png",
      megaImageAlt: 'Premium LLumar automotive window tint on a luxury vehicle',
    },
    {
      label: t.nav.architectural,
      children: [
        { label: t.nav.architectural_items.residential, href: '/architectural/residential', desc: t.nav.architectural_items.residentialDesc },
        { label: t.nav.architectural_items.commercial, href: '/architectural/commercial', desc: t.nav.architectural_items.commercialDesc },
        { label: t.nav.architectural_items.safety, href: '/architectural/safety-security', desc: t.nav.architectural_items.safetyDesc },
        { label: t.nav.architectural_items.decorative, href: '/architectural/decorative', desc: t.nav.architectural_items.decorativeDesc },
        { label: t.nav.architectural_items.solarControl, href: '/architectural/solar-control', desc: t.nav.architectural_items.solarControlDesc },
      ],
      megaImage: "https://images.unsplash.com/photo-1724588846681-3cf43f15c8d2",
      megaImageAlt: 'Modern architectural interior with LLumar window film installed on large glass panels',
    },
    {
      label: t.nav.paintProtection,
      children: [
        { label: t.nav.ppf_items.overview, href: '/automotive/paint-protection-film', desc: t.nav.ppf_items.overviewDesc },
        { label: t.nav.ppf_items.gloss, href: '/automotive/ppf-gloss', desc: t.nav.ppf_items.glossDesc },
        { label: t.nav.ppf_items.matte, href: '/automotive/ppf-matte', desc: t.nav.ppf_items.matteDesc },
        { label: t.nav.ppf_items.coverage, href: '/automotive/ppf-coverage', desc: t.nav.ppf_items.coverageDesc },
      ],
      megaImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1bc49c649-1772066284873.png",
      megaImageAlt: 'Professional LLumar paint protection film installation on a vehicle hood',
    },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.gallery, href: '/gallery' },
    { label: t.nav.resources, href: '/resources' },
    { label: t.nav.contact, href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  const handleMenuEnter = (label: string) => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
    setActiveMenu(label);
  };
  const handleMenuLeave = () => {
    menuTimeout.current = setTimeout(() => setActiveMenu(null), 120);
  };

  const isTransparent = isHome && !scrolled;
  const headerBg = isTransparent
    ? 'bg-transparent' :'bg-white/98 backdrop-blur-xl border-b border-[#E0DBD5] shadow-[0_2px_20px_rgba(0,0,0,0.06)]';
  const navTextColor = isTransparent ? 'text-white/90 hover:text-white' : 'text-[#1A1A1A] hover:text-[#CC0000]';
  const topBarBg = isTransparent ? 'bg-black/40 backdrop-blur-sm' : 'bg-[#F5F0EA]';
  const topBarText = isTransparent ? 'text-white/60' : 'text-[#6B6560]';

  // Mega menu positioning: in RTL, flip to right-aligned
  const megaMenuAlign = isArabic ? 'right-1/2 translate-x-1/2' : 'left-1/2 -translate-x-1/2';

  return (
    <>
      {/* Top utility bar */}
      <div className={`hidden lg:flex items-center justify-between px-8 py-2 text-[10px] tracking-wider z-50 relative transition-all duration-500 ${topBarBg} ${topBarText}`}>
        <div className={`flex items-center gap-6 max-w-[1400px] mx-auto w-full ${isArabic ? 'flex-row-reverse' : ''}`}>
          <div className={`flex items-center gap-6 ${isArabic ? 'flex-row-reverse' : ''}`}>
            <a href="mailto:info@llumarkuwait.com" className={`flex items-center gap-1.5 transition-colors duration-200 ${isArabic ? 'flex-row-reverse' : ''} ${isTransparent ? 'hover:text-white' : 'hover:text-[#CC0000]'}`}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
              </svg>
              info@llumarkuwait.com
            </a>
            <span className="opacity-30">|</span>
            <span className={`flex items-center gap-1.5 ${isArabic ? 'flex-row-reverse' : ''}`}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
              {t.topBar.hours}
            </span>
          </div>
          <div className={`${isArabic ? 'mr-auto' : 'ml-auto'} flex items-center gap-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
            <a href="tel:+96565008585" className={`flex items-center gap-1.5 font-semibold transition-colors duration-200 ${isArabic ? 'flex-row-reverse' : ''} ${isTransparent ? 'hover:text-white' : 'hover:text-[#CC0000]'}`}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +965 6500 8585
            </a>
            <span className="opacity-30">|</span>
            <span>{t.topBar.hotline}</span>
            {/* Language switcher */}
            <span className="opacity-30">|</span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setLanguage('en')}
                className={`text-[10px] font-semibold tracking-wider transition-colors duration-200 px-1 ${language === 'en' ? (isTransparent ? 'text-white' : 'text-[#CC0000]') : (isTransparent ? 'text-white/40 hover:text-white/70' : 'text-[#9A9590] hover:text-[#1A1A1A]')}`}
              >
                EN
              </button>
              <span className="opacity-30 text-[10px]">|</span>
              <button
                onClick={() => setLanguage('ar')}
                className={`text-[10px] font-semibold tracking-wider transition-colors duration-200 px-1 ${language === 'ar' ? (isTransparent ? 'text-white' : 'text-[#CC0000]') : (isTransparent ? 'text-white/40 hover:text-white/70' : 'text-[#9A9590] hover:text-[#1A1A1A]')}`}
                style={{ fontFamily: 'system-ui, sans-serif' }}
              >
                عربي
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className={`fixed left-0 right-0 z-50 transition-all duration-500 ${isHome ? scrolled ? 'top-0' : 'top-0 lg:top-[33px]' : 'top-0'} ${headerBg}`}>
        <nav className={`flex items-center justify-between px-6 lg:px-10 py-4 max-w-[1400px] mx-auto ${isArabic ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 z-10">
            {isTransparent ? (
              <LLumarLogo height={38} variant="white" />
            ) : (
              <LLumarLogo height={38} variant="default" />
            )}
          </Link>

          {/* Desktop nav */}
          <div className={`hidden lg:flex items-center gap-7 ${isArabic ? 'flex-row-reverse' : ''}`}>
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children ? handleMenuEnter(item.label) : undefined}
                onMouseLeave={() => item.children ? handleMenuLeave() : undefined}
              >
                {item.href && !item.children ? (
                  <Link
                    href={item.href}
                    className={`text-[11px] font-medium tracking-[0.15em] uppercase transition-colors duration-200 flex items-center gap-1 ${isArabic ? 'tracking-normal' : ''} ${navTextColor} ${pathname === item.href ? isTransparent ? 'text-white' : 'text-[#CC0000]' : ''}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className={`text-[11px] font-medium tracking-[0.15em] uppercase transition-colors duration-200 flex items-center gap-1.5 ${isArabic ? 'tracking-normal flex-row-reverse' : ''} ${navTextColor}`}
                    onFocus={() => handleMenuEnter(item.label)}
                    onBlur={handleMenuLeave}
                  >
                    {item.label}
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${activeMenu === item.label ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                )}

                {/* Mega menu */}
                {item.children && (
                  <div
                    className={`absolute top-full ${megaMenuAlign} mt-5 w-[680px] bg-white border-t-2 border-[#CC0000] shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-250 ${activeMenu === item.label ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
                    onMouseEnter={() => handleMenuEnter(item.label)}
                    onMouseLeave={handleMenuLeave}
                    dir={isArabic ? 'rtl' : 'ltr'}
                  >
                    <div className={`flex ${isArabic ? 'flex-row-reverse' : ''}`}>
                      {/* Links column */}
                      <div className="flex-1 py-6 px-6">
                        <p className={`text-[9px] tracking-[0.4em] text-[#CC0000] uppercase font-semibold mb-4 ${isArabic ? 'tracking-normal text-right' : ''}`}>{item.label}</p>
                        <div className="flex flex-col gap-0">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className={`group flex items-start gap-3 py-3 border-b border-[#F0EDE8] last:border-0 hover:bg-[#FAFAF8] -mx-2 px-2 transition-colors duration-200 ${isArabic ? 'flex-row-reverse text-right' : ''}`}
                            >
                              <span className="w-1 h-1 bg-[#CC0000] rounded-full mt-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                              <div>
                                <span className="text-[12px] font-medium text-[#1A1A1A] group-hover:text-[#CC0000] transition-colors duration-200 block">{child.label}</span>
                                {child.desc && <span className="text-[11px] text-[#9A9590] mt-0.5 block">{child.desc}</span>}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      {/* Image panel */}
                      <div className="w-[220px] flex-shrink-0 relative overflow-hidden bg-[#1A1A1A]">
                        <AppImage
                          src={item.megaImage || 'https://llumarkuwait.com/wp-content/uploads/2023/05/WhatsApp-Image-2024-10-23-at-7.18.43-PM.jpeg'}
                          alt={item.megaImageAlt || `LLumar ${item.label} products`}
                          fill
                          className="object-cover opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className={`absolute bottom-4 ${isArabic ? 'right-4 left-4 text-right' : 'left-4 right-4'}`}>
                          <p className="text-[10px] tracking-[0.3em] text-white/60 uppercase mb-1">{t.nav.explore}</p>
                          <p className="text-sm font-display font-light text-white">{item.label}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`hidden lg:flex items-center gap-3 ${isArabic ? 'flex-row-reverse' : ''}`}>
            <a
              href="https://wa.me/96565008585"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-[11px] font-medium tracking-wider transition-colors duration-200 ${isArabic ? 'flex-row-reverse' : ''} ${isTransparent ? 'text-white/70 hover:text-white' : 'text-[#6B6560] hover:text-[#25D366]'}`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t.nav.whatsapp}
            </a>
            <Link
              href="/contact"
              className="text-[11px] font-semibold px-6 py-2.5 bg-[#CC0000] text-white tracking-[0.15em] uppercase hover:bg-[#A30000] transition-colors duration-300"
            >
              {t.nav.bookNow}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 z-10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <span className={`block w-6 h-[1.5px] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''} ${isTransparent && !mobileOpen ? 'bg-white' : 'bg-[#1A1A1A]'}`} />
            <span className={`block w-6 h-[1.5px] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''} ${isTransparent && !mobileOpen ? 'bg-white' : 'bg-[#1A1A1A]'}`} />
            <span className={`block w-6 h-[1.5px] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''} ${isTransparent && !mobileOpen ? 'bg-white' : 'bg-[#1A1A1A]'}`} />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#FAFAF8] flex flex-col transition-all duration-500 lg:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        dir={isArabic ? 'rtl' : 'ltr'}
      >
        <div className={`flex items-center justify-between px-6 py-4 border-b border-[#E0DBD5] ${isArabic ? 'flex-row-reverse' : ''}`}>
          <LLumarLogo height={32} variant="default" />
          <div className={`flex items-center gap-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
            {/* Mobile language switcher */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setLanguage('en')}
                className={`text-[10px] font-semibold tracking-wider px-1.5 py-0.5 transition-colors duration-200 ${language === 'en' ? 'text-[#CC0000] border-b border-[#CC0000]' : 'text-[#9A9590]'}`}
              >
                EN
              </button>
              <span className="text-[#E0DBD5] text-[10px]">|</span>
              <button
                onClick={() => setLanguage('ar')}
                className={`text-[10px] font-semibold px-1.5 py-0.5 transition-colors duration-200 ${language === 'ar' ? 'text-[#CC0000] border-b border-[#CC0000]' : 'text-[#9A9590]'}`}
                style={{ fontFamily: 'system-ui, sans-serif' }}
              >
                عربي
              </button>
            </div>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-[#1A1A1A]" aria-label="Close menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-[#E0DBD5]">
              {item.href && !item.children ? (
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between py-4 text-sm font-medium tracking-[0.1em] uppercase text-[#1A1A1A] ${isArabic ? 'flex-row-reverse text-right tracking-normal' : ''}`}
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className={`flex items-center justify-between w-full py-4 text-sm font-medium tracking-[0.1em] uppercase text-[#1A1A1A] ${isArabic ? 'flex-row-reverse text-right tracking-normal' : ''}`}
                  >
                    {item.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform duration-200 ${mobileExpanded === item.label ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {mobileExpanded === item.label && item.children && (
                    <div className={`pb-3 ${isArabic ? 'pr-4' : 'pl-4'}`}>
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center gap-2 py-2.5 text-sm text-[#6B6560] hover:text-[#CC0000] transition-colors duration-200 ${isArabic ? 'flex-row-reverse text-right' : ''}`}
                        >
                          <span className="w-1 h-1 bg-[#CC0000] rounded-full flex-shrink-0" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
        <div className="px-6 py-6 border-t border-[#E0DBD5] flex flex-col gap-3">
          <a
            href="https://wa.me/96565008585"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 py-3.5 border border-[#25D366] text-[#25D366] text-[11px] font-semibold tracking-[0.15em] uppercase ${isArabic ? 'flex-row-reverse' : ''}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t.nav.whatsapp}
          </a>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center py-3.5 bg-[#CC0000] text-white text-[11px] font-semibold tracking-[0.15em] uppercase"
          >
            {t.nav.bookNow}
          </Link>
          <div className={`text-center text-[10px] text-[#9A9590] tracking-wider mt-1 ${isArabic ? 'flex-row-reverse' : ''}`}>
            <a href="tel:+96565008585" className="hover:text-[#CC0000] transition-colors">+965 6500 8585</a>
            <span className="mx-2 opacity-40">·</span>
            <span>{t.topBar.hours}</span>
          </div>
        </div>
      </div>

      {/* WhatsApp floating button — refined, less dominant */}
      <a
        href="https://wa.me/96565008585"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-refined"
        aria-label="Chat on WhatsApp"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}