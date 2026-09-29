import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Project } from '../data/siteData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  useEffect(() => {
    if (project) {
      setActiveImgIdx(0);
    }
  }, [project]);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        setActiveImgIdx((curr) => (curr === 0 ? project.images.length - 1 : curr - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveImgIdx((curr) => (curr === project.images.length - 1 ? 0 : curr + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIdx((curr) => (curr === 0 ? project.images.length - 1 : curr - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIdx((curr) => (curr === project.images.length - 1 ? 0 : curr + 1));
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top bar */}
      <div className="bg-white border-b border-black/[0.06] px-6 sm:px-12 py-4 flex items-center justify-between z-10 shrink-0">
        <div 
          className="text-lg uppercase tracking-tight font-bold text-[#0A0A0A]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {project.name}
        </div>
        <div 
          className="text-sm text-[#9A9A9A]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {String(activeImgIdx + 1).padStart(2, '0')} / {String(project.images.length).padStart(2, '0')}
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center hover:bg-[#F5F3EF] transition-colors cursor-pointer text-[#0A0A0A]"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main image area */}
      <div className="flex-1 bg-[#F5F3EF] relative flex items-center justify-center overflow-hidden">
        <img
          src={project.images[activeImgIdx] || project.heroImage}
          alt={`${project.name} ${activeImgIdx + 1}`}
          className="w-full object-contain max-h-[calc(100vh-180px)]"
        />

        {project.images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-6 w-12 h-12 rounded-full border border-black/10 hover:border-black/30 bg-white flex items-center justify-center transition-colors cursor-pointer text-[#0A0A0A]"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-6 w-12 h-12 rounded-full border border-black/10 hover:border-black/30 bg-white flex items-center justify-center transition-colors cursor-pointer text-[#0A0A0A]"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Bottom strip */}
      <div className="bg-white border-t border-black/[0.06] px-6 sm:px-12 py-4 flex flex-col sm:flex-row items-center justify-between z-10 shrink-0 gap-4 sm:gap-0">
        <div 
          className="text-xs text-[#9A9A9A] uppercase tracking-[0.1em]"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {project.location}
        </div>

        {project.images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto">
            {project.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImgIdx(idx)}
                className={`flex-shrink-0 cursor-pointer transition-opacity ${
                  idx === activeImgIdx 
                    ? 'ring-2 ring-[#0A0A0A] opacity-100' 
                    : 'opacity-40 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`thumbnail ${idx + 1}`} className="w-16 h-12 object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
