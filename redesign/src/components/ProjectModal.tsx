import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Maximize2,
  ArrowUpRight,
} from 'lucide-react';
import type { Project } from '../data/siteData';
import { getPlateLabel } from './FeaturedPortfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquire,
}) => {
  const [modalMode, setModalMode] = useState<'storyboard' | 'cinema'>('storyboard');
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  useEffect(() => {
    if (project) {
      setModalMode('storyboard');
      setActiveImgIdx(0);
    }
  }, [project]);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        setModalMode('cinema');
        setActiveImgIdx((curr) =>
          curr === 0 ? project.images.length - 1 : curr - 1
        );
      } else if (e.key === 'ArrowRight') {
        setModalMode('cinema');
        setActiveImgIdx((curr) =>
          curr === project.images.length - 1 ? 0 : curr + 1
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const images =
    project.images.length > 0 ? project.images : [project.heroImage];
  const safeImgIdx = activeImgIdx < images.length ? activeImgIdx : 0;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIdx((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIdx((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  };

  const handleSelectPlateFromGrid = (idx: number) => {
    setActiveImgIdx(idx);
    setModalMode('cinema');
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Top Header Bar */}
      <header className="bg-white border-b border-black/[0.08] px-4 sm:px-8 lg:px-12 py-3.5 flex flex-wrap items-center justify-between gap-4 z-20 shrink-0">
        {/* Left: Residence Name, Location, and Scale */}
        <div className="flex items-center gap-4 min-w-0">
          <div>
            <div className="flex items-center gap-2">
              <span
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6B6B6B]"
                style={{ fontFamily: 'var(--font-data)' }}
              >
                ARCHITECTURAL DOSSIER
              </span>
              <span className="text-[#9A9A9A] text-[10px]">•</span>
              <span
                className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#0A0A0A]"
                style={{ fontFamily: 'var(--font-data)' }}
              >
                {project.sqft}
              </span>
            </div>
            <div className="flex flex-wrap items-baseline gap-3">
              <h2
                className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#0A0A0A] leading-none"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {project.name}
              </h2>
              <span
                className="text-xs uppercase tracking-[0.12em] text-[#6B6B6B] hidden md:inline"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {project.location}
              </span>
            </div>
          </div>
        </div>

        {/* Center: View Switcher Toggle (Storyboard Grid vs Cinema Stage) */}
        <div className="inline-flex bg-[#F5F3EF] p-1 border border-black/[0.08] order-3 lg:order-2 w-full sm:w-auto justify-center">
          <button
            type="button"
            onClick={() => setModalMode('storyboard')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.14em] transition-all cursor-pointer ${
              modalMode === 'storyboard'
                ? 'bg-[#0A0A0A] text-white font-semibold shadow-xs'
                : 'text-[#6B6B6B] hover:text-[#0A0A0A]'
            }`}
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            Storyboard Grid ({images.length})
          </button>
          <button
            type="button"
            onClick={() => setModalMode('cinema')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.14em] transition-all cursor-pointer ${
              modalMode === 'cinema'
                ? 'bg-[#0A0A0A] text-white font-semibold shadow-xs'
                : 'text-[#6B6B6B] hover:text-[#0A0A0A]'
            }`}
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <Maximize2 className="w-3.5 h-3.5" />
            Cinema Stage (Plate {String(safeImgIdx + 1).padStart(2, '0')})
          </button>
        </div>

        {/* Right: Inquire on Residence + Close (X) */}
        <div className="flex items-center gap-2.5 order-2 lg:order-3">
          <button
            type="button"
            onClick={() => onInquire(project.name)}
            className="inline-flex items-center gap-1.5 bg-[#0A0A0A] text-white px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] hover:bg-[#0A0A0A]/85 transition-colors cursor-pointer"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Inquire on Residence <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 border border-black/[0.08] flex items-center justify-center hover:bg-[#0A0A0A] hover:text-white transition-colors cursor-pointer text-[#0A0A0A]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Modal Body */}
      {modalMode === 'storyboard' ? (
        /* MODE 1: Storyboard Contact-Sheet & Architectural Spec Dossier */
        <div className="flex-1 overflow-y-auto bg-[#F5F3EF]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12">
            {/* Architectural Spec Notes Banner at Top */}
            <div className="bg-white border border-black/[0.08] p-6 sm:p-8 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7">
                  <span
                    className="text-xs font-bold uppercase tracking-[0.18em] text-[#6B6B6B]"
                    style={{ fontFamily: 'var(--font-data)' }}
                  >
                    ARCHITECTURAL SPECIFICATION NOTES
                  </span>
                  <h3
                    className="mt-2 text-3xl sm:text-5xl font-bold uppercase text-[#0A0A0A] leading-[0.92]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {project.name} — {project.category}
                  </h3>
                  <p
                    className="mt-4 text-sm sm:text-base text-[#6B6B6B] leading-relaxed max-w-2xl"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {project.description}
                  </p>
                </div>

                <div className="lg:col-span-5 grid grid-cols-2 gap-4 bg-[#F5F3EF] p-5 border border-black/[0.08]">
                  <div>
                    <div
                      className="text-[10px] uppercase tracking-[0.18em] text-[#9A9A9A]"
                      style={{ fontFamily: 'var(--font-data)' }}
                    >
                      ENCLAVE
                    </div>
                    <div
                      className="mt-1 text-xs sm:text-sm font-semibold text-[#0A0A0A]"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {project.location}
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-[10px] uppercase tracking-[0.18em] text-[#9A9A9A]"
                      style={{ fontFamily: 'var(--font-data)' }}
                    >
                      SCALE UNDER ROOF
                    </div>
                    <div
                      className="mt-1 text-xs sm:text-sm font-bold text-[#0A0A0A]"
                      style={{ fontFamily: 'var(--font-data)' }}
                    >
                      {project.sqft}
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-[10px] uppercase tracking-[0.18em] text-[#9A9A9A]"
                      style={{ fontFamily: 'var(--font-data)' }}
                    >
                      TYPOLOGY
                    </div>
                    <div
                      className="mt-1 text-xs sm:text-sm font-semibold text-[#0A0A0A]"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {project.category}
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-[10px] uppercase tracking-[0.18em] text-[#9A9A9A]"
                      style={{ fontFamily: 'var(--font-data)' }}
                    >
                      ARCHIVE PLATES
                    </div>
                    <div
                      className="mt-1 text-xs sm:text-sm font-bold text-[#0A0A0A]"
                      style={{ fontFamily: 'var(--font-data)' }}
                    >
                      {images.length} Curated Plates
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact-Sheet Instructions Bar */}
            <div className="flex items-center justify-between mb-6">
              <span
                className="text-xs font-bold uppercase tracking-[0.16em] text-[#0A0A0A]"
                style={{ fontFamily: 'var(--font-data)' }}
              >
                PHOTOGRAPHIC CONTACT SHEET — {images.length} PLATES
              </span>
              <span
                className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Click any plate to inspect in Cinema Stage
              </span>
            </div>

            {/* Bento Contact-Sheet Grid of ALL Photographs */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {images.map((img, idx) => {
                // Hero plate spans 8 cols, second plate spans 4 cols, then 4-col contact sheet cards
                const spanClass =
                  idx === 0
                    ? 'md:col-span-8'
                    : idx === 1
                    ? 'md:col-span-4'
                    : 'md:col-span-4';

                return (
                  <motion.div
                    key={idx}
                    onClick={() => handleSelectPlateFromGrid(idx)}
                    className={`group cursor-pointer bg-white border border-black/[0.08] hover:border-[#0A0A0A] transition-all flex flex-col ${spanClass}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: Math.min(idx * 0.03, 0.3),
                    }}
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A0A0A]">
                      <img
                        src={img}
                        alt={`${project.name} — Plate ${idx + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-[#0A0A0A]/85 text-white text-[11px] font-bold uppercase tracking-[0.14em] px-2.5 py-1"
                        style={{ fontFamily: 'var(--font-data)' }}
                      >
                        PLATE {String(idx + 1).padStart(2, '0')}
                      </div>
                      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[#0A0A0A] text-[11px] font-semibold uppercase tracking-[0.14em] px-3 py-1 flex items-center gap-1 shadow-sm"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        <Maximize2 className="w-3 h-3" /> Zoom Cinema View
                      </div>
                    </div>

                    <div className="px-4 py-3 flex items-center justify-between gap-2 bg-white">
                      <span
                        className="text-xs font-medium uppercase tracking-[0.1em] text-[#0A0A0A] truncate"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        {getPlateLabel(img, idx)}
                      </span>
                      <span
                        className="text-[11px] uppercase tracking-[0.12em] text-[#9A9A9A] shrink-0"
                        style={{ fontFamily: 'var(--font-data)' }}
                      >
                        {String(idx + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* MODE 2: Cinema Stage — Full-Viewport High-Res Viewer with Filmstrip */
        <div className="flex-1 flex flex-col bg-[#F5F3EF] overflow-hidden">
          {/* Main Stage Area */}
          <div className="flex-1 relative flex items-center justify-center overflow-hidden p-4 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.img
                key={safeImgIdx}
                src={images[safeImgIdx]}
                alt={`${project.name} — Plate ${safeImgIdx + 1}`}
                className="w-full h-full object-contain max-h-[calc(100vh-230px)] select-none"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            </AnimatePresence>

            {/* Top Left Floating Back-to-Storyboard Button & Plate Caption */}
            <div className="absolute top-4 left-4 sm:left-8 flex flex-wrap items-center gap-2 z-10">
              <button
                type="button"
                onClick={() => setModalMode('storyboard')}
                className="bg-white/95 hover:bg-[#0A0A0A] hover:text-white text-[#0A0A0A] border border-black/[0.12] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors cursor-pointer shadow-xs"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                &larr; All {images.length} Plates (Storyboard)
              </button>
              <span
                className="bg-[#0A0A0A] text-white px-3.5 py-2 text-xs font-bold uppercase tracking-[0.14em]"
                style={{ fontFamily: 'var(--font-data)' }}
              >
                PLATE {String(safeImgIdx + 1).padStart(2, '0')} /{' '}
                {String(images.length).padStart(2, '0')} —{' '}
                {getPlateLabel(images[safeImgIdx], safeImgIdx)}
              </span>
            </div>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous plate"
                  className="absolute left-4 sm:left-8 w-12 h-12 border border-black/15 hover:border-[#0A0A0A] bg-white/95 hover:bg-[#0A0A0A] hover:text-white flex items-center justify-center transition-colors cursor-pointer text-[#0A0A0A] shadow-sm"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next plate"
                  className="absolute right-4 sm:right-8 w-12 h-12 border border-black/15 hover:border-[#0A0A0A] bg-white/95 hover:bg-[#0A0A0A] hover:text-white flex items-center justify-center transition-colors cursor-pointer text-[#0A0A0A] shadow-sm"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Bottom Filmstrip Bar */}
          <div className="bg-white border-t border-black/[0.08] px-4 sm:px-8 lg:px-12 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            <div className="flex items-center gap-3 shrink-0">
              <span
                className="text-xs font-bold uppercase tracking-[0.14em] text-[#0A0A0A]"
                style={{ fontFamily: 'var(--font-data)' }}
              >
                PLATE {String(safeImgIdx + 1).padStart(2, '0')} OF{' '}
                {String(images.length).padStart(2, '0')}
              </span>
              <span className="text-[#9A9A9A]">•</span>
              <span
                className="text-xs text-[#6B6B6B] uppercase tracking-[0.1em]"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {getPlateLabel(images[safeImgIdx], safeImgIdx)}
              </span>
            </div>

            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto max-w-full pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImgIdx(idx)}
                    className={`relative shrink-0 cursor-pointer transition-all ${
                      idx === safeImgIdx
                        ? 'ring-2 ring-[#0A0A0A] opacity-100'
                        : 'opacity-45 hover:opacity-95'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Plate ${idx + 1}`}
                      className="w-16 h-11 object-cover"
                    />
                    <span
                      className="absolute bottom-0.5 left-0.5 bg-black/70 text-white text-[9px] font-bold px-1"
                      style={{ fontFamily: 'var(--font-data)' }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};
