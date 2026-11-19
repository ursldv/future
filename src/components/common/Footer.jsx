import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Logo from '../../assets/Logo.png';

export default function Footer({ onOpenQuoteModal, onOpenAdminModal }) {
  const quickLinks = [
    { name: "Accueil", href: "#home" },
    { name: "À propos", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Réalisations", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  const serviceLinks = [
    { name: "Études Techniques", href: "#services" },
    { name: "Génie Civil", href: "#services" },
    { name: "Courant Faible", href: "#services" },
    { name: "Expertise", href: "#services" },
    { name: "Suivi et Contrôle", href: "#services" }
  ];

  return (
    <footer id="contact" className="bg-[#121B24] text-white pt-16 pb-8 border-t border-[#00E2B7]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Columns Layout: Stacked on mobile, 2x2 on tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-slate-800">
          
          {/* Column 1: Logo, Company description, Social icons */}
          <div className="space-y-5">
            <div className="bg-white p-2.5 rounded-2xl inline-block shadow-md">
              <img
                src={Logo}
                alt="Future Buildings"
                className="h-9 w-auto object-contain"
              />
            </div>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Entreprise spécialisée dans les études techniques, les travaux de génie civil, 
              les réseaux électriques et l'ensemble des installations courant faible de haute technicité.
            </p>

            {/* Social Icons Row (Teal on hover) */}
            <div className="flex items-center space-x-3 pt-1">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:bg-[#00E2B7] hover:text-[#16202C] transition-all duration-200 flex items-center justify-center"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                aria-label="Twitter X"
                className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:bg-[#00E2B7] hover:text-[#16202C] transition-all duration-200 flex items-center justify-center"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:bg-[#00E2B7] hover:text-[#16202C] transition-all duration-200 flex items-center justify-center"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:bg-[#00E2B7] hover:text-[#16202C] transition-all duration-200 flex items-center justify-center"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Liens Rapides */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white font-['Outfit'] tracking-wide">
              Liens Rapides
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-white hover:text-[#00E2B7] transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Nos Services */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white font-['Outfit'] tracking-wide">
              Nos Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {serviceLinks.map((service, idx) => (
                <li key={idx}>
                  <a
                    href={service.href}
                    className="text-white hover:text-[#00E2B7] transition-colors inline-block"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white font-['Outfit'] tracking-wide">
              Contact
            </h4>
            
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00E2B7] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Boulevard de l'Excellence, Zone Tertiaire, Abidjan
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#00E2B7] shrink-0" />
                <a
                  href="tel:+2252722598410"
                  className="hover:text-[#00E2B7] transition-colors"
                >
                  +225 27 22 59 84 10
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#00E2B7] shrink-0" />
                <a
                  href="mailto:contact@thefuturebuildings.com"
                  className="hover:text-[#00E2B7] transition-colors"
                >
                  contact@thefuturebuildings.com
                </a>
              </div>
            </div>

            {/* Quick Quote trigger if callback available */}
            {onOpenQuoteModal && (
              <div className="pt-2">
                <button
                  onClick={onOpenQuoteModal}
                  className="px-5 py-2.5 rounded-full bg-[#00E2B7] hover:bg-[#00c49e] text-[#16202C] text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md"
                >
                  Demander un devis
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar with Dark Border-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2024 Future Buildings. Tous droits réservés.</p>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-slate-200 transition-colors">
              Mentions Légales
            </a>
            <a href="#" className="hover:text-slate-200 transition-colors">
              Politique de Confidentialité
            </a>
            {onOpenAdminModal && (
              <button
                onClick={onOpenAdminModal}
                className="text-[#00E2B7] hover:underline cursor-pointer"
              >
                Back-Office CMS
              </button>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
}
