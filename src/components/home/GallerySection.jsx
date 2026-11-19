import React, { useState, useEffect, useRef } from 'react';
import { Plus, MapPin } from 'lucide-react';

const GALLERY_PROJECTS = [
  {
    id: 'proj-1',
    title: 'Complexe Industriel & Gros Œuvre',
    category: 'Génie Civil',
    location: 'Zone Franche Industrielle',
    specs: 'Ouvrage de Génie Civil • 18 500 m²',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    description: 'Travaux lourds de génie civil, coulage de radiers haute résistance et structures métalliques grandes portées.'
  },
  {
    id: 'proj-2',
    title: 'Infrastructures Béton & Fondations Spéciales',
    category: 'Génie Civil',
    location: 'Plateforme Portuaire',
    specs: 'Infrastructures Lourdes • 24 000 m²',
    image: 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?w=600&q=80',
    description: 'Forage de pieux battus, soutènement de talus et terrassements massifs pour quais maritimes.'
  },
  {
    id: 'proj-3',
    title: 'Poste Haute & Moyenne Tension (HT/MT)',
    category: 'Électricité',
    location: 'Sous-station Électrique Régionale',
    specs: 'Distribution Électrique • 3 000 kVA',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
    description: 'Installation de cellules moyenne tension, transformateurs secs et armoires de distribution TGBT sécurisées.'
  },
  {
    id: 'proj-4',
    title: 'Axe Routier & Terrassements VRD',
    category: 'Génie Civil',
    location: 'Échangeur Autoroutier',
    specs: 'Linéaire Routier • 14,5 km de 2x2 voies',
    image: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?w=600&q=80',
    description: 'Pose d\'enrobé à chaud haute compacité, caniveaux préfabriqués et ouvrages d\'art de franchissement.'
  },
  {
    id: 'proj-5',
    title: 'Câblage VDI & Réseau Fibre Optique',
    category: 'Courant Faible',
    location: 'Zenith Business Tower',
    specs: 'Réseaux VDI & Data Center Tier-3',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    description: 'Déploiement de rocades fibre optique, baies de brassage cuivre Cat 6A et locaux techniques serveurs sécurisés.'
  },
  {
    id: 'proj-6',
    title: 'Système SSI & Vidéosurveillance IP',
    category: 'Sécurité',
    location: 'Siège Corporatif International',
    specs: 'SSI Catégorie A & Caméras IA',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    description: 'Intégration complète de détection incendie adressable, contrôle d\'accès biométrique et vidéosurveillance intelligente.'
  }
];

const FILTER_TABS = ['Tous', 'Génie Civil', 'Électricité', 'Courant Faible', 'Sécurité'];

export default function GallerySection({ onSelectProject }) {
  const [activeTab, setActiveTab] = useState('Tous');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects = activeTab === 'Tous'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter((proj) => proj.category === activeTab);

  const handleCardClick = (project) => {
    if (onSelectProject) {
      onSelectProject(project);
    }
  };

  return (
    <section 
      id="gallery" 
      ref={sectionRef} 
      className="py-20 lg:py-28 bg-[#F4F7F6] text-slate-800 relative scroll-mt-20 overflow-hidden"
      aria-label="Galerie de nos réalisations"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HEADER ================= */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 text-[#00c49e] font-bold text-xs uppercase tracking-widest bg-[#00E2B7]/15 px-4 py-1.5 rounded-full border border-[#00E2B7]/30">
            <span className="w-2 h-2 rounded-full bg-[#00E2B7] animate-pulse"></span>
            <span>NOS RÉALISATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16202C] font-['Outfit'] tracking-tight">
            Nos Projets Récents
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-['Plus_Jakarta_Sans'] max-w-2xl mx-auto">
            Découvrez une sélection de nos ouvrages majeurs alliant rigueur de génie civil, 
            haute technicité électrique et solutions intelligentes en courant faible.
          </p>
        </div>

        {/* ================= FILTER TABS ================= */}
        <div 
          className={`flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 transition-all duration-700 delay-150 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {FILTER_TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer shadow-sm ${
                  isActive
                    ? 'bg-[#00E2B7] text-white shadow-md shadow-[#00E2B7]/30 scale-105'
                    : 'bg-white text-[#16202C] hover:bg-slate-100 hover:text-black border border-slate-200/80 hover:border-slate-300'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* ================= 3-COLUMN PROJECTS GRID ================= */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-700 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleCardClick(project)}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#16202C] shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Permanent Bottom Gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1620]/95 via-[#0D1620]/40 to-transparent transition-opacity duration-300 group-hover:opacity-30" />

              {/* Static Category Pill (Top-Left) */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-block bg-[#16202C]/80 backdrop-blur-md text-[#00E2B7] border border-[#00E2B7]/30 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Hover Overlay Effect: Teal overlay with + / eye icon */}
              <div className="absolute inset-0 bg-[#00E2B7]/85 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 z-20">
                {/* Center Action Circle Button with Plus / Eye icon */}
                <div className="w-14 h-14 rounded-full bg-[#16202C] text-[#00E2B7] flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300 ease-out mb-4">
                  <Plus className="w-7 h-7 text-[#00E2B7] stroke-[2.5]" />
                </div>
                
                <span className="text-xs font-bold uppercase tracking-widest text-[#16202C] bg-white/90 px-3.5 py-1 rounded-full shadow-sm">
                  Voir le projet
                </span>
              </div>

              {/* Project Title Overlay at Bottom */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 transition-transform duration-300 group-hover:translate-y-1">
                <div className="text-[11px] font-semibold text-[#00E2B7] flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{project.location}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white font-['Outfit'] leading-snug drop-shadow-sm group-hover:text-[#16202C] transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
