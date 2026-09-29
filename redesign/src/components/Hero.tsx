import React from 'react';

interface HeroProps {
  onOpenConsultation: () => void;
  onScrollToSection: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToSection }) => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Full-bleed cinematic video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/ventura_stock_hero_1080p.mp4"
      />

      {/* Subtle bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

      {/* Bottom-left wordmark — only branding element */}
      <div className="absolute bottom-12 left-6 sm:left-12 lg:left-16 z-10">
        <div
          className="text-white/90 text-[11px] tracking-[0.3em] uppercase font-light"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Dallas &middot; Highland Park &middot; Frisco
        </div>
      </div>

      {/* Scroll indicator — right side */}
      <button
        onClick={() => onScrollToSection('portfolio')}
        className="absolute bottom-12 right-6 sm:right-12 lg:right-16 z-10 flex flex-col items-center gap-3 cursor-pointer group"
        aria-label="Scroll to explore"
      >
        <span
          className="text-white/50 text-[10px] tracking-[0.3em] uppercase group-hover:text-white/80 transition-colors"
          style={{ fontFamily: 'var(--font-sans)', writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-white animate-bounce" />
        </div>
      </button>
    </section>
  );
};
