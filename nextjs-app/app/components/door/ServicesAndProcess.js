'use client';

// @/app/components/door/ServicesAndProcess.js
import React from 'react';
import { services, process } from '@/app/components/door/data';
import { useLanguage } from '@/context/LanguageContext';
import {
  SURFACE, AMBER, GOLD, CREAM, MUTED, RULE, DOOR_IMAGES,
  AfricanPattern, SectionHead, Photo,
} from './shared';

const copy = {
  en: {
    servicesLabel: 'What we do',
    servicesTitle: 'Our services',
    servicesSub: 'Comprehensive door-to-door marketing solutions tailored to your business needs.',
    processLabel: 'How it works',
    processTitle: 'Our process',
    processSub: 'A proven 4-step process that delivers consistent results.',
    imageAlt: 'Our team on a door-to-door visit',
  },
  sw: {
    servicesLabel: 'Tunachofanya',
    servicesTitle: 'Huduma zetu',
    servicesSub: 'Suluhisho kamili za uuzaji wa mlango hadi mlango zinazolingana na mahitaji ya biashara yako.',
    processLabel: 'Jinsi tunavyofanya kazi',
    processTitle: 'Mchakato wetu',
    processSub: 'Mchakato wa hatua 4 uliothibitishwa unaotoa matokeo thabiti.',
    imageAlt: 'Timu yetu ikiwa kwenye ziara ya mlango hadi mlango',
  },
};

const ServicesAndProcess = () => {
  const { language } = useLanguage();
  const lang = language === 'sw' ? 'sw' : 'en';
  const c = copy[lang];
  const tr = (obj) => (obj ? obj[lang] || obj.en : '');

  return (
    <>
      {/* ═════════ Services ═════════ */}
      <section
        id="services"
        aria-labelledby="door-services-title"
        className="relative overflow-hidden pb-24 scroll-mt-24"
        style={{ background: SURFACE }}
      >
        <AfricanPattern id="doorSvcPattern" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead id="door-services-title" label={c.servicesLabel} title={c.servicesTitle} subtitle={c.servicesSub} />

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {services.map((service, i) => {
              const accent = i % 2 === 0 ? AMBER : GOLD;
              return (
                <li key={service.title.en} className="pt-4" style={{ borderTop: `2px solid ${accent}` }}>
                  <span
                    aria-hidden="true"
                    className="font-display font-extrabold tabular-nums block mb-4"
                    style={{ color: accent, fontSize: '2.5rem', lineHeight: 1, letterSpacing: '-0.03em' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className="font-display font-extrabold"
                    style={{ fontSize: '1.5rem', lineHeight: 1.08, color: CREAM, letterSpacing: '-0.02em' }}
                  >
                    {tr(service.title)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>
                    {tr(service.description)}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ═════════ Process ═════════ */}
      <section
        id="process"
        aria-labelledby="door-process-title"
        className="relative overflow-hidden pb-24 scroll-mt-24"
        style={{ background: SURFACE }}
      >
        <AfricanPattern id="doorProcessPattern" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead id="door-process-title" label={c.processLabel} title={c.processTitle} subtitle={c.processSub} />

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <Photo src={DOOR_IMAGES.process} alt={c.imageAlt} aspect="4 / 5" sizes="(min-width: 1024px) 40vw, 100vw" />
              </div>
            </div>

            <ol className="lg:col-span-7" style={{ borderBottom: `1px solid ${RULE}` }}>
              {process.map((step, i) => (
                <li
                  key={step.step}
                  className="grid grid-cols-[3.5rem_1fr] sm:grid-cols-[5rem_1fr] gap-x-4 py-8"
                  style={{ borderTop: `1px solid ${RULE}` }}
                >
                  <span
                    aria-hidden="true"
                    className="font-display font-extrabold tabular-nums"
                    style={{ color: i % 2 === 0 ? AMBER : GOLD, fontSize: '1.75rem', lineHeight: 1, letterSpacing: '-0.02em' }}
                  >
                    {step.step}
                  </span>
                  <div>
                    <h3
                      className="font-display font-extrabold"
                      style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)', lineHeight: 1.1, color: CREAM, letterSpacing: '-0.02em' }}
                    >
                      {tr(step.title)}
                    </h3>
                    <p className="mt-3 leading-relaxed max-w-xl" style={{ color: MUTED }}>
                      {tr(step.description)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesAndProcess;
