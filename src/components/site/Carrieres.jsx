import { CAREER_JOBS } from '../../data/jobsData';
import { Reveal } from './primitives';

export default function Carrieres({ onSelectJob }) {
  return (
    <section id="carrieres" className="relative isolate overflow-hidden bg-night-2">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[360px] lg:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80"
            alt="Équipe Future Buildings sur chantier"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-2 via-night-2/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-night-2" />
        </div>

        <div className="px-5 py-20 sm:px-8 lg:px-16 lg:py-32 xl:px-24">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              Carrières
            </p>
            <h2 className="display mt-5 text-[clamp(2.1rem,4vw,3.4rem)] text-ink">
              Construisez votre carrière avec nous.
            </h2>
            <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-mist">
              Ingénieurs, techniciens, conducteurs d’engins : nous recrutons des profils de terrain
              qui aiment voir un ouvrage sortir de terre.
            </p>
          </Reveal>

          <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {CAREER_JOBS.map((job, i) => (
              <Reveal as="li" key={job.id} delay={i * 70}>
                <button
                  type="button"
                  onClick={() => onSelectJob(job)}
                  className="group flex w-full items-center justify-between gap-6 py-5 text-left cursor-pointer"
                >
                  <span>
                    <span className="block text-[17px] font-semibold text-ink transition-colors group-hover:text-brand">
                      {job.title}
                    </span>
                    <span className="mt-1 block text-[14px] text-mist">
                      {job.department} · {job.type}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-on-brand"
                  >
                    →
                  </span>
                </button>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
