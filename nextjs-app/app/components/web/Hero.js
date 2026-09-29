'use client';

import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';
import {
  AMBER, SURFACE, DARK, CREAM, MUTED, RULE, BORDER_S,
  focusRing, openWhatsApp, useLang,
} from './shared';

const copy = {
  en: {
    badge: 'Professional web development',
    title: ['Build your', 'digital presence'],
    subtitle:
      'From stunning websites to powerful web applications, we create digital solutions that drive results and grow your business.',
    primary: 'Get a quote',
    secondary: 'View our portfolio',
    whatsapp: "Hi! I'd like a quote for a website from Future Holders.",
    stats: [
      { value: '50+', label: 'Websites delivered' },
      { value: '40+', label: 'Happy clients' },
      { value: '10',  label: 'Days to launch, at the fastest' },
    ],
  },
  sw: {
    badge: 'Ujenzi wa tovuti wa kitaalamu',
    title: ['Jenga', 'uwepo wako wa kidijitali'],
    subtitle:
      'Kuanzia tovuti za kuvutia hadi programu-tumizi za wavuti zenye nguvu, tunaunda suluhisho za kidijitali zinazoleta matokeo na kukuza biashara yako.',
    primary: 'Pata bei',
    secondary: 'Tazama portfolio yetu',
    whatsapp: 'Hujambo! Ningependa bei ya tovuti kutoka Future Holders.',
    stats: [
      { value: '50+', label: 'Tovuti zilizotolewa' },
      { value: '40+', label: 'Wateja wenye furaha' },
      { value: '10',  label: 'Siku za haraka zaidi hadi kuzinduliwa' },
    ],
  },
};

export default function HeroSection() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <section aria-labelledby="web-hero-title" style={{ background: SURFACE }}>
      {/* ═════════════ COVER: image first ═════════════ */}
      <div
        className="relative w-full overflow-hidden h-[clamp(30rem,80vh,46rem)] lg:h-auto lg:aspect-[16/9] lg:min-h-[32rem] lg:max-h-[52rem]"
        style={{ background: DARK }}
      >
        <Image
          src="/services/web.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_30%]"
        />
        {/* Top scrim keeps the fixed header readable; bottom scrim carries the headline */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(13,9,3,0.55) 0%, rgba(13,9,3,0) 22%), linear-gradient(to top, rgba(26,18,8,1) 0%, rgba(26,18,8,0.75) 28%, rgba(26,18,8,0) 65%)',
          }}
        />

        <div className="absolute inset-x-0 bottom-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-10 lg:pb-14">
            <div className="flex items-center gap-3 mb-5">
              <div style={{ width: '3rem', height: 3, background: AMBER, borderRadius: 2, flexShrink: 0 }} />
              <span className="font-display font-bold text-sm" style={{ color: AMBER, letterSpacing: '0.04em' }}>
                {c.badge}
              </span>
            </div>

            <h1
              id="web-hero-title"
              className="font-display font-extrabold max-w-5xl"
              style={{
                fontSize: 'clamp(2.75rem, 8.5vw, 7rem)',
                lineHeight: 0.96,
                letterSpacing: '-0.035em',
                color: CREAM,
              }}
            >
              {c.title[0]}{' '}
              <span style={{ color: AMBER }}>{c.title[1]}</span>
            </h1>
          </div>
        </div>
      </div>

      {/* ═════════════ Standfirst + proof ═════════════ */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 pt-8" style={{ borderTop: `1px solid ${RULE}` }}>
          <div className="lg:col-span-6">
            <p className="leading-snug mb-8" style={{ color: CREAM, fontSize: 'clamp(1.15rem, 2vw, 1.5rem)' }}>
              {c.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => openWhatsApp(c.whatsapp)}
                className={`inline-flex items-center justify-center gap-2 rounded font-display font-extrabold text-sm transition-opacity hover:opacity-90 ${focusRing}`}
                style={{ background: AMBER, color: DARK, padding: '1rem 1.75rem' }}
              >
                <MessageCircle size={18} aria-hidden="true" />
                {c.primary}
              </button>
              <a
                href="#portfolio"
                className={`inline-flex items-center justify-center gap-2 rounded font-display font-bold text-sm transition-colors hover:bg-amber/10 ${focusRing}`}
                style={{ border: `2px solid ${BORDER_S}`, color: AMBER, padding: '1rem 1.75rem' }}
              >
                {c.secondary}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <dl className="lg:col-span-5 lg:col-start-8 grid grid-cols-3">
            {c.stats.map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col-reverse justify-end px-4 first:pl-0 sm:px-6"
                style={{ borderLeft: i === 0 ? 'none' : `1px solid ${RULE}` }}
              >
                <dt className="mt-2 text-sm leading-snug" style={{ color: MUTED }}>{s.label}</dt>
                <dd
                  className="font-display font-extrabold leading-none"
                  style={{ color: CREAM, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em' }}
                >
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}