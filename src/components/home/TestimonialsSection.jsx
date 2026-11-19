import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Future Buildings a réalisé l'intégralité de notre installation électrique avec un professionnalisme remarquable. Délais respectés et qualité irréprochable.",
      name: "Mohammed K.",
      role: "Promoteur Immobilier",
      initials: "MK",
      avatarBg: "bg-gradient-to-br from-[#00E2B7] to-[#00a887] text-[#0D1620]"
    },
    {
      id: 2,
      quote: "Leur expertise en courant faible nous a permis de sécuriser l'ensemble de nos bâtiments. Un partenaire de confiance.",
      name: "Fatima B.",
      role: "Directrice d'Hôtel",
      initials: "FB",
      avatarBg: "bg-gradient-to-br from-[#16202C] to-[#232D3C] text-[#00E2B7] ring-2 ring-[#00E2B7]/30"
    },
    {
      id: 3,
      quote: "Suivi rigoureux, équipe compétente et solutions techniques innovantes. Je recommande vivement Future Buildings.",
      name: "Youcef D.",
      role: "Architecte",
      initials: "YD",
      avatarBg: "bg-gradient-to-br from-[#00c49e] to-[#16202C] text-white"
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#0D1620] text-white relative overflow-hidden">
      {/* Subtle decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E2B7]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#00E2B7] font-bold text-xs uppercase tracking-widest bg-[#00E2B7]/10 px-4 py-1.5 rounded-full border border-[#00E2B7]/25">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E2B7]"></span>
            <span>TÉMOIGNAGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            Découvrez la confiance que nous accordent nos maîtres d'ouvrage et partenaires pour leurs projets d'envergure.
          </p>
        </div>

        {/* 3 Testimonials Cards in a row (White on Dark canvas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white text-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between border border-slate-100 relative group"
            >
              <div className="space-y-4">
                {/* 5 Stars Rating & Quote Decoration */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-200 group-hover:text-[#00E2B7]/40 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic">
                  « {item.quote} »
                </p>
              </div>

              {/* Divider & Author Info */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3.5">
                <div
                  className={`w-12 h-12 rounded-full ${item.avatarBg} flex items-center justify-center font-['Outfit'] font-bold text-sm shadow-sm shrink-0`}
                >
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-['Outfit'] leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#009e7f] mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
