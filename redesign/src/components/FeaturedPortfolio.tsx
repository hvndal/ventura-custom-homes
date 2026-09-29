import React, { useState } from 'react';
import type { Project } from '../data/siteData';
import { PROJECTS } from '../data/siteData';
import { ArrowUpRight } from 'lucide-react';

interface FeaturedPortfolioProps {
  onSelectProject: (project: Project) => void;
  onOpenConsultation: () => void;
}

export const FeaturedPortfolio: React.FC<FeaturedPortfolioProps> = ({
  onSelectProject,
  onOpenConsultation
}) => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Works (20)' },
    { id: 'preserve', label: 'The Preserve Villas' },
    { id: 'highland-park', label: 'Highland Park' },
    { id: 'preston-hollow', label: 'Preston Hollow' },
    { id: 'frisco', label: 'Hills of Kingswood & Legacy' },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'preserve') return p.location.includes('The Preserve');
    if (filter === 'highland-park') return p.location.includes('Highland Park');
    if (filter === 'preston-hollow') return p.location.includes('Preston Hollow');
    if (filter === 'frisco') return p.location.includes('Frisco') || p.location.includes('Legacy') || p.location.includes('Kingswood');
    return true;
  });

  return (
    <section id="portfolio" className="py-28 bg-[#0d0e11] border-t border-white/[0.06] relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#c5a880] font-light">
                Portfolio Monograph &bull; Zero Clicks Away
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#faf8f5] tracking-tight">
              Selected <span className="italic text-[#c5a880]">Architectural Works</span>
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-xs text-slate-400 font-light hidden sm:inline">
              Showing {filteredProjects.length} Custom Built Residences
            </span>
            <button
              onClick={onOpenConsultation}
              className="text-xs uppercase tracking-[0.22em] text-[#c5a880] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer pb-0.5 border-b border-[#c5a880]/50"
            >
              <span>Inquire on a Custom Commission</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Gallery Exhibition Filter Bar */}
        <div className="flex items-center gap-8 overflow-x-auto pb-6 mb-12 scrollbar-none border-b border-white/[0.04]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`text-[11px] tracking-[0.25em] uppercase transition-all duration-300 whitespace-nowrap cursor-pointer pb-2 relative font-light ${
                filter === cat.id
                  ? 'text-white font-normal'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {cat.label}
              {filter === cat.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#c5a880]" />
              )}
            </button>
          ))}
        </div>

        {/* Architectural Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#16171d] mb-5">
                <img
                  src={project.heroImage}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center arch-hover-zoom filter brightness-95 group-hover:brightness-105"
                />

                {/* Subtle Image Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Number Index */}
                <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-[#faf8f5]/80 bg-black/60 backdrop-blur-sm px-2 py-0.5">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>

                {/* Quick Photos Count */}
                <div className="absolute bottom-4 right-4 text-[10px] tracking-widest uppercase text-slate-300 bg-black/70 backdrop-blur-sm px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono">
                  {project.totalImages} Architectural Photographs
                </div>
              </div>

              {/* Caption & Metadata */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-[#faf8f5] group-hover:text-[#c5a880] transition-colors duration-300">
                    {project.name}
                  </h3>
                  <div className="text-[11px] tracking-[0.18em] uppercase text-slate-400 font-light mt-1">
                    {project.location}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] font-mono text-[#c5a880]">
                    {project.sqft}
                  </div>
                  <div className="text-[10px] tracking-wider text-slate-500 uppercase mt-1">
                    {project.category.split('(')[0].trim()}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Editorial Footnote Callout */}
        <div className="mt-24 p-12 border border-white/[0.08] bg-[#121318] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880]">
              Custom Site Evaluation
            </span>
            <h4 className="font-serif text-3xl font-light text-white mt-1">
              Building on Your Private Land or Estate Lot
            </h4>
            <p className="text-xs text-slate-400 font-light mt-2 leading-relaxed">
              Loy Lowary conducts on-site topographical and geotechnical site assessments throughout Highland Park, Preston Hollow, and Collin County before design drafting commences.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-8 py-4 bg-[#c5a880] hover:bg-[#d8be96] text-black text-[11px] tracking-[0.25em] uppercase font-medium transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            Request Site Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
