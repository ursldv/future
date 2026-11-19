import { useEffect, useState } from 'react';
import { Reveal } from './primitives';

const QUOTES = [
  {
    quote:
      "L’installation électrique complète a été livrée dans les délais, sans aucune réserve à la réception. Les équipes savaient exactement ce qu’elles faisaient.",
    name: 'Mohammed K.',
    role: 'Promoteur immobilier',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    quote:
      "Vidéoprotection, contrôle d’accès, sécurité incendie : un seul interlocuteur pour nos trois bâtiments, un seul dossier, un seul planning. C’est rare.",
    name: 'Fatima B.',
    role: 'Directrice d’hôtel',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80',
  },
  {
    quote:
      "Quand un détail ne fonctionnait pas, ils arrivaient avec la solution, pas avec un avenant. Un suivi de chantier rigoureux du début à la fin.",
    name: 'Youcef D.',
    role: 'Architecte',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
  },
];

export default function Temoignages() {
  const [i, setI] = useState(0);
  const q = QUOTES[i];

  useEffect(() => {
    const id = setTimeout(() => setI((v) => (v + 1) % QUOTES.length), 9000);
    return () => clearTimeout(id);
  }, [i]);

  return (
    <section className="bg-night-2 py-24 lg:py-36" aria-label="Témoignages clients">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden lg:col-span-5 lg:aspect-[4/5]">
          {QUOTES.map((item, n) => (
            <img
              key={item.name}
              src={item.image}
              alt=""
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                n === i ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-night-2/60 to-transparent" />
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              Ils témoignent
            </p>
          </Reveal>
          <figure key={i} className="rise mt-8">
            <svg viewBox="0 0 48 36" className="h-9 w-12 text-brand" aria-hidden="true">
              <path
                fill="currentColor"
                d="M0 36V22C0 10 6 2.5 18 0l2 5c-6 2-9.5 6-10 12h9v19H0zm28 0V22c0-12 6-19.5 18-22l2 5c-6 2-9.5 6-10 12h9v19H28z"
              />
            </svg>
            <blockquote className="mt-7 text-[clamp(1.5rem,2.8vw,2.4rem)] font-medium leading-[1.3] tracking-tight text-ink">
              {q.quote}
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-night-4 text-[15px] font-bold text-brand">
                {q.name.split(' ').map((p) => p[0]).join('')}
              </span>
              <span>
                <span className="block text-[16px] font-semibold text-ink">{q.name}</span>
                <span className="block text-[14px] text-mist">{q.role}</span>
              </span>
            </figcaption>
          </figure>

          <div className="mt-12 flex items-center gap-3">
            {QUOTES.map((item, n) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setI(n)}
                aria-label={`Témoignage ${n + 1}`}
                aria-current={n === i}
                className="group py-3 cursor-pointer"
              >
                <span
                  className={`block h-[3px] transition-all duration-500 ${
                    n === i ? 'w-14 bg-brand' : 'w-7 bg-ink/20 group-hover:bg-ink hover:text-night/50'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
