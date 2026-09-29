import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../data/siteData';
import { PROJECTS } from '../data/siteData';

interface FeaturedPortfolioProps {
  onSelectProject: (project: Project) => void;
  onOpenConsultation: () => void;
}

export const FeaturedPortfolio: React.FC<FeaturedPortfolioProps> = ({
  onSelectProject,
}) => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Works' },
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

  const getGridClasses = (idx: number) => {
    const patternIdx = idx % 5;
    if (patternIdx === 0) return 'col-span-1 md:col-span-2 aspect-[3/2]';
    if (patternIdx === 1) return 'col-span-1 aspect-[2/3]';
    return 'col-span-1 aspect-[4/3]';
  };

  return (
    <section id="portfolio" className="py-24 bg-[#FFFFFF] relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <h2 
            className="font-bold text-[#0A0A0A] leading-none text-[18vw] md:text-[14vw]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            WORKS
          </h2>
          <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p 
              className="text-[#6B6B6B] text-sm tracking-[0.15em] uppercase"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              20 Custom Built Residences
            </p>
            
            {/* Filter bar */}
            <div className="flex flex-wrap items-center gap-6">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`relative flex flex-col items-center pb-2 text-sm uppercase tracking-wider transition-colors duration-300 ${
                    filter === cat.id
                      ? 'text-[#0A0A0A] font-medium'
                      : 'text-[#9A9A9A] hover:text-[#0A0A0A]'
                  }`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {cat.label}
                  {filter === cat.id && (
                    <span className="absolute bottom-0 w-1 h-1 rounded-full bg-[#0A0A0A]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-16">
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className={`group cursor-pointer flex flex-col ${getGridClasses(idx)}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative w-full h-full overflow-hidden bg-[#F5F3EF] mb-4">
                <img
                  src={project.heroImage}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center img-editorial transition-transform duration-700 group-hover:scale-105"
                />
                
                <div 
                  className="absolute top-4 left-4 text-[11px] text-white font-mono bg-black/50 px-2 py-0.5"
                  style={{ fontFamily: 'var(--font-data)' }}
                >
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
              </div>

              <div className="flex flex-col gap-1 mt-auto">
                <h3 
                  className="text-xl uppercase tracking-tight text-[#0A0A0A] group-hover:text-[#6B6B6B] transition-colors"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {project.name}
                </h3>
                <div 
                  className="text-xs text-[#9A9A9A] uppercase tracking-[0.1em]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {project.location}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-24 flex justify-center">
          <button 
            className="text-sm text-[#0A0A0A] underline underline-offset-4 hover:text-[#6B6B6B] transition-colors"
            style={{ fontFamily: 'var(--font-sans)' }}
            onClick={() => setFilter('all')}
          >
            View All Projects &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};
