import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BedDouble, Bath, Camera, Car, Ruler } from 'lucide-react';
import type { Project } from '../data/siteData';
import { PROJECTS } from '../data/siteData';
import { getListingMeta } from '../data/listingMeta';
import type { ListingStatus } from '../data/listingMeta';
import { RetryImg } from './RetryImg';

interface FeaturedPortfolioProps {
  onSelectProject: (project: Project) => void;
  onOpenConsultation: () => void;
}

const CATEGORIES = [
  { id: 'all', label: 'All Estates' },
  { id: 'highland-park', label: 'Highland Park' },
  { id: 'preston-hollow', label: 'Preston Hollow' },
  { id: 'frisco', label: 'Frisco' },
  { id: 'preserve', label: 'The Preserve' },
];

const matchesFilter = (p: Project, filter: string) => {
  if (filter === 'all') return true;
  if (filter === 'preserve') return p.location.includes('The Preserve');
  if (filter === 'highland-park') return p.location.includes('Highland Park');
  if (filter === 'preston-hollow') return p.location.includes('Preston Hollow');
  if (filter === 'frisco') return p.location.includes('Frisco');
  return true;
};

const StatusPill: React.FC<{ status: ListingStatus; className?: string }> = ({ status, className = '' }) => {
  const tone =
    status === 'Available'
      ? 'bg-white text-[#0A0A0A]'
      : status === 'Coming Soon'
        ? 'bg-[#0A0A0A] text-white'
        : 'bg-white/80 text-[#6B6B6B]';
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${tone} ${className}`}
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      {status === 'Available' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />}
      {status}
    </span>
  );
};

const Spec: React.FC<{ icon: React.ReactNode; value: string; label: string }> = ({ icon, value, label }) => (
  <div className="flex items-center gap-1.5" title={label}>
    {icon}
    <span className="text-[13px] text-[#0A0A0A]">
      <span className="font-semibold">{value}</span> <span className="text-[#6B6B6B]">{label}</span>
    </span>
  </div>
);

export const FeaturedPortfolio: React.FC<FeaturedPortfolioProps> = ({
  onSelectProject,
  onOpenConsultation,
}) => {
  const [filter, setFilter] = useState<string>('all');

  const filtered = useMemo(() => PROJECTS.filter((p) => matchesFilter(p, filter)), [filter]);
  const spotlight = useMemo(
    () => filtered.find((p) => getListingMeta(p).status === 'Available') ?? filtered[0],
    [filtered],
  );
  const rest = filtered.filter((p) => p !== spotlight);
  const spotlightMeta = spotlight ? getListingMeta(spotlight) : null;

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-14">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">Featured Estates &middot; Dallas &amp; Frisco</p>
            <h2 className="text-[#0A0A0A] text-6xl sm:text-7xl md:text-8xl font-bold">
              Find Your Estate
            </h2>
            <p
              className="mt-6 text-[#6B6B6B] text-lg leading-relaxed max-w-xl"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Every residence is designed, engineered and built by Ventura, from the first sketch to the
              final walkthrough. Tour any home below, or ask about what&rsquo;s coming next.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2.5 text-[13px] tracking-wide border transition-colors duration-300 cursor-pointer ${
                  filter === cat.id
                    ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                    : 'bg-white text-[#0A0A0A] border-black/15 hover:border-black/60'
                }`}
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Spotlight listing */}
        {spotlight && spotlightMeta && (
          <motion.article
            key={`spot-${spotlight.id}`}
            onClick={() => onSelectProject(spotlight)}
            className="group relative cursor-pointer overflow-hidden bg-[#F5F3EF] aspect-[4/5] sm:aspect-[16/10] lg:aspect-[21/9] mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <RetryImg
              src={spotlight.heroImage}
              alt={spotlight.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

            <div className="absolute top-5 left-5 sm:top-8 sm:left-8">
              <StatusPill status={spotlightMeta.status} />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 text-white">
              <div>
                <p
                  className="text-[12px] uppercase tracking-[0.24em] text-white/80 mb-3"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {spotlight.location}
                </p>
                <h3 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{spotlight.name}</h3>
                <div
                  className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-white/90"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <span>{spotlightMeta.beds} Beds</span>
                  <span>{spotlightMeta.baths} Baths</span>
                  <span>{spotlight.sqft}</span>
                  <span>{spotlightMeta.garage}-Car Garage</span>
                </div>
              </div>
              <div className="flex items-center gap-6 lg:flex-col lg:items-end lg:gap-4">
                <div
                  className="text-4xl sm:text-5xl font-semibold"
                  style={{ fontFamily: 'var(--font-data)' }}
                >
                  {spotlightMeta.price}
                </div>
                <span
                  className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] group-hover:bg-[#F5F3EF] transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Tour This Home <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </motion.article>
        )}

        {/* Listing grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {rest.map((project) => {
            const meta = getListingMeta(project);
            return (
              <motion.article
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative overflow-hidden bg-[#F5F3EF] aspect-[4/3]">
                  <RetryImg
                    src={project.heroImage}
                    alt={project.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
                  <StatusPill status={meta.status} className="absolute top-4 left-4" />
                  <div
                    className="absolute bottom-3 right-4 flex items-center gap-1.5 text-white text-[12px]"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <Camera className="w-3.5 h-3.5" />
                    {project.images.length}
                  </div>
                </div>

                <div className="pt-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <div
                      className="text-[32px] leading-none font-semibold text-[#0A0A0A]"
                      style={{ fontFamily: 'var(--font-data)' }}
                    >
                      {meta.price}
                    </div>
                    <span
                      className="text-[11px] uppercase tracking-[0.16em] text-[#9A9A9A] text-right"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mt-3 text-2xl font-bold text-[#0A0A0A] group-hover:text-[#6B6B6B] transition-colors">
                    {project.name}
                  </h3>
                  <p
                    className="mt-1 text-[14px] text-[#6B6B6B]"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {project.location}
                  </p>

                  <div
                    className="mt-4 pt-4 border-t border-black/[0.08] flex flex-wrap gap-x-5 gap-y-2"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <Spec icon={<BedDouble className="w-4 h-4 text-[#6B6B6B]" />} value={String(meta.beds)} label="Beds" />
                    <Spec icon={<Bath className="w-4 h-4 text-[#6B6B6B]" />} value={String(meta.baths)} label="Baths" />
                    <Spec icon={<Ruler className="w-4 h-4 text-[#6B6B6B]" />} value={project.sqft.replace(' SF', '')} label="SF" />
                    <Spec icon={<Car className="w-4 h-4 text-[#6B6B6B]" />} value={String(meta.garage)} label="Car" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Custom build CTA */}
        <div className="mt-24 bg-[#F5F3EF] px-8 py-14 md:px-16 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-[#0A0A0A]">Don&rsquo;t see the one?</h3>
            <p
              className="mt-3 text-[#6B6B6B] text-lg max-w-lg"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Most of our clients build from scratch. Tell us about your lot and your wish list.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="self-start md:self-auto inline-flex items-center gap-3 bg-[#0A0A0A] text-white px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] hover:bg-[#333] transition-colors cursor-pointer"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Schedule a Private Consultation <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p
          className="mt-8 text-center text-[11px] uppercase tracking-[0.18em] text-[#9A9A9A]"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Demo site &middot; Pricing, availability and room counts are illustrative
        </p>
      </div>
    </section>
  );
};
