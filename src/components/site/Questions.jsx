import { useState } from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import { SectionIntro } from './primitives';

const FAQ = [
  {
    q: 'Sur quels types d’ouvrages intervenez-vous ?',
    a: "Bâtiments résidentiels et tertiaires, équipements publics, sites industriels, voiries et réseaux. Nous couvrons toute la chaîne : études, expertise, suivi et contrôle, réalisation du gros œuvre, du génie civil et des lots techniques.",
  },
  {
    q: 'Pouvez-vous intervenir sur un seul lot ?',
    a: "Oui. Beaucoup de maîtres d’ouvrage nous confient uniquement les études, une mission de contrôle ou un lot technique (CVC, électricité, courant faible). Nous nous intégrons alors à l’organisation de chantier existante.",
  },
  {
    q: 'Intervenez-vous dans d’autres pays ?',
    a: "Oui. Nos équipes d’ingénieurs et nos moyens matériels se déploient là où se trouvent les projets, pour des maîtres d’ouvrage publics, industriels, tertiaires et résidentiels.",
  },
  {
    q: 'Sous quel délai recevrai-je une proposition ?',
    a: `Envoyez vos plans et votre cahier des charges à ${COMPANY_INFO.quoteEmail} ou via le formulaire. Notre bureau d’études revient vers vous sous 24 à 48 heures avec une première analyse, puis une proposition technique et financière détaillée.`,
  },
];

export default function Questions() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-night py-24 lg:py-32" aria-label="Questions fréquentes">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <SectionIntro
          className="lg:col-span-4"
          eyebrow="Questions fréquentes"
          title="Vous vous demandez peut-être…"
        />
        <ul className="lg:col-span-7 lg:col-start-6">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className="border-b border-white/10 first:border-t">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left cursor-pointer"
                >
                  <span className={`text-[18px] font-semibold tracking-tight transition-colors ${isOpen ? 'text-brand' : 'text-white'}`}>
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`relative h-4 w-4 shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`}
                  >
                    <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 bg-brand" />
                    <span className="absolute left-1/2 top-0 h-4 w-[2px] -translate-x-1/2 bg-brand" />
                  </span>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-500 ease-[var(--ease-out-soft)] ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-7 text-[16px] leading-relaxed text-mist">{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
