'use client';

// @/app/components/branding/BrandingServices.js
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';
import { brandingServices, brandingProcess, brandingBenefits } from '@/app/components/branding/data';
import {
  SURFACE, AMBER, GOLD, DARK, CREAM, MUTED, RULE,
  CONTACT, BRAND_IMAGES, openWhatsApp,
  AfricanPattern, SectionHead, Photo,
  btnPrimary, btnPrimaryStyle, btnGhost, btnGhostStyle,
} from './shared';

const copy = {
  en: {
    hero: {
      kicker: 'Professional branding services',
      line1: 'Build a Brand That',
      accent: 'Stands Out',
      text: "Transform your business identity with strategic branding that captures hearts, minds, and market share. We create brands that don't just look good, they perform exceptionally.",
      primary: 'Start your brand journey',
      secondary: 'View our clients',
      imageAlt: 'Brand identity work: colour swatches and print samples on a desk',
      whatsapp: "Hi! I'd like to start a branding project with Future Holders.",
    },
    services: { label: 'What we do', title: 'Our branding services', sub: 'Comprehensive branding solutions that elevate your business and connect with your audience on a deeper level.', imageAlt: 'A creative workspace with brand materials' },
    process: { label: 'How it works', title: 'Our branding process', sub: 'A proven methodology that ensures your brand not only looks exceptional but also performs in the marketplace.', imageAlt: 'Brand collateral laid out for review' },
    benefits: { label: 'The return', title: 'Why invest in professional branding?', sub: 'Professional branding delivers measurable results that impact your bottom line and long-term success.' },
    cta: {
      label: 'Get started',
      title: ['Ready to', 'transform', 'your brand?'],
      text: "Let's create a brand that not only stands out but also drives real business results. Your success story starts here.",
      primary: 'Get a free brand consultation',
      secondary: 'Call us today',
      whatsapp: "Hi! I'd like a free brand consultation.",
    },
  },
  sw: {
    hero: {
      kicker: 'Huduma za kitaalamu za chapa',
      line1: 'Jenga Chapa Ambayo',
      accent: 'Inajitofautisha',
      text: 'Badilisha utambulisho wa biashara yako kwa chapa ya kimkakati inayoteka mioyo, akili na sehemu ya soko. Tunaunda chapa ambazo si nzuri kuziona tu, bali pia zinafanya kazi vizuri sana.',
      primary: 'Anza safari ya chapa yako',
      secondary: 'Tazama wateja wetu',
      imageAlt: 'Kazi ya utambulisho wa chapa: sampuli za rangi na nyenzo zilizochapishwa mezani',
      whatsapp: 'Hujambo! Ningependa kuanza mradi wa chapa na Future Holders.',
    },
    services: { label: 'Tunachofanya', title: 'Huduma zetu za chapa', sub: 'Suluhisho kamili za chapa zinazoinua biashara yako na kuungana na hadhira yako kwa kina zaidi.', imageAlt: 'Sehemu ya kazi ya ubunifu yenye nyenzo za chapa' },
    process: { label: 'Jinsi tunavyofanya kazi', title: 'Mchakato wetu wa chapa', sub: 'Mbinu iliyothibitishwa inayohakikisha chapa yako si nzuri kuiona tu, bali pia inafanya kazi sokoni.', imageAlt: 'Nyenzo za chapa zilizopangwa kwa ukaguzi' },
    benefits: { label: 'Faida', title: 'Kwa nini uwekeze katika chapa ya kitaalamu?', sub: 'Chapa ya kitaalamu huleta matokeo yanayopimika yanayoathiri mapato yako na mafanikio ya muda mrefu.' },
    cta: {
      label: 'Anza sasa',
      title: ['Tayari', 'kubadilisha', 'chapa yako?'],
      text: 'Tuunde chapa inayojitofautisha na pia kuleta matokeo halisi ya biashara. Hadithi ya mafanikio yako inaanzia hapa.',
      primary: 'Pata ushauri wa bure wa chapa',
      secondary: 'Tupigie simu leo',
      whatsapp: 'Hujambo! Ningependa ushauri wa bure kuhusu chapa yangu.',
    },
  },
};

const tr = (obj, lang) => (obj ? obj[lang] || obj.en : '');
const accentAt = (i) => (i % 2 === 0 ? AMBER : GOLD);

const Section = ({ id, labelledby, pattern, children }) => (
  <section
    id={id}
    aria-labelledby={labelledby}
    className="relative overflow-hidden pb-24 scroll-mt-24"
    style={{ background: SURFACE }}
  >
    <AfricanPattern id={pattern} />
    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

const BrandingServices = () => {
  const { language } = useLanguage();
  const lang = language === 'sw' ? 'sw' : 'en';
  const c = copy[lang];
  const h = c.hero;

  return (
    <div className="min-h-screen" style={{ background: SURFACE }}>
      {/* ═════════ HERO: image first ═════════ */}
      <section aria-labelledby="brand-hero-title" style={{ background: SURFACE }}>
        <div
          className="relative w-full overflow-hidden h-[clamp(34rem,90vh,54rem)] lg:h-auto lg:aspect-[16/9] lg:min-h-[36rem] lg:max-h-[60rem]"
          style={{ background: DARK }}
        >
          <Image src={BRAND_IMAGES.hero} alt={h.imageAlt} fill priority sizes="100vw" className="object-cover object-[50%_40%]" />
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
                <span className="font-display font-bold text-sm" style={{ color: AMBER, letterSpacing: '0.04em' }}>{h.kicker}</span>
              </div>
              <h1
                id="brand-hero-title"
                className="font-display font-extrabold max-w-5xl"
                style={{ fontSize: 'clamp(2.75rem, 8.5vw, 7rem)', lineHeight: 0.96, letterSpacing: '-0.035em', color: CREAM }}
              >
                {h.line1} <span style={{ color: AMBER }}>{h.accent}</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 pt-8" style={{ borderTop: `1px solid ${RULE}` }}>
            <p className="lg:col-span-7 leading-snug" style={{ color: CREAM, fontSize: 'clamp(1.15rem, 2vw, 1.5rem)' }}>{h.text}</p>
            <div className="lg:col-span-4 lg:col-start-9 lg:self-end flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <button type="button" onClick={() => openWhatsApp(h.whatsapp)} className={btnPrimary} style={btnPrimaryStyle}>
                {h.primary}
                <ArrowRight size={16} aria-hidden="true" />
              </button>
              <a href="/#clients" className={btnGhost} style={btnGhostStyle}>{h.secondary}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════ SERVICES ═════════ */}
      <Section id="services" labelledby="brand-services-title" pattern="brandSvcPattern">
        <SectionHead id="brand-services-title" label={c.services.label} title={c.services.title} subtitle={c.services.sub} />
        <Photo src={BRAND_IMAGES.services} alt={c.services.imageAlt} aspect="21 / 9" sizes="(min-width: 1024px) 1200px, 100vw" className="mb-14 min-h-[14rem]" />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {brandingServices.map((s, i) => (
            <li key={s.title.en} className="pt-4" style={{ borderTop: `2px solid ${accentAt(i)}` }}>
              <span aria-hidden="true" className="font-display font-extrabold tabular-nums block mb-4" style={{ color: accentAt(i), fontSize: '2.5rem', lineHeight: 1, letterSpacing: '-0.03em' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display font-extrabold" style={{ fontSize: '1.5rem', lineHeight: 1.08, color: CREAM, letterSpacing: '-0.02em' }}>
                {tr(s.title, lang)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>{tr(s.description, lang)}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ═════════ PROCESS ═════════ */}
      <Section id="process" labelledby="brand-process-title" pattern="brandProcessPattern">
        <SectionHead id="brand-process-title" label={c.process.label} title={c.process.title} subtitle={c.process.sub} />
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Photo src={BRAND_IMAGES.process} alt={c.process.imageAlt} aspect="4 / 5" sizes="(min-width: 1024px) 40vw, 100vw" />
            </div>
          </div>
          <ol className="lg:col-span-7" style={{ borderBottom: `1px solid ${RULE}` }}>
            {brandingProcess.map((step, i) => (
              <li key={step.step} className="grid grid-cols-[3.5rem_1fr] sm:grid-cols-[5rem_1fr] gap-x-4 py-8" style={{ borderTop: `1px solid ${RULE}` }}>
                <span aria-hidden="true" className="font-display font-extrabold tabular-nums" style={{ color: accentAt(i), fontSize: '1.75rem', lineHeight: 1, letterSpacing: '-0.02em' }}>
                  {step.step}
                </span>
                <div>
                  <h3 className="font-display font-extrabold" style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)', lineHeight: 1.1, color: CREAM, letterSpacing: '-0.02em' }}>
                    {tr(step.title, lang)}
                  </h3>
                  <p className="mt-3 leading-relaxed max-w-xl" style={{ color: MUTED }}>{tr(step.description, lang)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ═════════ BENEFITS ═════════ */}
      <Section labelledby="brand-benefits-title" pattern="brandBenefitsPattern">
        <SectionHead id="brand-benefits-title" label={c.benefits.label} title={c.benefits.title} subtitle={c.benefits.sub} />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8" style={{ borderTop: `1px solid ${RULE}` }}>
          {brandingBenefits.map((b) => (
            <li
              key={b.en}
              className="flex items-center gap-4 py-6 font-display font-extrabold"
              style={{ borderBottom: `1px solid ${RULE}`, color: CREAM, fontSize: '1.2rem', letterSpacing: '-0.015em' }}
            >
              <span aria-hidden="true" style={{ width: '1.5rem', height: 3, background: AMBER, borderRadius: 2, flexShrink: 0 }} />
              {tr(b, lang)}
            </li>
          ))}
        </ul>
      </Section>

      {/* ═════════ CLOSING CTA ═════════ */}
      <section aria-labelledby="brand-cta-title" className="relative overflow-hidden" style={{ background: DARK }}>
        <Image src={BRAND_IMAGES.cta} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,18,8,1) 0%, rgba(13,9,3,0.88) 35%, rgba(13,9,3,0.94) 100%)' }} />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 pt-8" style={{ borderTop: `1px solid ${RULE}` }}>
            <div className="lg:col-span-7">
              <span className="font-display font-bold text-sm" style={{ color: AMBER, letterSpacing: '0.04em' }}>{c.cta.label}</span>
              <h2 id="brand-cta-title" className="font-display font-extrabold mt-3" style={{ fontSize: 'clamp(2.5rem, 6.5vw, 5rem)', lineHeight: 0.98, color: CREAM, letterSpacing: '-0.035em' }}>
                {c.cta.title[0]} <span style={{ color: AMBER }}>{c.cta.title[1]}</span> {c.cta.title[2]}
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 lg:self-end">
              <p className="leading-relaxed mb-6" style={{ color: MUTED, fontSize: '1.05rem' }}>{c.cta.text}</p>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
                <button type="button" onClick={() => openWhatsApp(c.cta.whatsapp)} className={btnPrimary} style={btnPrimaryStyle}>
                  {c.cta.primary}
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
                <Link href={CONTACT.phoneHref} className={btnGhost} style={btnGhostStyle}>{c.cta.secondary}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandingServices;
