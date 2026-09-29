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
  'Hillside Topography & Excavation',
  '400+ Custom Residences Built',
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
      <div id="about" className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Header: ABOUT US */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div
                className="text-xs tracking-[0.2em] uppercase text-[#9A9A9A] mb-4"
                style={{ fontFamily: 'var(--font-data)' }}
              >
                01 / ABOUT US &mdash; OUR STORY &amp; FOUNDERS
              </div>
              <h2
                className="text-[18vw] md:text-[13vw] font-bold text-[#0A0A0A] leading-[0.86] tracking-tight uppercase"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                ABOUT US
              </h2>
            </div>

            <p
              className="text-sm sm:text-base text-[#6B6B6B] max-w-md leading-relaxed md:pb-2"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Loy and Shideh Lowary transform spaces into luxurious, award-winning residences by seamlessly blending clients&rsquo; personalities with unmatched structural engineering and architectural creativity.
            </p>
          </div>

          {/* Part 1: Together Portrait + "What Makes Us Different" Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center border-t border-black/[0.08] pt-12">
            {/* Left: Official High-Res Studio Portrait of Loy & Shideh Together */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden bg-[#F5F3EF] border border-black/[0.08]">
                <img
                  src="/founders/lowary-together.jpg"
                  alt="Loy and Shideh Lowary — Founders of Ventura Custom Homes"
                  className="w-full aspect-[3/2] object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-[#9A9A9A]" style={{ fontFamily: 'var(--font-data)' }}>
                <span>LOY &amp; SHIDEH LOWARY &mdash; CO-FOUNDERS &amp; PRINCIPALS</span>
                <span>DALLAS &middot; HIGHLAND PARK &middot; FRISCO</span>
              </div>
            </div>

            {/* Right: What Makes Us Different */}
            <div className="lg:col-span-6 space-y-6">
              <div
                className="text-xs tracking-[0.2em] uppercase text-[#9A9A9A]"
                style={{ fontFamily: 'var(--font-data)' }}
              >
                WHAT MAKES US DIFFERENT &middot; SANCTUARIES FOR THE SENSES
              </div>
              <h3
                className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-[#0A0A0A] leading-[0.95] tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                DECADES OF EXCELLENCE &amp; EXPERIENCE
              </h3>
              <div
                className="space-y-4 text-[#6B6B6B] text-sm sm:text-base leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <p>
                  We uphold the pinnacle of mastery in crafting luxury custom homes. Our distinguishing factor is our innovative spirit—an innovation that shines through the meticulous details and distinctive features we incorporate into every build.
                </p>
                <p>
                  Shideh and Loy Lowary epitomize sophistication and excellence at Ventura Custom Homes, boasting over{' '}
                  <strong className="text-[#0A0A0A] font-medium">70 years of combined experience</strong>{' '}
                  where their expertise and visionary leadership set a new standard in luxury homebuilding. Loy&rsquo;s background as a former owner of a commercial concrete company grants Ventura a strategic advantage in navigating challenging Texas terrain and creating exceptional walk-out basements—a skill perfected since the 1990s when soil conditions deterred others.
                </p>
                <p>
                  Complementing Loy&rsquo;s technical expertise is Shideh&rsquo;s innate talent for design, crafting homes that serve as{' '}
                  <strong className="text-[#0A0A0A] font-medium">&ldquo;Sanctuaries for the Senses.&rdquo;</strong>{' '}
                  Together, Shideh and Loy embody elegance and distinction, propelling Ventura Custom Homes to unparalleled levels of luxury and sophistication.
                </p>
              </div>
            </div>
          </div>

          {/* 4-Stat Architectural Data Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-black/[0.08] divide-y lg:divide-y-0 sm:divide-x divide-black/[0.08] mt-14 bg-[#F5F3EF]/50">
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

        {/* Part 2: Individual Founder Studio Portraits & Full Biographies */}
        <div className="mb-10">
          <div
            className="text-xs tracking-[0.2em] uppercase text-[#9A9A9A] mb-2"
            style={{ fontFamily: 'var(--font-data)' }}
          >
            EXECUTIVE LEADERSHIP
          </div>
          <h3
            className="text-4xl sm:text-6xl font-bold uppercase text-[#0A0A0A] tracking-tight leading-none"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            MEET THE FOUNDERS
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Column 01 — SHIDEH LOWARY */}
          <motion.article
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between border border-black/[0.08] bg-[#F5F3EF]/35 hover:bg-[#F5F3EF]/70 transition-colors duration-500"
          >
            <div>
              {/* Individual Studio Portrait */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F3EF] border-b border-black/[0.08]">
                <img
                  src="/founders/shideh-lowary.jpg"
                  alt="Shideh Lowary — Founder & Principal of Ventura Custom Homes"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                />
                <div
                  className="absolute top-4 left-4 bg-black/75 text-white text-[11px] tracking-[0.18em] uppercase px-3 py-1"
                  style={{ fontFamily: 'var(--font-data)' }}
                >
                  01 / FOUNDER &amp; DESIGN PRINCIPAL
                </div>
              </div>

              <div className="p-8 sm:p-12">
                <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-black/[0.08]">
                  <span
                    className="text-xs tracking-[0.2em] uppercase text-[#9A9A9A]"
                    style={{ fontFamily: 'var(--font-data)' }}
                  >
                    PRINCIPAL &amp; ARCHITECTURAL DESIGN DIRECTOR
                  </span>
                  <span
                    className="text-xs tracking-[0.15em] uppercase text-[#0A0A0A] font-semibold"
                    style={{ fontFamily: 'var(--font-data)' }}
                  >
                    SINCE 1988
                  </span>
                </div>

                <h4
                  className="text-5xl sm:text-6xl font-bold uppercase text-[#0A0A0A] tracking-tight leading-none mb-4"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  SHIDEH LOWARY
                </h4>

                <div className="mb-8">
                  <span
                    className="inline-block text-[11px] uppercase tracking-[0.16em] text-[#0A0A0A] border border-black/15 bg-white px-3.5 py-1.5 font-medium"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Spatial Curation &middot; Bespoke Materiality &middot; Financial Governance
                  </span>
                </div>

                <div
                  className="space-y-4 text-[#6B6B6B] text-sm sm:text-base leading-relaxed mb-10"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <p>
                    Shideh Lowary holds a degree from Southern Illinois University in Accounting. She began her career in California working for a top Fortune 500 company as a financial planner before entering real estate finance in 1988, advancing to Regional Manager leading more than 200 direct reports.
                  </p>
                  <p>
                    Over 15 years in residential construction lending, she mastered the intricacies of custom home funding, project management, and architectural execution. At Ventura, Shideh brings a rare gift in helping clients realize their dream home—curating each residence from initial creative concept to final walk-through as an award-winning{' '}
                    <strong className="text-[#0A0A0A] font-medium">
                      &ldquo;Sanctuary for the Senses&rdquo;
                    </strong>{' '}
                    featured in <em>The Wall Street Journal</em> and <em>Traditional Home</em>.
                  </p>
                </div>

                {/* Key Specialties Tags */}
                <div>
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
            </div>

            {/* Direct Line Footer */}
            <div className="px-8 sm:px-12 py-6 border-t border-black/[0.08] flex items-center justify-between bg-white/60">
              <span
                className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Direct Line &mdash; Executive &amp; Design Studio
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

          {/* Column 02 — LOY LOWARY */}
          <motion.article
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between border border-black/[0.08] bg-[#F5F3EF]/35 hover:bg-[#F5F3EF]/70 transition-colors duration-500"
          >
            <div>
              {/* Individual Studio Portrait */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F3EF] border-b border-black/[0.08]">
                <img
                  src="/founders/loy-lowary.jpg"
                  alt="Loy Lowary — Founder & Engineering Director of Ventura Custom Homes"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                />
                <div
                  className="absolute top-4 left-4 bg-black/75 text-white text-[11px] tracking-[0.18em] uppercase px-3 py-1"
                  style={{ fontFamily: 'var(--font-data)' }}
                >
                  02 / FOUNDER &amp; ENGINEERING DIRECTOR
                </div>
              </div>

              <div className="p-8 sm:p-12">
                <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-black/[0.08]">
                  <span
                    className="text-xs tracking-[0.2em] uppercase text-[#9A9A9A]"
                    style={{ fontFamily: 'var(--font-data)' }}
                  >
                    EXECUTIVE &amp; STRUCTURAL ENGINEERING DIRECTOR
                  </span>
                  <span
                    className="text-xs tracking-[0.15em] uppercase text-[#0A0A0A] font-semibold"
                    style={{ fontFamily: 'var(--font-data)' }}
                  >
                    SINCE 1975
                  </span>
                </div>

                <h4
                  className="text-5xl sm:text-6xl font-bold uppercase text-[#0A0A0A] tracking-tight leading-none mb-4"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  LOY LOWARY
                </h4>

                <div className="mb-8">
                  <span
                    className="inline-block text-[11px] uppercase tracking-[0.16em] text-[#0A0A0A] border border-black/15 bg-white px-3.5 py-1.5 font-medium"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Foundations &middot; Civil Infrastructure &middot; Subterranean Estates
                  </span>
                </div>

                <div
                  className="space-y-4 text-[#6B6B6B] text-sm sm:text-base leading-relaxed mb-10"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <p>
                    Loy Lowary is a graduate of Arizona State University with a degree in Finance. Beginning his construction career in 1975 on large-scale public schools, power plants, and chemical facilities, Loy founded his own commercial and residential excavation and concrete contracting company across Dallas–Fort Worth.
                  </p>
                  <p>
                    Since 1982, Loy has overseen the construction of more than 400 residences across Dallas and New England, alongside a 120-unit four-story luxury facility in Topsham, Maine. Combining commercial foundation mastery with custom residential craftsmanship, Loy is North Texas&rsquo;s foremost authority on{' '}
                    <strong className="text-[#0A0A0A] font-medium">
                      sloping hillside sites and subterranean walk-out basements
                    </strong>
                    —including a 26,000 sq. ft., 4-level estate engineered with commercial concrete systems.
                  </p>
                </div>

                {/* Key Specialties Tags */}
                <div>
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
            </div>

            {/* Direct Line Footer */}
            <div className="px-8 sm:px-12 py-6 border-t border-black/[0.08] flex items-center justify-between bg-white/60">
              <span
                className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Direct Line &mdash; Field &amp; Structural Engineering
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
        </div>
      </div>
    </section>
  );
};
