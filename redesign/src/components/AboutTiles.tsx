import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Medal, Star, Trophy } from 'lucide-react';
import { PROJECTS } from '../data/siteData';
import { RetryImg } from './RetryImg';

const EASE = [0.16, 1, 0.3, 1] as const;

/** Rolling-digit counter. Each digit is a 0-9 reel that scrolls to its value. */
const Odometer: React.FC<{ value: string; active: boolean; className?: string }> = ({ value, active, className = '' }) => (
  <span className={`inline-flex items-baseline leading-none ${className}`} style={{ fontFamily: 'var(--font-data)' }} aria-label={value}>
    {value.split('').map((ch, i) => {
      if (!/\d/.test(ch)) return <span key={i}>{ch}</span>;
      const d = Number(ch);
      return (
        <span key={i} className="inline-block h-[1em] overflow-hidden" aria-hidden="true">
          <motion.span
            className="block"
            initial={{ y: '0em' }}
            animate={{ y: active ? `${-d}em` : '0em' }}
            transition={{ duration: 1.6 + i * 0.15, ease: EASE }}
          >
            {Array.from({ length: 10 }).map((_, n) => (
              <span key={n} className="block h-[1em] leading-[1]">
                {n}
              </span>
            ))}
          </motion.span>
        </span>
      );
    })}
  </span>
);

const Tile: React.FC<{ className?: string; delay?: number; children: React.ReactNode }> = ({ className = '', delay = 0, children }) => (
  <motion.div
    className={`relative overflow-hidden bg-white border border-black/[0.08] p-7 sm:p-8 group transition-shadow duration-500 hover:shadow-[0_24px_60px_rgba(0,0,0,0.09)] ${className}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -4 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.9, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-[13px] uppercase tracking-[0.18em] text-[#6B6B6B]" style={{ fontFamily: 'var(--font-sans)' }}>
    {children}
  </div>
);

const PhotoRow: React.FC<{ images: string[]; reverse?: boolean }> = ({ images, reverse }) => (
  <div className="overflow-hidden">
    <div className={`marquee-track ${reverse ? 'reverse' : ''} gap-3`}>
      {[...images, ...images].map((src, i) => (
        <RetryImg
          key={i}
          src={src}
          alt=""
          loading="lazy"
          className="h-24 sm:h-28 w-36 sm:w-44 object-cover shrink-0"
        />
      ))}
    </div>
  </div>
);

export const AboutTiles: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const photos = PROJECTS.map((p) => p.heroImage);
  const half = Math.ceil(photos.length / 2);

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-5">
      {/* 400+ homes: big tile with two counter-scrolling photo rows */}
      <Tile className="lg:col-span-2 lg:row-span-2 flex flex-col justify-between min-h-[420px] !p-0">
        <div className="p-7 sm:p-8">
          <Label>Custom Estates Delivered</Label>
          <div className="mt-4 flex items-end gap-1 text-[#0A0A0A]">
            <Odometer value="400" active={inView} className="text-[112px] sm:text-[140px] font-semibold" />
            <span className="text-[72px] sm:text-[90px] font-semibold leading-none pb-1" style={{ fontFamily: 'var(--font-data)' }}>
              +
            </span>
          </div>
          <p className="mt-4 max-w-sm text-[16px] leading-relaxed text-[#3a3a3a]" style={{ fontFamily: 'var(--font-sans)' }}>
            More than 400 homes since 1982, from hillside estates to waterfront contemporaries.
          </p>
        </div>
        <div className="marquee-wrap flex flex-col gap-3 pb-6">
          <PhotoRow images={photos.slice(0, half)} />
          <PhotoRow images={photos.slice(half)} reverse />
        </div>
      </Tile>

      {/* 70+ years: ring */}
      <Tile delay={0.1} className="flex flex-col items-center justify-between text-center">
        <Label>Combined Experience</Label>
        <div className="relative my-6 w-40 h-40">
          <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
            <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="2" />
            <motion.circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="#0A0A0A"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 0.86 : 0 }}
              transition={{ duration: 2.2, ease: EASE }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="flex items-baseline text-[#0A0A0A]">
              <Odometer value="70" active={inView} className="text-6xl font-semibold" />
              <span className="text-4xl font-semibold" style={{ fontFamily: 'var(--font-data)' }}>+</span>
            </div>
            <span className="italic text-[17px] text-[#6B6B6B]" style={{ fontFamily: 'var(--font-data)' }}>years</span>
          </div>
        </div>
        <p className="text-[14px] text-[#6B6B6B]" style={{ fontFamily: 'var(--font-sans)' }}>
          Construction, finance and design under one roof
        </p>
      </Tile>

      {/* 26,000 SF: blueprint drawing */}
      <Tile delay={0.2} className="flex flex-col justify-between">
        <Label>Largest Residence Engineered</Label>
        <svg viewBox="0 0 200 120" className="w-full my-4" fill="none" stroke="#0A0A0A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {[
            'M10 10 H190 V110 H10 Z',
            'M10 45 H80 V110',
            'M80 45 H130 V10',
            'M130 60 H190',
            'M130 60 V110',
            'M40 45 V25 H60',
            'M150 60 V80 H170',
            'M10 78 H45',
          ].map((d, i) => (
            <motion.path
              key={d}
              d={d}
              initial={{ pathLength: 0, opacity: 0.2 }}
              animate={{ pathLength: inView ? 1 : 0, opacity: inView ? 1 : 0.2 }}
              transition={{ duration: 1.4, delay: 0.3 + i * 0.18, ease: EASE }}
            />
          ))}
          <motion.path
            d="M10 118 H190 M10 114 V122 M190 114 V122"
            stroke="#9A9A9A"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: inView ? 1 : 0 }}
            transition={{ duration: 1.2, delay: 2, ease: EASE }}
          />
        </svg>
        <div className="flex items-baseline gap-2 text-[#0A0A0A]">
          <span className="text-[44px] font-semibold leading-none" style={{ fontFamily: 'var(--font-data)' }}>26,000</span>
          <span className="italic text-[20px] text-[#6B6B6B]" style={{ fontFamily: 'var(--font-data)' }}>sq ft</span>
        </div>
      </Tile>

      {/* Honors + specialties */}
      <Tile delay={0.3} className="lg:col-span-2 flex flex-col justify-between gap-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <Label>National &amp; Regional Honors</Label>
            <div className="mt-3 flex items-baseline text-[#0A0A0A]">
              <Odometer value="20" active={inView} className="text-[80px] font-semibold" />
              <span className="text-[56px] font-semibold leading-none" style={{ fontFamily: 'var(--font-data)' }}>+</span>
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            {[Trophy, Award, Medal, Star].map((Icon, i) => (
              <motion.div
                key={i}
                className="w-11 h-11 border border-black/10 flex items-center justify-center text-[#0A0A0A]"
                initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
                animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.5 + i * 0.12 }}
              >
                <Icon className="w-5 h-5" />
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[13px] uppercase tracking-[0.18em] text-[#6B6B6B] mb-3" style={{ fontFamily: 'var(--font-sans)' }}>
            Known for Texas&rsquo;s most challenging lots
          </div>
          <div className="flex flex-wrap gap-2">
            {['Walk-out basements', 'Hillside sites', 'Pier & beam', 'Waterfront', 'Estate scale'].map((chip, i) => (
              <motion.span
                key={chip}
                className="px-4 py-1.5 bg-[#F5F3EF] text-[17px] italic text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors cursor-default"
                style={{ fontFamily: 'var(--font-data)' }}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + i * 0.09, ease: EASE }}
              >
                {chip}
              </motion.span>
            ))}
          </div>
        </div>
        <span
          className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white/70 to-transparent"
          style={{ animation: 'sheen 6s ease-in-out 2s infinite' }}
        />
      </Tile>
    </div>
  );
};
