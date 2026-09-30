'use client';

// @/app/components/door/DoorToDoorHero.js
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { heroStats } from '@/app/components/door/data';
import { useLanguage } from '@/context/LanguageContext';
import {
  AMBER, DARK, CREAM, MUTED, RULE, DOOR_IMAGES, openWhatsApp,
  btnPrimary, btnPrimaryStyle, btnGhost, btnGhostStyle,
} from './shared';

const copy = {
  en: {
    kicker: 'Personal connection, real results',
    title: 'Door-to-Door Marketing',
    accent: 'Door-to-Door',
    text:
      'Transform your business with professional door-to-door marketing. We create meaningful connections that drive real results and lasting customer relationships.',
    primary: 'Start your campaign',
    secondary: 'See pricing plans',
    imageAlt: 'Future Holders team talking with a customer at their door',
    caption: 'Door-to-door marketing in the field',
    whatsapp: "Hi! I'd like to start a door-to-door marketing campaign. Can you help?",
  },
  sw: {
    kicker: 'Ukaribu wa binafsi, matokeo halisi',
    title: 'Uuzaji Door to Door',
    accent: 'Door to Door',
    text:
      'Badilisha biashara yako kwa uuzaji wa kitaalamu wa mlango hadi mlango. Tunajenga mahusiano yenye maana yanayoleta matokeo halisi na wateja wa kudumu.',
    primary: 'Anza kampeni yako',
    secondary: 'Tazama mipango ya bei',
    imageAlt: 'Timu ya Future Holders ikizungumza na mteja mlangoni kwake',
    caption: 'Uuzaji nyumba kwa nyumba uwandani',
    whatsapp: 'Hujambo! Ningependa kuanza kampeni ya uuzaji wa mlango hadi mlango. Mnaweza kunisaidia?',
  },
};

const DoorToDoorHero = () => {
  const { language } = useLanguage();
  const lang = language === 'sw' ? 'sw' : 'en';
  const c = copy[lang];
  const tr = (obj) => (obj ? obj[lang] || obj.en : '');

  const i = c.title.indexOf(c.accent);

  return (
    <section aria-labelledby="door-hero-title">
      {/* ═════════ COVER: image first ═════════ */}
      <div
        className="relative w-full overflow-hidden h-[clamp(34rem,90vh,54rem)] lg:h-auto lg:aspect-[16/9] lg:min-h-[36rem] lg:max-h-[60rem]"
        style={{ background: DARK }}
      >
        <Image
          src={DOOR_IMAGES.hero}
          alt={c.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_30%]"
        />
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
                {c.kicker}
              </span>
            </div>

            <h1
              id="door-hero-title"
              className="font-display font-extrabold max-w-5xl"
              style={{
                fontSize: 'clamp(2.75rem, 8.5vw, 7rem)',
                lineHeight: 0.96,
                letterSpacing: '-0.035em',
                color: CREAM,
              }}
            >
              {i < 0 ? (
                c.title
              ) : (
                <>
                  {c.title.slice(0, i)}
                  <span style={{ color: AMBER }}>{c.accent}</span>
                  {c.title.slice(i + c.accent.length)}
                </>
              )}
            </h1>
          </div>
        </div>

        <p
          className="hidden md:block absolute right-8 top-28 text-xs italic"
          style={{ color: 'rgba(245,240,232,0.8)', textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}
        >
          {c.caption}
        </p>
      </div>

 
    </section>
  );
};

export default DoorToDoorHero;
