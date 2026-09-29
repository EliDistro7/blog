'use client';

import {
  AMBER, GOLD, SURFACE, DARK, CREAM, MUTED, RULE, BORDER_S,
  AfricanPattern, SectionHead, focusRing, openWhatsApp, useLang,
} from './shared';
import { pricingPlans as defaultPlans } from './data';

const copy = {
  en: {
    label: 'Pricing',
    title: 'Choose your plan',
    subtitle: 'Flexible pricing plans designed to grow with your business.',
    popular: 'Most popular',
    choose: 'Get started',
    whatsapp: (name, price, period) =>
      `Hi! I'm interested in the ${name} social media plan (${price} ${period}) from Future Holders.`,
  },
  sw: {
    label: 'Bei',
    title: 'Chagua mpango wako',
    subtitle: 'Mipango ya bei ya kubadilika iliyoundwa kukua na biashara yako.',
    popular: 'Maarufu zaidi',
    choose: 'Anza',
    whatsapp: (name, price, period) =>
      `Hujambo! Ninavutiwa na mpango wa ${name} wa mitandao ya kijamii (${price} ${period}) kutoka Future Holders.`,
  },
};

export default function PricingSection({ pricingPlans = defaultPlans }) {
  const { lang, tr } = useLang();
  const c = copy[lang];

  return (
    <section
      id="pricing"
      aria-labelledby="social-pricing-title"
      className="relative overflow-hidden pb-24 scroll-mt-24"
      style={{ background: SURFACE }}
    >
      <AfricanPattern id="socialPricingPattern" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead id="social-pricing-title" label={c.label} title={c.title} subtitle={c.subtitle} />

        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, i) => {
            const accent = plan.popular ? AMBER : i % 2 === 0 ? GOLD : AMBER;
            const name = tr(plan.name);

            return (
              <li key={plan.name.en} className="flex">
                <article
                  className="flex flex-col w-full px-6 pb-8 pt-6"
                  style={{
                    borderTop: `${plan.popular ? 4 : 2}px solid ${accent}`,
                    background: plan.popular ? 'rgba(245,158,11,0.06)' : 'transparent',
                  }}
                >
                  <div className="min-h-[1.25rem] mb-3">
                    {plan.popular && (
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
                    {tr(plan.subtitle)}
                  </p>

                  <p
                    className="font-display font-extrabold mt-5"
                    style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.1rem)', lineHeight: 1.1, color: CREAM, letterSpacing: '-0.03em' }}
                  >
                    {plan.price}
                  </p>
                  <p className="text-sm mt-1" style={{ color: MUTED }}>{tr(plan.period)}</p>

                  <p className="text-sm leading-relaxed mt-5" style={{ color: MUTED }}>
                    {tr(plan.target)}
                  </p>

                  <ul className="mt-6 mb-8" style={{ borderTop: `1px solid ${RULE}` }}>
                    {plan.features.map((feature) => (
                      <li
                        key={feature.en}
                        className="py-2.5 text-sm leading-snug"
                        style={{ borderBottom: `1px solid ${RULE}`, color: MUTED }}
                      >
                        {tr(feature)}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => openWhatsApp(c.whatsapp(name, plan.price, tr(plan.period)))}
                    className={`mt-auto w-full rounded font-display text-sm transition-opacity hover:opacity-90 ${
                      plan.popular ? 'font-extrabold' : 'font-bold hover:bg-amber/10'
                    } ${focusRing}`}
                    style={
                      plan.popular
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