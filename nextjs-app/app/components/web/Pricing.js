'use client';

import { Check } from 'lucide-react';
import {
  AMBER, GOLD, DARK, CREAM, MUTED, RULE, BORDER_S,
  AfricanPattern, SectionHead, focusRing, openWhatsApp, useLang,
} from './shared';
import { packages as defaultPackages } from './data';

const copy = {
  en: {
    label: 'Pricing',
    title: 'Website packages',
    subtitle: 'Choose the right package for your business.',
    popular: 'Most popular',
    choose: 'Choose this package',
    everythingIn: (name) => `Everything in ${name}, plus:`,
    whatsapp: (name, price) => `Hi! I'm interested in the ${name} (${price}) from Future Holders.`,
  },
  sw: {
    label: 'Bei',
    title: 'Vifurushi vya tovuti',
    subtitle: 'Chagua kifurushi kinachofaa biashara yako.',
    popular: 'Kinachopendwa zaidi',
    choose: 'Chagua kifurushi hiki',
    everythingIn: (name) => `Kila kitu kwenye ${name}, pamoja na:`,
    whatsapp: (name, price) => `Hujambo! Ninavutiwa na ${name} (${price}) kutoka Future Holders.`,
  },
};

export default function PricingSection({ packages = defaultPackages }) {
  const { lang, tr } = useLang();
  const c = copy[lang];

  return (
    <section
      id="packages"
      aria-labelledby="web-pricing-title"
      className="relative overflow-hidden pb-24 scroll-mt-24"
      style={{ background: DARK }}
    >
      <AfricanPattern id="webPricePattern" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead id="web-pricing-title" label={c.label} title={c.title} subtitle={c.subtitle} />

        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, i) => {
            const accent = pkg.popular ? AMBER : i % 2 === 0 ? GOLD : AMBER;
            const base = pkg.extends ? packages.find((p) => p.id === pkg.extends) : null;
            const shown = base ? pkg.features.filter((f) => !base.features.includes(f)) : pkg.features;
            const name = tr(pkg.name);

            return (
              <li key={pkg.id ?? pkg.name.en} className="flex">
                <article
                  className="flex flex-col w-full px-6 pb-8 pt-6"
                  style={{
                    borderTop: `${pkg.popular ? 4 : 2}px solid ${accent}`,
                    background: pkg.popular ? 'rgba(245,158,11,0.06)' : 'transparent',
                  }}
                >
                  <div className="min-h-[1.25rem] mb-3">
                    {pkg.popular && (
                      <span className="font-display font-bold text-sm" style={{ color: AMBER, letterSpacing: '0.04em' }}>
                        {c.popular}
                      </span>
                    )}
                  </div>

                  <h3
                    className="font-display font-extrabold"
                    style={{ fontSize: '1.9rem', lineHeight: 1.05, color: CREAM, letterSpacing: '-0.025em' }}
                  >
                    {name}
                  </h3>
                  <p className="font-display font-semibold text-sm mt-2" style={{ color: accent }}>
                    {tr(pkg.type)}
                  </p>
                  <p
                    className="font-display font-extrabold mt-5"
                    style={{ fontSize: 'clamp(2rem, 3.4vw, 2.75rem)', lineHeight: 1, color: CREAM, letterSpacing: '-0.03em' }}
                  >
                    {pkg.price}
                  </p>

                  {base && (
                    <p className="mt-6 text-sm font-semibold" style={{ color: CREAM }}>
                      {c.everythingIn(tr(base.name))}
                    </p>
                  )}

                  <ul className={`${base ? 'mt-3' : 'mt-6'} mb-8`} style={{ borderTop: `1px solid ${RULE}` }}>
                    {shown.map((feature) => (
                      <li
                        key={feature.en}
                        className="flex items-start gap-3 py-2.5 text-sm leading-snug"
                        style={{ borderBottom: `1px solid ${RULE}`, color: MUTED }}
                      >
                        <Check size={16} aria-hidden="true" className="mt-0.5 flex-shrink-0" style={{ color: accent }} />
                        <span>{tr(feature)}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => openWhatsApp(c.whatsapp(name, pkg.price))}
                    className={`mt-auto w-full rounded font-display text-sm transition-opacity hover:opacity-90 ${
                      pkg.popular ? 'font-extrabold' : 'font-bold hover:bg-amber/10'
                    } ${focusRing}`}
                    style={
                      pkg.popular
                        ? { background: AMBER, color: DARK, padding: '1rem 1.75rem' }
                        : { border: `2px solid ${BORDER_S}`, color: AMBER, padding: '1rem 1.75rem' }
                    }
                  >
                    {c.choose}
                  </button>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}