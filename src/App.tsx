import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { UxWritingPlayground } from './components/UxWritingPlayground';
import { DesignSystemViewer } from './components/DesignSystemViewer';
import { DevResourcesCalculator } from './components/DevResourcesCalculator';
import { TrainingHub } from './components/TrainingHub';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { TestimonialsAndFaq } from './components/TestimonialsAndFaq';
import { Footer } from './components/Footer';
import { ProposalEstimatorModal } from './components/ProposalEstimatorModal';
import { ServiceId } from './types';

export default function App() {
  const [proposalOpen, setProposalOpen] = useState(false);
  const [preSelectedService, setPreSelectedService] = useState<ServiceId | undefined>(undefined);
  const [preConfiguredDevNote, setPreConfiguredDevNote] = useState<string | undefined>(undefined);
  const [activeSection, setActiveSection] = useState<string>('services');

  // Handle RTL direction & font defaults
  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  }, []);

  const handleOpenProposalForService = (serviceId: ServiceId) => {
    setPreSelectedService(serviceId);
    setPreConfiguredDevNote(undefined);
    setProposalOpen(true);
  };

  const handleOpenProposalWithDevConfig = (configNote: string) => {
    setPreSelectedService('app-dev');
    setPreConfiguredDevNote(configNote);
    setProposalOpen(true);
  };

  const handleOpenProposalForTraining = (courseTitle: string) => {
    setPreSelectedService('training');
    setPreConfiguredDevNote(courseTitle);
    setProposalOpen(true);
  };

  const handleSelectService = (id: string) => {
    const element = document.getElementById(id) || document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-600 selection:text-white dir-rtl text-right">
      
      {/* Main Navbar */}
      <Navbar
        onOpenProposal={() => {
          setPreSelectedService(undefined);
          setPreConfiguredDevNote(undefined);
          setProposalOpen(true);
        }}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Page Sections */}
      <main className="space-y-0">
        
        {/* Hero Section */}
        <HeroSection
          onOpenProposal={() => {
            setPreSelectedService(undefined);
            setPreConfiguredDevNote(undefined);
            setProposalOpen(true);
          }}
          onSelectService={handleSelectService}
        />

        {/* Services Showcase */}
        <ServicesSection
          onSelectServiceForProposal={handleOpenProposalForService}
          selectedServiceId={preSelectedService}
        />

        {/* Interactive UX Writing Playground */}
        <UxWritingPlayground />

        {/* Design System & Token Inspector */}
        <DesignSystemViewer />

        {/* App Dev Resources Calculator */}
        <DevResourcesCalculator
          onOpenProposalWithDevConfig={handleOpenProposalWithDevConfig}
        />

        {/* Corporate Training & Bootcamps */}
        <TrainingHub
          onOpenProposalForTraining={handleOpenProposalForTraining}
        />

        {/* Case Studies Showcase */}
        <CaseStudiesSection />

        {/* Testimonials & FAQs */}
        <TestimonialsAndFaq />

      </main>

      {/* Footer */}
      <Footer
        onOpenProposal={() => {
          setPreSelectedService(undefined);
          setPreConfiguredDevNote(undefined);
          setProposalOpen(true);
        }}
        onSelectService={handleSelectService}
      />

      {/* Interactive Proposal Estimator Modal */}
      <ProposalEstimatorModal
        isOpen={proposalOpen}
        onClose={() => setProposalOpen(false)}
        preSelectedService={preSelectedService}
        preConfiguredDevNote={preConfiguredDevNote}
      />

    </div>
  );
}
