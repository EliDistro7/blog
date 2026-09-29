'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

// ── Design tokens (same as ServicesShowcase / Header / Footer) ────────────────
const AMBER   = '#F59E0B';
const GOLD    = '#D4AF37';
const SURFACE = '#1A1208';
const DARK    = '#0D0903';
const CREAM   = '#F5F0E8';
const MUTED   = 'rgba(245,240,232,0.72)';
const RULE    = 'rgba(245,240,232,0.16)';

// ── African pattern ───────────────────────────────────────────────────────────
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
        <polygon points="30,4 56,30 30,56 4,30"   fill="none" stroke="#F59E0B" strokeWidth="1.5" />
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
    label:    'Our partners',
    title:    ['Brands that trust', 'our work'],
    subtitle: 'From industrial supply chains to national e-procurement — real businesses across Tanzania depend on Future Holders to build their presence and grow their reach.',
    caption:  'A selection of clients we are proud to serve',
  },
  sw: {
    label:    'Washirika wetu',
    title:    ['Brands zinazokuamini', 'kazi yetu'],
    subtitle: 'Kuanzia minyororo ya ugavi wa viwanda hadi ununuzi wa kidijitali wa kitaifa — biashara halisi kote Tanzania zinategemea Future Holders kujenga uwepo wao na kukuza wigo wao.',
    caption:  'Baadhi ya wateja tunaowafahamu kwa heshima',
  },
};

// ── Partner data ──────────────────────────────────────────────────────────────
// stripe: the 3px top accent colour. overlay: the bottom scrim tint.
const partners = [
  {
    id:      'simba',
    src:     '/partners/simba.jpeg',
    name:    'Simba',
    stripe:  AMBER,
    // light bg logo — darken overlay more so name pops
    overlay: 'linear-gradient(to top, rgba(13,9,3,0.92) 0%, rgba(13,9,3,0.35) 55%, rgba(13,9,3,0.1) 100%)',
    // white-bg image needs a tinted surface behind it
    imgBg:   'rgba(245,240,232,0.08)',
  },
  {
    id:      'alladin',
    src:     '/partners/alladin.jpeg',
    name:    'Alladin Event Supplies',
    stripe:  GOLD,
    overlay: 'linear-gradient(to top, rgba(13,9,3,0.88) 0%, rgba(13,9,3,0.2) 60%, rgba(13,9,3,0) 100%)',
    imgBg:   'transparent',
  },
  {
    id:      'nest',
    src:     '/partners/nest.jpeg',
    name:    'NeST',
    stripe:  '#00A3DD',
    overlay: 'linear-gradient(to top, rgba(13,9,3,0.92) 0%, rgba(13,9,3,0.35) 55%, rgba(13,9,3,0.1) 100%)',
    imgBg:   'rgba(245,240,232,0.06)',
  },
  {
    id:      'mikaela',
    src:     '/partners/mikaela.jpeg',
    name:    'Mikaela',
    stripe:  '#B5420A',
    overlay: 'linear-gradient(to top, rgba(13,9,3,0.92) 0%, rgba(13,9,3,0.35) 55%, rgba(13,9,3,0.1) 100%)',
    imgBg:   'rgba(245,240,232,0.06)',
  },
  {
    id:      'fasteners',
    src:     '/partners/fasteners.jpeg',
    name:    'Tanzania Fasteners Ltd',
    stripe:  '#4A6BC4',
    overlay: 'linear-gradient(to top, rgba(13,9,3,0.85) 0%, rgba(13,9,3,0.1) 60%, rgba(13,9,3,0) 100%)',
    imgBg:   'transparent',  // dark bg image — no extra tint needed
  },
  {
    id:      'aikam',
    src:     '/partners/aikam.jpeg',
    name:    'Aikam Logistics',
    stripe:  '#E05A00',  // brand orange
    overlay: 'linear-gradient(to top, rgba(13,9,3,0.85) 0%, rgba(13,9,3,0.1) 60%, rgba(13,9,3,0) 100%)',
    imgBg:   'transparent',  // dark cinematic bg — no tint
  },
];

// ── Layout plan ───────────────────────────────────────────────────────────────
// 6 cards:  [large | large]        ← top row, 2-up
//           [medium | medium | medium]  ← bottom row, 3-up  (was [3 secondary])
// On mobile everything stacks to 1 column.

// ── Component ─────────────────────────────────────────────────────────────────
export default function TrustedPartners() {
  const { language } = useLanguage();
  const lang = language === 'sw' ? 'sw' : 'en';
  const c    = copy[lang];

  const [p0, p1, p2, p3, p4, p5] = partners;

  return (
    <section
      aria-labelledby="partners-title"
      className="relative overflow-hidden pb-24 scroll-mt-24"
      style={{ background: SURFACE }}
    >
      <AfricanPattern id="partnersPattern" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section head ─────────────────────────────────────────────── */}
        <div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pt-8 mb-12"
          style={{ borderTop: `1px solid ${RULE}` }}
        >
          <div>
            <span
              className="font-display font-bold text-sm"
              style={{ color: AMBER, letterSpacing: '0.04em' }}
            >
              {c.label}
            </span>
            <h2
              id="partners-title"
              className="font-display font-extrabold mt-3"
              style={{
                fontSize:      'clamp(2.25rem, 5.5vw, 4rem)',
                lineHeight:    1,
                color:         CREAM,
                letterSpacing: '-0.03em',
              }}
            >
              {c.title[0]}{' '}
              <span style={{ color: AMBER }}>{c.title[1]}</span>
            </h2>
          </div>

          <p
            className="leading-relaxed lg:max-w-sm"
            style={{ color: MUTED, fontSize: '1rem' }}
          >
            {c.subtitle}
          </p>
        </div>

        {/* ── Top row — 2 large cards ───────────────────────────────────── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px mb-px"
          style={{ background: RULE }}
        >
          <PartnerCard partner={p0} size="large" />
          <PartnerCard partner={p1} size="large" />
        </div>

        {/* ── Bottom row — 4 medium cards ───────────────────────────────── */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: RULE, borderBottom: `1px solid ${RULE}` }}
        >
          <PartnerCard partner={p2} size="medium" />
          <PartnerCard partner={p3} size="medium" />
          <PartnerCard partner={p4} size="medium" />
          <PartnerCard partner={p5} size="medium" />
        </div>

        {/* ── Magazine caption ─────────────────────────────────────────── */}
        <p
          className="mt-6 text-xs italic text-right"
          style={{ color: 'rgba(245,240,232,0.35)' }}
        >
          {c.caption}
        </p>

      </div>
    </section>
  );
}


function PartnerCard({
  partner,
  size,
}) {
  const height = size === 'large' ? '20rem' : '14rem';
  const nameSz = size === 'large' ? '1.65rem' : '1.1rem';

  return (
    <article
      className="group relative overflow-hidden"
      style={{ background: partner.imgBg || DARK, height }}
    >
      {/* 3px top accent stripe */}
      <div
        className="absolute inset-x-0 top-0 z-10"
        style={{ height: 3, background: partner.stripe, flexShrink: 0 }}
      />

      {/* Full-cover logo image */}
      <Image
        src={partner.src}
        alt={partner.name}
        fill
        sizes={
          size === 'large'
            ? '(min-width: 768px) 50vw, 100vw'
            : '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'
        }
        className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.04]"
      />

      {/* Bottom scrim so the name is always legible */}
      <div
        className="absolute inset-0"
        style={{ background: partner.overlay }}
      />

      {/* Name only — bold, bottom-left, no decoration */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-5">
        <h3
          className="font-display font-extrabold leading-tight"
          style={{
            color:         CREAM,
            fontSize:      nameSz,
            letterSpacing: '-0.025em',
            textShadow:    '0 2px 12px rgba(0,0,0,0.6)',
          }}
        >
          {partner.name}
        </h3>
      </div>
    </article>
  );
}