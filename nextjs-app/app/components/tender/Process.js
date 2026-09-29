'use client';

// @/app/components/tender/Process.js
import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  SURFACE, AMBER, GOLD, CREAM, MUTED, RULE, IMAGES,
  AfricanPattern, SectionHead, Photo, openWhatsApp,
  btnPrimary, btnPrimaryStyle,
} from './shared';

const copy = {
  en: {
    label: 'How it works',
    cta: 'Start your tender',
    imageAlt: 'A team reviewing a tender proposal together',
    whatsapp: "Hi! I'd like to start a tender application with Future Holders.",
  },
  sw: {
    label: 'Jinsi tunavyofanya kazi',
    cta: 'Anza zabuni yako',
    imageAlt: 'Timu ikipitia pendekezo la zabuni pamoja',
    whatsapp: 'Hujambo! Ningependa kuanza ombi la zabuni na Future Holders.',
  },
};

const TenderProcessSection = ({ language, process }) => {
  const lang = language === 'sw' ? 'sw' : 'en';
  const data = process[lang];
  const c = copy[lang];

  return (
    <section
      aria-labelledby="tender-process-title"
      className="relative overflow-hidden pb-24"
      style={{ background: SURFACE }}
    >
      <AfricanPattern id="tenderProcessPattern" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead id="tender-process-title" label={c.label} title={data.title} subtitle={data.subtitle} />

        {/* Wide banner photo */}
        <Photo
          src={IMAGES.process}
          alt={c.imageAlt}
          aspect="21 / 9"
          sizes="(min-width: 1024px) 1200px, 100vw"
          position="50% 40%"
          className="mb-14 min-h-[14rem]"
        />

        {/* Steps */}
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
          {data.steps.map((step, i) => {
            const accent = i % 2 === 0 ? AMBER : GOLD;
            return (
              <li key={step.step} className="pt-4" style={{ borderTop: `2px solid ${accent}` }}>
                <span
                  aria-hidden="true"
                  className="font-display font-extrabold tabular-nums block mb-4"
                  style={{ color: accent, fontSize: '2.5rem', lineHeight: 1, letterSpacing: '-0.03em' }}
                >
                  {step.step}
                </span>
                <h3
                  className="font-display font-extrabold"
                  style={{ fontSize: '1.3rem', lineHeight: 1.1, color: CREAM, letterSpacing: '-0.02em' }}
                >
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>

        <div className="mt-14 pt-8" style={{ borderTop: `1px solid ${RULE}` }}>
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
    </section>
  );
};

export default TenderProcessSection;
