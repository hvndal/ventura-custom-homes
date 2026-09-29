import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenConsultation: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, activeTab, setActiveTab }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.75);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Estates', id: 'portfolio' },
    { name: 'Client Stories', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl py-3.5 shadow-[0_1px_0_rgba(0,0,0,0.08)]'
            : 'bg-gradient-to-b from-black/55 via-black/20 to-transparent py-5'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex items-center justify-between">
            {/* Top-Left Official Transparent-ish Ventura Custom Homes Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative flex items-center cursor-pointer select-none"
              aria-label="Ventura Custom Homes"
            >
              <div className="relative h-10 sm:h-12 w-auto flex items-center">
                {/* Light translucent logo over dark hero video */}
                <img
                  src="/ventura-logo-light.png"
                  alt="Ventura Custom Homes"
                  className={`h-10 sm:h-12 w-auto object-contain transition-all duration-700 ${
                    scrolled
                      ? 'opacity-0 scale-95 pointer-events-none absolute inset-0'
                      : 'opacity-85 group-hover:opacity-100 drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]'
                  }`}
                />
                {/* Dark monochrome logo when scrolled onto Greek White header */}
                <img
                  src="/ventura-logo-dark.png"
                  alt="Ventura Custom Homes"
                  className={`h-9 sm:h-11 w-auto object-contain transition-all duration-700 ${
                    scrolled
                      ? 'opacity-90 group-hover:opacity-100 scale-100'
                      : 'opacity-0 scale-95 pointer-events-none absolute inset-0'
                  }`}
                />
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10 lg:gap-12">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative py-1 text-[21px] tracking-[0.01em] transition-all duration-300 cursor-pointer group ${
                      scrolled
                        ? 'text-[#6B6B6B] hover:text-[#0A0A0A]'
                        : 'text-white/80 hover:text-white'
                    }`}
                    style={{ fontFamily: 'var(--font-data)' }}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 bottom-0 h-[1px] transition-all duration-500 ${
                        scrolled ? 'bg-[#0A0A0A]' : 'bg-white'
                      } ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    />
                  </button>
                );
              })}

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenConsultation}
                className={`text-[16px] tracking-[0.06em] px-7 py-2 transition-all duration-500 cursor-pointer ${
                  scrolled
                    ? 'bg-[#0A0A0A] text-white hover:bg-[#262626]'
                    : 'bg-white/90 backdrop-blur-md text-[#0A0A0A] hover:bg-white'
                }`}
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Inquire
              </motion.button>
            </nav>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 transition-colors ${scrolled ? 'text-[#0A0A0A]' : 'text-white'}`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, idx) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * idx }}
                onClick={() => handleNavClick(link.id)}
                className="text-4xl font-bold uppercase tracking-wider text-[#0A0A0A] hover:text-[#6B6B6B] transition-colors"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {link.name}
              </motion.button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="mt-4 bg-[#0A0A0A] text-white text-sm tracking-[0.15em] uppercase px-10 py-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Inquire
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
