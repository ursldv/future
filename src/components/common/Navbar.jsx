import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Menu, 
  X, 
  MessageSquare, 
  Sliders
} from 'lucide-react';
import logoImg from '../../assets/Logo.png';
import { COMPANY_INFO } from '../../data/companyData';

export default function Navbar({ onOpenQuoteModal, onOpenAdminModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Accueil', href: '#home' },
    { id: 'projects', label: 'Réalisations', href: '#projects' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'equipments', label: 'Équipements & Matériaux', href: '#equipments' },
    { id: 'company', label: 'L\'Entreprise', href: '#company' },
    { id: 'insights', label: 'Actualités', href: '#insights' },
    { id: 'careers', label: 'Carrières', href: '#careers' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Banner (Contact & Quick Access) */}
      <div className="bg-[#051421] text-xs text-slate-300 py-2 border-b border-cyan-500/15 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-300 hover:text-[#00E2B7] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#00E2B7]" />
              <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300 hover:text-[#00E2B7] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#00E2B7]" />
              <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#00E2B7]" />
              <span>Abidjan & Projets Régionaux</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/20 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Chantiers & Bureaux Opérationnels
            </span>

            {/* Bouton simulation Back-office CDC */}
            <button
              onClick={onOpenAdminModal}
              className="text-[11px] font-medium text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/30 px-2.5 py-0.5 rounded-full transition-all flex items-center gap-1 cursor-pointer"
              title="Aperçu du Back-Office CMS (Chapitre 9 du Cahier des Charges)"
            >
              <Sliders className="w-3 h-3 text-[#00E2B7]" />
              Espace Back-Office (Demo)
            </button>
          </div>
        </div>
      </div>

      {/* Main Floating Glass Navbar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#071b2b]/95 backdrop-blur-md shadow-2xl py-3 border-b border-cyan-500/20' 
            : 'bg-[#071b2b]/85 backdrop-blur-sm py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Future Buildings */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="bg-white/95 p-1.5 rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300">
              <img 
                src={logoImg} 
                alt="Future Buildings Logo" 
                className="h-9 sm:h-11 object-contain"
              />
            </div>
            <div className="hidden lg:flex flex-col">
              <span className="text-white font-extrabold tracking-wide text-lg font-['Outfit'] group-hover:text-[#00E2B7] transition-colors">
                FUTURE BUILDINGS
              </span>
              <span className="text-[10px] text-cyan-300/80 tracking-widest uppercase font-medium">
                {COMPANY_INFO.slogan}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveNav(link.id)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg relative ${
                  activeNav === link.id
                    ? 'text-white font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                {activeNav === link.id && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#00E2B7] rounded-full shadow-[0_0_8px_#00E2B7]"></span>
                )}
              </a>
            ))}
          </nav>

          {/* Action CTA & WhatsApp */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Bonjour%20Future%20Buildings,%20je%20souhaite%20des%20renseignements%20sur%20vos%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all duration-200"
              title="Discuter directement sur WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* CTA Devis Button styled like BUILDORA Get a Quote button */}
            <button
              onClick={onOpenQuoteModal}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide text-slate-900 bg-gradient-to-r from-[#d4a860] via-[#eed59e] to-[#c8994a] hover:from-[#c8994a] hover:to-[#d4a860] shadow-lg shadow-amber-500/20 hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer active:scale-95"
            >
              <span>Demander un Devis</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenQuoteModal}
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-900 bg-gradient-to-r from-[#d4a860] to-[#eed59e]"
            >
              Devis
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#071b2b] border-b border-cyan-500/20 px-4 pt-3 pb-6 space-y-2 mt-3 animate-in slide-in-from-top-4 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveNav(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                  activeNav === link.id
                    ? 'bg-[#00E2B7]/20 text-cyan-300 font-bold border-l-4 border-[#00E2B7]'
                    : 'text-slate-200 hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-700/60 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#d4a860] to-[#eed59e] text-slate-900 font-bold text-sm shadow-md"
              >
                <span>Demander un Devis Détaillé</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdminModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Ouvrir l'Espace Gestionnaire / Back-Office</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
