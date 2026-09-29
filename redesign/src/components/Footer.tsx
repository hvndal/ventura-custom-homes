import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white py-16 px-6 sm:px-12 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div 
            className="text-3xl font-bold tracking-[0.15em]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            VENTURA
          </div>
          <div className="flex gap-8" style={{ fontFamily: 'var(--font-sans)' }}>
            <a href="#about" className="text-xs text-white/50 hover:text-white uppercase tracking-[0.1em] transition-colors">
              About Us
            </a>
            <a href="#portfolio" className="text-xs text-white/50 hover:text-white uppercase tracking-[0.1em] transition-colors">
              Works
            </a>
            <a href="#contact" className="text-xs text-white/50 hover:text-white uppercase tracking-[0.1em] transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-white/30" style={{ fontFamily: 'var(--font-sans)' }}>
            © 2024 Ventura Custom Homes. All rights reserved.
          </div>
          <div className="text-xs text-white/30" style={{ fontFamily: 'var(--font-sans)' }}>
            Dallas · Highland Park · Frisco
          </div>
          <div className="text-xs text-white/30" style={{ fontFamily: 'var(--font-sans)' }}>
            Web Design by <a href="https://mander.tech" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">mander.tech</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
