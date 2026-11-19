import React from 'react';
import { Briefcase, MapPin, Send } from 'lucide-react';
import { CAREER_JOBS } from '../../data/jobsData';

export default function CareersSection({ onApplyJob }) {

  return (
    <section id="careers" className="py-20 bg-[#071b2b] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#00E2B7] bg-cyan-950/80 px-3.5 py-1 rounded-full border border-cyan-500/30">
            REJOINDRE L'AVENTURE FUTURE BUILDINGS
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-white font-['Outfit']">
            Opportunités de <span className="font-serif italic text-amber-200">Carrière</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Rejoignez une équipe d'ingénieurs et d'experts passionnés qui bâtissent les ouvrages de référence de demain.
          </p>
        </div>

        {/* Jobs List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {CAREER_JOBS.map((job) => (
            <div
              key={job.id}
              className="bg-[#0b283f]/70 rounded-3xl p-6 sm:p-8 border border-cyan-500/20 hover:border-[#00E2B7] transition-all flex flex-col justify-between group space-y-5"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-amber-300 bg-amber-950/50 px-3 py-1 rounded-full border border-amber-500/30">
                    {job.type}
                  </span>
                  <span className="text-xs text-cyan-300 font-mono">
                    {job.department}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-['Outfit'] group-hover:text-[#00E2B7] transition-colors">
                  {job.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {job.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-700/60">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#00E2B7]" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-amber-300" />
                    Exp : {job.experience}
                  </span>
                </div>
              </div>

              <div>
                <button
                  onClick={() => onApplyJob(job)}
                  className="w-full py-3 rounded-xl bg-cyan-950/80 hover:bg-[#00E2B7] text-cyan-200 hover:text-white border border-cyan-500/30 font-semibold text-xs tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Postuler à cette offre</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Spontaneous Application Banner */}
        <div className="bg-gradient-to-r from-[#0b283f] to-[#071b2b] p-6 rounded-2xl border border-cyan-500/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="text-base font-bold text-white font-['Outfit']">Vous ne trouvez pas votre poste ?</h4>
            <p className="text-xs text-slate-300">Envoyez-nous votre candidature spontanée avec votre CV et portfolio.</p>
          </div>
          <button
            onClick={() => onApplyJob({ title: "Candidature Spontanée", department: "Ressources Humaines" })}
            className="px-6 py-2.5 rounded-full text-xs font-bold text-slate-900 bg-gradient-to-r from-[#d4a860] to-[#eed59e] shrink-0 cursor-pointer"
          >
            Déposer une Candidature Spontanée
          </button>
        </div>

      </div>
    </section>
  );
}
