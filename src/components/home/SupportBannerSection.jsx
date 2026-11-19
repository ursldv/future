import React from 'react';
import { Phone, Clock, ShieldCheck, Wrench, Truck, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export default function SupportBannerSection({ onOpenQuoteModal }) {
  const supportPoints = [
    {
      icon: Clock,
      title: "Intervention d'Urgence Chantiers 24/7",
      desc: "Astreinte technique continue pour sécurisation de chantiers et dépannage sur vos installations de froid et électricité."
    },
    {
      icon: Truck,
      title: "Approvisionnement & Logistique Fluide",
      desc: "Flotte dédiée de camions-bennes et porte-engins assurant la livraison immédiate de granulats et pièces de rechange."
    },
    {
      icon: Wrench,
      title: "Assistance Mécanique & Maintenance Préventive",
      desc: "Équipes mobiles d'ingénieurs et techniciens mécaniciens déployées directement sur vos sites d'exploitation."
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-column layout matching REPARO "When You Need Repair / We Are Always Here" */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Narrative and 3 feature items */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#009e7f] font-bold text-xs uppercase tracking-widest bg-[#00E2B7]/15 px-3.5 py-1 rounded-full border border-[#00E2B7]/30">
              <span className="w-2 h-2 rounded-full bg-[#00E2B7]"></span>
              <span>ASSISTANCE & DISPONIBILITÉ TECHNIQUE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-['Outfit'] leading-tight">
              Quand Vous Avez Besoin d'Experts, <br />
              <span className="text-[#009e7f]">Nous Sommes Toujours Là</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Qu'il s'agisse d'un besoin immédiat en engins de terrassement, d'une urgence sur une centrale de climatisation ou d'un conseil géotechnique, notre cellule d'ingénierie réagit sans délai.
            </p>

            {/* 3 Items matching REPARO */}
            <div className="space-y-4 pt-2">
              {supportPoints.map((pt, idx) => {
                const IconComp = pt.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#00E2B7]/40 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-[#00E2B7] text-[#16202C] flex items-center justify-center shrink-0 shadow-md">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 font-['Outfit']">
                        {pt.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Arched Construction Photo with Overlapping Badge (Matching REPARO) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-t-[100px] rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                alt="Support Technique Chantiers Future Buildings"
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
            </div>

            {/* Floating Overlapping Card */}
            <div className="absolute -bottom-6 -left-6 bg-[#16202C] text-white p-5 rounded-2xl border border-[#00E2B7]/30 shadow-2xl hidden sm:flex items-center gap-3.5 max-w-xs">
              <div className="w-10 h-10 rounded-full bg-[#00E2B7] text-[#16202C] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-xs block text-white">Permanence 24h/24 & 7j/7</span>
                <span className="text-[11px] text-[#00E2B7]">Hotline Chantiers & Dépannage</span>
              </div>
            </div>
          </div>

        </div>

        {/* REPARO Callout Dark Strip */}
        <div className="bg-[#16202C] rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-[#00E2B7]/25 shadow-xl">
          <div className="text-center md:text-left space-y-1">
            <span className="text-xs font-bold text-[#00E2B7] uppercase tracking-wider block">
              ENGAGEMENT DE SERVICE PREMIUM
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white">
              Nous Garantissons l'Excellence Opérationnelle sur Tous Vos Projets
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-white text-[#16202C] hover:bg-slate-100 transition-all shadow-md"
            >
              <Phone className="w-4 h-4 text-[#009e7f]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#16202C] bg-[#00E2B7] hover:bg-[#00c49e] transition-all shadow-md cursor-pointer"
            >
              <span>Demander un Devis</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
