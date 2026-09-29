import React, { useState } from 'react';
import type { PreserveVilla } from '../data/siteData';
import { PRESERVE_VILLAS } from '../data/siteData';
import { ArrowUpRight } from 'lucide-react';

interface PreserveSectionProps {
  onOpenConsultation: () => void;
}

export const PreserveSection: React.FC<PreserveSectionProps> = ({ onOpenConsultation }) => {
  const [selectedVilla, setSelectedVilla] = useState<PreserveVilla>(PRESERVE_VILLAS[0]);

  const lots = [
    { title: "Boulevard Enclave", count: "17 Premier Lots", detail: "Front-yard living architectural concept along the primary greenway." },
    { title: "Hilltop Panorama", count: "5 Custom Lots", detail: "Averaging under 1 acre, elevated vistas overlooking the rolling terrain." },
    { title: "PGA Golf Frontage", count: "1 Half-Acre Lot", detail: "Direct panoramic views across the championship tournament course." }
  ];

  return (
    <section id="preserve" className="py-28 bg-[#0a0b0e] border-t border-white/[0.06] relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Monograph Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#c5a880]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#c5a880] font-light">
              Master Plan Commission &bull; Frisco, Texas
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#faf8f5] tracking-tight">
            The Preserve <span className="italic text-[#c5a880]">at Fields</span>
          </h2>
          <p className="mt-4 text-slate-400 font-light text-sm sm:text-base leading-relaxed">
            Spanning nearly 2,500 pristine acres adjacent to the new PGA World Headquarters and Omni PGA Frisco Resort. Ventura presents <span className="text-white">Parkside Villas</span>—an exclusive enclave developed in collaboration with renowned architectural practice <span className="text-[#c5a880]">SHM Architects</span>.
          </p>
        </div>

        {/* Villa Model Monograph Viewer */}
        <div className="border border-white/[0.08] bg-[#111218] mb-16">
          {/* Top Prototype Tabs */}
          <div className="flex border-b border-white/[0.08] overflow-x-auto scrollbar-none">
            {PRESERVE_VILLAS.map((villa, idx) => (
              <button
                key={villa.id}
                onClick={() => setSelectedVilla(villa)}
                className={`px-8 py-5 text-left transition-all duration-300 whitespace-nowrap cursor-pointer border-r border-white/[0.08] flex-1 min-w-[200px] ${
                  selectedVilla.id === villa.id
                    ? 'bg-[#181a23] text-white border-b-2 border-b-[#c5a880]'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'
                }`}
              >
                <div className="text-[10px] font-mono tracking-widest text-[#c5a880]">
                  0{idx + 1}
                </div>
                <div className="font-serif text-base mt-1 font-normal">
                  {villa.name}
                </div>
              </button>
            ))}
          </div>

          {/* Exhibition Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left: Architectural Render (7 Cols) */}
            <div className="lg:col-span-7 relative aspect-[16/10] bg-black overflow-hidden">
              <img
                src={selectedVilla.image}
                alt={selectedVilla.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-6 left-6 px-3 py-1 bg-black/70 backdrop-blur-sm border border-white/10 text-[10px] uppercase tracking-widest text-slate-300">
                SHM Architects Collaboration
              </div>
            </div>

            {/* Right: Technical Specifications (5 Cols) */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/[0.08] bg-[#111218]">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] mb-2 font-mono">
                  Prototype Elevation
                </div>
                <h3 className="font-serif text-3xl font-light text-white mb-2">
                  {selectedVilla.name}
                </h3>
                <div className="text-xs text-slate-400 font-light mb-8">
                  {selectedVilla.style}
                </div>

                {/* Specs Table */}
                <div className="divide-y divide-white/[0.06] text-xs font-light mb-8">
                  <div className="py-3 flex justify-between">
                    <span className="text-slate-500 uppercase tracking-widest">Enclosed Area</span>
                    <span className="font-mono text-white">{selectedVilla.sqft}</span>
                  </div>
                  <div className="py-3 flex justify-between">
                    <span className="text-slate-500 uppercase tracking-widest">Bedrooms</span>
                    <span className="font-mono text-white">{selectedVilla.beds} En-Suite Bedrooms</span>
                  </div>
                  <div className="py-3 flex justify-between">
                    <span className="text-slate-500 uppercase tracking-widest">Bathrooms</span>
                    <span className="font-mono text-white">{selectedVilla.baths} Bathrooms</span>
                  </div>
                  <div className="py-3 flex justify-between">
                    <span className="text-slate-500 uppercase tracking-widest">Availability</span>
                    <span className="text-[#c5a880]">{selectedVilla.status}</span>
                  </div>
                </div>

                <div className="text-xs text-slate-300 font-light leading-relaxed mb-8">
                  <span className="text-[#c5a880] font-normal uppercase tracking-wider block text-[10px] mb-1">
                    Architectural Note
                  </span>
                  {selectedVilla.highlight}
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full py-4 border border-[#c5a880] hover:bg-[#c5a880] text-[#c5a880] hover:text-black text-[11px] tracking-[0.25em] uppercase font-medium transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Reserve Prototype or Lot</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Lot Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lots.map((lot, i) => (
            <div
              key={i}
              className="p-8 border border-white/[0.08] bg-[#111218]/50"
            >
              <div className="text-[10px] font-mono text-[#c5a880] uppercase tracking-widest mb-1">
                {lot.count}
              </div>
              <h4 className="font-serif text-xl font-normal text-white mb-2">
                {lot.title}
              </h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                {lot.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
