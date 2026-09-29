'use client';

import { AMBER, GOLD, SURFACE, CREAM, MUTED, AfricanPattern, SectionHead, useLang } from './shared';
import { services as defaultServices } from './data';

const copy = {
  en: {
    label: 'What we do',
    title: 'Our services',
    subtitle: 'Comprehensive social media solutions tailored to your business needs.',
  },
  sw: {
    label: 'Tunachofanya',
    title: 'Huduma zetu',
    subtitle: 'Suluhisho kamili za mitandao ya kijamii zilizofanywa kwa mahitaji ya biashara yako.',
  },
};

export default function ServicesSection({ services = defaultServices }) {
  const { lang, tr } = useLang();
  const c = copy[lang];

  return (
    <section
      id="services"
      aria-labelledby="social-services-title"
      className="relative overflow-hidden pb-24 scroll-mt-24"
      style={{ background: SURFACE }}
    >
      <AfricanPattern id="socialSvcPattern" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead id="social-services-title" label={c.label} title={c.title} subtitle={c.subtitle} />

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {services.map((service, i) => {
            const accent = i % 2 === 0 ? AMBER : GOLD;
            return (
              <li key={service.title.en} className="pt-5" style={{ borderTop: `2px solid ${accent}` }}>
                <span aria-hidden="true" className="font-display font-bold text-sm tabular-nums" style={{ color: accent }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  className="font-display font-extrabold mt-3"
                  style={{ fontSize: '1.6rem', lineHeight: 1.08, color: CREAM, letterSpacing: '-0.02em' }}
                >
                  {tr(service.title)}
                </h3>
                <p className="mt-3 leading-relaxed" style={{ color: MUTED, fontSize: '1rem' }}>
                  {tr(service.description)}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}