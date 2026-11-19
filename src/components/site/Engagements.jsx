import { COMPANY_INFO } from '../../data/companyData';
import { Reveal, SectionIntro } from './primitives';

const VALUES = [
  { title: 'Sécurité d’abord', text: 'Normes QHSE appliquées sur tous nos chantiers, sans exception ni dérogation.' },
  { title: 'Qualité vérifiée', text: 'Points d’arrêt, essais et contrôles documentés à chaque étape critique.' },
  { title: 'Délais tenus', text: 'Planning contractuel suivi chaque semaine et partagé avec le maître d’ouvrage.' },
  { title: 'Transparence', text: 'Un interlocuteur unique, des comptes rendus clairs, aucune surprise au décompte.' },
];

// Affiché tant que les références clients réelles ne sont pas renseignées
const CLIENT_TYPES = [
  'Institutions publiques',
  'Promoteurs immobiliers',
  'Groupes industriels',
  'Banques & assurances',
  'Hôtellerie',
  'Bailleurs internationaux',
  'Énergie & mines',
  'Logistique & ports',
];

export default function Engagements() {
  const partners = COMPANY_INFO.partners.map((p) => p.name);
  const items = partners.length ? partners : CLIENT_TYPES;
  const loop = [...items, ...items];

  return (
    <section className="relative overflow-hidden bg-night">
      {/* Bandeau photo */}
      <div data-theme="dark" className="relative isolate">
        <img
          src="https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&w=2400&q=80"
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-night/80" />
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
          <SectionIntro eyebrow="Nos engagements" title="Ce que nous promettons, nous le signons." />
          <div className="mt-14 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 90} className="bg-night/70 p-7 backdrop-blur-sm lg:p-8">
                <span className="block h-[3px] w-10 bg-brand" aria-hidden="true" />
                <h3 className="mt-6 text-[20px] font-semibold tracking-tight text-ink">{v.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-mist">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Références / types de clients */}
      <div className="border-y border-ink/8 py-10">
        <p className="mb-8 text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-steel">
          {partners.length ? 'Ils nous font confiance' : 'Nous travaillons pour'}
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <ul className="marquee flex w-max items-center gap-16 pr-16">
            {loop.map((name, i) => (
              <li key={`${name}-${i}`} className="flex items-center gap-16 whitespace-nowrap text-[24px] font-semibold tracking-tight text-ink/40">
                {name}
                <span className="h-1.5 w-1.5 bg-brand" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
