import React from 'react';

export const BrandStats: React.FC = () => {
  const stats = [
    { label: "Engineering Heritage", value: "70+ Yrs", detail: "Concrete & subterranean mastery since 1975" },
    { label: "Critical Distinctions", value: "20+ Honors", detail: "WSJ House of the Day, McSam, Best of Show" },
    { label: "The Preserve at Fields", value: "2,500 Acres", detail: "Parkside Villas with SHM Architects" },
    { label: "Foundation Integrity", value: "100%", detail: "Zero structural settlement across career" },
  ];

  return (
    <div className="bg-[#faf8f4] border-y border-black/[0.06] py-16">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((s, idx) => (
            <div key={idx} className="border-l border-black/[0.08] pl-6 first:border-l-0">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1a1a1a] tracking-tight mb-1">
                {s.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#b8960c] font-light mb-1">
                {s.label}
              </div>
              <div className="text-[11px] text-[#888] font-light">
                {s.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
