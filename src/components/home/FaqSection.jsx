import React, { useState, useEffect, useRef } from 'react';
import { Plus, Phone, HelpCircle, PhoneCall, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

const FAQ_ITEMS = [
  {
    question: "Quels sont vos domaines d'intervention ?",
    answer: "Future Buildings intervient sur l'ensemble de la chaîne de valeur du BTP et de l'ingénierie : études techniques de faisabilité, modélisation BIM 3D, gros œuvre et structures béton armé, voiries et réseaux divers (VRD), second œuvre technique, électricité générale (MT/BT), ainsi que l'ensemble des lots techniques de courants faibles et sécurité électronique."
  },
  {
    question: "Proposez-vous des services de courant faible ?",
    answer: "Oui, nous disposons d'un département expert dédié aux courants faibles. Nos équipes conçoivent et déploient les réseaux informatiques VDI (cuivre et fibre optique), les systèmes de vidéosurveillance IP intelligente à détection automatique, le contrôle d'accès biométrique et RFID, les systèmes de sécurité incendie (SSI certifiés) et les solutions domotiques avancées pour bâtiments intelligents."
  },
  {
    question: "Comment se déroule un projet type ?",
    answer: "Chaque projet suit une méthodologie éprouvée en 5 phases clés : 1) Diagnostic initial et analyse du cahier des charges ; 2) Études d'ingénierie détaillées, calculs de structures et planning contractuel ; 3) Mobilisation des engins et approvisionnement des matériaux certifiés ; 4) Exécution des travaux sous contrôle qualité et sécurité strict (QHSE) ; 5) Réception des ouvrages, essais normés et livraison clé en main avec garanties décennales."
  },
  {
    question: "Intervenez-vous sur tout le territoire national ?",
    answer: "Absolument. Grâce à notre parc mobile d'engins lourds de chantier (pelles chenillées, niveleuses, camions-bennes) et nos équipes d'ingénieurs mobiles, nous intervenons sur l'ensemble du territoire national ainsi que dans la sous-région pour des projets d'infrastructures publiques, industrielles, tertiaires et résidentielles d'envergure."
  },
  {
    question: "Comment obtenir un devis gratuit ?",
    answer: "Vous pouvez solliciter un chiffrage gratuit et personnalisé en remplissant notre formulaire de contact en ligne, par téléphone direct au +225 27 22 59 84 10, ou en nous transmettant vos plans et cahier des charges par email à devis@thefuturebuildings.com. Notre bureau d'études analyse vos données et s'engage à vous fournir une proposition technique et financière détaillée sous 24 à 48 heures."
  }
];

export default function FaqSection({ onOpenQuoteModal }) {
  const [openIndex, setOpenIndex] = useState(0);
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

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section 
      id="faq" 
      ref={sectionRef} 
      className="py-20 lg:py-28 bg-[#F4F7F6] text-slate-800 relative scroll-mt-20 overflow-hidden"
      aria-label="Foire aux questions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT COLUMN: IMAGE + FLOATING HELP CARD ================= */}
          <div 
            className={`lg:col-span-5 relative transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Main Rounded Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-[#16202C] border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&q=80"
                alt="Ingénierie et plans techniques Future Buildings"
                loading="lazy"
                className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Subtle gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1620]/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Contact Card Overlapping Bottom-Right */}
            <div className="relative mt-6 sm:mt-0 sm:absolute sm:-bottom-8 sm:-right-6 md:right-2 lg:-right-8 z-20 max-w-sm sm:max-w-xs w-full bg-[#16202C] text-white p-6 rounded-2xl border-l-4 border-[#00E2B7] shadow-2xl shadow-black/30 backdrop-blur-md">
              <div className="flex items-center gap-2 text-[#00E2B7] text-xs font-bold uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4 text-[#00E2B7] shrink-0" />
                <span>Besoin d'aide ?</span>
              </div>

              <h4 className="text-base font-bold font-['Outfit'] text-white leading-snug mb-1">
                Une question sur votre projet ?
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Nos ingénieurs et experts techniques sont à votre écoute pour vous conseiller.
              </p>

              {/* Phone Display */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 mb-3 bg-white/5 px-3 py-2 rounded-xl border border-white/10">
                <Phone className="w-3.5 h-3.5 text-[#00E2B7]" />
                <span className="font-mono text-[13px] text-[#00E2B7]">{COMPANY_INFO?.phone || '+225 27 22 59 84 10'}</span>
              </div>

              {/* Teal Pill CTA Button */}
              <a
                href={`tel:${COMPANY_INFO?.phone?.replace(/\s+/g, '') || '+2252722598410'}`}
                className="w-full py-2.5 px-4 rounded-full bg-[#00E2B7] hover:bg-[#00c49e] text-[#16202C] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-[#00E2B7]/25 hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Appelez-nous</span>
              </a>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: FAQ ACCORDION ================= */}
          <div 
            className={`lg:col-span-7 space-y-6 transition-all duration-700 delay-150 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Header */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-[#00c49e] font-bold text-xs uppercase tracking-widest bg-[#00E2B7]/15 px-4 py-1.5 rounded-full border border-[#00E2B7]/30">
                <span className="w-2 h-2 rounded-full bg-[#00E2B7] animate-pulse"></span>
                <span>FAQ</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16202C] font-['Outfit'] tracking-tight leading-tight">
                Questions Fréquemment Posées
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-['Plus_Jakarta_Sans']">
                Retrouvez les réponses aux interrogations essentielles concernant nos méthodes d'intervention, 
                nos domaines d'expertise et l'accompagnement de vos projets.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-3.5 pt-2">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div
                    key={idx}
                    className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'bg-white border-l-4 border-[#00E2B7] border-y border-r border-slate-200/80 shadow-md shadow-slate-200/50'
                        : 'bg-white border border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(idx)}
                      aria-expanded={isOpen}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#16202C] font-['Outfit'] cursor-pointer select-none transition-colors duration-200"
                    >
                      <span className={isOpen ? 'text-[#00c49e]' : 'text-[#16202C]'}>
                        {item.question}
                      </span>

                      {/* + Icon that rotates or toggles smoothly */}
                      <span className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center transition-all duration-300 ${
                        isOpen 
                          ? 'bg-[#00E2B7] text-[#16202C] rotate-45 shadow-sm' 
                          : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                      }`}>
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      </span>
                    </button>

                    {/* Expandable Answer */}
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-['Plus_Jakarta_Sans'] border-t border-slate-100 animate-in fade-in slide-in-from-top-1 duration-200">
                        {item.answer}

                        {/* Optional quick quote link in item 5 */}
                        {idx === 4 && onOpenQuoteModal && (
                          <div className="pt-3">
                            <button
                              type="button"
                              onClick={onOpenQuoteModal}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00c49e] hover:text-[#00E2B7] hover:underline cursor-pointer"
                            >
                              <span>Ouvrir le formulaire de devis</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>
                    )}
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
