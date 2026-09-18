'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

// ── Design tokens ─────────────────────────────────────────────────────────────
const AMBER    = '#F59E0B';
const GOLD     = '#D4AF37';
const SURFACE  = '#1A1208';
const DARK     = '#0D0903';
const CREAM    = '#F5F0E8';
const MUTED    = 'rgba(245,240,232,0.55)';
const FAINT    = 'rgba(245,240,232,0.3)';
const BORDER   = 'rgba(245,158,11,0.2)';
const BORDER_S = 'rgba(245,158,11,0.35)';

// ── African geometric SVG pattern ─────────────────────────────────────────────
const AfricanPattern = () => (
  <svg
    width="100%" height="100%"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 pointer-events-none"
    style={{ opacity: 0.045 }}
  >
    <defs>
      <pattern id="footerPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        <polygon points="30,4 56,30 30,56 4,30" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
        <polygon points="30,16 44,30 30,44 16,30" fill="none" stroke="#D4AF37" strokeWidth="1" />
        <line x1="30" y1="0" x2="30" y2="60" stroke="#F59E0B" strokeWidth="0.5" />
        <line x1="0"  y1="30" x2="60" y2="30" stroke="#F59E0B" strokeWidth="0.5" />
        <circle cx="30" cy="30" r="2.5" fill="#F59E0B" />
        <circle cx="0"  cy="0"  r="1.5" fill="#D4AF37" />
        <circle cx="60" cy="0"  r="1.5" fill="#D4AF37" />
        <circle cx="0"  cy="60" r="1.5" fill="#D4AF37" />
        <circle cx="60" cy="60" r="1.5" fill="#D4AF37" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#footerPattern)" />
  </svg>
);

export default function Footer() {
  const { language } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const content = {
    en: {
      description: 'Bridging technology and hospitality for complete business solutions across Tanzania.',
      copyright: 'All rights reserved.',
      quickLinks: 'Quick Links',
      connect: 'Connect With Us',
      follow: 'Follow us for updates and insights',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      links: [
        { name: 'Services',  path: '/services'  },
        { name: 'About',     path: '/about'     },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Contact',   path: '/contact'   },
      ],
    },
    sw: {
      description: 'Teknolojia na ukarimu kwa ufumbuzi kamili wa biashara kote Tanzania.',
      copyright: 'Haki zote zimehifadhiwa.',
      quickLinks: 'Viungo vya Haraka',
      connect: 'Unganika Nasi',
      follow: 'Tufuate kwa habari na maarifa',
      privacy: 'Sera ya Faragha',
      terms: 'Masharti ya Huduma',
      links: [
        { name: 'Huduma',      path: '/services'  },
        { name: 'Portfolio',   path: '/portfolio' },
        { name: 'Mawasiliano', path: '/contact'   },
      ],
    },
  };

  const socials = [
    { icon: <Facebook  className="w-4 h-4" />, path: 'https://www.facebook.com/f.hmarketers',                                                                   name: 'Facebook'  },
    { icon: <Instagram className="w-4 h-4" />, path: 'https://www.instagram.com/fh_marketers/',                                                                  name: 'Instagram' },
    { icon: <Twitter   className="w-4 h-4" />, path: 'https://x.com/fh_marketers',                                                                              name: 'Twitter'   },
    { icon: <Linkedin  className="w-4 h-4" />, path: 'https://www.linkedin.com/company/future-holders-company-limited/posts/?feedView=all', name: 'LinkedIn'  },
  ];

  const t = content[language] ?? content.en;

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: DARK, fontFamily: "'Bricolage Grotesque', 'Inter', sans-serif" }}
    >
      {/* ── Backgrounds ─────────────────────────────────────────────────── */}
      <div
        className="absolute top-0 left-0 w-1/2 h-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(245,158,11,0.06), transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-1/3 h-1/3 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom right, rgba(212,175,55,0.05), transparent 70%)' }}
      />
      <AfricanPattern />

      {/* ── Top accent rule ──────────────────────────────────────────────── */}
      <div style={{ height: 3, background: `linear-gradient(to right, transparent, ${AMBER} 30%, ${GOLD} 70%, transparent)` }} />

      {/* ── Main content ────────────────────────────────────────────────── */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* ── Brand column ──────────────────────────────────────────── */}
          <div className="md:col-span-1">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="Future Holders"
                className="h-12 w-auto object-contain"
              />
              <span
                className="font-display font-extrabold uppercase tracking-tight"
                style={{ color: CREAM, fontSize: '1.1rem', letterSpacing: '-0.01em' }}
              >
                Future Holders
              </span>
            </Link>

            <p className="leading-relaxed mb-6" style={{ color: MUTED, fontSize: '0.875rem', maxWidth: '280px' }}>
              {t.description}
            </p>

            {/* Email */}
            <a
              href="mailto:info@futureholder.pro"
              className="inline-flex items-center gap-3 group"
            >
              <div
                className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(245,158,11,0.1)', border: `1px solid ${BORDER}` }}
              >
                <Mail className="w-3.5 h-3.5" style={{ color: AMBER }} />
              </div>
              <span
                className="font-display font-semibold uppercase"
                style={{ color: MUTED, fontSize: '0.7rem', letterSpacing: '0.08em', transition: 'color .2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = AMBER)}
                onMouseLeave={e => (e.currentTarget.style.color = MUTED)}
              >
                info@futureholders.pro
              </span>
            </a>
          </div>

          {/* ── Quick links ───────────────────────────────────────────── */}
          <div className="md:col-span-1">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: '2rem', height: '3px', background: AMBER, borderRadius: 2, flexShrink: 0 }} />
              <span
                className="font-display font-bold uppercase"
                style={{ color: AMBER, fontSize: '0.7rem', letterSpacing: '0.18em' }}
              >
                {t.quickLinks}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {t.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.path}
                  className="font-display font-bold uppercase transition-colors duration-200"
                  style={{ color: MUTED, fontSize: '0.72rem', letterSpacing: '0.08em', padding: '0.4rem 0' }}
                  onMouseEnter={e => (e.currentTarget.style.color = AMBER)}
                  onMouseLeave={e => (e.currentTarget.style.color = MUTED)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Socials ───────────────────────────────────────────────── */}
          <div className="md:col-span-1">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: '2rem', height: '3px', background: GOLD, borderRadius: 2, flexShrink: 0 }} />
              <span
                className="font-display font-bold uppercase"
                style={{ color: GOLD, fontSize: '0.7rem', letterSpacing: '0.18em' }}
              >
                {t.connect}
              </span>
            </div>

            <div className="flex gap-3 mb-5">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex items-center justify-center rounded transition-all duration-200"
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    background: 'rgba(245,158,11,0.08)',
                    border: `1px solid ${BORDER}`,
                    color: MUTED,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget ).style.borderColor = AMBER;
                    (e.currentTarget ).style.color = AMBER;
                    (e.currentTarget ).style.background = 'rgba(245,158,11,0.15)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget ).style.borderColor = BORDER;
                    (e.currentTarget ).style.color = MUTED;
                    (e.currentTarget ).style.background = 'rgba(245,158,11,0.08)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <p
              className="font-display font-semibold uppercase"
              style={{ color: FAINT, fontSize: '0.62rem', letterSpacing: '0.1em' }}
            >
              {t.follow}
            </p>
          </div>
        </div>

        {/* ── Divider ─────────────────────────────────────────────────── */}
        <div style={{ height: '1px', background: BORDER, marginBottom: '2rem' }} />

        {/* ── Copyright row ───────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="font-display font-semibold uppercase"
            style={{ color: FAINT, fontSize: '0.62rem', letterSpacing: '0.1em' }}
          >
            © {new Date().getFullYear()} Future Holders — {t.copyright}
          </p>

          <div className="flex items-center gap-2">
            {[
              { label: t.privacy, path: '/privacy' },
              { label: t.terms,   path: '/terms'   },
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span style={{ color: BORDER, fontSize: '0.6rem' }}>|</span>}
                <Link
                  href={item.path}
                  className="font-display font-semibold uppercase transition-colors duration-200"
                  style={{ color: FAINT, fontSize: '0.62rem', letterSpacing: '0.1em' }}
                  onMouseEnter={e => (e.currentTarget.style.color = AMBER)}
                  onMouseLeave={e => (e.currentTarget.style.color = FAINT)}
                >
                  {item.label}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom accent rule ───────────────────────────────────────────── */}
      <div style={{ height: 3, background: `linear-gradient(to right, ${AMBER}, ${GOLD} 50%, ${AMBER})` }} />

      {/* ── Scroll to top ────────────────────────────────────────────────── */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center rounded font-display font-extrabold transition-all duration-200"
          style={{
            width: '2.75rem',
            height: '2.75rem',
            background: AMBER,
            color: DARK,
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(245,158,11,0.4)',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = GOLD)}
          onMouseLeave={e => (e.currentTarget.style.background = AMBER)}
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </footer>
  );
}