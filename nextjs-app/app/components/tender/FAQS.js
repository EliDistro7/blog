'use client';

// @/app/components/tender/FAQS.js
import React from 'react';
import {
  SURFACE, AMBER, CREAM, MUTED, RULE, IMAGES,
  AfricanPattern, SectionHead, Photo, openWhatsApp, focusRing,
  btnPrimary, btnPrimaryStyle, btnGhost, btnGhostStyle, CONTACT,
} from './shared';

const copy = {
  en: {
    label: 'FAQ',
    stillTitle: 'Still have questions?',
    stillText:
      'Our tender experts can walk you through the process and answer specific questions about your requirements.',
    consult: 'Schedule a consultation',
    support: 'Email support',
    imageAlt: 'Two consultants discussing a proposal',
    whatsapp: "Hi! I have a question about a tender application and I'd like to book a consultation.",
    subject: 'Tender support enquiry',
  },
  sw: {
    label: 'Maswali',
    stillTitle: 'Bado una maswali?',
    stillText:
      'Wataalamu wetu wa zabuni wanaweza kukueleza mchakato na kujibu maswali maalum kuhusu mahitaji yako.',
    consult: 'Ratiba shauri',
    support: 'Barua pepe',
    imageAlt: 'Washauri wawili wakijadili pendekezo',
    whatsapp: 'Hujambo! Nina swali kuhusu ombi la zabuni na ningependa kupanga shauri.',
    subject: 'Swali kuhusu msaada wa zabuni',
  },
};

const TenderFAQSection = ({ language, faqs, expandedFaq, toggleFaq }) => {
  const lang = language === 'sw' ? 'sw' : 'en';
  const data = faqs[lang];
  const c = copy[lang];

  return (
    <section
      aria-labelledby="tender-faq-title"
      className="relative overflow-hidden pb-24"
      style={{ background: SURFACE }}
    >
      <AfricanPattern id="tenderFaqPattern" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead id="tender-faq-title" label={c.label} title={data.title} />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Accordion */}
          <div className="lg:col-span-7 lg:order-2" style={{ borderBottom: `1px solid ${RULE}` }}>
            {data.faqs.map((faq, i) => {
              const open = expandedFaq === i;
              return (
                <div key={faq.question} style={{ borderTop: `1px solid ${RULE}` }}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggleFaq(i)}
                      aria-expanded={open}
                      aria-controls={`tender-faq-panel-${i}`}
                      id={`tender-faq-button-${i}`}
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
                        {faq.question}
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
                      id={`tender-faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`tender-faq-button-${i}`}
                      className="pb-6 pr-10"
                    >
                      <p className="leading-relaxed" style={{ color: MUTED, fontSize: '1.02rem' }}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact side */}
          <aside className="lg:col-span-5 lg:order-1">
            <div className="lg:sticky lg:top-28">
              <Photo src={IMAGES.faq} alt={c.imageAlt} aspect="4 / 3" sizes="(min-width: 1024px) 40vw, 100vw" />
              <div className="pt-4 mt-6" style={{ borderTop: `2px solid ${AMBER}` }}>
                <h3
                  className="font-display font-extrabold"
                  style={{ fontSize: '1.75rem', lineHeight: 1.08, color: CREAM, letterSpacing: '-0.02em' }}
                >
                  {c.stillTitle}
                </h3>
                <p className="mt-3 leading-relaxed" style={{ color: MUTED }}>{c.stillText}</p>
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => openWhatsApp(c.whatsapp)}
                    className={btnPrimary}
                    style={btnPrimaryStyle}
                  >
                    {c.consult}
                  </button>
                  <a
                    href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(c.subject)}`}
                    className={btnGhost}
                    style={btnGhostStyle}
                  >
                    {c.support}
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default TenderFAQSection;
