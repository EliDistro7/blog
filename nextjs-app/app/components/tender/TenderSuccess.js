'use client';

// @/app/components/tender/TenderSuccess.js
import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  SURFACE, AMBER, GOLD, CREAM, MUTED, RULE, IMAGES,
  AfricanPattern, SectionHead, Photo, openWhatsApp,
  btnPrimary, btnPrimaryStyle,
} from './shared';

const copy = {
  en: {
    label: 'Track record',
    won: 'Successful bid',
    closing: 'Ready to win your next tender?',
    closingText: 'Join our successful clients and increase your tender win rate by 95%.',
    cta: 'Get started today',
    whatsapp: "Hi! I saw your tender results and I'd like to talk about my next bid.",
  },
  sw: {
    label: 'Rekodi yetu',
    won: 'Zabuni iliyofanikiwa',
    closing: 'Tayari kushinda zabuni yako ijayo?',
    closingText: 'Jiunge na wateja wetu waliofanikiwa na ongeza kiwango chako cha kushinda zabuni kwa 95%.',
    cta: 'Anza leo',
    whatsapp: 'Hujambo! Nimeona matokeo ya zabuni zenu na ningependa kuzungumzia zabuni yangu ijayo.',
  },
};

// Defined outside the section so it isn't remounted on every render
const Meta = ({ tender, accent }) => (
  <p className="font-display font-semibold text-sm" style={{ color: accent }}>
    {tender.type}
    <span aria-hidden="true" style={{ color: MUTED }}>{'  /  '}</span>
    {tender.status}
  </p>
);

const TenderSuccessSection = ({ language, successfulTenders }) => {
  const lang = language === 'sw' ? 'sw' : 'en';
  const data = successfulTenders[lang];
  const c = copy[lang];
  const [featured, ...rest] = data.tenders;

  return (
    <section
      id="success-stories"
      aria-labelledby="tender-success-title"
      className="relative overflow-hidden pb-24 scroll-mt-24"
      style={{ background: SURFACE }}
    >
      <AfricanPattern id="tenderSuccessPattern" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead id="tender-success-title" label={c.label} title={data.title} subtitle={data.subtitle} />

        {/* Feature story */}
        {featured && (
          <article className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
            <div className="lg:col-span-7">
              <Photo src={IMAGES.success[0]} aspect="16 / 10" sizes="(min-width: 1024px) 58vw, 100vw" />
            </div>
            <div className="lg:col-span-5">
              <Meta tender={featured} accent={AMBER} />
              <h3
                className="font-display font-extrabold mt-4"
                style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3rem)', lineHeight: 1.02, color: CREAM, letterSpacing: '-0.025em' }}
              >
                {featured.client}
              </h3>
              <p className="font-display font-semibold mt-3" style={{ color: AMBER }}>{featured.project}</p>
              <p
                className="font-display font-extrabold mt-6 leading-none"
                style={{ color: CREAM, fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}
              >
                {featured.value}
              </p>
              <p className="mt-5 leading-relaxed" style={{ color: MUTED, fontSize: '1.05rem' }}>
                {featured.description}
              </p>
            </div>
          </article>
        )}

        {/* Remaining stories */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {rest.map((tender, i) => {
            const accent = i % 2 === 0 ? GOLD : AMBER;
            return (
              <li key={tender.client}>
                <article>
                  <Photo src={IMAGES.success[i + 1]} aspect="16 / 10" sizes="(min-width: 768px) 50vw, 100vw" />
                  <div className="pt-4 mt-5" style={{ borderTop: `2px solid ${accent}` }}>
                    <Meta tender={tender} accent={accent} />
                    <h3
                      className="font-display font-extrabold mt-3"
                      style={{ fontSize: '1.75rem', lineHeight: 1.08, color: CREAM, letterSpacing: '-0.02em' }}
                    >
                      {tender.client}
                    </h3>
                    <p className="font-display font-semibold mt-1 text-sm" style={{ color: accent }}>
                      {tender.project}
                    </p>
                    <p
                      className="font-display font-extrabold mt-4 leading-none"
                      style={{ color: CREAM, fontSize: '2.25rem', letterSpacing: '-0.03em' }}
                    >
                      {tender.value}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed" style={{ color: MUTED }}>
                      {tender.description}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        {/* Closing line */}
        <div className="grid lg:grid-cols-12 gap-8 pt-8 mt-20 lg:mt-24" style={{ borderTop: `1px solid ${RULE}` }}>
          <h3
            className="lg:col-span-7 font-display font-extrabold"
            style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3rem)', lineHeight: 1.02, color: CREAM, letterSpacing: '-0.025em' }}
          >
            {c.closing}
          </h3>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="leading-relaxed mb-6" style={{ color: MUTED }}>{c.closingText}</p>
            <button
              type="button"
              onClick={() => openWhatsApp(c.whatsapp)}
              className={btnPrimary}
              style={btnPrimaryStyle}
            >
              {c.cta}
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenderSuccessSection;
