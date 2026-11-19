import React, { useState } from 'react';
import { Truck, Layers, CheckCircle2, ShieldCheck, ArrowRight, PhoneCall, ShoppingCart } from 'lucide-react';
import { HEAVY_EQUIPMENT, RAW_MATERIALS } from '../../data/equipmentData';
import { COMPANY_INFO } from '../../data/companyData';

export default function MaterialsEquipmentSection({ onOpenQuoteModal }) {
  const [activeTab, setActiveTab] = useState('equipment'); // 'equipment' | 'materials'

  return (
    <section id="equipments" className="py-20 lg:py-28 bg-[#F4F7F6] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching REPARO */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#009e7f] font-bold text-xs uppercase tracking-widest bg-[#00E2B7]/15 px-3.5 py-1 rounded-full border border-[#00E2B7]/30">
            <span className="w-2 h-2 rounded-full bg-[#00E2B7]"></span>
            <span>LOGISTIQUE & APPROVISIONNEMENT CHANTIERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-['Outfit']">
            Engins Lourds & <span className="text-[#009e7f]">Matériaux Certifiés</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Importation, vente et location d'équipements industriels, pelles hydrauliques, bouteurs, 
            ainsi que la fourniture continue de sable de carrière, gravillons et concassés normés.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-200/80 p-1.5 rounded-full border border-slate-300 flex items-center gap-2">
            <button
              onClick={() => setActiveTab('equipment')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'equipment'
                  ? 'bg-[#00E2B7] text-[#16202C] shadow-md shadow-[#00E2B7]/30'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Truck className="w-4 h-4" />
              <span>Flotte d'Engins & Équipements</span>
            </button>
            <button
              onClick={() => setActiveTab('materials')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'materials'
                  ? 'bg-[#00E2B7] text-[#16202C] shadow-md shadow-[#00E2B7]/30'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Sables, Concassés & Aciers</span>
            </button>
          </div>
        </div>

        {/* Tab Content: Heavy Equipment */}
        {activeTab === 'equipment' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-300">
            {HEAVY_EQUIPMENT.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    />
                    <span className="absolute top-3 left-3 bg-[#16202C]/90 text-[#00E2B7] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#00E2B7]/30">
                      {item.brand}
                    </span>
                    <span className="absolute bottom-3 right-3 bg-emerald-950/80 text-emerald-300 text-[10px] font-semibold px-2 py-0.5 rounded backdrop-blur-sm">
                      {item.availability}
                    </span>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <span className="text-[11px] uppercase tracking-wider text-[#009e7f] font-bold block">
                      {item.type}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 font-['Outfit'] group-hover:text-[#009e7f] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">
                      {item.capacity}
                    </p>

                    <ul className="space-y-1 pt-2 border-t border-slate-100 text-[11px] text-slate-600">
                      {item.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#009e7f] shrink-0" />
                          <span className="line-clamp-1">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={onOpenQuoteModal}
                    className="w-full py-2.5 rounded-xl bg-[#16202C] hover:bg-[#00E2B7] text-white hover:text-[#16202C] text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <span>Demander disponibilité / Devis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content: Raw Construction Materials */}
        {activeTab === 'materials' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-300">
            {RAW_MATERIALS.map((mat) => (
              <div 
                key={mat.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                    <img
                      src={mat.image}
                      alt={mat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    />
                    <span className="absolute top-3 left-3 bg-[#16202C]/90 text-[#00E2B7] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#00E2B7]/30">
                      {mat.grain}
                    </span>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <h3 className="text-base font-bold text-slate-900 font-['Outfit'] group-hover:text-[#009e7f] transition-colors leading-snug">
                      {mat.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {mat.usage}
                    </p>

                    <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px]">
                      <div className="text-slate-500">
                        Norme : <strong className="text-slate-800">{mat.certification}</strong>
                      </div>
                      <div className="text-slate-500">
                        Conditionnement : <strong className="text-slate-800">{mat.unit}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={onOpenQuoteModal}
                    className="w-full py-2.5 rounded-xl bg-[#00E2B7] hover:bg-[#00c49e] text-[#16202C] font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>Commander un Tonnage</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Fast Supply Guarantee banner */}
        <div className="mt-12 bg-[#16202C] p-6 sm:p-8 rounded-3xl border border-[#00E2B7]/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#00E2B7]/15 text-[#00E2B7] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <strong className="text-white block text-sm font-semibold">Approvisionnement continu & Flotte logistique dédiée</strong>
              Livraison directe sur vos chantiers par semi-remorques avec pesée certifiée en pont-bascule.
            </div>
          </div>
          <a
            href={`tel:${COMPANY_INFO.mobile}`}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00E2B7] hover:bg-[#00c49e] text-[#16202C] font-bold transition-all shadow-md"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Ligne Directe Logistique : {COMPANY_INFO.mobile}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
