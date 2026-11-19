import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  MessageSquare, 
  Layers, 
  TrendingUp, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';

export default function AdminDashboardModal({ 
  isOpen, 
  onClose, 
  quotes = [], 
  messages = [] 
}) {
  const [activeTab, setActiveTab] = useState('quotes'); // 'quotes' | 'messages' | 'kpis' | 'cms'

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-[#16202C] text-white w-full max-w-5xl h-[88vh] rounded-3xl border border-[#00E2B7]/40 shadow-2xl overflow-hidden flex flex-col relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700/60 bg-[#0D1620]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#00E2B7] text-[#16202C] flex items-center justify-center font-bold font-mono">
              FB
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white font-['Outfit']">
                  Back-Office Future Buildings (Aperçu CDC)
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#00E2B7]/15 text-[#00E2B7] border border-[#00E2B7]/30">
                  Chapitre 9.1 Cahier des Charges
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Gestion des demandes de devis, messages et indicateurs de performance
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Connecté : Super Administrateur
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-800 bg-[#0D1620] text-xs">
          <button
            onClick={() => setActiveTab('quotes')}
            className={`flex items-center gap-1.5 px-4 py-2.5 border-b-2 font-semibold transition-all cursor-pointer ${
              activeTab === 'quotes'
                ? 'border-[#00E2B7] text-[#00E2B7]'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Demandes de Devis ({quotes.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('messages')}
            className={`flex items-center gap-1.5 px-4 py-2.5 border-b-2 font-semibold transition-all cursor-pointer ${
              activeTab === 'messages'
                ? 'border-[#00E2B7] text-[#00E2B7]'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Messages de Contact ({messages.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('kpis')}
            className={`flex items-center gap-1.5 px-4 py-2.5 border-b-2 font-semibold transition-all cursor-pointer ${
              activeTab === 'kpis'
                ? 'border-[#00E2B7] text-[#00E2B7]'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Indicateurs Clés (KPI 3.6)</span>
          </button>

          <button
            onClick={() => setActiveTab('cms')}
            className={`flex items-center gap-1.5 px-4 py-2.5 border-b-2 font-semibold transition-all cursor-pointer ${
              activeTab === 'cms'
                ? 'border-[#00E2B7] text-[#00E2B7]'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Gestion des Contenus (CMS)</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* TAB 1: Demandes de Devis */}
          {activeTab === 'quotes' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300">
                  Dernières demandes reçues via le formulaire interactif du site :
                </span>
                <span className="text-[#00E2B7]">Synchronisation en direct</span>
              </div>

              {quotes.length === 0 ? (
                <div className="text-center py-12 bg-[#0D1620] rounded-2xl border border-slate-800 text-xs text-slate-400">
                  Aucun devis soumis pour le moment. Testez le bouton « Demander un devis » sur le site pour voir apparaître un dossier ici !
                </div>
              ) : (
                <div className="space-y-3">
                  {quotes.map((q, idx) => (
                    <div 
                      key={idx}
                      className="bg-[#0D1620] p-4 rounded-2xl border border-[#00E2B7]/20 hover:border-[#00E2B7]/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-xs text-[#00E2B7] bg-[#00E2B7]/15 px-2 py-0.5 rounded border border-[#00E2B7]/30">
                            {q.reference}
                          </span>
                          <span className="text-[11px] text-slate-400">{q.date}</span>
                          <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30">
                            {q.status}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white">
                          {q.name} {q.company && <span className="font-normal text-slate-400">({q.company})</span>}
                        </h4>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
                          <span className="text-[#00E2B7] font-medium">{q.service}</span>
                          <span>•</span>
                          <span>Surface : {q.surface}</span>
                          <span>•</span>
                          <span>Budget : {q.budget}</span>
                        </div>
                        {q.description && (
                          <p className="text-xs text-slate-400 italic line-clamp-1 pt-1">
                            « {q.description} »
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <a
                          href={`tel:${q.phone}`}
                          className="px-3 py-1.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-300 text-xs font-semibold"
                        >
                          Appeler ({q.phone})
                        </a>
                        <a
                          href={`mailto:${q.email}?subject=Future Buildings - Devis ${q.reference}`}
                          className="px-3 py-1.5 rounded-lg bg-[#00E2B7]/20 hover:bg-[#00E2B7] hover:text-[#16202C] border border-[#00E2B7]/40 text-[#00E2B7] text-xs font-semibold transition-colors"
                        >
                          Répondre par Email
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Messages de contact */}
          {activeTab === 'messages' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>Messages envoyés depuis la page Contact :</span>
              </div>

              {messages.length === 0 ? (
                <div className="text-center py-12 bg-[#0D1620] rounded-2xl border border-slate-800 text-xs text-slate-400">
                  Aucun message de contact récent. Les messages saisis dans le formulaire de pied de page apparaîtront instantanément ici.
                </div>
              ) : (
                <div className="space-y-3">
                  {messages.map((m, idx) => (
                    <div 
                      key={idx}
                      className="bg-[#0D1620] p-4 rounded-2xl border border-slate-800 space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <strong className="text-white text-sm">{m.name} ({m.email})</strong>
                        <span className="text-slate-400">{m.date}</span>
                      </div>
                      <div className="text-[#00E2B7] font-medium">Sujet : {m.subject || "Demande générale"}</div>
                      <p className="text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                        {m.message}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: KPIs & Performance */}
          {activeTab === 'kpis' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-[#0D1620] p-4 rounded-2xl border border-[#00E2B7]/30 space-y-1">
                  <span className="text-[11px] text-slate-400">Temps de Chargement</span>
                  <div className="text-2xl font-bold text-emerald-400 font-mono">1.28 s</div>
                  <span className="text-[10px] text-slate-500">Objectif CDC : &lt; 3.0s (Conforme)</span>
                </div>

                <div className="bg-[#0D1620] p-4 rounded-2xl border border-[#00E2B7]/30 space-y-1">
                  <span className="text-[11px] text-slate-400">Disponibilité (Uptime)</span>
                  <div className="text-2xl font-bold text-[#00E2B7] font-mono">99.98%</div>
                  <span className="text-[10px] text-slate-500">Objectif CDC : &gt; 99.9% (Conforme)</span>
                </div>

                <div className="bg-[#0D1620] p-4 rounded-2xl border border-[#00E2B7]/30 space-y-1">
                  <span className="text-[11px] text-slate-400">Score Google PageSpeed</span>
                  <div className="text-2xl font-bold text-emerald-400 font-mono">98 / 100</div>
                  <span className="text-[10px] text-slate-500">Objectif CDC : &gt; 90 (Excellent)</span>
                </div>

                <div className="bg-[#0D1620] p-4 rounded-2xl border border-[#00E2B7]/30 space-y-1">
                  <span className="text-[11px] text-slate-400">Taux de Conversion Devis</span>
                  <div className="text-2xl font-bold text-amber-300 font-mono">6.4%</div>
                  <span className="text-[10px] text-slate-500">Objectif CDC : &gt; 5.0% (Validé)</span>
                </div>
              </div>

              {/* Security & SEO health */}
              <div className="bg-[#0D1620] p-6 rounded-2xl border border-slate-800 space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Sécurité & Conformité Technique (Chapitre 8.2)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Chiffrement SSL / HTTPS actif</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Protection Anti-CSRF & XSS validée</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Sitemap XML & Schema.org configurés</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CMS Content Manager */}
          {activeTab === 'cms' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300">
                  Gestionnaire modulaire des rubriques (Articles, Projets, Services) :
                </span>
                <button
                  onClick={() => alert("Fonctionnalité d'ajout de nouveau projet prête pour le back-end de production.")}
                  className="px-3 py-1.5 rounded-lg bg-[#00E2B7] hover:bg-[#00c49e] text-[#16202C] font-bold text-xs cursor-pointer shadow-md"
                >
                  + Ajouter un nouveau projet
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#0D1620] p-4 rounded-2xl border border-slate-800 space-y-2">
                  <h5 className="font-bold text-white text-xs">Module Réalisations</h5>
                  <p className="text-[11px] text-slate-400">6 fiches projets publiées avec filtres par catégorie.</p>
                  <span className="text-[10px] text-emerald-400">Statut : En ligne</span>
                </div>

                <div className="bg-[#0D1620] p-4 rounded-2xl border border-slate-800 space-y-2">
                  <h5 className="font-bold text-white text-xs">Module Services & Activités</h5>
                  <p className="text-[11px] text-slate-400">6 fiches techniques détaillées (BTP, VRD, CVC, Solaire, Matériaux).</p>
                  <span className="text-[10px] text-emerald-400">Statut : En ligne</span>
                </div>

                <div className="bg-[#0D1620] p-4 rounded-2xl border border-slate-800 space-y-2">
                  <h5 className="font-bold text-white text-xs">Module Actualités & Blog</h5>
                  <p className="text-[11px] text-slate-400">4 articles d'analyse et veille technique publiés.</p>
                  <span className="text-[10px] text-emerald-400">Statut : En ligne</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-[#0D1620] flex items-center justify-between text-xs text-slate-400">
          <span>Future Buildings Web Platform v1.0 • Hébergement cloud certifié</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium cursor-pointer"
          >
            Fermer le Back-Office
          </button>
        </div>
      </div>
    </div>
  );
}
