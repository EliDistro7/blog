'use client';

// @/app/components/equipment/EquipmentSales.js
import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';
import {
  equipmentHeroStats, equipmentCategories, services, process,
  testimonials, pricingPlans, faqs,
} from '@/app/components/equipment/data';
import {
  SURFACE, AMBER, GOLD, DARK, CREAM, MUTED, RULE, BORDER_S,
  CONTACT, EQUIP_IMAGES, focusRing, openWhatsApp,
  AfricanPattern, SectionHead, Photo,
  btnPrimary, btnPrimaryStyle, btnGhost, btnGhostStyle,
} from './shared';

// ── Copy ──────────────────────────────────────────────────────────────────────
const copy = {
  en: {
    hero: {
      kicker: 'Trusted equipment supplier',
      title: 'Premium Construction Equipment Sales',
      accent: 'Construction Equipment',
      text: 'A trusted supplier of quality construction equipment. From excavators to bulldozers, we have what you need to build your success.',
      primary: 'Browse equipment',
      secondary: 'Get a quote',
      imageAlt: 'Heavy construction equipment at work on site',
      whatsapp: "Hi! I'd like a quote for construction equipment. Can you help?",
    },
    services: { label: 'What we do', title: 'Our services', sub: 'Comprehensive solutions for all your construction equipment needs.', caption: 'Sales, service and support under one roof' },
    equipment: { label: 'Range', title: 'Equipment categories', sub: 'Choose from our extensive range of construction equipment.', models: 'Available models', quote: 'Get a quote', from: 'Indicative price range', quoteFor: (m) => `Hi! I'd like a quote for the ${m}.` },
    process: { label: 'How it works', title: 'Our process', sub: 'A simple, transparent process from consultation to delivery.', imageAlt: 'Equipment being inspected before delivery' },
    testimonials: { label: 'Clients', title: 'What our clients say' },
    pricing: { label: 'Packages', title: 'Service packages', sub: 'Choose the service package that best fits your needs.', popular: 'Most popular', start: 'Get started', whatsapp: (n) => `Hi! I'm interested in the ${n}.` },
    faq: { label: 'FAQ', title: 'Frequently asked questions', imageAlt: 'An equipment specialist walking a client through a machine' },
    cta: {
      label: 'Get started',
      title: ['Ready to upgrade', 'your fleet', '?'],
      text: 'Get started today with a free consultation.',
      primary: 'Browse equipment',
      secondary: 'Free consultation',
      call: 'Call us', email: 'Email us', visit: 'Visit us',
      address: ['Dar es Salaam', 'Tanzania'],
      whatsapp: "Hi! I'd like a free consultation about equipment sales.",
    },
  },
  sw: {
    hero: {
      kicker: 'Muuzaji wa vifaa unayemwamini',
      title: 'Mauzo ya Vifaa vya Ujenzi vya Ubora',
      accent: 'Vifaa vya Ujenzi',
      text: 'Muuzaji anayeaminika wa vifaa vya ujenzi vya ubora. Kuanzia mashine za kuchimba hadi matingatinga, tuna kila unachohitaji kujenga mafanikio yako.',
      primary: 'Angalia vifaa',
      secondary: 'Pata bei',
      imageAlt: 'Vifaa vizito vya ujenzi vikifanya kazi eneo la ujenzi',
      whatsapp: 'Hujambo! Ningependa bei ya vifaa vya ujenzi. Mnaweza kunisaidia?',
    },
    services: { label: 'Tunachofanya', title: 'Huduma zetu', sub: 'Suluhisho kamili kwa mahitaji yako yote ya vifaa vya ujenzi.', caption: 'Mauzo, huduma na msaada mahali pamoja' },
    equipment: { label: 'Aina', title: 'Aina za vifaa', sub: 'Chagua kutoka kwa vifaa vyetu vingi vya ujenzi.', models: 'Mifano inayopatikana', quote: 'Pata bei', from: 'Makadirio ya bei', quoteFor: (m) => `Hujambo! Ningependa bei ya ${m}.` },
    process: { label: 'Jinsi tunavyofanya kazi', title: 'Mchakato wetu', sub: 'Mchakato rahisi na wa uwazi kuanzia ushauri hadi utoaji.', imageAlt: 'Vifaa vikikaguliwa kabla ya kukabidhiwa' },
    testimonials: { label: 'Wateja', title: 'Wateja wetu wanasema nini' },
    pricing: { label: 'Vifurushi', title: 'Vifurushi vya huduma', sub: 'Chagua kifurushi cha huduma kinachofaa mahitaji yako.', popular: 'Maarufu zaidi', start: 'Anza sasa', whatsapp: (n) => `Hujambo! Ninavutiwa na ${n}.` },
    faq: { label: 'Maswali', title: 'Maswali yanayoulizwa mara kwa mara', imageAlt: 'Mtaalamu wa vifaa akimwonyesha mteja mashine' },
    cta: {
      label: 'Anza sasa',
      title: ['Tayari kuboresha', 'kundi lako la vifaa', '?'],
      text: 'Anza leo kwa ushauri wa bure.',
      primary: 'Angalia vifaa',
      secondary: 'Ushauri wa bure',
      call: 'Tupigie simu', email: 'Tutumie barua pepe', visit: 'Tutembelee',
      address: ['Dar es Salaam', 'Tanzania'],
      whatsapp: 'Hujambo! Ningependa ushauri wa bure kuhusu mauzo ya vifaa.',
    },
  },
};

const tr = (obj, lang) => (obj ? obj[lang] || obj.en : '');
const accentAt = (i) => (i % 2 === 0 ? AMBER : GOLD);

// ── Small building blocks (defined outside so they aren't remounted) ─────────
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

const Accordion = ({ items, lang, expanded, onToggle }) => (
  <div style={{ borderBottom: `1px solid ${RULE}` }}>
    {items.map((faq, i) => {
      const open = expanded === i;
      return (
        <div key={faq.question.en} style={{ borderTop: `1px solid ${RULE}` }}>
          <h3>
            <button
              type="button"
              onClick={() => onToggle(i)}
              aria-expanded={open}
              aria-controls={`equip-faq-panel-${i}`}
              id={`equip-faq-button-${i}`}
              className={`w-full flex items-start justify-between gap-6 py-6 text-left ${focusRing}`}
            >
              <span
                className="font-display font-extrabold"
                style={{
                  fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
                  lineHeight: 1.2,
                  letterSpacing: '-0.015em',
                  color: open ? AMBER : CREAM,
                }}
              >
                {tr(faq.question, lang)}
              </span>
              <span
                aria-hidden="true"
                className="font-display font-bold shrink-0 leading-none"
                style={{ color: AMBER, fontSize: '1.5rem', width: '1.25rem', textAlign: 'center' }}
              >
                {open ? '\u2212' : '+'}
              </span>
            </button>
          </h3>
          {open && (
            <div id={`equip-faq-panel-${i}`} role="region" aria-labelledby={`equip-faq-button-${i}`} className="pb-6 pr-10">
              <p className="leading-relaxed" style={{ color: MUTED, fontSize: '1.02rem' }}>
                {tr(faq.answer, lang)}
              </p>
            </div>
          )}
        </div>
      );
    })}
  </div>
);

// "$2,000/month" -> amount + period, so the amount can lead
const splitPrice = (price) => {
  const [amount, per] = price.split('/');
  return { amount, per };
};

// ── Page ──────────────────────────────────────────────────────────────────────
const EquipmentSalesPage = () => {
  const { language } = useLanguage();
  const lang = language === 'sw' ? 'sw' : 'en';
  const c = copy[lang];

  const [selectedCategory, setSelectedCategory] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const toggleFaq = (i) => setExpandedFaq((cur) => (cur === i ? null : i));

  const category = equipmentCategories[selectedCategory] || equipmentCategories[0];
  const catAccent = accentAt(selectedCategory);

  // Highlight the key phrase of the hero title
  const h = c.hero;
  const hi = h.title.indexOf(h.accent);
  const linkStyle = { color: CREAM, fontSize: '1.25rem', letterSpacing: '-0.01em' };

  return (
    <div className="min-h-screen" style={{ background: SURFACE }}>
      {/* ═════════ HERO: image first ═════════ */}
      <section aria-labelledby="equip-hero-title" style={{ background: SURFACE }}>
        <div
          className="relative w-full overflow-hidden h-[clamp(34rem,90vh,54rem)] lg:h-auto lg:aspect-[16/9] lg:min-h-[36rem] lg:max-h-[60rem]"
          style={{ background: DARK }}
        >
          <Image src={EQUIP_IMAGES.hero} alt={h.imageAlt} fill priority sizes="100vw" className="object-cover object-[55%_45%]" />
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
                  {h.kicker}
                </span>
              </div>
              <h1
                id="equip-hero-title"
                className="font-display font-extrabold max-w-5xl"
                style={{ fontSize: 'clamp(2.5rem, 7.5vw, 6.25rem)', lineHeight: 0.98, letterSpacing: '-0.035em', color: CREAM }}
              >
                {hi < 0 ? h.title : (
                  <>
                    {h.title.slice(0, hi)}
                    <span style={{ color: AMBER }}>{h.accent}</span>
                    {h.title.slice(hi + h.accent.length)}
                  </>
                )}
              </h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 pt-8" style={{ borderTop: `1px solid ${RULE}` }}>
            <div className="lg:col-span-6">
              <p className="leading-snug mb-8" style={{ color: CREAM, fontSize: 'clamp(1.15rem, 2vw, 1.5rem)' }}>{h.text}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#equipment" className={btnPrimary} style={btnPrimaryStyle}>
                  {h.primary}
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
                <button type="button" onClick={() => openWhatsApp(h.whatsapp)} className={btnGhost} style={btnGhostStyle}>
                  {h.secondary}
                </button>
              </div>
            </div>

            <dl className="lg:col-span-5 lg:col-start-8 grid grid-cols-2 gap-y-8">
              {equipmentHeroStats.map((s, i) => (
                <div
                  key={s.number + i}
                  className="flex flex-col-reverse px-4 sm:px-6"
                  style={{ borderLeft: i % 2 === 0 ? 'none' : `1px solid ${RULE}`, paddingLeft: i % 2 === 0 ? 0 : undefined }}
                >
                  <dt className="mt-2 text-sm leading-snug" style={{ color: MUTED }}>{tr(s.label, lang)}</dt>
                  <dd className="font-display font-extrabold leading-none" style={{ color: CREAM, fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)', letterSpacing: '-0.03em' }}>
                    {s.number}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ═════════ SERVICES ═════════ */}
      <Section id="services" labelledby="equip-services-title" pattern="equipSvcPattern">
        <SectionHead id="equip-services-title" label={c.services.label} title={c.services.title} subtitle={c.services.sub} />
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Photo src={EQUIP_IMAGES.services} aspect="4 / 5" sizes="(min-width: 1024px) 40vw, 100vw" />
              <p className="mt-3 text-xs italic" style={{ color: MUTED }}>{c.services.caption}</p>
            </div>
          </div>
          <ol className="lg:col-span-7" style={{ borderBottom: `1px solid ${RULE}` }}>
            {services.map((s, i) => (
              <li key={s.title.en} className="grid grid-cols-[3.5rem_1fr] sm:grid-cols-[5rem_1fr] gap-x-4 py-8" style={{ borderTop: `1px solid ${RULE}` }}>
                <span aria-hidden="true" className="font-display font-extrabold tabular-nums" style={{ color: accentAt(i), fontSize: '1.5rem', letterSpacing: '-0.02em' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display font-extrabold" style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)', lineHeight: 1.1, color: CREAM, letterSpacing: '-0.02em' }}>
                    {tr(s.title, lang)}
                  </h3>
                  <p className="mt-3 leading-relaxed max-w-xl" style={{ color: MUTED }}>{tr(s.description, lang)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ═════════ EQUIPMENT CATEGORIES ═════════ */}
      <Section id="equipment" labelledby="equip-range-title" pattern="equipRangePattern">
        <SectionHead id="equip-range-title" label={c.equipment.label} title={c.equipment.title} subtitle={c.equipment.sub} />
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-4" role="tablist" aria-orientation="vertical" aria-label={c.equipment.title}>
            {equipmentCategories.map((cat, i) => {
              const active = i === selectedCategory;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  id={`equip-tab-${i}`}
                  aria-selected={active}
                  aria-controls="equip-panel"
                  onClick={() => setSelectedCategory(i)}
                  className={`block w-full text-left py-6 pl-5 transition-colors ${focusRing}`}
                  style={{
                    borderTop: `1px solid ${RULE}`,
                    borderBottom: i === equipmentCategories.length - 1 ? `1px solid ${RULE}` : 'none',
                    borderLeft: `3px solid ${active ? accentAt(i) : 'transparent'}`,
                  }}
                >
                  <span className="font-display font-extrabold block" style={{ fontSize: '1.35rem', lineHeight: 1.1, letterSpacing: '-0.02em', color: active ? CREAM : MUTED }}>
                    {tr(cat.name, lang)}
                  </span>
                  <span className="block mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>{tr(cat.description, lang)}</span>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8" role="tabpanel" id="equip-panel" aria-labelledby={`equip-tab-${selectedCategory}`}>
            <Photo src={EQUIP_IMAGES.categories[selectedCategory] || EQUIP_IMAGES.categories[0]} aspect="16 / 8" sizes="(min-width: 1024px) 65vw, 100vw" />
            <div className="pt-4 mt-6" style={{ borderTop: `2px solid ${catAccent}` }}>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <h3 className="font-display font-extrabold" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', lineHeight: 1.02, color: CREAM, letterSpacing: '-0.025em' }}>
                  {tr(category.name, lang)}
                </h3>
                <p className="sm:text-right">
                  <span className="block text-xs" style={{ color: MUTED }}>{c.equipment.from}</span>
                  <span className="font-display font-extrabold" style={{ color: catAccent, fontSize: '1.4rem', letterSpacing: '-0.02em' }}>
                    {tr(category.priceRange, lang)}
                  </span>
                </p>
              </div>

              <p className="mt-6 text-sm font-display font-bold" style={{ color: MUTED, letterSpacing: '0.04em' }}>{c.equipment.models}</p>
              <ul className="mt-3" style={{ borderTop: `1px solid ${RULE}` }}>
                {category.models.map((model) => (
                  <li key={model} className="flex items-center justify-between gap-4 py-3" style={{ borderBottom: `1px solid ${RULE}` }}>
                    <span className="font-semibold" style={{ color: CREAM }}>{model}</span>
                    <button
                      type="button"
                      onClick={() => openWhatsApp(c.equipment.quoteFor(model))}
                      className={`text-sm font-display font-bold rounded transition-colors hover:underline ${focusRing}`}
                      style={{ color: AMBER }}
                    >
                      {c.equipment.quote}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ═════════ PROCESS ═════════ */}
      <Section id="process" labelledby="equip-process-title" pattern="equipProcessPattern">
        <SectionHead id="equip-process-title" label={c.process.label} title={c.process.title} subtitle={c.process.sub} />
        <Photo src={EQUIP_IMAGES.process} alt={c.process.imageAlt} aspect="21 / 9" sizes="(min-width: 1024px) 1200px, 100vw" className="mb-14 min-h-[14rem]" />
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {process.map((step, i) => (
            <li key={step.step} className="pt-4" style={{ borderTop: `2px solid ${accentAt(i)}` }}>
              <span aria-hidden="true" className="font-display font-extrabold tabular-nums block mb-4" style={{ color: accentAt(i), fontSize: '2.5rem', lineHeight: 1, letterSpacing: '-0.03em' }}>
                {step.step}
              </span>
              <h3 className="font-display font-extrabold" style={{ fontSize: '1.4rem', lineHeight: 1.1, color: CREAM, letterSpacing: '-0.02em' }}>
                {tr(step.title, lang)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>{tr(step.description, lang)}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ═════════ TESTIMONIALS ═════════ */}
      <Section labelledby="equip-testimonials-title" pattern="equipQuotesPattern">
        <SectionHead id="equip-testimonials-title" label={c.testimonials.label} title={c.testimonials.title} />
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {testimonials.map((t, i) => (
            <li key={t.name}>
              <figure className="pt-4 h-full flex flex-col" style={{ borderTop: `2px solid ${accentAt(i)}` }}>
                <blockquote className="italic leading-snug" style={{ color: CREAM, fontSize: 'clamp(1.1rem, 1.6vw, 1.3rem)' }}>
                  &ldquo;{tr(t.comment, lang)}&rdquo;
                </blockquote>
                <figcaption className="mt-6">
                  <span className="block font-display font-extrabold" style={{ color: CREAM }}>{t.name}</span>
                  <span className="block text-sm" style={{ color: accentAt(i) }}>{t.company}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Section>

      {/* ═════════ PRICING ═════════ */}
      <Section id="pricing" labelledby="equip-pricing-title" pattern="equipPricingPattern">
        <SectionHead id="equip-pricing-title" label={c.pricing.label} title={c.pricing.title} subtitle={c.pricing.sub} />
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {pricingPlans.map((plan, i) => {
            const accent = plan.popular ? AMBER : i % 2 === 0 ? GOLD : AMBER;
            const { amount, per } = splitPrice(tr(plan.price, lang));
            const name = tr(plan.name, lang);
            return (
              <li key={plan.name.en} className="flex">
                <article
                  className="relative flex flex-col w-full rounded p-8"
                  style={{
                    background: plan.popular ? 'rgba(245,158,11,0.06)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${plan.popular ? BORDER_S : RULE}`,
                  }}
                >
                  <div aria-hidden="true" className="absolute inset-x-0 top-0" style={{ height: 3, background: accent, borderRadius: '0.25rem 0.25rem 0 0' }} />
                  <p className="font-display font-bold text-sm mb-3" style={{ color: plan.popular ? AMBER : 'transparent', letterSpacing: '0.04em' }} aria-hidden={!plan.popular}>
                    {c.pricing.popular}
                  </p>
                  <h3 className="font-display font-extrabold" style={{ fontSize: '1.75rem', lineHeight: 1.05, color: CREAM, letterSpacing: '-0.02em' }}>{name}</h3>
                  <p className="mt-6">
                    <span className="font-display font-extrabold leading-none block" style={{ color: CREAM, fontSize: 'clamp(2rem, 3.4vw, 2.75rem)', letterSpacing: '-0.03em' }}>{amount}</span>
                    {per && <span className="block text-sm mt-2" style={{ color: MUTED }}>/ {per}</span>}
                  </p>
                  <ul className="mt-8 mb-8" style={{ borderTop: `1px solid ${RULE}` }}>
                    {plan.features.map((f) => (
                      <li key={f.en} className="py-3 text-sm" style={{ borderBottom: `1px solid ${RULE}`, color: CREAM }}>{tr(f, lang)}</li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => openWhatsApp(c.pricing.whatsapp(name))}
                    className={`${plan.popular ? btnPrimary : btnGhost} mt-auto w-full`}
                    style={plan.popular ? { ...btnPrimaryStyle, color: DARK } : btnGhostStyle}
                  >
                    {c.pricing.start}
                  </button>
                </article>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* ═════════ FAQ ═════════ */}
      <Section id="faq" labelledby="equip-faq-title" pattern="equipFaqPattern">
        <SectionHead id="equip-faq-title" label={c.faq.label} title={c.faq.title} />
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Photo src={EQUIP_IMAGES.faq} alt={c.faq.imageAlt} aspect="4 / 5" sizes="(min-width: 1024px) 32vw, 100vw" />
            </div>
          </div>
          <div className="lg:col-span-8">
            <Accordion items={faqs} lang={lang} expanded={expandedFaq} onToggle={toggleFaq} />
          </div>
        </div>
      </Section>

      {/* ═════════ CLOSING CTA ═════════ */}
      <section aria-labelledby="equip-cta-title" className="relative overflow-hidden" style={{ background: DARK }}>
        <Image src={EQUIP_IMAGES.cta} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,18,8,1) 0%, rgba(13,9,3,0.88) 35%, rgba(13,9,3,0.94) 100%)' }} />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 pt-8" style={{ borderTop: `1px solid ${RULE}` }}>
            <div className="lg:col-span-7">
              <span className="font-display font-bold text-sm" style={{ color: AMBER, letterSpacing: '0.04em' }}>{c.cta.label}</span>
              <h2 id="equip-cta-title" className="font-display font-extrabold mt-3" style={{ fontSize: 'clamp(2.5rem, 6.5vw, 5rem)', lineHeight: 0.98, color: CREAM, letterSpacing: '-0.035em' }}>
                {c.cta.title[0]} <span style={{ color: AMBER }}>{c.cta.title[1]}</span>{c.cta.title[2]}
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 lg:self-end">
              <p className="leading-relaxed mb-6" style={{ color: MUTED, fontSize: '1.05rem' }}>{c.cta.text}</p>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
                <a href="#equipment" className={btnPrimary} style={btnPrimaryStyle}>
                  {c.cta.primary}
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
                <button type="button" onClick={() => openWhatsApp(c.cta.whatsapp)} className={btnGhost} style={btnGhostStyle}>
                  {c.cta.secondary}
                </button>
              </div>
            </div>
          </div>

          <dl className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 lg:mt-20 pt-8" style={{ borderTop: `1px solid ${RULE}` }}>
            <div>
              <dt className="font-display font-bold text-sm" style={{ color: AMBER }}>{c.cta.call}</dt>
              <dd className="mt-3">
                <a href={CONTACT.phoneHref} className={`font-display font-extrabold ${focusRing}`} style={linkStyle}>{CONTACT.phone}</a>
              </dd>
            </div>
            <div>
              <dt className="font-display font-bold text-sm" style={{ color: AMBER }}>{c.cta.email}</dt>
              <dd className="mt-3 space-y-1">
                {['sales@futureholder.pro', 'info@futureholder.pro'].map((m) => (
                  <a key={m} href={`mailto:${m}`} className={`block font-display font-extrabold ${focusRing}`} style={linkStyle}>{m}</a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="font-display font-bold text-sm" style={{ color: AMBER }}>{c.cta.visit}</dt>
              <dd className="mt-3 leading-relaxed" style={{ color: CREAM }}>
                {c.cta.address[0]}
                <br />
                <span style={{ color: MUTED }}>{c.cta.address[1]}</span>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
};

export default EquipmentSalesPage;
