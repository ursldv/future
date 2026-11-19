import { useEffect, useRef, useState } from 'react';
import { SectionIntro } from './primitives';

const STEPS = [
  {
    title: 'Diagnostic & cadrage',
    text: "Visite de site, relevés et lecture critique du cahier des charges. Nous identifions dès le départ les risques techniques, réglementaires et budgétaires.",
    out: 'Rapport de diagnostic',
  },
  {
    title: 'Études d’ingénierie',
    text: "Notes de calcul, maquette BIM, plans d’exécution et planning contractuel. Tous les lots sont conçus ensemble pour éviter les conflits sur chantier.",
    out: 'Plans d’exécution · Maquette BIM',
  },
  {
    title: 'Mobilisation',
    text: "Installation de chantier, engins et approvisionnement en matériaux certifiés, contrôlés à réception avec fiches de traçabilité.",
    out: 'Installation de chantier',
  },
  {
    title: 'Exécution sous contrôle',
    text: "Gros œuvre, génie civil puis lots techniques, avec des points d’arrêt qualité et sécurité à chaque étape critique.",
    out: 'Rapports hebdomadaires QHSE',
  },
  {
    title: 'Réception & garanties',
    text: "Essais normés, levée des réserves, dossier des ouvrages exécutés et formation des exploitants. L’ouvrage est remis avec ses garanties.",
    out: 'PV de réception · DOE',
  },
];

export default function Methode() {
  const listRef = useRef(null);
  const fillRef = useRef(null);
  const [reached, setReached] = useState(-1);
  const reachedRef = useRef(-1);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const list = listRef.current;
      if (!list) return;
      const r = list.getBoundingClientRect();
      const anchor = window.innerHeight * 0.6;
      const p = Math.min(1, Math.max(0, (anchor - r.top) / r.height));
      if (fillRef.current) fillRef.current.style.transform = `scaleY(${p})`;
      const items = list.querySelectorAll('[data-step]');
      let idx = -1;
      items.forEach((el, i) => {
        if (el.getBoundingClientRect().top < anchor) idx = i;
      });
      if (idx !== reachedRef.current) {
        reachedRef.current = idx;
        setReached(idx);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="methode" className="relative bg-night-2 py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionIntro
              eyebrow="Notre méthode"
              title="Un chantier se gagne avant le premier coup de pelle."
              text="Cinq étapes, un responsable unique et des livrables vérifiables à chaque jalon. Vous savez toujours où en est votre ouvrage."
            />
            <div className="mt-10 hidden overflow-hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?auto=format&fit=crop&w=1200&q=80"
                alt="Chantier Future Buildings en phase d'exécution"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>
        </div>

        <ol ref={listRef} className="relative lg:col-span-6 lg:col-start-7">
          <span className="absolute bottom-0 left-[23px] top-0 w-px bg-ink/10" aria-hidden="true" />
          <span
            ref={fillRef}
            className="absolute bottom-0 left-[23px] top-0 w-px origin-top scale-y-0 bg-brand"
            aria-hidden="true"
          />
          {STEPS.map((s, i) => {
            const on = i <= reached;
            return (
              <li key={s.title} data-step className="relative pb-16 pl-20 last:pb-0">
                <span
                  className={`absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border text-[14px] font-bold tnum transition-colors duration-500 ${
                    on ? 'border-brand bg-brand text-on-brand' : 'border-ink/20 bg-night-2 text-ink/50'
                  }`}
                >
                  0{i + 1}
                </span>
                <h3
                  className={`pt-2 text-[clamp(1.4rem,2.2vw,1.9rem)] font-semibold tracking-tight transition-colors duration-500 ${
                    on ? 'text-ink' : 'text-ink/45'
                  }`}
                >
                  {s.title}
                </h3>
                <p className="mt-3 max-w-lg text-[16px] leading-relaxed text-mist">{s.text}</p>
                <p className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-brand">
                  <span aria-hidden="true">↳</span> {s.out}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
