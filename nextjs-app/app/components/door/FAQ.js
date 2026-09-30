'use client';

// @/app/components/door/FAQ.js
import React, { useState } from 'react';
import { faqs } from '@/app/components/door/data';
import { useLanguage } from '@/context/LanguageContext';
import {
  SURFACE, AMBER, CREAM, MUTED, RULE, DOOR_IMAGES,
  AfricanPattern, SectionHead, Photo, focusRing,
} from './shared';

const copy = {
  en: { label: 'FAQ', title: 'Frequently asked questions', imageAlt: 'A campaign briefing with the field team' },
  sw: { label: 'Maswali', title: 'Maswali yanayoulizwa mara kwa mara', imageAlt: 'Maelekezo ya kampeni kwa timu ya uwandani' },
};

const FAQ = () => {
  const { language } = useLanguage();
  const lang = language === 'sw' ? 'sw' : 'en';
  const c = copy[lang];
  const tr = (obj) => (obj ? obj[lang] || obj.en : '');
  const [expanded, setExpanded] = useState(null);

  return (
    <section
      id="faq"
      aria-labelledby="door-faq-title"
      className="relative overflow-hidden pb-24 scroll-mt-24"
      style={{ background: SURFACE }}
    >
      <AfricanPattern id="doorFaqPattern" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead id="door-faq-title" label={c.label} title={c.title} />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Photo src={DOOR_IMAGES.faq} alt={c.imageAlt} aspect="4 / 5" sizes="(min-width: 1024px) 32vw, 100vw" />
            </div>
          </div>

          <div className="lg:col-span-8" style={{ borderBottom: `1px solid ${RULE}` }}>
            {faqs.map((faq, i) => {
              const open = expanded === i;
              return (
                <div key={faq.question.en} style={{ borderTop: `1px solid ${RULE}` }}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setExpanded(open ? null : i)}
                      aria-expanded={open}
                      aria-controls={`door-faq-panel-${i}`}
                      id={`door-faq-button-${i}`}
                      className={`w-full flex items-start justify-between gap-6 py-6 text-left ${focusRing}`}
                    >
                      <span
                        className="font-display font-extrabold"
                        style={{
                          fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
                          lineHeight: 1.2,
                          letterSpacing: '-0.015em',
                          color: open ? AMBER : CREAM,
                        }}
                      >
                        {tr(faq.question)}
                      </span>
                      <span
                        aria-hidden="true"
                        className="font-display font-bold shrink-0 leading-none"
                        style={{ color: AMBER, fontSize: '1.5rem', width: '1.25rem', textAlign: 'center' }}
                      >
                        {open ? '\u2212' : '+'}
                      </span>
                    </button>
                  </h3>
                  {open && (
                    <div
                      id={`door-faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`door-faq-button-${i}`}
                      className="pb-6 pr-10"
                    >
                      <p className="leading-relaxed" style={{ color: MUTED, fontSize: '1.02rem' }}>
                        {tr(faq.answer)}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
