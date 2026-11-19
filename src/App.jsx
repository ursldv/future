import React, { useState } from 'react';

// Layout Components
import TopBar from './components/common/TopBar';
import HeaderNav from './components/common/HeaderNav';
import Footer from './components/common/Footer';

// Home Sections (ordered as they appear on page)
import HeroSection from './components/home/HeroSection';
import FeatureCardsStrip from './components/home/FeatureCardsStrip';
import AboutSection from './components/home/AboutSection';
import ServicesGrid from './components/home/ServicesGrid';
import WhyChooseUsSection from './components/home/WhyChooseUsSection';
import StatsCounterSection from './components/home/StatsCounterSection';
import GallerySection from './components/home/GallerySection';
import TeamSection from './components/home/TeamSection';
import FaqSection from './components/home/FaqSection';
import TestimonialsSection from './components/home/TestimonialsSection';
import BlogSection from './components/home/BlogSection';
import PartnersSection from './components/home/PartnersSection';
import ContactCtaSection from './components/home/ContactCtaSection';

// Modals
import ProjectDetailModal from './components/modals/ProjectDetailModal';
import ServiceDetailModal from './components/modals/ServiceDetailModal';
import ArticleModal from './components/modals/ArticleModal';
import JobApplicationModal from './components/modals/JobApplicationModal';
import QuoteModal from './components/modals/QuoteModal';
import AdminDashboardModal from './components/admin/AdminDashboardModal';

function App() {
  // Modal states
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  // Demo data for Back-Office
  const [quotesList, setQuotesList] = useState([
    {
      reference: "FB-DEV-842109",
      date: "18/11/2026",
      name: "Karim Benali",
      company: "Groupe Immobilier Atlas",
      service: "Études Techniques & Ingénierie",
      surface: "3 200 m²",
      budget: "50 à 150 Millions DZD",
      phone: "+213 XX XX XX XX",
      email: "k.benali@atlas-immobilier.dz",
      description: "Étude technique complète pour complexe résidentiel de 12 appartements avec installation courant faible intégrée.",
      status: "En cours d'étude"
    },
    {
      reference: "FB-DEV-719340",
      date: "17/11/2026",
      name: "Nadia Ferhat",
      company: "SEAAL",
      service: "Travaux Génie Civil & VRD",
      surface: "8.5 km",
      budget: "Plus de 200 Millions DZD",
      phone: "+213 XX XX XX XX",
      email: "n.ferhat@seaal.dz",
      description: "Travaux de génie civil pour réseau d'adduction d'eau potable et VRD.",
      status: "Nouveau"
    }
  ]);

  const [messagesList] = useState([
    {
      id: "MSG-101",
      date: "18/11/2026",
      name: "Ahmed Meziane",
      email: "a.meziane@cosider.dz",
      phone: "+213 XX XX XX XX",
      subject: "Partenariat Bureau d'Études",
      message: "Bonjour, nous sommes un bureau d'études et souhaitons collaborer avec vos ingénieurs sur notre prochain projet d'immeuble de bureaux R+10."
    }
  ]);

  const handleQuoteSubmitted = (newQuote) => {
    setQuotesList((prev) => [newQuote, ...prev]);
  };

  const handleQuickBooking = (bookingData) => {
    const newRef = "FB-DEV-" + Math.floor(100000 + Math.random() * 900000);
    const newQuote = {
      reference: newRef,
      date: bookingData.date || new Date().toLocaleDateString('fr-FR'),
      name: bookingData.name,
      company: "Demande Rapide",
      service: bookingData.service,
      surface: "Évaluation préliminaire",
      budget: "À quantifier",
      phone: bookingData.phone,
      email: bookingData.email,
      description: `Demande rapide — démarrage souhaité le ${bookingData.date || "dès que possible"}.`,
      status: "Nouveau"
    };
    handleQuoteSubmitted(newQuote);
    alert(`Votre demande a été enregistrée sous la référence ${newRef}. Un ingénieur Future Buildings vous contactera sous 24h.`);
  };

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Top Bar — Dark navy with social + contact info */}
      <TopBar onOpenAdminModal={() => setIsAdminModalOpen(true)} />

      {/* Navigation — White sticky navbar */}
      <HeaderNav 
        onOpenQuoteModal={openQuoteModal}
        onOpenSearch={openQuoteModal}
      />

      <main className="flex-1">
        {/* Hero — Full-screen with gradient overlay and booking form */}
        <HeroSection 
          onOpenQuoteModal={openQuoteModal}
          onQuickBooking={handleQuickBooking}
        />

        {/* 3 Feature Cards — Dark navy on white */}
        <FeatureCardsStrip />

        {/* About — Dual images + company description */}
        <AboutSection onOpenQuoteModal={openQuoteModal} />

        {/* Services Grid — Dark bg with white cards and diamond icons */}
        <ServicesGrid 
          onSelectService={(service) => setSelectedService(service)}
          onOpenQuoteModal={openQuoteModal}
        />

        {/* Why Choose Us — Checklist + video preview */}
        <WhyChooseUsSection onOpenQuoteModal={openQuoteModal} />

        {/* Stats Counter — Full-width teal banner */}
        <StatsCounterSection />

        {/* Gallery — Filterable project grid */}
        <GallerySection 
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Team — 4 expert cards */}
        <TeamSection />

        {/* FAQ — Image + accordion */}
        <FaqSection onOpenQuoteModal={openQuoteModal} />

        {/* Testimonials — Dark bg, white cards */}
        <TestimonialsSection />

        {/* Blog — 3 article cards */}
        <BlogSection 
          onSelectArticle={(article) => setSelectedArticle(article)}
        />

        {/* Partners — Logo strip */}
        <PartnersSection />

        {/* Contact CTA — Teal banner before footer */}
        <ContactCtaSection onOpenQuoteModal={openQuoteModal} />
      </main>

      {/* Footer — 4-column dark layout */}
      <Footer 
        onOpenQuoteModal={openQuoteModal}
        onOpenAdminModal={() => setIsAdminModalOpen(true)}
      />

      {/* Modals */}
      <ProjectDetailModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)}
        onOpenQuoteModal={openQuoteModal}
      />

      <ServiceDetailModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)}
        onOpenQuoteModal={openQuoteModal}
      />

      <ArticleModal 
        article={selectedArticle} 
        onClose={() => setSelectedArticle(null)}
      />

      <JobApplicationModal 
        job={selectedJob} 
        onClose={() => setSelectedJob(null)}
      />

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={closeQuoteModal}
        onQuoteSubmitted={handleQuoteSubmitted}
      />

      <AdminDashboardModal 
        isOpen={isAdminModalOpen} 
        onClose={() => setIsAdminModalOpen(false)}
        quotes={quotesList}
        messages={messagesList}
      />
    </div>
  );
}

export default App;
