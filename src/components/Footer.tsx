import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 mb-12">
          {/* Left */}
          <div className="flex flex-col gap-5 max-w-xs">
            <AppImage
              src="https://llumarkuwait.com/wp-content/uploads/2024/09/LLumar-logo-e1727115848481.png"
              alt="LLumar Kuwait official logo"
              width={120}
              height={40}
              className="h-8 w-auto object-contain brightness-0 invert opacity-80" />

            <p className="text-sm text-white/40 leading-relaxed">
              Kuwait's exclusive LLumar distributor since 2000. The leader in window film installation for automotive, architectural, and protective applications.
            </p>
            <div className="flex items-center gap-3 mt-1">
              <a href="https://www.facebook.com/llumarkuwaitofficial" target="_blank" rel="noopener noreferrer" aria-label="LLumar Kuwait Facebook" className="text-white/30 hover:text-[#C9A84C] transition-colors duration-200 p-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://twitter.com/llumar_kuwait" target="_blank" rel="noopener noreferrer" aria-label="LLumar Kuwait Twitter" className="text-white/30 hover:text-[#C9A84C] transition-colors duration-200 p-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LLumar Kuwait LinkedIn" className="text-white/30 hover:text-[#C9A84C] transition-colors duration-200 p-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold text-[#C9A84C] mb-2 tracking-widest uppercase">Automotive</p>
              <Link href="/automotive/paint-protection-film" className="text-sm text-white/40 hover:text-white transition-colors duration-200">Paint Protection Film</Link>
              <Link href="/automotive/window-tint" className="text-sm text-white/40 hover:text-white transition-colors duration-200">Automotive Window Tint</Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold text-[#C9A84C] mb-2 tracking-widest uppercase">Architectural</p>
              <Link href="/architectural/residential-commercial" className="text-sm text-white/40 hover:text-white transition-colors duration-200">Residential & Commercial</Link>
              <Link href="/architectural/decorative" className="text-sm text-white/40 hover:text-white transition-colors duration-200">Decorative Films</Link>
              <Link href="/architectural/safety-security" className="text-sm text-white/40 hover:text-white transition-colors duration-200">Safety & Security</Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold text-[#C9A84C] mb-2 tracking-widest uppercase">Shuwaikh Branch</p>
              <p className="text-xs text-white/30 leading-relaxed">Shuwaikh Industrial Area, Kuwait</p>
              <a href="tel:+96556617907" className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors duration-200">+965 566 17907</a>
              <a href="tel:+96597714949" className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors duration-200">+965 9771 4949</a>
              <a href="tel:+96524915550" className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors duration-200">+965 2491 5550</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold text-[#C9A84C] mb-2 tracking-widest uppercase">Al Rai Branch</p>
              <p className="text-xs text-white/30 leading-relaxed">Al Ghazali Street, Al Rai</p>
              <a href="tel:+96565008585" className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors duration-200">+965 6500 8585</a>
              <a href="tel:+96566330880" className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors duration-200">+965 6633 0880</a>
              <a href="tel:+96518866660" className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors duration-200">Hotline: 1886660</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25 tracking-wider">© 2024 LLumar Kuwait. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-white/25">
            <Link href="/about" className="hover:text-white/60 transition-colors duration-200 tracking-wider">About Us</Link>
            <Link href="/contact" className="hover:text-white/60 transition-colors duration-200 tracking-wider">Contact Us</Link>
            <Link href="/#booking" className="hover:text-[#C9A84C] transition-colors duration-200 tracking-wider">Book Now</Link>
          </div>
        </div>
      </div>
    </footer>);

}