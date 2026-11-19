import { COMPANY_INFO } from '../../data/companyData';
import { CATEGORIES } from '../../data/servicesData';
import { Logo } from './primitives';

const LINKS = [
  ['#groupe', 'Le groupe'],
  ['#expertises', 'Expertises'],
  ['#realisations', 'Réalisations'],
  ['#methode', 'Méthode'],
  ['#actualites', 'Actualités'],
  ['#carrieres', 'Carrières'],
  ['#contact', 'Contact'],
];

export default function Footer({ onOpenQuote, onOpenAdmin }) {
  const social = COMPANY_INFO.socialLinks;
  return (
    <footer className="border-t border-ink/8 bg-night">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-4">
            <Logo className="w-[220px]" />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-mist">
              Études techniques, expertise, suivi et contrôle, réalisation de génie civil et de lots techniques.
            </p>
            <button
              type="button"
              onClick={onOpenQuote}
              className="mt-8 inline-flex h-12 items-center gap-3 bg-brand px-6 text-[14px] font-semibold text-on-brand transition-colors hover:bg-ink hover:text-night cursor-pointer"
            >
              Demander un devis <span aria-hidden="true">→</span>
            </button>
          </div>

          <nav className="lg:col-span-2 lg:col-start-6" aria-label="Plan du site">
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-ink">Navigation</p>
            <ul className="mt-5 space-y-3 text-[15px] text-mist">
              {LINKS.map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-brand">{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-ink">Expertises</p>
            <ul className="mt-5 space-y-3 text-[15px] text-mist">
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <a href="#expertises" className="transition-colors hover:text-brand">{c.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-ink">Contact</p>
            <ul className="mt-5 space-y-3 text-[15px] text-mist">
              <li><a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="hover:text-brand tnum">{COMPANY_INFO.phone}</a></li>
              <li><a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-brand">{COMPANY_INFO.email}</a></li>
              <li>{COMPANY_INFO.address}</li>
            </ul>
            <div className="mt-6 flex gap-3">
              {[
                ['LinkedIn', social.linkedin, 'in'],
                ['Facebook', social.facebook, 'f'],
                ['Instagram', social.instagram, 'ig'],
              ].map(([name, href, short]) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-[13px] font-bold text-ink transition-colors hover:border-brand hover:bg-brand hover:text-on-brand"
                >
                  {short}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-ink/8 py-8 text-[13px] text-steel sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Future Buildings. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-ink">Retour en haut ↑</a>
            <button type="button" onClick={onOpenAdmin} className="hover:text-ink cursor-pointer">
              Espace interne
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
