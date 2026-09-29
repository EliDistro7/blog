'use client';

// @/app/components/tender/Services.js
import React from 'react';
import { SURFACE, AMBER, GOLD, CREAM, MUTED, RULE, IMAGES, AfricanPattern, SectionHead, Photo } from './shared';

const copy = {
  en: { label: 'What we do', caption: 'From the first search to the signed contract' },
  sw: { label: 'Tunachofanya', caption: 'Kuanzia utafutaji wa kwanza hadi mkataba uliosainiwa' },
};

const TenderServicesSection = ({ language, services }) => {
  const lang = language === 'sw' ? 'sw' : 'en';
  const data = services[lang];
  const c = copy[lang];

  return (
    <section
      aria-labelledby="tender-services-title"
      className="relative overflow-hidden pb-24"
      style={{ background: SURFACE }}
    >
      <AfricanPattern id="tenderSvcPattern" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead id="tender-services-title" label={c.label} title={data.title} subtitle={data.subtitle} />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Sticky photo */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Photo src={IMAGES.services} aspect="4 / 5" sizes="(min-width: 1024px) 40vw, 100vw" />
              <p className="mt-3 text-xs italic" style={{ color: MUTED }}>{c.caption}</p>
            </div>
          </div>

          {/* Numbered list */}
          <ol className="lg:col-span-7" style={{ borderBottom: `1px solid ${RULE}` }}>
            {data.services.map((service, i) => (
              <li
                key={service.title}
                className="grid grid-cols-[3.5rem_1fr] sm:grid-cols-[5rem_1fr] gap-x-4 py-8"
                style={{ borderTop: `1px solid ${RULE}` }}
              >
                <span
                  aria-hidden="true"
                  className="font-display font-extrabold tabular-nums"
                  style={{ color: i % 2 === 0 ? AMBER : GOLD, fontSize: '1.5rem', letterSpacing: '-0.02em' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3
                    className="font-display font-extrabold"
                    style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)', lineHeight: 1.1, color: CREAM, letterSpacing: '-0.02em' }}
                  >
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-relaxed max-w-xl" style={{ color: MUTED }}>
                    {service.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default TenderServicesSection;
