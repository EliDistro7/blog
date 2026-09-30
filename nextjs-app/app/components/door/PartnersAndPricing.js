'use client';

// @/app/components/door/PartnersAndPricing.js
import React from 'react';
import { pricingPlans, currentPartners } from '@/app/components/door/data';
import { useLanguage } from '@/context/LanguageContext';
import {
  SURFACE, AMBER, GOLD, DARK, CREAM, MUTED, RULE, BORDER_S, DOOR_IMAGES,
  AfricanPattern, SectionHead, Photo, openWhatsApp,
  btnPrimary, btnPrimaryStyle, btnGhost, btnGhostStyle,
} from './shared';

const copy = {
  en: {
    partnersLabel: 'Our clients',
    partnersTitle: 'Current partners',
    partnersSub: "Companies we're actively promoting through door-to-door campaigns.",
    products: 'Products we promote',
    pricingLabel: 'Pricing',
    pricingTitle: 'Pricing plans',
    pricingSub: 'Choose the plan that fits your door-to-door marketing needs.',
    popular: 'Most popular',
    choose: 'Choose plan',
    forWho: 'Best for',
  },
  sw: {
    partnersLabel: 'Wateja wetu',
    partnersTitle: 'Washirika wa sasa',
    partnersSub: 'Makampuni tunayoyatangaza kwa kampeni za mlango hadi mlango.',
    products: 'Bidhaa tunazotangaza',
    pricingLabel: 'Bei',
    pricingTitle: 'Mipango ya bei',
    pricingSub: 'Chagua mpango unaofaa mahitaji yako ya uuzaji wa mlango hadi mlango.',
    popular: 'Maarufu zaidi',
    choose: 'Chagua mpango',
    forWho: 'Inafaa kwa',
  },
};

// Split "TZS 900,000 - 1,200,000" into currency + amount so the amount can lead
const splitPrice = (price) => {
  if (typeof price !== 'string') return { cur: '', amount: '' };
  const [cur, ...rest] = price.split(' ');
  return /^[A-Z]{3}$/.test(cur)
    ? { cur, amount: rest.join(' ').replace(' - ', ' \u2013 ') }
    : { cur: '', amount: price };
};

const PartnersAndPricing = () => {
  const { language } = useLanguage();
  const lang = language === 'sw' ? 'sw' : 'en';
  const c = copy[lang];
  const tr = (obj) => (obj ? obj[lang] || obj.en : '');

  const handlePlanClick = (planName) => {
    const name = tr(planName);
    openWhatsApp(
      lang === 'sw'
        ? `Hujambo! Ninapendezwa na mpango wa ${name} kwa huduma za uuzaji wa mlango hadi mlango. Je, unaweza kutoa maelezo zaidi?`
        : `Hi! I'm interested in the ${name} plan for door-to-door marketing services. Can you provide more details?`
    );
  };

  return (
    <>
      {/* ═════════ Partners ═════════ */}
      <section
        id="partners"
        aria-labelledby="door-partners-title"
        className="relative overflow-hidden pb-24 scroll-mt-24"
        style={{ background: SURFACE }}
      >
        <AfricanPattern id="doorPartnersPattern" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead id="door-partners-title" label={c.partnersLabel} title={c.partnersTitle} subtitle={c.partnersSub} />

          <ul className="space-y-20 lg:space-y-24">
            {currentPartners.map((partner, i) => {
              const accent = i % 2 === 0 ? AMBER : GOLD;
              const flip = i % 2 === 1;
              return (
                <li key={partner.company}>
                  <article className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className={`lg:col-span-5 ${flip ? 'lg:order-2' : ''}`}>
                      <Photo
                        src={DOOR_IMAGES.partners[partner.company]}
                        aspect="4 / 3"
                        sizes="(min-width: 1024px) 40vw, 100vw"
                      />
                    </div>

                    <div className={`lg:col-span-7 ${flip ? 'lg:order-1' : ''}`}>
                      <div className="pt-4" style={{ borderTop: `2px solid ${accent}` }}>
                        <p className="font-display font-semibold text-sm" style={{ color: accent }}>
                          <span aria-hidden="true" style={{ color: MUTED }}>{String(i + 1).padStart(2, '0')}{'  /  '}</span>
                          {tr(partner.industry)}
                          {partner.location && (
                            <>
                              <span aria-hidden="true" style={{ color: MUTED }}>{'  /  '}</span>
                              {tr(partner.location)}
                            </>
                          )}
                        </p>
                        <h3
                          className="font-display font-extrabold mt-3"
                          style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3rem)', lineHeight: 1.02, color: CREAM, letterSpacing: '-0.025em' }}
                        >
                          {partner.company}
                        </h3>

                        <p className="mt-6 text-sm font-display font-bold" style={{ color: MUTED, letterSpacing: '0.04em' }}>
                          {c.products}
                        </p>
                        <ul className="mt-3" style={{ borderTop: `1px solid ${RULE}` }}>
                          {partner.products.map((product) => (
                            <li
                              key={product.name.en}
                              className="grid sm:grid-cols-[13rem_1fr] gap-x-6 gap-y-1 py-3"
                              style={{ borderBottom: `1px solid ${RULE}` }}
                            >
                              <span className="text-sm font-semibold" style={{ color: CREAM }}>{tr(product.name)}</span>
                              <span className="text-sm leading-relaxed" style={{ color: MUTED }}>{tr(product.description)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ═════════ Pricing ═════════ */}
      <section
        id="pricing"
        aria-labelledby="door-pricing-title"
        className="relative overflow-hidden pb-24 scroll-mt-24"
        style={{ background: SURFACE }}
      >
        <AfricanPattern id="doorPricingPattern" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead id="door-pricing-title" label={c.pricingLabel} title={c.pricingTitle} subtitle={c.pricingSub} />

          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {pricingPlans.map((plan, i) => {
              const accent = plan.popular ? AMBER : i % 2 === 0 ? GOLD : AMBER;
              const { cur, amount } = splitPrice(plan.price);
              const long = amount.length > 10;
              return (
                <li key={plan.name.en} className="flex">
                  <article
                    className="relative flex flex-col w-full rounded p-8"
                    style={{
                      background: plan.popular ? 'rgba(245,158,11,0.06)' : 'rgba(255,255,255,0.03)',
                      border: `1px solid ${plan.popular ? BORDER_S : RULE}`,
                    }}
                  >
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
                      {tr(plan.name)}
                    </h3>
                    {plan.subtitle && (
                      <p className="font-display font-semibold text-sm mt-1" style={{ color: accent }}>
                        {tr(plan.subtitle)}
                      </p>
                    )}

                    <p className="mt-6">
                      {cur && (
                        <span className="block text-sm font-display font-bold" style={{ color: MUTED, letterSpacing: '0.04em' }}>
                          {cur}
                        </span>
                      )}
                      <span
                        className="font-display font-extrabold leading-none block mt-1"
                        style={{
                          color: CREAM,
                          fontSize: long ? 'clamp(1.75rem, 2.6vw, 2.25rem)' : 'clamp(2.5rem, 4vw, 3.25rem)',
                          letterSpacing: '-0.03em',
                        }}
                      >
                        {amount}
                      </span>
                      <span className="block text-sm mt-2" style={{ color: MUTED }}>{tr(plan.period)}</span>
                    </p>

                    {plan.target && (
                      <p className="mt-5 text-sm leading-relaxed" style={{ color: MUTED }}>
                        <span style={{ color: CREAM }} className="font-semibold">{c.forWho}: </span>
                        {tr(plan.target)}
                      </p>
                    )}

                    <ul className="mt-8 mb-8" style={{ borderTop: `1px solid ${RULE}` }}>
                      {plan.features.map((feature) => (
                        <li
                          key={feature.en}
                          className="py-3 text-sm"
                          style={{ borderBottom: `1px solid ${RULE}`, color: CREAM }}
                        >
                          {tr(feature)}
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={() => handlePlanClick(plan.name)}
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
        </div>
      </section>
    </>
  );
};

export default PartnersAndPricing;
