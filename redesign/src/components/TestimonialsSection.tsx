import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { PROJECTS, TESTIMONIALS } from '../data/siteData';
import { ShaderBackground } from './ShaderBackground';

const INTERVAL_MS = 8000;

export const TestimonialsSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const count = TESTIMONIALS.length;

  const go = (dir: 1 | -1) => setActiveIdx((c) => (c + dir + count) % count);

  useEffect(() => {
    const timer = setTimeout(() => setActiveIdx((c) => (c + 1) % count), INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [activeIdx, count]);

  const active = TESTIMONIALS[activeIdx];

  const photo = useMemo(() => {
    const match = PROJECTS.find(
      (p) => active.project && (p.name === active.project || active.project.includes(p.name)),
    );
    return match ?? PROJECTS[activeIdx % PROJECTS.length];
  }, [active, activeIdx]);

  return (
    <section id="testimonials" className="relative overflow-hidden py-28 md:py-40">
      <ShaderBackground className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="mb-14 md:mb-20">
          <p className="eyebrow mb-4">Client Stories</p>
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#0A0A0A]">In Their Words</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Quote */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative min-h-[360px] sm:min-h-[320px]">
              <span
                className="absolute -top-10 -left-2 text-[9rem] leading-none text-black/[0.07] select-none"
                style={{ fontFamily: 'var(--font-data)' }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex gap-1 mb-6" aria-label={`${active.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.round(active.rating) ? 'fill-[#0A0A0A] text-[#0A0A0A]' : 'text-black/20'}`}
                      />
                    ))}
                  </div>
                  <blockquote
                    className="text-[28px] sm:text-4xl lg:text-[44px] italic font-medium text-[#0A0A0A] leading-[1.22]"
                    style={{ fontFamily: 'var(--font-data)' }}
                  >
                    {active.quote}
                  </blockquote>
                  <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span className="text-[22px] font-semibold text-[#0A0A0A]" style={{ fontFamily: 'var(--font-data)' }}>
                      {active.clientName}
                    </span>
                    <span className="h-4 w-px bg-black/20" />
                    <span className="text-[15px] text-[#6B6B6B]" style={{ fontFamily: 'var(--font-sans)' }}>
                      {active.location}
                      {active.year ? ` · ${active.year}` : ''}
                    </span>
                  </div>
                  <span
                    className="mt-3 inline-block text-[11px] uppercase tracking-[0.18em] text-[#9A9A9A]"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Demo testimonial
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-10 flex items-center gap-5">
              <button
                onClick={() => go(-1)}
                className="w-12 h-12 border border-black/20 bg-white/70 backdrop-blur hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A] transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Previous story"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => go(1)}
                className="w-12 h-12 border border-black/20 bg-white/70 backdrop-blur hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A] transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Next story"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex-1 flex gap-2 ml-2">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveIdx(i)}
                    className="group flex-1 py-3 cursor-pointer"
                    aria-label={`Show story from ${t.clientName}`}
                  >
                    <span className="block h-[2px] w-full bg-black/15 overflow-hidden">
                      {i === activeIdx ? (
                        <motion.span
                          key={activeIdx}
                          className="block h-full bg-[#0A0A0A] origin-left"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: INTERVAL_MS / 1000, ease: 'linear' }}
                        />
                      ) : (
                        <span
                          className={`block h-full bg-[#0A0A0A] origin-left transition-transform duration-500 ${
                            i < activeIdx ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
                          }`}
                        />
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Home photo */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative bg-white p-3 shadow-[0_30px_80px_rgba(0,0,0,0.12)] max-w-md mx-auto lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#F5F3EF]">
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={photo.id}
                    src={photo.heroImage}
                    alt={photo.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.12 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  />
                </AnimatePresence>
              </div>
              <div className="pt-4 pb-1 px-1 flex items-baseline justify-between gap-4">
                <span className="text-2xl font-bold uppercase text-[#0A0A0A]" style={{ fontFamily: 'var(--font-display)' }}>
                  {photo.name}
                </span>
                <span className="text-[15px] italic text-[#6B6B6B]" style={{ fontFamily: 'var(--font-data)' }}>
                  {photo.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
