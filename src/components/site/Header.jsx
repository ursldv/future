import { useEffect, useState } from 'react';
import { Logo, ThemeToggle, useTheme } from './primitives';
import { COMPANY_INFO } from '../../data/companyData';

const NAV = [
  { href: '#groupe', label: 'Le groupe' },
  { href: '#expertises', label: 'Expertises' },
  { href: '#realisations', label: 'Réalisations' },
  { href: '#methode', label: 'Méthode' },
  { href: '#actualites', label: 'Actualités' },
  { href: '#carrieres', label: 'Carrières' },
];

export default function Header({ onOpenQuote }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, toggleTheme] = useTheme();
  // Au-dessus du hero vidéo, l'en-tête reste en clair sur fond sombre quel que soit le thème
  const overHero = !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
    <header
      data-theme={overHero ? 'dark' : undefined}
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-500 border-b ${
        open
          ? 'bg-night border-ink/8'
          : scrolled
            ? 'bg-night/85 backdrop-blur-xl border-ink/8'
            : 'bg-transparent border-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between gap-8 px-5 sm:px-8">
        <a href="#top" aria-label="Future Buildings — accueil" className="shrink-0">
          <Logo className="w-[150px] sm:w-[178px]" />
        </a>

        <nav className="hidden xl:block" aria-label="Navigation principale">
          <ul className="flex items-center gap-8 text-[14.5px] font-medium text-ink/80">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="link-line py-1 transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
            className="hidden 2xl:block text-[14px] font-medium text-ink/70 hover:text-ink tnum"
          >
            {COMPANY_INFO.phone}
          </a>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button
            type="button"
            onClick={onOpenQuote}
            className="hidden sm:inline-flex h-11 items-center whitespace-nowrap bg-brand px-5 text-[14px] font-semibold text-on-brand transition-colors duration-300 hover:bg-ink hover:text-night cursor-pointer"
          >
            Demander un devis
          </button>
          <button
            type="button"
            className="xl:hidden flex h-11 w-11 flex-col items-center justify-center gap-[7px] cursor-pointer"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block h-[2px] w-6 bg-ink transition-transform duration-300 ${open ? 'translate-y-[4.5px] rotate-45' : ''}`} />
            <span className={`block h-[2px] w-6 bg-ink transition-transform duration-300 ${open ? '-translate-y-[4.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

    </header>

      <div
        className={`xl:hidden fixed inset-x-0 top-20 bottom-0 z-40 bg-night overflow-y-auto transition-[opacity,visibility] duration-400 ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav className="flex h-full flex-col justify-between px-5 pb-8 pt-4 sm:px-8" aria-label="Navigation mobile">
          <ul>
            {[...NAV, { href: '#contact', label: 'Contact' }].map((item, i) => (
              <li key={item.href} className="border-b border-ink/8">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-5 text-[26px] font-semibold tracking-tight text-ink"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {item.label}
                  <span className="text-brand text-xl" aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onOpenQuote();
            }}
            className="h-14 w-full bg-brand text-[15px] font-semibold text-on-brand cursor-pointer"
          >
            Demander un devis
          </button>
        </nav>
      </div>

    </>
  );
}
