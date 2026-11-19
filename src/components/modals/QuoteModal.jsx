import React, { useState } from 'react';
import { X, Send, Check } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, onQuoteSubmitted }) {
  const [formData, setFormData] = useState({
    serviceType: "Bâtiments & Travaux Publics (BTP)",
    name: "",
    company: "",
    phone: "",
    email: "",
    surface: "",
    budget: "75M - 200M FCFA",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [refNum, setRefNum] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRef = "FB-DEV-" + Math.floor(100000 + Math.random() * 900000);
    setRefNum(newRef);
    setSubmitted(true);

    if (onQuoteSubmitted) {
      onQuoteSubmitted({
        reference: newRef,
        date: new Date().toLocaleDateString('fr-FR'),
        name: formData.name,
        company: formData.company || "Particulier / Promoteur",
        service: formData.serviceType,
        surface: formData.surface ? `${formData.surface} m² / Tonnes` : "Non spécifiée",
        budget: formData.budget,
        phone: formData.phone,
        email: formData.email,
        description: formData.message,
        status: "Nouveau"
      });
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-[#16202C] text-white w-full max-w-xl max-h-[90vh] rounded-3xl border border-[#00E2B7]/40 shadow-2xl overflow-hidden flex flex-col relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700/60 bg-[#0D1620]">
          <div>
            <span className="text-[11px] font-bold text-[#00E2B7] uppercase tracking-widest block">
              Demande de Chiffrage Rapide
            </span>
            <h3 className="text-lg font-bold font-['Outfit'] text-white">
              Devis Gratuit Future Buildings
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#00E2B7]/20 border border-[#00E2B7] rounded-full flex items-center justify-center mx-auto text-[#00E2B7]">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold font-['Outfit'] text-white">
                Demande Enregistrée avec Succès !
              </h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Votre référence est <strong className="text-[#00E2B7] font-mono text-sm">{refNum}</strong>. 
                Notre bureau d'études vous contactera sous 24h avec un devis technique détaillé.
              </p>
              <button
                onClick={handleClose}
                className="mt-4 px-6 py-2 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              >
                Fermer cette fenêtre
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-1">Activité Exercée / Service Requis *</label>
                <select
                  required
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full bg-[#0D1620] border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E2B7]"
                >
                  <option value="Bâtiments & Travaux Publics (BTP)">Bâtiments & Travaux Publics (BTP)</option>
                  <option value="Importation & Engins Lourds">Importation & Fourniture d'Équipements Industriels & Engins</option>
                  <option value="Voirie & Génie Civil">Voirie, Génie Civil & Études Techniques</option>
                  <option value="Second Œuvre, Froid & Énergie">Second Œuvre (Froid, Climatisation, Électricité, Solaire, Incendie)</option>
                  <option value="Applications Web & Logiciels SI">Applications Web, Logiciels & Systèmes d'Information BTP</option>
                  <option value="Matériaux, Sables & Concassés">Achat / Vente d'Équipements, Sables, Gravillons & Concassés</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">Nom complet *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Jean Kouadio"
                    className="w-full bg-[#0D1620] border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E2B7]"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">Entreprise / Mandataire</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Ex: Entreprise SA / Particulier"
                    className="w-full bg-[#0D1620] border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E2B7]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">Téléphone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+225 07 00 00 00"
                    className="w-full bg-[#0D1620] border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E2B7]"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">Email professionnel *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@entreprise.ci"
                    className="w-full bg-[#0D1620] border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E2B7]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">Surface ou Volume approximatif</label>
                  <input
                    type="text"
                    value={formData.surface}
                    onChange={(e) => setFormData({ ...formData, surface: e.target.value })}
                    placeholder="Ex: 1 200 m² / 500 T"
                    className="w-full bg-[#0D1620] border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E2B7]"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">Budget prévisionnel</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#0D1620] border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E2B7]"
                  >
                    <option value="Moins de 25M FCFA">Moins de 25M FCFA</option>
                    <option value="25M - 75M FCFA">25M - 75M FCFA</option>
                    <option value="75M - 200M FCFA">75M - 200M FCFA</option>
                    <option value="200M - 500M FCFA">200M - 500M FCFA</option>
                    <option value="Plus de 500M FCFA">Plus de 500M FCFA</option>
                    <option value="À évaluer avec vos ingénieurs">À évaluer avec vos ingénieurs</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-1">Description sommaire du besoin *</label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Décrivez votre projet : localisation, spécifications particulières, délais souhaités..."
                  className="w-full bg-[#0D1620] border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E2B7] resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  * Champs obligatoires • Réponse garantie sous 24h
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#16202C] bg-[#00E2B7] hover:bg-[#00c49e] shadow-lg shadow-[#00E2B7]/25 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Envoyer ma demande</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
