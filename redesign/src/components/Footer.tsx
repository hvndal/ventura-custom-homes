import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090b] border-t border-white/[0.08] pt-20 pb-14 text-slate-400 text-xs font-light">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif text-2xl tracking-[0.22em] text-[#faf8f5] font-light">
              VENTURA
            </span>
            <div className="text-[9px] tracking-[0.35em] uppercase text-[#c5a880] -mt-2">
              Custom Homes &bull; Dallas &bull; Frisco
            </div>
            <p className="text-slate-400 font-light text-xs max-w-sm leading-relaxed pt-2">
              Bespoke luxury custom estates crafted across Dallas, Highland Park, Preston Hollow, and Frisco. Defined by structural foundation mastery, walk-out basements, and timeless design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880]">
              Monograph
            </div>
            <ul className="space-y-2 text-[11px] tracking-wider uppercase font-light">
              <li><a href="#portfolio" className="hover:text-white transition-colors">Selected Works (20)</a></li>
              <li><a href="#preserve" className="hover:text-white transition-colors">The Preserve at Fields</a></li>
              <li><a href="#preserve" className="hover:text-white transition-colors">Parkside Villas (SHM)</a></li>
              <li><a href="#founders" className="hover:text-white transition-colors">The Founders</a></li>
              <li><a href="#awards" className="hover:text-white transition-colors">Press & Distinctions</a></li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="space-y-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880]">
              Direct Inquiries
            </div>
            <ul className="space-y-2 text-[11px] leading-relaxed">
              <li>
                <span className="text-slate-500">Shideh Lowary:</span><br />
                <a href="tel:2145771959" className="text-white hover:text-[#c5a880] font-mono">(214) 577-1959</a>
              </li>
              <li>
                <span className="text-slate-500">Loy Lowary:</span><br />
                <a href="tel:2147283933" className="text-white hover:text-[#c5a880] font-mono">(214) 728-3933</a>
              </li>
              <li>
                <a href="mailto:inquiries@venturacustomhomes.com" className="text-slate-300 hover:text-white">
                  inquiries@venturacustomhomes.com
                </a>
              </li>
            </ul>
          </div>

          {/* Office Directory */}
          <div className="space-y-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880]">
              Studios
            </div>
            <div className="space-y-2 text-[11px] leading-relaxed">
              <div>
                <span className="text-white">Dallas Studio:</span><br />
                4311 Beverly Dr, Dallas, TX 75205
              </div>
              <div>
                <span className="text-white">Frisco Studio:</span><br />
                5 Cowboys Way, STE 300, Frisco, TX 75034
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Studio Credit */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-wider text-slate-500 uppercase">
          <div>
            &copy; {new Date().getFullYear()} Ventura Custom Homes Inc. All rights reserved.
          </div>

          <div className="text-center md:text-right text-[10px] tracking-widest text-slate-400">
            Designed & Engineered by{' '}
            <a
              href="https://mander.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c5a880] hover:underline font-medium"
            >
              Mander Labs (mander.tech)
            </a>
            {' '}&bull; Web Design Studio &bull; Vancouver & Burnaby, BC
          </div>

          <button
            onClick={scrollToTop}
            className="hover:text-[#c5a880] transition-colors cursor-pointer"
          >
            Back to Top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
};
