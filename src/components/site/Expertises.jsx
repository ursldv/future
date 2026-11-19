import { useState } from 'react';
import { ArrowRight, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORIES, SERVICES } from '../../data/servicesData';
import { SectionIntro } from './primitives';

/* Phrase courte, en langage client, affichée sous le pôle sélectionné */
const NEEDS = {
  etudes: 'Concevoir et dimensionner votre ouvrage avant de construire.',
  expertise: 'Diagnostiquer un bâtiment existant : fissures, achat, conformité.',
  suivi: 'Un regard indépendant sur la qualité et les délais de votre chantier.',
  realisation: 'Votre ouvrage livré clés en main, par une seule entreprise.',
  'genie-civil': 'Terrassements, fondations, voiries et réseaux.',
  'lots-techniques': 'Électricité, climatisation et plomberie de votre bâtiment.',
  'courant-faible': 'Sécurité, vidéoprotection, réseaux et bâtiment connecté.',
};

/* Photos choisies pour correspondre à chaque métier (certaines images des données étaient hors sujet) */
const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;
const IMAGES = {
  etudes: img('1581092160562-40aa08e78837'),
  expertise: img('1503387762-592deb58ef4e'),
  suivi: img('1541888946425-d81bb19240f5'),
  realisation: img('1504307651254-35680f356dfd'),
  'genie-civil': img('1517089596392-fb9a9033e05b'),
  'lots-techniques': img('1621905251189-08b45d6a269e'),
  'courant-faible': img('1558494949-ef010cbdcc31'),
};

const POLES = CATEGORIES.map((c) => {
  const services = SERVICES.filter((s) => s.category === c.id);
  return {
    ...c,
    services,
    need: NEEDS[c.id] ?? c.description,
    image: IMAGES[c.id] ?? services[0]?.image,
  };
});

const shortTitle = (title) => title.split(/ & | : /)[0];

/* Contenu du pôle sélectionné : bénéfices + actions */
function PoleBody({ pole, onSelectService, onOpenQuote }) {
  const many = pole.services.length > 1;
  const main = pole.services[0];

  return (
    <div>
      {many ? (
        <>
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-steel">
            {pole.services.length} solutions disponibles
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {pole.services.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => onSelectService(s)}
                  className="border border-ink/15 px-3.5 py-2 text-[14px] text-ink/85 transition-colors hover:border-brand hover:bg-brand hover:text-on-brand cursor-pointer"
                >
                  {shortTitle(s.title)}
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <ul className="space-y-2.5">
          {main.features.slice(0, 3).map((f) => (
            <li key={f} className="flex gap-3 text-[15.5px] leading-snug text-ink/85">
              <Check size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
        <button
          type="button"
          onClick={onOpenQuote}
          className="group inline-flex h-12 items-center gap-2 bg-brand px-6 text-[14px] font-semibold text-on-brand transition-colors hover:bg-ink hover:text-night cursor-pointer"
        >
          Demander un devis
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </button>
        {!many && (
          <button
            type="button"
            onClick={() => onSelectService(main)}
            className="text-[14px] font-semibold text-ink cursor-pointer"
          >
            <span className="link-line">Voir le détail de l’offre</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default function Expertises({ onSelectService, onOpenQuote }) {
  const [active, setActive] = useState(0);
  const [preview, setPreview] = useState(null);
  // Sur mobile, tout refermer donne active = -1 : on retombe sur le premier pôle côté desktop
  const current = active < 0 ? 0 : active;
  const pole = POLES[current];
  const shown = preview ?? current; // le survol prévisualise l'image, le clic sélectionne
  const go = (d) => setActive((i) => ((i < 0 ? 0 : i) + d + POLES.length) % POLES.length);

  return (
    <section id="expertises" className="bg-night-2 py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionIntro
            className="lg:col-span-7"
            eyebrow="Nos expertises"
            title="Sept pôles intégrés pour maîtriser chaque lot."
          />
          <p className="text-[17px] leading-relaxed text-mist lg:col-span-4 lg:col-start-9">
            Sélectionnez une expertise pour voir ce que nous faisons concrètement et obtenir un devis.
          </p>
        </div>

        {/* Desktop : liste + panneau */}
        <div className="mt-16 hidden gap-12 lg:grid lg:grid-cols-12">
          <ul className="lg:col-span-5" aria-label="Pôles d'expertise" onMouseLeave={() => setPreview(null)}>
            {POLES.map((p, i) => {
              const on = i === current;
              return (
                <li key={p.id}>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setPreview(i)}
                    onFocus={() => setPreview(i)}
                    onBlur={() => setPreview(null)}
                    className={`group relative w-full border-b border-ink/10 py-5 pl-5 pr-4 text-left transition-colors duration-300 cursor-pointer ${
                      on ? 'bg-ink/[0.04]' : 'hover:bg-ink hover:text-night/[0.02]'
                    }`}
                  >
                    {/* Barre d'état actif */}
                    <span
                      className={`absolute left-0 top-0 h-full w-[3px] bg-brand transition-transform duration-500 origin-top ${
                        on ? 'scale-y-100' : 'scale-y-0'
                      }`}
                      aria-hidden="true"
                    />
                    <span className="flex items-center gap-5">
                      <span className={`text-[13px] font-semibold tnum ${on ? 'text-brand' : 'text-steel'}`}>
                        0{i + 1}
                      </span>
                      <span
                        className={`text-[clamp(1.35rem,2vw,1.75rem)] font-semibold tracking-tight transition-colors ${
                          on ? 'text-ink' : 'text-ink/55 group-hover:text-ink'
                        }`}
                      >
                        {p.label}
                      </span>
                      <ArrowRight
                        size={20}
                        aria-hidden="true"
                        className={`ml-auto shrink-0 transition-all duration-300 ${
                          on
                            ? 'translate-x-0 text-brand opacity-100'
                            : '-translate-x-2 text-ink/60 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                        }`}
                      />
                    </span>
                    {/* Phrase courte, visible sur le pôle actif */}
                    <span
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[var(--ease-out-soft)] ${
                        on ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <span className="overflow-hidden">
                        <span className="block pl-[2.6rem] pt-2 text-[15px] leading-snug text-mist">{p.need}</span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="lg:col-span-7">
            <div className="sticky top-28">
              <div data-theme="dark" className="relative aspect-[16/10] overflow-hidden bg-night-3">
                {POLES.map((p, i) => (
                  <img
                    key={p.id}
                    src={p.image}
                    alt={i === shown ? p.label : ''}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[900ms] ease-[var(--ease-out-soft)] ${
                      i === shown ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/10 to-transparent" />
                <div className="absolute inset-x-7 bottom-6 flex items-end justify-between gap-6">
                  <div>
                    <p className="text-[13px] font-semibold text-brand tnum">
                      {String(shown + 1).padStart(2, '0')} / {String(POLES.length).padStart(2, '0')}
                    </p>
                    <p className="mt-1 text-[28px] font-semibold tracking-tight text-ink">{POLES[shown].label}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => go(-1)}
                      aria-label="Expertise précédente"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/30 text-ink transition-colors hover:border-brand hover:bg-brand hover:text-on-brand cursor-pointer"
                    >
                      <ChevronLeft size={20} aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() => go(1)}
                      aria-label="Expertise suivante"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/30 text-ink transition-colors hover:border-brand hover:bg-brand hover:text-on-brand cursor-pointer"
                    >
                      <ChevronRight size={20} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
              <div key={pole.id} className="rise mt-8" aria-live="polite">
                <PoleBody pole={pole} onSelectService={onSelectService} onOpenQuote={onOpenQuote} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile : accordéon, premier pôle ouvert */}
        <ul className="mt-12 lg:hidden">
          {POLES.map((p, i) => {
            const on = i === active;
            return (
              <li key={p.id} className={`border-b border-ink/10 ${on ? 'bg-ink/[0.03]' : ''}`}>
                <button
                  type="button"
                  onClick={() => setActive(on ? -1 : i)}
                  aria-expanded={on}
                  className="flex w-full items-center gap-4 px-1 py-5 text-left cursor-pointer"
                >
                  <span className={`text-[13px] font-semibold tnum ${on ? 'text-brand' : 'text-steel'}`}>0{i + 1}</span>
                  <span className="flex-1">
                    <span className="block text-[20px] font-semibold tracking-tight text-ink">{p.label}</span>
                    <span className="mt-1 block text-[14px] leading-snug text-mist">{p.need}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[18px] transition-all duration-300 ${
                      on ? 'rotate-45 border-brand bg-brand text-on-brand' : 'border-ink/20 text-ink'
                    }`}
                  >
                    +
                  </span>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-500 ${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <img src={p.image} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover" />
                    <div className="px-1 pb-8 pt-6">
                      <PoleBody pole={p} onSelectService={onSelectService} onOpenQuote={onOpenQuote} />
                    </div>
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
