import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../../data/projectsData';
import { SectionIntro } from './primitives';

function ProjectCard({ project, index, onSelect }) {
  return (
    // Carte toujours en thème sombre : le texte est posé sur la photo
    <button
      type="button"
      data-theme="dark"
      onClick={(e) => {
        // Un glisser-déposer ne doit pas ouvrir le projet
        if (e.currentTarget.closest('[data-dragged="true"]')) return;
        onSelect(project);
      }}
      className="group relative block h-full w-full overflow-hidden bg-night-3 text-left cursor-pointer"
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        draggable="false"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-[var(--ease-out-soft)] group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-night/20" />
      <div className="absolute left-6 right-6 top-6 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-ink/85">
        <span className="text-brand tnum">{String(index + 1).padStart(2, '0')}</span>
        <span className="truncate">{project.category}</span>
      </div>
      <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8">
        <h3 className="text-[clamp(1.4rem,2.2vw,2rem)] font-semibold leading-tight tracking-tight text-ink">
          {project.title}
        </h3>
        <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1 text-[14px] text-ink/70">
          <span>{project.specs}</span>
          <span className="tnum">{project.year}</span>
        </div>
        <div className="mt-5 grid max-h-0 grid-cols-3 gap-4 overflow-hidden border-t border-ink/0 pt-0 opacity-0 transition-all duration-700 ease-[var(--ease-out-soft)] group-hover:max-h-40 group-hover:border-ink/15 group-hover:pt-5 group-hover:opacity-100">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <p className="text-[16px] font-semibold text-brand">{m.value}</p>
              <p className="mt-0.5 text-[12px] text-ink/60">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </button>
  );
}

export default function Realisations({ onSelectProject }) {
  const trackRef = useRef(null);
  const barRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Progression + état des flèches
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      const p = max > 0 ? track.scrollLeft / max : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${Math.max(0.08, p)})`;
      setAtStart(track.scrollLeft < 8);
      setAtEnd(track.scrollLeft > max - 8);
    };
    update();
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      track.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  // Glisser à la souris (le tactile et le pavé tactile défilent nativement)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let down = false;
    let startX = 0;
    let startLeft = 0;
    let moved = false;

    const onDown = (e) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      down = true;
      moved = false;
      startX = e.clientX;
      startLeft = track.scrollLeft;
      track.dataset.dragged = 'false';
    };
    const onMove = (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (!moved && Math.abs(dx) > 6) {
        moved = true;
        track.dataset.dragged = 'true';
        track.style.scrollSnapType = 'none';
        track.style.cursor = 'grabbing';
      }
      if (moved) track.scrollLeft = startLeft - dx;
    };
    const onUp = () => {
      if (!down) return;
      down = false;
      track.style.scrollSnapType = '';
      track.style.cursor = '';
      // Laisse passer le clic qui suit le relâchement, puis réarme
      setTimeout(() => (track.dataset.dragged = 'false'), 0);
    };

    track.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      track.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, []);

  const scrollByCard = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('[data-card]');
    const step = card ? card.getBoundingClientRect().width + 20 : track.clientWidth * 0.8;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  const arrowCls = (disabled) =>
    `flex h-12 w-12 items-center justify-center rounded-full border transition-colors cursor-pointer ${
      disabled
        ? 'border-ink/10 text-ink/25 cursor-default'
        : 'border-ink/30 text-ink hover:border-brand hover:bg-brand hover:text-on-brand'
    }`;

  return (
    <section id="realisations" className="overflow-hidden bg-night py-24 lg:py-32">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-end justify-between gap-8 px-5 sm:px-8">
        <SectionIntro eyebrow="Réalisations" title="Des ouvrages qui parlent pour nous." />

        <div className="flex items-center gap-6">
          <div className="hidden w-40 sm:block" aria-hidden="true">
            <div className="h-[2px] w-full bg-ink/10">
              <div ref={barRef} className="h-full origin-left scale-x-[0.08] bg-brand transition-transform duration-300" />
            </div>
            <p className="mt-3 text-[13px] text-steel">Glissez ou utilisez les flèches</p>
          </div>
          <div className="flex gap-3">
            <button type="button" onClick={() => scrollByCard(-1)} disabled={atStart} aria-label="Projet précédent" className={arrowCls(atStart)}>
              <ChevronLeft size={22} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => scrollByCard(1)} disabled={atEnd} aria-label="Projet suivant" className={arrowCls(atEnd)}>
              <ChevronRight size={22} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        tabIndex={0}
        aria-label="Liste des réalisations, défilement horizontal"
        className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:cursor-grab
                   px-5 sm:px-8 lg:px-[max(2rem,calc((100vw-1400px)/2+2rem))] scroll-px-5 sm:scroll-px-8 lg:scroll-px-[max(2rem,calc((100vw-1400px)/2+2rem))]"
      >
        {PROJECTS.map((p, i) => (
          <div
            key={p.id}
            data-card
            className={`h-[440px] shrink-0 snap-start select-none sm:h-[520px] lg:h-[580px] ${
              i % 3 === 0 ? 'w-[86vw] sm:w-[620px] lg:w-[720px]' : 'w-[78vw] sm:w-[420px] lg:w-[480px]'
            }`}
          >
            <ProjectCard project={p} index={i} onSelect={onSelectProject} />
          </div>
        ))}
        {/* Marge de fin pour que la dernière carte s'aligne */}
        <div className="w-px shrink-0" aria-hidden="true" />
      </div>
    </section>
  );
}
