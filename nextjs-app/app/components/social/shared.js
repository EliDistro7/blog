'use client';

import { useLanguage } from '@/context/LanguageContext';

// ── Design tokens (same set as ServicesShowcase / Header / Footer) ───────────
export const AMBER    = '#F59E0B';
export const GOLD     = '#D4AF37';
export const SURFACE  = '#1A1208';
export const DARK     = '#0D0903';
export const CREAM    = '#F5F0E8';
export const MUTED    = 'rgba(245,240,232,0.72)';
export const RULE     = 'rgba(245,240,232,0.16)';
export const BORDER_S = 'rgba(245,158,11,0.35)';

export const WHATSAPP_NUMBER = '255745787370';
export const PHONE_HREF = 'tel:+255745787370';

export const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber';

// ── Helpers ───────────────────────────────────────────────────────────────────
export const openWhatsApp = (message) =>
  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    '_blank',
    'noopener,noreferrer'
  );

// Resolves the language and a `tr({ en, sw })` helper, same pattern as ServicesShowcase
export const useLang = () => {
  const { language } = useLanguage();
  const lang = language === 'sw' ? 'sw' : 'en';
  const tr = (obj) => (obj ? obj[lang] ?? obj.en : '');
  return { lang, tr };
};

// ── Subtle African pattern (quiet, decorative) ───────────────────────────────
export const AfricanPattern = ({ id }) => (
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

// ── Section heading block (kicker + h2 + subtitle), used by every section ────
export const SectionHead = ({ id, label, title, subtitle }) => (
  <div
    className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pt-8 mb-12"
    style={{ borderTop: `1px solid ${RULE}` }}
  >
    <div>
      <span className="font-display font-bold text-sm" style={{ color: AMBER, letterSpacing: '0.04em' }}>
        {label}
      </span>
      <h2
        id={id}
        className="font-display font-extrabold mt-3"
        style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4rem)', lineHeight: 1, color: CREAM, letterSpacing: '-0.03em' }}
      >
        {title}
      </h2>
    </div>
    <p className="leading-relaxed lg:max-w-sm" style={{ color: MUTED, fontSize: '1rem' }}>
      {subtitle}
    </p>
  </div>
);