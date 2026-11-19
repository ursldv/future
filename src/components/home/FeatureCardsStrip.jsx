import React, { useEffect, useRef, useState } from 'react';
import { Wrench, Users, ShieldCheck } from 'lucide-react';

export default function FeatureCardsStrip() {
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

  const cards = [
    {
      id: 1,
      title: 'Excellence Technique',
      desc: 'Études d\'ingénierie rigoureuses, modélisation BIM de pointe et respect strict des normes de calcul et de construction internationales.',
      icon: Wrench,
      delay: 'delay-100',
    },
    {
      id: 2,
      title: 'Expertise Pluridisciplinaire',
      desc: 'Synergie d\'ingénieurs et techniciens seniors en génie civil, lots techniques, électricité, sécurité électronique et réseaux intelligents.',
      icon: Users,
      delay: 'delay-200',
    },
    {
      id: 3,
      title: 'Suivi et Contrôle Qualité',
      desc: 'Audits QHSE systématiques sur chaque chantier, traçabilité des matériaux certifiés et garantie décennale pour des ouvrages pérennes.',
      icon: ShieldCheck,
      delay: 'delay-300',
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="bg-white py-16 px-4 sm:px-6 lg:px-8 relative z-20"
      aria-label="Points forts Future Buildings"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className={`bg-[#16202C] text-white rounded-2xl p-6 sm:p-8 border border-slate-800/80 hover:border-[#00E2B7]/50 shadow-xl hover:shadow-2xl hover:shadow-[#00E2B7]/15 hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col justify-between group ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                } ${card.delay}`}
                style={{ transitionProperty: 'opacity, transform, border-color, box-shadow' }}
              >
                <div>
                  {/* Teal circular icon at top */}
                  <div className="w-14 h-14 rounded-full bg-[#00E2B7] text-[#16202C] flex items-center justify-center mb-6 shadow-md shadow-[#00E2B7]/25 group-hover:scale-110 group-hover:bg-[#33e9c5] transition-all duration-300">
                    <IconComponent className="w-7 h-7" strokeWidth={2.2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold font-['Outfit'] text-white group-hover:text-[#00E2B7] transition-colors duration-300 mb-3">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed font-['Plus_Jakarta_Sans'] font-normal">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom subtle indicator */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 group-hover:text-[#00E2B7] transition-colors duration-300 font-['Outfit'] font-medium">
                  <span>Standard Qualité Supérieure</span>
                  <span className="w-2 h-2 rounded-full bg-[#00E2B7] opacity-80 group-hover:scale-125 transition-transform"></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
