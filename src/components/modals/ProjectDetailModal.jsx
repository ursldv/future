import React, { useState } from 'react';
import { X, MapPin, Calendar, User, ArrowRight, Shield } from 'lucide-react';

export default function ProjectDetailModal({ project, onClose, onOpenQuoteModal }) {
  const [activeImgOverride, setActiveImgOverride] = useState(null);

  if (!project) return null;

  const activeImg = activeImgOverride || project.image;

  const handleClose = () => {
    setActiveImgOverride(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07111A]/75 animate-in fade-in duration-200">
      <div 
        className="bg-[#0C1824] text-white w-full max-w-4xl max-h-[90vh] rounded-none border border-[#00E2B7]/40  overflow-hidden flex flex-col relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700/60 bg-[#07111A]">
          <div>
            <span className="text-[11px] font-bold text-[#00E2B7] uppercase tracking-widest block">
              {project.category}
            </span>
            <h3 className="text-xl font-bold font-display text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Photo & Thumbnails */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] rounded-none overflow-hidden bg-slate-900 border border-slate-700">
              <img
                src={activeImg}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-slate-950/80 text-[#00E2B7] text-xs font-mono px-3 py-1 rounded-none ">
                {project.specs}
              </div>
            </div>

            {project.gallery && project.gallery.length > 1 && (
              <div className="flex gap-2">
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgOverride(img)}
                    className={`w-20 aspect-[16/10] rounded-none overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImg === img ? 'border-[#00E2B7] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Miniature" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-[#07111A] p-3 rounded-none border border-slate-700 text-xs">
              <span className="text-slate-400 block">Localisation</span>
              <strong className="text-white flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#00E2B7]" />
                {project.location}
              </strong>
            </div>

            <div className="bg-[#07111A] p-3 rounded-none border border-slate-700 text-xs">
              <span className="text-slate-400 block">Année & Durée</span>
              <strong className="text-white flex items-center gap-1 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                {project.year} ({project.duration})
              </strong>
            </div>

            <div className="bg-[#07111A] p-3 rounded-none border border-slate-700 text-xs">
              <span className="text-slate-400 block">Maître d'Ouvrage</span>
              <strong className="text-white flex items-center gap-1 mt-0.5">
                <User className="w-3.5 h-3.5 text-emerald-400" />
                {project.client}
              </strong>
            </div>

            <div className="bg-[#07111A] p-3 rounded-none border border-slate-700 text-xs">
              <span className="text-slate-400 block">Garantie & Audit</span>
              <strong className="text-white flex items-center gap-1 mt-0.5">
                <Shield className="w-3.5 h-3.5 text-[#00E2B7]" />
                Décennale SOCOTEC
              </strong>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-4 text-xs sm:text-sm text-slate-300">
            <div>
              <h4 className="text-base font-bold text-white font-display mb-1">Présentation de l'Ouvrage</h4>
              <p className="leading-relaxed">{project.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#07111A] p-4 rounded-none border border-rose-500/20">
                <h5 className="font-bold text-rose-300 text-xs uppercase mb-1">Défi Technique Rencontré</h5>
                <p className="text-xs text-slate-300 leading-relaxed">{project.challenge}</p>
              </div>

              <div className="bg-[#07111A] p-4 rounded-none border border-emerald-500/20">
                <h5 className="font-bold text-emerald-300 text-xs uppercase mb-1">Solution Déployée par Future Buildings</h5>
                <p className="text-xs text-slate-300 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Metrics */}
            {project.metrics && (
              <div className="grid grid-cols-3 gap-3 pt-2">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="bg-[#00E2B7]/10 p-3 rounded-none border border-[#00E2B7]/30 text-center">
                    <span className="text-lg font-bold text-[#00E2B7] font-display block">{m.value}</span>
                    <span className="text-[11px] text-slate-400">{m.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-slate-700/60 bg-[#07111A] flex items-center justify-between">
          <button
            onClick={handleClose}
            className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Fermer le dossier
          </button>

          <button
            onClick={() => {
              handleClose();
              if (onOpenQuoteModal) onOpenQuoteModal();
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0C1824] bg-[#00E2B7] hover:bg-[#00c49e] cursor-pointer shadow-lg shadow-[#00E2B7]/25 transition-all"
          >
            <span>Demander un projet similaire</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
