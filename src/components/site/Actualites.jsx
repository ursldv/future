import { NEWS_ARTICLES } from '../../data/newsData';
import { Reveal, SectionIntro } from './primitives';

export default function Actualites({ onSelectArticle }) {
  const articles = NEWS_ARTICLES.slice(0, 3);

  return (
    <section id="actualites" className="bg-night py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionIntro eyebrow="Actualités" title="Le regard de nos ingénieurs." />

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-8">
          {articles.map((a, i) => (
            <Reveal as="article" key={a.id} delay={i * 110}>
              <button type="button" onClick={() => onSelectArticle(a)} className="group block w-full text-left cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden bg-night-3">
                  <img
                    src={a.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-soft)] group-hover:scale-[1.06]"
                  />
                  <span className="absolute left-4 top-4 bg-night/85 px-3 py-1.5 text-[12px] font-semibold text-ink backdrop-blur">
                    {a.category}
                  </span>
                </div>
                <p className="mt-6 text-[13px] text-steel tnum">
                  {a.day} {a.month.toLowerCase()}. {a.year} · {a.readTime} de lecture
                </p>
                <h3 className="mt-2 text-[21px] font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-brand">
                  {a.title}
                </h3>
                <p className="mt-3 line-clamp-2 text-[15px] leading-relaxed text-mist">{a.excerpt}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
