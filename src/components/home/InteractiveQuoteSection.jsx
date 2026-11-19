import React, { useState } from 'react';
import { 
  Calculator, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Send, 
  Building2, 
  Truck, 
  Fan, 
  Zap, 
  HardHat, 
  Laptop,
  Upload,
  Check
} from 'lucide-react';

export default function InteractiveQuoteSection({ onQuoteSubmitted }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: "btp",
    projectName: "",
    surface: 500,
    budgetRange: "50m-150m",
    delay: "standard",
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: "",
    description: "",
    fileName: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [quoteReference, setQuoteReference] = useState("");

  const servicesOptions = [
    { id: "btp", label: "Construction & Bâtiment", icon: Building2, desc: "Résidences, tours de bureaux, villas" },
    { id: "tp-vrd", label: "Travaux Publics & VRD", icon: Truck, desc: "Voirie, assainissement, terrassement" },
    { id: "cvc", label: "Second Œuvre & Climatisation", icon: Fan, desc: "Froid industriel, CVC, plomberie" },
    { id: "solaire", label: "Électricité & Solaire", icon: Zap, desc: "Centrales photovoltaïques, MT/BT" },
    { id: "materiaux", label: "Engins & Matériaux", icon: HardHat, desc: "Location d'engins, sables, concassés" },
    { id: "etudes", label: "Études & Logiciels BTP", icon: Laptop, desc: "BIM, notes de calculs, SI chantiers" }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, fileName: e.target.files[0].name }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = "FB-DEV-" + Math.floor(100000 + Math.random() * 900000);
    setQuoteReference(ref);
    setSubmitted(true);

    const newQuoteRecord = {
      reference: ref,
      date: new Date().toLocaleDateString('fr-FR'),
      name: `${formData.firstName} ${formData.lastName}`,
      company: formData.company || "Particulier",
      service: servicesOptions.find(s => s.id === formData.serviceType)?.label || formData.serviceType,
      surface: `${formData.surface} m²`,
      budget: formData.budgetRange,
      phone: formData.phone,
      email: formData.email,
      description: formData.description,
      status: "Nouveau"
    };

    if (onQuoteSubmitted) {
      onQuoteSubmitted(newQuoteRecord);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    setFormData({
      serviceType: "btp",
      projectName: "",
      surface: 500,
      budgetRange: "50m-150m",
      delay: "standard",
      firstName: "",
      lastName: "",
      company: "",
      phone: "",
      email: "",
      description: "",
      fileName: ""
    });
  };

  return (
    <section id="quote-calculator" className="py-20 lg:py-28 bg-[#071b2b] text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#00E2B7] bg-cyan-950/80 px-3.5 py-1 rounded-full border border-cyan-500/30">
            SIMULATEUR DE PROJET & DEVIS EXPRESS
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-white font-['Outfit']">
            Estimez Votre Projet <br />
            <span className="font-serif italic text-amber-200">en Quelques Clics</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm">
            Conforme au Cahier des Charges (Chapitre 7.4). Recevez une estimation et un chiffrage préliminaire sous 24 à 48 heures.
          </p>
        </div>

        {/* Multi-step Box */}
        <div className="bg-[#0b283f]/90 rounded-3xl p-6 sm:p-10 border border-cyan-500/30 shadow-2xl backdrop-blur-md relative overflow-hidden">
          
          {/* Progress Steps Header */}
          {!submitted && (
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-700/60 text-xs">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#00E2B7] font-bold' : 'text-slate-500'}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? 'bg-[#00E2B7] text-white' : 'bg-slate-800 text-slate-400'}`}>
                  1
                </span>
                <span>Type de Projet</span>
              </div>
              <div className="h-0.5 w-12 bg-slate-700 hidden sm:block"></div>
              <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#00E2B7] font-bold' : 'text-slate-500'}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? 'bg-[#00E2B7] text-white' : 'bg-slate-800 text-slate-400'}`}>
                  2
                </span>
                <span>Paramètres & Échelle</span>
              </div>
              <div className="h-0.5 w-12 bg-slate-700 hidden sm:block"></div>
              <div className={`flex items-center gap-2 ${step >= 3 ? 'text-[#00E2B7] font-bold' : 'text-slate-500'}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 3 ? 'bg-[#00E2B7] text-white' : 'bg-slate-800 text-slate-400'}`}>
                  3
                </span>
                <span>Coordonnées & Validation</span>
              </div>
            </div>
          )}

          {submitted ? (
            /* Confirmation Screen */
            <div className="text-center py-10 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
                  Demande de Devis Enregistrée !
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Votre demande a bien été transmise à notre bureau d'études techniques. Un ingénieur dédié prendra contact avec vous.
                </p>
                <div className="inline-block mt-3 px-4 py-2 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-300 font-mono text-sm">
                  Dossier N° : <strong>{quoteReference}</strong>
                </div>
              </div>

              <div className="pt-4 flex justify-center gap-4">
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                >
                  Effectuer une autre estimation
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* STEP 1: Choisir le type de prestation */}
              {step === 1 && (
                <div className="space-y-6">
                  <h4 className="text-lg font-bold font-['Outfit'] text-white flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#00E2B7]" />
                    Sélectionnez la catégorie de prestation souhaitée
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {servicesOptions.map((opt) => {
                      const Icon = opt.icon;
                      const isSelected = formData.serviceType === opt.id;
                      return (
                        <div
                          key={opt.id}
                          onClick={() => handleInputChange('serviceType', opt.id)}
                          className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? 'bg-cyan-950/80 border-[#00E2B7] shadow-lg shadow-cyan-500/20'
                              : 'bg-slate-900/40 border-slate-700/60 hover:border-slate-500'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-[#00E2B7] text-white' : 'bg-slate-800 text-slate-300'}`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            {isSelected && <CheckCircle2 className="w-5 h-5 text-[#00E2B7]" />}
                          </div>
                          <div>
                            <h5 className="font-bold text-sm text-white">{opt.label}</h5>
                            <p className="text-xs text-slate-400 mt-1">{opt.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900 bg-gradient-to-r from-[#d4a860] to-[#eed59e] cursor-pointer"
                    >
                      <span>Continuer vers les paramètres</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Paramètres techniques */}
              {step === 2 && (
                <div className="space-y-6">
                  <h4 className="text-lg font-bold font-['Outfit'] text-white flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-[#00E2B7]" />
                    Échelle et Enveloppe Estimative
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Surface */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <label className="text-slate-300 font-semibold">Surface approximative / Linéaire</label>
                        <span className="text-cyan-300 font-bold">{formData.surface} m²</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="25000"
                        step="50"
                        value={formData.surface}
                        onChange={(e) => handleInputChange('surface', Number(e.target.value))}
                        className="w-full accent-[#00E2B7] cursor-pointer"
                      />
                      <div className="flex justify-between text-[11px] text-slate-500">
                        <span>50 m² (privatif)</span>
                        <span>5 000 m²</span>
                        <span>25 000 m²+ (grand ouvrage)</span>
                      </div>
                    </div>

                    {/* Budget Estimatif */}
                    <div className="space-y-2">
                      <label className="text-xs text-slate-300 font-semibold block">Budget approximatif envisagé</label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => handleInputChange('budgetRange', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00E2B7]"
                      >
                        <option value="moins-25m">Moins de 25 Millions FCFA (~ 38 000 €)</option>
                        <option value="25m-75m">25 à 75 Millions FCFA (~ 38k - 115k €)</option>
                        <option value="75m-200m">75 à 200 Millions FCFA (~ 115k - 300k €)</option>
                        <option value="200m-500m">200 à 500 Millions FCFA (~ 300k - 760k €)</option>
                        <option value="plus-500m">Plus de 500 Millions FCFA (Grand Projet Institutionnel)</option>
                      </select>
                    </div>
                  </div>

                  {/* Delay urgency */}
                  <div className="space-y-2">
                    <label className="text-xs text-slate-300 font-semibold block">Échéance souhaitée pour le démarrage</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: "urgent", label: "Urgent (< 1 mois)" },
                        { id: "standard", label: "Dans les 1 à 3 mois" },
                        { id: "etude", label: "Phase étude / Appel d'offre" }
                      ].map(d => (
                        <button
                          type="button"
                          key={d.id}
                          onClick={() => handleInputChange('delay', d.id)}
                          className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                            formData.delay === d.id
                              ? 'bg-cyan-950/80 border-[#00E2B7] text-cyan-200'
                              : 'bg-slate-900/50 border-slate-700 text-slate-400'
                          }`}
                        >
                          {d.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-400 hover:text-white border border-slate-700 cursor-pointer"
                    >
                      &larr; Retour
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900 bg-gradient-to-r from-[#d4a860] to-[#eed59e] cursor-pointer"
                    >
                      <span>Continuer vers les coordonnées</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Coordonnées & Pièces jointes (Chapitre 7.4) */}
              {step === 3 && (
                <div className="space-y-6">
                  <h4 className="text-lg font-bold font-['Outfit'] text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#00E2B7]" />
                    Vos Coordonnées & Descriptif du Besoin
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-300 font-semibold block mb-1">Prénom *</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="Ex: Alexandre"
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E2B7]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-300 font-semibold block mb-1">Nom de famille *</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Ex: Kouamé"
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E2B7]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs text-slate-300 font-semibold block mb-1">Entreprise / Organisme</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Ex: Groupe Bâtir SA"
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E2B7]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-300 font-semibold block mb-1">Numéro de Téléphone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+225 07 00 00 00"
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E2B7]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-300 font-semibold block mb-1">Adresse Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="contact@domaine.com"
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E2B7]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 font-semibold block mb-1">Description détaillée du besoin *</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Précisez la localisation du terrain, le type de structure, les particularités techniques..."
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#00E2B7]"
                    ></textarea>
                  </div>

                  {/* Possibilité de joindre des pièces jointes (plans, CCTP) */}
                  <div className="border border-dashed border-slate-700 rounded-xl p-4 text-center">
                    <input
                      type="file"
                      id="quote-file"
                      className="hidden"
                      onChange={handleFileUpload}
                    />
                    <label htmlFor="quote-file" className="cursor-pointer flex flex-col items-center gap-1.5">
                      <Upload className="w-5 h-5 text-[#00E2B7]" />
                      <span className="text-xs text-slate-300">
                        {formData.fileName ? (
                          <strong className="text-emerald-400">Fichier joint : {formData.fileName}</strong>
                        ) : (
                          "Joindre un plan, CCTP ou cahier des charges (PDF, DWG, ZIP jusqu'à 25 Mo)"
                        )}
                      </span>
                    </label>
                  </div>

                  <div className="flex justify-between items-center pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-400 hover:text-white border border-slate-700 cursor-pointer"
                    >
                      &larr; Retour
                    </button>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900 bg-gradient-to-r from-[#d4a860] via-[#eed59e] to-[#c8994a] shadow-xl hover:shadow-amber-500/25 transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmettre ma demande de devis</span>
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
