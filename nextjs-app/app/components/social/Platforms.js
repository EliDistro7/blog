'use client';

import { AMBER, GOLD, SURFACE, CREAM, MUTED, RULE, AfricanPattern, SectionHead, useLang } from './shared';
import { platforms as defaultPlatforms } from './data';

const copy = {
  en: {
    label: 'Where we work',
    title: 'Platforms we manage',
    subtitle: 'Expert management across all major social media platforms.',
  },
  sw: {
    label: 'Tunapofanyia kazi',
    title: 'Mitandao tunayosimamia',
    subtitle: 'Uongozi wa mtaalamu katika mitandao yote mikuu ya kijamii.',
  },
};

export default function PlatformsSection({ platforms = defaultPlatforms }) {
  const { lang, tr } = useLang();
  const c = copy[lang];

  return (
    <section
      id="platforms"
      aria-labelledby="social-platforms-title"
      className="relative overflow-hidden pb-24 scroll-mt-24"
      style={{ background: SURFACE }}
    >
      <AfricanPattern id="socialPlatformsPattern" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead id="social-platforms-title" label={c.label} title={c.title} subtitle={c.subtitle} />

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {platforms.map((platform, i) => {
            const accent = i % 2 === 0 ? AMBER : GOLD;
            return (
              <li key={platform.name} className="pt-5" style={{ borderTop: `2px solid ${accent}` }}>
                <h3
                  className="font-display font-extrabold"
                  style={{ fontSize: '1.6rem', lineHeight: 1.08, color: CREAM, letterSpacing: '-0.02em' }}
                >
                  {platform.name}
                </h3>
                <ul className="mt-5" style={{ borderTop: `1px solid ${RULE}` }}>
                  {platform.features.map((feature) => (
                    <li
                      key={feature.en}
                      className="py-2.5 text-sm"
                      style={{ borderBottom: `1px solid ${RULE}`, color: MUTED }}
                    >
                      {tr(feature)}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}