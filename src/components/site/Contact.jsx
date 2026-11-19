import { useState } from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import { CATEGORIES } from '../../data/servicesData';
import { Reveal } from './primitives';

const EMPTY = { name: '', email: '', phone: '', service: CATEGORIES[0].label, message: '' };

const inputCls =
  'mt-2 block w-full border border-white/12 bg-white/[0.04] px-4 py-3.5 text-[15px] text-white placeholder:text-white/30 transition-colors focus:border-brand focus:bg-white/[0.06] focus:outline-none';

function Field({ label, children, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-[13px] font-semibold text-white/80">{label}</span>
      {children}
    </label>
  );
}

export default function Contact({ onQuickBooking }) {
  const [form, setForm] = useState(EMPTY);
  const [reference, setReference] = useState(null);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setReference(onQuickBooking(form));
    setForm(EMPTY);
  };

  const infos = [
    { label: 'Téléphone', value: COMPANY_INFO.phone, href: `tel:${COMPANY_INFO.phone.replace(/\s/g, '')}` },
    { label: 'Devis & appels d’offres', value: COMPANY_INFO.quoteEmail, href: `mailto:${COMPANY_INFO.quoteEmail}` },
    { label: 'Contact général', value: COMPANY_INFO.email, href: `mailto:${COMPANY_INFO.email}` },
    { label: 'Siège social', value: COMPANY_INFO.address },
    { label: 'Horaires', value: COMPANY_INFO.openingHours },
  ];

  return (
    <section id="contact" className="relative isolate overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=80"
        alt=""
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-night via-night/95 to-night/80" />

      <div className="mx-auto grid max-w-[1400px] gap-16 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:py-36">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              Contact
            </p>
            <h2 className="display mt-5 text-[clamp(2.4rem,5vw,4.4rem)] text-white">
              Parlons de votre <span className="text-brand">projet.</span>
            </h2>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-mist">
              Un ingénieur du pôle concerné vous rappelle sous 24 heures ouvrées pour cadrer votre besoin.
            </p>
          </Reveal>

          <dl className="mt-12 space-y-6">
            {infos.map((info, i) => (
              <Reveal key={info.label} delay={i * 60}>
                <dt className="text-[13px] font-semibold uppercase tracking-[0.12em] text-steel">{info.label}</dt>
                <dd className="mt-1 text-[17px] font-medium text-white">
                  {info.href ? (
                    <a href={info.href} className="link-line hover:text-brand transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    info.value
                  )}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>

        <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
          <div className="border border-white/10 bg-night-2/80 p-6 backdrop-blur-md sm:p-10">
            {reference ? (
              <div role="status" className="py-10 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-2xl text-night">✓</span>
                <p className="mt-6 text-[22px] font-semibold text-white">Demande bien reçue</p>
                <p className="mt-2 text-[15px] text-mist">
                  Votre référence : <span className="font-semibold text-white tnum">{reference}</span>
                </p>
                <button
                  type="button"
                  onClick={() => setReference(null)}
                  className="mt-8 text-[14px] font-semibold text-brand cursor-pointer"
                >
                  <span className="link-line">Envoyer une autre demande</span>
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
                <Field label="Nom complet">
                  <input required value={form.name} onChange={set('name')} className={inputCls} autoComplete="name" />
                </Field>
                <Field label="Téléphone">
                  <input required type="tel" value={form.phone} onChange={set('phone')} className={inputCls} placeholder="+229 / +225 / +221…" autoComplete="tel" />
                </Field>
                <Field label="E-mail professionnel" className="sm:col-span-2">
                  <input required type="email" value={form.email} onChange={set('email')} className={inputCls} autoComplete="email" />
                </Field>
                <Field label="Expertise recherchée" className="sm:col-span-2">
                  <select value={form.service} onChange={set('service')} className={`${inputCls} cursor-pointer`}>
                    {CATEGORIES.map((c) => (
                      <option key={c.id} value={c.label} className="bg-night-2">
                        {c.label}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Votre projet" className="sm:col-span-2">
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={set('message')}
                    className={`${inputCls} resize-none`}
                    placeholder="Nature de l’ouvrage, localisation, échéance…"
                  />
                </Field>
                <button
                  type="submit"
                  className="group mt-2 flex h-14 items-center justify-center gap-3 bg-brand text-[15px] font-semibold text-night transition-colors duration-300 hover:bg-white sm:col-span-2 cursor-pointer"
                >
                  Envoyer ma demande
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
