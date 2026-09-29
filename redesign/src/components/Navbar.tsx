import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, setActiveTab }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Works', id: 'portfolio' },
    { name: 'Voices', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl py-4 shadow-[0_1px_0_rgba(0,0,0,0.06)]'
            : 'py-6'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="cursor-pointer"
            >
              <span
                className={`font-display text-2xl tracking-[0.15em] font-bold transition-colors duration-500 ${
                  scrolled ? 'text-[#0A0A0A]' : 'text-white'
                }`}
                style={{ fontFamily: 'var(--font-display)' }}
              >
                VENTURA
              </span>
            </a>

            {/* Desktop Nav — just 3 links */}
            <nav className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-[13px] tracking-[0.08em] uppercase transition-all duration-300 cursor-pointer font-medium ${
                    scrolled
                      ? 'text-[#6B6B6B] hover:text-[#0A0A0A]'
                      : 'text-white/70 hover:text-white'
                  }`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {link.name}
                </button>
              ))}

              {/* CTA */}
              <button
                onClick={onOpenConsultation}
                className={`text-[13px] tracking-[0.08em] uppercase font-medium px-6 py-2.5 transition-all duration-500 cursor-pointer ${
                  scrolled
                    ? 'bg-[#0A0A0A] text-white hover:bg-[#333]'
                    : 'bg-white text-[#0A0A0A] hover:bg-white/90'
                }`}
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Inquire
              </button>
            </nav>

            {/* Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 transition-colors ${scrolled ? 'text-[#0A0A0A]' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer — full screen, minimal */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center gap-12 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="font-display text-5xl font-bold tracking-tight text-[#0A0A0A] hover:text-[#B5965A] transition-colors uppercase cursor-pointer"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenConsultation(); }}
            className="mt-8 px-10 py-4 bg-[#0A0A0A] text-white text-sm tracking-[0.1em] uppercase cursor-pointer"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Start a Project
          </button>
        </div>
      )}
    </>
  );
};
