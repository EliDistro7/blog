'use client';

// @/app/components/tender/Hero.js
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import {
  AMBER, DARK, CREAM, MUTED, RULE,
  IMAGES, openWhatsApp,
  btnPrimary, btnPrimaryStyle, btnGhost, btnGhostStyle,
} from './shared';

const copy = {
  en: {
    secondary: 'View our results',
    imageAlt: 'A tender proposal being prepared at a desk',
    whatsapp: "Hi! I'd like help with a tender application. Can we talk?",
  },
  sw: {
    secondary: 'Tazama matokeo yetu',
    imageAlt: 'Ombi la zabuni likiandaliwa mezani',
    whatsapp: 'Hujambo! Ningependa msaada wa ombi la zabuni. Tunaweza kuzungumza?',
  },
};

const TenderHeroSection = ({ language, heroStats }) => {
  const lang = language === 'sw' ? 'sw' : 'en';
  const content = heroStats[lang];
  const c = copy[lang];

  // Highlight the key phrase in amber when the data provides `titleAccent`
  const renderTitle = () => {
    const { title, titleAccent } = content;
    const i = titleAccent ? title.indexOf(titleAccent) : -1;
    if (i < 0) return title;
    return (
      <>
        {title.slice(0, i)}
        <span style={{ color: AMBER }}>{titleAccent}</span>
        {title.slice(i + titleAccent.length)}
      </>
    );
  };

  return (
    <section aria-labelledby="tender-hero-title">
      {/* ═════════ COVER: image first ═════════ */}
      <div
        className="relative w-full overflow-hidden h-[clamp(34rem,90vh,54rem)] lg:h-auto lg:aspect-[16/9] lg:min-h-[36rem] lg:max-h-[60rem]"
        style={{ background: DARK }}
      >
        <Image
          src={IMAGES.hero}
          alt={c.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_40%]"
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-10 lg:pb-6">
            <div className="flex items-center gap-3 mb-5">
              <div style={{ width: '3rem', height: 3, background: AMBER, borderRadius: 2, flexShrink: 0 }} />
              <span className="font-display font-bold text-sm" style={{ color: AMBER, letterSpacing: '0.04em' }}>
                {content.kicker}
              </span>
            </div>

            <h1
              id="tender-hero-title"
              className="font-display font-extrabold max-w-5xl"
              style={{
                fontSize: 'clamp(2.5rem, 7.5vw, 6.25rem)',
                lineHeight: 0.98,
                letterSpacing: '-0.035em',
                color: CREAM,
              }}
            >
              {renderTitle()}
            </h1>
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default TenderHeroSection;
