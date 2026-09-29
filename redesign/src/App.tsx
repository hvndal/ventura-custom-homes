import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedPortfolio } from './components/FeaturedPortfolio';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ProjectModal } from './components/ProjectModal';
import type { Project } from './data/siteData';

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
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] flex flex-col">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      <main className="flex-1">
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onScrollToSection={handleScrollToSection}
        />

        <FeaturedPortfolio
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        <TestimonialsSection />

        <ContactSection />
      </main>

      <Footer />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedProject={preselectedProject}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(projName) => handleOpenConsultation(projName)}
      />
    </div>
  );
}

export default App;
