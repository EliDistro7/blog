'use client';

// @/app/components/tender/TenderTypes.js
import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  SURFACE, AMBER, GOLD, CREAM, MUTED, RULE, IMAGES,
  AfricanPattern, SectionHead, Photo, openWhatsApp, focusRing,
  btnPrimary, btnPrimaryStyle,
} from './shared';

const copy = {
  en: { label: 'Categories', cta: 'Get a quote for this type', whatsapp: (n) => `Hi! I'd like a quote for a ${n} application.` },
  sw: { label: 'Makundi', cta: 'Pata bei kwa aina hii', whatsapp: (n) => `Hujambo! Ningependa bei ya ombi la ${n}.` },
};

const TenderTypesSection = ({ language, tenderTypes, selectedTenderType, setSelectedTenderType }) => {
  const lang = language === 'sw' ? 'sw' : 'en';
  const data = tenderTypes[lang];
  const c = copy[lang];
  const active = data.types[selectedTenderType] ? selectedTenderType : 0;
  const selected = data.types[active];
  const accent = active % 2 === 0 ? AMBER : GOLD;

  return (
    <section
      aria-labelledby="tender-types-title"
      className="relative overflow-hidden pb-24"
      style={{ background: SURFACE }}
    >
      <AfricanPattern id="tenderTypesPattern" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead id="tender-types-title" label={c.label} title={data.title} subtitle={data.subtitle} />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Type selector */}
          <div className="lg:col-span-4" role="tablist" aria-orientation="vertical" aria-label={data.title}>
            {data.types.map((type, i) => {
              const isActive = i === active;
              return (
                <button
                  key={type.name}
                  type="button"
                  role="tab"
                  id={`tender-type-tab-${i}`}
                  aria-selected={isActive}
                  aria-controls="tender-type-panel"
                  onClick={() => setSelectedTenderType(i)}
                  className={`block w-full text-left py-6 pl-5 transition-colors ${focusRing}`}
                  style={{
                    borderTop: `1px solid ${RULE}`,
                    borderBottom: i === data.types.length - 1 ? `1px solid ${RULE}` : 'none',
                    borderLeft: `3px solid ${isActive ? (i % 2 === 0 ? AMBER : GOLD) : 'transparent'}`,
                  }}
                >
                  <span
                    className="font-display font-extrabold block"
                    style={{
                      fontSize: '1.35rem',
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em',
                      color: isActive ? CREAM : MUTED,
                    }}
                  >
                    {type.name}
                  </span>
                  <span className="block mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>
                    {type.description}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected type */}
          <div
            className="lg:col-span-8"
            role="tabpanel"
            id="tender-type-panel"
            aria-labelledby={`tender-type-tab-${active}`}
          >
            <Photo
              src={IMAGES.types[active] || IMAGES.types[0]}
              aspect="16 / 8"
              sizes="(min-width: 1024px) 65vw, 100vw"
            />

            <div className="pt-4 mt-6" style={{ borderTop: `2px solid ${accent}` }}>
              <h3
                className="font-display font-extrabold"
                style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', lineHeight: 1.02, color: CREAM, letterSpacing: '-0.025em' }}
              >
                {selected.name}
              </h3>
              <p className="mt-3 leading-relaxed max-w-2xl" style={{ color: MUTED, fontSize: '1.05rem' }}>
                {selected.description}
              </p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8" style={{ borderTop: `1px solid ${RULE}` }}>
                {selected.features.map((feature) => (
                  <li
                    key={feature}
                    className="py-3 text-sm font-semibold"
                    style={{ borderBottom: `1px solid ${RULE}`, color: CREAM }}
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => openWhatsApp(c.whatsapp(selected.name))}
                className={`${btnPrimary} mt-8`}
                style={btnPrimaryStyle}
              >
                {c.cta}
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenderTypesSection;
