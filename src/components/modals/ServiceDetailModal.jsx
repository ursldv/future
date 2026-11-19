import React from 'react';
import { X, CheckCircle2, ArrowRight, Layers, Cpu, ShieldCheck, FileCheck } from 'lucide-react';

export default function ServiceDetailModal({ service, onClose, onOpenQuoteModal }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07111A]/75 animate-in fade-in duration-200">
      <div 
        className="bg-[#0C1824] text-white w-full max-w-3xl max-h-[90vh] rounded-none border border-[#00E2B7]/40  overflow-hidden flex flex-col relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700/60 bg-[#07111A]">
          <div>
            <span className="text-[11px] font-bold text-[#00E2B7] uppercase tracking-widest block">
              {service.category}
            </span>
            <h3 className="text-xl font-bold font-display text-white">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="relative aspect-[21/9] rounded-none overflow-hidden bg-slate-900 border border-slate-700">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1824] via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-4 right-4 text-xs text-[#00E2B7] font-medium">
              {service.subtitle}
            </div>
          </div>

          {/* Official Wording Tag from ACTIVITE EXERCEE */}
          {service.officialName && (
            <div className="p-3.5 bg-[#07111A] rounded-none border border-[#00E2B7]/30 flex items-start gap-3 text-xs text-slate-200">
              <FileCheck className="w-4 h-4 text-[#00E2B7] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold mb-0.5">Cadre officiel d'activité exercée :</strong>
                <span className="italic text-slate-300">"{service.officialName}"</span>
              </div>
            </div>
          )}

          <div className="space-y-3 text-xs sm:text-sm text-slate-300">
            <h4 className="text-base font-bold text-white font-display">Description de la Prestation</h4>
            <p className="leading-relaxed">{service.shortDesc}</p>
          </div>

          {/* Avantages & Domaines d'application */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#07111A] p-5 rounded-none border border-[#00E2B7]/20 space-y-3">
              <h5 className="text-xs font-bold text-[#00E2B7] uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00E2B7]" />
                Avantages Clés du Service
              </h5>
              <ul className="space-y-2 text-xs text-slate-300">
                {service.advantages.map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00E2B7] shrink-0 mt-0.5" />
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#07111A] p-5 rounded-none border border-[#00E2B7]/20 space-y-3">
              <h5 className="text-xs font-bold text-[#00E2B7] uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#00E2B7]" />
                Domaines d'Application
              </h5>
              <ul className="space-y-2 text-xs text-slate-300">
                {service.applications.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E2B7] shrink-0 mt-1.5"></span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technologies */}
          {service.technologies && (
            <div className="bg-[#07111A] p-4 rounded-none border border-slate-700 space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#00E2B7]" />
                Technologies & Normes Utilisées
              </span>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full text-xs font-mono bg-[#00E2B7]/15 border border-[#00E2B7]/30 text-[#00E2B7]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-700/60 bg-[#07111A] flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Fermer
          </button>

          <button
            onClick={() => {
              onClose();
              if (onOpenQuoteModal) onOpenQuoteModal();
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0C1824] bg-[#00E2B7] hover:bg-[#00c49e] shadow-lg shadow-[#00E2B7]/25 transition-all cursor-pointer"
          >
            <span>Demander un devis pour ce service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
