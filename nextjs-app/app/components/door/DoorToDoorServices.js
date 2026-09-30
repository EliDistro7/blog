'use client';

// @/app/components/door/DoorToDoorServices.js
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';
import DoorToDoorHero from './DoorToDoorHero';
import DoorToDoorContent from './DoorToDoorContent';
import {
  SURFACE, AMBER, DARK, CREAM, MUTED, RULE, CONTACT, DOOR_IMAGES,
  openWhatsApp, btnPrimary, btnPrimaryStyle, btnGhost, btnGhostStyle,
} from './shared';

const copy = {
  en: {
    label: 'Get started',
    title: ['Ready to', 'get started', '?'],
    text: 'Transform your business with our proven door-to-door marketing strategies.',
    primary: 'Get a free consultation',
    secondary: 'Call us now',
    whatsapp: "Hi! I'd like a free consultation about door-to-door marketing.",
  },
  sw: {
    label: 'Anza sasa',
    title: ['Tayari', 'kuanza', '?'],
    text: 'Badilisha biashara yako kwa mikakati yetu iliyothibitishwa ya uuzaji wa mlango hadi mlango.',
    primary: 'Pata ushauri wa bure',
    secondary: 'Tupigie simu sasa',
    whatsapp: 'Hujambo! Ningependa ushauri wa bure kuhusu uuzaji wa mlango hadi mlango.',
  },
};

const DoorToDoorServices = () => {
  const { language } = useLanguage();
  const c = copy[language === 'sw' ? 'sw' : 'en'];

  return (
    <div className="min-h-screen" style={{ background: SURFACE }}>
      <DoorToDoorHero />
      <DoorToDoorContent />

      {/* ═════════ Closing CTA ═════════ */}
      <section aria-labelledby="door-cta-title" className="relative overflow-hidden" style={{ background: DARK }}>
        <Image src={DOOR_IMAGES.cta} alt="" fill sizes="100vw" className="object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(26,18,8,1) 0%, rgba(13,9,3,0.88) 35%, rgba(13,9,3,0.94) 100%)',
          }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 pt-8" style={{ borderTop: `1px solid ${RULE}` }}>
            <div className="lg:col-span-7">
              <span className="font-display font-bold text-sm" style={{ color: AMBER, letterSpacing: '0.04em' }}>
                {c.label}
              </span>
              <h2
                id="door-cta-title"
                className="font-display font-extrabold mt-3"
                style={{ fontSize: 'clamp(2.5rem, 6.5vw, 5rem)', lineHeight: 0.98, color: CREAM, letterSpacing: '-0.035em' }}
              >
                {c.title[0]} <span style={{ color: AMBER }}>{c.title[1]}</span>
                {c.title[2]}
              </h2>
            </div>

            <div className="lg:col-span-4 lg:col-start-9 lg:self-end">
              <p className="leading-relaxed mb-6" style={{ color: MUTED, fontSize: '1.05rem' }}>{c.text}</p>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => openWhatsApp(c.whatsapp)}
                  className={btnPrimary}
                  style={btnPrimaryStyle}
                >
                  {c.primary}
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
                <a href={CONTACT.phoneHref} className={btnGhost} style={btnGhostStyle}>
                  {c.secondary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoorToDoorServices;
