import React, { useState } from 'react';
import type { Project } from '../data/siteData';
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  if (!project) return null;

  const [activeImgIdx, setActiveImgIdx] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIdx((curr) => (curr === 0 ? project.images.length - 1 : curr - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIdx((curr) => (curr === project.images.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-6xl bg-[#0e0f14] border border-white/[0.1] shadow-2xl flex flex-col max-h-[94vh] overflow-hidden">
        {/* Top Bar */}
        <div className="p-6 border-b border-white/[0.08] flex items-center justify-between bg-[#111218]">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] font-mono">
              {project.category} &bull; {project.location}
            </div>
            <h3 className="font-serif text-3xl font-light text-white mt-0.5">
              {project.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-10 space-y-8">
          {/* Main Photo View */}
          <div className="relative aspect-[16/9] w-full bg-black overflow-hidden flex items-center justify-center">
            <img
              src={project.images[activeImgIdx] || project.heroImage}
              alt={`${project.name} ${activeImgIdx + 1}`}
              className="w-full h-full object-contain"
            />

            {project.images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            <div className="absolute bottom-4 right-6 text-[10px] font-mono text-slate-400 bg-black/80 px-2.5 py-1">
              {activeImgIdx + 1} / {project.images.length}
            </div>
          </div>

          {/* Thumbnail Strip */}
          {project.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIdx(idx)}
                  className={`relative flex-shrink-0 w-24 h-16 overflow-hidden border transition-all cursor-pointer ${
                    idx === activeImgIdx ? 'border-[#c5a880] opacity-100' : 'border-white/10 opacity-40 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Details & Action */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-white/[0.08] items-center">
            <div className="md:col-span-8">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880]">
                Architectural Monograph
              </span>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mt-1">
                {project.description}
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col gap-3">
              <div className="text-right text-xs font-mono text-[#c5a880]">
                Scale: {project.sqft}
              </div>
              <button
                onClick={() => {
                  onClose();
                  onInquire(project.name);
                }}
                className="w-full py-4 bg-[#c5a880] hover:bg-[#d8be96] text-black text-[11px] tracking-[0.25em] uppercase font-medium transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Inquire on Similar Commission</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
