import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onScrollToSection: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onScrollToSection }) => {
  return (
    <section className="relative min-h-[96vh] flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-[#0d0e11]">
      {/* Background Architectural Video */}
      <div className="absolute inset-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-70"
          src="/ventura_stock_hero_1080p.mp4"
        />
      </div>

      {/* Atmospheric Film Grain & Subtle Vignettes */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-black/70 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c10]/90 via-transparent to-[#0b0c10]/40 pointer-events-none" />

      {/* Hero Center Editorial Typography */}
      <div className="relative max-w-[1400px] w-full mx-auto px-6 sm:px-10 lg:px-12 my-auto z-10">
        <div className="max-w-4xl">
          {/* Overline */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-12 h-[1px] bg-[#d4af37]" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#d4af37] font-light">
              Highland Park &bull; Preston Hollow &bull; The Preserve at Fields
            </span>
          </div>

          {/* Majestic Serif Headline */}
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-[#faf8f5] leading-[1.05] tracking-tight mb-8">
            Texas Heritage, <br />
            <span className="italic font-normal text-[#d4af37]">Masterfully Realized.</span>
          </h1>

          {/* Understated Editorial Description */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg font-light max-w-xl leading-relaxed mb-12 tracking-wide border-l border-[#d4af37]/30 pl-6">
            Over seven decades of structural engineering rigor and bespoke architectural distinction. We craft enduring sanctuaries deeply rooted in the North Texas landscape.
          </p>

          {/* Luxury Minimalist Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 sm:gap-8 pt-2">
            <button
              onClick={() => onScrollToSection('portfolio')}
              className="px-8 py-4 bg-[#faf8f5] hover:bg-[#d4af37] text-[#0b0c10] text-[11px] tracking-[0.25em] uppercase font-semibold transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 group"
            >
              <span>Explore Selected Works</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => onScrollToSection('preserve')}
              className="px-8 py-4 border border-white/20 hover:border-[#d4af37] text-[#faf8f5] hover:text-[#d4af37] text-[11px] tracking-[0.25em] uppercase font-light transition-all duration-300 cursor-pointer text-center bg-black/20 backdrop-blur-sm"
            >
              The Preserve at Fields
            </button>

            <button
              onClick={onOpenConsultation}
              className="text-[11px] tracking-[0.25em] uppercase text-[#d4af37] hover:text-white underline underline-offset-8 transition-colors cursor-pointer py-2 text-center"
            >
              Private Consultation &bull; Schedule
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Monograph Info Bar */}
      <div className="relative max-w-[1400px] w-full mx-auto px-6 sm:px-10 lg:px-12 z-10 pt-10">
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6 text-xs text-slate-400 font-light tracking-wider">
          <div className="flex items-center gap-8">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">Featured</div>
              <div className="text-white mt-1">Ventura Custom Homes Film</div>
            </div>
            <div className="h-6 w-[1px] bg-white/10" />
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">Director</div>
              <div className="text-white mt-1">Mander.tech Studio</div>
            </div>
            <div className="h-6 w-[1px] bg-white/10 hidden sm:block" />
            <div className="hidden sm:block">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">Quality</div>
              <div className="text-white mt-1 font-mono">1080p Master</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

