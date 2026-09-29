import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Check, Mail, Phone } from 'lucide-react';
import { AboutTiles } from './AboutTiles';
import { FOUNDER_CONTACTS } from '../data/contacts';
import type { FounderContact } from '../data/contacts';

interface FoundersSectionProps {
  onOpenConsultation?: () => void;
}

const EASE = [0.16, 1, 0.3, 1] as const;

interface Chapter {
  contact: FounderContact;
  ghost: string;
  eyebrow: string;
  headline: string;
  credential: string;
  story: string[];
  facts: string[];
}

const CHAPTERS: Chapter[] = [
  {
    contact: FOUNDER_CONTACTS[0],
    ghost: 'LOY',
    eyebrow: 'Chapter one · The Builder',
    headline: 'He builds where others hesitate.',
    credential: 'Finance degree, Arizona State University',
    story: [
      'Loy Lowary began his construction career in 1975, working on schools and power plants before founding his own excavation and concrete company.',
      'Since 1982 he has overseen the construction of more than 400 homes, and he has become the specialist for ground that scares other builders: deep walk-out basements, steep hillsides and some of the most challenging lots in Texas.',
    ],
    facts: ['Construction since 1975', '400+ homes overseen since 1982', 'Basement & hillside specialist'],
  },
  {
    contact: FOUNDER_CONTACTS[1],
    ghost: 'SHIDEH',
    eyebrow: 'Chapter two · The Steward',
    headline: 'She protects the budget and the dream.',
    credential: 'Accounting degree, Southern Illinois University',
    story: [
      'Shideh Lowary started as a financial planner for a Fortune 500 company in California, then entered real estate in 1988 as a mortgage loan officer.',
      'She rose to Regional Manager, leading more than 200 people, and spent 15 years mastering residential construction financing. At Ventura she brings that discipline to every project, so clients always know exactly where they stand.',
    ],
    facts: ['Real estate finance since 1988', 'Regional Manager, 200+ employees', '15 years in construction financing'],
  },
];

const TIMELINE = [
  { year: '1975', text: 'Loy starts in construction: schools and power plants.' },
  { year: '1982', text: 'Loy turns to homes. 400+ residences follow.' },
  { year: '1988', text: 'Shideh enters real estate finance as a loan officer.' },
  { year: '15 yrs', text: 'Shideh leads teams and masters construction financing.' },
  { year: 'Ventura', text: 'Two careers become one company: Ventura Custom Homes.' },
];

const ChapterBlock: React.FC<{ chapter: Chapter; flip: boolean }> = ({ chapter, flip }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-7%', '7%']);
  const ghostX = useTransform(scrollYProgress, [0, 1], flip ? ['6%', '-6%'] : ['-6%', '6%']);
  const c = chapter.contact;

  return (
    <div ref={ref} className="relative py-16 md:py-24">
      <motion.div
        style={{ x: ghostX, WebkitTextStroke: '1px rgba(0,0,0,0.09)' }}
        className={`absolute top-1/2 -translate-y-1/2 text-[26vw] font-bold leading-none text-transparent select-none pointer-events-none whitespace-nowrap ${
          flip ? 'right-0' : 'left-0'
        }`}
        aria-hidden="true"
      >
        <span style={{ fontFamily: 'var(--font-display)' }}>{chapter.ghost}</span>
      </motion.div>

      <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <motion.div
          className={`lg:col-span-6 ${flip ? 'lg:order-2' : ''}`}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={{
              hidden: { clipPath: 'inset(0 0 100% 0)' },
              show: { clipPath: 'inset(0 0 0% 0)', transition: { duration: 1.3, ease: EASE } },
            }}
            className="relative aspect-[4/5] sm:aspect-[5/6] overflow-hidden bg-[#F5F3EF]"
          >
            <motion.img
              src={c.photo}
              alt={c.name}
              style={{ y: imgY }}
              className="absolute inset-x-0 -top-[8%] w-full h-[116%] object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="text-4xl sm:text-5xl font-bold uppercase leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                {c.name}
              </div>
              <div className="mt-2 text-[19px] italic text-white/85" style={{ fontFamily: 'var(--font-data)' }}>
                {c.role}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={`lg:col-span-6 ${flip ? 'lg:order-1' : ''}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, delay: 0.15, ease: EASE }}
        >
          <p className="eyebrow mb-4">{chapter.eyebrow}</p>
          <h3 className="text-5xl sm:text-6xl xl:text-7xl font-bold text-[#0A0A0A] leading-[0.95]">{chapter.headline}</h3>

          <div className="mt-8 space-y-5">
            {chapter.story.map((para) => (
              <p key={para} className="text-[18px] leading-[1.7] text-[#3a3a3a]" style={{ fontFamily: 'var(--font-sans)' }}>
                {para}
              </p>
            ))}
          </div>

          <ul className="mt-8 grid sm:grid-cols-1 gap-3" style={{ fontFamily: 'var(--font-sans)' }}>
            {chapter.facts.map((f, i) => (
              <motion.li
                key={f}
                className="flex items-center gap-3 text-[16px] text-[#0A0A0A] border-b border-black/[0.08] pb-3"
                initial={{ opacity: 0, x: flip ? 24 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: EASE }}
              >
                <Check className="w-4 h-4 shrink-0" />
                {f}
              </motion.li>
            ))}
          </ul>

          <p className="mt-6 text-[17px] italic text-[#6B6B6B]" style={{ fontFamily: 'var(--font-data)' }}>
            {chapter.credential}
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[#0A0A0A]">
            <a href={`tel:${c.tel}`} className="inline-flex items-center gap-2 text-[19px] hover:text-[#6B6B6B] transition-colors" style={{ fontFamily: 'var(--font-data)' }}>
              <Phone className="w-4 h-4" /> {c.phone}
            </a>
            <a href={`mailto:${c.email}`} className="inline-flex items-center gap-2 text-[19px] hover:text-[#6B6B6B] transition-colors" style={{ fontFamily: 'var(--font-data)' }}>
              <Mail className="w-4 h-4" /> {c.email}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const FoundersSection: React.FC<FoundersSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="bg-white">
      {/* Intro */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 pt-24 md:pt-32 pb-20 md:pb-28 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          className="lg:col-span-7 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <img
            src="/founders/lowary-together.jpg"
            alt="Loy and Shideh Lowary, founders of Ventura Custom Homes"
            className="w-full aspect-[4/3] object-cover object-[50%_30%]"
          />
          <div className="absolute -bottom-6 right-4 sm:right-8 bg-white px-6 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
            <div className="text-[18px] italic text-[#6B6B6B]" style={{ fontFamily: 'var(--font-data)' }}>
              Founders
            </div>
            <div className="text-3xl font-semibold text-[#0A0A0A] leading-tight" style={{ fontFamily: 'var(--font-data)' }}>
              Loy &amp; Shideh Lowary
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
        >
          <p className="eyebrow mb-5">About Ventura</p>
          <h2 className="text-6xl sm:text-7xl font-bold text-[#0A0A0A]">
            Your Home,
            <br />
            Built Right.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-[#3a3a3a]" style={{ fontFamily: 'var(--font-sans)' }}>
            Ventura was built on two careers: one spent moving earth and pouring foundations, the other
            spent financing homes. Together, Loy and Shideh Lowary bring more than 70 years of combined
            experience to every custom estate in Dallas and Frisco.
          </p>
          <button
            onClick={onOpenConsultation}
            className="mt-10 inline-flex items-center gap-3 bg-[#0A0A0A] text-white px-8 py-4 text-[16px] tracking-[0.06em] hover:bg-[#333] transition-colors cursor-pointer"
          >
            Meet With Us <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Tiles */}
      <div className="bg-[#F5F3EF] py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          <AboutTiles />
        </div>
      </div>

      {/* Stories */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 pt-16 overflow-x-clip">
        <div className="text-center max-w-2xl mx-auto pt-8">
          <p className="eyebrow mb-4">Our Story</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#0A0A0A]">Two Careers. One Company.</h2>
        </div>
        {CHAPTERS.map((chapter, i) => (
          <ChapterBlock key={chapter.contact.key} chapter={chapter} flip={i % 2 === 1} />
        ))}
      </div>

      {/* Timeline */}
      <div className="bg-[#F5F3EF] py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          <p className="eyebrow mb-3">The Road to Ventura</p>
          <div className="relative mt-12">
            <motion.div
              className="hidden md:block absolute top-[11px] left-0 right-0 h-px bg-[#0A0A0A] origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 2, ease: EASE }}
            />
            <div className="grid md:grid-cols-5 gap-10 md:gap-6">
              {TIMELINE.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.25, ease: EASE }}
                >
                  <div className="relative w-6 h-6 rounded-full bg-[#F5F3EF] border border-[#0A0A0A] flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-[#0A0A0A]" />
                  </div>
                  <div className="mt-5 text-4xl font-semibold text-[#0A0A0A]" style={{ fontFamily: 'var(--font-data)' }}>
                    {t.year}
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#6B6B6B] max-w-[230px]" style={{ fontFamily: 'var(--font-sans)' }}>
                    {t.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
