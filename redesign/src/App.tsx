import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStats } from './components/BrandStats';
import { FeaturedPortfolio } from './components/FeaturedPortfolio';
import { PreserveSection } from './components/PreserveSection';
import { FoundersSection } from './components/FoundersSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AwardsSection } from './components/AwardsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ProjectModal } from './components/ProjectModal';
import type { Project } from './data/siteData';
import { MessageSquare, Phone } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [preselectedProject, setPreselectedProject] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenConsultation = (projectName?: string) => {
    setPreselectedProject(projectName || '');
    setIsConsultationOpen(true);
  };

  const handleScrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-slate-100 flex flex-col selection:bg-[#d4af37] selection:text-black">
      {/* Universal Luxury Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Authoritative H1 and Direct CTAs */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onScrollToSection={handleScrollToSection}
        />

        {/* Institutional Credibility Stats */}
        <BrandStats />

        {/* Direct Featured Portfolio Grid */}
        <FeaturedPortfolio
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* The Preserve at Fields Active Development & Villa Prototypes */}
        <PreserveSection
          onOpenConsultation={() => handleOpenConsultation('The Preserve at Fields (Frisco)')}
        />

        {/* Client & Homeowner Testimonials Carousel */}
        <TestimonialsSection />

        {/* The Founders' Engineering & Design Synergy */}
        <FoundersSection />

        {/* 20+ Prestigious Industry Awards & WSJ Press */}
        <AwardsSection />

        {/* Dedicated High-Converting Consultation & Contact Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Floating Mobile/Desktop Action Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <a
          href="tel:2145771959"
          className="w-12 h-12 rounded-full bg-[#171926] border border-white/20 hover:border-[#d4af37] text-white hover:text-[#d4af37] shadow-xl flex items-center justify-center transition-all hover:scale-105"
          title="Direct Phone Line"
        >
          <Phone className="w-5 h-5" />
        </a>

        <button
          onClick={() => handleOpenConsultation()}
          className="px-5 py-3 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e5c558] to-[#aa8212] text-black font-bold text-xs tracking-wider uppercase shadow-2xl shadow-[#d4af37]/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden sm:inline">Request Consultation</span>
          <span className="sm:hidden">Consult</span>
        </button>
      </div>

      {/* Universal Consultation Lead Capture Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedProject={preselectedProject}
      />

      {/* Full-Screen Project Gallery & Architectural Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(projName) => handleOpenConsultation(projName)}
      />
    </div>
  );
}

export default App;
