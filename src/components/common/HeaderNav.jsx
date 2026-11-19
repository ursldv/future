import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Building2, 
  HardHat, 
  Truck, 
  Fan, 
  Cpu, 
  Award, 
  ClipboardCheck, 
  Phone, 
  Mail, 
  Clock 
} from 'lucide-react';
import Logo from '../../assets/Logo.png';
import { COMPANY_INFO } from '../../data/companyData';

export default function HeaderNav({ onOpenQuoteModal, onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('accueil');

  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServicesEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleServicesLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  // 7 official service categories matching Future Buildings domains
  const serviceCategories = [
    {
      id: "etudes-techniques",
      title: "Études Techniques & Ingénierie",
      desc: "Conception architecturale, calculs de structures & modélisation BIM 3D",
      icon: Building2,
      href: "#services"
    },
    {
      id: "expertise-technique",
      title: "Expertise & Diagnostic",
      desc: "Audits de solidité, diagnostics techniques & conformité réglementaire",
      icon: Award,
      href: "#services"
    },
    {
      id: "suivi-controle",
      title: "Suivi & Contrôle de Chantiers",
      desc: "Maîtrise d'œuvre d'exécution (MOEX), ordonnancement (OPC) & QHSE",
      icon: ClipboardCheck,
      href: "#services"
    },
    {
      id: "realisation-btp",
      title: "Réalisation & Travaux BTP",
      desc: "Gros œuvre, résidentiel prestige, tours tertiaires & complexes industriels",
      icon: HardHat,
      href: "#services"
    },
    {
      id: "genie-civil",
      title: "Travaux Génie Civil & VRD",
      desc: "Terrassements lourds, voiries urbaines, ponts & assainissement",
      icon: Truck,
      href: "#services"
    },
    {
      id: "lots-techniques",
      title: "Lots Techniques (Fluides & Énergie)",
      desc: "Climatisation VRV/VRF, froid industriel, centrales solaires & plomberie",
      icon: Fan,
      href: "#services"
    },
    {
      id: "courant-faible",
      title: "Courant Faible & Sécurité",
      desc: "Vidéosurveillance IP, contrôle d'accès, sécurité incendie & GTB smart building",
      icon: Cpu,
      href: "#services"
    }
  ];

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-md border-b border-slate-200/90 py-3.5' : 'border-b border-slate-100 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* 1. LEFT: Logo Image (~40px height) */}
          <a 
            href="#home" 
            onClick={() => handleNavClick('accueil')} 
            className="shrink-0 flex items-center mr-4 lg:mr-8 group"
          >
            <img 
              src={Logo} 
              alt="Future Buildings" 
              className="h-10 sm:h-11 w-auto max-h-11 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </a>

          {/* 2. CENTER: Horizontal Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8 text-sm font-semibold text-slate-800">
            
            {/* Accueil */}
            <a
              href="#home"
              onClick={() => handleNavClick('accueil')}
              className={`py-2 transition-colors relative whitespace-nowrap ${
                activeTab === 'accueil' ? 'text-[#00E2B7] font-bold' : 'hover:text-[#00E2B7]'
              }`}
            >
              Accueil
              {activeTab === 'accueil' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00E2B7] rounded-full"></span>
              )}
            </a>

            {/* À propos */}
            <a
              href="#about"
              onClick={() => handleNavClick('a-propos')}
              className={`py-2 transition-colors relative whitespace-nowrap ${
                activeTab === 'a-propos' ? 'text-[#00E2B7] font-bold' : 'hover:text-[#00E2B7]'
              }`}
            >
              À propos
              {activeTab === 'a-propos' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00E2B7] rounded-full"></span>
              )}
            </a>

            {/* Services with Dropdown Chevron */}
            <div 
              className="relative group py-2"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <a
                href="#services"
                onClick={() => handleNavClick('services')}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'services' || servicesDropdownOpen
                    ? 'text-[#00E2B7] font-bold' 
                    : 'hover:text-[#00E2B7]'
                }`}
              >
                <span>Services</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-[#00E2B7]' : 'text-slate-400'
                  }`} 
                />
              </a>

              {/* 7 Services Categories Clean Dropdown */}
              {servicesDropdownOpen && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[640px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 mt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  {/* Top Bar Header */}
                  <div className="pb-3 mb-3 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#009e7f]">
                      Nos 7 Domaines d'Expertise
                    </span>
                    <a 
                      href="#services" 
                      onClick={() => setServicesDropdownOpen(false)}
                      className="text-xs font-semibold text-slate-500 hover:text-[#00E2B7] flex items-center gap-1 transition-colors"
                    >
                      <span>Consulter la grille complète</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#00E2B7]" />
                    </a>
                  </div>

                  {/* 2-Column Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {serviceCategories.map((service) => {
                      const IconComponent = service.icon;
                      return (
                        <a
                          key={service.id}
                          href={service.href}
                          onClick={() => handleNavClick('services')}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 group/item border border-transparent hover:border-[#00E2B7]/30"
                        >
                          <div className="w-9 h-9 rounded-lg bg-[#00E2B7]/15 text-[#009e7f] group-hover/item:bg-[#00E2B7] group-hover/item:text-[#16202C] flex items-center justify-center shrink-0 transition-colors">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <strong className="text-xs font-bold text-slate-900 group-hover/item:text-[#009e7f] block transition-colors leading-tight">
                              {service.title}
                            </strong>
                            <p className="text-[11px] text-slate-500 line-clamp-1 leading-snug mt-0.5">
                              {service.desc}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Réalisations */}
            <a
              href="#gallery"
              onClick={() => handleNavClick('realisations')}
              className={`py-2 transition-colors relative whitespace-nowrap ${
                activeTab === 'realisations' ? 'text-[#00E2B7] font-bold' : 'hover:text-[#00E2B7]'
              }`}
            >
              Réalisations
              {activeTab === 'realisations' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00E2B7] rounded-full"></span>
              )}
            </a>

            {/* Blog */}
            <a
              href="#blog"
              onClick={() => handleNavClick('blog')}
              className={`py-2 transition-colors relative whitespace-nowrap ${
                activeTab === 'blog' ? 'text-[#00E2B7] font-bold' : 'hover:text-[#00E2B7]'
              }`}
            >
              Blog
              {activeTab === 'blog' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00E2B7] rounded-full"></span>
              )}
            </a>

            {/* Contact */}
            <a
              href="#contact"
              onClick={() => handleNavClick('contact')}
              className={`py-2 transition-colors relative whitespace-nowrap ${
                activeTab === 'contact' ? 'text-[#00E2B7] font-bold' : 'hover:text-[#00E2B7]'
              }`}
            >
              Contact
              {activeTab === 'contact' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00E2B7] rounded-full"></span>
              )}
            </a>

          </nav>

          {/* 3. RIGHT: Search icon in circle + Teal pill button 'Contactez-nous →' */}
          <div className="hidden sm:flex items-center space-x-3.5 shrink-0 ml-4">
            
            {/* Search Icon in Circle Border */}
            <button 
              type="button"
              onClick={onOpenSearch}
              aria-label="Rechercher sur le site"
              className="w-10 h-10 rounded-full border border-slate-200 text-slate-700 hover:text-[#00E2B7] hover:border-[#00E2B7] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm hover:shadow"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Teal Pill CTA Button 'Contactez-nous →' */}
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-[#16202C] bg-[#00E2B7] hover:bg-[#00c49e] shadow-md shadow-[#00E2B7]/20 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span>Contactez-nous</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

          {/* Mobile Right Triggers: Search + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Recherche"
              className="w-9 h-9 rounded-full border border-slate-200 text-slate-700 hover:text-[#00E2B7] flex items-center justify-center"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu Mobile"
              className="p-2 text-slate-800 hover:text-[#00E2B7] rounded-lg hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* 4. Full Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-8 space-y-4 animate-in slide-in-from-top-3 duration-200 shadow-2xl max-h-[85vh] overflow-y-auto">
          
          <nav className="space-y-1 font-semibold text-slate-800 text-sm">
            
            <a
              href="#home"
              onClick={() => handleNavClick('accueil')}
              className={`block px-4 py-2.5 rounded-xl transition-colors ${
                activeTab === 'accueil' ? 'bg-[#00E2B7]/15 text-[#009e7f] font-bold' : 'hover:bg-slate-50'
              }`}
            >
              Accueil
            </a>

            <a
              href="#about"
              onClick={() => handleNavClick('a-propos')}
              className={`block px-4 py-2.5 rounded-xl transition-colors ${
                activeTab === 'a-propos' ? 'bg-[#00E2B7]/15 text-[#009e7f] font-bold' : 'hover:bg-slate-50'
              }`}
            >
              À propos
            </a>

            {/* Mobile Services Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-slate-50 text-left"
              >
                <span className={activeTab === 'services' ? 'text-[#009e7f] font-bold' : ''}>
                  Services
                </span>
                <ChevronDown 
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    mobileServicesExpanded ? 'rotate-180 text-[#00E2B7]' : ''
                  }`} 
                />
              </button>

              {mobileServicesExpanded && (
                <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50/70 rounded-xl mt-1 border border-slate-100">
                  {serviceCategories.map((srv) => (
                    <a
                      key={srv.id}
                      href={srv.href}
                      onClick={() => handleNavClick('services')}
                      className="block px-3 py-2 text-xs font-medium text-slate-700 hover:text-[#009e7f] rounded-lg hover:bg-white transition-colors"
                    >
                      {srv.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#gallery"
              onClick={() => handleNavClick('realisations')}
              className={`block px-4 py-2.5 rounded-xl transition-colors ${
                activeTab === 'realisations' ? 'bg-[#00E2B7]/15 text-[#009e7f] font-bold' : 'hover:bg-slate-50'
              }`}
            >
              Réalisations
            </a>

            <a
              href="#blog"
              onClick={() => handleNavClick('blog')}
              className={`block px-4 py-2.5 rounded-xl transition-colors ${
                activeTab === 'blog' ? 'bg-[#00E2B7]/15 text-[#009e7f] font-bold' : 'hover:bg-slate-50'
              }`}
            >
              Blog
            </a>

            <a
              href="#contact"
              onClick={() => handleNavClick('contact')}
              className={`block px-4 py-2.5 rounded-xl transition-colors ${
                activeTab === 'contact' ? 'bg-[#00E2B7]/15 text-[#009e7f] font-bold' : 'hover:bg-slate-50'
              }`}
            >
              Contact
            </a>

          </nav>

          {/* Quick Contact Box on Mobile */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2.5 text-xs text-slate-600">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center gap-2.5 font-semibold text-slate-800 hover:text-[#009e7f]"
            >
              <Phone className="w-4 h-4 text-[#00E2B7]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center gap-2.5 text-slate-700 hover:text-[#00E2B7]"
            >
              <Mail className="w-4 h-4 text-[#00E2B7]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <div className="flex items-center gap-2.5 text-slate-500">
              <Clock className="w-4 h-4 text-[#00E2B7]" />
              <span>Lun - Sam (07h30 - 18h30)</span>
            </div>
          </div>

          {/* Full-width CTA Button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenQuoteModal) onOpenQuoteModal();
              }}
              className="w-full py-3.5 rounded-full bg-[#00E2B7] hover:bg-[#00c49e] text-[#16202C] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#00E2B7]/25 cursor-pointer transition-all active:scale-95"
            >
              <span>Contactez-nous</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

    </header>
  );
}
