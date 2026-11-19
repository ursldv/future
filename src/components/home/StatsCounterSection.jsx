import React, { useState, useEffect, useRef } from 'react';

const STATS = [
  {
    target: 15,
    suffix: "+",
    label: "Années d'Expérience"
  },
  {
    target: 350,
    suffix: "+",
    label: "Projets Réalisés"
  },
  {
    target: 200,
    suffix: "+",
    label: "Clients Satisfaits"
  },
  {
    target: 45,
    suffix: "+",
    label: "Experts Qualifiés"
  }
];

export default function StatsCounterSection() {
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const sectionRef = useRef(null);
  const animatedRef = useRef(false);
  const rafIdRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;

          const duration = 2000; // 2 seconds animation duration
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Smooth cubic ease-out for realistic deceleration
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts(STATS.map((s) => Math.floor(easeOut * s.target)));

            if (progress < 1) {
              rafIdRef.current = requestAnimationFrame(animate);
            } else {
              setCounts(STATS.map((s) => s.target));
            }
          };

          rafIdRef.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#00E2B7] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-[#16202C]"
    >
      {/* Decorative subtle dot pattern background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#16202C 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-full py-7 px-6 sm:px-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center border-2 border-white/80 group"
            >
              <div className="text-4xl sm:text-4xl lg:text-5xl font-black font-['Outfit'] tracking-tight text-[#16202C] group-hover:scale-105 transition-transform duration-300">
                {counts[idx]}{stat.suffix}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#16202C]/80 mt-1.5 uppercase tracking-wider font-['Plus_Jakarta_Sans']">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
