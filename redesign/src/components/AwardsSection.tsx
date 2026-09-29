import React from 'react';
import { AWARDS } from '../data/siteData';

export const AwardsSection: React.FC = () => {
  return (
    <section id="awards" className="py-28 bg-[#0d0e11] border-t border-white/[0.06] relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#c5a880]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#c5a880] font-light">
              Critical Acclaim & Distinctions
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#faf8f5] tracking-tight">
            Over Twenty <span className="italic text-[#c5a880]">Industry Honors</span>
          </h2>
          <p className="mt-4 text-slate-400 font-light text-sm sm:text-base leading-relaxed">
            Celebrated by the Wall Street Journal, Parade of Homes, Dallas Builders Association, and national design publications for architectural innovation.
          </p>
        </div>

        {/* Minimalist Table / Ledger Layout */}
        <div className="border-t border-white/[0.1] divide-y divide-white/[0.06]">
          {AWARDS.map((award, i) => (
            <div
              key={i}
              className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-white/[0.01] transition-colors px-2"
            >
              <div className="md:w-1/2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#c5a880] mr-4">
                  0{i + 1}
                </span>
                <span className="font-serif text-xl sm:text-2xl font-normal text-white group-hover:text-[#c5a880] transition-colors">
                  {award.title}
                </span>
              </div>

              <div className="md:w-1/4 text-xs text-slate-400 font-light">
                {award.org}
              </div>

              <div className="md:w-1/4 text-right text-xs font-mono text-slate-400">
                {award.project}
              </div>
            </div>
          ))}
        </div>

        {/* Press Badges */}
        <div className="mt-20 pt-10 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-8 text-slate-500 text-[11px] tracking-[0.3em] uppercase font-light">
          <span>The Wall Street Journal</span>
          <span>&bull;</span>
          <span>Dallas Morning News</span>
          <span>&bull;</span>
          <span>D Home Best Builder</span>
          <span>&bull;</span>
          <span>Traditional Home Magazine</span>
          <span>&bull;</span>
          <span>SMU Cox Dallas 100</span>
        </div>
      </div>
    </section>
  );
};
