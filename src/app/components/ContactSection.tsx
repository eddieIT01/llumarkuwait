import React from 'react';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section className="relative bg-black border-t border-white/10 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 to-black pointer-events-none" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        {/* CTA Banner */}
        <div className="border border-white/10 p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
          <div>
            <span className="text-[10px] tracking-[0.5em] text-[#C9A84C] uppercase font-medium">LLumar Sun Protection</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-light text-white leading-tight">
              Heat-rejecting power and<br />
              <span className="italic text-white/60">the exterior protection you need.</span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 bg-[#C9A84C] text-black text-xs font-semibold tracking-widest uppercase px-8 py-4 hover:bg-[#E8C96A] transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Quick contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          <div className="bg-black p-8">
            <div className="text-[10px] tracking-[0.4em] text-[#C9A84C] uppercase font-medium mb-4">Shuwaikh Branch</div>
            <p className="text-sm text-white/50 mb-4">Shuwaikh Industrial Area, Kuwait</p>
            <div className="flex flex-col gap-2">
              <a href="tel:+96556617907" className="text-sm text-white/60 hover:text-[#C9A84C] transition-colors duration-200">+965 566 17907</a>
              <a href="tel:+96597714949" className="text-sm text-white/60 hover:text-[#C9A84C] transition-colors duration-200">+965 9771 4949</a>
            </div>
            <a
              href="https://wa.me/96556617907"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs text-[#25D366] tracking-widest uppercase"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
          <div className="bg-black p-8">
            <div className="text-[10px] tracking-[0.4em] text-[#C9A84C] uppercase font-medium mb-4">Al Rai Branch</div>
            <p className="text-sm text-white/50 mb-4">Al Ghazali Street, Al Rai</p>
            <div className="flex flex-col gap-2">
              <a href="tel:+96565008585" className="text-sm text-white/60 hover:text-[#C9A84C] transition-colors duration-200">+965 6500 8585</a>
              <a href="tel:+96566330880" className="text-sm text-white/60 hover:text-[#C9A84C] transition-colors duration-200">+965 6633 0880</a>
              <a href="tel:+96518866660" className="text-sm text-white/60 hover:text-[#C9A84C] transition-colors duration-200">Hotline: 1886660</a>
            </div>
            <a
              href="https://wa.me/96565008585"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs text-[#25D366] tracking-widest uppercase"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}