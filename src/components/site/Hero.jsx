import { useEffect, useRef, useState } from 'react';
import { ButtonPrimary, Counter } from './primitives';

const STATS = [
  { value: 15, suffix: '+', label: 'années d’expérience' },
  { value: 350, suffix: '+', label: 'ouvrages livrés' },
  { value: 45, suffix: '+', label: 'ingénieurs & techniciens' },
  { value: 150000, suffix: ' m²', label: 'construits' },
];

// Deux lignes sur grand écran ; sur mobile chaque ligne se replie naturellement
const LINES = [
  { text: 'Les ouvrages de demain' },
  { text: 'se construisent', accent: 'aujourd’hui.' },
];

export default function Hero({ onOpenQuote }) {
  const sectionRef = useRef(null);
  const mediaRef = useRef(null);
  const contentRef = useRef(null);
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [ready, setReady] = useState(false);

  // Pas de lecture automatique si l'utilisateur préfère réduire les animations
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      v.pause();
      setPlaying(false);
    }
  }, []);

  // Profondeur : léger décalage à la souris + zoom arrière au scroll
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let mx = 0;
    let my = 0;
    let raf = 0;

    const apply = () => {
      raf = 0;
      const sec = sectionRef.current;
      if (!sec) return;
      const h = sec.offsetHeight;
      const p = Math.min(1, Math.max(0, window.scrollY / h));
      if (mediaRef.current) {
        mediaRef.current.style.transform = `translate3d(${mx * -14}px, ${my * -10 + p * h * 0.25}px, 0) scale(${1.08 - p * 0.04})`;
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translate3d(0, ${p * -60}px, 0)`;
        contentRef.current.style.opacity = String(1 - p * 1.4);
      }
    };
    const queue = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onMouse = (e) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
      queue();
    };

    apply();
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('mousemove', onMouse, { passive: true });
    return () => {
      window.removeEventListener('scroll', queue);
      window.removeEventListener('mousemove', onMouse);
      cancelAnimationFrame(raf);
    };
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section ref={sectionRef} id="top" data-theme="dark" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-night">
      {/* Vidéo */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div ref={mediaRef} className="absolute inset-0 scale-[1.08] will-change-transform">
          <img src="/media/hero-poster.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
          <video
            ref={videoRef}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${ready ? 'opacity-100' : 'opacity-0'}`}
            src="/media/hero.mp4"
            poster="/media/hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={() => setReady(true)}
          />
        </div>
        <div className="absolute inset-0 bg-night/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-night/90 via-night/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-night via-night/60 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-night/70 to-transparent" />
        <div className="grain absolute inset-0" />
      </div>

      <div ref={contentRef} className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-end px-5 pb-8 pt-32 sm:px-8 lg:pb-10">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="rise eyebrow flex items-center gap-3" style={{ animationDelay: '200ms' }}>
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              Ingénierie · Construction · Lots techniques
            </p>
            <h1 className="mt-6 text-[clamp(2.6rem,7.5vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink lg:text-[clamp(3.2rem,4.4vw,4.4rem)] lg:whitespace-nowrap">
              {LINES.map((l, i) => (
                // Mobile : le texte s'écoule librement (pas de coupure forcée) ; grand écran : 2 lignes animées
                <span key={l.text} className="max-lg:inline lg:block lg:overflow-hidden lg:pb-[0.08em]">
                  <span className="max-lg:inline lg:block hero-line" style={{ animationDelay: `${350 + i * 140}ms` }}>
                    {l.text}
                    {l.accent && <span className="text-brand"> {l.accent}</span>}
                  </span>
                  {i < LINES.length - 1 && <span className="lg:hidden"> </span>}
                </span>
              ))}
            </h1>
          </div>

          <div className="rise lg:col-span-4 lg:pb-3" style={{ animationDelay: '1000ms' }}>
            <p className="max-w-md text-[17px] leading-relaxed text-ink/80">
              Bureau d’études, expertise, suivi de chantier et réalisation : une seule équipe
              responsable de votre ouvrage, de la première note de calcul à la remise des clés.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <ButtonPrimary onClick={onOpenQuote}>Démarrer un projet</ButtonPrimary>
              <a href="#realisations" className="text-[15px] font-semibold text-ink">
                <span className="link-line">Voir nos réalisations</span>
              </a>
            </div>
          </div>
        </div>

        {/* Chiffres clés */}
        <div className="rise mt-14 border-t border-ink/15 lg:mt-20" style={{ animationDelay: '1200ms' }}>
          <div className="grid grid-cols-2 lg:grid-cols-[repeat(4,1fr)_auto]">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`py-5 pr-4 lg:py-6 ${i % 2 === 1 ? 'border-l border-ink/15 pl-5' : ''} ${
                  i > 0 ? 'lg:border-l lg:border-ink/15 lg:pl-7' : ''
                } ${i > 1 ? 'border-t border-ink/15 lg:border-t-0' : ''}`}
              >
                <p className="text-[clamp(1.7rem,2.8vw,2.5rem)] font-semibold leading-none tracking-tight text-ink">
                  <Counter to={s.value} start duration={2200} />
                  <span className="text-brand">{s.suffix}</span>
                </p>
                <p className="mt-2 text-[13px] text-ink/60">{s.label}</p>
              </div>
            ))}
            <div className="hidden items-center gap-6 border-l border-ink/15 pl-7 lg:flex">
              <button
                type="button"
                onClick={toggle}
                aria-label={playing ? 'Mettre la vidéo en pause' : 'Lire la vidéo'}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/25 text-ink transition-colors hover:border-brand hover:bg-brand hover:text-on-brand cursor-pointer"
              >
                {playing ? (
                  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><rect x="2" y="1" width="3" height="10" fill="currentColor" /><rect x="7" y="1" width="3" height="10" fill="currentColor" /></svg>
                ) : (
                  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 1l8 5-8 5z" fill="currentColor" /></svg>
                )}
              </button>
              <a href="#groupe" aria-label="Découvrir la suite" className="flex flex-col items-center gap-2 text-ink/60 hover:text-ink">
                <span className="relative block h-12 w-px overflow-hidden bg-ink/20">
                  <span className="scroll-cue absolute inset-x-0 top-0 h-1/2 bg-brand" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
