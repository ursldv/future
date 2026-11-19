import React, { useState, useEffect, useRef } from 'react';
import { Check, ArrowRight, Play, X } from 'lucide-react';

export default function WhyChooseUsSection({ onOpenQuoteModal }) {
  const [videoOpen, setVideoOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const current = sectionRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  const checklist = [
    {
      title: "Expertise technique pluridisciplinaire",
      description: "Génie civil, BTP, VRD et lots techniques maîtrisés avec une approche d'ingénierie intégrée."
    },
    {
      title: "Suivi rigoureux et contrôle qualité",
      description: "Contrôles géotechniques stricts, traçabilité des matériaux et conformité aux normes QHSE."
    },
    {
      title: "Respect des délais et des budgets",
      description: "Planification rigoureuse, chiffrage transparent et exécution sans dépassement imprévu."
    },
    {
      title: "Solutions innovantes et durables",
      description: "Intégration d'énergies renouvelables, conception bioclimatique et optimisation énergétique."
    },
    {
      title: "Équipe certifiée et expérimentée",
      description: "Ingénieurs seniors, conducteurs de travaux agréés et techniciens hautement qualifiés."
    }
  ];

  return (
    <section
      id="pourquoi-nous-choisir"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white text-slate-800 relative overflow-hidden scroll-mt-20"
    >
      {/* Background decorative dots pattern */}
      <div
        className="absolute top-10 right-10 w-48 h-48 opacity-20 pointer-events-none -z-10"
        style={{
          backgroundImage: 'radial-gradient(#00E2B7 2px, transparent 2px)',
          backgroundSize: '16px 16px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Narrative & Checklist */}
          <div
            className={`lg:col-span-6 space-y-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Teal uppercase subtitle */}
            <div className="inline-flex items-center gap-2 text-[#00c49e] font-bold text-xs uppercase tracking-widest bg-[#00E2B7]/15 px-3.5 py-1.5 rounded-full border border-[#00E2B7]/30">
              <span className="w-2 h-2 rounded-full bg-[#00E2B7]"></span>
              <span>POURQUOI NOUS CHOISIR</span>
            </div>

            {/* Large Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16202C] font-['Outfit'] leading-tight">
              L'Excellence au Service de <br className="hidden sm:inline" />
              <span className="text-[#00c49e]">Vos Projets</span>
            </h2>

            {/* Paragraph description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-['Plus_Jakarta_Sans']">
              Avec plus de 15 années d'expertise reconnue, Future Buildings met à votre service 
              une synergie d'ingénierie de pointe, d'équipements performants et de protocoles 
              techniques rigoureux. Nous transformons vos visions architecturales et vos 
              infrastructures les plus exigeantes en réussites durables et conformes.
            </p>

            {/* Checklist of 5 items with teal checkmark icons */}
            <ul className="space-y-4 pt-2">
              {checklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3.5 group">
                  <div className="w-6 h-6 rounded-full bg-[#00E2B7] text-[#16202C] flex items-center justify-center shrink-0 shadow-sm mt-0.5 group-hover:scale-110 transition-transform duration-200">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#16202C] font-['Outfit'] leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Teal Pill CTA Button */}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={(e) => {
                  if (onOpenQuoteModal) {
                    e.preventDefault();
                    onOpenQuoteModal();
                  }
                }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#16202C] bg-[#00E2B7] hover:bg-[#00c49e] shadow-lg shadow-[#00E2B7]/30 hover:shadow-xl hover:shadow-[#00E2B7]/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Démarrer un Projet avec Nous</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Large image/video thumbnail */}
          <div
            className={`lg:col-span-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative">
              {/* Soft teal backdrop shape */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 sm:w-80 sm:h-80 bg-[#00E2B7]/15 rounded-[40px] pointer-events-none -z-10"></div>

              {/* Decorative dots pattern at top-left of image */}
              <div
                className="absolute -top-6 -left-6 w-32 h-32 opacity-25 pointer-events-none -z-10"
                style={{
                  backgroundImage: 'radial-gradient(#00E2B7 2px, transparent 2px)',
                  backgroundSize: '16px 16px'
                }}
              ></div>

              {/* Image Container with rounded corners */}
              <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/11] bg-slate-900 border-4 border-white group">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                  alt="Architecture et ingénierie Future Buildings"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1620]/80 via-transparent to-[#0D1620]/30 group-hover:opacity-75 transition-opacity"></div>

                {/* Teal Play Button Circle Overlay in Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => setVideoOpen(true)}
                    className="relative group/play cursor-pointer focus:outline-none"
                    aria-label="Visionner la vidéo de présentation"
                  >
                    {/* Animated pulsing rings */}
                    <span className="absolute -inset-4 rounded-full bg-[#00E2B7]/30 animate-ping opacity-75"></span>
                    <span className="absolute -inset-2 rounded-full bg-[#00E2B7]/50"></span>
                    
                    {/* Central Play Button */}
                    <div className="relative w-20 h-20 rounded-full bg-[#00E2B7] text-[#16202C] flex items-center justify-center shadow-2xl group-hover/play:scale-110 group-hover/play:bg-white transition-all duration-300">
                      <Play className="w-8 h-8 fill-current translate-x-0.5" />
                    </div>
                  </button>
                </div>

                {/* Bottom floating badge on image */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-[#16202C]/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white flex items-center justify-between shadow-lg">
                  <div>
                    <span className="font-bold block text-sm sm:text-base font-['Outfit']">
                      Visite Virtuelle de nos Chantiers
                    </span>
                    <span className="text-slate-300 text-xs">
                      Normes de sécurité & rigueur d'ingénierie
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-black bg-[#00E2B7] text-[#16202C] uppercase tracking-wider shrink-0">
                    Vidéo 4K
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Video Lightbox Modal */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-4xl aspect-[16/9] bg-black rounded-3xl overflow-hidden shadow-2xl border border-[#00E2B7]/50">
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Fermer la vidéo"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1"
              title="Future Buildings Présentation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
