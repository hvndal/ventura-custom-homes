import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ARCHITECTURAL_STATS = [
  { numeric: 70, suffix: '+ YRS', label: 'Combined Engineering & Design Mastery' },
  { numeric: 400, suffix: '+', label: 'Custom Estates Delivered Since 1975' },
  { numeric: 26000, suffix: ' SF', label: 'Largest Single Residence Engineered' },
  { numeric: 20, suffix: '+', label: 'National & Regional Architectural Honors' },
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

const CountUpStat: React.FC<{ target: number; suffix: string; label: string; index: number }> = ({
  target,
  suffix,
  label,
  index,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <div ref={ref} className="relative p-6 sm:p-8 flex flex-col justify-between overflow-hidden group">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#0A0A0A] origin-left"
      />
      <div
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight uppercase mb-2"
        style={{ fontFamily: 'var(--font-data)' }}
      >
        {count.toLocaleString()}
        {suffix}
      </div>
      <div
        className="text-xs uppercase tracking-[0.12em] text-[#6B6B6B] leading-snug"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        {label}
      </div>
    </div>
  );
};

export const FoundersSection: React.FC = () => {
  // Interactive 3D tilt for Loy & Shideh's joint portrait
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 160, damping: 22 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 160, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="founders"
      className="bg-white text-[#0A0A0A] py-28 md:py-40 border-t border-black/[0.08] relative overflow-hidden"
    >
      <div id="about" className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Kinetic Masked Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#9A9A9A] mb-4"
                style={{ fontFamily: 'var(--font-data)' }}
              >
                <span className="inline-block w-2 h-2 bg-[#0A0A0A]" />
                <span>01 / ABOUT US &mdash; LOY &amp; SHIDEH LOWARY TOGETHER</span>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: '105%' }}
                  whileInView={{ y: '0%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[18vw] md:text-[13vw] font-bold text-[#0A0A0A] leading-[0.86] tracking-tight uppercase"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  ABOUT US
                </motion.h2>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base text-[#6B6B6B] max-w-md leading-relaxed md:pb-2"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Side by side for decades, Loy and Shideh Lowary transform challenging Texas terrain into architectural sanctuaries—uniting commercial-grade structural engineering with museum-caliber interior design.
            </motion.p>
          </div>

          {/* CENTERPIECE: Loy & Shideh Lowary Together (Unified Editorial Portrait + Story) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center border-t border-black/[0.08] pt-12">
            {/* Left (7 Cols): Interactive 3D Together Portrait with Curtain-Wipe Reveal */}
            <div className="lg:col-span-7" style={{ perspective: '1200px' }}>
              <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY }}
                initial={{ clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 }}
                whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden bg-[#F5F3EF] border border-black/[0.08] group"
              >
                <motion.img
                  initial={{ scale: 1.14 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  src="/founders/lowary-together.jpg"
                  alt="Loy and Shideh Lowary Together — Founders of Ventura Custom Homes"
                  className="w-full aspect-[3/2] object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* Subtle bottom gradient for dual nameplates */}
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/75 via-black/30 to-transparent pointer-events-none" />

                {/* Top-left floating glass badge */}
                <div
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#0A0A0A] text-[10px] sm:text-[11px] tracking-[0.2em] uppercase px-3.5 py-1.5 font-medium border border-black/10"
                  style={{ fontFamily: 'var(--font-data)' }}
                >
                  CO-FOUNDERS &amp; PRINCIPALS &middot; 70+ YRS COMBINED MASTERY
                </div>

                {/* Bottom dual nameplates directly under Loy (left) and Shideh (right) */}
                <div className="absolute bottom-4 inset-x-4 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 text-white">
                  <div className="bg-black/60 backdrop-blur-md border border-white/15 px-4 py-2.5">
                    <div
                      className="text-[10px] tracking-[0.2em] uppercase text-white/70"
                      style={{ fontFamily: 'var(--font-data)' }}
                    >
                      01 / STRUCTURAL &amp; CIVIL DIRECTOR
                    </div>
                    <div
                      className="text-xl sm:text-2xl font-bold uppercase tracking-wide"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      LOY LOWARY
                    </div>
                  </div>

                  <div className="bg-black/60 backdrop-blur-md border border-white/15 px-4 py-2.5 sm:text-right">
                    <div
                      className="text-[10px] tracking-[0.2em] uppercase text-white/70"
                      style={{ fontFamily: 'var(--font-data)' }}
                    >
                      02 / DESIGN &amp; FINANCIAL PRINCIPAL
                    </div>
                    <div
                      className="text-xl sm:text-2xl font-bold uppercase tracking-wide"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      SHIDEH LOWARY
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right (5 Cols): "What Makes Us Different" Together Narrative */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-6"
            >
              <div
                className="text-xs tracking-[0.2em] uppercase text-[#9A9A9A]"
                style={{ fontFamily: 'var(--font-data)' }}
              >
                WHAT MAKES US DIFFERENT &middot; SANCTUARIES FOR THE SENSES
              </div>
              <h3
                className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-[#0A0A0A] leading-[0.92] tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                BUILT TOGETHER ON TRUST, ENGINEERING &amp; ARTISTRY
              </h3>
              <div
                className="space-y-4 text-[#6B6B6B] text-sm sm:text-base leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <p>
                  Shideh and Loy Lowary epitomize sophistication and excellence at Ventura Custom Homes, boasting over{' '}
                  <strong className="text-[#0A0A0A] font-medium">70 years of combined experience</strong>{' '}
                  where their complementary leadership sets the benchmark in North Texas luxury homebuilding.
                </p>
                <p>
                  Loy&rsquo;s background as owner of a commercial concrete and excavation firm grants Ventura an unmatched advantage in navigating complex hillside topography and engineering subterranean walk-out basements—while Shideh&rsquo;s background in Fortune 500 financial planning and architectural curation transforms every residence into a{' '}
                  <strong className="text-[#0A0A0A] font-medium">&ldquo;Sanctuary for the Senses.&rdquo;</strong>
                </p>
              </div>
            </motion.div>
          </div>

          {/* 4-Stat Animated Count-Up Architectural Data Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-black/[0.08] divide-y lg:divide-y-0 sm:divide-x divide-black/[0.08] mt-14 bg-[#F5F3EF]/50">
            {ARCHITECTURAL_STATS.map((stat, idx) => (
              <CountUpStat
                key={idx}
                index={idx}
                target={stat.numeric}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>

        {/* Unified Side-by-Side Dossier (Connected Under Their Joint Portrait) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 border border-black/[0.08] bg-[#F5F3EF]/30">
          {/* Loy Lowary Pillar */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-12 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-black/[0.08] hover:bg-[#F5F3EF]/70 transition-colors duration-500"
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

              <h4
                className="text-5xl sm:text-6xl font-bold uppercase text-[#0A0A0A] tracking-tight leading-none mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                LOY LOWARY
              </h4>

              <p
                className="text-[#6B6B6B] text-sm sm:text-base leading-relaxed mb-8"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                A Finance graduate of Arizona State University, Loy entered civil infrastructure, public schools, and power plant construction in 1975 before founding his own commercial excavation and concrete firm. Having overseen 400+ homes across Dallas and New England—up to a 26,000 sq. ft., 4-level residence—Loy leads North Texas in{' '}
                <strong className="text-[#0A0A0A] font-medium">
                  expansive soil engineering, hillside lots, and walk-out basements
                </strong>.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
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

          {/* Shideh Lowary Pillar */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-12 lg:p-14 flex flex-col justify-between hover:bg-[#F5F3EF]/70 transition-colors duration-500"
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

              <h4
                className="text-5xl sm:text-6xl font-bold uppercase text-[#0A0A0A] tracking-tight leading-none mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                SHIDEH LOWARY
              </h4>

              <p
                className="text-[#6B6B6B] text-sm sm:text-base leading-relaxed mb-8"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Educated in Accounting at Southern Illinois University, Shideh served as a Fortune 500 financial planner and Regional Manager leading 200+ personnel in construction finance. At Ventura, she guides every home from initial concept to completion as an award-winning{' '}
                <strong className="text-[#0A0A0A] font-medium">
                  &ldquo;Sanctuary for the Senses&rdquo;
                </strong>{' '}
                honored by <em>The Wall Street Journal</em> and <em>Traditional Home</em>.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
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

            <div className="pt-6 border-t border-black/[0.08] flex items-center justify-between">
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
        </div>
      </div>
    </section>
  );
};
