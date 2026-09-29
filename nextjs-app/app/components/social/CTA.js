'use client';

import {
  AMBER, SURFACE, DARK, CREAM, MUTED, RULE, BORDER_S,
  AfricanPattern, focusRing, openWhatsApp, useLang,
} from './shared';

const copy = {
  en: {
    label: 'Get started',
    title: ['Ready to transform', 'your social media?'],
    text: 'Join hundreds of successful businesses that trust us with their social media presence.',
    primary: 'Start your journey',
    secondary: 'Schedule a consultation',
    whatsappPrimary: "Hi! I'd like to start with social media management from Future Holders.",
    whatsappSecondary: 'Hi! I would like to schedule a social media consultation with Future Holders.',
  },
  sw: {
    label: 'Anza sasa',
    title: ['Uko tayari kubadilisha', 'mitandao yako ya kijamii?'],
    text: 'Jiunge na mamia ya biashara zilizofanikiwa zinazotuamini na huduma zetu za mitandao ya kijamii.',
    primary: 'Anza safari yako',
    secondary: 'Panga ushauri',
    whatsappPrimary: 'Hujambo! Ningependa kuanza usimamizi wa mitandao ya kijamii na Future Holders.',
    whatsappSecondary: 'Hujambo! Ningependa kupanga ushauri wa mitandao ya kijamii na Future Holders.',
  },
};

export default function CTASection() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <section aria-labelledby="social-cta-title" className="relative overflow-hidden" style={{ background: SURFACE }}>
      <AfricanPattern id="socialCtaPattern" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 pt-8 items-end" style={{ borderTop: `1px solid ${RULE}` }}>
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <div style={{ width: '3rem', height: 3, background: AMBER, borderRadius: 2, flexShrink: 0 }} />
              <span className="font-display font-bold text-sm" style={{ color: AMBER, letterSpacing: '0.04em' }}>
                {c.label}
              </span>
            </div>
            <h2
              id="social-cta-title"
              className="font-display font-extrabold"
              style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4rem)', lineHeight: 1, color: CREAM, letterSpacing: '-0.03em' }}
            >
              {c.title[0]} <span style={{ color: AMBER }}>{c.title[1]}</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="leading-relaxed mb-6" style={{ color: MUTED, fontSize: '1.05rem' }}>{c.text}</p>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <button
                type="button"
                onClick={() => openWhatsApp(c.whatsappPrimary)}
                className={`inline-flex items-center justify-center rounded font-display font-extrabold text-sm transition-opacity hover:opacity-90 ${focusRing}`}
                style={{ background: AMBER, color: DARK, padding: '1rem 1.75rem' }}
              >
                {c.primary}
              </button>
              <button
                type="button"
                onClick={() => openWhatsApp(c.whatsappSecondary)}
                className={`inline-flex items-center justify-center rounded font-display font-bold text-sm transition-colors hover:bg-amber/10 ${focusRing}`}
                style={{ border: `2px solid ${BORDER_S}`, color: AMBER, padding: '1rem 1.75rem' }}
              >
                {c.secondary}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}