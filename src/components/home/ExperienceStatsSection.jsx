import React from 'react';
import { Award, Users, TrendingUp, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export default function ExperienceStatsSection({ onOpenQuoteModal }) {
  return (
    <section className="py-20 lg:py-28 bg-[#071b2b] text-white relative overflow-hidden">
      {/* Blueprint Crane & Construction Line Watermark */}
      <div className="absolute left-4 -bottom-10 opacity-[0.06] pointer-events-none select-none hidden lg:block">
        <svg width="400" height="500" viewBox="0 0 400 500" fill="none" stroke="currentColor">
          <line x1="80" y1="500" x2="80" y2="80" strokeWidth="3" />
          <line x1="80" y1="120" x2="350" y2="80" strokeWidth="2" />
          <line x1="80" y1="80" x2="20" y2="100" strokeWidth="2" />
          <line x1="20" y1="100" x2="20" y2="150" strokeWidth="2" />
          <line x1="80" y1="80" x2="250" y2="80" strokeWidth="3" />
          <line x1="80" y1="120" x2="160" y2="80" strokeWidth="1.5" />
          <line x1="160" y1="80" x2="240" y2="120" strokeWidth="1.5" />
          <line x1="250" y1="80" x2="250" y2="280" strokeWidth="1.5" strokeDasharray="4 4" />
          <rect x="235" y="280" width="30" height="20" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big 15+ Years (Directly like BUILDORA) */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <div className="inline-block relative">
              <span className="text-7xl sm:text-9xl xl:text-[10.5rem] font-light tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-[#d4a860] via-[#eed59e] to-[#a87f38] font-['Outfit'] block">
                {COMPANY_INFO.stats.yearsExperience}
              </span>
              <span className="text-2xl sm:text-4xl font-light text-slate-300 tracking-wider uppercase block mt-1 font-['Outfit']">
                Années
              </span>
              <span className="text-sm font-semibold text-[#00E2B7] tracking-widest uppercase block mt-1">
                D'Excellence & D'Ingénierie BTP
              </span>
            </div>
          </div>

          {/* Right Column: Narrative & 4 Stat Badges (Buildora Style) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#00E2B7] bg-cyan-950/70 px-3.5 py-1.5 rounded-full border border-cyan-500/30">
                FONDÉ SUR LA CONFIANCE & LA RIGUEUR
              </span>

              <h2 className="text-3xl sm:text-5xl font-light text-white font-['Outfit'] leading-tight">
                Une Expérience qui Bâtit <br />
                <span className="font-serif italic text-amber-200">la Confiance</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Depuis plus de 15 ans, <strong className="text-white">Future Buildings</strong> livre des réalisations 
                d'exception et des solutions clés en main adaptées aux défis les plus complexes. 
                De la conception préliminaire à la réception définitive de l'ouvrage, nous mobilisons expertise technique, 
                transparence contractuelle et excellence opérationnelle sur chaque mètre carré construit.
              </p>
            </div>

            {/* 4 Stats Cards matching BUILDORA layout */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              
              {/* Stat 1 */}
              <div className="bg-[#0b283f]/60 hover:bg-[#0b283f] p-4 rounded-2xl border border-cyan-500/20 transition-all text-center space-y-2 group">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#00E2B7]/15 text-[#00E2B7] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-['Outfit']">
                  {COMPANY_INFO.stats.projectsCompleted}
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  Projets Clés en Main
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-[#0b283f]/60 hover:bg-[#0b283f] p-4 rounded-2xl border border-cyan-500/20 transition-all text-center space-y-2 group">
                <div className="w-10 h-10 mx-auto rounded-full bg-amber-400/15 text-amber-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-['Outfit']">
                  {COMPANY_INFO.stats.clientSatisfaction}
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  Satisfaction Clients
                </div>
              </div>

              {/* Stat 3 */}
              <div className="bg-[#0b283f]/60 hover:bg-[#0b283f] p-4 rounded-2xl border border-cyan-500/20 transition-all text-center space-y-2 group">
                <div className="w-10 h-10 mx-auto rounded-full bg-emerald-400/15 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-['Outfit']">
                  {COMPANY_INFO.stats.expertEngineers}
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  Ingénieurs & Experts
                </div>
              </div>

              {/* Stat 4 */}
              <div className="bg-[#0b283f]/60 hover:bg-[#0b283f] p-4 rounded-2xl border border-cyan-500/20 transition-all text-center space-y-2 group">
                <div className="w-10 h-10 mx-auto rounded-full bg-cyan-400/15 text-cyan-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-['Outfit']">
                  100%
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  Qualité & Sécurité
                </div>
              </div>

            </div>

            {/* Quick button */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Audits réguliers • Contrôles SOCOTEC & Veritas • Normes ISO
              </span>
              <button
                onClick={onOpenQuoteModal}
                className="text-xs font-semibold text-[#00E2B7] hover:text-cyan-300 underline underline-offset-4 cursor-pointer"
              >
                Planifier un échange technique &rarr;
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
