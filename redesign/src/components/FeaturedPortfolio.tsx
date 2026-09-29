import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Grid,
  Columns,
  Layers,
  Sparkles,
} from 'lucide-react';
import type { Project } from '../data/siteData';
import { PROJECTS } from '../data/siteData';

interface FeaturedPortfolioProps {
  onSelectProject: (project: Project) => void;
  onOpenConsultation: () => void;
}

const ARCH_STUDY_LABELS = [
  'Primary Architectural Elevation',
  'Arrival Court & Facade Study',
  'Great Room & Volume Gallery',
  'Formal Living & Hearth Perspective',
  'Culinary Atelier & Scullery',
  'Dining Salon & Wine Vitrine',
  'Primary Sanctuary Suite',
  'Spa Bath & Stonework Detail',
  'Indoor-Outdoor Loggia & Veranda',
  'Pool Terrace & Water Feature',
  'Evening Architectural Illumination',
  'Bespoke Millwork & Material Study',
];

export function getPlateLabel(url: string, idx: number): string {
  const filename = decodeURIComponent(url.split('/').pop() || '').toLowerCase();
  if (filename.includes('front-elevation') || filename.includes('_01') || idx === 0) {
    return 'Primary Architectural Elevation';
  }
  if (filename.includes('twilight')) return 'Twilight Elevation Study';
  if (filename.includes('kitchen')) return 'Culinary Atelier & Island';
  if (filename.includes('wine')) return 'Temperature-Controlled Wine Room';
  if (filename.includes('dining')) return 'Formal Dining Salon';
  if (filename.includes('living-room-open')) return 'Great Room — Pocket Doors Open';
  if (filename.includes('living-room')) return 'Great Room & Architectural Volume';
  if (filename.includes('den')) return 'Private Library & Den';
  if (filename.includes('powder')) return 'Architectural Powder Room';
  if (filename.includes('patio') || filename.includes('rear')) return 'Rear Elevation & Covered Loggia';
  if (filename.includes('bar')) return 'Bespoke Cocktail Lounge & Bar';
  if (filename.includes('exterior')) return 'Exterior Massing & Stonework';
  if (filename.includes('site-plan')) return 'Architectural Site & Elevation Study';
  return ARCH_STUDY_LABELS[idx % ARCH_STUDY_LABELS.length];
}

interface InteractivePropertyCardProps {
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
  onSpotlight?: (project: Project) => void;
  isSpotlighted?: boolean;
  className?: string;
  aspectClass?: string;
}

const InteractivePropertyCard: React.FC<InteractivePropertyCardProps> = ({
  project,
  index,
  onOpenModal,
  onSpotlight,
  isSpotlighted = false,
  className = '',
  aspectClass = 'aspect-[16/10]',
}) => {
  const [hoverImgIdx, setHoverImgIdx] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const images = project.images.length > 0 ? project.images : [project.heroImage];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (images.length <= 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const nextIdx = Math.min(images.length - 1, Math.floor(relX * images.length));
    if (nextIdx !== hoverImgIdx) {
      setHoverImgIdx(nextIdx);
    }
  };

  const handlePrevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHoverImgIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHoverImgIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <article
      className={`group flex flex-col bg-white border transition-colors duration-300 ${
        isSpotlighted
          ? 'border-[#0A0A0A] ring-1 ring-[#0A0A0A]'
          : 'border-black/[0.08] hover:border-black/30'
      } ${className}`}
    >
      {/* Interactive Scrubbable Image Container */}
      <div
        className={`relative w-full overflow-hidden bg-[#F5F3EF] cursor-pointer select-none ${aspectClass}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setHoverImgIdx(0);
        }}
        onMouseMove={handleMouseMove}
        onClick={() => onOpenModal(project)}
      >
        <img
          src={images[hoverImgIdx]}
          alt={`${project.name} — Plate ${hoverImgIdx + 1}`}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
        />

        {/* Subtle Top & Bottom Gradient Vignette for Readability */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/55 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/65 via-black/20 to-transparent pointer-events-none" />

        {/* Segmented Multi-Photo Progress Scrub Bar at Top */}
        {images.length > 1 && (
          <div className="absolute top-2.5 inset-x-3 flex gap-1 z-10 pointer-events-none">
            {images.map((_, i) => (
              <div
                key={i}
                className="h-[2.5px] flex-1 overflow-hidden bg-white/30 transition-colors"
              >
                <div
                  className={`h-full transition-all duration-150 ${
                    i === hoverImgIdx
                      ? 'w-full bg-white'
                      : i < hoverImgIdx && isHovering
                      ? 'w-full bg-white/70'
                      : 'w-0 bg-transparent'
                  }`}
                />
              </div>
            ))}
          </div>
        )}

        {/* Top Left Index & Active Plate Counter */}
        <div className="absolute top-5 left-3.5 flex items-center gap-2 z-10 pointer-events-none">
          <span
            className="bg-[#0A0A0A] text-white text-[11px] font-bold tracking-[0.14em] px-2 py-0.5 uppercase"
            style={{ fontFamily: 'var(--font-data)' }}
          >
            NO. {String(index + 1).padStart(2, '0')}
          </span>
          <span
            className="bg-black/60 backdrop-blur-xs text-white text-[11px] tracking-[0.12em] px-2 py-0.5 uppercase"
            style={{ fontFamily: 'var(--font-data)' }}
          >
            PLATE {String(hoverImgIdx + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </span>
        </div>

        {/* Top Right Scrub Hint */}
        <div className="absolute top-5 right-3.5 z-10 pointer-events-none">
          <span
            className="bg-white/90 text-[#0A0A0A] text-[10px] font-medium tracking-[0.14em] px-2 py-0.5 uppercase shadow-xs"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {isHovering ? 'Scrubbing Rooms' : `${images.length} Plates · Hover to Scrub`}
          </span>
        </div>

        {/* Direct Prev/Next Tap Buttons for Touch / Precision */}
        {images.length > 1 && (
          <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <button
              type="button"
              onClick={handlePrevImg}
              aria-label="Previous room plate"
              className="pointer-events-auto w-8 h-8 bg-white/90 hover:bg-white text-[#0A0A0A] flex items-center justify-center shadow-sm transition-transform active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNextImg}
              aria-label="Next room plate"
              className="pointer-events-auto w-8 h-8 bg-white/90 hover:bg-white text-[#0A0A0A] flex items-center justify-center shadow-sm transition-transform active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Bottom Overlay Room Caption */}
        <div className="absolute bottom-3 inset-x-3.5 flex items-end justify-between gap-2 z-10 pointer-events-none">
          <span
            className="text-[11px] text-white/90 uppercase tracking-[0.14em] truncate"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {getPlateLabel(images[hoverImgIdx], hoverImgIdx)}
          </span>
          <span
            className="text-[11px] text-white font-semibold uppercase tracking-[0.14em] flex items-center gap-1 shrink-0"
            style={{ fontFamily: 'var(--font-data)' }}
          >
            Storyboard <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Architectural Metadata Footer */}
      <div className="p-5 flex flex-col gap-3 flex-1 justify-between bg-white">
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <span
              className="text-[11px] text-[#6B6B6B] uppercase tracking-[0.14em] truncate"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {project.location}
            </span>
            <span
              className="text-xs font-bold text-[#0A0A0A] tracking-[0.08em] shrink-0"
              style={{ fontFamily: 'var(--font-data)' }}
            >
              {project.sqft}
            </span>
          </div>

          <h3
            onClick={() => onOpenModal(project)}
            className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#0A0A0A] group-hover:text-[#6B6B6B] transition-colors cursor-pointer leading-[0.95]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {project.name}
          </h3>

          <p
            className="mt-1.5 text-xs text-[#9A9A9A] uppercase tracking-[0.08em]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {project.category}
          </p>
        </div>

        {/* Card Action Strip */}
        <div className="pt-3 border-t border-black/[0.08] flex items-center justify-between gap-2">
          {onSpotlight ? (
            <button
              type="button"
              onClick={() => onSpotlight(project)}
              className={`text-[11px] uppercase tracking-[0.14em] font-medium transition-colors cursor-pointer ${
                isSpotlighted
                  ? 'text-[#0A0A0A] font-semibold underline underline-offset-4'
                  : 'text-[#6B6B6B] hover:text-[#0A0A0A]'
              }`}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {isSpotlighted ? '● Active in Stage' : 'Load in Stage'}
            </button>
          ) : (
            <span
              className="text-[11px] text-[#6B6B6B] uppercase tracking-[0.12em]"
              style={{ fontFamily: 'var(--font-data)' }}
            >
              {images.length} Architectural Plates
            </span>
          )}

          <button
            type="button"
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0A0A0A] hover:text-[#6B6B6B] transition-colors cursor-pointer"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Open Dossier <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
};

export const FeaturedPortfolio: React.FC<FeaturedPortfolioProps> = ({
  onSelectProject,
  onOpenConsultation,
}) => {
  const [filter, setFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'explorer' | 'archive'>('explorer');
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0);
  const [activeSlideIdx, setActiveSlideIdx] = useState<number>(0);

  const reelRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const filterProjectsByCategory = (catId: string) => {
    return PROJECTS.filter((p) => {
      if (catId === 'all') return true;
      if (catId === 'preserve') return p.location.includes('The Preserve');
      if (catId === 'highland-park') return p.location.includes('Highland Park');
      if (catId === 'preston-hollow') {
        return (
          p.location.includes('Preston Hollow') ||
          p.location === 'Dallas, TX' ||
          p.location.includes('Dallas / Fort Worth')
        );
      }
      if (catId === 'frisco') {
        return (
          p.location.includes('Frisco') ||
          p.location.includes('Legacy') ||
          p.location.includes('Kingswood')
        );
      }
      return true;
    });
  };

  const categories = [
    { id: 'all', label: `All Works (${PROJECTS.length})` },
    { id: 'preserve', label: 'The Preserve Villas' },
    { id: 'highland-park', label: 'Highland Park' },
    { id: 'preston-hollow', label: 'Preston Hollow' },
    { id: 'frisco', label: 'Frisco & Legacy' },
  ];

  const filteredProjects = filterProjectsByCategory(filter);
  const safeProjectIdx =
    activeProjectIdx < filteredProjects.length ? activeProjectIdx : 0;
  const activeProject = filteredProjects[safeProjectIdx] || PROJECTS[0];
  const activeImages =
    activeProject.images.length > 0
      ? activeProject.images
      : [activeProject.heroImage];
  const safeSlideIdx =
    activeSlideIdx < activeImages.length ? activeSlideIdx : 0;

  const handleFilterChange = (catId: string) => {
    setFilter(catId);
    setActiveProjectIdx(0);
    setActiveSlideIdx(0);
  };

  const handleSelectActiveProject = (idx: number) => {
    setActiveProjectIdx(idx);
    setActiveSlideIdx(0);
  };

  const handlePrevSlide = () => {
    setActiveSlideIdx((curr) =>
      curr === 0 ? activeImages.length - 1 : curr - 1
    );
  };

  const handleNextSlide = () => {
    setActiveSlideIdx((curr) =>
      curr === activeImages.length - 1 ? 0 : curr + 1
    );
  };

  const scrollReel = (direction: 'left' | 'right') => {
    if (!reelRef.current) return;
    const offset = direction === 'left' ? -460 : 460;
    reelRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  const handleSpotlightFromReel = (project: Project) => {
    const idx = filteredProjects.findIndex((p) => p.id === project.id);
    if (idx !== -1) {
      setActiveProjectIdx(idx);
      setActiveSlideIdx(0);
      stageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <section
      id="portfolio"
      className="py-24 sm:py-32 bg-[#FFFFFF] border-t border-black/[0.08] relative"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* A. Header & View Mode Bar */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-black/[0.08]">
            <span
              className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#0A0A0A]"
              style={{ fontFamily: 'var(--font-data)' }}
            >
              01 / ARCHITECTURAL ARCHIVE
            </span>
            <span
              className="text-xs uppercase tracking-[0.18em] text-[#6B6B6B]"
              style={{ fontFamily: 'var(--font-data)' }}
            >
              DALLAS · HIGHLAND PARK · PRESTON HOLLOW · FRISCO
            </span>
          </div>

          <div className="mt-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2
              className="text-[15vw] md:text-[11vw] font-bold leading-[0.88] text-[#0A0A0A] uppercase tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              SELECTED WORKS
            </h2>

            <p
              className="max-w-md text-sm sm:text-base text-[#6B6B6B] leading-relaxed lg:pb-2"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Explore our portfolio of custom-engineered residences. Select any
              estate in the interactive index to scrub through interior volumes,
              architectural elevations, and material studies.
            </p>
          </div>

          {/* Filter Pills + View Mode Switcher Bar */}
          <div className="mt-10 pt-6 border-t border-black/[0.08] flex flex-col xl:flex-row xl:items-center justify-between gap-6">
            {/* Neighborhood Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isActive = filter === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleFilterChange(cat.id)}
                    className={`px-4 py-2.5 text-xs uppercase tracking-[0.14em] transition-all duration-200 cursor-pointer border ${
                      isActive
                        ? 'bg-[#0A0A0A] text-white border-[#0A0A0A] font-semibold'
                        : 'bg-[#F5F3EF] text-[#6B6B6B] border-transparent hover:border-black/20 hover:text-[#0A0A0A]'
                    }`}
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center gap-3 self-start xl:self-auto">
              <span
                className="text-[11px] uppercase tracking-[0.16em] text-[#9A9A9A] hidden sm:inline"
                style={{ fontFamily: 'var(--font-data)' }}
              >
                VIEW MODE:
              </span>
              <div className="inline-flex bg-[#F5F3EF] p-1 border border-black/[0.08]">
                <button
                  type="button"
                  onClick={() => setViewMode('explorer')}
                  className={`inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.14em] transition-all cursor-pointer ${
                    viewMode === 'explorer'
                      ? 'bg-[#0A0A0A] text-white font-semibold shadow-xs'
                      : 'text-[#6B6B6B] hover:text-[#0A0A0A]'
                  }`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <Columns className="w-3.5 h-3.5" />
                  Interactive Explorer
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('archive')}
                  className={`inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.14em] transition-all cursor-pointer ${
                    viewMode === 'archive'
                      ? 'bg-[#0A0A0A] text-white font-semibold shadow-xs'
                      : 'text-[#6B6B6B] hover:text-[#0A0A0A]'
                  }`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <Grid className="w-3.5 h-3.5" />
                  Editorial Archive
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* B. Mode 1 (Default): Interactive Split-Screen Residence Explorer + Horizontal Reel */}
        {viewMode === 'explorer' ? (
          <div ref={stageRef} className="space-y-20">
            {/* 1. Top Split-Screen Interactive Stage */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column (lg:col-span-5) — Interactive Architectural Index */}
              <div className="lg:col-span-5 flex flex-col border border-black/[0.08] bg-white">
                <div className="px-5 py-3.5 bg-[#F5F3EF] border-b border-black/[0.08] flex items-center justify-between">
                  <span
                    className="text-xs font-bold uppercase tracking-[0.16em] text-[#0A0A0A]"
                    style={{ fontFamily: 'var(--font-data)' }}
                  >
                    ARCHITECTURAL INDEX ({filteredProjects.length})
                  </span>
                  <span
                    className="text-[11px] uppercase tracking-[0.14em] text-[#6B6B6B]"
                    style={{ fontFamily: 'var(--font-data)' }}
                  >
                    CLICK OR HOVER TO SPOTLIGHT
                  </span>
                </div>

                <div className="divide-y divide-black/[0.08] max-h-[680px] overflow-y-auto">
                  {filteredProjects.map((project, idx) => {
                    const isSelected = idx === safeProjectIdx;
                    return (
                      <div
                        key={project.id}
                        onClick={() => handleSelectActiveProject(idx)}
                        onMouseEnter={() => handleSelectActiveProject(idx)}
                        className={`group cursor-pointer transition-all duration-200 px-5 py-4 ${
                          isSelected
                            ? 'bg-[#0A0A0A] text-white'
                            : 'bg-white hover:bg-[#F5F3EF] text-[#0A0A0A]'
                        }`}
                      >
                        <div className="flex items-baseline justify-between gap-4">
                          <div className="flex items-baseline gap-3.5 min-w-0">
                            <span
                              className={`text-sm font-bold tracking-[0.14em] shrink-0 ${
                                isSelected ? 'text-white/70' : 'text-[#9A9A9A]'
                              }`}
                              style={{ fontFamily: 'var(--font-data)' }}
                            >
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <h3
                              className={`text-2xl sm:text-3xl font-bold uppercase tracking-tight truncate ${
                                isSelected ? 'text-white' : 'text-[#0A0A0A]'
                              }`}
                              style={{ fontFamily: 'var(--font-display)' }}
                            >
                              {project.name}
                            </h3>
                          </div>

                          <span
                            className={`text-xs font-bold tracking-[0.08em] shrink-0 ${
                              isSelected ? 'text-white/90' : 'text-[#0A0A0A]'
                            }`}
                            style={{ fontFamily: 'var(--font-data)' }}
                          >
                            {project.sqft}
                          </span>
                        </div>

                        <div className="mt-1.5 pl-7 flex items-center justify-between gap-2">
                          <span
                            className={`text-xs uppercase tracking-[0.1em] truncate ${
                              isSelected ? 'text-white/75' : 'text-[#6B6B6B]'
                            }`}
                            style={{ fontFamily: 'var(--font-sans)' }}
                          >
                            {project.location}
                          </span>
                          <span
                            className={`text-[11px] uppercase tracking-[0.12em] shrink-0 ${
                              isSelected ? 'text-white/60' : 'text-[#9A9A9A]'
                            }`}
                            style={{ fontFamily: 'var(--font-data)' }}
                          >
                            {project.images.length} PLATES
                          </span>
                        </div>

                        {/* Expanded Active State Details */}
                        {isSelected && (
                          <div className="mt-3.5 pt-3 pl-7 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
                            <span
                              className="text-[11px] uppercase tracking-[0.12em] text-white/80"
                              style={{ fontFamily: 'var(--font-sans)' }}
                            >
                              {project.category}
                            </span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectProject(project);
                              }}
                              className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] bg-white text-[#0A0A0A] px-3 py-1.5 hover:bg-[#F5F3EF] transition-colors cursor-pointer"
                              style={{ fontFamily: 'var(--font-sans)' }}
                            >
                              Inspect Dossier &rarr;
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column (lg:col-span-7) — Sticky Live Multi-Room Stage */}
              <div className="lg:col-span-7 lg:sticky lg:top-24 bg-[#F5F3EF] border border-black/[0.08] p-4 sm:p-6">
                {/* Stage Top Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-black/[0.08]">
                  <div className="flex items-center gap-3">
                    <span
                      className="bg-[#0A0A0A] text-white text-xs font-bold uppercase tracking-[0.16em] px-2.5 py-1"
                      style={{ fontFamily: 'var(--font-data)' }}
                    >
                      RESIDENCE {String(safeProjectIdx + 1).padStart(2, '0')} /{' '}
                      {String(filteredProjects.length).padStart(2, '0')}
                    </span>
                    <div>
                      <h3
                        className="text-2xl sm:text-4xl font-bold uppercase text-[#0A0A0A] leading-none"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {activeProject.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs font-bold uppercase tracking-[0.14em] text-[#0A0A0A] bg-white px-3 py-1.5 border border-black/[0.08]"
                      style={{ fontFamily: 'var(--font-data)' }}
                    >
                      PLATE {String(safeSlideIdx + 1).padStart(2, '0')} /{' '}
                      {String(activeImages.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Main Interactive Room/Angle Stage Viewer */}
                <div className="relative aspect-[16/10] w-full bg-[#0A0A0A] overflow-hidden group">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={`${activeProject.id}-${safeSlideIdx}`}
                      src={activeImages[safeSlideIdx]}
                      alt={`${activeProject.name} — Plate ${safeSlideIdx + 1}`}
                      className="w-full h-full object-cover object-center cursor-pointer"
                      onClick={() => onSelectProject(activeProject)}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </AnimatePresence>

                  {/* Top & Bottom Subtle Gradients */}
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/75 via-black/30 to-transparent pointer-events-none" />

                  {/* Top-Left Live Room/Angle Label */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                    <span
                      className="bg-black/65 backdrop-blur-xs text-white text-xs uppercase tracking-[0.14em] px-3 py-1"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {getPlateLabel(activeImages[safeSlideIdx], safeSlideIdx)}
                    </span>
                    <span
                      className="hidden sm:inline-flex items-center gap-1.5 bg-white/90 text-[#0A0A0A] text-[11px] font-semibold uppercase tracking-[0.14em] px-2.5 py-1"
                      style={{ fontFamily: 'var(--font-data)' }}
                    >
                      <Layers className="w-3.5 h-3.5" /> Interactive Room Scrubber
                    </span>
                  </div>

                  {/* Left / Right Room Flipper Arrows */}
                  {activeImages.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={handlePrevSlide}
                        aria-label="Previous architectural plate"
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/90 hover:bg-white text-[#0A0A0A] flex items-center justify-center transition-all shadow-md cursor-pointer active:scale-95"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNextSlide}
                        aria-label="Next architectural plate"
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/90 hover:bg-white text-[#0A0A0A] flex items-center justify-center transition-all shadow-md cursor-pointer active:scale-95"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  {/* Bottom Bar Inside Stage */}
                  <div className="absolute bottom-4 inset-x-4 flex items-center justify-between gap-4 pointer-events-none">
                    <p
                      className="text-xs text-white/85 max-w-lg line-clamp-1 hidden sm:block"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {activeProject.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => onSelectProject(activeProject)}
                      className="pointer-events-auto ml-auto inline-flex items-center gap-1.5 bg-white text-[#0A0A0A] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] hover:bg-[#F5F3EF] transition-colors cursor-pointer shadow-sm"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      Expand Plate <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Live Thumbnail Filmstrip Scrubber right inside the stage */}
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-[11px] uppercase tracking-[0.14em] text-[#6B6B6B]"
                      style={{ fontFamily: 'var(--font-data)' }}
                    >
                      ROOM & ELEVATION FILMSTRIP — CLICK ANY PLATE TO SCRUB ({activeImages.length} PLATES)
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={handlePrevSlide}
                        className="px-2 py-0.5 text-xs border border-black/[0.12] bg-white hover:bg-[#0A0A0A] hover:text-white transition-colors cursor-pointer"
                        style={{ fontFamily: 'var(--font-data)' }}
                      >
                        &larr; PREV
                      </button>
                      <button
                        type="button"
                        onClick={handleNextSlide}
                        className="px-2 py-0.5 text-xs border border-black/[0.12] bg-white hover:bg-[#0A0A0A] hover:text-white transition-colors cursor-pointer"
                        style={{ fontFamily: 'var(--font-data)' }}
                      >
                        NEXT &rarr;
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-2 overflow-x-auto pb-2 scroll-smooth-x">
                    {activeImages.map((img, idx) => {
                      const isCurr = idx === safeSlideIdx;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveSlideIdx(idx)}
                          className={`relative shrink-0 w-20 sm:w-24 aspect-[16/10] overflow-hidden cursor-pointer transition-all ${
                            isCurr
                              ? 'ring-2 ring-[#0A0A0A] opacity-100 scale-[1.02]'
                              : 'opacity-55 hover:opacity-95'
                          }`}
                        >
                          <img
                            src={img}
                            alt={`Plate ${idx + 1}`}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                          <span
                            className={`absolute bottom-1 left-1 px-1 text-[10px] font-bold leading-tight ${
                              isCurr
                                ? 'bg-[#0A0A0A] text-white'
                                : 'bg-black/60 text-white'
                            }`}
                            style={{ fontFamily: 'var(--font-data)' }}
                          >
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Live Architectural Specs Bar (4 Data Columns) */}
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 bg-white border border-black/[0.08] divide-y sm:divide-y-0 sm:divide-x divide-black/[0.08]">
                  <div className="p-3.5">
                    <div
                      className="text-[10px] uppercase tracking-[0.18em] text-[#9A9A9A]"
                      style={{ fontFamily: 'var(--font-data)' }}
                    >
                      ENCLAVE
                    </div>
                    <div
                      className="mt-1 text-xs sm:text-sm font-semibold text-[#0A0A0A] truncate"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {activeProject.location}
                    </div>
                  </div>

                  <div className="p-3.5">
                    <div
                      className="text-[10px] uppercase tracking-[0.18em] text-[#9A9A9A]"
                      style={{ fontFamily: 'var(--font-data)' }}
                    >
                      SCALE
                    </div>
                    <div
                      className="mt-1 text-xs sm:text-sm font-bold text-[#0A0A0A]"
                      style={{ fontFamily: 'var(--font-data)' }}
                    >
                      {activeProject.sqft}
                    </div>
                  </div>

                  <div className="p-3.5">
                    <div
                      className="text-[10px] uppercase tracking-[0.18em] text-[#9A9A9A]"
                      style={{ fontFamily: 'var(--font-data)' }}
                    >
                      TYPOLOGY
                    </div>
                    <div
                      className="mt-1 text-xs sm:text-sm font-semibold text-[#0A0A0A] truncate"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {activeProject.category}
                    </div>
                  </div>

                  <div className="p-3.5">
                    <div
                      className="text-[10px] uppercase tracking-[0.18em] text-[#9A9A9A]"
                      style={{ fontFamily: 'var(--font-data)' }}
                    >
                      PLATES
                    </div>
                    <div
                      className="mt-1 text-xs sm:text-sm font-bold text-[#0A0A0A]"
                      style={{ fontFamily: 'var(--font-data)' }}
                    >
                      {activeImages.length} Photographs
                    </div>
                  </div>
                </div>

                {/* Two Action Buttons */}
                <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectProject(activeProject)}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0A0A0A] text-white px-6 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-[#0A0A0A]/85 transition-colors cursor-pointer"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Open Full Storyboard &amp; Lightbox ({activeImages.length} Plates) &nearr;
                  </button>

                  <button
                    type="button"
                    onClick={onOpenConsultation}
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#0A0A0A] border border-[#0A0A0A] px-6 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-[#0A0A0A] hover:text-white transition-colors cursor-pointer"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Inquire on Commission
                  </button>
                </div>
              </div>
            </div>

            {/* 2. Bottom Horizontal Draggable/Scrollable "Curated Estates Reel" */}
            <div className="pt-12 border-t border-black/[0.08]">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#0A0A0A]" />
                    <span
                      className="text-xs font-bold uppercase tracking-[0.18em] text-[#6B6B6B]"
                      style={{ fontFamily: 'var(--font-data)' }}
                    >
                      INTERACTIVE HOVER-SCRUB REEL
                    </span>
                  </div>
                  <h3
                    className="mt-1 text-4xl sm:text-5xl font-bold uppercase text-[#0A0A0A] leading-none"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    CURATED ESTATES REEL
                  </h3>
                  <p
                    className="mt-2 text-xs sm:text-sm text-[#6B6B6B]"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Move your cursor horizontally across any residence card below to
                    scrub through its rooms and architectural plates in real time.
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => scrollReel('left')}
                    className="px-4 py-2.5 border border-black/[0.12] bg-white hover:bg-[#0A0A0A] hover:text-white text-xs font-semibold uppercase tracking-[0.14em] transition-colors cursor-pointer"
                    style={{ fontFamily: 'var(--font-data)' }}
                  >
                    &larr; Scroll Reel
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollReel('right')}
                    className="px-4 py-2.5 border border-black/[0.12] bg-white hover:bg-[#0A0A0A] hover:text-white text-xs font-semibold uppercase tracking-[0.14em] transition-colors cursor-pointer"
                    style={{ fontFamily: 'var(--font-data)' }}
                  >
                    Scroll Reel &rarr;
                  </button>
                </div>
              </div>

              <div
                ref={reelRef}
                className="overflow-x-auto scroll-smooth-x flex gap-6 pb-6"
              >
                {filteredProjects.map((project, idx) => (
                  <div
                    key={project.id}
                    className="w-[320px] sm:w-[400px] lg:w-[440px] shrink-0"
                  >
                    <InteractivePropertyCard
                      project={project}
                      index={idx}
                      onOpenModal={onSelectProject}
                      onSpotlight={handleSpotlightFromReel}
                      isSpotlighted={project.id === activeProject.id}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Mode 2 (Secondary): Editorial Archive Bento Showcase with Multi-Photo Hover Scrubbing */
          <div>
            <div className="mb-8 p-4 bg-[#F5F3EF] border border-black/[0.08] flex flex-wrap items-center justify-between gap-4">
              <span
                className="text-xs uppercase tracking-[0.14em] text-[#0A0A0A] font-medium"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Editorial Archive Mode — Hover horizontally across any card to scrub
                through its room plates, or click to open the full Architectural
                Storyboard.
              </span>
              <button
                type="button"
                onClick={() => setViewMode('explorer')}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0A0A0A] underline underline-offset-4 cursor-pointer"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Switch to Split-Screen Stage &rarr;
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {filteredProjects.map((project, idx) => {
                // Asymmetric editorial bento span pattern
                const mod = idx % 5;
                const colSpan =
                  mod === 0
                    ? 'md:col-span-7'
                    : mod === 1
                    ? 'md:col-span-5'
                    : mod === 2
                    ? 'md:col-span-4'
                    : mod === 3
                    ? 'md:col-span-4'
                    : 'md:col-span-4';

                return (
                  <motion.div
                    key={project.id}
                    className={colSpan}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <InteractivePropertyCard
                      project={project}
                      index={idx}
                      onOpenModal={onSelectProject}
                      aspectClass="aspect-[16/10]"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
