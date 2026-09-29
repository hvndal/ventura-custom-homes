import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onScrollToSection: (id: string) => void;
}

const HERO_IMAGES = [
  {
    url: "https://venturacustomhomes.com/wp-content/uploads/2024/02/1Front-Elevation-1.jpg",
    title: "The Beverly Drive Estate",
    location: "Highland Park, Dallas",
    year: "Architectural Showcase",
    sqft: "11,274 SQ FT"
  },
  {
    url: "https://venturacustomhomes.com/wp-content/uploads/2024/03/D5_A-1_20240229_053640-2.jpg",
    title: "Santa Barbara Modern",
    location: "The Preserve at Fields, Frisco",
    year: "SHM Architects Collaboration",
    sqft: "7,850 SQ FT"
  },
  {
    url: "https://venturacustomhomes.com/wp-content/uploads/2024/02/1520-Hidalgo-Ln-25-1.jpg",
    title: "Contemporary Waterfront Residence",
    location: "Lakes on Legacy, Frisco",
    year: "Walk-Out Basement Spec",
    sqft: "8,400 SQ FT"
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onScrollToSection }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = HERO_IMAGES[currentIdx];

  return (
    <section className="relative min-h-[96vh] flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-[#0d0e11]">
      {/* Background Architectural Slideshow */}
      {HERO_IMAGES.map((img, idx) => (
        <div
          key={img.url}
          className={`absolute inset-0 transition-opacity duration-1500 ease-out ${
            idx === currentIdx ? 'opacity-55 scale-100' : 'opacity-0 scale-105'
          } transform transition-transform duration-10000 pointer-events-none`}
        >
          <img
            src={img.url}
            alt={img.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Atmospheric Film Grain & Subtle Vignettes */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e11] via-transparent to-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0e11]/80 via-transparent to-[#0d0e11]/50 pointer-events-none" />

      {/* Hero Center Editorial Typography */}
      <div className="relative max-w-[1400px] w-full mx-auto px-6 sm:px-10 lg:px-12 my-auto z-10">
        <div className="max-w-4xl">
          {/* Overline */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#c5a880]" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#c5a880] font-light">
              Highland Park &bull; Preston Hollow &bull; The Preserve at Fields
            </span>
          </div>

          {/* Majestic Serif Headline */}
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-[#faf8f5] leading-[0.95] tracking-tight mb-8">
            Sanctuaries <br />
            <span className="italic font-normal text-[#c5a880]">for the Senses.</span>
          </h1>

          {/* Understated Editorial Description */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg font-light max-w-xl leading-relaxed mb-10 tracking-wide">
            Over seven decades of structural engineering rigor and bespoke architectural distinction. Renowned for mastering North Texas soils, complex hillside terrain, and iconic residences.
          </p>

          {/* Luxury Minimalist Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 sm:gap-8 pt-2">
            <button
              onClick={() => onScrollToSection('portfolio')}
              className="px-8 py-4 bg-[#faf8f5] hover:bg-[#c5a880] text-black text-[11px] tracking-[0.25em] uppercase font-medium transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 group"
            >
              <span>Explore Selected Works (20 Estates)</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => onScrollToSection('preserve')}
              className="px-8 py-4 border border-white/20 hover:border-[#c5a880] text-[#faf8f5] hover:text-[#c5a880] text-[11px] tracking-[0.25em] uppercase font-light transition-all duration-300 cursor-pointer text-center"
            >
              The Preserve at Fields
            </button>

            <button
              onClick={onOpenConsultation}
              className="text-[11px] tracking-[0.25em] uppercase text-[#c5a880] hover:text-white underline underline-offset-8 transition-colors cursor-pointer py-2 text-center"
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
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880]">Location</div>
              <div className="text-white mt-0.5">{current.location}</div>
            </div>
            <div className="h-6 w-[1px] bg-white/10" />
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880]">Featured Residence</div>
              <div className="text-white mt-0.5">{current.title}</div>
            </div>
            <div className="h-6 w-[1px] bg-white/10 hidden sm:block" />
            <div className="hidden sm:block">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880]">Scale</div>
              <div className="text-white mt-0.5 font-mono">{current.sqft}</div>
            </div>
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-mono mr-2">
              0{currentIdx + 1} / 0{HERO_IMAGES.length}
            </span>
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIdx(i)}
                className={`h-[1px] transition-all duration-500 cursor-pointer ${
                  i === currentIdx ? 'w-10 bg-[#c5a880]' : 'w-4 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
