import { useEffect, useRef, useState } from 'react';
import logoOnDark from '../../assets/logo-on-dark.png';
import logoOnLight from '../../assets/logo-on-light.png';

export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView, threshold]);

  return [ref, inView];
}

export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, inView] = useInView(0.12);
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* Image qui se dévoile en s'ouvrant au scroll */
export function Unveil({ src, alt = '', className = '', imgClassName = '' }) {
  const [ref, inView] = useInView(0.2);
  return (
    <div ref={ref} className={`unveil relative overflow-hidden ${inView ? 'is-in' : ''} ${className}`}>
      <img src={src} alt={alt} loading="lazy" className={`h-full w-full object-cover ${imgClassName}`} />
    </div>
  );
}

export function Logo({ variant = 'dark', className = '' }) {
  return (
    <img
      src={variant === 'dark' ? logoOnDark : logoOnLight}
      alt="Future Buildings — We build the future buildings"
      className={`block h-auto ${className}`}
      width="2172"
      height="399"
    />
  );
}

export function SectionIntro({ eyebrow, title, text, align = 'left', className = '' }) {
  const center = align === 'center';
  return (
    <div className={`${center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      <Reveal>
        <p className="eyebrow flex items-center gap-3 data-[center=true]:justify-center" data-center={center}>
          <span className="h-px w-8 bg-brand" aria-hidden="true" />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="display mt-5 text-[clamp(2.1rem,4.6vw,3.9rem)] text-white">{title}</h2>
      </Reveal>
      {text && (
        <Reveal delay={160}>
          <p className={`mt-5 text-[17px] leading-relaxed text-mist ${center ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
            {text}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function Counter({ to, start, duration = 1800 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setValue(to);
      return;
    }
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      setValue(Math.round(to * (1 - Math.pow(1 - p, 4))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to, duration]);

  // Espace insécable classique : la police n'a pas le glyphe U+202F utilisé par toLocaleString('fr-FR')
  return <span className="tnum">{String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</span>;
}

export function ButtonPrimary({ children, className = '', ...rest }) {
  return (
    <button
      type="button"
      className={`group inline-flex h-13 items-center gap-3 bg-brand pl-6 pr-5 py-4 text-[15px] font-semibold text-night transition-colors duration-300 hover:bg-white cursor-pointer ${className}`}
      {...rest}
    >
      {children}
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </button>
  );
}
