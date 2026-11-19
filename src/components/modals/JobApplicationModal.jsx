import React, { useState } from 'react';
import { X, Send, Upload, CheckCircle2 } from 'lucide-react';

export default function JobApplicationModal({ job, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    yearsExp: '',
    coverNote: '',
    cvName: ''
  });
  const [applied, setApplied] = useState(false);

  if (!job) return null;

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, cvName: e.target.files[0].name }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setApplied(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07111A]/75 animate-in fade-in duration-200">
      <div 
        className="bg-[#0C1824] text-white w-full max-w-xl max-h-[90vh] rounded-none border border-[#00E2B7]/40  overflow-hidden flex flex-col relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700/60 bg-[#07111A]">
          <div>
            <span className="text-[11px] font-bold text-[#00E2B7] uppercase tracking-widest block">
              Recrutement & Carrières
            </span>
            <h3 className="text-lg font-bold font-display text-white">
              {job.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-5">
          {applied ? (
            <div className="py-8 text-center space-y-4 animate-in zoom-in-95">
              <CheckCircle2 className="w-14 h-14 text-[#00E2B7] mx-auto" />
              <h4 className="text-xl font-bold font-display text-white">Candidature Transmise !</h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                Merci pour votre intérêt pour Future Buildings. Notre service des Ressources Humaines examinera votre profil avec attention.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              >
                Fermer cette fenêtre
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-[#07111A] p-3.5 rounded-none border border-slate-700 text-xs text-slate-300 space-y-1">
                <span className="font-semibold text-white block">Poste ciblé : {job.title}</span>
                <p className="text-slate-400">Département : {job.department || "Pôle BTP"}</p>
              </div>

              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-1">Nom complet *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Ex: Kouamé N'Guessan"
                  className="w-full bg-[#07111A] border border-slate-700 rounded-none px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E2B7]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="candidat@email.com"
                    className="w-full bg-[#07111A] border border-slate-700 rounded-none px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E2B7]"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">Téléphone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+229 XX XX XX XX"
                    className="w-full bg-[#07111A] border border-slate-700 rounded-none px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E2B7]"
                  />
                </div>
              </div>

              <div className="border border-dashed border-slate-700 rounded-none p-4 text-center bg-[#07111A]/60">
                <input
                  type="file"
                  id="cv-file"
                  required
                  className="hidden"
                  onChange={handleFileUpload}
                />
                <label htmlFor="cv-file" className="cursor-pointer flex flex-col items-center gap-1.5">
                  <Upload className="w-5 h-5 text-[#00E2B7]" />
                  <span className="text-xs text-slate-300">
                    {formData.cvName ? (
                      <strong className="text-[#00E2B7]">CV joint : {formData.cvName}</strong>
                    ) : (
                      "Joindre votre Curriculum Vitae (PDF, Word max 10 Mo) *"
                    )}
                  </span>
                </label>
              </div>

              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-1">Message d'accompagnement (optionnel)</label>
                <textarea
                  rows={3}
                  value={formData.coverNote}
                  onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                  placeholder="Résumez en quelques lignes vos réalisations et motivations..."
                  className="w-full bg-[#07111A] border border-slate-700 rounded-none p-3 text-xs text-white focus:outline-none focus:border-[#00E2B7]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0C1824] bg-[#00E2B7] hover:bg-[#00c49e] shadow-lg shadow-[#00E2B7]/25 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Soumettre ma Candidature</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
