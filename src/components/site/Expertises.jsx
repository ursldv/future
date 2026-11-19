import { useState } from 'react';
import { CATEGORIES, SERVICES } from '../../data/servicesData';
import { SectionIntro } from './primitives';

const POLES = CATEGORIES.map((c) => {
  const services = SERVICES.filter((s) => s.category === c.id);
  return { ...c, services, image: services[0]?.image?.replace('w=1200', 'w=1600') };
});

function PoleDetail({ pole, onSelectService }) {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-[16px] leading-relaxed text-white/80">{pole.description}</p>
      <ul className="divide-y divide-white/10 border-y border-white/10">
        {pole.services.map((s) => (
          <li key={s.id}>
            <button
              type="button"
              onClick={() => onSelectService(s)}
              className="group flex w-full items-center justify-between gap-6 py-3.5 text-left cursor-pointer"
            >
              <span className="text-[15px] font-medium text-white transition-colors group-hover:text-brand">
                {s.title}
              </span>
              <span aria-hidden="true" className="text-brand transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Expertises({ onSelectService }) {
  const [active, setActive] = useState(0);
  const pole = POLES[active];

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
            Études, contrôle et réalisation travaillent sur les mêmes plans et le même planning.
            Résultat : moins d’interfaces, moins d’imprévus, des délais tenus.
          </p>
        </div>

        {/* Desktop : liste + visuel */}
        <div className="mt-16 hidden gap-12 lg:grid lg:grid-cols-12">
          <ul className="lg:col-span-5" role="tablist" aria-label="Pôles d'expertise">
            {POLES.map((p, i) => {
              const on = i === active;
              return (
                <li key={p.id}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="group relative flex w-full items-center gap-6 border-b border-white/10 py-6 text-left cursor-pointer"
                  >
                    <span
                      className={`absolute bottom-[-1px] left-0 h-px bg-brand transition-[width] duration-700 ease-[var(--ease-out-soft)] ${
                        on ? 'w-full' : 'w-0'
                      }`}
                    />
                    <span className={`text-[13px] font-semibold tnum transition-colors ${on ? 'text-brand' : 'text-steel'}`}>
                      0{i + 1}
                    </span>
                    <span
                      className={`text-[clamp(1.5rem,2.2vw,2rem)] font-semibold tracking-tight transition-colors duration-300 ${
                        on ? 'text-white' : 'text-white/40 group-hover:text-white/70'
                      }`}
                    >
                      {p.label}
                    </span>
                    {p.services.length > 1 && (
                      <span className="ml-auto text-[13px] text-steel tnum">{p.services.length} solutions</span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="relative lg:col-span-7">
            <div className="sticky top-28">
              <div className="relative aspect-[16/11] overflow-hidden bg-night-3">
                {POLES.map((p, i) => (
                  <img
                    key={p.id}
                    src={p.image}
                    alt={p.label}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[900ms] ease-[var(--ease-out-soft)] ${
                      i === active ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/20 to-transparent" />
                <p className="absolute bottom-6 left-7 right-7 text-[26px] font-semibold tracking-tight text-white">
                  {pole.label}
                </p>
              </div>
              <div key={pole.id} className="rise mt-8">
                <PoleDetail pole={pole} onSelectService={onSelectService} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile : accordéon illustré */}
        <ul className="mt-12 lg:hidden">
          {POLES.map((p, i) => {
            const on = i === active;
            return (
              <li key={p.id} className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setActive(on ? -1 : i)}
                  aria-expanded={on}
                  className="flex w-full items-center gap-4 py-5 text-left cursor-pointer"
                >
                  <span className={`text-[13px] font-semibold tnum ${on ? 'text-brand' : 'text-steel'}`}>0{i + 1}</span>
                  <span className="text-[20px] font-semibold tracking-tight text-white">{p.label}</span>
                  <span className={`ml-auto text-brand transition-transform duration-300 ${on ? 'rotate-45' : ''}`} aria-hidden="true">
                    +
                  </span>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-500 ${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <img src={p.image} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover" />
                    <div className="pb-8 pt-6">
                      <PoleDetail pole={p} onSelectService={onSelectService} />
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
