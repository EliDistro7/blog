'use client';

// @/app/components/tender/CTA.js
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import {
  AMBER, DARK, CREAM, MUTED, RULE, IMAGES, CONTACT,
  openWhatsApp, focusRing,
  btnPrimary, btnPrimaryStyle, btnGhost, btnGhostStyle,
} from './shared';

const copy = {
  en: {
    label: 'Get started',
    title: ['Ready to win your', 'next tender', '?'],
    text:
      'Join the businesses that trust us with their tender applications. Get started today and increase your chances of winning.',
    primary: 'Start your application',
    secondary: 'Schedule a consultation',
    contact: [
      { label: 'Call us' },
      { label: 'Email us' },
      { label: 'Visit us' },
    ],
    address: ['Dar es Salaam Business Center', 'Plot 123, Uhuru Road'],
    trust: 'Experience across public and private procurement',
    trustItems: ['TRA', 'TANROADS', 'PPRA', 'Local Councils'],
    whatsapp: "Hi! I'd like to start a tender application with Future Holders.",
    subject: 'Tender consultation request',
  },
  sw: {
    label: 'Anza sasa',
    title: ['Tayari kushinda', 'zabuni yako ijayo', '?'],
    text:
      'Jiunge na biashara zinazotuamini na maombi yao ya zabuni. Anza leo na ongeza uwezekano wako wa kushinda.',
    primary: 'Anza ombi lako',
    secondary: 'Ratiba shauri',
    contact: [
      { label: 'Tupigie simu' },
      { label: 'Tuandikie' },
      { label: 'Tutembelee' },
    ],
    address: ['Kituo cha Biashara Dar es Salaam', 'Kiwanja Na. 123, Barabara ya Uhuru'],
    trust: 'Uzoefu katika ununuzi wa umma na binafsi',
    trustItems: ['TRA', 'TANROADS', 'PPRA', 'Halmashauri'],
    whatsapp: 'Hujambo! Ningependa kuanza ombi la zabuni na Future Holders.',
    subject: 'Ombi la shauri kuhusu zabuni',
  },
};

const TenderCTASection = ({ language }) => {
  const lang = language === 'sw' ? 'sw' : 'en';
  const c = copy[lang];

  const linkStyle = { color: CREAM };

  return (
    <section aria-labelledby="tender-cta-title" className="relative overflow-hidden" style={{ background: DARK }}>
      {/* Photo backdrop */}
      <Image src={IMAGES.cta} alt="" fill sizes="100vw" className="object-cover" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(26,18,8,1) 0%, rgba(13,9,3,0.88) 35%, rgba(13,9,3,0.94) 100%)',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Headline + actions */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 pt-8" style={{ borderTop: `1px solid ${RULE}` }}>
          <div className="lg:col-span-7">
            <span className="font-display font-bold text-sm" style={{ color: AMBER, letterSpacing: '0.04em' }}>
              {c.label}
            </span>
            <h2
              id="tender-cta-title"
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
              <a
                href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(c.subject)}`}
                className={btnGhost}
                style={btnGhostStyle}
              >
                {c.secondary}
              </a>
            </div>
          </div>
        </div>

        {/* Contact details */}
        <dl className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 lg:mt-20 pt-8" style={{ borderTop: `1px solid ${RULE}` }}>
          <div>
            <dt className="font-display font-bold text-sm" style={{ color: AMBER }}>{c.contact[0].label}</dt>
            <dd className="mt-3">
              <a href={CONTACT.phoneHref} className={`font-display font-extrabold ${focusRing}`} style={{ ...linkStyle, fontSize: '1.4rem', letterSpacing: '-0.01em' }}>
                {CONTACT.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-display font-bold text-sm" style={{ color: AMBER }}>{c.contact[1].label}</dt>
            <dd className="mt-3">
              <a href={`mailto:${CONTACT.email}`} className={`font-display font-extrabold ${focusRing}`} style={{ ...linkStyle, fontSize: '1.4rem', letterSpacing: '-0.01em' }}>
                {CONTACT.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-display font-bold text-sm" style={{ color: AMBER }}>{c.contact[2].label}</dt>
            <dd className="mt-3 leading-relaxed" style={{ color: CREAM }}>
              {c.address[0]}
              <br />
              <span style={{ color: MUTED }}>{c.address[1]}</span>
            </dd>
          </div>
        </dl>

        {/* Trust line */}
        <div className="mt-16 pt-8 lg:flex lg:items-center lg:justify-between gap-8" style={{ borderTop: `1px solid ${RULE}` }}>
          <p className="text-sm mb-5 lg:mb-0" style={{ color: MUTED }}>{c.trust}</p>
          <ul className="flex flex-wrap gap-x-10 gap-y-3">
            {c.trustItems.map((t) => (
              <li key={t} className="font-display font-extrabold tracking-wider" style={{ color: CREAM, opacity: 0.85, letterSpacing: '0.08em' }}>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TenderCTASection;
