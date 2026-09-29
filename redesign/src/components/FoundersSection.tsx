import React from 'react';

export const FoundersSection: React.FC = () => {
  return (
    <section id="founders" className="py-28 bg-[#0a0b0e] border-t border-white/[0.06] relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#c5a880]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#c5a880] font-light">
              Leadership & Heritage
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#faf8f5] tracking-tight">
            Engineering Precision <br />
            <span className="italic text-[#c5a880]">& Aesthetic Vision</span>
          </h2>
          <p className="mt-4 text-slate-400 font-light text-sm sm:text-base leading-relaxed">
            Ventura Custom Homes is propelled by a rare equilibrium: commercial-grade concrete foundation mastery combined with world-class interior architecture and financial governance.
          </p>
        </div>

        {/* Founders Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Loy Lowary */}
          <div className="p-8 sm:p-12 border border-white/[0.08] bg-[#111218]/40 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#c5a880] mb-2">
                Executive & Engineering Director
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-white mb-6">
                Loy Lowary
              </h3>

              <div className="space-y-5 text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                <p>
                  A graduate of Arizona State University in Finance, Loy entered the construction industry in 1975 on demanding civil infrastructure, power plants, and public buildings before establishing his own commercial excavation and concrete contracting firm.
                </p>
                <p>
                  Having directed the construction of over 400 residences across Texas and New England, Loy possesses an unrivaled reputation in <span className="text-white">Texas expansive soil dynamics, challenging hillside lots, and subterranean walk-out basements</span>—culminating in complex multi-level residences exceeding 26,000 square feet.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400 font-light">
              <span>Direct Field Operations</span>
              <span className="font-mono text-[#c5a880]">+1 (214) 728-3933</span>
            </div>
          </div>

          {/* Shideh Lowary */}
          <div className="p-8 sm:p-12 border border-white/[0.08] bg-[#111218]/40 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#c5a880] mb-2">
                Principal & Design Director
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-white mb-6">
                Shideh Lowary
              </h3>

              <div className="space-y-5 text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                <p>
                  Educated in Accounting at Southern Illinois University, Shideh launched her career as a financial planner for a Fortune 500 company before transitioning into real estate finance in 1988, rising to Regional Manager commanding over 200 direct personnel.
                </p>
                <p>
                  At Ventura, Shideh orchestrates every estate as a <span className="text-white">"Sanctuary for the Senses"</span>. Her meticulous eye for spatial harmony, custom millwork, illumination, and organic materials elevates each home into an award-winning residence featured nationally on magazine covers.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400 font-light">
              <span>Executive Studio</span>
              <span className="font-mono text-[#c5a880]">+1 (214) 577-1959</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
