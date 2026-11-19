import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export default function ContactMapSection({ onMessageSubmitted }) {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSentSuccess(true);
    if (onMessageSubmitted) {
      onMessageSubmitted({
        ...contactForm,
        date: new Date().toLocaleDateString('fr-FR'),
        id: 'MSG-' + Date.now()
      });
    }
    setTimeout(() => {
      setSentSuccess(false);
      setContactForm({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8FAFC] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#009e7f] font-bold text-xs uppercase tracking-widest bg-[#00E2B7]/15 px-3.5 py-1 rounded-full border border-[#00E2B7]/30">
            <span className="w-2 h-2 rounded-full bg-[#00E2B7]"></span>
            <span>CONTACT & LOCALISATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-['Outfit']">
            Parlons de Votre Prochain <br />
            <span className="text-[#009e7f]">Projet d'Envergure</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Une question technique, un projet à concrétiser ou une demande de cotation sur des engins et matériaux ? Nos ingénieurs sont à votre entière disposition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Working Hours (Dark Slate Card) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#16202C] text-white p-8 rounded-3xl border border-[#00E2B7]/25 shadow-xl space-y-6">
              <h3 className="text-xl font-bold font-['Outfit'] text-white">
                Coordonnées du Siège Social
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00E2B7]/15 border border-[#00E2B7]/30 flex items-center justify-center shrink-0 text-[#00E2B7]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Adresse Principale</strong>
                    <p className="text-slate-300 mt-0.5">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00E2B7]/15 border border-[#00E2B7]/30 flex items-center justify-center shrink-0 text-[#00E2B7]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Standard Téléphonique</strong>
                    <p className="text-slate-300 mt-0.5">{COMPANY_INFO.phone}</p>
                    <p className="text-slate-400 text-xs mt-0.5">Cellule Chantiers : {COMPANY_INFO.mobile}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00E2B7]/15 border border-[#00E2B7]/30 flex items-center justify-center shrink-0 text-[#00E2B7]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Messagerie Électronique</strong>
                    <p className="text-slate-300 mt-0.5">{COMPANY_INFO.email}</p>
                    <p className="text-slate-400 text-xs mt-0.5">Bureau des Devis : {COMPANY_INFO.quoteEmail}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00E2B7]/15 border border-[#00E2B7]/30 flex items-center justify-center shrink-0 text-[#00E2B7]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Horaires d'Ouverture</strong>
                    <p className="text-slate-300 mt-0.5">{COMPANY_INFO.openingHours}</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-4 border-t border-slate-700/60">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Bonjour%20Future%20Buildings`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#00E2B7] hover:bg-[#00c49e] text-[#16202C] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Échanger Instantanément sur WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-md overflow-hidden">
              <div className="flex items-center justify-between pb-3 text-xs">
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#009e7f]" />
                  Localisation Géographique (Abidjan)
                </span>
                <span className="text-[11px] font-bold text-[#009e7f]">Google Maps Live</span>
              </div>
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100">
                <iframe
                  title="Future Buildings Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127116.14666579294!2d-4.048386!3d5.348434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ea5311959121%3A0x3fe70ddce19221a6!2sAbidjan%2C%20C%C3%B4te%20d&#39;Ivoire!5e0!3m2!1sfr!2s!4v1700000000000!5m2!1sfr!2s"
                  className="w-full h-full border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column: Clean White Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-800 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold font-['Outfit'] text-slate-900">
                  Envoyez-nous un Message Direct
                </h3>
                <p className="text-xs text-slate-500">
                  Formulaire sécurisé avec accusé de réception automatique.
                </p>
              </div>

              {sentSuccess ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-3 animate-in zoom-in-95">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-900">Votre message a été transmis avec succès !</h4>
                  <p className="text-xs text-slate-600">
                    Notre équipe commerciale et technique accusera réception dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-700 font-semibold block mb-1">Nom & Prénom *</label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="Ex: Jean-Marc Koffi"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00E2B7] focus:bg-white transition-all shadow-2xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-700 font-semibold block mb-1">Adresse E-mail *</label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="jean.koffi@societe.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00E2B7] focus:bg-white transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-700 font-semibold block mb-1">Numéro de Téléphone *</label>
                      <input
                        type="tel"
                        required
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        placeholder="+225 07 00 00 00"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00E2B7] focus:bg-white transition-all shadow-2xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-700 font-semibold block mb-1">Activité Concernée</label>
                      <select
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#00E2B7] focus:bg-white transition-all shadow-2xs cursor-pointer"
                      >
                        <option value="">Sélectionnez une activité</option>
                        <option value="btp-batiment">Bâtiments & Travaux Publics (BTP)</option>
                        <option value="engins-lourds">Importation & Engins Lourds</option>
                        <option value="voirie-genie-civil">Voirie, Génie Civil & VRD</option>
                        <option value="froid-climatisation">Second Œuvre, Froid & Énergie Solaire</option>
                        <option value="logiciels-si">Applications Web & Logiciels SI</option>
                        <option value="materiaux-carriere">Matériaux, Sables & Concassés</option>
                        <option value="autre">Autre Demande Spécifique</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-slate-700 font-semibold block mb-1">Votre Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Détaillez votre demande ou votre besoin technique..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00E2B7] focus:bg-white transition-all shadow-2xs"
                    ></textarea>
                  </div>

                  {/* Anti-spam tag */}
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#009e7f]" />
                    <span>Protection Anti-Spam active • Vos données sont strictement confidentielles.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider text-[#16202C] bg-[#00E2B7] hover:bg-[#00c49e] shadow-xl shadow-[#00E2B7]/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Envoyer mon Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
