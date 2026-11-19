import { useState } from 'react';

import Header from './components/site/Header';
import Hero from './components/site/Hero';
import Expertises from './components/site/Expertises';
import Methode from './components/site/Methode';
import Realisations from './components/site/Realisations';
import Groupe from './components/site/Groupe';
import Engagements from './components/site/Engagements';
import Temoignages from './components/site/Temoignages';
import Questions from './components/site/Questions';
import Actualites from './components/site/Actualites';
import Carrieres from './components/site/Carrieres';
import Contact from './components/site/Contact';
import Footer from './components/site/Footer';

import ProjectDetailModal from './components/modals/ProjectDetailModal';
import ServiceDetailModal from './components/modals/ServiceDetailModal';
import ArticleModal from './components/modals/ArticleModal';
import JobApplicationModal from './components/modals/JobApplicationModal';
import QuoteModal from './components/modals/QuoteModal';
import AdminDashboardModal from './components/admin/AdminDashboardModal';

// Données de démonstration pour l'espace interne
const DEMO_QUOTES = [
  {
    reference: 'FB-DEV-842109',
    date: '18/11/2026',
    name: 'Koffi Adjovi',
    company: 'Groupe Immobilier Atlantique',
    service: 'Études Techniques & Ingénierie',
    surface: '3 200 m²',
    budget: '150 à 500 M FCFA',
    phone: '+229 XX XX XX XX',
    email: 'k.adjovi@groupe-atlantique.bj',
    description: 'Étude technique complète pour complexe résidentiel de 12 appartements avec installation courant faible intégrée.',
    status: "En cours d'étude",
  },
  {
    reference: 'FB-DEV-719340',
    date: '17/11/2026',
    name: 'Aïcha Dossou',
    company: 'Société des Eaux (démo)',
    service: 'Travaux Génie Civil & VRD',
    surface: '8.5 km',
    budget: 'Plus de 500 M FCFA',
    phone: '+229 XX XX XX XX',
    email: 'a.dossou@exemple.bj',
    description: "Travaux de génie civil pour réseau d'adduction d'eau potable et VRD.",
    status: 'Nouveau',
  },
];

const DEMO_MESSAGES = [
  {
    id: 'MSG-101',
    date: '18/11/2026',
    name: 'Serge Houngbo',
    email: 's.houngbo@bet-exemple.bj',
    phone: '+229 XX XX XX XX',
    subject: "Partenariat Bureau d'Études",
    message:
      "Bonjour, nous sommes un bureau d'études et souhaitons collaborer avec vos ingénieurs sur notre prochain projet d'immeuble de bureaux R+10.",
  },
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [quotes, setQuotes] = useState(DEMO_QUOTES);

  const addQuote = (q) => setQuotes((prev) => [q, ...prev]);

  // Demande rapide depuis le formulaire de contact : renvoie la référence
  const handleQuickBooking = (data) => {
    const reference = 'FB-DEV-' + Math.floor(100000 + Math.random() * 900000);
    addQuote({
      reference,
      date: new Date().toLocaleDateString('fr-FR'),
      name: data.name,
      company: 'Demande rapide',
      service: data.service,
      surface: 'À évaluer',
      budget: 'À quantifier',
      phone: data.phone,
      email: data.email,
      description: data.message || 'Demande de rappel.',
      status: 'Nouveau',
    });
    return reference;
  };

  const openQuote = () => setIsQuoteOpen(true);

  return (
    <div className="min-h-screen bg-night text-fog">
      <a
        href="#groupe"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-brand focus:px-4 focus:py-2 focus:text-night"
      >
        Aller au contenu
      </a>

      <Header onOpenQuote={openQuote} />

      <main>
        <Hero onOpenQuote={openQuote} />
        <Groupe onOpenQuote={openQuote} />
        <Expertises onSelectService={setSelectedService} onOpenQuote={openQuote} />
        <Realisations onSelectProject={setSelectedProject} />
        <Methode />
        <Engagements />
        <Temoignages />
        <Actualites onSelectArticle={setSelectedArticle} />
        <Carrieres onSelectJob={setSelectedJob} />
        <Questions />
        <Contact onQuickBooking={handleQuickBooking} />
      </main>

      <Footer onOpenQuote={openQuote} />

      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} onOpenQuoteModal={openQuote} />
      <ServiceDetailModal service={selectedService} onClose={() => setSelectedService(null)} onOpenQuoteModal={openQuote} />
      <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
      <JobApplicationModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} onQuoteSubmitted={addQuote} />
      <AdminDashboardModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        quotes={quotes}
        messages={DEMO_MESSAGES}
      />
    </div>
  );
}

export default App;
