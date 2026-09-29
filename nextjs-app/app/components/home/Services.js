'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Palette, Users, ShoppingCart, Share2, FileText, Globe,
  ArrowRight, MessageCircle,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// ── Design tokens ─────────────────────────────────────────────────────────────
const AMBER    = '#F59E0B';
const GOLD     = '#D4AF37';
const SURFACE  = '#1A1208';
const DARK     = '#0D0903';
const CREAM    = '#F5F0E8';
const MUTED    = 'rgba(245,240,232,0.72)';
const RULE     = 'rgba(245,240,232,0.16)';
const BORDER_S = 'rgba(245,158,11,0.35)';

const WHATSAPP_NUMBER = '255745787370';

// ── Subtle African pattern (kept quiet so the photography leads) ─────────────
const AfricanPattern = ({ id }) => (
  <svg
    width="100%" height="100%"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 pointer-events-none"
    style={{ opacity: 0.04 }}
    aria-hidden="true"
  >
    <defs>
      <pattern id={id} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        <polygon points="30,4 56,30 30,56 4,30" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
        <polygon points="30,16 44,30 30,44 16,30" fill="none" stroke="#D4AF37" strokeWidth="1" />
        <circle cx="30" cy="30" r="2.5" fill="#F59E0B" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${id})`} />
  </svg>
);

// ── Copy ──────────────────────────────────────────────────────────────────────
const copy = {
  en: {
    hero: {
      badge: "Tanzania's marketing & digital agency",
      title: ['Marketing that puts', 'your business', 'in front of Tanzania'],
      caption: 'Door-to-door marketing in the field',
      subtitle:
        'Branding, websites, social media and door-to-door sales from one local team. Trusted by 40+ businesses across the country.',
      primary: 'Chat on WhatsApp',
      secondary: 'See our services',
      imageAlt: 'Future Holders team talking with a customer at their door',
      stats: [
        { value: '50+', label: 'Websites delivered' },
        { value: '40+', label: 'Happy clients' },
        { value: '5+',  label: 'Years of experience' },
      ],
      whatsapp: "Hi! I'd like to start a project with Future Holders. Can you help?",
    },
    services: {
      label: 'What we offer',
      title: 'Our services',
      subtitle: 'Everything you need to build a brand, reach customers and win business, in one place.',
      explore: 'Explore',
      featured: 'Most requested',
    },
  },
  sw: {
    hero: {
      badge: 'Wakala wa masoko na kidijitali Tanzania',
      title: ['Masoko yanayoifikisha', 'biashara yako', 'kwa Watanzania'],
      caption: 'Uuzaji nyumba kwa nyumba uwandani',
      subtitle:
        'Utambulisho wa brand, tovuti, mitandao ya kijamii na mauzo ya nyumba kwa nyumba kutoka timu moja ya hapa nchini. Tumeaminiwa na biashara 40+ kote nchini.',
      primary: 'Ongea nasi WhatsApp',
      secondary: 'Tazama huduma zetu',
      imageAlt: 'Timu ya Future Holders ikizungumza na mteja mlangoni kwake',
      stats: [
        { value: '50+', label: 'Tovuti zilizotolewa' },
        { value: '40+', label: 'Wateja wenye furaha' },
        { value: '5+',  label: 'Miaka ya uzoefu' },
      ],
      whatsapp: 'Hujambo! Ningependa kuanza mradi na Future Holders. Je, mnaweza kunisaidia?',
    },
    services: {
      label: 'Tunachotoa',
      title: 'Huduma zetu',
      subtitle: 'Kila kitu unachohitaji kujenga brand, kufikia wateja na kushinda biashara, mahali pamoja.',
      explore: 'Chunguza',
      featured: 'Inayoombwa zaidi',
    },
  },
};

// ── Services data ─────────────────────────────────────────────────────────────
const services = [
  {
    id: 'web-development',
    title:    { en: 'Web Development', sw: 'Ujenzi wa Tovuti' },
    subtitle: { en: 'Websites that work for you', sw: 'Tovuti zinazokufanyia kazi' },
    description: {
      en: 'Fast, professional websites and online stores, built and launched in as little as 10 days.',
      sw: 'Tovuti na maduka ya mtandaoni ya kitaalamu na ya haraka, yanayojengwa na kuzinduliwa kwa siku 10 tu.',
    },
    icon: Globe,
    image: '/services/web.jpeg', // add this image to /public/services
    accent: AMBER,
    features: [
      { en: 'Business Websites', sw: 'Tovuti za Biashara' },
      { en: 'Online Stores',     sw: 'Maduka ya Mtandaoni' },
      { en: 'Fast Delivery',     sw: 'Utoaji wa Haraka' },
    ],
  },
  {
    id: 'branding',
    title:    { en: 'Branding & Identity', sw: 'Utambulisho wa Brand' },
    subtitle: { en: 'Build your unique brand', sw: 'Jenga utambulisho wako' },
    description: {
      en: 'Logo design, brand guidelines and visual identity that make your business easy to remember.',
      sw: 'Muundo wa logo, miongozo ya brand na utambulisho wa kuona unaofanya biashara yako ikumbukwe.',
    },
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1600132806608-231446b2e7af?auto=format&fit=crop&w=900&q=75',
    accent: GOLD,
  },
  {
    id: 'social-media',
    title:    { en: 'Social Media Management', sw: 'Usimamizi wa Mitandao' },
    subtitle: { en: 'Grow your online presence', sw: 'Kuza uwepo wako mtandaoni' },
    description: {
      en: 'Content, community and paid ads across every platform, with reports that show what is working.',
      sw: 'Maudhui, jumuiya na matangazo katika majukwaa yote, pamoja na ripoti zinazoonyesha kinachofanya kazi.',
    },
    icon: Share2,
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=900&q=75',
    accent: AMBER,
  },
  {
    id: 'door-to-door',
    title:    { en: 'Door-to-Door Marketing', sw: 'Uuzaji Nyumba kwa Nyumba' },
    subtitle: { en: 'Personal connection, real results', sw: 'Ukaribu wa binafsi, matokeo halisi' },
    description: {
      en: 'Face-to-face campaigns that build trust with your customers and turn conversations into sales.',
      sw: 'Kampeni za ana kwa ana zinazojenga imani kwa wateja wako na kugeuza mazungumzo kuwa mauzo.',
    },
    icon: Users,
    image: '/services/door.jpeg',
    accent: GOLD,
  },
  {
    id: 'tender-applications',
    title:    { en: 'Tender Applications', sw: 'Maombi ya Zabuni' },
    subtitle: { en: 'Win more contracts', sw: 'Shinda mikataba zaidi' },
    description: {
      en: 'Document preparation, compliance checks and proposal writing so your bids are complete and on time.',
      sw: 'Utayarishaji wa nyaraka, ukaguzi wa kufuata masharti na uandishi wa mapendekezo ili zabuni zako ziwe kamili na kwa wakati.',
    },
    icon: FileText,
    image: '/partners/nest.jpeg',
    accent: AMBER,
  },
  {
    id: 'equipment-sales',
    title:    { en: 'Equipment Sales', sw: 'Mauzo ya Vifaa' },
    subtitle: { en: 'Quality equipment solutions', sw: 'Suluhisho za vifaa vya ubora' },
    description: {
      en: 'Agricultural and business equipment with expert advice and technical support after you buy.',
      sw: 'Vifaa vya kilimo na biashara pamoja na ushauri wa kitaalamu na msaada wa kiufundi baada ya kununua.',
    },
    icon: ShoppingCart,
    image: '/images/equip.jpeg',
    accent: GOLD,
  },
];

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber';

// ── Component ─────────────────────────────────────────────────────────────────
const ServicesShowcase = () => {
  const { language } = useLanguage();
  const lang = language === 'sw' ? 'sw' : 'en';
  const c = copy[lang];
  const tr = (obj) => obj[lang] || obj.en;

  const openWhatsApp = (message) =>
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );

  const [featured, ...rest] = services;
  const FeaturedIcon = featured.icon;

  return (
    <div style={{ background: SURFACE }}>
      {/* ═════════════════ COVER: image first ═════════════════ */}
      <section aria-labelledby="hero-title">
        <div
  className="relative w-full overflow-hidden h-[clamp(34rem,90vh,54rem)] lg:h-auto lg:aspect-[16/9] lg:min-h-[36rem] lg:max-h-[60rem]"
  style={{ background: DARK }}
>
          <Image
            src="/services/door.jpeg"
            alt={c.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[60%_30%]"
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
                  {c.hero.badge}
                </span>
              </div>

              <h1
                id="hero-title"
                className="font-display font-extrabold max-w-5xl"
                style={{
                  fontSize: 'clamp(2.75rem, 8.5vw, 7rem)',
                  lineHeight: 0.96,
                  letterSpacing: '-0.035em',
                  color: CREAM,
                }}
              >
                {c.hero.title[0]}{' '}
                <span style={{ color: AMBER }}>{c.hero.title[1]}</span>{' '}
                {c.hero.title[2]}
              </h1>
            </div>
          </div>

          {/* Photo caption, magazine style */}
          <p
            className="hidden md:block absolute right-8 top-28 text-xs italic"
            style={{ color: 'rgba(245,240,232,0.8)', textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}
          >
            {c.hero.caption}
          </p>
        </div>

        {/* Standfirst + proof */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 pt-8" style={{ borderTop: `1px solid ${RULE}` }}>
            <div className="lg:col-span-6">
              <p className="leading-snug mb-8" style={{ color: CREAM, fontSize: 'clamp(1.15rem, 2vw, 1.5rem)' }}>
                {c.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => openWhatsApp(c.hero.whatsapp)}
                  className={`inline-flex items-center justify-center gap-2 rounded font-display font-extrabold text-sm transition-opacity hover:opacity-90 ${focusRing}`}
                  style={{ background: AMBER, color: DARK, padding: '1rem 1.75rem' }}
                >
                  <MessageCircle size={18} />
                  {c.hero.primary}
                </button>
                <a
                  href="#services"
                  className={`inline-flex items-center justify-center gap-2 rounded font-display font-bold text-sm transition-colors hover:bg-amber/10 ${focusRing}`}
                  style={{ border: `2px solid ${BORDER_S}`, color: AMBER, padding: '1rem 1.75rem' }}
                >
                  {c.hero.secondary}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <dl className="lg:col-span-5 lg:col-start-8 grid grid-cols-3">
              {c.hero.stats.map((s, i) => (
                <div
                  key={s.label}
                  className="px-4 first:pl-0 sm:px-6"
                  style={{ borderLeft: i === 0 ? 'none' : `1px solid ${RULE}` }}
                >
                  <dd
                    className="font-display font-extrabold leading-none"
                    style={{ color: CREAM, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em' }}
                  >
                    {s.value}
                  </dd>
                  <dt className="mt-2 text-sm leading-snug" style={{ color: MUTED }}>{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ═════════════════ SERVICES: editorial spread ═════════════════ */}
      <section
        id="services"
        aria-labelledby="services-title"
        className="relative overflow-hidden pb-24 scroll-mt-24"
      >
        <AfricanPattern id="svcPattern" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section head */}
          <div
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pt-8 mb-12"
            style={{ borderTop: `1px solid ${RULE}` }}
          >
            <div>
              <span className="font-display font-bold text-sm" style={{ color: AMBER, letterSpacing: '0.04em' }}>
                {c.services.label}
              </span>
              <h2
                id="services-title"
                className="font-display font-extrabold mt-3"
                style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4rem)', lineHeight: 1, color: CREAM, letterSpacing: '-0.03em' }}
              >
                {c.services.title}
              </h2>
            </div>
            <p className="leading-relaxed lg:max-w-sm" style={{ color: MUTED, fontSize: '1rem' }}>
              {c.services.subtitle}
            </p>
          </div>

          {/* Feature story */}
          <Link
            href={`/services/${featured.id}`}
            className={`group grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 lg:mb-20 ${focusRing}`}
          >
            <div className="relative lg:col-span-7 overflow-hidden rounded" style={{ aspectRatio: '16 / 10', background: DARK }}>
              <Image
                src={featured.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.03]"
              />
            </div>

            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-4" style={{ color: featured.accent }}>
                <FeaturedIcon size={18} />
                <span className="font-display font-bold text-sm">{c.services.featured}</span>
              </div>
              <h3
                className="font-display font-extrabold"
                style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3rem)', lineHeight: 1.02, color: CREAM, letterSpacing: '-0.025em' }}
              >
                {tr(featured.title)}
              </h3>
              <p className="font-display font-semibold mt-3" style={{ color: featured.accent, fontSize: '1rem' }}>
                {tr(featured.subtitle)}
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: MUTED, fontSize: '1.05rem' }}>
                {tr(featured.description)}
              </p>

              <ul className="mt-6" style={{ borderTop: `1px solid ${RULE}` }}>
                {featured.features.map((f, i) => (
                  <li
                    key={i}
                    className="py-3 text-sm font-semibold"
                    style={{ borderBottom: `1px solid ${RULE}`, color: CREAM }}
                  >
                    {tr(f)}
                  </li>
                ))}
              </ul>

              <span
                className="inline-flex items-center gap-2 mt-6 font-display font-bold text-sm"
                style={{ color: featured.accent }}
              >
                {c.services.explore}
                <ArrowRight size={16} className="motion-safe:transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          {/* Remaining stories */}
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {rest.map((svc) => {
              const Icon = svc.icon;
              return (
                <li key={svc.id}>
                  <Link
                    href={`/services/${svc.id}`}
                    className={`group block ${focusRing}`}
                  >
                    <div className="relative overflow-hidden rounded mb-5" style={{ aspectRatio: '4 / 3', background: DARK }}>
                      <Image
                        src={svc.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="pt-4" style={{ borderTop: `2px solid ${svc.accent}` }}>
                      <div className="flex items-center gap-2 mb-2" style={{ color: svc.accent }}>
                        <Icon size={16} />
                        <span className="font-display font-semibold text-sm">{tr(svc.subtitle)}</span>
                      </div>
                      <h3
                        className="font-display font-extrabold"
                        style={{ fontSize: '1.6rem', lineHeight: 1.08, color: CREAM, letterSpacing: '-0.02em' }}
                      >
                        {tr(svc.title)}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>
                        {tr(svc.description)}
                      </p>
                      <span
                        className="inline-flex items-center gap-2 mt-4 font-display font-bold text-sm"
                        style={{ color: svc.accent }}
                      >
                        {c.services.explore}
                        <ArrowRight size={16} className="motion-safe:transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ServicesShowcase;