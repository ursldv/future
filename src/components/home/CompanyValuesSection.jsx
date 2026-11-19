import React from 'react';
import { 
  ShieldCheck, 
  Scale, 
  Cpu, 
  Award, 
  HardHat, 
  Users, 
  Smile, 
  CheckCircle2, 
  FileDown, 
  Eye,
  Target
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export default function CompanyValuesSection() {
  const getValueIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#00E2B7]" />;
      case 'Scale': return <Scale className="w-5 h-5 text-amber-500" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-500" />;
      case 'Award': return <Award className="w-5 h-5 text-amber-500" />;
      case 'HardHat': return <HardHat className="w-5 h-5 text-emerald-500" />;
      case 'Users': return <Users className="w-5 h-5 text-cyan-500" />;
      case 'Smile': return <Smile className="w-5 h-5 text-rose-500" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-[#00E2B7]" />;
      default: return <ShieldCheck className="w-5 h-5 text-[#00E2B7]" />;
    }
  };

  const handleDownloadBrochure = (e) => {
    e.preventDefault();
    alert("Téléchargement du dossier institutionnel Future Buildings (Dossier de Présentation & Certifications).");
  };

  return (
    <section id="company" className="py-20 lg:py-28 bg-[#FAF9F6] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#00E2B7] bg-cyan-100/60 px-3.5 py-1 rounded-full border border-cyan-200">
              QUI SOMMES-NOUS ?
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-slate-900 font-['Outfit']">
              Bâtir l'Avenir avec <br />
              <span className="font-serif italic text-[#16202C]">Excellence & Authenticité</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              <strong className="text-slate-900">Future Buildings</strong> s'est imposée comme un acteur majeur 
              dans les travaux de construction, de génie civil, d'aménagements techniques et de logistique d'équipements. 
              Notre engagement repose sur une éthique rigoureuse, la sécurité absolue de nos collaborateurs 
              et la conformité irréprochable de nos ouvrages.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-[#00E2B7]" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm font-['Outfit']">Notre Vision</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {COMPANY_INFO.vision}
                </p>
              </div>
            </div>

            <div className="h-px bg-slate-100"></div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                <Eye className="w-6 h-6 text-[#d4a860]" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm font-['Outfit']">Notre Mission</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {COMPANY_INFO.mission}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleDownloadBrochure}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-[#16202C] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Télécharger la Plaquette Institutionnelle (PDF)</span>
              </button>
            </div>
          </div>
        </div>

        {/* 8 Core Values Grid (Chapitre 1.4 du Cahier des Charges) */}
        <div className="mb-14">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl font-bold font-['Outfit'] text-slate-900">
              Nos 8 Valeurs Fondatrices
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Les piliers indéfectibles qui guident le comportement de chaque collaborateur sur le terrain.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.values.map((val, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 hover:border-[#00E2B7] shadow-sm hover:shadow-lg transition-all duration-300 space-y-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-cyan-50 flex items-center justify-center transition-colors">
                  {getValueIcon(val.icon)}
                </div>
                <h4 className="font-bold text-slate-900 text-base font-['Outfit'] group-hover:text-[#00E2B7] transition-colors">
                  {val.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications and Accreditations banner */}
        <div className="bg-slate-100/80 p-6 sm:p-8 rounded-3xl border border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00E2B7]">Agrément & Conformité</span>
              <h4 className="text-lg font-bold text-slate-900 font-['Outfit']">Certifications & Normes de Sécurité Appliquées</h4>
              <p className="text-xs text-slate-600">Nos méthodes respectent scrupuleusement les référentiels internationaux.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {COMPANY_INFO.certifications.map((cert, cIdx) => (
                <span 
                  key={cIdx}
                  className="bg-white px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-700 border border-slate-200 shadow-2xs flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{cert}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
