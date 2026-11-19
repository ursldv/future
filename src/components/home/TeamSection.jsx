import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone } from 'lucide-react';

// LinkedIn SVG icon (lucide-react doesn't include brand icons)
const LinkedInIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TEAM_MEMBERS = [
  {
    name: 'Ahmed Benali',
    title: 'Directeur Général',
    initials: 'AB',
    specialty: 'Ingénieur d\'État • Stratégie BTP & Direction des Opérations',
    gradient: 'from-[#00E2B7] via-[#16202C] to-[#0D1620]',
    phone: '+225 27 22 59 84 10',
    email: 'a.benali@thefuturebuildings.com',
    linkedin: '#'
  },
  {
    name: 'Sara Meziane',
    title: 'Directrice Technique',
    initials: 'SM',
    specialty: 'Calcul de Structures, Modélisation BIM & Contrôle Qualité',
    gradient: 'from-[#16202C] via-[#232D3C] to-[#00E2B7]',
    phone: '+225 27 22 59 84 11',
    email: 's.meziane@thefuturebuildings.com',
    linkedin: '#'
  },
  {
    name: 'Karim Boudiaf',
    title: 'Chef de Projet Génie Civil',
    initials: 'KB',
    specialty: 'Supervision Grands Travaux, Fondations & Ouvrages d\'Art',
    gradient: 'from-[#0D1620] via-[#16202C] to-[#00E2B7]',
    phone: '+225 27 22 59 84 12',
    email: 'k.boudiaf@thefuturebuildings.com',
    linkedin: '#'
  },
  {
    name: 'Nadia Ferhat',
    title: 'Responsable Courant Faible',
    initials: 'NF',
    specialty: 'Systèmes SSI, Réseaux VDI, Sécurité & Domotique KNX',
    gradient: 'from-[#00E2B7] via-[#232D3C] to-[#16202C]',
    phone: '+225 27 22 59 84 13',
    email: 'n.ferhat@thefuturebuildings.com',
    linkedin: '#'
  }
];

export default function TeamSection() {
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

  return (
    <section 
      id="team" 
      ref={sectionRef} 
      className="py-20 lg:py-28 bg-white text-slate-800 relative scroll-mt-20 overflow-hidden"
      aria-label="Notre équipe d'experts"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HEADER ================= */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 space-y-3 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 text-[#00c49e] font-bold text-xs uppercase tracking-widest bg-[#00E2B7]/15 px-4 py-1.5 rounded-full border border-[#00E2B7]/30">
            <span className="w-2 h-2 rounded-full bg-[#00E2B7] animate-pulse"></span>
            <span>NOTRE ÉQUIPE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16202C] font-['Outfit'] tracking-tight">
            Nos Experts Qualifiés
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-['Plus_Jakarta_Sans'] max-w-2xl mx-auto">
            Une équipe pluridisciplinaire d'ingénieurs et de spécialistes chevronnés, 
            dédiés à l'excellence technique et à la réussite intégrale de vos réalisations.
          </p>
        </div>

        {/* ================= 4 TEAM CARDS GRID ================= */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 transition-all duration-700 delay-200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group hover:-translate-y-2 relative"
            >
              <div>
                {/* Photo Placeholder with gradient & initials */}
                <div className={`relative aspect-[4/4.5] overflow-hidden bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                  {/* Subtle technical background grid / circles */}
                  <div 
                    className="absolute inset-0 opacity-15 pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                      backgroundSize: '20px 20px',
                    }}
                  />

                  {/* Concentric subtle aura ring */}
                  <div className="absolute w-40 h-40 rounded-full border border-white/10 scale-90 group-hover:scale-110 transition-transform duration-500 ease-out" />
                  <div className="absolute w-28 h-28 rounded-full border border-[#00E2B7]/25 group-hover:scale-105 transition-transform duration-500 ease-out" />

                  {/* Monogram circle with initials */}
                  <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#16202C]/75 backdrop-blur-md border-2 border-[#00E2B7]/60 flex items-center justify-center text-white font-['Outfit'] font-black text-2xl sm:text-3xl shadow-xl tracking-wider group-hover:scale-110 group-hover:border-[#00E2B7] group-hover:shadow-[#00E2B7]/30 transition-all duration-300">
                    <span className="bg-gradient-to-r from-white via-slate-100 to-[#00E2B7] bg-clip-text text-transparent">
                      {member.initials}
                    </span>
                  </div>

                  {/* Top-right company tag badge */}
                  <div className="absolute top-3.5 right-3.5 bg-black/40 backdrop-blur-sm text-[#00E2B7] border border-[#00E2B7]/20 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Future Buildings
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6 text-center space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#16202C] font-['Outfit'] group-hover:text-[#00c49e] transition-colors duration-200">
                    {member.name}
                  </h3>
                  <span className="text-xs font-bold text-[#00c49e] uppercase tracking-wider block">
                    {member.title}
                  </span>
                  <p className="text-[12px] text-slate-500 leading-snug pt-1">
                    {member.specialty}
                  </p>
                </div>
              </div>

              {/* Social Icon Row */}
              <div className="pb-6 pt-3 flex items-center justify-center space-x-2.5 border-t border-slate-100 mx-6">
                <a
                  href={member.linkedin}
                  aria-label={`Profil LinkedIn de ${member.name}`}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#00E2B7] text-slate-600 hover:text-[#16202C] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${member.email}`}
                  aria-label={`Envoyer un email à ${member.name}`}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#00E2B7] text-slate-600 hover:text-[#16202C] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${member.phone}`}
                  aria-label={`Appeler ${member.name}`}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#00E2B7] text-slate-600 hover:text-[#16202C] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>

              {/* Hover effect: animated teal accent line at bottom */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-[#00E2B7] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
