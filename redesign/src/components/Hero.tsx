import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenConsultation: () => void;
  onScrollToSection: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToSection }) => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Full-bleed cinematic 1080p video with subtle initial scale settle */}
      <motion.video
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/ventura_stock_hero_1080p.mp4"
      />

      {/* Subtle bottom & top vignettes for logo & HUD legibility */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/45 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/65 via-black/20 to-transparent pointer-events-none" />

      {/* Bottom-left architectural enclave strip with staggered reveal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-10 sm:bottom-12 left-6 sm:left-12 lg:left-16 z-10 flex flex-col gap-2"
      >
        <div className="flex items-center gap-3">
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-8 h-[1px] bg-white/70 origin-left"
          />
          <span
            className="text-white/60 text-[10px] tracking-[0.28em] uppercase"
            style={{ fontFamily: 'var(--font-data)' }}
          >
            32.8335&deg; N &middot; 96.8016&deg; W &mdash; EST. 1975
          </span>
        </div>
        <div
          className="text-white/95 text-[11px] sm:text-xs tracking-[0.32em] uppercase font-light"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Dallas &middot; Highland Park &middot; Frisco
        </div>
      </motion.div>

      {/* Scroll indicator — right side with fluid animated laser line */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => onScrollToSection('about')}
        className="absolute bottom-10 sm:bottom-12 right-6 sm:right-12 lg:right-16 z-10 flex flex-col items-center gap-3 cursor-pointer group"
        aria-label="Scroll to explore"
      >
        <span
          className="text-white/60 text-[10px] tracking-[0.3em] uppercase group-hover:text-white transition-colors"
          style={{ fontFamily: 'var(--font-sans)', writingMode: 'vertical-rl' }}
        >
          Explore
        </span>
        <div className="w-[1px] h-14 bg-white/25 relative overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '250%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-1/2 bg-white"
          />
        </div>
      </motion.button>
    </section>
  );
};
