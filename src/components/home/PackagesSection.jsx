import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function PackagesSection({ onOpenQuoteModal }) {
  const packages = [
    {
      id: "particulier",
      title: "Pack Résidentiel & Villas",
      category: "Particuliers & Familles",
      price: "Sur Devis Personnalisé",
      subtext: "Conception architecturale & Gros œuvre sur-mesure",
      popular: false,
      features: [
        "Plans architecturaux & modélisation 3D",
        "Fondations & gros œuvre béton armé",
        "Second œuvre (plomberie, électricité, carrelage)",
        "Pré-équipement climatisation & énergie solaire",
        "Garantie décennale & suivi hebdomadaire"
      ]
    },
    {
      id: "promoteur",
      title: "Pack Promoteur & Tertiaire",
      category: "Immeubles R+N & Bureaux",
      price: "Étude Financière Optimisée",
      subtext: "Contractant général clé en main",
      popular: true,
      features: [
        "Modélisation BIM Niveau 3 complète",
        "Ouvrages parasismiques & coupe-feu certifiés",
        "Systèmes de climatisation VRV multizone",
        "Poste de transformation MT/BT & TGBT",
        "Assainissement VRD & voiries d'accès intégrées",
        "Contrôle technique SOCOTEC / Veritas inclus"
      ]
    },
    {
      id: "infrastructures",
      title: "Pack VRD & Génie Civil",
      category: "Infrastructures & Industrie",
      price: "Grands Marchés & Appels d'Offres",
      subtext: "Déploiement massif d'engins & agrégats",
      popular: false,
      features: [
        "Terrassements lourds & décapage grande masse",
        "Fourniture continue d'agrégats (sable, concassés)",
        "Pose d'enrobé bitumineux & caniveaux préfabriqués",
        "Parc d'engins lourds Caterpillar avec opérateurs",
        "Laboratoire géotechnique in-situ & essais de sol",
        "Intervention d'urgence 24/7 sur chantiers"
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Our Pricing Plan / like REPARO) */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#009e7f] font-bold text-xs uppercase tracking-widest bg-[#00E2B7]/15 px-3.5 py-1 rounded-full border border-[#00E2B7]/30">
            <span className="w-2 h-2 rounded-full bg-[#00E2B7]"></span>
            <span>FORMULES & MODALITÉS D'ENGAGEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-['Outfit']">
            Nos Packages & Formules d'Intervention
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Des modalités adaptées à la taille de vos projets, garantissant une totale prévisibilité financière et technique.
          </p>
        </div>

        {/* 3 Pricing Cards Grid (Exact REPARO Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? 'bg-white border-2 border-[#00E2B7] shadow-2xl scale-102 z-10'
                  : 'bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00E2B7] text-[#16202C] text-[11px] font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                  Le Plus Sollicité
                </div>
              )}

              <div>
                <div className="pb-6 border-b border-slate-100 text-center space-y-2">
                  <span className="text-xs font-bold text-[#009e7f] uppercase tracking-wider block">
                    {pkg.category}
                  </span>
                  <h3 className="text-xl font-bold font-['Outfit'] text-slate-900">
                    {pkg.title}
                  </h3>
                  <div className="pt-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit']">
                      {pkg.price}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">{pkg.subtext}</p>
                </div>

                <ul className="py-6 space-y-3.5 text-xs sm:text-sm text-slate-600">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#00E2B7]/20 text-[#009e7f] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenQuoteModal}
                  className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.popular
                      ? 'bg-[#00E2B7] hover:bg-[#00c49e] text-[#16202C] shadow-md shadow-[#00E2B7]/30'
                      : 'bg-[#16202C] hover:bg-[#00E2B7] hover:text-[#16202C] text-white'
                  }`}
                >
                  <span>Demander ce Devis</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
