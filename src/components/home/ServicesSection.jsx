import React from 'react';
import { 
  Building2, 
  Truck, 
  Fan, 
  Zap, 
  HardHat, 
  Laptop, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { SERVICES } from '../../data/servicesData';

export default function ServicesSection({ onSelectService, onOpenQuoteModal }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-6 h-6" />;
      case 'Truck': return <Truck className="w-6 h-6" />;
      case 'Fan': return <Fan className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'HardHat': return <HardHat className="w-6 h-6" />;
      case 'Laptop': return <Laptop className="w-6 h-6" />;
      default: return <Building2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF9F6] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Buildora "WHAT WE DO / Our Services") */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#00E2B7] bg-cyan-100/60 px-3.5 py-1 rounded-full border border-cyan-200">
            NOTRE EXPERTISE TECHNIQUE
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-slate-900 font-['Outfit']">
            Nos <span className="font-serif italic text-[#16202C]">Services</span> & Domaines d'Activité
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Une offre transversale complète pour accompagner l'intégralité du cycle de vie de vos infrastructures, 
            de la conception d'ingénierie jusqu'à la livraison et la maintenance.
          </p>
        </div>

        {/* Services Cards Grid (Strictly matching BUILDORA circular badge style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group bg-white rounded-3xl p-8 border border-slate-200 hover:border-[#00E2B7] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
            >
              <div className="space-y-5">
                {/* Circular Line Icon Badge (Buildora Style) */}
                <div className="w-16 h-16 rounded-full border border-slate-300 group-hover:border-[#00E2B7] bg-slate-50 group-hover:bg-cyan-50 flex items-center justify-center text-slate-700 group-hover:text-[#00E2B7] transition-all duration-300 shadow-sm">
                  {getIcon(service.icon)}
                </div>

                {/* Service Title */}
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#00E2B7] block mb-1">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 font-['Outfit'] group-hover:text-[#16202C] transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Key Benefits Preview */}
                <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  {service.advantages.slice(0, 2).map((adv, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="pt-6 mt-4 flex items-center justify-between text-xs font-bold text-[#00E2B7] group-hover:text-[#16202C] transition-colors">
                <span>Voir les spécifications & cas d'usage</span>
                <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#00E2B7] group-hover:text-white flex items-center justify-center transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout box for Custom Engineering / Consultation */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#16202C] to-[#071b2b] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-bold font-['Outfit'] text-amber-200">
              Besoin d'une étude technique ou d'un devis sur-mesure ?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Nos ingénieurs et métreurs étudient vos plans et cahiers des charges pour vous transmettre une proposition chiffrée détaillée sous 48h.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="shrink-0 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900 bg-gradient-to-r from-[#d4a860] to-[#eed59e] hover:shadow-lg hover:shadow-amber-500/20 transition-all cursor-pointer"
          >
            Lancer une Étude de Devis
          </button>
        </div>

      </div>
    </section>
  );
}
