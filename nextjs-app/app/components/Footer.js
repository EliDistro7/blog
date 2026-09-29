'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// ── Design tokens (same set as ServicesShowcase) ─────────────────────────────
const AMBER = '#F59E0B';
const GOLD  = '#D4AF37';
const DARK  = '#0D0903';
const CREAM = '#F5F0E8';
const MUTED = 'rgba(245,240,232,0.72)'; // body + links (AA on DARK)
const FAINT = 'rgba(245,240,232,0.56)'; // legal row (still AA on DARK)
const RULE  = 'rgba(245,240,232,0.16)';

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
    description:
      'Branding, websites, social media and door-to-door sales from one local team, serving businesses across Tanzania.',
    navLabel: 'Footer',
    quickLinks: 'Explore',
    connect: 'Follow us',
    connectNote: 'Updates and ideas for growing your business.',
    email: 'Email us',
    copyright: 'All rights reserved.',
    privacy: 'Privacy policy',
    terms: 'Terms of service',
    legalLabel: 'Legal',
    top: 'Back to top',
    links: [
      { name: 'Services',  path: '/services'  },
      { name: 'About',     path: '/about'     },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Contact',   path: '/contact'   },
    ],
  },
  sw: {
    description:
      'Utambulisho wa brand, tovuti, mitandao ya kijamii na mauzo ya nyumba kwa nyumba kutoka timu moja ya hapa nchini, kwa biashara kote Tanzania.',
    navLabel: 'Kijachini',
    quickLinks: 'Gundua',
    connect: 'Tufuate',
    connectNote: 'Habari na mawazo ya kukuza biashara yako.',
    email: 'Tutumie barua pepe',
    copyright: 'Haki zote zimehifadhiwa.',
    privacy: 'Sera ya faragha',
    terms: 'Masharti ya huduma',
    legalLabel: 'Kisheria',
    top: 'Rudi juu',
    links: [
      { name: 'Huduma',      path: '/services'  },
      { name: 'Kuhusu',      path: '/about'     },
      { name: 'Portfolio',   path: '/portfolio' },
      { name: 'Mawasiliano', path: '/contact'   },
    ],
  },
};

// ── Data ──────────────────────────────────────────────────────────────────────
const EMAIL = 'info@futureholder.pro';

const socials = [
  { Icon: Facebook,  href: 'https://www.facebook.com/f.hmarketers',                                                name: 'Facebook'  },
  { Icon: Instagram, href: 'https://www.instagram.com/fh_marketers/',                                              name: 'Instagram' },
  { Icon: Twitter,   href: 'https://x.com/fh_marketers',                                                           name: 'X'         },
  { Icon: Linkedin,  href: 'https://www.linkedin.com/company/future-holders-company-limited/posts/?feedView=all',  name: 'LinkedIn'  },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function Footer() {
  const { language } = useLanguage();
  const lang = language === 'sw' ? 'sw' : 'en';
  const t = copy[lang];

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 200);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: DARK }}>
      <AfricanPattern id="footerPattern" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ═════════════ Main columns ═════════════ */}
        <div
          className="grid lg:grid-cols-12 gap-12 lg:gap-8 pt-12 pb-14 lg:pb-16 mt-0"
          style={{ borderTop: `1px solid ${RULE}` }}
        >
          {/* Brand + standfirst */}
          <div className="lg:col-span-5">
            <Link href="/" className={`inline-flex items-center gap-3 mb-6 ${focusRing}`}>
              {/* Adjacent text names the link, so the logo is decorative */}
              <Image
                src="/logo.png"
                alt=""
                width={96}
                height={48}
                className="h-12 w-auto object-contain"
              />
              <span
                className="font-display font-extrabold"
                style={{ color: CREAM, fontSize: '1.5rem', letterSpacing: '-0.025em', lineHeight: 1 }}
              >
                Future Holders
              </span>
            </Link>

            <p className="leading-relaxed max-w-md" style={{ color: MUTED, fontSize: '1rem' }}>
              {t.description}
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className={`group inline-flex items-center gap-3 mt-6 ${focusRing}`}
              style={{ color: CREAM }}
            >
              <Mail size={18} style={{ color: AMBER }} aria-hidden="true" />
              <span className="sr-only">{t.email}: </span>
              <span
                className="font-display font-semibold text-sm border-b border-transparent group-hover:border-current motion-safe:transition-colors"
              >
                {EMAIL}
              </span>
            </a>
          </div>

          {/* Explore */}
          <nav className="lg:col-span-3 lg:col-start-7" aria-label={t.navLabel}>
            <div className="flex items-center gap-3 mb-5">
              <div style={{ width: '2rem', height: 3, background: AMBER, borderRadius: 2, flexShrink: 0 }} />
              <h2 className="font-display font-bold text-sm" style={{ color: AMBER, letterSpacing: '0.04em' }}>
                {t.quickLinks}
              </h2>
            </div>

            <ul style={{ borderTop: `1px solid ${RULE}` }}>
              {t.links.map((link) => (
                <li key={link.path} style={{ borderBottom: `1px solid ${RULE}` }}>
                  <Link
                    href={link.path}
                    className={`block py-3 font-display font-semibold text-sm text-cream hover:text-amber motion-safe:transition-colors ${focusRing}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Follow */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-5">
              <div style={{ width: '2rem', height: 3, background: GOLD, borderRadius: 2, flexShrink: 0 }} />
              <h2 className="font-display font-bold text-sm" style={{ color: GOLD, letterSpacing: '0.04em' }}>
                {t.connect}
              </h2>
            </div>

            <ul className="flex flex-wrap gap-3 mb-5">
              {socials.map(({ Icon, href, name }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className={`flex items-center justify-center rounded text-cream hover:text-amber motion-safe:transition-colors ${focusRing}`}
                    style={{ width: '2.75rem', height: '2.75rem', border: `1px solid ${RULE}` }}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>

            <p className="text-sm leading-snug" style={{ color: MUTED }}>
              {t.connectNote}
            </p>
          </div>
        </div>

        {/* ═════════════ Legal row ═════════════ */}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-6"
          style={{ borderTop: `1px solid ${RULE}` }}
        >
          <p className="text-xs" style={{ color: FAINT }}>
            © {new Date().getFullYear()} Future Holders. {t.copyright}
          </p>

          <nav aria-label={t.legalLabel}>
            <ul className="flex items-center">
              {[
                { label: t.privacy, path: '/privacy' },
                { label: t.terms,   path: '/terms'   },
              ].map((item, i) => (
                <li
                  key={item.path}
                  className={i > 0 ? 'pl-4 ml-4' : ''}
                  style={i > 0 ? { borderLeft: `1px solid ${RULE}` } : undefined}
                >
                  <Link
                    href={item.path}
                    className={`text-xs hover:text-amber motion-safe:transition-colors ${focusRing}`}
                    style={{ color: FAINT }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* ═════════════ Back to top ═════════════ */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label={t.top}
          className={`fixed bottom-6 right-6 z-50 flex items-center justify-center rounded hover:opacity-90 motion-safe:transition-opacity ${focusRing}`}
          style={{
            width: '2.75rem',
            height: '2.75rem',
            background: AMBER,
            color: DARK,
          }}
        >
          <ArrowUp size={18} aria-hidden="true" />
        </button>
      )}
    </footer>
  );
}