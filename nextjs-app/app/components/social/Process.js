'use client';

import { AMBER, GOLD, DARK, CREAM, MUTED, RULE, AfricanPattern, SectionHead, useLang } from './shared';
import { process as defaultProcess } from './data';

const copy = {
  en: {
    label: 'How we work',
    title: 'Our process',
    subtitle: 'A proven 5-step approach to social media success.',
  },
  sw: {
    label: 'Jinsi tunavyofanya kazi',
    title: 'Mchakato wetu',
    subtitle: 'Njia iliyothibitishwa ya hatua 5 za mafanikio ya mitandao ya kijamii.',
  },
};

export default function ProcessSection({ process = defaultProcess }) {
  const { lang, tr } = useLang();
  const c = copy[lang];

  return (
    <section
      id="process"
      aria-labelledby="social-process-title"
      className="relative overflow-hidden pb-24 scroll-mt-24"
      style={{ background: DARK }}
    >
      <AfricanPattern id="socialProcessPattern" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead id="social-process-title" label={c.label} title={c.title} subtitle={c.subtitle} />

        <ol style={{ borderTop: `1px solid ${RULE}` }}>
          {process.map((step, i) => (
            <li
              key={step.step}
              className="grid lg:grid-cols-12 gap-3 lg:gap-8 py-8 lg:py-10"
              style={{ borderBottom: `1px solid ${RULE}` }}
            >
              <span
                aria-hidden="true"
                className="lg:col-span-2 font-display font-extrabold leading-none tabular-nums"
                style={{ color: i % 2 === 0 ? AMBER : GOLD, fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}
              >
                {step.step}
              </span>
              <h3
                className="lg:col-span-4 font-display font-extrabold"
                style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', lineHeight: 1.1, color: CREAM, letterSpacing: '-0.02em' }}
              >
                {tr(step.title)}
              </h3>
              <p className="lg:col-span-6 leading-relaxed" style={{ color: MUTED, fontSize: '1.05rem' }}>
                {tr(step.description)}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}