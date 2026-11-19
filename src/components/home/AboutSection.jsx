import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, Award, ArrowRight } from 'lucide-react';

export default function AboutSection({ onOpenQuoteModal }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCtaClick = (e) => {
    if (onOpenQuoteModal) {
      e.preventDefault();
      onOpenQuoteModal();
    }
  };

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="bg-white py-20 lg:py-28 relative overflow-hidden scroll-mt-20"
      aria-label="À propos de Future Buildings"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT COLUMN: IMAGES & BADGE ================= */}
          <div 
            className={`lg:col-span-6 relative transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Background Decorative Dots Pattern (Top-Left) */}
            <div 
              className="absolute -top-8 -left-8 sm:-top-10 sm:-left-10 w-44 h-44 opacity-40 pointer-events-none -z-10"
              style={{
                backgroundImage: 'radial-gradient(#00E2B7 2px, transparent 2px)',
                backgroundSize: '16px 16px',
              }}
              aria-hidden="true"
            />

            {/* Background Decorative Dots Pattern (Bottom-Right) */}
            <div 
              className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-6 w-36 h-36 opacity-25 pointer-events-none -z-10"
              style={{
                backgroundImage: 'radial-gradient(#16202C 2px, transparent 2px)',
                backgroundSize: '14px 14px',
              }}
              aria-hidden="true"
            />

            {/* Soft Ambient Teal Glow */}
            <div className="absolute -top-6 -left-6 w-72 h-80 bg-[#00E2B7]/10 rounded-3xl -z-10 blur-2xl pointer-events-none" />

            {/* Images Composition Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none pr-6 sm:pr-12 pb-8 sm:pb-10">
              
              {/* Main Large Image with Rounded Corners */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/5] sm:aspect-[4/4.5] w-[86%] sm:w-[82%]">
                <img
                  src="https://images.unsplash.com/photo-1541971875076-8f970d573be6?w=800&q=80"
                  alt="Chantier de construction et architecture moderne par Future Buildings"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Smaller Capsule/Pill-Shaped Overlay Image Overlapping Bottom-Right */}
              <div className="absolute -bottom-2 right-0 sm:bottom-0 sm:right-2 w-44 sm:w-56 h-64 sm:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white bg-slate-100 z-10">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80"
                  alt="Ingénieur et technicien en installation électrique Future Buildings"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Floating Teal Badge / Pill: 15+ Années D'Expérience */}
              <div className="absolute top-6 -left-3 sm:-left-6 z-20 rounded-full bg-[#00E2B7] text-[#16202C] px-5 py-3 sm:px-6 sm:py-3.5 shadow-xl shadow-[#00E2B7]/35 inline-flex items-center gap-3.5 border-2 border-dashed border-white">
                <span className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] leading-none">
                  15+
                </span>
                <div className="w-px h-8 bg-[#16202C]/25" />
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider leading-tight text-[#16202C]">
                  Années D'<br />Expérience
                </div>
              </div>

            </div>
          </div>

          {/* ================= RIGHT COLUMN: CONTENT ================= */}
          <div 
            className={`lg:col-span-6 space-y-6 transition-all duration-700 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Teal Uppercase Small Label */}
            <div className="inline-flex items-center gap-2 text-[#009e7f] font-bold text-xs uppercase tracking-widest bg-[#00E2B7]/15 px-3.5 py-1.5 rounded-full border border-[#00E2B7]/30">
              <span className="w-2 h-2 rounded-full bg-[#00E2B7] animate-pulse" />
              <span>À PROPOS DE NOUS</span>
            </div>

            {/* Large Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16202C] font-['Outfit'] leading-tight tracking-tight">
              Des Solutions Techniques <br className="hidden sm:inline" />
              <span className="text-[#00c49e]">Innovantes et Fiables</span>
            </h2>

            {/* Paragraph of Descriptive Text */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-['Plus_Jakarta_Sans']">
              Acteur de référence dans les domaines du bâtiment, du génie civil et des technologies appliquées, 
              <strong className="text-[#16202C] font-semibold"> Future Buildings</strong> combine rigueur d'ingénierie, 
              maîtrise technique et sens du détail pour concrétiser vos projets d'infrastructure les plus exigeants. 
              Des études techniques préalables aux lots techniques spécialisés (courant fort, courant faible, sécurité 
              électronique et efficacité énergétique), nos équipes garantissent un accompagnement d'excellence de bout en bout.
            </p>

            {/* Two Feature Items Stacked */}
            <div className="space-y-4 pt-2">
              
              {/* Feature Item 1: Qualité Certifiée */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F4F7F6] border border-slate-200/80 hover:border-[#00E2B7] transition-colors duration-300 group">
                <div className="w-12 h-12 rounded-full bg-[#00E2B7] text-[#16202C] flex items-center justify-center shrink-0 shadow-md shadow-[#00E2B7]/20 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#16202C] font-['Outfit']">
                    Qualité Certifiée
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed font-['Plus_Jakarta_Sans']">
                    Conformité stricte aux standards internationaux et aux règles de l'art, audits de contrôle continus et garantie décennale systématique sur l'ensemble de nos réalisations.
                  </p>
                </div>
              </div>

              {/* Feature Item 2: Expertise Reconnue */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F4F7F6] border border-slate-200/80 hover:border-[#00E2B7] transition-colors duration-300 group">
                <div className="w-12 h-12 rounded-full bg-[#00E2B7] text-[#16202C] flex items-center justify-center shrink-0 shadow-md shadow-[#00E2B7]/20 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#16202C] font-['Outfit']">
                    Expertise Reconnue
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed font-['Plus_Jakarta_Sans']">
                    Ingénieurs et techniciens hautement qualifiés cumulant plus de 15 années d'expérience et plus de 250 chantiers majeurs menés à bien avec un taux de satisfaction de 99%.
                  </p>
                </div>
              </div>

            </div>

            {/* Teal Pill CTA Button */}
            <div className="pt-3">
              <a
                href="#services"
                onClick={handleCtaClick}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-[#16202C] bg-[#00E2B7] hover:bg-[#33e9c5] shadow-lg shadow-[#00E2B7]/30 hover:shadow-xl hover:shadow-[#00E2B7]/40 hover:-translate-y-0.5 transition-all duration-300 font-['Outfit'] group"
              >
                <span>Découvrir notre histoire</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
