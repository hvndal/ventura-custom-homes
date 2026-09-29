import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, activeTab, setActiveTab }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Selected Works', id: 'portfolio' },
    { name: 'The Preserve', id: 'preserve' },
    { name: 'Philosophy', id: 'founders' },
    { name: 'Press & Honors', id: 'awards' },
    { name: 'Client Notes', id: 'testimonials' },
    { name: 'Private Inquiries', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-[#0d0e11]/95 backdrop-blur-md border-b border-white/[0.08] py-4 shadow-xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-7'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex flex-col cursor-pointer"
            >
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.22em] text-[#faf8f5] group-hover:text-[#c5a880] transition-colors duration-300 font-light">
                VENTURA
              </span>
              <span className="text-[9px] tracking-[0.35em] text-[#8e929b] uppercase font-light -mt-0.5">
                Custom Homes &bull; Dallas &bull; Frisco
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-[11px] tracking-[0.25em] uppercase transition-all duration-300 cursor-pointer font-light relative py-1 ${
                    activeTab === link.id
                      ? 'text-[#c5a880]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[1px] bg-[#c5a880] transition-all duration-300 ${
                      activeTab === link.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                    }`}
                  />
                </button>
              ))}
            </nav>

            {/* Right Action Bar */}
            <div className="hidden sm:flex items-center gap-6">
              <a
                href="tel:2145771959"
                className="text-[11px] tracking-[0.2em] uppercase text-slate-400 hover:text-[#c5a880] transition-colors font-light"
              >
                (214) 577-1959
              </a>

              <button
                onClick={onOpenConsultation}
                className="px-6 py-2.5 border border-[#c5a880]/40 hover:border-[#c5a880] text-[#c5a880] hover:text-white bg-[#c5a880]/5 hover:bg-[#c5a880]/15 text-[11px] tracking-[0.22em] uppercase transition-all duration-500 cursor-pointer flex items-center gap-2 group"
              >
                <span>Inquire</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0d0e11]/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between pt-28 pb-10 px-8 border-b border-white/10 animate-in fade-in duration-300">
          <div className="flex flex-col gap-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c5a880]">
              Navigation
            </span>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left font-serif text-3xl font-light text-slate-200 hover:text-[#c5a880] transition-colors py-2 flex items-center justify-between border-b border-white/5"
              >
                <span>{link.name}</span>
                <span className="text-xs text-slate-600 font-mono">&mdash;&gt;</span>
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4 pt-8 border-t border-white/10">
            <div className="text-xs tracking-widest text-slate-400">
              Highland Park &bull; Frisco &bull; North Texas
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-4 bg-[#c5a880] text-black font-medium text-xs tracking-[0.25em] uppercase cursor-pointer"
            >
              Schedule Private Dialogue
            </button>
          </div>
        </div>
      )}
    </>
  );
};
