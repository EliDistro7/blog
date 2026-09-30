'use client';

// @/app/components/ServicesOverview.js  (was AboutPage)
// One self-contained page. Tokens and helpers come from the shared module
// (see tender/shared.js); adjust the import path if you move it.
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';
import {
  SURFACE, AMBER, GOLD, DARK, CREAM, MUTED, RULE, IMAGES, CONTACT,
  focusRing, openWhatsApp,
  AfricanPattern, SectionHead, Photo,
  btnPrimary, btnPrimaryStyle, btnGhost, btnGhostStyle,
} from '@/app/components/tender/shared';

// ── Photos ────────────────────────────────────────────────────────────────────
// Local files are your own; Unsplash ones need images.remotePatterns in next.config.
const u = (id, w = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;
const HERO_IMAGE = u('1600880292203-757bb62b4baf', 2000);

// ── Copy ──────────────────────────────────────────────────────────────────────
const copy = {
  en: {
    hero: {
      kicker: 'What we offer',
      line1: 'Our',
      accent: 'Premium',
      line2: 'Services',
      text: 'Comprehensive business solutions designed to elevate your company and drive sustainable growth across all sectors.',
      primary: 'Get started today',
      secondary: 'Explore services',
      imageAlt: 'The Future Holders team in a planning session',
      whatsapp: "Hi! I'd like to talk about your services.",
    },
    list: { label: 'Six ways we help', title: 'Everything in one place', sub: 'Select a service to see what it includes and what you gain.', details: 'Details', hide: 'Hide details', features: 'What is included', benefits: 'What you gain', more: 'Learn more' },
    cta: {
      label: 'Get started',
      title: ['Ready to', 'transform', 'your business?'],
      text: "Let's discuss how our services can help you reach your business goals and grow sustainably.",
      primary: 'Get started today',
      secondary: 'Schedule a consultation',
      whatsapp: "Hi! I'd like to schedule a consultation about your services.",
    },
  },
  sw: {
    hero: {
      kicker: 'Tunachotoa',
      line1: 'Huduma zetu',
      accent: 'za Hadhi ya Juu',
      line2: '',
      text: 'Suluhisho kamili za biashara zilizobuniwa kuinua kampuni yako na kuchochea ukuaji endelevu katika sekta zote.',
      primary: 'Anza leo',
      secondary: 'Tazama huduma',
      imageAlt: 'Timu ya Future Holders kwenye kikao cha mipango',
      whatsapp: 'Hujambo! Ningependa kuzungumzia huduma zenu.',
    },
    list: { label: 'Njia sita za kukusaidia', title: 'Kila kitu mahali pamoja', sub: 'Chagua huduma kuona inajumuisha nini na unachopata.', details: 'Maelezo', hide: 'Ficha maelezo', features: 'Kinachojumuishwa', benefits: 'Unachopata', more: 'Jifunze zaidi' },
    cta: {
      label: 'Anza sasa',
      title: ['Tayari', 'kubadilisha', 'biashara yako?'],
      text: 'Tujadili jinsi huduma zetu zinavyoweza kukusaidia kufikia malengo ya biashara yako na kukua kwa uendelevu.',
      primary: 'Anza leo',
      secondary: 'Panga mkutano wa ushauri',
      whatsapp: 'Hujambo! Ningependa kupanga mkutano wa ushauri kuhusu huduma zenu.',
    },
  },
};

// ── Services ──────────────────────────────────────────────────────────────────
// `slug` matches the /services/[id] routes used by the services showcase.
const services = [
  {
    slug: 'door-to-door',
    image: '/services/door.jpeg',
    title: { en: 'Door to Door Sales', sw: 'Uuzaji Nyumba kwa Nyumba' },
    description: {
      en: 'Professional door-to-door sales services to reach customers directly and build personal connections.',
      sw: 'Huduma za kitaalamu za uuzaji nyumba kwa nyumba ili kuwafikia wateja moja kwa moja na kujenga mahusiano ya kibinafsi.',
    },
    features: {
      en: ['Trained sales representatives', 'Targeted neighborhood campaigns', 'Lead generation and follow-up', 'Performance tracking and reporting'],
      sw: ['Wawakilishi wa mauzo waliofunzwa', 'Kampeni zinazolenga mitaa mahususi', 'Kutafuta wateja watarajiwa na kuwafuatilia', 'Ufuatiliaji wa utendaji na utoaji wa ripoti'],
    },
    benefits: {
      en: ['Direct customer engagement', 'Higher conversion rates', 'Immediate feedback collection', 'Brand awareness expansion'],
      sw: ['Mawasiliano ya moja kwa moja na wateja', 'Kiwango cha juu cha ubadilishaji kuwa mauzo', 'Maoni ya papo hapo', 'Kuongezeka kwa ufahamu wa chapa'],
    },
  },
  {
    slug: 'web-development',
    image: u('1461749280684-dccba630e2f6'),
    title: { en: 'Website & Application Building', sw: 'Ujenzi wa Tovuti na Programu' },
    description: {
      en: 'Custom website and mobile application development tailored to your business needs.',
      sw: 'Ujenzi wa tovuti na programu za simu kulingana na mahitaji ya biashara yako.',
    },
    features: {
      en: ['Responsive web design', 'Mobile app development', 'E-commerce solutions', 'SEO optimization'],
      sw: ['Muundo wa tovuti unaojirekebisha kwa kila skrini', 'Ujenzi wa programu za simu', 'Suluhisho za biashara mtandaoni', 'Uboreshaji wa SEO'],
    },
    benefits: {
      en: ['Professional online presence', '24/7 customer accessibility', 'Scalable solutions', 'Modern user experience'],
      sw: ['Uwepo wa kitaalamu mtandaoni', 'Wateja wanakufikia saa 24 kwa siku', 'Suluhisho zinazokua na biashara', 'Uzoefu wa kisasa kwa watumiaji'],
    },
  },
  {
    slug: 'social-media',
    image: u('1611162617213-7d7a39e9b1d7'),
    title: { en: 'Social Media Management', sw: 'Usimamizi wa Mitandao ya Kijamii' },
    description: {
      en: 'Comprehensive social media strategy and management across all major platforms.',
      sw: 'Mkakati na usimamizi kamili wa mitandao ya kijamii katika majukwaa yote makuu.',
    },
    features: {
      en: ['Content creation and scheduling', 'Community management', 'Analytics and reporting', 'Paid advertising campaigns'],
      sw: ['Uundaji na upangaji wa maudhui', 'Usimamizi wa jumuiya', 'Uchambuzi na ripoti', 'Kampeni za matangazo ya kulipia'],
    },
    benefits: {
      en: ['Increased brand visibility', 'Engaged customer community', 'Lead generation', 'Brand reputation management'],
      sw: ['Chapa inayoonekana zaidi', 'Jumuiya ya wateja inayoshiriki', 'Kupata wateja watarajiwa', 'Usimamizi wa sifa ya chapa'],
    },
  },
  {
    slug: 'tender-applications',
    image: u('1450101499163-c8848c66ca85'),
    title: { en: 'Public Tender Searching & Application', sw: 'Kutafuta na Kuomba Zabuni za Umma' },
    description: {
      en: 'Expert assistance in finding and applying for government and private sector tenders.',
      sw: 'Msaada wa kitaalamu wa kutafuta na kuomba zabuni za serikali na sekta binafsi.',
    },
    features: {
      en: ['Tender identification and analysis', 'Application preparation', 'Compliance verification', 'Submission management'],
      sw: ['Kutambua na kuchambua zabuni', 'Maandalizi ya maombi', 'Uhakiki wa kufuata masharti', 'Usimamizi wa uwasilishaji'],
    },
    benefits: {
      en: ['Access to government contracts', 'Professional documentation', 'Increased success rates', 'Time-saving solutions'],
      sw: ['Fursa za mikataba ya serikali', 'Nyaraka za kitaalamu', 'Nafasi kubwa zaidi ya kushinda', 'Suluhisho zinazookoa muda'],
    },
  },
  {
    slug: 'equipment-sales',
    image: '/images/equip.jpeg',
    title: { en: 'Equipment Sales', sw: 'Mauzo ya Vifaa' },
    description: {
      en: 'Quality equipment and machinery sales with comprehensive support and warranty.',
      sw: 'Mauzo ya vifaa na mitambo ya ubora pamoja na msaada kamili na dhamana.',
    },
    features: {
      en: ['Wide equipment selection', 'Technical specifications', 'Installation support', 'Maintenance services'],
      sw: ['Aina nyingi za vifaa', 'Maelezo ya kiufundi', 'Msaada wa ufungaji', 'Huduma za matengenezo'],
    },
    benefits: {
      en: ['Reliable equipment sourcing', 'Competitive pricing', 'Technical expertise', 'Ongoing support'],
      sw: ['Upatikanaji wa vifaa vya kuaminika', 'Bei shindani', 'Utaalamu wa kiufundi', 'Msaada endelevu'],
    },
  },
  {
    slug: 'branding',
    image: u('1600132806608-231446b2e7af'),
    title: { en: 'Product & Service Branding', sw: 'Utambulisho wa Bidhaa na Huduma' },
    description: {
      en: 'Complete branding solutions to establish and strengthen your market presence.',
      sw: 'Suluhisho kamili za chapa ili kujenga na kuimarisha uwepo wako sokoni.',
    },
    features: {
      en: ['Logo and identity design', 'Brand strategy development', 'Marketing materials', 'Brand guidelines'],
      sw: ['Muundo wa nembo na utambulisho', 'Kutengeneza mkakati wa chapa', 'Nyenzo za uuzaji', 'Miongozo ya chapa'],
    },
    benefits: {
      en: ['Professional brand identity', 'Market differentiation', 'Customer recognition', 'Brand value enhancement'],
      sw: ['Utambulisho wa kitaalamu wa chapa', 'Kujitofautisha sokoni', 'Wateja wanakutambua', 'Kuongezeka kwa thamani ya chapa'],
    },
  },
];

const tr = (obj, lang) => (obj ? obj[lang] || obj.en : '');
const accentAt = (i) => (i % 2 === 0 ? AMBER : GOLD);

// Hairline list used for features and benefits (defined outside: no remounting)
const DetailList = ({ label, items, accent }) => (
  <div>
    <p className="text-sm font-display font-bold mb-3" style={{ color: accent, letterSpacing: '0.04em' }}>{label}</p>
    <ul style={{ borderTop: `1px solid ${RULE}` }}>
      {items.map((item) => (
        <li key={item} className="py-3 text-sm" style={{ borderBottom: `1px solid ${RULE}`, color: CREAM }}>{item}</li>
      ))}
    </ul>
  </div>
);

// ── Page ──────────────────────────────────────────────────────────────────────
const ServicesOverview = () => {
  const { language } = useLanguage();
  const lang = language === 'sw' ? 'sw' : 'en';
  const c = copy[lang];
  const h = c.hero;
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="min-h-screen" style={{ background: SURFACE }}>
      {/* ═════════ HERO: image first ═════════ */}
      <section aria-labelledby="services-hero-title" style={{ background: SURFACE }}>
        <div
          className="relative w-full overflow-hidden h-[clamp(30rem,80vh,48rem)] lg:h-auto lg:aspect-[16/8] lg:min-h-[34rem] lg:max-h-[54rem]"
          style={{ background: DARK }}
        >
          <Image src={HERO_IMAGE} alt={h.imageAlt} fill priority sizes="100vw" className="object-cover object-[50%_35%]" />
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
                id="services-hero-title"
                className="font-display font-extrabold max-w-5xl"
                style={{ fontSize: 'clamp(2.75rem, 8.5vw, 7rem)', lineHeight: 0.96, letterSpacing: '-0.035em', color: CREAM }}
              >
                {h.line1} <span style={{ color: AMBER }}>{h.accent}</span> {h.line2}
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
              <a href="#all-services" className={btnGhost} style={btnGhostStyle}>{h.secondary}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════ SERVICES ═════════ */}
      <section
        id="all-services"
        aria-labelledby="services-list-title"
        className="relative overflow-hidden pb-24 scroll-mt-24"
        style={{ background: SURFACE }}
      >
        <AfricanPattern id="servicesListPattern" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead id="services-list-title" label={c.list.label} title={c.list.title} subtitle={c.list.sub} />

          <ul className="space-y-16 lg:space-y-24">
            {services.map((s, i) => {
              const accent = accentAt(i);
              const open = expanded === s.slug;
              const flip = i % 2 === 1;
              const title = tr(s.title, lang);
              return (
                <li key={s.slug}>
                  <article className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className={`lg:col-span-5 ${flip ? 'lg:order-2' : ''}`}>
                      <Photo src={s.image} aspect="4 / 3" sizes="(min-width: 1024px) 40vw, 100vw" />
                    </div>

                    <div className={`lg:col-span-7 ${flip ? 'lg:order-1' : ''}`}>
                      <div className="pt-4" style={{ borderTop: `2px solid ${accent}` }}>
                        <p aria-hidden="true" className="font-display font-extrabold tabular-nums" style={{ color: accent, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
                          {String(i + 1).padStart(2, '0')}
                        </p>
                        <h3 className="font-display font-extrabold mt-2" style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3rem)', lineHeight: 1.02, color: CREAM, letterSpacing: '-0.025em' }}>
                          {title}
                        </h3>
                        <p className="mt-4 leading-relaxed max-w-xl" style={{ color: MUTED, fontSize: '1.05rem' }}>
                          {tr(s.description, lang)}
                        </p>

                        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-6">
                          <button
                            type="button"
                            onClick={() => setExpanded(open ? null : s.slug)}
                            aria-expanded={open}
                            aria-controls={`service-details-${s.slug}`}
                            className={`inline-flex items-center gap-2 font-display font-bold text-sm ${focusRing}`}
                            style={{ color: accent }}
                          >
                            <span aria-hidden="true" style={{ fontSize: '1.25rem', lineHeight: 1, width: '1rem', textAlign: 'center' }}>{open ? '\u2212' : '+'}</span>
                            {open ? c.list.hide : c.list.details}
                          </button>
                          <Link href={`/services/${s.slug}`} className={`group inline-flex items-center gap-2 font-display font-bold text-sm ${focusRing}`} style={{ color: CREAM }}>
                            {c.list.more}
                            <ArrowRight size={16} aria-hidden="true" className="motion-safe:transition-transform group-hover:translate-x-1" />
                            <span className="sr-only">: {title}</span>
                          </Link>
                        </div>

                        {open && (
                          <div id={`service-details-${s.slug}`} className="grid sm:grid-cols-2 gap-x-8 gap-y-8 mt-8">
                            <DetailList label={c.list.features} items={tr(s.features, lang)} accent={accent} />
                            <DetailList label={c.list.benefits} items={tr(s.benefits, lang)} accent={accent} />
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ═════════ CLOSING CTA ═════════ */}
      <section aria-labelledby="services-cta-title" className="relative overflow-hidden" style={{ background: DARK }}>
        <Image src={IMAGES.cta} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,18,8,1) 0%, rgba(13,9,3,0.88) 35%, rgba(13,9,3,0.94) 100%)' }} />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 pt-8" style={{ borderTop: `1px solid ${RULE}` }}>
            <div className="lg:col-span-7">
              <span className="font-display font-bold text-sm" style={{ color: AMBER, letterSpacing: '0.04em' }}>{c.cta.label}</span>
              <h2 id="services-cta-title" className="font-display font-extrabold mt-3" style={{ fontSize: 'clamp(2.5rem, 6.5vw, 5rem)', lineHeight: 0.98, color: CREAM, letterSpacing: '-0.035em' }}>
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
                <a href={CONTACT.phoneHref} className={btnGhost} style={btnGhostStyle}>{c.cta.secondary}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesOverview;