'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import {
  AMBER, SURFACE, DARK, CREAM, MUTED, RULE, BORDER_S,
  focusRing, openWhatsApp, useLang,
} from './shared';
import { heroStats as defaultStats, currentClients as defaultClients } from './data';

const copy = {
  en: {
    badge: 'Social media services',
    title: ['Transform your', 'social presence'],
    subtitle:
      'Elevate your brand with professional social media management, stunning content creation, and data-driven strategies that deliver results.',
    primary: 'Get started today',
    secondary: 'View our work',
    whatsapp: "Hi! I'd like to talk about social media management with Future Holders.",
    carouselLabel: 'Client work',
    prev: 'Previous slide',
    next: 'Next slide',
    pause: 'Pause slideshow',
    play: 'Play slideshow',
    goTo: (n) => `Go to slide ${n}`,
    slideOf: (i, n) => `Slide ${i} of ${n}`,
    imageAlt: (name) => `${name}: social media content`,
  },
  sw: {
    badge: 'Huduma za mitandao ya kijamii',
    title: ['Badilisha', 'uwepo wako wa kijamii'],
    subtitle:
      'Inua brand yako na uongozi wa kitaalamu wa mitandao ya kijamii, uundaji wa maudhui ya kupendeza, na mikakati ya data inayotoa matokeo.',
    primary: 'Anza leo',
    secondary: 'Ona kazi yetu',
    whatsapp: 'Hujambo! Ningependa kuzungumzia usimamizi wa mitandao ya kijamii na Future Holders.',
    carouselLabel: 'Kazi za wateja',
    prev: 'Slaidi iliyotangulia',
    next: 'Slaidi inayofuata',
    pause: 'Simamisha maonyesho',
    play: 'Anzisha maonyesho',
    goTo: (n) => `Nenda kwenye slaidi ${n}`,
    slideOf: (i, n) => `Slaidi ${i} kati ya ${n}`,
    imageAlt: (name) => `${name}: maudhui ya mitandao ya kijamii`,
  },
};

const pad = (n) => String(n).padStart(2, '0');
const SLIDE_MS = 6000;

// ── Carousel: client work, with pause control, keyboard and reduced-motion support ──
function Carousel({ slides, c, lang }) {
  const n = slides.length;
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  // Respect reduced-motion: start paused
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPlaying(false);
  }, []);

  // Auto-advance; pauses on hover / focus / user pause. Depends on `index` so manual navigation resets the timer.
  useEffect(() => {
    if (!playing || hovered || focused || n < 2) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % n), SLIDE_MS);
    return () => clearTimeout(id);
  }, [playing, hovered, focused, index, n]);

  const go = (i) => setIndex((i + n) % n);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft')  { e.preventDefault(); go(index - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1); }
  };

  const current = slides[index];
  const autoRotating = playing && !hovered && !focused;

  const controlClass = `flex h-11 w-11 items-center justify-center rounded text-cream hover:text-amber motion-safe:transition-colors ${focusRing}`;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={c.carouselLabel}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false); }}
      onKeyDown={onKeyDown}
    >
      <div className="relative overflow-hidden rounded" style={{ aspectRatio: '4 / 5', background: DARK }}>
        {slides.map((s, i) => (
          <div
            key={s.company}
            role="group"
            aria-roledescription="slide"
            aria-label={c.slideOf(i + 1, n)}
            aria-hidden={i !== index}
            className={`absolute inset-0 motion-safe:transition-opacity motion-safe:duration-700 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={s.image}
              alt={c.imageAlt(s.company)}
              fill
              priority={i === 0}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        ))}
        {/* Hairline edge so the frame holds against the page */}
        <div className="absolute inset-0 pointer-events-none rounded" style={{ border: `1px solid ${RULE}` }} />
      </div>

      {/* Caption + controls */}
      <div
        className="mt-5 pt-4 flex items-start justify-between gap-4"
        style={{ borderTop: `2px solid ${AMBER}` }}
      >
        <div aria-live={autoRotating ? 'off' : 'polite'} className="min-w-0">
          <p className="font-display font-bold text-sm tabular-nums" style={{ color: MUTED }}>
            {pad(index + 1)} / {pad(n)}
          </p>
          <p
            className="font-display font-extrabold mt-1 truncate"
            style={{ color: CREAM, fontSize: '1.25rem', letterSpacing: '-0.02em' }}
          >
            {current.company}
          </p>
          <p className="text-sm mt-0.5" style={{ color: MUTED }}>{current.industry[lang]}</p>
        </div>

        <div className="flex flex-shrink-0 -mr-2">
          <button type="button" onClick={() => go(index - 1)} aria-label={c.prev} className={controlClass}>
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? c.pause : c.play}
            className={controlClass}
          >
            {playing ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}
          </button>
          <button type="button" onClick={() => go(index + 1)} aria-label={c.next} className={controlClass}>
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Position indicators */}
      <div className="flex gap-2 mt-3">
        {slides.map((s, i) => (
          <button
            key={s.company}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={c.goTo(i + 1)}
            aria-current={i === index}
            className={`group flex-1 py-2 ${focusRing}`}
          >
            <span
              className="block h-[3px] rounded motion-safe:transition-colors"
              style={{ background: i === index ? AMBER : RULE }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
export default function HeroSection({ heroStats = defaultStats, currentClients = defaultClients }) {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <section
      aria-labelledby="social-hero-title"
      className="pt-28 lg:pt-36 pb-16 lg:pb-24"
      style={{ background: SURFACE }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <div style={{ width: '3rem', height: 3, background: AMBER, borderRadius: 2, flexShrink: 0 }} />
              <span className="font-display font-bold text-sm" style={{ color: AMBER, letterSpacing: '0.04em' }}>
                {c.badge}
              </span>
            </div>

            <h1
              id="social-hero-title"
              className="font-display font-extrabold"
              style={{
                fontSize: 'clamp(2.75rem, 7vw, 5.75rem)',
                lineHeight: 0.98,
                letterSpacing: '-0.035em',
                color: CREAM,
              }}
            >
              {c.title[0]} <span style={{ color: AMBER }}>{c.title[1]}</span>
            </h1>

            <p
              className="leading-snug mt-8 mb-8 max-w-xl"
              style={{ color: CREAM, fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)' }}
            >
              {c.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => openWhatsApp(c.whatsapp)}
                className={`inline-flex items-center justify-center rounded font-display font-extrabold text-sm transition-opacity hover:opacity-90 ${focusRing}`}
                style={{ background: AMBER, color: DARK, padding: '1rem 1.75rem' }}
              >
                {c.primary}
              </button>
              <a
                href="#clients"
                className={`inline-flex items-center justify-center rounded font-display font-bold text-sm transition-colors hover:bg-amber/10 ${focusRing}`}
                style={{ border: `2px solid ${BORDER_S}`, color: AMBER, padding: '1rem 1.75rem' }}
              >
                {c.secondary}
              </a>
            </div>
          </div>

          {/* Carousel */}
          <div className="lg:col-span-5">
            <Carousel slides={currentClients} c={c} lang={lang} />
          </div>
        </div>

        {/* Proof */}
        <dl
          className="grid grid-cols-2 md:grid-cols-4 gap-y-8 mt-14 lg:mt-20 pt-8"
          style={{ borderTop: `1px solid ${RULE}` }}
        >
          {heroStats.map((s) => (
            <div
              key={s.number + s.label.en}
              className="flex flex-col-reverse justify-end pr-4 md:pl-6 md:first:pl-0 md:border-l md:first:border-l-0"
              style={{ borderColor: RULE }}
            >
              <dt className="mt-2 text-sm leading-snug" style={{ color: MUTED }}>{s.label[lang]}</dt>
              <dd
                className="font-display font-extrabold leading-none"
                style={{ color: CREAM, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em' }}
              >
                {s.number}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}