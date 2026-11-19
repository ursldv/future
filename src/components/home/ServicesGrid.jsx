import React, { useState, useEffect, useRef } from 'react';
import { 
  FileSearch, 
  Award, 
  ClipboardCheck, 
  Building2, 
  Wrench, 
  Shield, 
  ArrowRight 
} from 'lucide-react';

export const SERVICES_LIST = [
  {
    id: "etudes-techniques",
    title: "Études Techniques",
    category: "Ingénierie & Conception",
    subtitle: "Calculs de structures, dimensionnement VRD, plans d'exécution et maquettes BIM 3D",
    shortDesc: "Conception d'ingénierie détaillée, dimensionnement des structures béton et métal, études géotechniques, hydrauliques et modélisation BIM.",
    officialName: "Études techniques préliminaires, calculs d'ouvrages et modélisation BIM",
    iconComponent: FileSearch,
    icon: "FileSearch",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Modélisation numérique BIM 3D conforme aux standards internationaux",
      "Optimisation structurelle réduisant les coûts de matériaux de 15%",
      "Conformité stricte aux normes parasismiques (Eurocodes et BAEL)",
      "Dossiers de plans d'exécution d'une précision millimétrique"
    ],
    applications: [
      "Bâtiments résidentiels, tertiaires et industriels",
      "Infrastructures de transport, voiries et ponts",
      "Réseaux d'assainissement et adduction d'eau",
      "Réhabilitations complexes de structures existantes"
    ],
    technologies: ["BIM Revit 3D", "Robot Structural Analysis", "AutoCAD Civil 3D"]
  },
  {
    id: "expertise-conseil",
    title: "Expertise & Conseil",
    category: "Audit & Conseil Technique",
    subtitle: "Diagnostics structurels, audits de sécurité, assistance à maîtrise d'ouvrage (AMO)",
    shortDesc: "Audits techniques complets, diagnostics de conformité réglementaire, expertises de sinistres et accompagnement stratégique en maîtrise d'ouvrage.",
    officialName: "Audits de conformité, diagnostics structurels et assistance à maîtrise d'ouvrage",
    iconComponent: Award,
    icon: "Award",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Ingénieurs experts assermentés avec plus de 15 ans d'expérience",
      "Rapports d'expertise certifiés opposables aux assurances et tribunaux",
      "Évaluation précise de la durée de vie résiduelle des ouvrages",
      "Recommandations concrètes d'optimisation budgétaire et technique"
    ],
    applications: [
      "Audits préalables à l'acquisition immobilière",
      "Diagnostics de pathologies du béton et fissures",
      "Vérification de la conformité aux normes coupe-feu et ERP",
      "Médiation technique et résolution de litiges de construction"
    ],
    technologies: ["Scanners laser 3D", "Ultrasons & sclérométrie", "Logiciels d'analyse statique"]
  },
  {
    id: "suivi-controle",
    title: "Suivi et Contrôle",
    category: "Contrôle Qualité & Pilotage",
    subtitle: "Maîtrise d'œuvre, supervision de chantiers, respect des plannings et conformité QHSE",
    shortDesc: "Surveillance rigoureuse de la qualité d'exécution, pilotage des plannings, contrôle de conformité des matériaux et respect des règles QHSE.",
    officialName: "Suivi d'exécution, ordonnancement, pilotage, coordination et contrôle qualité",
    iconComponent: ClipboardCheck,
    icon: "ClipboardCheck",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Présence quotidienne d'ingénieurs superviseurs sur site",
      "Contrôles systématiques des bétons et ferraillages avant coulage",
      "Rapports hebdomadaires d'avancement avec métriques précises",
      "Zéro compromis sur les règles de sécurité et de santé au travail"
    ],
    applications: [
      "Direction de l'Exécution des Travaux (DET)",
      "Ordonnancement, Pilotage et Coordination (OPC)",
      "Opérations préalables à la réception (OPR)",
      "Audits de sécurité chantiers et conformité environnementale"
    ],
    technologies: ["Drones de surveillance", "Plateforme cloud de reporting", "Capteurs de cure béton"]
  },
  {
    id: "travaux-genie-civil",
    title: "Travaux Génie Civil",
    category: "Génie Civil & VRD",
    subtitle: "Terrassements lourds, fondations spéciales, voiries urbaines, ponts et plateformes",
    shortDesc: "Exécution de terrassements grande masse, fondations profondes, voiries et réseaux divers (VRD), plateformes industrielles et ouvrages d'art.",
    officialName: "Terrassements, fondations profondes, voiries, assainissement et ouvrages d'art",
    iconComponent: Building2,
    icon: "Building2",
    image: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Parc d'engins lourds récents (pelles, niveleuses, compacteurs)",
      "Maîtrise complète de l'assainissement et de l'hydraulique urbaine",
      "Agrégats et enrobés contrôlés selon les normes géotechniques OPM",
      "Capacité de déploiement d'équipes en 2x8 ou 3x8 pour chantiers urgents"
    ],
    applications: [
      "Voies express urbaines, voiries et aires de stationnement",
      "Plateformes logistiques et dallages industriels lourds",
      "Réseaux d'égouttage, caniveaux et bassins de rétention",
      "Ponts, dalots en béton armé et murs de soutènement"
    ],
    technologies: ["Guidage d'engins GPS 3D", "Compactage à impact contrôlé", "Béton armé fibré"]
  },
  {
    id: "lots-techniques",
    title: "Lots Techniques",
    category: "Fluides & Génie Énergétique",
    subtitle: "Génie climatique (CVC), plomberie sanitaire, réseaux électriques et protection incendie",
    shortDesc: "Ingénierie et installation des corps d'état techniques : climatisation VRV/VRF, chambres froides, réseaux électriques BT/HT, tuyauterie et désenfumage.",
    officialName: "Second œuvre technique, génie climatique, plomberie industrielle et électricité",
    iconComponent: Wrench,
    icon: "Wrench",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Dimensionnement haute efficacité énergétique réduisant l'empreinte carbone",
      "Coordination technique 3D évitant les conflits réseaux sur site",
      "Installations certifiées conformes aux normes NF C 15-100 et NFPA",
      "Contrats de maintenance préventive et hotline d'astreinte 24/7"
    ],
    applications: [
      "Climatisation centralisée de tours de bureaux et hôtels",
      "Chambres froides agroalimentaires et pharmaceutiques",
      "Postes de transformation HT/BT et armoires électriques générales",
      "Réseaux sprinklers, colonnes sèches et centrales de désenfumage"
    ],
    technologies: ["Systèmes CVC Daikin/Carrier VRV", "Armoires Schneider Electric", "Pompes de relevage Grundfos"]
  },
  {
    id: "courant-faible",
    title: "Courant Faible",
    category: "Sécurité Électronique & Réseaux",
    subtitle: "Vidéosurveillance IP, contrôle d'accès biométrique, détection incendie et domotique",
    shortDesc: "Solutions intelligentes de sécurité électronique : caméras IP haute résolution, contrôle d'accès biométrique, détection intrusion, domotique et réseaux VDI.",
    officialName: "Sécurité électronique, vidéosurveillance IP, contrôle d'accès, SSI et réseaux VDI",
    iconComponent: Shield,
    icon: "Shield",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Supervision centralisée via interface web et mobile sécurisée",
      "Intelligence artificielle intégrée pour analyse comportementale vidéo",
      "Câblage structuré catégorie 6A/7 et fibre optique haute performance",
      "Interconnexion native avec les systèmes de gestion technique du bâtiment (GTB)"
    ],
    applications: [
      "Protection périmétrique de sites industriels et data centers",
      "Gestion d'accès par badges RFID et biométrie pour sièges sociaux",
      "Systèmes de détection incendie adressables pour ERP",
      "Domotique intelligente pour résidences et villas de luxe"
    ],
    technologies: ["Caméras Hikvision / Axis IP", "Contrôle d'accès Honeywell", "Fibre optique & baies VDI"]
  }
];

export default function ServicesGrid({ onSelectService, onOpenQuoteModal }) {
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className="py-20 lg:py-24 bg-[#0D1620] text-white relative overflow-hidden scroll-mt-20"
    >
      {/* Subtle decorative background gradient glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#00E2B7]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#00E2B7]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT SIDE: Section header area spanning alongside the cards grid */}
          <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-28 space-y-6">
            
            {/* Teal uppercase small label */}
            <div className="inline-flex items-center gap-2 text-[#00E2B7] font-bold text-xs uppercase tracking-widest bg-[#00E2B7]/10 px-3.5 py-1.5 rounded-full border border-[#00E2B7]/25 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#00E2B7] animate-pulse"></span>
              <span>NOS SERVICES</span>
            </div>

            {/* Large white heading with one word in teal */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] leading-[1.15]">
              Découvrez Nos Domaines d'<span className="text-[#00E2B7]">Expertise</span>
            </h2>

            {/* White paragraph text describing the services */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              De l'ingénierie préliminaire au second œuvre technologique, Future Buildings met à votre service une expertise certifiée et des solutions innovantes adaptées aux exigences de chaque projet.
            </p>

            {/* Teal pill button: 'Tous nos services →' */}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  if (onOpenQuoteModal) {
                    e.preventDefault();
                    onOpenQuoteModal();
                  }
                }}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-[#16202C] bg-[#00E2B7] hover:bg-[#33e9c5] shadow-lg shadow-[#00E2B7]/25 transition-all duration-300 hover:scale-[1.03] active:scale-95 group w-fit cursor-pointer"
              >
                <span>Tous nos services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Grid of service cards (2 columns, 3 rows = 6 cards visible) */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 gap-y-12">
              {SERVICES_LIST.map((service, index) => {
                const IconComponent = service.iconComponent;
                return (
                  <div
                    key={service.id}
                    onClick={() => onSelectService && onSelectService(service)}
                    style={{
                      transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                    }}
                    className={`bg-white text-slate-800 rounded-3xl p-7 pt-9 pb-12 shadow-xl hover:shadow-2xl transition-all duration-500 relative group flex flex-col items-center text-center cursor-pointer border-2 border-transparent hover:border-[#00E2B7] hover:-translate-y-2 transform ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onSelectService && onSelectService(service);
                      }
                    }}
                    aria-label={`En savoir plus sur le service ${service.title}`}
                  >
                    {/* Centered Rotated 45° teal diamond squircle icon (KEY REPARO design element) */}
                    <div className="w-16 h-16 rounded-2xl bg-[#00E2B7] text-[#16202C] flex items-center justify-center rotate-45 shadow-md group-hover:scale-110 transition-all duration-300 mb-6 shrink-0">
                      <div className="-rotate-45 flex items-center justify-center">
                        <IconComponent className="w-7 h-7 stroke-[2.2]" />
                      </div>
                    </div>

                    {/* Service title below in dark bold text */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-['Outfit'] group-hover:text-[#009e7f] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    {/* Short description in gray */}
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-2.5 line-clamp-3">
                      {service.shortDesc}
                    </p>

                    {/* At the BOTTOM EDGE of card: Circular arrow button overflowing half inside / half outside */}
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#00E2B7] text-white group-hover:bg-[#16202C] flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 border-2 border-white">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
