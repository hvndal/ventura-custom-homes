import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, BedDouble, Bath, Ruler, Car, Phone } from 'lucide-react';
import type { Project } from '../data/siteData';
import { getListingMeta } from '../data/listingMeta';
import { RetryImg } from './RetryImg';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  useEffect(() => {
    if (project) setActiveImgIdx(0);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const count = project.images.length;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') setActiveImgIdx((c) => (c === 0 ? count - 1 : c - 1));
      else if (e.key === 'ArrowRight') setActiveImgIdx((c) => (c === count - 1 ? 0 : c + 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const meta = getListingMeta(project);
  const images = project.images.length ? project.images : [project.heroImage];

  const step = (dir: 1 | -1) => (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIdx((c) => (c + dir + images.length) % images.length);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top bar */}
      <div className="border-b border-black/[0.08] px-6 sm:px-10 py-4 flex items-center justify-between shrink-0">
        <div
          className="text-[12px] uppercase tracking-[0.24em] text-[#6B6B6B]"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {project.location}
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-[13px] text-[#0A0A0A] hover:text-[#6B6B6B] transition-colors cursor-pointer"
          style={{ fontFamily: 'var(--font-sans)' }}
          aria-label="Close"
        >
          Close <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 min-h-0 flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden">
        {/* Gallery */}
        <div className="lg:flex-1 min-w-0 flex flex-col bg-[#F5F3EF]">
          <div className="relative flex-1 min-h-[300px] lg:min-h-0 flex items-center justify-center overflow-hidden">
            <RetryImg
              key={activeImgIdx}
              src={images[activeImgIdx]}
              alt={`${project.name} photo ${activeImgIdx + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={step(-1)}
                  className="absolute left-4 w-11 h-11 bg-white/90 hover:bg-white flex items-center justify-center cursor-pointer text-[#0A0A0A] transition-colors"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={step(1)}
                  className="absolute right-4 w-11 h-11 bg-white/90 hover:bg-white flex items-center justify-center cursor-pointer text-[#0A0A0A] transition-colors"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
            <div
              className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 text-[12px] text-[#0A0A0A]"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {activeImgIdx + 1} / {images.length}
            </div>
          </div>

          {images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto p-3 bg-white border-t border-black/[0.08] shrink-0">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIdx(idx)}
                  className={`flex-shrink-0 cursor-pointer transition-opacity ${
                    idx === activeImgIdx ? 'ring-2 ring-[#0A0A0A] opacity-100' : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <RetryImg src={img} alt={`thumbnail ${idx + 1}`} loading="lazy" className="w-20 h-14 object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Listing details */}
        <aside className="lg:w-[420px] xl:w-[460px] shrink-0 bg-white p-8 sm:p-10 lg:overflow-y-auto border-t lg:border-t-0 lg:border-l border-black/[0.08]">
          <span
            className="inline-block px-3 py-1 bg-[#F5F3EF] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0A0A0A]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {meta.status}
          </span>

          <div
            className="mt-5 text-5xl font-semibold text-[#0A0A0A] leading-none"
            style={{ fontFamily: 'var(--font-data)' }}
          >
            {meta.price}
          </div>
          <h3 className="mt-4 text-4xl font-bold text-[#0A0A0A]">{project.name}</h3>
          <p className="mt-2 text-[15px] text-[#6B6B6B]" style={{ fontFamily: 'var(--font-sans)' }}>
            {project.location}
          </p>

          <div
            className="mt-8 grid grid-cols-2 gap-px bg-black/[0.08] border border-black/[0.08]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {[
              { icon: BedDouble, value: String(meta.beds), label: 'Bedrooms' },
              { icon: Bath, value: String(meta.baths), label: 'Bathrooms' },
              { icon: Ruler, value: project.sqft, label: 'Living Area' },
              { icon: Car, value: `${meta.garage}-Car`, label: 'Garage' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-white p-4">
                <Icon className="w-4 h-4 text-[#6B6B6B] mb-2" />
                <div className="text-[17px] font-semibold text-[#0A0A0A]">{value}</div>
                <div className="text-[12px] text-[#6B6B6B]">{label}</div>
              </div>
            ))}
          </div>

          <p
            className="mt-8 text-[15px] leading-relaxed text-[#3a3a3a]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {project.description}
          </p>
          <p
            className="mt-4 text-[12px] uppercase tracking-[0.16em] text-[#9A9A9A]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {project.category}
          </p>

          <div className="mt-10 flex flex-col gap-3">
            <button
              onClick={() => onInquire(project.name)}
              className="w-full bg-[#0A0A0A] text-white py-4 text-[13px] font-semibold uppercase tracking-[0.16em] hover:bg-[#333] transition-colors cursor-pointer"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Request a Private Showing
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 border border-black/20 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#0A0A0A] hover:border-black transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <Phone className="w-4 h-4" /> Talk to Our Team
            </a>
          </div>

          <p
            className="mt-6 text-[11px] text-[#9A9A9A] leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Demo listing. Price, availability and room counts are illustrative only.
          </p>
        </aside>
      </div>
    </motion.div>
  );
};
