import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/siteData';

export const TestimonialsSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => {
    setActiveIdx((curr) => (curr === 0 ? TESTIMONIALS.length - 1 : curr - 1));
  };

  const next = () => {
    setActiveIdx((curr) => (curr === TESTIMONIALS.length - 1 ? 0 : curr + 1));
  };

  const active = TESTIMONIALS[activeIdx];

  return (
    <section id="testimonials" className="py-28 bg-[#0d0e11] border-t border-white/[0.06] relative">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#c5a880]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#c5a880] font-light">
              Client & Homeowner Correspondence
            </span>
            <span className="w-6 h-[1px] bg-[#c5a880]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#faf8f5] tracking-tight">
            Built on <span className="italic text-[#c5a880]">Generations of Trust</span>
          </h2>
        </div>

        {/* Big Editorial Quote Frame */}
        <div className="relative py-12 px-6 sm:px-16 border-y border-white/[0.08] text-center">
          <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#faf8f5] font-light italic leading-[1.3] max-w-4xl mx-auto">
            "{active.quote}"
          </blockquote>

          {/* Homeowner Attribution */}
          <div className="mt-10 flex flex-col items-center">
            <div className="font-serif text-xl text-white font-normal">
              {active.clientName}
            </div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#c5a880] font-light mt-1">
              {active.location} &bull; {active.project}
            </div>
          </div>

          {/* Minimalist Switcher Arrows */}
          <div className="mt-12 flex items-center justify-center gap-8">
            <button
              onClick={prev}
              className="text-xs uppercase tracking-[0.25em] text-slate-500 hover:text-white transition-colors cursor-pointer"
            >
              &larr; Previous
            </button>
            <span className="font-mono text-[11px] text-[#c5a880]">
              0{activeIdx + 1} / 0{TESTIMONIALS.length}
            </span>
            <button
              onClick={next}
              className="text-xs uppercase tracking-[0.25em] text-slate-500 hover:text-white transition-colors cursor-pointer"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
