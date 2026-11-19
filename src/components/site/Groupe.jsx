import { COMPANY_INFO } from '../../data/companyData';
import { Reveal, Unveil } from './primitives';

export default function Groupe({ onOpenQuote }) {
  return (
    <section id="groupe" className="relative bg-night">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Composition photo */}
          <div className="relative lg:col-span-6">
            <Unveil
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
              alt="Ingénieurs Future Buildings en revue de plans"
              className="aspect-[4/5] w-[82%]"
            />
            <div className="absolute -bottom-10 right-0 w-[46%] border-[6px] border-night bg-night">
              <Unveil
                src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1000&q=80"
                alt="Ferraillage sur chantier"
                className="aspect-square w-full"
              />
            </div>
            <div className="absolute left-0 top-8 -translate-x-3 bg-brand px-5 py-4 text-night sm:-translate-x-5">
              <p className="display text-3xl">ISO 9001</p>
              <p className="text-[12px] font-semibold">Management de la qualité</p>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-brand" aria-hidden="true" />
                Le groupe
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display mt-5 text-[clamp(2.1rem,4vw,3.5rem)] text-white">
                Un seul partenaire, du premier calcul à la remise des clés.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-[17px] leading-relaxed text-mist">
                Future Buildings réunit sous un même toit un bureau d’études, une cellule d’expertise,
                une équipe de suivi et contrôle et des moyens de réalisation. Nos clients n’ont qu’un
                interlocuteur et une seule responsabilité engagée sur l’ensemble de l’ouvrage.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <Reveal delay={200}>
                <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-white">Notre vision</p>
                <p className="mt-3 text-[15px] leading-relaxed text-mist">
                  Devenir l’acteur de référence en Afrique des études, de l’expertise et de la réalisation
                  d’ouvrages techniques, aux standards internationaux.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-white">Notre mission</p>
                <p className="mt-3 text-[15px] leading-relaxed text-mist">
                  Livrer des ouvrages sûrs, dans les délais et le budget, avec une qualité d’exécution
                  vérifiée à chaque étape.
                </p>
              </Reveal>
            </div>

            <Reveal delay={320}>
              <ul className="mt-10 grid gap-3 border-t border-white/10 pt-8 text-[15px] text-white/85">
                {COMPANY_INFO.certifications.slice(0, 3).map((c) => (
                  <li key={c} className="flex gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-brand" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={onOpenQuote}
                className="mt-10 inline-flex items-center gap-3 text-[15px] font-semibold text-brand cursor-pointer"
              >
                <span className="link-line">Échanger avec nos ingénieurs</span>
                <span aria-hidden="true">→</span>
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
