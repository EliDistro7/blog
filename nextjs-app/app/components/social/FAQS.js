'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AMBER, DARK, CREAM, MUTED, RULE, AfricanPattern, SectionHead, focusRing, useLang } from './shared';
import { faqs as defaultFaqs } from './data';

const copy = {
  en: {
    label: 'Questions',
    title: 'Frequently asked questions',
    subtitle: 'Get answers to common questions about our services.',
  },
  sw: {
    label: 'Maswali',
    title: 'Maswali yanayoulizwa mara kwa mara',
    subtitle: 'Pata majibu ya maswali ya kawaida kuhusu huduma zetu.',
  },
};

export default function FAQSection({ faqs = defaultFaqs }) {
  const { lang, tr } = useLang();
  const c = copy[lang];
  const [open, setOpen] = useState(null);

  return (
    <section
      id="faq"
      aria-labelledby="social-faq-title"
      className="relative overflow-hidden pb-24 scroll-mt-24"
      style={{ background: DARK }}
    >
      <AfricanPattern id="socialFaqPattern" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead id="social-faq-title" label={c.label} title={c.title} subtitle={c.subtitle} />

        <div className="grid lg:grid-cols-12">
          <ul className="lg:col-span-9" style={{ borderTop: `1px solid ${RULE}` }}>
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <li key={faq.question.en} style={{ borderBottom: `1px solid ${RULE}` }}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      className={`flex w-full items-center justify-between gap-6 py-6 text-left ${focusRing}`}
                    >
                      <span
                        className="font-display font-bold"
                        style={{ color: CREAM, fontSize: 'clamp(1.05rem, 1.6vw, 1.3rem)', lineHeight: 1.25, letterSpacing: '-0.01em' }}
                      >
                        {tr(faq.question)}
                      </span>
                      <ChevronDown
                        size={20}
                        aria-hidden="true"
                        className={`flex-shrink-0 motion-safe:transition-transform motion-safe:duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        style={{ color: AMBER }}
                      />
                    </button>
                  </h3>
                  {isOpen && (
                    <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-button-${i}`} className="pb-6 pr-10">
                      <p className="leading-relaxed max-w-3xl" style={{ color: MUTED, fontSize: '1.05rem' }}>
                        {tr(faq.answer)}
                      </p>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}