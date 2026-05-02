'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

// ── Design tokens ─────────────────────────────────────────────────────────────
const AMBER    = '#F59E0B';
const GOLD     = '#D4AF37';
const SURFACE  = '#1A1208';
const DARK     = '#0D0903';
const CREAM    = '#F5F0E8';
const MUTED    = 'rgba(245,240,232,0.55)';
const BORDER   = 'rgba(245,158,11,0.2)';
const BORDER_S = 'rgba(245,158,11,0.35)';

// ── African geometric SVG pattern ─────────────────────────────────────────────
const AfricanPattern = () => (
  <svg
    width="100%" height="100%"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 pointer-events-none"
    style={{ opacity: 0.055 }}
  >
    <defs>
      <pattern id="ctaPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
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
    <rect width="100%" height="100%" fill="url(#ctaPattern)" />
  </svg>
);

const DotGrid = () => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      opacity: 0.04,
      backgroundImage: 'radial-gradient(circle at 1px 1px, #F59E0B 1px, transparent 0)',
      backgroundSize: '40px 40px',
    }}
  />
);

export default function CTASection() {
  const { language } = useLanguage();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => { setIsClient(true); }, []);

  const content = {
    en: {
      badge: 'Get Started Today',
      title: { line1: 'Transform Your', accent: 'Vision', line2: 'Into Reality' },
      subtitle: 'Where innovative solutions meet exceptional execution. Join 40+ businesses that chose excellence.',
      button: 'Start Your Project',
      secondary: 'Free Consultation',
    },
    sw: {
      badge: 'Anza Leo',
      title: { line1: 'Badilisha', accent: 'Maono', line2: 'Yako Kuwa Ukweli' },
      subtitle: 'Suluhisho za ubunifu zinazokutana na utekelezaji wa hali ya juu. Jiunge na biashara 40+ zilizochagua ubora.',
      button: 'Anza Mradi Wako',
      secondary: 'Ushauri Bure',
    },
  };

  const t = content[language] ?? content.en;

  const handleWhatsApp = (msg) => {
    const text = msg ?? (
      language === 'sw'
        ? 'Hujambo! Ningependa kuanza mradi na Future Holders. Je, mnaweza kunisaidia?'
        : "Hi! I'd like to start a project with Future Holders. Can you help?"
    );
    window.open(`https://wa.me/255745787370?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: SURFACE, fontFamily: "'Bricolage Grotesque', 'Inter', sans-serif" }}
    >
      {/* ── Backgrounds ─────────────────────────────────────────────────── */}
      <div
        className="absolute top-0 right-0 w-2/3 h-2/3 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(245,158,11,0.09), transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom left, rgba(212,175,55,0.07), transparent 70%)' }}
      />
      <AfricanPattern />

      {/* ── Corner bracket decorations ───────────────────────────────────── */}
      <div
        className="absolute top-8 left-8 w-12 h-12 pointer-events-none"
        style={{ borderLeft: `2px solid ${BORDER_S}`, borderTop: `2px solid ${BORDER_S}` }}
      />
      <div
        className="absolute bottom-8 right-8 w-12 h-12 pointer-events-none"
        style={{ borderRight: `2px solid ${BORDER_S}`, borderBottom: `2px solid ${BORDER_S}` }}
      />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* ── Left: copy ────────────────────────────────────────────── */}
            <div className="order-2 lg:order-1">

              {/* Section label */}
              <div className="flex items-center gap-3 mb-6">
                <div style={{ width: '3rem', height: '3px', background: AMBER, borderRadius: 2, flexShrink: 0 }} />
                <span
                  className="font-display font-bold uppercase"
                  style={{ color: AMBER, fontSize: '0.75rem', letterSpacing: '0.2em' }}
                >
                  {t.badge}
                </span>
              </div>

              {/* Heading */}
              <h2
                className="font-display font-extrabold uppercase leading-none tracking-tight mb-6"
                style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4rem)', color: CREAM, letterSpacing: '-0.02em' }}
              >
                {t.title.line1}{' '}
                <span style={{ color: AMBER }}>{t.title.accent}</span>{' '}
                {t.title.line2}
              </h2>

              {/* Subtitle */}
              <p
                className="leading-relaxed mb-10"
                style={{ color: MUTED, fontSize: '1rem', maxWidth: '420px' }}
              >
                {t.subtitle}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleWhatsApp()}
                  className="font-display font-extrabold uppercase tracking-widest transition-opacity duration-200 hover:opacity-90 rounded"
                  style={{
                    background: AMBER,
                    color: DARK,
                    padding: '0.9rem 2rem',
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  {t.button}
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                <button
                  onClick={() => handleWhatsApp(
                    language === 'sw'
                      ? 'Hujambo! Ningependa ushauri bure kutoka Future Holders.'
                      : 'Hi! I would like a free consultation from Future Holders.'
                  )}
                  className="font-display font-bold uppercase tracking-widest transition-colors duration-200 rounded"
                  style={{
                    background: 'transparent',
                    border: `2px solid ${BORDER_S}`,
                    color: AMBER,
                    padding: '0.9rem 2rem',
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                    cursor: 'pointer',
                  }}
                >
                  {t.secondary}
                </button>
              </div>

              {/* Decorative dot row */}
              <div className="flex items-center gap-3 mt-10">
                {[AMBER, GOLD, AMBER].map((c, i) => (
                  <div
                    key={i}
                    style={{
                      width: i === 1 ? '1.5rem' : '0.4rem',
                      height: '0.4rem',
                      borderRadius: '2px',
                      background: c,
                      opacity: i === 1 ? 1 : 0.4,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* ── Right: image card ─────────────────────────────────────── */}
            <div className="order-1 lg:order-2">
              <div
                className="relative overflow-hidden group rounded"
                style={{
                  background: DARK,
                  border: `1px solid ${BORDER_S}`,
                  boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
                }}
              >
                {/* Top accent stripe */}
                <div style={{ height: 3, background: AMBER }} />

                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src="/images/client.jpeg"
                    alt="Future Holders client"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(13,9,3,0.75) 0%, rgba(13,9,3,0.15) 60%, transparent 100%)',
                    }}
                  />
                  {/* Watermark number */}
                  <div
                    className="absolute bottom-4 right-5 font-display font-black select-none pointer-events-none"
                    style={{ fontSize: '5rem', lineHeight: 1, color: 'rgba(245,158,11,0.1)', letterSpacing: '-0.04em' }}
                  >
                    01
                  </div>
                </div>

                {/* Card footer panel */}
                <div className="relative p-6">
                  <DotGrid />
                  <div className="relative flex items-center justify-between">
                    <div>
                      <p
                        className="font-display font-extrabold uppercase leading-tight"
                        style={{ color: CREAM, fontSize: '0.95rem', letterSpacing: '-0.01em' }}
                      >
                        Future Holders
                      </p>
                      <p
                        className="font-display font-bold uppercase mt-1"
                        style={{ color: AMBER, fontSize: '0.62rem', letterSpacing: '0.12em' }}
                      >
                        {language === 'sw' ? 'Wakala wa Kidijitali wa Tanzania' : "Tanzania's Digital Agency"}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {[AMBER, GOLD].map((c, i) => (
                        <div
                          key={i}
                          style={{ width: '0.4rem', height: '2rem', borderRadius: '2px', background: c, opacity: i === 1 ? 0.5 : 1 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat badges */}
              {isClient && (
                <>
                  <div
                    className="absolute -top-4 -right-4 font-display font-extrabold uppercase text-center rounded"
                    style={{
                      background: AMBER,
                      color: DARK,
                      padding: '0.6rem 0.9rem',
                      fontSize: '0.65rem',
                      letterSpacing: '0.08em',
                      boxShadow: '0 8px 24px rgba(245,158,11,0.35)',
                    }}
                  >
                    <div style={{ fontSize: '1.4rem', letterSpacing: '-0.02em', lineHeight: 1 }}>50+</div>
                    <div style={{ opacity: 0.7 }}>{language === 'sw' ? 'Tovuti' : 'Websites'}</div>
                  </div>
                  <div
                    className="absolute -bottom-4 -left-4 font-display font-extrabold uppercase text-center rounded"
                    style={{
                      background: DARK,
                      border: `2px solid ${BORDER_S}`,
                      color: GOLD,
                      padding: '0.6rem 0.9rem',
                      fontSize: '0.65rem',
                      letterSpacing: '0.08em',
                    }}
                  >
                    <div style={{ fontSize: '1.4rem', letterSpacing: '-0.02em', lineHeight: 1, color: CREAM }}>40+</div>
                    <div>{language === 'sw' ? 'Wateja' : 'Clients'}</div>
                  </div>
                </>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom accent rule ───────────────────────────────────────────── */}
      <div style={{ height: 3, background: `linear-gradient(to right, transparent, ${AMBER} 30%, ${GOLD} 70%, transparent)` }} />
    </section>
  );
}