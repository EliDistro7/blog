'use client';

// @/app/components/tender/shared.js
// One home for the tokens, helpers and small building blocks that every
// tender section uses (previously copy-pasted across files in the main site).

import React from 'react';
import Image from 'next/image';

// ── Design tokens (same set as ServicesShowcase / ClientsShowcase) ───────────
export const AMBER    = '#F59E0B';
export const GOLD     = '#D4AF37';
export const SURFACE  = '#1A1208';
export const DARK     = '#0D0903';
export const CREAM    = '#F5F0E8';
export const MUTED    = 'rgba(245,240,232,0.72)';
export const RULE     = 'rgba(245,240,232,0.16)';
export const BORDER_S = 'rgba(245,158,11,0.35)';

export const WHATSAPP_NUMBER = '255745787370';
export const CONTACT = {
  phone: '+255 745 787 370',
  phoneHref: 'tel:+255745787370',
  email: 'info@futureholder.pro',
};

export const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber';

export const openWhatsApp = (message) =>
  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    '_blank',
    'noopener,noreferrer'
  );

// Shared button styles ────────────────────────────────────────────────────────
export const btnPrimary = `inline-flex items-center justify-center gap-2 rounded font-display font-extrabold text-sm transition-opacity hover:opacity-90 ${focusRing}`;
export const btnPrimaryStyle = { background: AMBER, color: DARK, padding: '1rem 1.75rem' };
export const btnGhost = `inline-flex items-center justify-center gap-2 rounded font-display font-bold text-sm transition-colors hover:bg-amber/10 ${focusRing}`;
export const btnGhostStyle = { border: `2px solid ${BORDER_S}`, color: AMBER, padding: '1rem 1.75rem' };

// ── Images ───────────────────────────────────────────────────────────────────
// Every photo lives here so swapping one is a one-line change.
// Later, replace any of these with a local file, e.g. '/tender/hero.jpg'.
// Remote images need next.config: images.remotePatterns -> images.unsplash.com
const u = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const IMAGES = {
  hero:     u('1454165804606-c3d57bc86b40', 2000),
  services: u('1450101499163-c8848c66ca85', 1200),
  process:  u('1522071820081-009f0129c71c', 2000),
  faq:      u('1521737604893-d14cc237f11d', 1000),
  cta:      u('1497366811353-6870744d04b2', 2000),
  // Order matches tenderTypes.types
  types: [
    u('1486406146926-c627a92ad1ab', 1400), // Government
    u('1497366216548-37526070297c', 1400), // Private sector
    u('1526304640581-d334cdbbf45e', 1400), // International
    u('1504307651254-35680f356dfd', 1400), // Construction
  ],
  // Order matches successfulTenders.tenders
  success: [
    u('1558494949-ef010cbdcc31', 1000), // IT infrastructure
    u('1541888946425-d81bb19240f5', 1000), // Water / municipal works
    u('1509391366360-2e959784a276', 1000), // Solar
  ],
};

// ── Subtle African pattern ───────────────────────────────────────────────────
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

// ── Section head: hairline, amber label, big h2, subtitle on the right ───────
export const SectionHead = ({ id, label, title, subtitle }) => (
  <div
    className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pt-8 mb-12"
    style={{ borderTop: `1px solid ${RULE}` }}
  >
    <div>
      {label && (
        <span className="font-display font-bold text-sm" style={{ color: AMBER, letterSpacing: '0.04em' }}>
          {label}
        </span>
      )}
      <h2
        id={id}
        className="font-display font-extrabold mt-3"
        style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4rem)', lineHeight: 1, color: CREAM, letterSpacing: '-0.03em' }}
      >
        {title}
      </h2>
    </div>
    {subtitle && (
      <p className="leading-relaxed lg:max-w-sm" style={{ color: MUTED, fontSize: '1rem' }}>
        {subtitle}
      </p>
    )}
  </div>
);

// ── Photo frame: cropped image with a soft bottom shade ──────────────────────
export const Photo = ({ src, alt = '', sizes = '100vw', aspect, position, priority = false, className = '' }) => (
  <div
    className={`relative overflow-hidden rounded ${className}`}
    style={{ aspectRatio: aspect, background: DARK }}
  >
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover"
      style={position ? { objectPosition: position } : undefined}
    />
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'linear-gradient(to top, rgba(13,9,3,0.4), rgba(13,9,3,0) 55%)' }}
    />
    <div className="absolute inset-0 pointer-events-none rounded" style={{ border: `1px solid ${RULE}` }} />
  </div>
);
