import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data/siteData';

export const TestimonialsSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => {
    setActiveIdx((curr) => (curr === 0 ? TESTIMONIALS.length - 1 : curr - 1));
  };

  const next = () => {
    setActiveIdx((curr) => (curr === TESTIMONIALS.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((curr) => (curr === TESTIMONIALS.length - 1 ? 0 : curr + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const active = TESTIMONIALS[activeIdx];
  const currentNum = String(activeIdx + 1).padStart(2, '0');
  const totalNum = String(TESTIMONIALS.length).padStart(2, '0');

  return (
    <section id="testimonials" className="bg-[#F5F3EF] w-full py-32 md:py-40">
      <div className="w-16 h-[1px] bg-[#0A0A0A] mx-auto mb-16"></div>
      
      <div className="relative min-h-[400px] flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center w-full"
          >
            <blockquote 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic font-light text-[#0A0A0A] text-center max-w-5xl mx-auto leading-[1.3] px-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              "{active.quote}"
            </blockquote>
            
            <div className="mt-12 flex flex-col items-center text-center">
              <div 
                className="text-sm font-medium text-[#0A0A0A] uppercase tracking-[0.15em]"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                [DEMO] {active.clientName}
              </div>
              <div 
                className="text-xs text-[#9A9A9A] mt-1"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {active.location}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="text-xs text-[#9A9A9A] hover:text-[#0A0A0A] transition-colors cursor-pointer"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            &larr; Prev
          </button>
          <span 
            className="text-[#0A0A0A] tracking-widest text-sm"
            style={{ fontFamily: 'var(--font-data)' }}
          >
            {currentNum} / {totalNum}
          </span>
          <button
            onClick={next}
            className="text-xs text-[#9A9A9A] hover:text-[#0A0A0A] transition-colors cursor-pointer"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};
