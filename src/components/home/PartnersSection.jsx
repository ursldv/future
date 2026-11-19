import React from 'react';

/**
 * PartnersSection component
 * Displays reference partners & institutional client logos
 * Styled text-based placeholder logos with opacity-50 hover to full opacity.
 * Features pure CSS marquee animation on desktop and responsive wrap on mobile.
 */
export default function PartnersSection() {
  const partners = [
    {
      id: 'sonatrach',
      name: 'SONATRACH',
      tagline: 'Énergie & Hydrocarbures',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C9.5 6 7 8.5 7 12.5a5 5 0 0 0 10 0c0-4-2.5-6.5-5-10.5zm0 18a3 3 0 0 1-3-3c0-2 1.5-3.5 3-6 1.5 2.5 3 4 3 6a3 3 0 0 1-3 3z" />
        </svg>
      )
    },
    {
      id: 'sonelgaz',
      name: 'SONELGAZ',
      tagline: 'Électricité & Gaz',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13 2L4 13.5h6L8.5 22 19 10.5h-6.5L13 2z" />
        </svg>
      )
    },
    {
      id: 'cosider',
      name: 'COSIDER',
      tagline: 'BTP & Travaux Publics',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 6h16v3H4V6zm2 5h12v3H6v-3zm3 5h6v3H9v-3z" />
        </svg>
      )
    },
    {
      id: 'cevital',
      name: 'CEVITAL',
      tagline: 'Industrie & Logistique',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3m0 14v3M2 12h3m14 0h3m-3.5-6.5l-2.2 2.2M7.7 16.3l-2.2 2.2m0-11l2.2 2.2m8.6 8.6l2.2 2.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      )
    },
    {
      id: 'seaal',
      name: 'SEAAL',
      tagline: 'Eaux & Assainissement',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 13.5c2 0 3-1.5 5-1.5s3 1.5 5 1.5 3-1.5 5-1.5 3 1.5 5 1.5v3c-2 0-3-1.5-5-1.5s-3 1.5-5 1.5-3-1.5-5-1.5-3 1.5-5 1.5v-3zm0-6c2 0 3-1.5 5-1.5s3 1.5 5 1.5 3-1.5 5-1.5 3 1.5 5 1.5v3c-2 0-3-1.5-5-1.5s-3 1.5-5 1.5-3-1.5-5-1.5-3 1.5-5 1.5v-3z" />
        </svg>
      )
    },
    {
      id: 'naftal',
      name: 'NAFTAL',
      tagline: 'Carburants & Énergie',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3L5 13a7 7 0 1 0 14 0L12 3zm0 14a4 4 0 0 1-4-4c0-1.2.7-2.3 1.6-3.1l2.4-2.7 2.4 2.7c.9.8 1.6 1.9 1.6 3.1a4 4 0 0 1-4 4z" />
        </svg>
      )
    }
  ];

  // Doubled list for seamless infinite marquee loop
  const marqueeList = [...partners, ...partners];

  return (
    <section className="py-12 bg-[#F4F7F6] border-y border-slate-200/80 overflow-hidden relative">
      {/* Embedded CSS for smooth continuous marquee with pause on hover */}
      <style>{`
        @keyframes partnersMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .partners-marquee-track {
          display: flex;
          width: max-content;
          animation: partnersMarquee 35s linear infinite;
        }
        .partners-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Decorative gradient masks for smooth edge fade on desktop marquee */}
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#F4F7F6] via-[#F4F7F6]/80 to-transparent z-10 pointer-events-none" />
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#F4F7F6] via-[#F4F7F6]/80 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-9 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200/90 shadow-2xs text-[#009e7f] text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#00E2B7]"></span>
            <span>RÉFÉRENCES INSTITUTIONNELLES & INDUSTRIELLES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16202C] font-['Outfit'] tracking-tight">
            Ils Nous Font Confiance
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Des partenariats durables avec les acteurs de référence pour concevoir et bâtir des projets d'envergure.
          </p>
        </div>

        {/* Mobile View: Clean wrap grid */}
        <div className="flex md:hidden flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          {partners.map((partner) => (
            <div
              key={`mob-${partner.id}`}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/90 hover:bg-white border border-slate-200/80 hover:border-[#00E2B7] shadow-2xs hover:shadow-sm transition-all duration-300 opacity-50 hover:opacity-100 group cursor-pointer w-[calc(50%-0.5rem)] sm:w-auto"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-[#00E2B7]/20 flex items-center justify-center text-slate-600 group-hover:text-[#009e7f] transition-colors shrink-0">
                {partner.icon}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-bold text-lg sm:text-xl tracking-wider text-slate-700 group-hover:text-slate-900 font-['Outfit'] truncate leading-tight">
                  {partner.name}
                </span>
                <span className="text-[9px] font-semibold tracking-wider text-slate-400 group-hover:text-slate-600 uppercase truncate">
                  {partner.tagline}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Infinite Marquee Row */}
        <div className="hidden md:flex overflow-hidden py-1">
          <div className="partners-marquee-track gap-6 lg:gap-8 items-center">
            {marqueeList.map((partner, idx) => (
              <div
                key={`marquee-${partner.id}-${idx}`}
                className="flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/80 hover:border-[#00E2B7]/60 shadow-2xs hover:shadow-md transition-all duration-300 opacity-50 hover:opacity-100 group cursor-pointer shrink-0"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-[#00E2B7]/20 flex items-center justify-center text-slate-600 group-hover:text-[#009e7f] transition-colors shrink-0">
                  {partner.icon}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl tracking-wider text-slate-700 group-hover:text-slate-900 font-['Outfit'] leading-none">
                    {partner.name}
                  </span>
                  <span className="text-[10px] font-semibold tracking-wider text-slate-400 group-hover:text-slate-600 uppercase mt-1">
                    {partner.tagline}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
