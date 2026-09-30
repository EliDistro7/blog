'use client';

import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// ── Design tokens (same set as ServicesShowcase / Header / Footer) ───────────
const AMBER    = '#F59E0B';
const SURFACE  = '#1A1208';
const DARK     = '#0D0903';
const CREAM    = '#F5F0E8';
const MUTED    = 'rgba(245,240,232,0.72)';
const RULE     = 'rgba(245,240,232,0.16)';
const BORDER_S = 'rgba(245,158,11,0.35)';

const WHATSAPP_NUMBER = '255745787370';

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber';

// ── Subtle African pattern (quiet, decorative) ───────────────────────────────
const AfricanPattern = ({ id }) => (
  <svg
    width="100%" height="100%"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 pointer-events-none"
    style={{ opacity: 0.04 }}
    aria-hidden="true"
  >
    <defs>
      <pattern id={id} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        <polygon points="30,4 56,30 30,56 4,30" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
        <polygon points="30,16 44,30 30,44 16,30" fill="none" stroke="#D4AF37" strokeWidth="1" />
        <circle cx="30" cy="30" r="2.5" fill="#F59E0B" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${id})`} />
  </svg>
);

// ── Copy ──────────────────────────────────────────────────────────────────────
const copy = {
  en: {
    badge: 'Get started today',
    title: ['Transform your', 'vision', 'into reality'],
    subtitle:
      'Where innovative solutions meet exceptional execution. Join 40+ businesses that chose excellence.',
    primary: 'Start your project',
    secondary: 'Free consultation',
    imageAlt: 'A Future Holders client', // replace with a real description of the photo
    captionName: 'Future Holders',
    captionSub: "Tanzania's digital agency",
    whatsappPrimary: "Hi! I'd like to start a project with Future Holders. Can you help?",
    whatsappSecondary: 'Hi! I would like a free consultation from Future Holders.',
  },
  sw: {
    badge: 'Anza leo',
    title: ['Badilisha', 'maono', 'yako kuwa ukweli'],
    subtitle:
      'Ubora wa hali ya juu. Jiunge na biashara 40+ zilizochagua ubora.',
    primary: 'Anza mradi wako',
    secondary: 'Ushauri bure',
    imageAlt: 'Mteja wa Future Holders', // replace with a real description of the photo
    captionName: 'Future Holders',
    captionSub: 'Wakala wa kidijitali wa Tanzania',
    whatsappPrimary: 'Hujambo! Ningependa kuanza mradi na Future Holders. Je, mnaweza kunisaidia?',
    whatsappSecondary: 'Hujambo! Ningependa ushauri bure kutoka Future Holders.',
  },
};

// ── Component ─────────────────────────────────────────────────────────────────
export default function CTASection() {
  const { language } = useLanguage();
  const lang = language === 'sw' ? 'sw' : 'en';
  const c = copy[lang];

  const openWhatsApp = (message) =>
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );

  return (
    <section
      aria-labelledby="cta-title"
      className="relative overflow-hidden"
      style={{ background: SURFACE }}
    >
      <AfricanPattern id="ctaPattern" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-4">
        <div
          className="grid lg:grid-cols-12 gap-10 lg:gap-8 pt-4 items-center"
          style={{ borderTop: `1px solid ${RULE}` }}
        >
          {/* ── Copy ── */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-5">
              <div style={{ width: '3rem', height: 3, background: AMBER, borderRadius: 2, flexShrink: 0 }} />
              <span className="font-display font-bold text-sm" style={{ color: AMBER, letterSpacing: '0.04em' }}>
                {c.badge}
              </span>
            </div>

            <h2
              id="cta-title"
              className="font-display font-extrabold"
              style={{
                fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                color: CREAM,
              }}
            >
              {c.title[0]}{' '}
              <span style={{ color: AMBER }}>{c.title[1]}</span>{' '}
              {c.title[2]}
            </h2>

            <p
              className="leading-snug mt-6 mb-8 max-w-md"
              style={{ color: CREAM, fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)' }}
            >
              {c.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => openWhatsApp(c.whatsappPrimary)}
                className={`inline-flex items-center justify-center gap-2 rounded font-display font-extrabold text-sm transition-opacity hover:opacity-90 ${focusRing}`}
                style={{ background: AMBER, color: DARK, padding: '1rem 1.75rem' }}
              >
                <MessageCircle size={18} aria-hidden="true" />
                {c.primary}
              </button>

              <button
                type="button"
                onClick={() => openWhatsApp(c.whatsappSecondary)}
                className={`inline-flex items-center justify-center gap-2 rounded font-display font-bold text-sm transition-colors hover:bg-amber/10 ${focusRing}`}
                style={{ border: `2px solid ${BORDER_S}`, color: AMBER, padding: '1rem 1.75rem' }}
              >
                {c.secondary}
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* ── Photo with magazine caption ── */}
          <figure className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <div
              className="relative overflow-hidden rounded"
              style={{ aspectRatio: '4 / 3', background: DARK }}
            >
              <Image
                src="/images/client.jpeg"
                alt={c.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <figcaption
              className="mt-5 pt-4 flex items-baseline justify-between gap-4"
              style={{ borderTop: `2px solid ${AMBER}` }}
            >
              <span className="font-display font-extrabold" style={{ color: CREAM, fontSize: '1.15rem', letterSpacing: '-0.02em' }}>
                {c.captionName}
              </span>
              <span className="text-sm italic text-right" style={{ color: MUTED }}>
                {c.captionSub}
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}