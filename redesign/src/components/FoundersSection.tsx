import React from 'react';
import { motion } from 'framer-motion';

const ARCHITECTURAL_STATS = [
  {
    value: '70+ YRS',
    label: 'Combined Engineering & Design Mastery',
  },
  {
    value: '400+',
    label: 'Custom Estates Delivered Since 1975',
  },
  {
    value: '26,000 SF',
    label: 'Largest Single Residence Engineered',
  },
  {
    value: '20+',
    label: 'National & Regional Architectural Honors',
  },
];

const LOY_SPECIALTIES = [
  'Subterranean Walk-Out Basements',
  'Commercial Pier & Beam Engineering',
  'Hillside Topography',
  '400+ Residences Built',
];

const SHIDEH_SPECIALTIES = [
  'Spatial Architecture & Sightlines',
  'Bespoke Millwork & Stone Curation',
  'Turnkey Financial Governance',
  'National Cover-Featured Design',
];

export const FoundersSection: React.FC = () => {
  return (
    <section
      id="founders"
      className="bg-white text-[#0A0A0A] py-28 md:py-40 border-t border-black/[0.08] relative overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 md:mb-20"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
            <div>
              <div
                className="text-xs tracking-[0.2em] uppercase text-[#9A9A9A] mb-4"
                style={{ fontFamily: 'var(--font-data)' }}
              >
                02 / LEADERSHIP &amp; HERITAGE
              </div>
              <h2
                className="text-[16vw] md:text-[11vw] font-bold text-[#0A0A0A] leading-[0.88] tracking-tight uppercase"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                THE PRINCIPALS
              </h2>
            </div>

            <p
              className="text-sm sm:text-base text-[#6B6B6B] max-w-md leading-relaxed md:pb-2"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              An uncommon duality in American custom homebuilding: commercial-grade structural foundation mastery paired with museum-caliber architectural curation and financial discipline.
            </p>
          </div>

          {/* 4-Stat Architectural Data Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-black/[0.08] divide-y lg:divide-y-0 sm:divide-x divide-black/[0.08] mt-10 bg-[#F5F3EF]/50">
            {ARCHITECTURAL_STATS.map((stat, idx) => (
              <div key={idx} className="p-6 sm:p-8 flex flex-col justify-between">
                <div
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight uppercase mb-2"
                  style={{ fontFamily: 'var(--font-data)' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs uppercase tracking-[0.12em] text-[#6B6B6B] leading-snug"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Visual Cinema Portrait of Both Founders */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="relative w-full aspect-video bg-[#F5F3EF] border border-black/[0.08] overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/founders_portrait_1440p.jpg"
              src="/founders_loop_1080p.mp4"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Architectural Caption Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-4 px-5 bg-[#F5F3EF] border-x border-b border-black/[0.08]">
            <span
              className="text-[11px] sm:text-xs tracking-[0.18em] uppercase text-[#0A0A0A] font-medium"
              style={{ fontFamily: 'var(--font-data)' }}
            >
              SHIDEH &amp; LOY LOWARY — CO-FOUNDERS &amp; PRINCIPALS, DALLAS &amp; FRISCO, TEXAS
            </span>
            <span
              className="text-[11px] tracking-[0.16em] uppercase text-[#9A9A9A]"
              style={{ fontFamily: 'var(--font-data)' }}
            >
              ARCHIVE PORTRAIT / EST. 1997
            </span>
          </div>
        </motion.div>

        {/* Dual Interactive / Editorial Founder Dossiers */}
        <div className="border-t border-black/10 pt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Column 01 — LOY LOWARY */}
          <motion.article
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between p-8 sm:p-12 border border-black/[0.08] bg-[#F5F3EF]/35 hover:bg-[#F5F3EF]/70 transition-colors duration-500"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-black/[0.08]">
                <span
                  className="text-xs tracking-[0.2em] uppercase text-[#9A9A9A]"
                  style={{ fontFamily: 'var(--font-data)' }}
                >
                  01 / EXECUTIVE &amp; STRUCTURAL ENGINEERING DIRECTOR
                </span>
                <span
                  className="text-xs tracking-[0.15em] uppercase text-[#0A0A0A] font-semibold"
                  style={{ fontFamily: 'var(--font-data)' }}
                >
                  SINCE 1975
                </span>
              </div>

              <h3
                className="text-5xl sm:text-6xl font-bold uppercase text-[#0A0A0A] tracking-tight leading-none mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                LOY LOWARY
              </h3>

              <div className="mb-8">
                <span
                  className="inline-block text-[11px] uppercase tracking-[0.16em] text-[#0A0A0A] border border-black/15 bg-white px-3.5 py-1.5 font-medium"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Foundations &middot; Civil Infrastructure &middot; Subterranean Estates
                </span>
              </div>

              <div
                className="space-y-5 text-[#6B6B6B] text-sm sm:text-base leading-relaxed mb-10"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <p>
                  A graduate of Arizona State University in Finance, Loy entered civil infrastructure, power plants, and commercial concrete construction in 1975 before founding his own excavation and concrete firm.
                </p>
                <p>
                  A recognized master of{' '}
                  <strong className="text-[#0A0A0A] font-medium">
                    North Texas expansive soil dynamics, complex topographical hillside lots, and subterranean walk-out basements
                  </strong>
                  , Loy has personally directed the structural execution of over 400 bespoke residences across Texas and New England—culminating in multi-level estates up to 26,000+ sq. ft.
                </p>
              </div>

              {/* Key Specialties Tags */}
              <div className="mb-10">
                <div
                  className="text-[10px] uppercase tracking-[0.2em] text-[#9A9A9A] mb-3"
                  style={{ fontFamily: 'var(--font-data)' }}
                >
                  CORE DISCIPLINES
                </div>
                <div className="flex flex-wrap gap-2">
                  {LOY_SPECIALTIES.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs tracking-[0.06em] text-[#0A0A0A] bg-white border border-black/[0.08] px-3.5 py-2"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Line Footer */}
            <div className="pt-6 border-t border-black/[0.08] flex items-center justify-between">
              <span
                className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Direct Line &mdash; Field &amp; Structural
              </span>
              <a
                href="tel:+12147283933"
                className="text-sm sm:text-base font-bold tracking-[0.12em] text-[#0A0A0A] hover:opacity-70 transition-opacity"
                style={{ fontFamily: 'var(--font-data)' }}
              >
                +1 (214) 728-3933
              </a>
            </div>
          </motion.article>

          {/* Column 02 — SHIDEH LOWARY */}
          <motion.article
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between p-8 sm:p-12 border border-black/[0.08] bg-[#F5F3EF]/35 hover:bg-[#F5F3EF]/70 transition-colors duration-500"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-black/[0.08]">
                <span
                  className="text-xs tracking-[0.2em] uppercase text-[#9A9A9A]"
                  style={{ fontFamily: 'var(--font-data)' }}
                >
                  02 / PRINCIPAL &amp; ARCHITECTURAL DESIGN DIRECTOR
                </span>
                <span
                  className="text-xs tracking-[0.15em] uppercase text-[#0A0A0A] font-semibold"
                  style={{ fontFamily: 'var(--font-data)' }}
                >
                  SINCE 1988
                </span>
              </div>

              <h3
                className="text-5xl sm:text-6xl font-bold uppercase text-[#0A0A0A] tracking-tight leading-none mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                SHIDEH LOWARY
              </h3>

              <div className="mb-8">
                <span
                  className="inline-block text-[11px] uppercase tracking-[0.16em] text-[#0A0A0A] border border-black/15 bg-white px-3.5 py-1.5 font-medium"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Spatial Curation &middot; Bespoke Materiality &middot; Capital Governance
                </span>
              </div>

              <div
                className="space-y-5 text-[#6B6B6B] text-sm sm:text-base leading-relaxed mb-10"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <p>
                  Educated in Accounting at Southern Illinois University, Shideh served as a Fortune 500 financial planner and Regional Manager leading 200+ professionals in real estate finance since 1988.
                </p>
                <p>
                  At Ventura, she curates every residence as a{' '}
                  <strong className="text-[#0A0A0A] font-medium">
                    &ldquo;Sanctuary for the Senses&rdquo;
                  </strong>
                  —combining bespoke millwork, natural limestone and walnut palettes, dramatic sightlines, and financial precision that have earned{' '}
                  <em className="text-[#0A0A0A] not-italic underline decoration-black/20 underline-offset-4">
                    Wall Street Journal House of the Day
                  </em>
                  ,{' '}
                  <em className="text-[#0A0A0A] not-italic underline decoration-black/20 underline-offset-4">
                    Traditional Home
                  </em>{' '}
                  cover features, and{' '}
                  <em className="text-[#0A0A0A] not-italic underline decoration-black/20 underline-offset-4">
                    McSam Luxury Home of the Year
                  </em>
                  .
                </p>
              </div>

              {/* Key Specialties Tags */}
              <div className="mb-10">
                <div
                  className="text-[10px] uppercase tracking-[0.2em] text-[#9A9A9A] mb-3"
                  style={{ fontFamily: 'var(--font-data)' }}
                >
                  CORE DISCIPLINES
                </div>
                <div className="flex flex-wrap gap-2">
                  {SHIDEH_SPECIALTIES.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs tracking-[0.06em] text-[#0A0A0A] bg-white border border-black/[0.08] px-3.5 py-2"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Line Footer */}
            <div className="pt-6 border-t border-black/[0.08] flex items-center justify-between">
              <span
                className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Direct Line &mdash; Design &amp; Executive Studio
              </span>
              <a
                href="tel:+12145771959"
                className="text-sm sm:text-base font-bold tracking-[0.12em] text-[#0A0A0A] hover:opacity-70 transition-opacity"
                style={{ fontFamily: 'var(--font-data)' }}
              >
                +1 (214) 577-1959
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};
