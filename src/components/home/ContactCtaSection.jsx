import React from 'react';
import { Phone, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

/**
 * ContactCtaSection component
 * High-impact CTA banner positioned before the footer.
 * Features full-width teal (#00E2B7) background with subtle geometric architectural pattern,
 * 2-column layout with bold white typography, and dark navy + white outline pill action buttons.
 */
export default function ContactCtaSection({
  onOpenQuoteModal,
  phone = "+213 XX XX XX XX"
}) {
  const cleanPhone = phone.replace(/[^0-9+]/g, '');

  return (
    <section className="relative bg-[#00E2B7] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden text-[#16202C]">
      
      {/* Subtle Geometric Architecture Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-cta-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#16202C" strokeWidth="1" />
              <circle cx="24" cy="24" r="1.5" fill="#16202C" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-cta-grid)" />
        </svg>
      </div>

      {/* Decorative Floating Geometric Shapes & Rings */}
      <div 
        className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full border-8 border-white/20 pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute -right-12 -bottom-12 w-72 h-72 rounded-full border-2 border-white/30 pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute right-1/3 -top-20 w-64 h-64 rounded-full border-4 border-[#16202C]/10 pointer-events-none hidden md:block" 
        aria-hidden="true"
      />
      <div 
        className="absolute left-8 bottom-4 w-28 h-28 border-2 border-white/25 rotate-45 pointer-events-none hidden sm:block" 
        aria-hidden="true"
      />
      <div 
        className="absolute left-1/4 top-3 w-16 h-16 border border-[#16202C]/15 rotate-12 pointer-events-none hidden lg:block" 
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Large white heading & paragraph text */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-4">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-[#16202C]/15 backdrop-blur-xs px-4 py-1.5 rounded-full text-[#16202C] font-extrabold text-xs uppercase tracking-wider shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#16202C]"></span>
              <span>CONCRÉTISEZ VOS PROJETS AVEC FUTURE BUILDINGS</span>
            </div>

            {/* Large White Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] leading-tight tracking-tight drop-shadow-xs">
              Prêt à Démarrer Votre Projet ?
            </h2>

            {/* White Paragraph Text */}
            <p className="text-white/95 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Nos équipes d'ingénieurs et d'experts techniques sont à votre entière écoute pour dimensionner vos besoins, optimiser vos budgets et assurer une réalisation rigoureuse dans le respect strict des normes de sécurité.
            </p>

            {/* Quick trust reassurance bullets */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-[#16202C]">
              <div className="flex items-center gap-1.5 bg-white/30 backdrop-blur-xs px-3 py-1 rounded-full border border-white/40">
                <CheckCircle2 className="w-4 h-4 text-[#16202C]" />
                <span>Devis détaillé sous 24h</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/30 backdrop-blur-xs px-3 py-1 rounded-full border border-white/40">
                <CheckCircle2 className="w-4 h-4 text-[#16202C]" />
                <span>Études & Chiffrage Gratuit</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/30 backdrop-blur-xs px-3 py-1 rounded-full border border-white/40">
                <CheckCircle2 className="w-4 h-4 text-[#16202C]" />
                <span>Équipe Réactive & Dédiée</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Two Action Pill Buttons */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center justify-center lg:justify-end gap-4 w-full">
            
            {/* Button 1: Dark Navy Pill Button */}
            <button
              onClick={onOpenQuoteModal}
              type="button"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#16202C] hover:bg-[#0D1620] text-white hover:text-[#00E2B7] font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
            >
              <FileText className="w-5 h-5 text-[#00E2B7] group-hover:scale-110 transition-transform" />
              <span>Demander un Devis Gratuit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Button 2: White Outline Pill Button */}
            <a
              href={cleanPhone ? `tel:${cleanPhone}` : '#contact'}
              className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#16202C] font-bold text-sm sm:text-base shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-4 h-4 text-white group-hover:text-[#16202C] group-hover:scale-110 transition-transform" />
              <span>Appelez-nous: {phone}</span>
            </a>

          </div>

        </div>
      </div>

    </section>
  );
}
