'use client';

// @/app/components/tender/Pricing.js
import React from 'react';
import {
  SURFACE, AMBER, GOLD, DARK, CREAM, MUTED, RULE, BORDER_S,
  AfricanPattern, SectionHead, openWhatsApp,
  btnPrimary, btnPrimaryStyle, btnGhost, btnGhostStyle,
} from './shared';

const copy = {
  en: {
    label: 'Pricing',
    popular: 'Most popular',
    choose: 'Choose plan',
    note: 'All plans include our success guarantee and post-submission support.',
    assurances: ['No hidden fees', 'Money-back guarantee', 'Expert consultation'],
    whatsapp: (n) => `Hi! I'm interested in the ${n} tender plan.`,
  },
  sw: {
    label: 'Bei',
    popular: 'Maarufu zaidi',
    choose: 'Chagua mpango',
    note: 'Mipango yote inajumuisha dhamana yetu ya mafanikio na msaada wa baada ya uwasilishaji.',
    assurances: ['Hakuna ada zilizofichwa', 'Dhamana ya kurudishia pesa', 'Ushauri wa kitaalamu'],
    whatsapp: (n) => `Hujambo! Ninavutiwa na mpango wa ${n} wa zabuni.`,
  },
};

const TenderPricingSection = ({ language, pricingPlans }) => {
  const lang = language === 'sw' ? 'sw' : 'en';
  const data = pricingPlans[lang];
  const c = copy[lang];

  return (
    <section
      aria-labelledby="tender-pricing-title"
      className="relative overflow-hidden pb-24"
      style={{ background: SURFACE }}
    >
      <AfricanPattern id="tenderPricingPattern" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead id="tender-pricing-title" label={c.label} title={data.title} subtitle={data.subtitle} />

        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {data.plans.map((plan, i) => {
            const accent = plan.popular ? AMBER : i % 2 === 0 ? GOLD : AMBER;
            return (
              <li key={plan.name} className="flex">
                <article
                  className="relative flex flex-col w-full rounded p-8"
                  style={{
                    background: plan.popular ? 'rgba(245,158,11,0.06)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${plan.popular ? BORDER_S : RULE}`,
                  }}
                >
                  {/* Top stripe */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0"
                    style={{ height: 3, background: accent, borderRadius: '0.25rem 0.25rem 0 0' }}
                  />

                  <p
                    className="font-display font-bold text-sm mb-3"
                    style={{ color: plan.popular ? AMBER : 'transparent', letterSpacing: '0.04em' }}
                    aria-hidden={!plan.popular}
                  >
                    {c.popular}
                  </p>

                  <h3
                    className="font-display font-extrabold"
                    style={{ fontSize: '1.75rem', lineHeight: 1.05, color: CREAM, letterSpacing: '-0.02em' }}
                  >
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>
                    {plan.description}
                  </p>

                  <p className="mt-6 flex items-baseline gap-2">
                    <span
                      className="font-display font-extrabold leading-none"
                      style={{ color: CREAM, fontSize: 'clamp(2.5rem, 4vw, 3.25rem)', letterSpacing: '-0.03em' }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-sm" style={{ color: MUTED }}>{plan.period}</span>
                  </p>

                  <ul className="mt-8 mb-8" style={{ borderTop: `1px solid ${RULE}` }}>
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="py-3 text-sm"
                        style={{ borderBottom: `1px solid ${RULE}`, color: CREAM }}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => openWhatsApp(c.whatsapp(plan.name))}
                    className={`${plan.popular ? btnPrimary : btnGhost} mt-auto w-full`}
                    style={plan.popular ? { ...btnPrimaryStyle, color: DARK } : btnGhostStyle}
                  >
                    {c.choose}
                  </button>
                </article>
              </li>
            );
          })}
        </ul>

        {/* Assurances */}
        <div className="mt-12 pt-8 lg:flex lg:items-center lg:justify-between gap-8" style={{ borderTop: `1px solid ${RULE}` }}>
          <p className="mb-6 lg:mb-0 max-w-md" style={{ color: MUTED }}>{c.note}</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold" style={{ color: CREAM }}>
            {c.assurances.map((a) => (
              <li key={a} className="flex items-center gap-3">
                <span aria-hidden="true" style={{ width: '1.25rem', height: 2, background: AMBER, borderRadius: 2 }} />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TenderPricingSection;
