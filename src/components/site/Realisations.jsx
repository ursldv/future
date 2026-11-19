import { useEffect, useRef } from 'react';
import { PROJECTS } from '../../data/projectsData';
import { SectionIntro } from './primitives';

function ProjectCard({ project, index, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="group relative block h-full w-full overflow-hidden bg-night-3 text-left cursor-pointer"
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-[var(--ease-out-soft)] group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
      <div className="absolute left-6 top-6 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/80">
        <span className="text-brand tnum">{String(index + 1).padStart(2, '0')}</span>
        {project.category}
      </div>
      <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8">
        <h3 className="text-[clamp(1.4rem,2.4vw,2.1rem)] font-semibold leading-tight tracking-tight text-white">
          {project.title}
        </h3>
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-white/70">
          <span>{project.specs}</span>
          <span className="tnum">{project.year}</span>
        </div>
        <div className="mt-6 grid max-h-0 grid-cols-3 gap-4 overflow-hidden border-t border-white/0 pt-0 opacity-0 transition-all duration-700 ease-[var(--ease-out-soft)] group-hover:max-h-40 group-hover:border-white/15 group-hover:pt-5 group-hover:opacity-100">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <p className="text-[17px] font-semibold text-brand">{m.value}</p>
              <p className="mt-0.5 text-[12px] text-white/60">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </button>
  );
}

export default function Realisations({ onSelectProject }) {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const barRef = useRef(null);

  // Défilement horizontal piloté par le scroll vertical (desktop)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)');
    let raf = 0;

    const sizeWrap = () => {
      const wrap = wrapRef.current;
      const track = trackRef.current;
      if (!wrap || !track) return;
      if (!mq.matches) {
        wrap.style.height = '';
        track.style.transform = '';
        return;
      }
      const distance = track.scrollWidth - window.innerWidth;
      wrap.style.height = `${window.innerHeight + Math.max(distance, 0)}px`;
      update();
    };

    const update = () => {
      raf = 0;
      const wrap = wrapRef.current;
      const track = trackRef.current;
      if (!wrap || !track || !mq.matches) return;
      const distance = track.scrollWidth - window.innerWidth;
      const top = wrap.getBoundingClientRect().top;
      const p = Math.min(1, Math.max(0, -top / Math.max(distance, 1)));
      track.style.transform = `translate3d(${-p * distance}px,0,0)`;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    sizeWrap();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', sizeWrap);
    mq.addEventListener?.('change', sizeWrap);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', sizeWrap);
      mq.removeEventListener?.('change', sizeWrap);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="realisations" className="bg-night">
      <div ref={wrapRef} className="relative">
        <div className="flex flex-col overflow-hidden py-24 lg:sticky lg:top-0 lg:h-screen lg:py-0 lg:pt-28 lg:pb-12">
          <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-end justify-between gap-6 px-5 sm:px-8">
            <SectionIntro eyebrow="Réalisations" title="Des ouvrages qui parlent pour nous." />
            <div className="hidden w-48 lg:block" aria-hidden="true">
              <div className="h-[2px] w-full bg-white/10">
                <div ref={barRef} className="h-full origin-left scale-x-0 bg-brand" />
              </div>
              <p className="mt-3 text-right text-[13px] text-steel">Faites défiler</p>
            </div>
          </div>

          <div className="mt-12 flex-1 lg:mt-10 lg:min-h-0">
            <div
              ref={trackRef}
              className="flex h-full snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-8 lg:snap-none lg:overflow-visible lg:pb-0 lg:pl-[max(2rem,calc((100vw-1400px)/2+2rem))] lg:pr-16 will-change-transform [scrollbar-width:none]"
            >
              {PROJECTS.map((p, i) => (
                <div
                  key={p.id}
                  className={`h-[460px] shrink-0 snap-start sm:h-[520px] lg:h-full ${
                    i % 3 === 0 ? 'w-[86vw] sm:w-[620px] lg:w-[46vw]' : 'w-[78vw] sm:w-[440px] lg:w-[32vw]'
                  }`}
                >
                  <ProjectCard project={p} index={i} onSelect={onSelectProject} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
